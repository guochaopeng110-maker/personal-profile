import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLocale } from "../context/I18nContext";

// ScrollRevealSection component for viewport-driven reveal animations (performance friendly & JSDOM test safe)
function ScrollRevealSection({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    // If not in a browser environment or IntersectionObserver is not defined (e.g. under jsdom tests), fallback instantly
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`scroll-reveal ${isRevealed ? "revealed" : ""} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

export function HomePage() {
  const { locale, content } = useLocale();
  const { hero, narrative, themes, timeline, skills } = content;
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Theme slider (horizontal) states
  const themeEntries = Object.entries(themes.items);
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setCurrentThemeIndex((prev) => (prev + 1) % themeEntries.length);
    } else if (isRightSwipe) {
      setCurrentThemeIndex((prev) => (prev - 1 + themeEntries.length) % themeEntries.length);
    }
  };

  const nextSlide = () => {
    setCurrentThemeIndex((prev) => (prev + 1) % themeEntries.length);
  };

  const prevSlide = () => {
    setCurrentThemeIndex((prev) => (prev - 1 + themeEntries.length) % themeEntries.length);
  };

  // Full-page vertical scrolling states
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const totalPages = 5;

  // Track page transitions and scroll boundaries
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const sections = document.querySelectorAll(".fullpage-section");
      const activeSection = sections[activePageIndex] as HTMLElement;
      
      if (activeSection) {
        const scrollTop = activeSection.scrollTop;
        const scrollHeight = activeSection.scrollHeight;
        const clientHeight = activeSection.clientHeight;

        if (e.deltaY > 0) {
          if (scrollTop + clientHeight < scrollHeight - 5) {
            return;
          }
        } else if (e.deltaY < 0) {
          if (scrollTop > 5) {
            return;
          }
        }
      }

      if (isTransitioning) return;

      if (e.deltaY > 20) {
        if (activePageIndex < totalPages - 1) {
          e.preventDefault();
          setIsTransitioning(true);
          setActivePageIndex((prev) => prev + 1);
          setTimeout(() => setIsTransitioning(false), 800);
        }
      } else if (e.deltaY < -20) {
        if (activePageIndex > 0) {
          e.preventDefault();
          setIsTransitioning(true);
          setActivePageIndex((prev) => prev - 1);
          setTimeout(() => setIsTransitioning(false), 800);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activePageIndex, isTransitioning]);

  const handleTouchStartGlobal = (e: TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEndGlobal = (e: TouchEvent) => {
    if (touchStartY === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaY = touchStartY - touchEndY;
    const minSwipe = 50;

    const sections = document.querySelectorAll(".fullpage-section");
    const activeSection = sections[activePageIndex] as HTMLElement;
    
    if (activeSection) {
      const scrollTop = activeSection.scrollTop;
      const scrollHeight = activeSection.scrollHeight;
      const clientHeight = activeSection.clientHeight;

      if (deltaY > 0) {
        if (scrollTop + clientHeight < scrollHeight - 5) return;
      } else if (deltaY < 0) {
        if (scrollTop > 5) return;
      }
    }

    if (isTransitioning) return;

    if (deltaY > minSwipe) {
      if (activePageIndex < totalPages - 1) {
        setIsTransitioning(true);
        setActivePageIndex((prev) => prev + 1);
        setTimeout(() => setIsTransitioning(false), 800);
      }
    } else if (deltaY < -minSwipe) {
      if (activePageIndex > 0) {
        setIsTransitioning(true);
        setActivePageIndex((prev) => prev - 1);
        setTimeout(() => setIsTransitioning(false), 800);
      }
    }
    setTouchStartY(null);
  };

  useEffect(() => {
    window.addEventListener("touchstart", handleTouchStartGlobal, { passive: true });
    window.addEventListener("touchend", handleTouchEndGlobal, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStartGlobal);
      window.removeEventListener("touchend", handleTouchEndGlobal);
    };
  }, [activePageIndex, isTransitioning, touchStartY]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning) return;
      
      const sections = document.querySelectorAll(".fullpage-section");
      const activeSection = sections[activePageIndex] as HTMLElement;
      
      let scrollTop = 0;
      let scrollHeight = 0;
      let clientHeight = 0;
      if (activeSection) {
        scrollTop = activeSection.scrollTop;
        scrollHeight = activeSection.scrollHeight;
        clientHeight = activeSection.clientHeight;
      }

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        if (activeSection && scrollTop + clientHeight < scrollHeight - 5) return;
        if (activePageIndex < totalPages - 1) {
          e.preventDefault();
          setIsTransitioning(true);
          setActivePageIndex((prev) => prev + 1);
          setTimeout(() => setIsTransitioning(false), 800);
        }
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        if (activeSection && scrollTop > 5) return;
        if (activePageIndex > 0) {
          e.preventDefault();
          setIsTransitioning(true);
          setActivePageIndex((prev) => prev - 1);
          setTimeout(() => setIsTransitioning(false), 800);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePageIndex, isTransitioning]);


  // Technical summaries for SVG graph nodes hover states (strictly zero em-dashes)
  const nodeInfoZH: Record<string, string> = {
    dcs: "DCS / PLC 底层设备控制系统：严谨的状态机流转、乐观锁并发控制及异构硬件集成底色。",
    "3d-vr": "Web3D 与 VR 空间计算：Babylon.js 轻量级 3D 空间渲染，以及 Unity/PICO VR 数据驱动凝视交互设计。",
    stack: "全栈与工程化交付：Next.js、Node.js 敏捷交付，Redis 分布式锁、Docker 容器化与 Jenkins 自动化发布。",
    "ai-agent": "AI 智能体与 AI 应用：LangGraph 多智能体编排状态机，以及 CLI Agent 进程隔离安全沙箱与自愈循环。",
    default: "点击或悬停上方拓扑图谱节点，查看职业演进不同阶段的核心技术沉淀。"
  };

  const nodeInfoEN: Record<string, string> = {
    dcs: "DCS / PLC low-level control systems: rigorous state machines, optimistic locks and heterogeneous hardware integration.",
    "3d-vr": "Web3D and VR spatial computing: Babylon.js lightweight 3D spatial rendering, and Unity/PICO VR data-driven gaze systems.",
    stack: "Full-stack delivery and engineering: Next.js/Node.js agile delivery, Redis locks, Docker and Jenkins automation.",
    "ai-agent": "AI Agents and applications: LangGraph multi-agent orchestration, and CLI Agent subprocess safety sandbox self-healing.",
    default: "Hover or click nodes on the topology graph to inspect core engineering layers from different career stages."
  };

  const nodeInfo = locale === "zh" ? nodeInfoZH : nodeInfoEN;

  return (
    <div className="fullpage-wrapper">
      <div 
        className="fullpage-container" 
        style={{ transform: `translateY(-${activePageIndex * 100}vh)` }}
      >
        {/* Page 1: Hero */}
        <section className="fullpage-section">
          <div className="section-card-wrapper">
            <div className="hero hero-grid animate-fade-in-up" data-testid="hero-section">
              <div className="hero-copy">
                <p className="eyebrow">{hero.eyebrow}</p>
                <h1>{hero.title}</h1>
                <p className="lede">{hero.lede}</p>
                <p className="supporting-copy">{hero.supporting}</p>
                <div className="actions">
                  <a href={`${import.meta.env.BASE_URL}docs/MyResume.pdf`}>
                    {hero.actions.resume}
                  </a>
                  <a href="https://github.com/guochaopeng110-maker">
                    {hero.actions.github}
                  </a>
                  <a href="mailto:guochaopeng110maker@gmail.com">
                    {hero.actions.email}
                  </a>
                </div>
              </div>

              <aside className="hero-panel" aria-label={hero.hiringSignalsTitle}>
                <div className="panel-visual">
                  <div className="tech-graph">
                    <svg className="graph-svg" viewBox="0 0 200 160">
                      <defs>
                        <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.8"/>
                          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.8"/>
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>
                      
                      {/* Connecting paths */}
                      <path d="M 40 40 L 160 40 L 160 120 L 40 120 Z" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" />
                      <path d="M 40 40 L 160 120 M 160 40 L 40 120" fill="none" stroke="rgba(0, 240, 255, 0.08)" strokeWidth="1" strokeDasharray="3,3" />
                      
                      {/* Active path indicator */}
                      <path className="active-path" d="M 40 40 L 160 40 L 160 120" fill="none" stroke="url(#glowGrad)" strokeWidth="2" strokeDasharray="15, 120" />
                      <path className="active-path-rev" d="M 160 120 L 40 120 L 40 40" fill="none" stroke="url(#glowGrad)" strokeWidth="2" strokeDasharray="15, 120" />

                      {/* Nodes */}
                      {/* DCS/PLC */}
                      <g 
                        className={`graph-node ${hoveredNode === 'dcs' ? 'active' : ''}`} 
                        transform="translate(40, 40)"
                        onMouseEnter={() => setHoveredNode('dcs')}
                        onMouseLeave={() => setHoveredNode(null)}
                        onClick={() => setHoveredNode('dcs')}
                      >
                        <circle r="10" fill="var(--color-bg-base)" stroke={hoveredNode === 'dcs' ? "var(--color-primary)" : "var(--color-text-muted)"} strokeWidth="2" />
                        <circle r="3" fill={hoveredNode === 'dcs' ? "var(--color-primary)" : "var(--color-text-muted)"} />
                        <text y="-16" textAnchor="middle" fontSize="8" fill={hoveredNode === 'dcs' ? "var(--color-primary)" : "var(--color-text-muted)"} fontFamily="var(--font-mono)">DCS</text>
                      </g>
                      {/* Web3D/VR */}
                      <g 
                        className={`graph-node active ${hoveredNode === '3d-vr' ? 'focus' : ''}`} 
                        transform="translate(160, 40)"
                        onMouseEnter={() => setHoveredNode('3d-vr')}
                        onMouseLeave={() => setHoveredNode(null)}
                        onClick={() => setHoveredNode('3d-vr')}
                      >
                        <circle r="10" fill="var(--color-bg-base)" stroke="var(--color-primary)" strokeWidth="2" filter="url(#glow)" />
                        <circle className="ping-dot" r="3.5" fill="var(--color-primary)" />
                        <text y="-16" textAnchor="middle" fontSize="8" fill="var(--color-primary)" fontFamily="var(--font-mono)">3D/VR</text>
                      </g>
                      {/* Full-Stack */}
                      <g 
                        className={`graph-node active ${hoveredNode === 'stack' ? 'focus' : ''}`} 
                        transform="translate(160, 120)"
                        onMouseEnter={() => setHoveredNode('stack')}
                        onMouseLeave={() => setHoveredNode(null)}
                        onClick={() => setHoveredNode('stack')}
                      >
                        <circle r="10" fill="var(--color-bg-base)" stroke="var(--color-primary)" strokeWidth="2" filter="url(#glow)" />
                        <circle className="ping-dot" r="3.5" fill="var(--color-primary)" />
                        <text y="20" textAnchor="middle" fontSize="8" fill="var(--color-primary)" fontFamily="var(--font-mono)">STACK</text>
                      </g>
                      {/* AI Agents */}
                      <g 
                        className={`graph-node active ${hoveredNode === 'ai-agent' ? 'focus' : ''}`} 
                        transform="translate(40, 120)"
                        onMouseEnter={() => setHoveredNode('ai-agent')}
                        onMouseLeave={() => setHoveredNode(null)}
                        onClick={() => setHoveredNode('ai-agent')}
                      >
                        <circle r="12" fill="var(--color-bg-base)" stroke="var(--color-accent)" strokeWidth="2" filter="url(#glow)" />
                        <circle className="ping-dot" r="4.5" fill="var(--color-accent)" />
                        <text y="22" textAnchor="middle" fontSize="8" fill="var(--color-accent)" fontFamily="var(--font-mono)">AI_AGENT</text>
                      </g>
                    </svg>
                  </div>
                  
                  <div className="panel-info">
                    <span className="panel-status-tag"><span className="pulse-dot"></span>SYSTEM_ACTIVE</span>
                    <p className="eyebrow" style={{ margin: 0 }}>{hero.hiringSignalsTitle}</p>
                  </div>

                  <div className="node-tooltip-panel">
                    <p className="node-tooltip-text">
                      {hoveredNode ? nodeInfo[hoveredNode] : nodeInfo['default']}
                    </p>
                  </div>
                </div>

                <ul className="signal-list">
                  {hero.hiringSignals.map((signal) => (
                    <li key={signal}>{signal}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        {/* Page 2: Narrative */}
        <section className="fullpage-section">
          <div className="section-card-wrapper">
            <ScrollRevealSection className="section narrative-section animate-fade-in-up" data-testid="narrative-section">
              <div className="section-heading">
                <p className="eyebrow">{narrative.eyebrow}</p>
                <h2>{narrative.title}</h2>
              </div>
              <div className="narrative-grid">
                {narrative.cards.map((card, index) => (
                  <article key={index} className="narrative-card">
                    <h3>{card.title}</h3>
                    <p>{card.p}</p>
                  </article>
                ))}
              </div>
            </ScrollRevealSection>
          </div>
        </section>

        {/* Page 3: Timeline */}
        <section className="fullpage-section">
          <div className="section-card-wrapper">
            <ScrollRevealSection className="section timeline-section animate-fade-in-up" data-testid="timeline-section">
              <div className="section-heading">
                <p className="eyebrow">{timeline.eyebrow}</p>
                <h2>{timeline.title}</h2>
                <p className="section-intro">{timeline.intro}</p>
              </div>
              <div className="timeline-container">
                {timeline.items.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <span className="timeline-period">{item.period}</span>
                      <h3 className="timeline-company">{item.company}</h3>
                      <p className="timeline-role">{item.role}</p>
                      <ul className="timeline-contributions">
                         {item.contributions.map((contribution, idx) => (
                          <li key={idx}>{contribution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollRevealSection>
          </div>
        </section>

        {/* Page 4: Skills */}
        <section className="fullpage-section">
          <div className="section-card-wrapper">
            <ScrollRevealSection className="section skills-section animate-fade-in-up" data-testid="skills-section">
              <div className="section-heading">
                <p className="eyebrow">{skills.eyebrow}</p>
                <h2>{skills.title}</h2>
                <p className="section-intro">{skills.intro}</p>
              </div>
              <div className="skills-grid">
                {skills.domains.map((domain, index) => (
                  <article key={index} className="skills-card">
                    <h3>{domain.name}</h3>
                    <p className="skills-desc">{domain.description}</p>
                    <div className="skills-tags">
                      {domain.tools.map((tool, idx) => (
                        <span key={idx} className="skills-tag">{tool}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </ScrollRevealSection>
          </div>
        </section>

        {/* Page 5: Themes */}
        <section className="fullpage-section">
          <div className="section-card-wrapper">
            <ScrollRevealSection
              id="themes"
              className="section themes-section animate-fade-in-up"
              data-testid="themes-section"
              aria-label={themes.title}
            >
              <div className="section-heading">
                <p className="eyebrow">{themes.eyebrow}</p>
                <h2>{themes.title}</h2>
                <p className="section-intro">{themes.intro}</p>
              </div>

              {/* Theme tabs for quick navigation */}
              <div className="theme-slider-tabs" role="tablist">
                {themeEntries.map(([slug, item], index) => (
                  <button
                    key={slug}
                    role="tab"
                    aria-selected={currentThemeIndex === index}
                    className={`theme-slider-tab ${currentThemeIndex === index ? "active" : ""}`}
                    onClick={() => setCurrentThemeIndex(index)}
                  >
                    {item.title}
                  </button>
                ))}
              </div>

              <div className="theme-slider-container">
                <button 
                  className="slider-nav-btn prev-btn" 
                  onClick={prevSlide}
                  aria-label="Previous Theme"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>

                <div 
                  className="theme-slider-viewport"
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  <div 
                    className="theme-slider-track"
                    style={{ transform: `translateX(-${currentThemeIndex * 100}%)` }}
                  >
                    {themeEntries.map(([slug, item], index) => (
                      <div 
                        key={slug} 
                        className={`theme-slider-slide ${currentThemeIndex === index ? "active" : ""}`}
                      >
                        <article
                          className="card theme-card"
                          data-testid="theme-card"
                          data-theme-slug={slug}
                        >
                          <h3 className="theme-card-title">{item.title}</h3>
                          <p className="theme-card-summary">{item.summary}</p>
                          <ul className="theme-card-highlights">
                            {item.highlights.map((tag, idx) => (
                              <li key={idx} className="theme-card-tag">{tag}</li>
                            ))}
                          </ul>
                          <div className="theme-card-results">
                            <p className="theme-card-label">{themes.detailPage.labels.results}</p>
                            <ul className="theme-card-results-list">
                              {item.results.map((result, idx) => (
                                <li key={idx}>{result}</li>
                              ))}
                            </ul>
                          </div>
                          <p className="theme-card-judgment">
                            <span className="theme-card-label">{themes.detailPage.labels.judgment}</span>
                            {item.judgment}
                          </p>
                          <Link
                            to={`/themes/${slug}`}
                            className="theme-card-link"
                            data-testid="theme-card-link"
                          >
                            {themes.viewDetail}
                          </Link>
                        </article>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  className="slider-nav-btn next-btn" 
                  onClick={nextSlide}
                  aria-label="Next Theme"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>

              {/* Mobile-friendly and desktop fallback navigation controls under card */}
              <div className="theme-slider-controls">
                <button 
                  className="slider-nav-btn-mobile prev-btn" 
                  onClick={prevSlide}
                  aria-label="Previous Theme"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                
                <div className="slider-dots">
                  {themeEntries.map((_, index) => (
                    <button
                      key={index}
                      className={`slider-dot ${currentThemeIndex === index ? "active" : ""}`}
                      onClick={() => setCurrentThemeIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button 
                  className="slider-nav-btn-mobile next-btn" 
                  onClick={nextSlide}
                  aria-label="Next Theme"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </ScrollRevealSection>
          </div>
        </section>
      </div>

      {/* Floating fullpage indicator dot navigation */}
      <nav className="fullpage-nav" aria-label="Page Navigation">
        {Array.from({ length: totalPages }).map((_, idx) => {
          const sectionTitles = locale === "zh" 
            ? ["个人简介", "技术演进", "职业履历", "技能模块", "项目案例"]
            : ["Profile", "Evolution", "Timeline", "Skills", "Themes"];
          return (
            <button
              key={idx}
              className={`fullpage-nav-dot ${activePageIndex === idx ? "active" : ""}`}
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                setActivePageIndex(idx);
                setTimeout(() => setIsTransitioning(false), 800);
              }}
              title={sectionTitles[idx]}
              aria-label={`Go to page ${idx + 1}: ${sectionTitles[idx]}`}
            >
              <span className="dot-label">{sectionTitles[idx]}</span>
            </button>
          );
        })}
      </nav>

      {/* Floating scroll down helper */}
      {activePageIndex < totalPages - 1 && (
        <button 
          className="fullpage-scroll-helper"
          onClick={() => {
            if (isTransitioning) return;
            setIsTransitioning(true);
            setActivePageIndex((prev) => prev + 1);
            setTimeout(() => setIsTransitioning(false), 800);
          }}
          aria-label="Next Page"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
}
