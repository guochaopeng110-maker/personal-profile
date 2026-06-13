import { Link } from "react-router-dom";

const themeHighlights = [
  {
    slug: "ai-agents",
    title: "AI 智能体与 AI 应用",
    summary: "把智能体、工作流与业务场景结合成可落地的产品能力。",
  },
  {
    slug: "web3d",
    title: "Web3D / Babylon.js",
    summary: "用浏览器 3D、空间叙事和交互工程建立技术辨识度。",
  },
];

const hiringSignals = [
  "当前主定位是 AI 智能体 / AI 应用 / 全栈开发工程师。",
  "核心优势不是概念展示，而是把复杂技术整合成可交付结果。",
  "过往 VR、Web3D 与工业系统经验，构成当前 AI 与工程化能力的差异化深度。",
];

export function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Guochao Peng</p>
          <h1>AI 智能体 / AI 应用 / 全栈开发工程师</h1>
          <p className="lede">
            面向 AI 应用、智能体与全栈交付，能够把 Web3D、VR、多媒体与工业系统经验整合成可落地的产品与工程能力。
          </p>
          <p className="supporting-copy">
            首屏先回答岗位匹配与交付能力，再引导招聘方进入项目主题、经历与细节，而不是把你丢进一页泛化作品集文案里。
          </p>
          <div className="actions">
            <a href={`${import.meta.env.BASE_URL}docs/MyResume.pdf`}>
              下载 PDF 简历
            </a>
            <a href="https://github.com/guochaopeng110-maker">GitHub</a>
            <a href="mailto:guochaopeng110maker@gmail.com">Email</a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="核心招聘信号">
          <p className="eyebrow">Hiring Snapshot</p>
          <ul className="signal-list">
            {hiringSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="section narrative-section">
        <div className="section-heading">
          <p className="eyebrow">Narrative Path</p>
          <h2>为什么这个站适合招聘阅读</h2>
        </div>
        <div className="narrative-grid">
          <article className="narrative-card">
            <h3>先判断岗位匹配，再决定是否深入看项目与经历。</h3>
            <p>
              首页主叙事先给出当前目标岗位、核心价值和联系入口，让招聘方无需先打开 PDF，
              就能在数秒内判断是否值得继续沟通。
            </p>
          </article>
          <article className="narrative-card">
            <h3>
              从工业系统、VR、Web3D 走到 AI 应用与全栈工程，不是方向分散，而是能力持续演进。
            </h3>
            <p>
              这条演进路径解释了为什么当前定位既有前沿感，也有真实工程落地的可信度，
              从而区别于只有 demo、缺少复杂系统经验的通用作品集候选人。
            </p>
          </article>
        </div>
      </section>

      <section id="themes" className="section">
        <div className="section-heading">
          <p className="eyebrow">Project Themes</p>
          <h2>优先浏览的项目主题</h2>
          <p className="section-intro">
            如果招聘方已经确认岗位方向，可以从这里继续下钻，查看最能代表当前能力结构的主题案例。
          </p>
        </div>
        <div className="card-grid">
          {themeHighlights.map((theme) => (
            <article key={theme.slug} className="card">
              <h3>{theme.title}</h3>
              <p>{theme.summary}</p>
              <Link to={`/themes/${theme.slug}`}>进入详情页</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
