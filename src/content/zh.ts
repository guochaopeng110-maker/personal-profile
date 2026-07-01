import type { Theme } from './types';

export const content = {
  hero: {
    eyebrow: 'Guochao Peng',
    title: 'AI 智能体 / AI 应用 / 全栈开发工程师',
    lede: '面向 AI 应用、智能体与全栈交付，能够把 Web3D、VR、多媒体与工业系统经验整合成可落地的产品与工程能力。',
    supporting: '基于底层工业控制系统的严谨性与 Web3D/VR 空间计算的直观交互，构建具备高稳定性的 AI 智能体与全栈应用，打通数字与物理世界的交汇点。',
    actions: { resume: '下载 PDF 简历', github: 'GitHub', email: 'Email' },
    hiringSignalsTitle: '技术主张',
    hiringSignals: [
      '秉承“万物皆系统”的架构理念，专注于高可靠性、多智能体工作流编排与应用落地。',
      '拒绝单点 Demo 玩具，聚焦于可观察、可容错的生产级 AI 闭环与全栈系统交付。',
      '深厚的工业 DCS 实时控制、Web3D/VR 引擎及交互视频技术积淀，构成差异化底色。'
    ],
    pageMeta: {
      lang: 'zh-CN',
      documentTitle: 'Guochao Peng | AI 智能体 / AI 应用 / 全栈开发工程师',
    },
  },
  narrative: {
    eyebrow: 'Evolution Path',
    title: '技术演进：从确定性控制到智能涌现',
    cards: [
      {
        title: '物理世界的确定性控制与系统集成经验',
        p: '在 DCS 工业控制、PLC 通讯及高仿真 VR 软件中积累的严苛工程标准，帮助我在设计 AI 智能体工作流时能精准把握状态机流转、异常分支容错与资源编排。'
      },
      {
        title: '多维交互与全栈工程的自然演进',
        p: '从底层硬件控制到 Babylon.js 浏览器 3D 渲染，再到大模型驱动的音视频生成流水线，能力链条的持续演进使我具备独特的全场景架构与端到端交付实力。'
      },
      {
        title: 'AI 智能体与智能涌现的工程闭环',
        p: '将传统控制系统的状态机严谨性与大模型的涌现能力相结合，研发生产级 AI 应用与多智能体协同流水线，探索从确定性控制到自主决策的进化。'
      }
    ]
  },
  timeline: {
    eyebrow: 'Career Journey',
    title: '职业演进时间线',
    intro: '从底层工业控制、VR/Web3D 交互 to AI 智能体与全栈工程，我的经历是一条连贯的能力演进之路：用工业级严谨对待系统，用前沿技术赋能业务交付。',
    items: [
      {
        period: '2024 - 至今',
        company: '天度（厦门）科技股份有限公司',
        role: 'AI 智能体 / AI 应用 / 全栈开发负责人',
        contributions: [
          '主导研发 TDuMAIC (MAIC-AI-Classroom) 多智能体互动课堂系统，作为第一作者在 JCST\'26 发表学术论文，代码在 GitHub 开源。',
          '设计并实现多智能体状态机流转与意图路由架构，接入 OpenClaw 协议，支持飞书、Slack 等 20+ 聊天软件一键生成 AI 课堂。',
          '搭建多模态 AI 短剧与漫剧自动化生成工作流，基于 Python 独立研发类 Claude Code 的智能命令行 Agent 框架（ai-agent-engineering-journey）。'
        ]
      },
      {
        period: '2023 - 2024',
        company: '天度（厦门）科技股份有限公司',
        role: '资深全栈开发工程师',
        contributions: [
          '负责 Web3D 与 VR 空间计算的技术融合与产品研发，主导核心 Web3D 播放器（exm-player-web3d）渲染与交互管道设计。',
          '研发 interactive-video-playground 互动视频引擎，基于 React 19 与 Shaka Player 双实例交替拼接架构，消灭 MP4 切换黑屏顽疾。',
          '基于 PICO VR SDK 研发凝视交互系统（building-stared-navigator-pico），完成三维虚拟现实高可靠交互仿真落地。'
        ]
      },
      {
        period: '2021 - 2023',
        company: '长沙兴盛优选有限公司',
        role: 'DCS 设备控制系统工程师 / 全栈开发',
        contributions: [
          '负责工业仓储 DCS (设备控制系统) 与 PLC 集成，基于 C++/Qt 构建异构硬件调度与通信控制总线。',
          '针对高并发设备写入及调度场景，运用 Redis 分布式锁与乐观锁并发控制机制，保证复杂工业现场的实时性与高可用性。',
          '打通嵌入式设备与上层业务数据链路，探索基于规则引擎与决策规划的仓储物流异常定位方案。'
        ]
      },
      {
        period: '2015 - 2021',
        company: '天度（厦门）科技股份有限公司',
        role: 'VR / Web3D / C++ 资深工程师',
        contributions: [
          '基于 C++、Qt 与 Unity 研发高仿真系统与交互式 VR 软件，交付多个高可靠性的工业/军工仿真项目。',
          '主导研发 Web3D 引擎，利用 Babylon.js 实现轻量化、高精度的浏览器端 3D 空间交互。',
          '设计早期互动视频与多媒体编排系统，将底层音视频流与前端交互无缝整合，支撑起丰富的多媒体体验。'
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
    intro: '从大规模全栈业务系统到大模型工作流编排，以下主题代表了我围绕“交互、控制、智能”构建的核心技术案例。',
    viewDetail: '进入详情页',
    backToHome: '返回首页',
    unknownTheme: { eyebrow: 'Unknown Theme', title: '未找到该项目主题', summary: '该项目主题当前未配置或已下线，您可以返回首页查看其他活跃的项目主题。' },
    detailPage: {
      eyebrow: 'Theme Detail',
      labels: { problem: '背景与问题', role: '我的角色', solution: '方案与架构', challenges: '关键挑战', results: '项目结果', judgment: '工程判断', repo: '仓库链接', workflow: '工作流核心节点与分工', repos: '相关代码仓库', visuals: '项目视觉' }
    },
    items: {
      'ai-agents': {
        title: 'AI 智能体与业务应用',
        summary: '把大模型能力做成可被企业业务真正调用的多智能体协同系统与工程化应用，而不是跑 Demo 的玩具。',
        problem: '大模型应用在企业落地时常受限于流程不确定性、复杂状态难以维护，团队难以将模型稳定编排进既有的业务系统中。',
        role: '作为 AI 应用与智能体负责人，从意图路由、状态机设计到多端网关集成，全面负责 TDuMAIC (MAIC-AI-Classroom) 系统架构与交付。',
        solution: '基于 LangGraph 设计多角色智能体协同的状态机流转，支持 AI 讲师/学生角色扮演讨论；集成 OpenClaw 协议，支持飞书、Slack 等 20+ 聊天客户端一键生成并推送多模态课堂。',
        challenges: [
          '多智能体协同可靠性：设计基于有向无环图（DAG）的课堂决策流，限制幻觉扩散，并引入人工兜底确认流。',
          '课件多模态自动化生成：设计统一结构化 Schema 输出，自动驱动 SVG 白板渲染并实时渲染导出为 editable PPTX 课件与互动 HTML。'
        ],
        results: [
          '智能体平台核心理论与架构设计论文发表于中国计算机大会推荐期刊 JCST\'26，且代码已在 GitHub 开源。',
          '通过 OpenClaw 实现多聊天客户端适配，支撑多厂商 LLM 动态切换，提升了智能课件交付效率。'
        ],
        judgment: '企业智能体的落地价值在于对多角色业务流程的确定性状态机流转编排与可容错设计，而非单次惊艳的 Prompt 回答。',
        highlights: ['JCST\'26 论文发表','LangGraph 状态机编排','OpenClaw 多端适配'],
        repos: [
          { label: 'MAIC-AI-Classroom', url: 'https://github.com/guochaopeng110-maker/MAIC-AI-Classroom', description: '一键生成多智能体互动课堂平台。包含 AI 讲师/学生角色扮演、PPTX 导出、白板互动与 OpenClaw 多端聊天软件接入。', role: '架构师 & 核心研发：多智能体协作与多端集成' }
        ],
        workflow: {
          title: '多智能体互动课堂工作流',
          steps: [
            {
              name: '自然语言输入与意图路由',
              description: '接收来自 Web 端或 OpenClaw 聊天软件（飞书/Slack）的请求，通过意图路由模型将任务分发给指定的多智能体课堂。',
              role: '用户自然语言请求 -> 路由网关解析 -> 唤醒课堂 Agent 实例'
            },
            {
              name: '多智能体角色扮演讨论',
              description: '智能讲师 Agent 与学生 Agent 根据 LangGraph 状态机定义协同讨论主题，相互提问补充，产出结构化讲义。',
              role: '教学大纲 -> 智能体角色扮演讨论 -> 结构化讲义生成'
            },
            {
              name: '课程场景与仿真生成',
              description: '依据讲义内容自动驱动白板公式与 SVG 渲染，同步生成小测验（Quizzes）与交互式网页仿真代码。',
              role: '结构化讲义 -> SVG 白板渲染 & 交互仿真代码 -> 互动课件资产'
            },
            {
              name: '多模态课件导出与交付',
              description: '整合课件、小测验及生成的多分支代码，一键导出为 editable PPTX 及互动 HTML，通过网关反馈给用户。',
              role: '互动课件资产 -> PPTX/HTML 自动后期导出 -> 多端推送交付'
            }
          ]
        },
        visuals: [
          {
            title: 'TDuMAIC 多智能体协同架构示意图',
            url: '/personal-profile/assets/ai-agent-architecture.png',
            description: '基于感知-思考-执行 (Sense-Think-Act) 与多端聊天集成的 AI 智能体互动课堂系统。',
            type: 'diagram',
            schematic: [
              { label: '感知 SENSE', value: 'OpenClaw 网关、意图路由器、自然语言请求解析', class: 'script-bar' },
              { label: '思考 THINK', value: 'LangGraph 状态机、大模型多角色扮演讨论、课件生成决策链', class: 'video-bar' },
              { label: '执行 ACT', value: '白板渲染生成、结构化 PPTX/HTML 仿真课件导出与下载', class: 'audio-bar' }
            ]
          }
        ]
      },
      'ai-agent-learning': {
        title: 'AI 智能体学习与沙盒探索',
        summary: '基于 learn-claude-code 框架，从零构建类 Claude Code 的智能命令行 Agent 框架与安全沙箱。',
        problem: '在设计具有高自主度、能够执行命令和编写代码的智能体时，如何确保本地 Shell 执行的安全性并保证 ReAct 循环收敛。',
        role: '独立学习与研发负责人，基于 Python 从底层手写 Agent 决策哈纳斯、动作解析器与子进程执行沙箱。',
        solution: '构建基于 ReAct 推理规划的 Agent 决策循环，提供文件编辑与终端指令工具；在 subprocess 层上封装安全沙箱以防御高危系统操作。',
        challenges: [
          '本地命令安全执行：严格限制沙箱操作目录，防范恶意的系统级破坏（如 rm -rf）命令。',
          'ReAct 任务自动纠错：捕获命令报错与异常日志，自动回传给智能体进行状态修复与代码自愈，防止无限死循环。'
        ],
        results: [
          '手写完成本地命令行开发智能体，实现文件操作、Shell 命令自动执行、编译测试等全套研发动作。',
          '顺便掌握了 Python 异步编程及 subprocess 底层进程控制，深入实践了 LLM-as-a-judge 评估指标与 Prompt 提示词版本迭代。'
        ],
        judgment: '命令行智能体的核心壁垒在于对 Shell 动作的防注入校验与沙箱边界管控，这是将 Agent 推向生产级实用的关键安全锁。',
        highlights: ['类 Claude Code 实现','安全执行沙箱','ReAct 自愈收敛'],
        repos: [
          { label: 'ai-agent-engineering-journey', url: 'https://github.com/guochaopeng110-maker/ai-agent-engineering-journey', description: '基于 Python 从零手写 CLI 开发 Agent，包含 Shell 命令安全沙箱与文件操作工具。', role: '独立研发：命令行 Agent Harness 及安全沙箱' }
        ],
        workflow: {
          title: '智能体运行规划与沙箱验证管线',
          steps: [
            {
              name: '意图识别与工具准备',
              description: '解析用户输入的开发请求，唤醒 ReAct 智能体循环，初始化文件编辑和 Shell 执行等工具链。',
              role: '用户指令输入 -> 初始化工具链 -> 开启 ReAct 循环'
            },
            {
              name: 'ReAct 推理与行动规划',
              description: '智能体在循环中进行思考推理与动作选择（如读写特定文件、检查目录结构），生成待执行的 Shell 命令。',
              role: '当前状态日志 -> LLM 规划推理 -> 动作指令生成'
            },
            {
              name: '安全沙箱命令拦截与校验',
              description: '拦截生成的 Shell 命令，通过权限白名单和目录边界验证，防范非法命令或恶意脚本对系统带来威胁。',
              role: '动作指令 -> 沙箱安全校验 -> 物理系统隔离调用'
            },
            {
              name: '命令执行与结果自动纠错',
              description: '在隔离子进程中安全执行校验通过的命令，捕获其标准输出及报错日志，实时回传智能体进行动作自愈与逻辑修复。',
              role: '沙箱子进程运行 -> 报错捕获与自动重试 -> 任务收敛完成'
            }
          ]
        },
        visuals: [
          {
            title: 'CLI Agent 安全执行架构',
            description: '基于 ReAct 推理循环与隔离沙箱的命令行 Agent 自主研发与安全防护架构。',
            type: 'diagram',
            schematic: [
              { label: '用户输入', value: '自然语言指令、待解决的开发任务或代码修改诉求', class: 'script-bar' },
              { label: 'ReAct 规划', value: '思考推理、选择工具（读写文件、Shell 执行）、跟踪当前修改进度', class: 'video-bar' },
              { label: '沙箱校验', value: '拦截 Shell 动作、验证目标路径、白名单过滤危险操作、隔离进程执行', class: 'audio-bar' }
            ]
          }
        ]
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
        repos: [
          { label: 'prompt-to-screenplay', url: 'https://github.com/guochaopeng110-maker/prompt-to-screenplay', description: '脚本与镜头提示词编辑器：大模型驱动，自动生成结构化场景与分镜描述。', role: '工作流上游：创意转化与分镜设计' },
          { label: 'storyboard-diffuser', url: 'https://github.com/guochaopeng110-maker/storyboard-diffuser', description: '分镜画面生成器：基于 SD & Kling 等大模型 API 进行多线程批量生成及限频调度。', role: '工作流中游：视觉资产自动化渲染' },
          { label: 'ffmpeg-stitcher-orchestrator', url: 'https://github.com/guochaopeng110-maker/ffmpeg-stitcher-orchestrator', description: '多媒体合成剪辑编排引擎：利用 JSON 配置多轨时间线，合成配音、字幕和视频。', role: '工作流下游：资产装配与自动后期' }
        ],
        workflow: {
          title: '工作流核心节点与分工',
          steps: [
            {
              name: 'AI 脚本生成',
              description: '使用大模型根据主题生成结构化剧本、演员设定与镜头描述，产出分镜大纲。',
              role: '输入主题 -> LLM 生成镜头脚本 -> 分镜大纲 JSON'
            },
            {
              name: '分镜素材生成',
              description: '解析分镜大纲，调用 SD 与 Kling 节点批量渲染图像与视频片段，保障一致性。',
              role: '大纲 JSON -> 渲染图像/视频节点 -> 多媒体素材库'
            },
            {
              name: '音视频合成剪辑',
              description: '整合 TTS 语音、背景音乐与生成片段，通过 FFmpeg 完成时间线拼接及字幕压制。',
              role: '素材库 + 配音字幕 -> FFmpeg 自动后期 -> 交付最终短剧视频'
            }
          ]
        },
        visuals: [
          {
            title: '工作流示意图',
            description: 'AI 视频生成工作流从创意、分镜到最终剪辑合成的自动化管道。',
            type: 'diagram'
          }
        ]
      },
      'web3d-vr': {
        title: 'Web3D / Babylon.js + Unity + PICO VR',
        summary: '跨网页 Web3D 交互引擎与 Unity + PICO VR 空间计算，沉淀一套高可靠、高性能的三维交互与仿真能力。',
        problem: '3D 与虚拟现实项目普遍存在多端交互语义不一致、频繁场景切换黑屏卡顿、以及 VR 头显手柄凝视交互冲突的痛点。',
        role: '作为三维交互引擎的核心研发与团队负责人，主导了 exm-player-web3d 与 building-stared-navigator-pico 的系统开发。',
        solution: '基于 Babylon.js 封装轻量化 3D 空间交互引擎；在 VR 端基于 Unity PICO SDK 研发数据驱动的 3D 空间凝视交互系统；研发 Shaka Player 双实例交替拼接架构解决黑屏切换。',
        challenges: [
          '互动视频秒级切换：在 interactive-video-playground 中，通过预加载与 Shaka Player 双实例交替“有声隐藏/静音显示”消除多分支切换黑屏。',
          'VR 凝视交互性能：使用射线检测与完全数据驱动的轮询调度，避免 Unity 更新周期中的性能抖动。'
        ],
        results: [
          '交付多套高精度的 Web3D 交互仿真系统与沉浸式 VR 控制台。',
          '成功消灭了多分支互动视频切换过程中的瞬时黑屏与音频卡顿，实现接近零延迟的无缝体验。'
        ],
        judgment: '3D 与多媒体的护城河不在模型精细度，而在底层交互管道的设计与极致的渲染切换性能调优。',
        highlights: ['Babylon.js 空间渲染','PICO VR 凝视交互系统','Shaka Player 双实例拼接'],
        repos: [
          { label: 'exm-player-web3d', url: 'https://github.com/guochaopeng110-maker/exm-player-web3d', description: '基于 Babylon.js 研发的轻量级网页 3D 空间交互播放器，支持多种工业三维格式解析与高频手势动作交互。', role: '核心研发：3D 渲染管线与事件交互总线设计' },
          { label: 'building-stared-navigator-pico', url: 'https://github.com/guochaopeng110-maker/building-stared-navigator-pico', description: '基于 PICO Unity SDK 研发的非侵入式、数据驱动的 3D 空间凝视交互系统（Gaze Interaction System）。', role: '主导研发：数据驱动交互框架与射线轮询调度设计' }
        ],
        workflow: {
          title: '3D 交互与仿真工程管线',
          steps: [
            {
              name: '三维资产优化与导出',
              description: '对工业与机械仿真模型进行网格减面、DrawCall 合并及材质烘焙，导出高压缩率的 glTF/GLB 空间模型。',
              role: '原始大体量 3D 资产 -> 模型减面与贴图烘焙 -> 生产级轻量 glTF/GLB'
            },
            {
              name: '多端交互事件绑定',
              description: '在网页端利用 Babylon.js 绑定手势交互与旋转缩放事件，在 VR 头显端配置凝视传感器与手柄射线碰撞。',
              role: '3D 模型载入 -> Babylon.js 事件流 / Unity Gaze 交互器 -> 统一交互接口'
            },
            {
              name: '渲染调优与无缝拼接',
              description: '针对低配设备调优 WebGL 渲染参数；在互动多媒体视频中引入 Shaka Player 双实例交替显示，实现多分辨率视频 of 级切换。',
              role: '交互层事件 -> WebGL/WebGL2 性能调优 / 双实例无缝渲染 -> 流畅交互与秒级播放'
            }
          ]
        },
        visuals: [
          {
            title: '3D 与 VR 空间计算架构示意图',
            description: '融合轻量网页 Web3D (Babylon.js) 与沉浸式 PICO VR (Unity) 的高可靠三维空间交互架构。',
            type: 'diagram',
            schematic: [
              { label: 'DCC / 优化', value: '网格减面、DrawCall 合并、材质烘焙与 Draco 压缩 glTF 导出', class: 'dcc-bar' },
              { label: 'WEB3D / 多媒体', value: 'exm-player-web3d 渲染、interactive-video-playground Shaka Player 双实例拼接', class: 'web3d-bar' },
              { label: 'VR 头显', value: 'Unity + PICO VR SDK 空间凝视交互系统、手势追踪与射线碰撞组件', class: 'vr-bar' }
            ]
          }
        ]
      },
      'cargo-ship-manage': {
        title: 'CargoShipManage 业务系统',
        summary: '一个面向船舶货运管理的全栈业务系统：从业务建模到高可用交付，体现真实业务项目的工程取舍。',
        problem: '船舶货运管理涉及多角色协作、状态流转与高并发业务写入，团队在没有完整产品化经验时容易把系统做成“功能堆砌”，结果难用、难维护、难扩展。',
        role: '作为核心全栈开发，从业务建模、API 设计、前后端实现到部署运维，主导系统的工程化建设。',
        solution: '基于 Node.js + TypeScript + React/Next.js 全栈架构进行深度重构，按领域驱动设计 (DDD) 拆分核心业务模块并采用轻量级消息队列进行异步解耦，配合 Docker 容器化与 Jenkins CI/CD 灰度发布流程，构建高可用、易扩展的交付链路。',
        challenges: [
          '业务建模：将多角色协同与复杂状态流转抽象为高内聚的状态机，避免业务逻辑退化为表单堆砌。',
          '可维护性：在持续高频迭代中实施严格的分层架构设计，限制模块耦合度，避免维护成本失控。',
          '并发控制：针对船舶调度与货运预订的高并发写入场景，设计基于 Redis 的分布式锁与数据库乐观锁机制。'
        ],
        results: [
          '交付一套覆盖多角色协作、具备工业级稳定性的船舶货运管理系统。',
          '在实际运行中把典型调度业务的处理延迟降低了 40%，实现高吞吐量写入。',
          '实现核心代码测试覆盖率达到 75% 以上，并在复杂业务与工程复杂度间找到演进平衡。'
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
