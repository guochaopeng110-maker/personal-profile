import { render, screen, act, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, beforeEach } from "vitest";
import { AppRoutes } from "../routes/AppRoutes";
import { content as zhContent } from "../content/zh";

beforeEach(() => {
  localStorage.clear();
});

function renderAt(initialEntry: string) {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <AppRoutes />
    </MemoryRouter>,
  );
}

describe("AI Video Workflow detail page (issue #8)", () => {
  it("renders a unified case-study structure with multiple repository links", async () => {
    renderAt("/themes/ai-video-workflow");

    // Check title & basic blocks
    expect(
      screen.getByRole("heading", { name: "AI 短剧 / 漫剧 / 视频生成工作流", level: 1 }),
    ).toBeInTheDocument();

    // Check multiple repositories section exists
    const reposSection = screen.getByTestId("theme-detail-repos");
    expect(reposSection).toBeInTheDocument();

    // Verify there are multiple repository links
    const repoLinks = within(reposSection).getAllByRole("link");
    expect(repoLinks.length).toBeGreaterThan(1);

    // Verify specific repository links are present (e.g., prompt-to-screenplay, ffmpeg-stitcher-orchestrator)
    expect(within(reposSection).getByText(/prompt-to-screenplay/i)).toBeInTheDocument();
    expect(within(reposSection).getByText(/ffmpeg-stitcher-orchestrator/i)).toBeInTheDocument();
  });

  it("renders workflow steps and role divisions in a pipeline diagram", () => {
    renderAt("/themes/ai-video-workflow");

    // Check workflow section
    const workflowSection = screen.getByTestId("theme-detail-workflow");
    expect(workflowSection).toBeInTheDocument();

    // Verify we list workflow steps
    const steps = within(workflowSection).getAllByTestId("workflow-step");
    expect(steps.length).toBe(3);

    // Verify workflow step details
    expect(within(workflowSection).getByText(/脚本生成/)).toBeInTheDocument();
    expect(within(workflowSection).getByText(/素材生成/)).toBeInTheDocument();
    expect(within(workflowSection).getByText(/合成剪辑/)).toBeInTheDocument();
  });

  it("gracefully falls back to visual placeholder when screenshots are missing", () => {
    renderAt("/themes/ai-video-workflow");

    // Check visuals section or placeholder
    const visualsSection = screen.getByTestId("theme-detail-visuals");
    expect(visualsSection).toBeInTheDocument();

    // Verify placeholder is present and marked as fallback
    const placeholder = screen.getByTestId("visuals-placeholder");
    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveTextContent(/工作流示意图/);
  });

  it("supports bilingual switching for all custom workflow elements", async () => {
    renderAt("/themes/ai-video-workflow");

    // Default Chinese
    expect(screen.getByText("工作流核心节点与分工")).toBeInTheDocument();
    expect(screen.getByText("相关代码仓库")).toBeInTheDocument();

    // Switch to English
    const switchBtn = screen.getByRole("button", { name: "English" });
    act(() => {
      switchBtn.click();
    });

    // Verify elements are now in English
    expect(await screen.findByText("Workflow Pipeline & Roles")).toBeInTheDocument();
    expect(screen.getByText("Related Repositories")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Script Generation", level: 3 })).toBeInTheDocument();
  });
});
