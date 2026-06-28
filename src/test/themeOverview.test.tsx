import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, beforeEach } from "vitest";
import { AppRoutes } from "../routes/AppRoutes";
import { content as zhContent } from "../content/zh";
import { content as enContent } from "../content/en";

beforeEach(() => {
  localStorage.clear();
});

const REQUIRED_SLUGS = [
  "ai-agents",
  "ai-video-workflow",
  "web3d-vr",
  "cargo-ship-manage",
  "industrial-systems",
] as const;

function renderAt(initialEntry: string) {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <AppRoutes />
    </MemoryRouter>,
  );
}

describe("Homepage theme overview (issue #6)", () => {
  it("exposes exactly five project themes in content", () => {
    const slugs = Object.keys(zhContent.themes.items);
    expect(slugs).toHaveLength(5);
    for (const slug of REQUIRED_SLUGS) {
      expect(slugs).toContain(slug);
    }
  });

  it("every theme has a non-trivial summary, results, and engineering judgment", () => {
    for (const slug of REQUIRED_SLUGS) {
      const theme = zhContent.themes.items[slug];
      expect(theme, `zh theme ${slug} missing`).toBeDefined();
      expect(theme.title.length, `zh theme ${slug} title`).toBeGreaterThan(0);
      expect(theme.summary.length, `zh theme ${slug} summary`).toBeGreaterThan(15);
      expect(theme.results.length, `zh theme ${slug} results`).toBeGreaterThanOrEqual(2);
      expect(theme.judgment.length, `zh theme ${slug} judgment`).toBeGreaterThan(0);
    }
  });

  it("English content stays in parity with Chinese across all five themes", () => {
    for (const slug of REQUIRED_SLUGS) {
      const zh = zhContent.themes.items[slug];
      const en = enContent.themes.items[slug];
      expect(en, `en theme ${slug} missing`).toBeDefined();
      expect(typeof en.title).toBe("string");
      expect(typeof en.summary).toBe("string");
      expect(Array.isArray(en.results)).toBe(true);
      expect(typeof en.judgment).toBe("string");
      expect(en.results.length).toBe(zh.results.length);
    }
  });

  it("renders all five theme cards on the homepage with engineering substance", () => {
    renderAt("/");

    const themesSection = screen.getByTestId("themes-section");

    for (const slug of REQUIRED_SLUGS) {
      const theme = zhContent.themes.items[slug];
      // Each card carries its slug so the assertion is unique per render.
      // We assert via attribute filter instead of getAllByTestId ordering.
    }

    const cards = within(themesSection).getAllByTestId("theme-card");
    expect(cards).toHaveLength(5);

    for (const slug of REQUIRED_SLUGS) {
      const theme = zhContent.themes.items[slug];
      const card = cards.find(
        (el) => el.getAttribute("data-theme-slug") === slug,
      );
      expect(card, `card for ${slug} missing`).toBeDefined();
      expect(
        within(card as HTMLElement).getByRole("heading", {
          name: theme.title,
          level: 3,
        }),
        `missing card heading for ${slug}`,
      ).toBeInTheDocument();
      expect(
        within(card as HTMLElement).getByText(theme.summary),
        `missing card summary for ${slug}`,
      ).toBeInTheDocument();
      expect(
        within(card as HTMLElement).getByText(theme.judgment),
        `missing card judgment for ${slug}`,
      ).toBeInTheDocument();
      for (const result of theme.results) {
        expect(
          within(card as HTMLElement).getByText(result),
          `missing card result for ${slug}: ${result}`,
        ).toBeInTheDocument();
      }
    }

    const links = within(themesSection).getAllByTestId("theme-card-link");
    expect(links).toHaveLength(5);
  });
});

describe("Project theme detail page (issue #6)", () => {
  it("renders a unified case-study structure for every theme slug", () => {
    for (const slug of REQUIRED_SLUGS) {
      const theme = zhContent.themes.items[slug];
      const detailLabels = zhContent.themes.detailPage.labels;

      const { unmount } = renderAt(`/themes/${slug}`);

      expect(
        screen.getByRole("heading", { name: theme.title, level: 1 }),
        `detail title missing for ${slug}`,
      ).toBeInTheDocument();

      expect(screen.getByText(detailLabels.problem)).toBeInTheDocument();
      expect(screen.getByText(detailLabels.role)).toBeInTheDocument();
      expect(screen.getByText(detailLabels.solution)).toBeInTheDocument();
      expect(screen.getByText(detailLabels.results)).toBeInTheDocument();
      expect(screen.getByText(detailLabels.judgment)).toBeInTheDocument();
      expect(screen.getByText(detailLabels.repo)).toBeInTheDocument();

      expect(screen.getByText(theme.problem)).toBeInTheDocument();
      expect(screen.getByText(theme.role)).toBeInTheDocument();
      expect(screen.getByText(theme.solution)).toBeInTheDocument();
      expect(screen.getByText(theme.judgment)).toBeInTheDocument();

      const backLinks = screen.getAllByRole("link", {
        name: zhContent.themes.backToHome,
      });
      expect(backLinks.length, `back-to-home missing for ${slug}`).toBeGreaterThan(0);

      unmount();
    }
  });

  it("shows the unknown-theme fallback for an unknown slug", () => {
    renderAt("/themes/does-not-exist");

    expect(
      screen.getByRole("heading", { name: zhContent.themes.unknownTheme.title }),
    ).toBeInTheDocument();
  });
});
