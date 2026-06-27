import { Link, useParams } from "react-router-dom";
import { useLocale } from "../context/I18nContext";

export function ProjectThemePage() {
  const { themeSlug = "" } = useParams();
  const { content } = useLocale();
  const { themes } = content;

  // Retrieve the specific theme item from translation content
  const theme = themes.items[themeSlug as keyof typeof themes.items];

  if (!theme) {
    return (
      <main className="page-shell">
        <section className="section">
          <p className="eyebrow">{themes.unknownTheme.eyebrow}</p>
          <h1>{themes.unknownTheme.title}</h1>
          <p>{themes.unknownTheme.summary}</p>
          <Link to="/">{themes.backToHome}</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <section className="section">
        <p className="eyebrow">{themes.detailPage.eyebrow}</p>
        <h1>{theme.title}</h1>
        <p>{theme.summary}</p>
        <ul className="detail-list">
          {themes.detailPage.bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>
        <Link to="/">{themes.backToHome}</Link>
      </section>
    </main>
  );
}
