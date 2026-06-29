import { render, screen, act, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, beforeEach } from "vitest";
import { AppRoutes } from "../routes/AppRoutes";

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

describe("AI Agents detail page (issue #10)", () => {
  it("renders a unified case-study structure with multiple repository links", async () => {
    renderAt("/themes/ai-agents");

    // Check title & basic blocks
    expect(
      screen.getByRole("heading", { name: "AI 智能体与 AI 应用", level: 1 }),
    ).toBeInTheDocument();

    // Check multiple repositories section exists
    const reposSection = screen.getByTestId("theme-detail-repos");
    expect(reposSection).toBeInTheDocument();

    // Verify there are multiple repository links
    const repoLinks = within(reposSection).getAllByRole("link");
    expect(repoLinks.length).toBeGreaterThan(1);

    // Verify specific repository links are present
    expect(within(reposSection).getByText(/ai-agent-sandbox/i)).toBeInTheDocument();
    expect(within(reposSection).getByText(/dcs-anomaly-agent/i)).toBeInTheDocument();
  });

  it("renders workflow steps and role divisions in a pipeline diagram", () => {
    renderAt("/themes/ai-agents");

    // Check workflow section
    const workflowSection = screen.getByTestId("theme-detail-workflow");
    expect(workflowSection).toBeInTheDocument();

    // Verify we list workflow steps
    const steps = within(workflowSection).getAllByTestId("workflow-step");
    expect(steps.length).toBe(4);

    // Verify workflow step details
    expect(within(workflowSection).getByText(/异常感知与意图路由/)).toBeInTheDocument();
    expect(within(workflowSection).getByText(/知识库 RAG 检索/)).toBeInTheDocument();
    expect(within(workflowSection).getByText(/ReAct 决策与工具调用/)).toBeInTheDocument();
    expect(within(workflowSection).getByText(/结果结构化输出与人工兜底/)).toBeInTheDocument();
  });

  it("gracefully falls back to visual placeholder when screenshots are missing", () => {
    renderAt("/themes/ai-agents");

    // Check visuals section or placeholder
    const visualsSection = screen.getByTestId("theme-detail-visuals");
    expect(visualsSection).toBeInTheDocument();

    // Verify placeholder is present and marked as fallback
    const placeholder = screen.getByTestId("visuals-placeholder");
    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveTextContent(/AI 智能体架构示意图/);
  });

  it("supports bilingual switching for all custom workflow elements", async () => {
    renderAt("/themes/ai-agents");

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
    expect(screen.getByRole("heading", { name: "Anomaly Perception & Intent Routing", level: 3 })).toBeInTheDocument();
  });
});
