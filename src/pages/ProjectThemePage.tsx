import { Link, useParams } from "react-router-dom";

const themeSummaries: Record<string, { title: string; summary: string }> = {
  "ai-agents": {
    title: "AI 智能体与 AI 应用",
    summary: "这里会继续扩展 AI agent、workflow 和业务应用案例。",
  },
  web3d: {
    title: "Web3D / Babylon.js",
    summary: "这里会继续扩展交互式 3D 与浏览器空间体验案例。",
  },
};

export function ProjectThemePage() {
  const { themeSlug = "" } = useParams();
  const theme = themeSummaries[themeSlug];

  if (!theme) {
    return (
      <main className="page-shell">
        <section className="section">
          <p className="eyebrow">Unknown Theme</p>
          <h1>未找到该项目主题</h1>
          <p>当前骨架已经支持详情路由，后续可以继续从结构化内容中扩展主题数据。</p>
          <Link to="/">返回首页</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <section className="section">
        <p className="eyebrow">Theme Detail</p>
        <h1>{theme.title}</h1>
        <p>{theme.summary}</p>
        <ul className="detail-list">
          <li>路由已支持主题 slug 扩展</li>
          <li>页面结构可继续接入结构化内容源</li>
          <li>后续可添加双语文案和案例模块</li>
        </ul>
        <Link to="/">返回首页</Link>
      </section>
    </main>
  );
}
