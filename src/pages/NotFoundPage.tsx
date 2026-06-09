import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="page-shell">
      <section className="section">
        <p className="eyebrow">404</p>
        <h1>页面未找到</h1>
        <p>这个基础骨架已经预留未找到页，便于 GitHub Pages 部署后的异常路径兜底。</p>
        <Link to="/">返回首页</Link>
      </section>
    </main>
  );
}
