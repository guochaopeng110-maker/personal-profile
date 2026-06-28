import { Link } from "react-router-dom";
import { useLocale } from "../context/I18nContext";

export function HomePage() {
  const { content } = useLocale();
  const { hero, narrative, themes, timeline, skills } = content;

  return (
    <main className="page-shell">
      <section className="hero hero-grid">
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

        <aside className="hero-panel" aria-label="核心招聘信号">
          <p className="eyebrow">{hero.hiringSignalsTitle}</p>
          <ul className="signal-list">
            {hero.hiringSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="section narrative-section">
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
      </section>

      <section className="section timeline-section">
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
      </section>

      <section className="section skills-section">
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
      </section>

      <section id="themes" className="section">
        <div className="section-heading">
          <p className="eyebrow">{themes.eyebrow}</p>
          <h2>{themes.title}</h2>
          <p className="section-intro">{themes.intro}</p>
        </div>
        <div className="card-grid">
          {Object.entries(themes.items).map(([slug, item]) => (
            <article key={slug} className="card">
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <Link to={`/themes/${slug}`}>{themes.viewDetail}</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
