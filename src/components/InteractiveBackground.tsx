import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colorType: "primary" | "accent";
  alpha: number;
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let ctx: CanvasRenderingContext2D | null = null;
    try {
      ctx = canvas.getContext("2d");
    } catch (e) {
      // Gracefully handle environments without canvas context support (e.g. jsdom in tests)
    }

    let animationId: number;
    let particles: Particle[] = [];
    let isMobile = window.innerWidth < 768;

    // Get theme colors from DOM
    let primaryColor = "#00f0ff";
    let accentColor = "#f59e0b";

    const updateThemeColors = () => {
      const styles = getComputedStyle(document.documentElement);
      primaryColor = styles.getPropertyValue("--color-primary").trim() || "#00f0ff";
      accentColor = styles.getPropertyValue("--color-accent").trim() || "#f59e0b";
    };

    updateThemeColors();

    // Helper to convert hex/rgba variables to rgb components for canvas alphas
    const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
      let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      const fullHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 0, g: 240, b: 255 }; // Default cyan
    };

    const setupCanvas = () => {
      isMobile = window.innerWidth < 768;
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      // Initialize particles based on screen size
      const count = isMobile ? 30 : Math.min(100, Math.floor(window.innerWidth / 15));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius: Math.random() * 1.5 + 0.8,
          colorType: Math.random() > 0.15 ? "primary" : "accent", // 85% primary, 15% accent
          alpha: Math.random() * 0.2 + 0.15,
        });
      }
    };

    setupCanvas();

    const render = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const mouse = mouseRef.current;
      const pColorRgb = hexToRgb(primaryColor);
      const aColorRgb = hexToRgb(accentColor);

      // 1. Update and offset particles under mouse gravity
      const processedParticles = particles.map((p) => {
        // Base movements
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls (boundary check)
        if (p.x < 0 || p.x > window.innerWidth) p.vx *= -1;
        if (p.y < 0 || p.y > window.innerHeight) p.vy *= -1;

        // Add soft clamping to keep inside boundaries
        if (p.x < 0) p.x = 0;
        if (p.x > window.innerWidth) p.x = window.innerWidth;
        if (p.y < 0) p.y = 0;
        if (p.y > window.innerHeight) p.y = window.innerHeight;

        // Calculate visual offset attraction towards mouse cursor
        let drawX = p.x;
        let drawY = p.y;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          const maxGravityDist = 180;

          if (dist < maxGravityDist) {
            // Apply a smooth magnetic pull offset (does not alter original speed vector permanently)
            const force = (maxGravityDist - dist) / maxGravityDist;
            drawX += (dx / dist) * force * 24;
            drawY += (dy / dist) * force * 24;
          }
        }

        return { ...p, drawX, drawY };
      });

      // 2. Draw lines between particles (Desktop only to conserve battery)
      if (!isMobile) {
        const lineMaxDist = 110;
        for (let i = 0; i < processedParticles.length; i++) {
          const pi = processedParticles[i];
          for (let j = i + 1; j < processedParticles.length; j++) {
            const pj = processedParticles[j];
            const dist = Math.hypot(pi.drawX - pj.drawX, pi.drawY - pj.drawY);

            if (dist < lineMaxDist) {
              const alpha = (1 - dist / lineMaxDist) * 0.06;
              ctx.beginPath();
              ctx.moveTo(pi.drawX, pi.drawY);
              ctx.lineTo(pj.drawX, pj.drawY);
              // Line color is transition based on particle colors
              const baseColor = pi.colorType === "accent" || pj.colorType === "accent" ? aColorRgb : pColorRgb;
              ctx.strokeStyle = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${alpha})`;
              ctx.lineWidth = 0.6;
              ctx.stroke();
            }
          }
        }
      }

      // 3. Draw lines connecting particles to the mouse (Desktop only)
      if (!isMobile && mouse.x !== null && mouse.y !== null) {
        const mouseLineMaxDist = 160;
        processedParticles.forEach((p) => {
          const dist = Math.hypot(p.drawX - mouse.x!, p.drawY - mouse.y!);
          if (dist < mouseLineMaxDist) {
            // Stronger glowing connection to the cursor
            const alpha = (1 - dist / mouseLineMaxDist) * 0.15;
            ctx.beginPath();
            ctx.moveTo(p.drawX, p.drawY);
            ctx.lineTo(mouse.x!, mouse.y!);
            const baseColor = p.colorType === "accent" ? aColorRgb : pColorRgb;
            ctx.strokeStyle = `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, ${alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        });
      }

      // 4. Draw particles
      processedParticles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.drawX, p.drawY, p.radius, 0, Math.PI * 2);
        const rgb = p.colorType === "accent" ? aColorRgb : pColorRgb;
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${p.alpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(render);
    };

    if (ctx) {
      animationId = requestAnimationFrame(render);
    }

    // Event handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const handleResize = () => {
      setupCanvas();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Periodically re-sync theme colors in case of changes
    const colorInterval = setInterval(updateThemeColors, 3000);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      clearInterval(colorInterval);
    };
  }, []);

  return <canvas ref={canvasRef} className="interactive-bg-canvas" aria-hidden="true" />;
}
