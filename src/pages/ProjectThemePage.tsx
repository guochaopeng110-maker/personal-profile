import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useLocale } from "../context/I18nContext";
import type { Theme } from "../content/types";

export function ProjectThemePage() {
  const { themeSlug = "" } = useParams();
  const { content } = useLocale();
  const { themes } = content;
  const detailLabels = themes.detailPage.labels;
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const theme = themes.items[themeSlug as keyof typeof themes.items] as Theme | undefined;

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
      <section className="section theme-detail animate-fade-in-up" data-testid="theme-detail">
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

          {theme.repo && (
            <div className="theme-detail-section theme-detail-repo" data-testid="theme-detail-repo">
              <h2>{detailLabels.repo}</h2>
              <a href={theme.repo.url} target="_blank" rel="noreferrer">
                {theme.repo.label}
              </a>
            </div>
          )}

          {theme.repos && theme.repos.length > 0 && (
            <div className="theme-detail-section theme-detail-repos" data-testid="theme-detail-repos">
              <h2>{detailLabels.repos}</h2>
              <div className="repos-grid">
                {theme.repos.map((r, idx) => (
                  <div key={idx} className="repo-detail-card" data-testid="repo-detail-card">
                    <div className="repo-detail-header">
                      <h3>{r.label}</h3>
                      <a href={r.url} target="_blank" rel="noreferrer" className="repo-link">
                        GitHub
                      </a>
                    </div>
                    {r.role && <p className="repo-detail-role">{r.role}</p>}
                    {r.description && <p className="repo-detail-desc">{r.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {theme.workflow && (
            <div className="theme-detail-section theme-detail-workflow" data-testid="theme-detail-workflow">
              <h2>{detailLabels.workflow}</h2>
              <div className="workflow-pipeline">
                {theme.workflow.steps.map((step, idx, arr) => (
                  <div key={idx} className="workflow-step-card" data-testid="workflow-step">
                    <div className="workflow-step-num">0{idx + 1}</div>
                    <div className="workflow-step-content">
                      <h3>{step.name}</h3>
                      <p className="workflow-step-desc">{step.description}</p>
                      <p className="workflow-step-role">{step.role}</p>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="workflow-step-arrow" aria-hidden="true">→</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {theme.visuals && theme.visuals.length > 0 && (
            <div className="theme-detail-section theme-detail-visuals" data-testid="theme-detail-visuals">
              <h2>{detailLabels.visuals}</h2>
              <div className="visuals-container">
                {theme.visuals.map((visual, idx) => {
                  if (visual.url && !imageErrors[idx]) {
                    return (
                      <div key={idx} className="visual-media-wrapper">
                        <img
                          src={visual.url}
                          alt={visual.title}
                          className="visual-media-img"
                          onError={() => setImageErrors((prev) => ({ ...prev, [idx]: true }))}
                        />
                        {visual.description && <p className="visual-media-caption">{visual.description}</p>}
                      </div>
                    );
                  } else {
                    const tracks = visual.schematic || [
                      { label: "SCENE", value: "Creative Script / LLM Prompts", class: "script-bar" },
                      { label: "VIDEO", value: "SD / Kling Batch Generation", class: "video-bar" },
                      { label: "AUDIO", value: "TTS + FFmpeg Timeline Stitch", class: "audio-bar" }
                    ];
                    return (
                      <div key={idx} className="visual-placeholder-card" data-testid="visuals-placeholder">
                        <div className="placeholder-schematic">
                          {tracks.map((track, tIdx) => (
                            <div key={tIdx} className="schematic-track">
                              <span className="track-label">{track.label}</span>
                              <div className={`track-bar ${track.class || ""}`}>{track.value}</div>
                            </div>
                          ))}
                          <div className="schematic-connector"></div>
                        </div>
                        <div className="placeholder-info">
                          <h3>{visual.title}</h3>
                          <p>{visual.description}</p>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          )}
        </article>

        <div className="theme-detail-back">
          <Link to="/">{themes.backToHome}</Link>
        </div>
      </section>
    </main>
  );
}
