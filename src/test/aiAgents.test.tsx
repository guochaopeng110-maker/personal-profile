import { render, screen, act, within, fireEvent } from "@testing-library/react";
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

describe("AI Agents detail page (issue #10)", () => {
  it("renders a unified case-study structure with repository links", () => {
    renderAt("/themes/ai-agents");

    const detailLabels = zhContent.themes.detailPage.labels;
    expect(screen.getByText(detailLabels.problem)).toBeInTheDocument();
    expect(screen.getByText(detailLabels.role)).toBeInTheDocument();
    expect(screen.getByText(detailLabels.solution)).toBeInTheDocument();
    expect(screen.getByText(detailLabels.results)).toBeInTheDocument();
    expect(screen.getByText(detailLabels.judgment)).toBeInTheDocument();
    expect(screen.getByText(detailLabels.repos)).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: "AI 智能体与 AI 应用", level: 1 })).toBeInTheDocument();

    // Check multiple repositories section exists
    const reposSection = screen.getByTestId("theme-detail-repos");
    expect(reposSection).toBeInTheDocument();

    // Verify there are repository links
    const repoLinks = within(reposSection).getAllByRole("link");
    expect(repoLinks.length).toBeGreaterThanOrEqual(1);

    // Verify specific repository links are present
    expect(within(reposSection).getByText(/MAIC-AI-Classroom/i)).toBeInTheDocument();
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
    expect(within(workflowSection).getByText(/自然语言输入与意图路由/)).toBeInTheDocument();
    expect(within(workflowSection).getByText(/多智能体角色讨论 \/ ReAct 动作规划/)).toBeInTheDocument();
    expect(within(workflowSection).getByText(/安全沙箱校验与子进程执行/)).toBeInTheDocument();
    expect(within(workflowSection).getByText(/课件多模态导出 \/ 编译报错自动纠错/)).toBeInTheDocument();
  });

  it("gracefully falls back to visual placeholder when screenshots are missing", () => {
    renderAt("/themes/ai-agents");

    // If an image is rendered, fire error to trigger fallback
    const img = screen.queryByRole("img", { name: /TDuMAIC 多智能体.*架构示意图/i });
    if (img) {
      fireEvent.error(img);
    }

    // Verify placeholder is present and marked as fallback
    const placeholder = screen.getByTestId("visuals-placeholder");
    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveTextContent(/TDuMAIC 多智能体/);
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
    expect(screen.getByRole("heading", { name: "Natural Language Input & Intent Routing", level: 3 })).toBeInTheDocument();
  });
});
