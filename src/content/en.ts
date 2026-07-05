import type { Theme } from "./types";

export const content = {
  hero: {
    eyebrow: "Guochao Peng",
    title: "AI Agent / AI Application / Full-Stack Engineer",
    lede: "Focused on AI applications, agents, and full-stack delivery, with the ability to integrate Web3D, VR, multimedia, and industrial system experience into production-ready product and engineering capabilities.",
    supporting: "Combining the rigor of industrial control systems with the intuitive interaction of Web3D/VR spatial computing to build highly stable AI agents and full-stack applications that bridge digital and physical worlds.",
    actions: {
      resume: "Download PDF Resume",
      github: "GitHub",
      email: "Email"
    },
    hiringSignalsTitle: "Core Value",
    hiringSignals: [
      "Adhering to the 'everything-is-a-system' philosophy, focusing on orchestrating and shipping robust multi-agent workflows.",
      "Rejecting toy-like single-point demos; delivering observable, fault-tolerant production-ready AI feedback loops.",
      "Differentiated by deep roots in industrial DCS real-time control, Web3D/VR rendering engines, and interactive video technologies."
    ],
    pageMeta: {
      lang: 'en',
      documentTitle: 'Guochao Peng | AI Agent / AI Application / Full-Stack Engineer',
    },
  },
  narrative: {
    eyebrow: "Evolution Path",
    title: "Evolution: From Deterministic Control to Intelligent Emergence",
    cards: [
      {
        title: "Deterministic Control & System Integration in the Physical World",
        p: "Rigorous engineering standards accumulated in industrial DCS control, PLC communication, and high-fidelity VR simulation guide me in designing state machines, error recovery, and resource management for AI workflows."
      },
      {
        title: "Natural Progression of Multi-Dimensional Interaction & Full-Stack Engineering",
        p: "From low-level hardware control to browser-side Babylon.js 3D rendering and LLM-driven multimedia workflows, this continuous evolution empowers me with cross-domain architecture and end-to-end delivery."
      },
      {
        title: "Engineering Closed Loop of AI Agents & Intelligence Emergence",
        p: "Combining the rigor of industrial control state machines with the emergent intelligence of LLMs to build production-grade AI applications and multi-agent pipelines, evolving from deterministic control to autonomous decision-making."
      }
    ]
  },
  timeline: {
    eyebrow: "Career Journey",
    title: "Professional Timeline",
    intro: "From low-level industrial control and VR/Web3D interaction to AI agents and full-stack engineering, my journey represents a coherent capability evolution: treating systems with industrial-grade rigor, and empowering business delivery with cutting-edge tech.",
    items: [
      {
        period: "2024 - Present",
        company: "Tiandu (Xiamen) Technology Co., Ltd.",
        role: "AI Agent / AI Application / Full-Stack Lead",
        contributions: [
          "Led the R&D of TDuMAIC (MAIC-AI-Classroom) multi-agent interactive classroom platform, published academic paper in JCST'26 as first author, code open-sourced on GitHub.",
          "Designed multi-agent state machines and intent routing architecture, integrated OpenClaw protocol, supporting Feishu, Slack and 20+ chat apps to generate AI classrooms in one click.",
          "Built multi-modal AI short drama/manga generation workflows, independently developed a Python-based CLI Agent harness (ai-agent-engineering-journey) modeled after Claude Code."
        ]
      },
      {
        period: "2023 - 2024",
        company: "Tiandu (Xiamen) Technology Co., Ltd.",
        role: "Senior Full-Stack Engineer",
        contributions: [
          "Responsible for Web3D and VR spatial computing technology integration and product development, leading the rendering and interaction pipeline design of exm-player-web3d.",
          "Developed interactive-video-playground engine, leveraging React 19 and Shaka Player dual-instance alternating pre-stitching architecture, eliminating MP4 transition black-screens.",
          "Engineered building-stared-navigator-pico gaze interaction system using PICO Unity SDK, completing highly reliable industrial simulation VR deployments."
        ]
      },
      {
        period: "2021 - 2023",
        company: "Changsha Xingsheng Youxuan Co., Ltd.",
        role: "DCS Equipment Control System Engineer / Full-Stack Developer",
        contributions: [
          "Responsible for industrial warehouse DCS and PLC integration, building heterogeneous hardware scheduling and communication control buses based on C++/Qt.",
          "Applied Redis distributed locks and optimistic locking concurrency control mechanisms to resolve write conflicts under high-concurrency device scheduling scenarios, ensuring real-time reliability.",
          "Connected embedded devices with business databases, exploring rule-engine and decision-planning anomaly diagnosis logic in logistics warehousing."
        ]
      },
      {
        period: "2015 - 2021",
        company: "Tiandu (Xiamen) Technology Co., Ltd.",
        role: "Senior VR / Web3D / C++ Engineer",
        contributions: [
          "Developed high-fidelity simulation systems and interactive VR software based on C++, Qt, and Unity, delivering multiple highly reliable industrial/military simulation projects.",
          "Led the R&D of Web3D engines, utilizing Babylon.js to achieve lightweight, high-precision browser-side 3D spatial interactions.",
          "Designed early interactive video and multimedia orchestration systems, integrating underlying audio/video streams with front-end interactions for rich multimedia experiences."
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
    intro: "From large-scale full-stack business systems to LLM workflow orchestration, the following themes represent core case studies built around interaction, control, and intelligence.",
    viewDetail: "View Details",
    backToHome: "Back to Home",
    unknownTheme: {
      eyebrow: "Unknown Theme",
      title: "Project Theme Not Found",
      summary: "This project theme is currently not configured or has been offline. You can return to the homepage to browse other active themes."
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
        summary: "Design and develop multi-agent collaboration systems, local CLI Agent harnesses, and secure execution sandboxes for production-grade AI delivery.",
        problem: "Enterprise LLM landing often struggles with process non-determinism and state complexity, while highly autonomous CLI agents face severe security risks and directory isolation challenges on local machines.",
        role: "AI Agent & Application Owner, managing TDuMAIC (MAIC-AI-Classroom) system architecture and independently designing CLI Agent ReAct loops with process-isolated sandboxing.",
        solution: "Design LangGraph state machines for multi-agent discussions and integrate OpenClaw gateway. Build a Python-based CLI Agent running in a ReAct loop, wrapping subprocesses with safety interceptors and directory boundaries to support self-healing code recovery.",
        challenges: [
          "Multi-agent discussion reliability: Design a DAG-based classroom state machine to curtail hallucinations, and build a human-in-the-loop review flow.",
          "Secure command execution: Filter high-risk commands (e.g. system destructive scripts) and enforce strict path boundaries in subprocesses.",
          "ReAct loop convergence: Trace multi-step state logs and automatically inject error feedback to steer the agent towards code self-healing and prevent infinite loops."
        ],
        results: [
          "Co-authored multi-agent classroom paper published in JCST'26, and open-sourced the platform codebase on GitHub.",
          "Enabled multi-messenger client support via OpenClaw, allowing dynamic LLM swaps and accelerating interactive lesson delivery.",
          "Created a functional local CLI agent capable of autonomous code editing, building, running tests, and error feedback recovery under a secure sandbox."
        ],
        judgment: "The production value of enterprise agents lies in state machine orchestration, fault-tolerant self-healing loops, and secure physical sandboxing.",
        highlights: ["JCST'26 Paper Published", "LangGraph State Machine Flow", "Command Execution Sandbox", "OpenClaw Multi-Client Support"],
        repos: [
          {
            label: "MAIC-AI-Classroom",
            url: "https://github.com/guochaopeng110-maker/MAIC-AI-Classroom",
            description: "One-click lesson generation platform. Features AI teacher/peer roleplay, PPTX exports, interactive whiteboard, and OpenClaw messaging integration.",
            role: "Architect & Core Dev: Multi-agent collaboration & multi-platform integration"
          },
          {
            label: "ai-agent-engineering-journey",
            url: "https://github.com/guochaopeng110-maker/ai-agent-engineering-journey",
            description: "From-scratch Python implementation of a developer CLI Agent, with a secure subprocess shell sandbox.",
            role: "Independent Creator: CLI Agent Harness & safety sandboxing"
          }
        ],
        workflow: {
          title: "Multi-Agent Classroom Collaboration & Sandbox Execution Pipeline",
          steps: [
            {
              name: "Natural Language Input & Intent Routing",
              description: "Receive queries from Web or OpenClaw messengers (Feishu/Slack), routing them to specified multi-agent classrooms or CLI developers.",
              role: "User Query -> Router Gateway -> Wake up agent instance"
            },
            {
              name: "Multi-Agent Debate / ReAct Planning",
              description: "AI teachers debate under LangGraph states to draft lesson materials; for CLI tasks, the agent plans tool actions to read or write files.",
              role: "Task Directive -> Agent Inference -> Decision Actions & Commands"
            },
            {
              name: "Sandbox Interception & Subprocess Execution",
              description: "Validate generated Shell commands against safety constraints and safelists, executing safe tasks in isolated processes.",
              role: "Action Command -> Sandbox Safety Checks -> Sandboxed Call"
            },
            {
              name: "Lesson Export / Error Self-Healing",
              description: "Compile and export interactive PPTX/HTML lesson packages, or capture subprocess errors to feedback into ReAct for code self-healing.",
              role: "Sandbox Subprocess -> Capture Output/Errors -> Self-Correction & Delivery"
            }
          ]
        },
        visuals: [
          {
            title: "TDuMAIC Multi-Agent & CLI Sandbox Architecture Diagram",
            url: "/personal-profile/assets/ai-agent-architecture.png",
            description: "AI Agent interactive classroom architecture based on Sense-Think-Act and subprocess sandboxing integration.",
            type: "diagram",
            schematic: [
              { label: "SENSE", value: "OpenClaw gateway, intent router, shell action command interceptor", class: "script-bar" },
              { label: "THINK", value: "LangGraph state machine, multi-roleplay LLM discussions, ReAct reasoning & correction loops", class: "video-bar" },
              { label: "ACT", value: "Whiteboard rendering, structured PPTX/HTML export, sandboxed Shell execution & code edits", class: "audio-bar" }
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
        summary: "Cross-platform Web3D rendering and VR spatial computing, establishing highly reliable, high-performance interactive 3D and multimedia simulation.",
        problem: "3D and VR projects commonly suffer from inconsistent interaction semantics, black-screen transition latencies during multi-branch switching, and controller-gaze interaction conflicts.",
        role: "Core 3D Engine Developer and Team Lead, driving the R&D of exm-player-web3d and building-stared-navigator-pico.",
        solution: "Wrap a lightweight browser-side engine with Babylon.js; engineer a data-driven spatial gaze interaction system on Unity PICO SDK; develop Shaka Player dual-instance alternating architecture.",
        challenges: [
          "Seamless interactive video: Eliminate multi-branch transition black-screens using preloading and Shaka Player dual-instance 'mute-show/sound-hide' alternation in interactive-video-playground.",
          "VR gaze polling: Use optimized raycasting and entirely data-driven scheduling to avoid frame rate stuttering in Unity update cycles.",
        ],
        results: [
          "Delivered multiple high-precision Web3D simulations and immersive VR control systems.",
          "Eradicated branch-switching black-screens and audio gaps, realizing near-zero latency seamless switching."
        ],
        judgment: "The core value of 3D/multimedia lies in the interaction pipeline design and rendering/switching optimization rather than mesh details.",
        highlights: [
          "Babylon.js Spatial Interaction",
          "PICO VR Gaze System",
          "Shaka Player Dual-Instance"
        ],
        repos: [
          { label: "exm-player-web3d", url: "https://github.com/guochaopeng110-maker/exm-player-web3d", description: "Lightweight browser 3D spatial interactive player based on Babylon.js, supporting multiple 3D formats and high-frequency interaction actions.", role: "Core Developer: 3D rendering pipeline & event bus design" },
          { label: "building-stared-navigator-pico", url: "https://github.com/guochaopeng110-maker/building-stared-navigator-pico", description: "Data-driven, non-intrusive 3D Gaze Interaction System (Gaze Interaction System) built on PICO Unity SDK.", role: "Lead Developer: Data-driven interaction architecture & raycast scheduling" }
        ],
        workflow: {
          title: "3D Interaction & Simulation Engineering Pipeline",
          steps: [
            {
              name: "Asset Optimization & Export",
              description: "Perform mesh decimation, DrawCall merging, and texture baking on industrial models, exporting highly compressed glTF/GLB models.",
              role: "Raw 3D Assets -> Decimation & Baking -> Production glTF/GLB"
            },
            {
              name: "Multi-Platform Interaction Binding",
              description: "Bind gesture actions in Babylon.js on Web, and configure gaze sensors and controller raycasts in Unity on VR HMDs.",
              role: "3D Model Load -> Babylon.js Events / Unity Gaze Component -> Unified API Interfaces"
            },
            {
              name: "Tuning & Seamless Playback",
              description: "Optimize WebGL rendering parameters for low-end devices, and alternate Shaka Player instances for zero-latency video switching.",
              role: "Interaction Event -> WebGL Tuning / Dual-Instance Rendering -> Smooth & Seamless Experience"
            }
          ]
        },
        visuals: [
          {
            title: "3D & VR Spatial Computing Architecture Diagram",
            description: "A unified 3D interaction architecture design bridging lightweight Web3D (Babylon.js) and immersive VR (Unity).",
            type: "diagram",
            schematic: [
              { label: "DCC / OPT", value: "Decimation, DrawCall batching, texture baking & Draco glTF export", class: "dcc-bar" },
              { label: "WEB3D / MULTIMEDIA", value: "exm-player-web3d rendering, interactive-video-playground Shaka Player dual-instance alternating", class: "web3d-bar" },
              { label: "VR HMD", value: "Unity + PICO VR SDK gaze interaction, gesture tracking & raycasting", class: "vr-bar" }
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
          "Established a reusable industrial device abstraction and communication baseline for upper-layer business systems.",
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
