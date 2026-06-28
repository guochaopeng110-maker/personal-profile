import type { Theme } from './types';

export const content = {
  hero: {
    eyebrow: 'Guochao Peng',
    title: 'AI 智能体 / AI 应用 / 全栈开发工程师',
    lede: '面向 AI 应用、智能体与全栈交付，能够把 Web3D、VR、多媒体与工业系统经验整合成可落地的产品与工程能力。',
    supporting: '首屏先回答岗位匹配与交付能力，再引导招聘方进入项目主题、经历与细节，而不是把你丢进一页泛化作品集文案里。',
    actions: { resume: '下载 PDF 简历', github: 'GitHub', email: 'Email' },
    hiringSignalsTitle: 'Hiring Snapshot',
    hiringSignals: [
      '当前主定位是 AI 智能体 / AI 应用 / 全栈开发工程师。',
      '核心优势不是概念展示，而是把复杂技术整合成可交付结果。',
      '过往 VR、Web3D 与工业系统经验，构成当前 AI 与工程化能力的差异化深度。'
    ]
  },
  narrative: {
    eyebrow: 'Narrative Path',
    title: '为什么这个站适合招聘阅读',
    cards: [
      {
        title: '先判断岗位匹配，再决定是否深入看项目与经历。',
        p: '首页主叙事先给出当前目标岗位、核心价值和联系入口，让招聘方无需先打开 PDF，就能在数秒内判断是否值得继续沟通。'
      },
      {
        title: '从工业系统、VR、Web3D 走到 AI 应用与全栈工程，不是方向分散，而是能力持续演进。',
        p: '这条演进路径解释了为什么当前定位既有前沿感，也有真实工程落地的可信度，从而区别于只有 demo、缺少复杂系统经验的通用作品集候选人。'
      }
    ]
  },
  timeline: {
    eyebrow: 'Career Journey',
    title: '职业演进时间线',
    intro: '从底层工业控制、VR/Web3D 交互 to AI 智能体与全栈工程，我的经历是一条连贯的能力演进之路：用工业级严谨对待系统，用前沿技术赋能业务交付。',
    items: [
      {
        period: '2021 - 至今',
        company: '长沙兴盛优选有限公司',
        role: 'DCS 设备控制系统工程师 / 全栈开发',
        contributions: [
          '负责 DCS (设备控制系统) 与 PLC 集成，实现异构硬件设备的高并发稳定编排与真实世界系统控制。',
          '研发嵌入式设备集成及底层通讯模块，打通工业级硬件与上层业务系统的全栈数据链路。',
          '探索 AI 智能体与工作流在仓储物流决策、异常诊断等复杂工业场景下的应用落地。'
        ]
      },
      {
        period: '2015 - 2021',
        company: '天度（厦门）科技股份有限公司',
        role: 'VR / Web3D / C++ 资深工程师',
        contributions: [
          '基于 C++、Qt 与 Unity 研发高仿真系统与交互式 VR 软件，交付多个高可靠性的工业/军工仿真项目。',
          '主导研发 Web3D 引擎及 exm-player-web3d 播放器，利用 Babylon.js 实现轻量化、高精度的浏览器端 3D 空间交互。',
          '设计互动视频与多媒体编排系统，将底层音视频流与前端高频交互无缝整合，支撑起丰富的多媒体体验。'
        ]
      }
    ]
  },
  skills: {
    eyebrow: 'Capability Matrix',
    title: '按能力域组织的技能模块',
    intro: '避免无差别的工具清单。技术栈的价值在于解决特定领域的工程问题，以下是我在不同演进阶段沉淀的核心能力域：',
    domains: [
      { name: 'AI 智能体 & AI 应用', description: '将前沿大模型能力转化为可交付的业务生产力', tools: ['LLM Agents','LangChain / LangGraph','Workflow Automation','Prompt Engineering','RAG & Vector DB'] },
      { name: '全栈与工程化交付', description: '高并发、高可用业务系统的全栈设计与敏捷交付', tools: ['Node.js / TypeScript','React / Next.js','RESTful / GraphQL','Docker & CI/CD','System Architecture'] },
      { name: '互动视频与多媒体', description: '音视频流媒体、多媒体编排与高频交互系统研发', tools: ['Streaming Media','Video Encoding/Decoding','FFmpeg','Interactive Video Orchestration','WebRTC'] },
      { name: 'Web3D / VR / 空间计算', description: '跨平台的轻量级 3D 空间交互与沉浸式体验开发', tools: ['Babylon.js','Three.js','Unity 3D','PICO VR SDK','Shader / WebGL'] },
      { name: '底层系统与工业软件', description: '高可靠性工业控制软件与异构设备编排系统', tools: ['C / C++','Qt Framework','DCS / PLC Integration','Embedded Communication','Hardware Orchestration'] }
    ]
  },
  themes: {
    eyebrow: 'Project Themes',
    title: '优先浏览的项目主题',
    intro: '如果招聘方已经确认岗位方向，可以从这里继续下钻，查看最能代表当前能力结构的主题案例。',
    viewDetail: '进入详情页',
    backToHome: '返回首页',
    unknownTheme: { eyebrow: 'Unknown Theme', title: '未找到该项目主题', summary: '当前骨架已经支持详情路由，后续可以继续从结构化内容中扩展主题数据。' },
    detailPage: {
      eyebrow: 'Theme Detail',
      labels: { problem: '背景与问题', role: '我的角色', solution: '方案与架构', challenges: '关键挑战', results: '项目结果', judgment: '工程判断', repo: '仓库链接' }
    },
    items: {
      'ai-agents': {
        title: 'AI 智能体与 AI 应用',
        summary: '把大模型能力做成可被业务真正调用的工作流与智能体，而不是只能跑 demo 的玩具。',
        problem: '大模型在企业场景里常被卡在 prompt 与 demo 阶段：流程跑不通、结果不稳定、和现有系统对接成本高，团队难以把模型能力纳入日常业务流。',
        role: '作为 AI 应用 / 智能体方向的负责与开发，从业务拆解、Prompt 工程、工作流编排、系统集成到上线运维，端到端推进。',
        solution: '基于 LLM Agent 与 LangChain / LangGraph 等框架构建可观察的工作流，引入 RAG 与向量库注入业务知识，配合结构化输出与人工兜底，让模型输出能够进入下游业务系统。',
        challenges: [
          '结果稳定性：在多轮调用与外部工具调用场景下，把幻觉与失败路径限制在可恢复的边界内。',
          '业务集成：把模型能力嵌入既有 Node.js / 全栈业务链路，而不是另起一套互不打通的系统。'
        ],
        results: [
          '形成可复用的智能体工作流模板，能复用到多个内部业务场景。',
          '把模型输出从一次性 demo 升级为可被业务系统稳定调用的能力。'
        ],
        judgment: 'AI 应用的价值在工程化闭环，不在单次惊艳回答；能跑通业务流比单点能力更重要。',
        highlights: ['智能体 + 工作流落地','可被业务系统调用','工程化而非单点 demo'],
        repo: { label: 'GitHub 主页', url: 'https://github.com/guochaopeng110-maker' }
      },
      'ai-video-workflow': {
        title: 'AI 短剧 / 漫剧 / 视频生成工作流',
        summary: '把脚本、分镜、生成与剪辑串成一条可复用的 AI 视频生产工作流，让创意在多仓库里协同产出。',
        problem: 'AI 视频生成往往停留在单点工具调用：脚本、分镜、配音、剪辑分散在不同仓库与脚本里，单兵作战可以，但难以工程化复用，也难以扩展为团队可复用的生产线。',
        role: '跨多个相关仓库整合者，负责把 AI 生成、模板化分镜与后期拼接抽象为统一工作流，并沉淀可复用的资产与脚本。',
        solution: '以工作流为骨架，把脚本生成、分镜模板、图像/视频生成节点、后期拼接统一调度，让创作者专注在内容决策而非工具拼接。',
        challenges: [
          '多仓库协同：在没有统一 CI 的情况下，让脚本、模板与生成节点保持版本与依赖一致。',
          '缺图降级：生成失败或素材缺失时，结构化降级到模板输出，保证流程不中断。'
        ],
        results: [
          '把多个相关仓库整合为统一主题的 AI 视频生产线。',
          '为后续漫剧 / 短剧模板化生产建立了可扩展的工程骨架。'
        ],
        judgment: '多仓库项目更需要一个共同主题把它们串起来，否则亮点会被仓库列表稀释。',
        highlights: ['多仓库统一主题','工作流化生产','缺图降级保持可读'],
        repo: { label: 'GitHub 主页', url: 'https://github.com/guochaopeng110-maker' }
      },
      'web3d-vr': {
        title: 'Web3D / Babylon.js + Unity + PICO VR',
        summary: '从浏览器 3D 交互到 Unity + PICO VR 沉浸式工程，沉淀一套跨端 3D 空间交互与仿真能力。',
        problem: '3D 项目常被做成一次性 demo：场景炫但没有交互架构、移植到 VR 时缺乏模块化、性能与精度难以兼得，团队重复造轮子。',
        role: '作为 Web3D 引擎与 VR 仿真的核心研发，主导 exm-player-web3d 播放器与多个高仿真 / 交互式 VR 项目的架构与实现。',
        solution: '用 Babylon.js 搭建可复用的浏览器 3D 引擎层，统一处理场景、交互与资源；用 Unity + PICO VR SDK 承接需要沉浸感的工业 / 仿真场景，保持结构一致。',
        challenges: [
          '跨端一致性：在浏览器、移动端、VR 头显之间保持交互语义一致，而不是各端各写一套。',
          '性能与精度权衡：在低端设备上保持可交互帧率，在高精度仿真里保留物理与几何可信度。'
        ],
        results: [
          '交付多个高可靠性的工业 / 军工仿真与 VR 项目。',
          '形成可被后续项目复用的 Web3D 引擎与 VR 工程基线。'
        ],
        judgment: '3D 能力的护城河是交互架构与可复用引擎，不是某一个酷炫 Demo。',
        highlights: ['跨端 3D 交互架构','Babylon.js + Unity + PICO VR','可复用的工程基线'],
        repo: { label: 'GitHub 主页', url: 'https://github.com/guochaopeng110-maker' }
      },
      'cargo-ship-manage': {
        title: 'CargoShipManage 业务系统',
        summary: '一个面向船舶货运管理的全栈业务系统：从业务建模到高可用交付，体现真实业务项目的工程取舍。',
        problem: '船舶货运管理涉及多角色协作、状态流转与高并发业务写入，团队在没有完整产品化经验时容易把系统做成“功能堆砌”，结果难用、难维护、难扩展。',
        role: '作为核心全栈开发，从业务建模、API 设计、前后端实现到部署运维，主导系统的工程化建设。',
        solution: '采用 Node.js + TypeScript + React/Next.js 的全栈架构，按业务域拆分模块并以 RESTful 接口对接，配合 Docker 与 CI/CD 形成可灰度发布的交付链路。',
        challenges: [
          '业务建模：把多角色、多状态的业务流程抽象为清晰的状态机，而不是堆表单。',
          '可维护性：在快速迭代中保持代码结构与依赖清晰，避免后期维护成本失控。'
        ],
        results: [
          '交付一个面向真实业务场景的船舶货运管理系统。',
          '在业务复杂度和工程复杂度之间找到可演进的平衡点。'
        ],
        judgment: '业务系统项目的价值在于“能稳定跑起来且能持续演进”，不是某一个炫技功能。',
        highlights: ['全栈业务系统','业务建模 + 工程取舍','可灰度发布链路'],
        repo: { label: 'GitHub 主页', url: 'https://github.com/guochaopeng110-maker' }
      },
      'industrial-systems': {
        title: '底层系统与工业软件',
        summary: '在 DCS / PLC 异构硬件与高可靠工业场景中沉淀的底层能力，是当前 AI 与全栈工作的工程底色。',
        problem: '工业场景对系统的稳定性、实时性与异构设备兼容性要求极高，常见通用软件方案在工业现场往往不可用，团队既需要懂底层，也需要能交付完整业务。',
        role: '作为 DCS 设备控制系统工程师与底层通讯模块研发，负责异构硬件集成、嵌入式通讯链路与上层业务系统打通。',
        solution: '以 C / C++ 与 Qt 为主构建高可靠工业控制与仿真软件，在 DCS / PLC 接入层抽象统一设备协议，让上层业务系统可以无差别调用工业设备能力。',
        challenges: [
          '异构兼容：在多厂商、多型号的工业设备之间建立稳定可用的统一抽象。',
          '稳定优先：在工业现场，可用性与可恢复性优于任何“性感”特性。'
        ],
        results: [
          '交付多套高可靠性的工业 / 军工级控制与仿真系统。',
          '建立可被上层业务复用的工业设备抽象与通讯基线。'
        ],
        judgment: '工业级经验的最大价值是“把系统当系统做”，这一底色决定了后续 AI 与全栈交付的工程严谨度。',
        highlights: ['C / C++ + Qt','DCS / PLC 异构集成','工业级稳定性'],
        repo: { label: 'GitHub 主页', url: 'https://github.com/guochaopeng110-maker' }
      }
    }
  },
  notFound: {
    eyebrow: '404',
    title: '页面未找到',
    p: '这个基础骨架已经预留未找到页，便于 GitHub Pages 部署后的异常路径兜底。',
    backToHome: '返回首页'
  }
};
