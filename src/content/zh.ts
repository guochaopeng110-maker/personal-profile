export const content = {
  hero: {
    eyebrow: "Guochao Peng",
    title: "AI 智能体 / AI 应用 / 全栈开发工程师",
    lede: "面向 AI 应用、智能体与全栈交付，能够把 Web3D、VR、多媒体与工业系统经验整合成可落地的产品与工程能力。",
    supporting: "首屏先回答岗位匹配与交付能力，再引导招聘方进入项目主题、经历与细节，而不是把你丢进一页泛化作品集文案里。",
    actions: {
      resume: "下载 PDF 简历",
      github: "GitHub",
      email: "Email"
    },
    hiringSignalsTitle: "Hiring Snapshot",
    hiringSignals: [
      "当前主定位是 AI 智能体 / AI 应用 / 全栈开发工程师。",
      "核心优势不是概念展示，而是把复杂技术整合成可交付结果。",
      "过往 VR、Web3D 与工业系统经验，构成当前 AI 与工程化能力的差异化深度。"
    ]
  },
  narrative: {
    eyebrow: "Narrative Path",
    title: "为什么这个站适合招聘阅读",
    cards: [
      {
        title: "先判断岗位匹配，再决定是否深入看项目与经历。",
        p: "首页主叙事先给出当前目标岗位、核心价值和联系入口，让招聘方无需先打开 PDF，就能在数秒内判断是否值得继续沟通。"
      },
      {
        title: "从工业系统、VR、Web3D 走到 AI 应用与全栈工程，不是方向分散，而是能力持续演进。",
        p: "这条演进路径解释了为什么当前定位既有前沿感，也有真实工程落地的可信度，从而区别于只有 demo、缺少复杂系统经验的通用作品集候选人。"
      }
    ]
  },
  timeline: {
    eyebrow: "Career Journey",
    title: "职业演进时间线",
    intro: "从底层工业控制、VR/Web3D 交互 to AI 智能体与全栈工程，我的经历是一条连贯的能力演进之路：用工业级严谨对待系统，用前沿技术赋能业务交付。",
    items: [
      {
        period: "2021 - 至今",
        company: "长沙兴盛优选有限公司",
        role: "DCS 设备控制系统工程师 / 全栈开发",
        contributions: [
          "负责 DCS (设备控制系统) 与 PLC 集成，实现异构硬件设备的高并发稳定编排与真实世界系统控制。",
          "研发嵌入式设备集成及底层通讯模块，打通工业级硬件与上层业务系统的全栈数据链路。",
          "探索 AI 智能体与工作流在仓储物流决策、异常诊断等复杂工业场景下的应用落地。"
        ]
      },
      {
        period: "2015 - 2021",
        company: "天度（厦门）科技股份有限公司",
        role: "VR / Web3D / C++ 资深工程师",
        contributions: [
          "基于 C++、Qt 与 Unity 研发高仿真系统与交互式 VR 软件，交付多个高可靠性的工业/军工仿真项目。",
          "主导研发 Web3D 引擎及 exm-player-web3d 播放器，利用 Babylon.js 实现轻量化、高精度的浏览器端 3D 空间交互。",
          "设计互动视频与多媒体编排系统，将底层音视频流与前端高频交互无缝整合，支撑起丰富的多媒体体验。"
        ]
      }
    ]
  },
  skills: {
    eyebrow: "Capability Matrix",
    title: "按能力域组织的技能模块",
    intro: "避免无差别的工具清单。技术栈的价值在于解决特定领域的工程问题，以下是我在不同演进阶段沉淀的核心能力域：",
    domains: [
      {
        name: "AI 智能体 & AI 应用",
        description: "将前沿大模型能力转化为可交付的业务生产力",
        tools: ["LLM Agents", "LangChain / LangGraph", "Workflow Automation", "Prompt Engineering", "RAG & Vector DB"]
      },
      {
        name: "全栈与工程化交付",
        description: "高并发、高可用业务系统的全栈设计与敏捷交付",
        tools: ["Node.js / TypeScript", "React / Next.js", "RESTful / GraphQL", "Docker & CI/CD", "System Architecture"]
      },
      {
        name: "互动视频与多媒体",
        description: "音视频流媒体、多媒体编排与高频交互系统研发",
        tools: ["Streaming Media", "Video Encoding/Decoding", "FFmpeg", "Interactive Video Orchestration", "WebRTC"]
      },
      {
        name: "Web3D / VR / 空间计算",
        description: "跨平台的轻量级 3D 空间交互与沉浸式体验开发",
        tools: ["Babylon.js", "Three.js", "Unity 3D", "PICO VR SDK", "Shader / WebGL"]
      },
      {
        name: "底层系统与工业软件",
        description: "高可靠性工业控制软件与异构设备编排系统",
        tools: ["C / C++", "Qt Framework", "DCS / PLC Integration", "Embedded Communication", "Hardware Orchestration"]
      }
    ]
  },
  themes: {
    eyebrow: "Project Themes",
    title: "优先浏览的项目主题",
    intro: "如果招聘方已经确认岗位方向，可以从这里继续下钻，查看最能代表当前能力结构的主题案例。",
    viewDetail: "进入详情页",
    backToHome: "返回首页",
    unknownTheme: {
      eyebrow: "Unknown Theme",
      title: "未找到该项目主题",
      summary: "当前骨架已经支持详情路由，后续可以继续从结构化内容中扩展主题数据。"
    },
    detailPage: {
      eyebrow: "Theme Detail",
      bullets: [
        "路由已支持主题 slug expansion",
        "页面结构可继续接入结构化内容源",
        "后续可添加双语文案和案例模块"
      ]
    },
    items: {
      "ai-agents": {
        title: "AI 智能体与 AI 应用",
        summary: "这里会继续扩展 AI agent、workflow 和业务应用案例。"
      },
      web3d: {
        title: "Web3D / Babylon.js",
        summary: "这里会继续扩展交互式 3D 与浏览器空间体验案例。"
      }
    }
  },
  notFound: {
    eyebrow: "404",
    title: "页面未找到",
    p: "这个基础骨架已经预留未找到页，便于 GitHub Pages 部署后的异常路径兜底。",
    backToHome: "返回首页"
  }
};
