# 彭国超 (Guochao Peng)

**AI 智能体 / AI 应用 / 全栈开发工程师 & 负责人**

- **GitHub:** [https://github.com/guochaopeng110-maker](https://github.com/guochaopeng110-maker)
- **Email:** guochaopeng110maker@gmail.com
- **定位:** 聚焦于多智能体（Multi-Agent）系统设计、大模型 application 落地、高性能 Web3D/多媒体交互与工业控制系统的端到端交付。能够将确定性控制系统的严谨性与大模型的智能涌现相结合，交付高可靠、生产级的全栈系统。

---

## 🛠️ 核心能力域 (Capability Matrix)

- **AI 智能体与 AI 应用:** 熟练掌握多智能体工作流编排（LangGraph / LangChain）。主导过多智能体角色扮演、规划/执行（ReAct, Plan-and-Solve）及 RAG 架构设计。具备命令行 Agent 构建经验，掌握 Shell 沙箱拦截与命令安全校验机制。
- **Web3D / VR / 空间计算:** 精通 Babylon.js 网页端 3D 渲染与事件交互管线设计；熟练使用 Unity 及 PICO VR SDK 开发沉浸式仿真应用，独创数据驱动的“3D 空间凝视交互系统”（Gaze Interaction System）。
- **多媒体与分支互动视频:** 精通 FFmpeg 多媒体流拼接与 TTS 语音合成自动化工作流；独创基于 React 19 与 Shaka Player 双实例交替拼接架构，完美消灭多分支互动视频切换时的黑屏与音频卡顿痛点。
- **全栈与工程化交付:** 精通 Node.js、TypeScript、React / Next.js、Dart/Flutter 进行全栈开发。具备严格的模块化分层（DDD）设计及异步解耦能力，熟悉 Docker 容器化及灰度发布链路。
- **底层系统与工业软件:** 具备深厚的 C++、Qt 及工业 DCS / PLC 系统集成积淀，熟练设计高并发设备调度与实时通信总线，运用分布式锁与乐观锁解决复杂工业高并发写入冲突。

---

## 💼 职业演进历程 (Career Journey)

### **天度（厦门）科技股份有限公司** 
*2024 - 至今 | AI 智能体 / AI 应用 / 全栈开发负责人*
- 主导研发 TDuMAIC (MAIC-AI-Classroom) 多智能体互动课堂平台，设计多角色智能体协同讨论与课件多模态自动化生成流。
- 设计多智能体状态机流转与意图路由架构，打通 OpenClaw 协议，支持飞书、Slack、Discord 等 20+ 聊天软件一键唤醒并生成 AI 互动课堂。
- 基于 Python 研发 CLI Agent 框架 `ai-agent-engineering-journey`，实现命令行级自主开发动作，并设计了进程级隔离的安全执行沙箱。

*2023 - 2024 | 资深全栈开发工程师*
- 负责 Web3D 空间计算的技术融合与产品研发，独立研发网页端 3D 播放器 `exm-player-web3d`，构建轻量化 Babylon.js 事件交互总线。
- 主导研发 `interactive-video-playground` 互动视频引擎，引入 Shaka Player 双实例交替切换架构，消灭互动剧切换黑屏痛点，实现秒开播放。

### **长沙兴盛优选有限公司** 
*2021 - 2023 | DCS 设备控制系统工程师 / 全栈开发*
- 负责工业级仓储 DCS（设备控制系统）与 PLC 的通信集成，基于 C++ / Qt 构建多厂商异构设备调度总线。
- 针对高并发仓储调度与设备写入场景，设计基于 Redis 的分布式锁与数据库乐观锁的并发控制方案，确保控制精度与数据高可用。
- 探索规则引擎在大仓物流异常诊断中的落地，设计设备故障报警 RAG 快速匹配链路。

### **天度（厦门）科技股份有限公司** 
*2015 - 2021 | VR / Web3D / C++ 资深工程师*
- 基于 C++、Qt 与 Unity 研发仿真系统与交互式 VR 软件，成功交付多个军工与工业高可靠仿真项目。
- 研发早期 Unity VR 凝视交互系统（`building-stared-navigator-pico`），实现完全数据驱动的凝视选择组件，极大提升了无外设 VR 体验的便捷性。
- 设计多媒体视频编排脚本及剪辑工具，为团队多媒体内容生成奠定了早期的工程基线。

---

## 🏆 代表性项目案例 (Key Projects)

### **1. TDuMAIC 多智能体互动课堂平台 (MAIC-AI-Classroom)**
- **项目描述:** 一键将文档或主题生成由 AI 讲师和 AI 同学协同讲解的互动课堂。包含 PPTX 生成、答题模拟及多端聊天机器人接入。
- **核心架构:**
  - **THINK (决策层):** 基于 LangGraph 状态机定义多智能体在课堂中的对话流与发言权重，避免生成冲突。
  - **SENSE (感知层):** 接入 OpenClaw 协议，将用户在飞书、Slack 发起的提问转化为路由意图分发。
  - **ACT (执行层):** 自动生成结构化 JSON，驱动上层白板公式渲染与 PPTX 主题文件导出。

### **2. CLI Agent 命令行智能体与安全沙箱 (ai-agent-engineering-journey)**
- **项目描述:** 基于 learn-claude-code 框架自主手写的本地命令行开发助手，实现自主文件读写、修改与 Shell 命令调用的 ReAct 循环。
- **技术突破:**
  - **安全执行沙箱:** 在 Python 进程隔离层之上，实现了严密的操作路径边界校验与高危 Shell 指令拦截（防范系统级命令破坏）。
  - **ReAct 自动纠错:** 针对编译或命令执行报错自动捕获输出日志，回传至 Agent 上下文进行动作纠错与代码自愈。

### **3. exm-player-web3d & building-stared-navigator-pico**
- **项目描述:** 跨网页端与沉浸式 VR 端的 3D 空间交互与高仿真运行底座。
- **技术突破:**
  - **网页端:** 基于 Babylon.js 优化 DrawCall 与网格模型，使用 Draco 压缩模型资产，实现轻量化渲染及手势动作事件的标准化绑定。
  - **VR 端:** 基于 Unity XR Toolkit 与 PICO Unity SDK 开发。独创数据驱动的“凝视交互系统”（Gaze Interaction System），使用射线轮询与完全解耦的数据状态驱动交互，摆脱了硬编码事件的局限。

### **4. interactive-video-playground 互动视频引擎**
- **项目描述:** 面向下一代多分支互动视频与短剧的高性能播放及合成引擎。
- **技术突破:**
  - **切换零延迟:** 针对分支选择时的瞬间黑屏黑音痛点，设计了 **Shaka Player 双实例交替拼接渲染** 架构。
  - **核心逻辑:** 播放 A 实例时，在后台预加载 B 分支视频，切换时通过“A 实例静音隐藏、B 实例有声显示”实现无缝跳转，帧率稳定在 60fps。

### **5. 工业仓储 DCS 设备控制与调度系统**
- **项目描述:** 实现大型高密度异构仓储设备的稳定编排与并发实时控制。
- **技术突破:**
  - **并发冲突防护:** 采用 Redis 实现了分布式防重锁，配合 MySQL 乐观锁保障底层 PLC 接收调度指令时的事务原子性，防止多次投递。
  - **设备抽象层:** 在 DCS 与 PLC 接入层封装了统一设备指令协议，支持多异构设备（堆垛机、输送线）的热插拔与平滑扩容。

---

## 🎓 教育与专业技能 (Education & Skills)

- **专业技能:** 精通 Python, Node.js, C/C++, TypeScript, Dart/Flutter, React/Next.js, Unity 3D, WebGL/Babylon.js.
