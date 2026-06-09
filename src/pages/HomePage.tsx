import { Link } from "react-router-dom";

const themes = [
  {
    slug: "ai-agents",
    title: "AI 智能体与 AI 应用",
    summary: "聚焦 AI 工作流、智能体和可落地业务应用。",
  },
  {
    slug: "web3d",
    title: "Web3D / Babylon.js",
    summary: "展示空间交互、浏览器 3D 体验与工程实现。",
  },
];

export function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Guochao Peng</p>
        <h1>AI 应用 / 智能体 / 全栈工程站点骨架</h1>
        <p className="lede">
          为 GitHub Pages 部署准备的多页静态站点基础结构，后续可接入双语文案、
          结构化内容和项目主题详情页。
        </p>
        <div className="actions">
          <a href="#themes">查看项目主题</a>
          <a href={`${import.meta.env.BASE_URL}docs/MyResume.pdf`}>PDF 简历</a>
        </div>
      </section>

      <section id="themes" className="section">
        <div className="section-heading">
          <p className="eyebrow">Project Themes</p>
          <h2>基础主题路由</h2>
        </div>
        <div className="card-grid">
          {themes.map((theme) => (
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
