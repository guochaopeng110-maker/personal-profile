import { render, screen } from "@testing-library/react";
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

describe("Visual System and Motion (issue #11)", () => {
  it("defines visual token CSS variables under :root in styles.css", () => {
    const cssPath = path.resolve(__dirname, "../styles.css");
    const cssContent = fs.readFileSync(cssPath, "utf-8");

    // Expect CSS variables for colors, surface, and transitions
    expect(cssContent).toContain("--color-primary");
    expect(cssContent).toContain("--color-accent");
    expect(cssContent).toContain("--surface-card-bg");
    expect(cssContent).toContain("--transition-smooth");
  });

  it("defines fadeInUp keyframe and animation classes in styles.css", () => {
    const cssPath = path.resolve(__dirname, "../styles.css");
    const cssContent = fs.readFileSync(cssPath, "utf-8");

    // Expect fadeInUp keyframes and animation classes
    expect(cssContent).toContain("@keyframes fadeInUp");
    expect(cssContent).toContain(".animate-fade-in-up");
  });

  it("applies animate-fade-in-up classes to main sections on the homepage", () => {
    renderAt("/");

    const hero = screen.getByTestId("hero-section");
    const narrative = screen.getByTestId("narrative-section");
    const themes = screen.getByTestId("themes-section");

    expect(hero).toHaveClass("animate-fade-in-up");
    expect(narrative).toHaveClass("animate-fade-in-up");
    expect(themes).toHaveClass("animate-fade-in-up");
  });
});
