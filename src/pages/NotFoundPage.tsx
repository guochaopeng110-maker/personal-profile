import { Link } from "react-router-dom";
import { useLocale } from "../context/I18nContext";

export function NotFoundPage() {
  const { content } = useLocale();
  const { notFound } = content;

  return (
    <main className="page-shell">
      <section className="section">
        <p className="eyebrow">{notFound.eyebrow}</p>
        <h1>{notFound.title}</h1>
        <p>{notFound.p}</p>
        <Link to="/">{notFound.backToHome}</Link>
      </section>
    </main>
  );
}
