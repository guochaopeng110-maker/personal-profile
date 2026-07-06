import { useEffect, useRef, useState } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  PointLight,
  MeshBuilder,
  StandardMaterial,
  Color3,
  Vector3,
} from "@babylonjs/core";

interface HolographicAgentProps {
  isThinking?: boolean;
  isTalking?: boolean;
}

export function HolographicAgent({ isThinking = false, isTalking = false }: HolographicAgentProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    // Check WebGL availability to avoid crashes in jsdom/Vitest tests or old browsers
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
      } catch (e) {
        return false;
      }
    };

    if (!checkWebGL() || !canvasRef.current) {
      setUseFallback(true);
      return;
    }

    let engine: Engine | null = null;
    let scene: Scene | null = null;

    try {
      // 1. Initialize Babylon.js Engine & Scene
      engine = new Engine(canvasRef.current, true, { preserveDrawingBuffer: true, stencil: true });
      scene = new Scene(engine);
      scene.clearColor = new Color3(0.02, 0.04, 0.06).toColor4(0); // Transparent canvas

      // 2. Setup Camera
      const camera = new ArcRotateCamera(
        "camera",
        Math.PI / 2, // Alpha (rotation on XZ plane)
        Math.PI / 2, // Beta (rotation on Y plane)
        5,           // Distance
        Vector3.Zero(),
        scene
      );
      camera.minZ = 0.1;
      camera.maxZ = 100;

      // 3. Setup Lights (neon cyan and violet)
      const hemiLight = new HemisphericLight("hemiLight", new Vector3(0, 1, 0), scene);
      hemiLight.intensity = 0.4;
      hemiLight.groundColor = new Color3(0.05, 0.1, 0.2);

      const cyanPoint = new PointLight("cyanPoint", new Vector3(-2, 2, -2), scene);
      cyanPoint.diffuse = new Color3(0.0, 0.94, 1.0); // Neon Cyan
      cyanPoint.intensity = 1.5;

      const violetPoint = new PointLight("violetPoint", new Vector3(2, -2, 2), scene);
      violetPoint.diffuse = new Color3(0.74, 0.0, 1.0); // Neon Violet
      violetPoint.intensity = 1.0;

      // 4. Create Holographic Core Node (The "Head")
      const headAnchor = MeshBuilder.CreateBox("headAnchor", { size: 0.1 }, scene);
      headAnchor.isVisible = false; // Anchor for rotation

      // Core brain sphere
      const core = MeshBuilder.CreateSphere("core", { diameter: 1.2, segments: 16 }, scene);
      core.parent = headAnchor;
      
      const coreMat = new StandardMaterial("coreMat", scene);
      coreMat.diffuseColor = new Color3(0, 0.2, 0.3);
      coreMat.emissiveColor = new Color3(0, 0.47, 0.53); // Deep Cyan glow
      coreMat.specularColor = new Color3(0.5, 0.5, 0.5);
      coreMat.alpha = 0.85;
      core.material = coreMat;

      // Outer Ring 1 (Vertical rotation)
      const ring1 = MeshBuilder.CreateTorus("ring1", { diameter: 2.0, thickness: 0.04, tessellation: 24 }, scene);
      ring1.parent = headAnchor;
      
      const ring1Mat = new StandardMaterial("ring1Mat", scene);
      ring1Mat.emissiveColor = new Color3(0.0, 0.94, 1.0); // Cyan glow
      ring1Mat.wireframe = true;
      ring1.material = ring1Mat;

      // Outer Ring 2 (Horizontal rotation)
      const ring2 = MeshBuilder.CreateTorus("ring2", { diameter: 1.7, thickness: 0.03, tessellation: 24 }, scene);
      ring2.parent = headAnchor;
      ring2.rotation.x = Math.PI / 2;
      
      const ring2Mat = new StandardMaterial("ring2Mat", scene);
      ring2Mat.emissiveColor = new Color3(0.74, 0.0, 1.0); // Purple glow
      ring2Mat.wireframe = true;
      ring2.material = ring2Mat;

      // Eyes (Floating glowing panels)
      const eyeL = MeshBuilder.CreateSphere("eyeL", { diameter: 0.2, segments: 8 }, scene);
      eyeL.parent = headAnchor;
      eyeL.position = new Vector3(-0.35, 0.15, -0.55);
      
      const eyeR = MeshBuilder.CreateSphere("eyeR", { diameter: 0.2, segments: 8 }, scene);
      eyeR.parent = headAnchor;
      eyeR.position = new Vector3(0.35, 0.15, -0.55);

      const eyeMat = new StandardMaterial("eyeMat", scene);
      eyeMat.emissiveColor = new Color3(1.0, 0.94, 0.0); // Glowing amber eyes
      eyeMat.diffuseColor = new Color3(1, 0.9, 0);
      eyeL.material = eyeMat;
      eyeR.material = eyeMat;

      // 5. Setup Cursor Tracking Logic
      let targetRotationX = 0;
      let targetRotationY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        // Normalize coordinates to [-0.5, 0.5]
        const normX = (e.clientX / width) - 0.5;
        const normY = (e.clientY / height) - 0.5;

        // Map mouse movements to head rotation limits
        targetRotationY = normX * 0.8; // Yaw
        targetRotationX = normY * 0.5; // Pitch
      };

      window.addEventListener("mousemove", handleMouseMove);

      // 6. Animation Render Loop
      let time = 0;
      engine.runRenderLoop(() => {
        time += 0.015;

        // Smoothly interpolate head rotation towards the cursor target
        headAnchor.rotation.y += (targetRotationY - headAnchor.rotation.y) * 0.1;
        headAnchor.rotation.x += (targetRotationX - headAnchor.rotation.x) * 0.1;

        // Idle vertical float (floating bobbing)
        headAnchor.position.y = Math.sin(time * 2) * 0.06;

        // Rotate rings around the head anchor
        ring1.rotation.y += isThinking ? 0.08 : 0.01;
        ring2.rotation.x += isThinking ? -0.06 : -0.008;

        // Talking mouth-sync simulation (scale core based on noise/sine)
        if (isTalking) {
          const talkFactor = 1.0 + Math.abs(Math.sin(time * 25)) * 0.12 + Math.random() * 0.03;
          core.scaling = new Vector3(talkFactor, talkFactor, talkFactor);
          // Boost emissive color brightness when talking
          coreMat.emissiveColor = new Color3(0, 0.65 + Math.sin(time * 25) * 0.15, 0.75);
        } else {
          core.scaling = Vector3.Lerp(core.scaling, new Vector3(1, 1, 1), 0.1);
          coreMat.emissiveColor = new Color3(0, 0.47, 0.53);
        }

        // Pulse the eye brightness when thinking
        if (isThinking) {
          eyeMat.emissiveColor = new Color3(1.0, 0.7 + Math.sin(time * 15) * 0.3, 0.0);
        } else {
          eyeMat.emissiveColor = new Color3(1.0, 0.94, 0.0);
        }

        scene?.render();
      });

      // 7. Handle Resize
      const resizeObserver = new ResizeObserver(() => {
        engine?.resize();
      });
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      // Cleanup on unmount
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        resizeObserver.disconnect();
        engine?.dispose();
      };
    } catch (err) {
      console.warn("Failed to initialize Babylon.js. Falling back to 2D.", err);
      setUseFallback(true);
      if (engine) engine.dispose();
    }
  }, [isThinking, isTalking]);

  if (useFallback) {
    // 2D SVG/CSS Glassmorphic Pulsing holographic fallback for tests/low-spec devices
    return (
      <div 
        className="fallback-agent-container" 
        data-testid="chatbot-fallback-agent"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.03) 0%, transparent 70%)"
        }}
      >
        <svg className={`fallback-svg ${isThinking ? "thinking" : ""} ${isTalking ? "talking" : ""}`} width="80" height="80" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="28" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.4" />
          <circle cx="50" cy="50" r="24" fill="none" stroke="var(--color-accent)" strokeWidth="2" opacity="0.6" className="outer-pulse" />
          <circle cx="50" cy="50" r="16" fill="var(--color-primary-dark)" stroke="var(--color-primary)" strokeWidth="2" className="inner-pulse" />
          <circle cx="43" cy="47" r="2" fill="var(--color-accent-light)" className="eye-pulse" />
          <circle cx="57" cy="47" r="2" fill="var(--color-accent-light)" className="eye-pulse" />
          {isTalking && (
            <path d="M 38 65 Q 50 72 62 65" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%", overflow: "hidden", position: "relative" }}>
      <canvas 
        ref={canvasRef} 
        style={{ width: "100%", height: "100%", display: "block", outline: "none", cursor: "grab" }} 
      />
    </div>
  );
}
