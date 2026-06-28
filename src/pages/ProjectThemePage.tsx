import { Link, useParams } from "react-router-dom";
import { useLocale } from "../context/I18nContext";

export function ProjectThemePage() {
  const { themeSlug = "" } = useParams();
  const { content } = useLocale();
  const { themes } = content;
  const detailLabels = themes.detailPage.labels;

  const theme = themes.items[themeSlug as keyof typeof themes.items];

  if (!theme) {
    return (
      <main className="page-shell">
        <section className="section" data-testid="theme-unknown">
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
      <section className="section theme-detail" data-testid="theme-detail">
        <div className="section-heading">
          <p className="eyebrow">{themes.detailPage.eyebrow}</p>
          <h1>{theme.title}</h1>
          <p className="section-intro">{theme.summary}</p>
          <ul className="theme-card-highlights theme-detail-highlights">
            {theme.highlights.map((tag, idx) => (
              <li key={idx} className="theme-card-tag">{tag}</li>
            ))}
          </ul>
        </div>

        <article className="theme-detail-block" data-testid="theme-detail-block">
          <div className="theme-detail-section" data-testid="theme-detail-problem">
            <h2>{detailLabels.problem}</h2>
            <p>{theme.problem}</p>
          </div>

          <div className="theme-detail-section" data-testid="theme-detail-role">
            <h2>{detailLabels.role}</h2>
            <p>{theme.role}</p>
          </div>

          <div className="theme-detail-section" data-testid="theme-detail-solution">
            <h2>{detailLabels.solution}</h2>
            <p>{theme.solution}</p>
          </div>

          <div className="theme-detail-section" data-testid="theme-detail-challenges">
            <h2>{detailLabels.challenges}</h2>
            <ul>
              {theme.challenges.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="theme-detail-section" data-testid="theme-detail-results">
            <h2>{detailLabels.results}</h2>
            <ul>
              {theme.results.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="theme-detail-section theme-detail-judgment" data-testid="theme-detail-judgment">
            <h2>{detailLabels.judgment}</h2>
            <p>{theme.judgment}</p>
          </div>

          <div className="theme-detail-section theme-detail-repo" data-testid="theme-detail-repo">
            <h2>{detailLabels.repo}</h2>
            <a href={theme.repo.url} target="_blank" rel="noreferrer">
              {theme.repo.label}
            </a>
          </div>
        </article>

        <div className="theme-detail-back">
          <Link to="/">{themes.backToHome}</Link>
        </div>
      </section>
    </main>
  );
}
