import { useState, useRef, useEffect } from "react";
import { useLocale } from "../context/I18nContext";
import { HolographicAgent } from "./HolographicAgent";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export function AIChatBot() {
  const { locale, content } = useLocale();
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isTalking, setIsTalking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Suggested questions in active locale
  const getSuggestions = () => {
    return locale === "zh"
      ? [
          "介绍一下 MAIC 多智能体课堂",
          "他在 3D/VR 领域有什么积累？",
          "如何联系他并下载简历？",
        ]
      : [
          "Tell me about MAIC AI Classroom",
          "What is his experience in 3D/VR?",
          "How to contact him & download CV?",
        ];
  };

  // Initialize greeting on mount / locale change
  useEffect(() => {
    const greeting =
      locale === "zh"
        ? "您好！我是 Guochao Peng 的 3D 全息助手 GCPeng-Bot。我可以回答您关于他的技术栈、开源项目或工作经历的任何问题，请随时提问！"
        : "Hello! I am GCPeng-Bot, Guochao Peng's Holographic AI Assistant. I can answer any questions about his technical skills, open-source projects, or career history. Feel free to ask!";
    
    setMessages([{ sender: "bot", text: greeting }]);
  }, [locale]);

  // Scroll to bottom when messages update
  useEffect(() => {
    if (messagesEndRef.current?.scrollIntoView) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isThinking]);

  // Process user queries and match responses offline
  const handleQuery = (queryText: string) => {
    if (!queryText.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: queryText }]);
    setInputValue("");
    setIsThinking(true);

    // Simulate AI thinking delay (600ms), then type out reply
    setTimeout(() => {
      setIsThinking(false);
      const matchedResponse = getOfflineResponse(queryText, locale);
      typeOutResponse(matchedResponse);
    }, 700);
  };

  // Typing simulator effect synchronized with 3D lipsync animation
  const typeOutResponse = (fullText: string) => {
    setIsTalking(true);
    let currentText = "";
    const words = [...fullText]; // Support emoji and multi-byte characters
    let index = 0;

    // Create an empty bot message bubble to fill in
    setMessages((prev) => [...prev, { sender: "bot", text: "" }]);

    const interval = setInterval(() => {
      if (index < words.length) {
        currentText += words[index];
        setMessages((prev) => {
          const updated = [...prev];
          if (updated.length > 0) {
            updated[updated.length - 1] = { sender: "bot", text: currentText };
          }
          return updated;
        });
        index++;
      } else {
        clearInterval(interval);
        setIsTalking(false);
      }
    }, 15);
  };

  // Trigger send on enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleQuery(inputValue);
    }
  };

  return (
    <div className="ai-chatbot-root" data-testid="ai-chatbot-root">
      {/* Floating neon button in the bottom corner */}
      <button
        className={`chatbot-toggle-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <div className="btn-glow-container">
            <span className="btn-ping-pulse"></span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
        )}
      </button>

      {/* Slide-up glassmorphic chat container */}
      <div className={`chatbot-window-wrapper ${isOpen ? "visible" : ""}`} data-testid="chatbot-window">
        <header className="chatbot-header">
          {/* 3D Holographic Head embedded directly inside the panel header */}
          <div className="hologram-avatar-viewport" data-testid="holographic-agent-container">
            <HolographicAgent isThinking={isThinking} isTalking={isTalking} />
          </div>
          <div className="chatbot-header-info">
            <h4>GCPeng-Bot</h4>
            <span className="chatbot-status">
              <span className="status-indicator-dot"></span>
              {locale === "zh" ? "全息自愈智能体" : "Hologram Agent"}
            </span>
          </div>
        </header>

        {/* Scrollable messages log */}
        <div className="chatbot-messages-container" data-testid="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-message-bubble ${msg.sender}`} data-testid={`msg-${msg.sender}`}>
              <div className="message-content-text">{msg.text}</div>
            </div>
          ))}
          
          {isThinking && (
            <div className="chat-message-bubble bot thinking-bubble" data-testid="thinking-indicator">
              <div className="thinking-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Question chips */}
        <div className="chatbot-suggestions-chips" data-testid="chatbot-suggestions">
          {getSuggestions().map((suggestion, idx) => (
            <button
              key={idx}
              className="suggestion-chip-btn"
              onClick={() => handleQuery(suggestion)}
              disabled={isThinking || isTalking}
            >
              {suggestion}
            </button>
          ))}
        </div>

        {/* Bottom Input Area */}
        <footer className="chatbot-input-footer">
          <input
            type="text"
            className="chatbot-text-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={locale === "zh" ? "问我关于 Guochao 的经历..." : "Ask me about Guochao..."}
            disabled={isThinking || isTalking}
            data-testid="chatbot-input"
          />
          <button
            className="chatbot-send-btn"
            onClick={() => handleQuery(inputValue)}
            disabled={!inputValue.trim() || isThinking || isTalking}
            aria-label="Send message"
            data-testid="chatbot-send-btn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </footer>
      </div>
    </div>
  );
}

// Local Semantic Context Router (millisecond offline lookup)
function getOfflineResponse(query: string, lang: string): string {
  const q = query.toLowerCase();

  if (lang === "zh") {
    if (q.includes("classroom") || q.includes("maic") || q.includes("课堂") || q.includes("智能体课堂") || q.includes("教育")) {
      return "TDuMAIC (MAIC-AI-Classroom) 是由 Guochao 主导研发的多智能体互动课堂系统。该系统基于 LangGraph 进行多智能体协作与决策流控制，支持 PPTX 课件、SVG 白板一键生成，并支持接入飞书、Slack 等 20+ 聊天软件。核心学术论文作为第一作者已发表于 JCST'26，并在 GitHub 开源。";
    }
    if (q.includes("agent") || q.includes("journey") || q.includes("cli") || q.includes("命令行") || q.includes("手写") || q.includes("沙箱")) {
      return "Guochao 独立研发了 ai-agent-engineering-journey 智能命令行开发框架。该项目基于 Python 从零实现 ReAct 动作环路，并在子进程 (subprocess) 隔离层封装了命令白名单与敏感操作（如 rm -rf）路径边界验证。此外，它能捕获运行报错并回传给大模型进行自动修复，实现闭环安全自愈。";
    }
    if (q.includes("mystery") || q.includes("solving") || q.includes("game") || q.includes("审讯") || q.includes("古风") || q.includes("解谜") || q.includes("游戏")) {
      return "LLM-MysterySolving 是一款由 Guochao 独立开发的 2D 古风审讯解谜游戏。该项目基于 Unity 引擎开发，深度对接 DeepSeek API，实现了根据玩家的对话和出示的证物动态调整嫌疑人的压力值和情绪态度，从而驱动不同的故事线和线索揭示。";
    }
    if (q.includes("interactive") || q.includes("learning") || q.includes("互动课程") || q.includes("学校") || q.includes("课程视频") || q.includes("分支")) {
      return "Interactive-Video-Learning-with-AI 是一个面向学校的 AI 互动课程视频平台。它的核心是通过大模型自动围绕知识点生成分段视频素材，再由老师编排成带有互动测验和分支剧情的课程视频，学生可通过答题决策选择不同的学习分支路径。";
    }
    if (q.includes("drama") || q.includes("studio") || q.includes("短剧") || q.includes("制作") || q.includes("自动化")) {
      return "DramaStudio 是一个全栈 AI 短剧自动化制作平台（私有仓库）。它通过串联大语言模型、文生图及图生视频服务，实现了从剧本解析、角色卡设计、分镜渲染到音视频后期合成（基于 FFmpeg）的自动化视频生产流。";
    }
    if (q.includes("comic") || q.includes("director") || q.includes("漫剧")) {
      return "ComicDirector 是一个基于自然语言自动生成漫剧的开源工具。它能将结构化剧本内容解析并映射到对应的分镜图象生成模型中，进行多轨合成编排。";
    }
    if (q.includes("subtitle") || q.includes("erase") || q.includes("字幕") || q.includes("擦除") || q.includes("火山")) {
      return "EraseVideoSubtitle 是一款 Next.js 14 全栈字幕擦除系统。它深度集成火山引擎 MediaKit 视频 AI 擦除接口，为视频创作者提供硬字幕的高精度擦除服务。";
    }
    if (q.includes("3d") || q.includes("vr") || q.includes("babylon") || q.includes("pico") || q.includes("unity") || q.includes("虚拟现实") || q.includes("交互") || q.includes("gaze") || q.includes("凝视")) {
      return "Guochao 在 3D 与 VR 空间计算领域拥有深厚的工程积累。包括基于 Babylon.js 研发的轻量网页 3D 实验场景播放器 (exm-player-web3d)，以及在 PICO VR 头显上研发的非侵入式、完全数据驱动的 3D 空间凝视交互系统 (Gaze System)，此外还在 interactive-video-playground 中采用 Shaka Player 双实例交替拼接架构消除了互动视频分支切换的黑屏卡顿。";
    }
    if (q.includes("ship") || q.includes("cargo") || q.includes("cargoship") || q.includes("船舶") || q.includes("监控") || q.includes("机舱")) {
      return "CargoShipManage 是一个基于现代全栈架构（Next.js / Node.js）构建的船舶机舱智能监控平台。针对高并发数据写入场景，Guochao 设计了基于 Redis 的分布式锁与乐观锁并发机制，并采用领域驱动设计（DDD）进行异步解耦，将典型调度延迟降低了 40%。";
    }
    if (q.includes("dcs") || q.includes("plc") || q.includes("qt") || q.includes("c++") || q.includes("工业") || q.includes("控制") || q.includes("硬件")) {
      return "Guochao 拥有 6 年以上的 C++ / Qt 工业仿真与 DCS 控制系统开发经验。他在长沙兴盛优选和天度科技主导了多个仓储 DCS 设备控制总线、DCS/PLC 异构通信协议集成，以及大型军工/工业三维高保真仿真控制台的研发。";
    }
    if (q.includes("contact") || q.includes("mail") || q.includes("email") || q.includes("简历") || q.includes("联系") || q.includes("邮箱") || q.includes("求职")) {
      return "您可以通过以下方式联系 Guochao Peng：\n• 📧 邮箱：guochaopeng110maker@gmail.com\n• 🐙 GitHub：https://github.com/guochaopeng110-maker\n• 📄 简历：您可以点击 Hero 区域的“下载 PDF 简历”按钮下载他的完整履历。";
    }
    if (q.includes("timeline") || q.includes("experience") || q.includes("经历") || q.includes("历史") || q.includes("公司")) {
      return "Guochao 的技术生涯经历了以下几个核心演进阶段：\n1. 2024-至今：天度科技（AI 智能体 / 全栈开发负责人）- 主导多智能体课堂及 AI 视频合成流。\n2. 2023-2024：天度科技（资深全栈工程师）- 融合 Web3D、VR 空间计算与互动视频引擎。\n3. 2021-2023：兴盛优选（DCS设备控制/全栈）- DCS通信总线与高并发 Redis 锁控制。\n4. 2015-2021：天度科技（VR/C++资深工程师）- 研发 C++、Qt 及 Unity 仿真系统。";
    }

    // Default Fallback in Chinese
    return "抱歉，我对这部分内容的了解可能不够深入。您可以试着问我关于他开发的 **'MAIC多智能体课堂'**、**'3D/VR仿真交互'**，或者 **'CargoShipManage船舶系统'**，或者直接向我打听他的 **'联系方式'**！";
  } else {
    // English responses
    if (q.includes("classroom") || q.includes("maic") || q.includes("class")) {
      return "TDuMAIC (MAIC-AI-Classroom) is a multi-agent interactive classroom platform led by Guochao. Based on LangGraph for state-machine orchestration and intent routing, it generates PPTX/SVG learning assets and integrates with Feishu/Slack (20+ clients). The core research was published in JCST'26 as first author.";
    }
    if (q.includes("agent") || q.includes("journey") || q.includes("cli") || q.includes("sandbox") || q.includes("react")) {
      return "Guochao created the ai-agent-engineering-journey repo, a Python CLI developer Agent built from scratch. It utilizes a ReAct loop, checks commands against safety constraints in subprocess sandboxes (blocking commands like rm -rf), and features self-healing code error feedback loop.";
    }
    if (q.includes("mystery") || q.includes("solving") || q.includes("game")) {
      return "LLM-MysterySolving is a 2D ancient interrogation puzzle game built with Unity and DeepSeek API. It dynamically alters suspect stress values and attitude based on player statements and evidence, branching the story accordingly.";
    }
    if (q.includes("interactive") || q.includes("video") || q.includes("learning") || q.includes("branch") || q.includes("school")) {
      return "Interactive-Video-Learning-with-AI is an educational interactive video platform. It breaks syllabus down into video segments using LLMs, which teachers orchestrate into branching video scenarios. Students interact via paths and quizzes.";
    }
    if (q.includes("drama") || q.includes("studio") || q.includes("short")) {
      return "DramaStudio is a full-stack automated AI short video production platform. It orchestrates LLMs, SD, and video generation APIs to automatically parse scripts, design character models, render storyboards, and run FFmpeg timelines.";
    }
    if (q.includes("comic") || q.includes("director") || q.includes("manga")) {
      return "ComicDirector is an open-source tool generating manga drama from natural language, mapping structured screenplay lines to image generation endpoints.";
    }
    if (q.includes("subtitle") || q.includes("erase") || q.includes("volcengine")) {
      return "EraseVideoSubtitle is a Next.js 14 full-stack hard subtitle removal platform. It integrates Volcengine MediaKit video AI erasure services for high-fidelity subtitle restoration.";
    }
    if (q.includes("3d") || q.includes("vr") || q.includes("babylon") || q.includes("pico") || q.includes("unity") || q.includes("gaze")) {
      return "Guochao has strong experience in spatial computing. Projects include exm-player-web3d (lightweight Babylon.js player), building-stared-navigator-pico (a data-driven VR gaze interaction system on PICO VR HMD), and interactive-video-playground (seamless branching video switcher using dual Shaka Player instances).";
    }
    if (q.includes("ship") || q.includes("cargo") || q.includes("cargoship")) {
      return "CargoShipManage is an intelligent monitoring platform for ship engine rooms built with Next.js / Node.js. Applying DDD architecture and Redis/optimistic locking, it manages high-concurrency sensor writes and reduces scheduling latency by 40%.";
    }
    if (q.includes("dcs") || q.includes("plc") || q.includes("qt") || q.includes("c++") || q.includes("industrial") || q.includes("control")) {
      return "Guochao has 6+ years of experience in C++ / Qt industrial simulations and DCS. He designed warehouse DCS equipment buses, integrated PLC heterogeneous communication, and developed military/industrial simulators.";
    }
    if (q.includes("contact") || q.includes("mail") || q.includes("email") || q.includes("resume") || q.includes("cv")) {
      return "You can contact Guochao Peng via:\n• 📧 Email: guochaopeng110maker@gmail.com\n• 🐙 GitHub: https://github.com/guochaopeng110-maker\n• 📄 Resume: Click the 'Download PDF Resume' button in the Hero section of the homepage.";
    }
    if (q.includes("timeline") || q.includes("experience") || q.includes("career") || q.includes("history")) {
      return "Guochao's technical journey:\n1. 2024-Pres: Tiandu Tech (AI Agent & Full-Stack Lead) - multi-agent classrooms & video generation pipelines.\n2. 2023-2024: Tiandu Tech (Senior Full-Stack) - Web3D, VR Gaze systems & interactive video.\n3. 2021-2023: Xingsheng Youxuan (DCS Engineer/Full-Stack) - warehouse DCS and concurrent Redis locks.\n4. 2015-2021: Tiandu Tech (Senior VR/C++) - C++, Qt, and Unity high-fidelity industrial simulators.";
    }

    // Default Fallback in English
    return "I'm sorry, I don't have detailed info on that topic. Try asking me about his **'MAIC Multi-Agent Classroom'**, **'Web3D/VR Interaction'**, **'CargoShipManage Platform'**, or his **'Contact details'**!";
  }
}
