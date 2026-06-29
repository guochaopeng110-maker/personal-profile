import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";
import { AppRoutes } from "../routes/AppRoutes";

function renderAt(initialEntry: string) {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <AppRoutes />
    </MemoryRouter>,
  );
}

describe("Accessibility and Image Degradation (issue #12)", () => {
  it("verifies language switcher button in Header has a valid aria-label", () => {
    renderAt("/");

    const switchBtn = screen.getByRole("button");
    expect(switchBtn).toHaveAttribute("aria-label");
    expect(switchBtn.getAttribute("aria-label")?.length).toBeGreaterThan(0);
  });

  it("verifies focus-visible styles exist in styles.css", () => {
    const cssPath = path.resolve(__dirname, "../styles.css");
    const cssContent = fs.readFileSync(cssPath, "utf-8");

    expect(cssContent).toContain(":focus-visible");
  });

  it("gracefully falls back to visual placeholder if image fails to load on theme page", () => {
    // Render the ai-agents theme detail page
    renderAt("/themes/ai-agents");

    // Retrieve the visual image (assuming one is rendered with url)
    const image = screen.queryByRole("img", { name: /AI 智能体架构示意图/i });
    
    // If there is an image, simulate an onError event
    if (image) {
      fireEvent.error(image);
      
      // The image should be removed from document or replaced
      expect(image).not.toBeInTheDocument();
      
      // The fallback schematic/placeholder should appear
      const placeholder = screen.getByTestId("visuals-placeholder");
      expect(placeholder).toBeInTheDocument();
      expect(placeholder).toHaveTextContent(/AI 智能体架构示意图/i);
    }
  });
});
