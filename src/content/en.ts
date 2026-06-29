import type { Theme } from "./types";

export const content = {
  hero: {
    eyebrow: "Guochao Peng",
    title: "AI Agent / AI Application / Full-Stack Engineer",
    lede: "Focused on AI applications, agents, and full-stack delivery, with the ability to integrate Web3D, VR, multimedia, and industrial system experience into production-ready product and engineering capabilities.",
    supporting: "The hero section directly addresses role-fit and delivery capabilities, guiding recruiters into project themes, experiences, and details, instead of throwing you into a generic portfolio page.",
    actions: {
      resume: "Download PDF Resume",
      github: "GitHub",
      email: "Email"
    },
    hiringSignalsTitle: "Hiring Snapshot",
    hiringSignals: [
      "Current core positioning: AI Agent / AI Application / Full-Stack Developer.",
      "Core advantage is not presenting concepts, but integrating complex tech into deliverable outcomes.",
      "Past VR, Web3D, and industrial system experiences form the differentiated depth of current AI and engineering capabilities."
    ],
    pageMeta: {
      lang: 'en',
      documentTitle: 'Guochao Peng | AI Agent / AI Application / Full-Stack Engineer',
    },
  },
  narrative: {
    eyebrow: "Narrative Path",
    title: "Why this site is built for recruiting",
    cards: [
      {
        title: "Assess role fit first, then decide whether to dive deeper into projects and experiences.",
        p: "The homepage narrative presents target roles, core value, and contact entry points, allowing recruiters to make a decision in seconds without opening a PDF resume first."
      },
      {
        title: "Evolving from industrial systems, VR, and Web3D to AI applications and full-stack engineering is a path of continuous capability evolution, not scattered directions.",
        p: "This evolution path explains why the current positioning carries both cutting-edge sense and real-world engineering credibility, distinguishing from candidates who only have demos and lack complex systems experience."
      }
    ]
  },
  timeline: {
    eyebrow: "Career Journey",
    title: "Professional Timeline",
    intro: "From low-level industrial control and VR/Web3D interaction to AI agents and full-stack engineering, my journey represents a coherent capability evolution: treating systems with industrial-grade rigor, and empowering business delivery with cutting-edge tech.",
    items: [
      {
        period: "2021 - Present",
        company: "Changsha Xingsheng Youxuan Co., Ltd.",
        role: "DCS Equipment Control System Engineer / Full-Stack Developer",
        contributions: [
          "Responsible for DCS (Distributed Control System) and PLC integration, achieving high-concurrency stable orchestration and real-world control of heterogeneous hardware.",
          "Developed embedded device integrations and underlying communication modules, connecting industrial-grade hardware and upper business systems with full-stack data pipelines.",
          "Explored AI agent and workflow applications in complex industrial scenarios such as warehouse logistics decision-making and anomaly diagnosis."
        ]
      },
      {
        period: "2015 - 2021",
        company: "Tiandu (Xiamen) Technology Co., Ltd.",
        role: "Senior VR / Web3D / C++ Engineer",
        contributions: [
          "Developed high-fidelity simulation systems and interactive VR software based on C++, Qt, and Unity, delivering multiple highly reliable industrial/military simulation projects.",
          "Led the R&D of Web3D engines and the exm-player-web3d player, utilizing Babylon.js to achieve lightweight, high-precision browser-side 3D spatial interactions.",
          "Designed interactive video and multimedia orchestration systems, seamlessly integrating underlying audio/video streams with front-end high-frequency interactions to support rich multimedia experiences."
        ]
      }
    ]
  },
  skills: {
    eyebrow: "Capability Matrix",
    title: "Skills Organized by Capability Domain",
    intro: "Avoiding undifferentiated tool checklists. The value of a tech stack lies in solving specific domain engineering problems. Here are the core capability domains I have accumulated across different evolution stages:",
    domains: [
      {
        name: "AI Agents & AI Applications",
        description: "Transforming cutting-edge LLM capabilities into deliverable business productivity",
        tools: ["LLM Agents", "LangChain / LangGraph", "Workflow Automation", "Prompt Engineering", "RAG & Vector DB"]
      },
      {
        name: "Full-Stack & Engineering Delivery",
        description: "Full-stack design and agile delivery of high-concurrency, high-availability business systems",
        tools: ["Node.js / TypeScript", "React / Next.js", "RESTful / GraphQL", "Docker & CI/CD", "System Architecture"]
      },
      {
        name: "Interactive Video & Multimedia",
        description: "R&D of audio/video streaming, multimedia orchestration, and high-frequency interaction systems",
        tools: ["Streaming Media", "Video Encoding/Decoding", "FFmpeg", "Interactive Video Orchestration", "WebRTC"]
      },
      {
        name: "Web3D / VR / Spatial Computing",
        description: "Cross-platform lightweight 3D spatial interaction and immersive experience development",
        tools: ["Babylon.js", "Three.js", "Unity 3D", "PICO VR SDK", "Shader / WebGL"]
      },
      {
        name: "Underlying Systems & Industrial Software",
        description: "Highly reliable industrial control software and heterogeneous equipment orchestration system",
        tools: ["C / C++", "Qt Framework", "DCS / PLC Integration", "Embedded Communication", "Hardware Orchestration"]
      }
    ]
  },
  themes: {
    eyebrow: "Project Themes",
    title: "Featured Project Themes",
    intro: "If you have already confirmed the job direction, you can drill down from here to check the case studies that best represent my current capability structure.",
    viewDetail: "View Details",
    backToHome: "Back to Home",
    unknownTheme: {
      eyebrow: "Unknown Theme",
      title: "Project Theme Not Found",
      summary: "The current skeleton already supports detail routing, and structured theme data can be expanded further in the future."
    },
    detailPage: {
      eyebrow: "Theme Detail",
      labels: {
        problem: "Background & Problem",
        role: "My Role",
        solution: "Solution & Architecture",
        challenges: "Key Challenges",
        results: "Project Results",
        judgment: "Engineering Judgment",
        repo: "Repository",
        workflow: "Workflow Pipeline & Roles",
        repos: "Related Repositories",
        visuals: "Project Visuals"
      }
    },
    items: {
      "ai-agents": {
        title: "AI Agents & AI Applications",
        summary: "Turn LLM capabilities into agents and workflows that real business systems can call — not toys that only run demos.",
        problem: "In enterprise contexts, LLMs are often stuck at the prompt and demo stage: workflows break, results are unstable, and integration with existing systems is expensive, so teams struggle to bring model capability into daily operations.",
        role: "Owner and developer for AI applications and agents, driving end-to-end work from business decomposition, prompt engineering, workflow orchestration, and system integration to production operation.",
        solution: "Build observable workflows on top of LLM agents and frameworks such as LangChain / LangGraph. Use RAG and vector databases to inject business knowledge, and pair structured output with human-in-the-loop fallbacks so model output can flow into downstream business systems.",
        challenges: [
          "Result stability: under multi-turn and external tool-call scenarios, keep hallucinations and failure paths inside recoverable boundaries.",
          "Business integration: embed model capabilities into existing Node.js / full-stack pipelines instead of a parallel, disconnected system."
        ],
        results: [
          "Reusable agent workflow templates that can be applied to multiple internal business scenarios.",
          "Model output upgraded from one-off demos to a capability that business systems can call reliably."
        ],
        judgment: "The value of AI applications is the engineering closed loop, not a single impressive answer; running the business flow matters more than any single point capability.",
        highlights: [
          "Agent + workflow in production",
          "Callable from business systems",
          "Engineering, not one-off demos"
        ],
        repos: [
          {
            label: "ai-agent-sandbox",
            url: "https://github.com/guochaopeng110-maker/ai-agent-sandbox",
            description: "Agent & RAG Sandbox: Hardened agentic patterns (ReAct, Plan-and-Solve) containing history of prompt evolution and RAG recall optimization.",
            role: "Tech Accumulation: Agent design & core pipeline experiments"
          },
          {
            label: "dcs-anomaly-agent",
            url: "https://github.com/guochaopeng110-maker/dcs-anomaly-agent",
            description: "DCS Anomaly Diagnosis Agent: Combines industrial Distributed Control System alarms with RAG manual retrieval to assist on-site diagnostics.",
            role: "Production App: Intelligent agent landing in industrial hardware environments"
          }
        ],
        workflow: {
          title: "Workflow Pipeline & Roles",
          steps: [
            {
              name: "Anomaly Perception & Intent Routing",
              description: "Receive anomaly alerts from the DCS equipment control system or natural language input from engineers, and route them to corresponding diagnostic paths via LLM intent recognition.",
              role: "Real-time Alarms / Natural Language -> Intent Recognition & Semantic Matching -> Diagnostic Path Determination"
            },
            {
              name: "Knowledge Base RAG Retrieval",
              description: "Retrieve relevant troubleshooting steps from local industrial knowledge bases and equipment maintenance manuals using vector database retrieval and semantic rerankers.",
              role: "Failure Signatures -> Vector Retrieval & Semantic Reranking -> Failure Reference Context"
            },
            {
              name: "ReAct Decision & Tool Invocation",
              description: "The agent leverages the ReAct (Reasoning and Acting) paradigm to plan diagnostic steps and call tool APIs or query device status for real-time operating metrics.",
              role: "Reference Context -> Multi-step Reasoning Planning & Tool APIs -> Diagnostic Data Details"
            },
            {
              name: "Structured Output & Human-in-the-Loop",
              description: "Compile diagnostic conclusions, recovery actions, and reasoning chains into structured JSON for field engineers; trigger human review if confidence falls below threshold.",
              role: "Diagnostic Data -> Structured JSON Generation / Human Audit -> Final Diagnostic Report Delivery"
            }
          ]
        },
        visuals: [
          {
            title: "AI Agent Architecture Diagram",
            description: "Closed-loop control and analysis architecture of the industrial anomaly diagnostic Agent based on Sense-Think-Act.",
            type: "diagram",
            schematic: [
              { label: "SENSE", value: "DCS alarm listener, intent router, real-time status APIs", class: "script-bar" },
              { label: "THINK", value: "LangGraph state machine decisions, RAG manual vector search, ReAct reasoning & planning", class: "video-bar" },
              { label: "ACT", value: "Diagnostic tool API calls, structured JSON recommendation output, human fallback flows", class: "audio-bar" }
            ]
          }
        ]
      },
      "ai-video-workflow": {
        title: "AI Short Drama / Manga Drama / Video Generation Workflow",
        summary: "Stitch script, storyboard, generation and editing into a reusable AI video production workflow that coordinates multiple repositories around one theme.",
        problem: "AI video generation is often trapped in single-tool calls: script, storyboard, voice, and editing are scattered across repositories and scripts. Solo work is possible, but engineering reuse is hard and a team cannot scale it into a reusable production line.",
        role: "Integrator across multiple related repositories, abstracting AI generation, templated storyboards and post-stitching into a unified workflow, and accumulating reusable assets and scripts.",
        solution: "Use the workflow as the backbone and orchestrate script generation, storyboard templates, image/video generation nodes, and post-stitching so creators can focus on content decisions instead of tool plumbing.",
        challenges: [
          "Multi-repository coordination: keep script, template and generation nodes version- and dependency-consistent without a unified CI.",
          "Missing-asset fallback: when generation fails or assets are missing, structurally fall back to template output so the pipeline never stalls."
        ],
        results: [
          "Multiple related repositories unified into one themed AI video production line.",
          "An extensible engineering backbone established for templated short drama / manga drama production."
        ],
        judgment: "Multi-repository projects need a shared theme to tie them together, otherwise the highlights are diluted by the repo list.",
        highlights: [
          "Multi-repo unified theme",
          "Workflow-driven production",
          "Graceful asset fallback"
        ],
        repos: [
          {
            label: "prompt-to-screenplay",
            url: "https://github.com/guochaopeng110-maker/prompt-to-screenplay",
            description: "Script & Shot Prompt Editor: Driven by LLMs to automatically generate structured scenes and storyboard descriptions.",
            role: "Workflow Upstream: Creative Translation & Storyboard Design"
          },
          {
            label: "storyboard-diffuser",
            url: "https://github.com/guochaopeng110-maker/storyboard-diffuser",
            description: "Storyboard Asset Generator: Multi-threaded batch generation and rate-limit scheduling based on SD & Kling API nodes.",
            role: "Workflow Midstream: Automated Rendering of Visual Assets"
          },
          {
            label: "ffmpeg-stitcher-orchestrator",
            url: "https://github.com/guochaopeng110-maker/ffmpeg-stitcher-orchestrator",
            description: "Multimedia Synthesis & Editing Engine: Uses JSON configuration to orchestrate multi-track timeline rendering, combining voice, music, and clips.",
            role: "Workflow Downstream: Asset Assembly & Automated Post-Processing"
          }
        ],
        workflow: {
          title: "Workflow Pipeline & Roles",
          steps: [
            {
              name: "Script Generation",
              description: "Use LLMs to generate structured screenplays, character settings, and shot descriptions from a theme.",
              role: "Theme Input -> LLM Script Generation -> Storyboard Outline JSON"
            },
            {
              name: "Asset Generation",
              description: "Parse storyboard outlines and call SD / Kling nodes to render image and video sequences in batches.",
              role: "Outline JSON -> Render Video Nodes -> Multimedia Asset Library"
            },
            {
              name: "Synthesis & Editing",
              description: "Integrate TTS voiceover, background music, and generated clips using FFmpeg for timeline stitching and SRT subtitles.",
              role: "Asset Library + Voiceover -> FFmpeg Post-Production -> Final Short Video"
            }
          ]
        },
        visuals: [
          {
            title: "Workflow Diagram",
            description: "Automated pipeline for AI video generation from creative script to storyboard and final editing.",
            type: "diagram"
          }
        ]
      },
      "web3d-vr": {
        title: "Web3D / Babylon.js + Unity + PICO VR",
        summary: "From browser 3D interaction to Unity + PICO VR immersive engineering, accumulated as a cross-platform 3D spatial interaction and simulation capability.",
        problem: "3D projects often end up as one-off demos: the scene is flashy but lacks an interaction architecture, portability to VR lacks modularity, and performance and precision are hard to balance — teams reinvent the wheel every time.",
        role: "Core engineer for the Web3D engine and VR simulation, leading the architecture and implementation of the exm-player-web3d player and several high-fidelity / interactive VR projects.",
        solution: "Use Babylon.js as a reusable browser 3D engine layer that unifies scene, interaction and assets. Use Unity + PICO VR SDK for immersive industrial / simulation scenarios, keeping the structure consistent across stacks.",
        challenges: [
          "Cross-platform consistency: keep interaction semantics aligned between browser, mobile and VR headsets, instead of writing a separate stack per platform.",
          "Performance vs. precision: keep an interactive frame rate on low-end devices while preserving physical and geometric fidelity for high-precision simulation."
        ],
        results: [
          "Delivered several highly reliable industrial / military-grade simulation and VR projects.",
          "Established a reusable Web3D engine and VR engineering baseline for later projects."
        ],
        judgment: "The moat of 3D capability is the interaction architecture and the reusable engine, not a single flashy demo.",
        highlights: [
          "Cross-platform 3D interaction",
          "Babylon.js + Unity + PICO VR",
          "Reusable engineering baseline"
        ],
        repos: [
          { label: "exm-player-web3d", url: "https://github.com/guochaopeng110-maker/exm-player-web3d", description: "Lightweight browser 3D spatial interactive player based on Babylon.js, supporting multiple 3D formats and high-frequency interaction actions.", role: "Core Developer: Interactive engine and rendering pipeline design" },
          { label: "pico-vr-simulation", url: "https://github.com/guochaopeng110-maker/pico-vr-simulation", description: "Immersive industrial interaction simulation project based on Unity and PICO VR SDK, providing high-precision collision and physical feedback.", role: "VR System Architect: Device driver integration and controller interactive semantic design" }
        ],
        workflow: {
          title: "3D Interaction & Simulation Engineering Pipeline",
          steps: [
            {
              name: "Asset Optimization",
              description: "Use DCC software to decimate 3D meshes, merge Draw Calls, and bake materials, exporting efficient glTF/GLB formats.",
              role: "Original 3D Assets -> Mesh Decimation & DrawCall Optimization -> Production glTF/GLB"
            },
            {
              name: "Cross-Platform Integration",
              description: "Develop browser interaction logic with Babylon.js, or configure physical collisions and VR controller input in Unity.",
              role: "Optimized Assets -> Babylon.js Orchestration / Unity VR Config -> Core Interaction Layer"
            },
            {
              name: "Performance Tuning",
              description: "Implement occlusion culling and WebGL/WebGPU tuning on Web, and Foveated Rendering in VR to secure stable frame rates.",
              role: "Core Interaction Layer -> Cross-Platform Rendering Tuning & FPS Monitor -> Smooth Interactive Experience"
            }
          ]
        },
        visuals: [
          {
            title: "3D & VR Spatial Computing Architecture Diagram",
            description: "A unified 3D interaction architecture design bridging lightweight Web3D (Babylon.js) and immersive VR (Unity).",
            type: "diagram",
            schematic: [
              { label: "DCC / OPT", value: "Decimation, DrawCall batching, texture baking & glTF export", class: "dcc-bar" },
              { label: "WEB3D", value: "exm-player-web3d interactive logic, lighting & WebGL rendering", class: "web3d-bar" },
              { label: "VR HMD", value: "Unity + PICO VR SDK physics, controller interaction & driver integration", class: "vr-bar" }
            ]
          }
        ]
      },
      "cargo-ship-manage": {
        title: "CargoShipManage Business System",
        summary: "A full-stack business system for cargo shipping management — from business modeling to high-availability delivery, showing the engineering trade-offs of a real product project.",
        problem: "Cargo shipping management involves multi-role collaboration, complex state transitions and high-concurrency business writes. Without complete product experience, teams often build a feature pile that is hard to use, hard to maintain and hard to extend.",
        role: "Core full-stack developer, leading the engineering build of the system from business modeling and API design to front- and back-end implementation and deployment operations.",
        solution: "Refactored using a Node.js + TypeScript + React/Next.js full-stack architecture with Domain-Driven Design (DDD) to split core modules, utilizing asynchronous message queues for decoupling, and Docker/Jenkins CI/CD for gray releases to build a highly available and extensible delivery pipeline.",
        challenges: [
          "Business modeling: abstract multi-role collaboration and complex transitions into cohesive state machines to avoid logic degradation into a stack of forms.",
          "Maintainability: enforce strict layered architecture to limit module coupling under high-frequency iterations, keeping maintenance costs in check.",
          "Concurrency control: design Redis-based distributed locks and database optimistic locking for high-concurrency ship scheduling and booking write scenarios."
        ],
        results: [
          "Delivered an industrial-grade cargo shipping management system covering multi-role collaboration.",
          "Reduced typical scheduling processing latency by 40% under real operations, enabling high-throughput writes.",
          "Achieved over 75% test coverage for core code, establishing a sustainable balance between business and engineering complexity."
        ],
        judgment: "The value of a business system project is \"runs reliably and keeps evolving\", not one fancy feature.",
        highlights: [
          "Full-stack business system",
          "Business modeling + engineering trade-offs",
          "Gray-release delivery pipeline"
        ],
        repo: {
          label: "GitHub Profile",
          url: "https://github.com/guochaopeng110-maker"
        }
      },
      "industrial-systems": {
        title: "Underlying Systems & Industrial Software",
        summary: "Capability hardened in DCS / PLC heterogeneous hardware and high-reliability industrial scenarios — the engineering bedrock of the current AI and full-stack work.",
        problem: "Industrial scenarios demand high stability, real-time behavior and heterogeneous device compatibility from the system. Off-the-shelf generic software usually does not survive the plant floor, so the team needs both low-level skills and full delivery ability.",
        role: "As DCS equipment control system engineer and underlying communication module developer, responsible for heterogeneous device integration, embedded communication links and bridging upper-layer business systems.",
        solution: "Build high-reliability industrial control and simulation software on C / C++ and Qt, abstracting a unified device protocol at the DCS / PLC integration layer so that upper-layer business systems can call industrial device capabilities uniformly.",
        challenges: [
          "Heterogeneous compatibility: build a stable, usable unified abstraction across multi-vendor, multi-model industrial devices.",
          "Stability first: on the plant floor, availability and recoverability outrank any \"sexy\" feature."
        ],
        results: [
          "Delivered multiple high-reliability industrial / military-grade control and simulation systems.",
          "Established a reusable industrial device abstraction and communication baseline for upper-layer business systems."
        ],
        judgment: "The biggest value of industrial-grade experience is \"treating a system as a system\" — and that backbone decides the engineering rigor of subsequent AI and full-stack delivery.",
        highlights: [
          "C / C++ + Qt",
          "DCS / PLC heterogeneous integration",
          "Industrial-grade stability"
        ],
        repo: {
          label: "GitHub Profile",
          url: "https://github.com/guochaopeng110-maker"
        }
      }
    }
  },
  notFound: {
    eyebrow: "404",
    title: "Page Not Found",
    p: "This basic skeleton has reserved a 404 page to gracefully handle abnormal paths after GitHub Pages deployment.",
    backToHome: "Back to Home"
  }
};


