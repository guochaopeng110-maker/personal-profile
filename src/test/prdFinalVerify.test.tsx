import { render, screen, act } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, beforeEach } from "vitest";
import { AppRoutes } from "../routes/AppRoutes";
import { content as zhContent } from "../content/zh";
import { content as enContent } from "../content/en";

// Ensure localStorage is cleared before each test
beforeEach(() => {
  localStorage.clear();
});

function renderRoutes(initialEntry: string) {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <AppRoutes />
    </MemoryRouter>,
  );
}

describe("PRD Final Verification & Contract Checking", () => {
  it("verifies bilingual switching synchronizes document title and html lang attribute", async () => {
    renderRoutes("/");

    // Default Chinese validation
    const zhMeta = zhContent.hero.pageMeta;
    expect(document.documentElement.lang).toBe(zhMeta.lang);
    expect(document.title).toBe(zhMeta.documentTitle);

    // Switch to English
    const switchBtn = screen.getByRole("button", { name: "English" });
    act(() => {
      switchBtn.click();
    });

    // English validation
    const enMeta = enContent.hero.pageMeta;
    expect(document.documentElement.lang).toBe(enMeta.lang);
    expect(document.title).toBe(enMeta.documentTitle);

    // Switch back to Chinese
    const switchBackBtn = screen.getByRole("button", { name: "中文" });
    act(() => {
      switchBackBtn.click();
    });
    expect(document.documentElement.lang).toBe(zhMeta.lang);
    expect(document.title).toBe(zhMeta.documentTitle);
  });

  it("verifies privacy - no phone numbers are exposed on the homepage", () => {
    renderRoutes("/");
    
    // Search the text content of the body for phone number patterns
    const bodyText = document.body.textContent || "";
    // Regular expression matching Chinese mobile numbers (11 digits starting with 13-19)
    const phonePattern = /\b1[3-9]\d{9}\b/;
    expect(phonePattern.test(bodyText)).toBe(false);
  });

  it("verifies PDF Resume Download links are compatible with GitHub Pages base path", () => {
    renderRoutes("/");

    const resumeLink = screen.getByRole("link", {
      name: (content) => content.includes("PDF") && (content.includes("Download") || content.includes("下载"))
    });

    const expectedPrefix = import.meta.env.BASE_URL;
    expect(resumeLink).toHaveAttribute("href");
    const href = resumeLink.getAttribute("href") || "";
    expect(href.startsWith(expectedPrefix)).toBe(true);
    expect(href.endsWith("docs/MyResume.pdf")).toBe(true);
  });

  it("verifies all project themes are routeable and adhere to the PRD case-study contract", () => {
    const slugs = [
      "cargo-ship-manage",
      "ai-video-workflow",
      "web3d-vr",
      "industrial-systems",
      "ai-agents",
      "ai-agent-learning"
    ];

    slugs.forEach((slug) => {
      const { unmount } = renderRoutes(`/themes/${slug}`);

      // Verify page is rendered with details
      expect(screen.getByTestId("theme-detail")).toBeInTheDocument();
      expect(screen.getByTestId("theme-detail-problem")).toBeInTheDocument();
      expect(screen.getByTestId("theme-detail-role")).toBeInTheDocument();
      expect(screen.getByTestId("theme-detail-solution")).toBeInTheDocument();
      expect(screen.getByTestId("theme-detail-challenges")).toBeInTheDocument();
      expect(screen.getByTestId("theme-detail-results")).toBeInTheDocument();
      expect(screen.getByTestId("theme-detail-judgment")).toBeInTheDocument();

      // Clean up for the next route render
      unmount();
    });
  });
});
