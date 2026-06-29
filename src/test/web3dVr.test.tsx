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

describe("Web3D & Unity VR detail page (issue #9)", () => {
  it("renders a unified case-study structure with multiple repository links", async () => {
    renderAt("/themes/web3d-vr");

    // Check title & basic blocks
    expect(
      screen.getByRole("heading", { name: "Web3D / Babylon.js + Unity + PICO VR", level: 1 }),
    ).toBeInTheDocument();

    // Check multiple repositories section exists
    const reposSection = screen.getByTestId("theme-detail-repos");
    expect(reposSection).toBeInTheDocument();

    // Verify there are multiple repository links
    const repoLinks = within(reposSection).getAllByRole("link");
    expect(repoLinks.length).toBeGreaterThan(1);

    // Verify specific repository links are present
    expect(within(reposSection).getByText(/exm-player-web3d/i)).toBeInTheDocument();
    expect(within(reposSection).getByText(/pico-vr-simulation/i)).toBeInTheDocument();
  });

  it("renders workflow steps and role divisions in a pipeline diagram", () => {
    renderAt("/themes/web3d-vr");

    // Check workflow section
    const workflowSection = screen.getByTestId("theme-detail-workflow");
    expect(workflowSection).toBeInTheDocument();

    // Verify we list workflow steps
    const steps = within(workflowSection).getAllByTestId("workflow-step");
    expect(steps.length).toBe(3);

    // Verify workflow step details
    expect(within(workflowSection).getByText(/资产优化/)).toBeInTheDocument();
    expect(within(workflowSection).getByText(/交互集成/)).toBeInTheDocument();
    expect(within(workflowSection).getByText(/性能优化/)).toBeInTheDocument();
  });

  it("gracefully falls back to custom visual placeholder with Web3D/VR tracks", () => {
    renderAt("/themes/web3d-vr");

    // Check visuals section
    const visualsSection = screen.getByTestId("theme-detail-visuals");
    expect(visualsSection).toBeInTheDocument();

    // Verify placeholder is present
    const placeholder = screen.getByTestId("visuals-placeholder");
    expect(placeholder).toBeInTheDocument();
    expect(placeholder).toHaveTextContent(/3D 与 VR 空间计算架构示意图/);

    // Verify custom schematic tracks are rendered
    expect(placeholder).toHaveTextContent("DCC / 优化");
    expect(placeholder).toHaveTextContent("WEB3D");
    expect(placeholder).toHaveTextContent("VR 头显");
    
    // Ensure it does NOT contain the hardcoded AI Video tracks (unless it failed to override)
    expect(placeholder).not.toHaveTextContent("Creative Script / LLM Prompts");
  });

  it("supports bilingual switching for Web3D/VR elements", async () => {
    renderAt("/themes/web3d-vr");

    // Default Chinese
    expect(screen.getByText("工作流核心节点与分工")).toBeInTheDocument();
    expect(screen.getByText("相关代码仓库")).toBeInTheDocument();
    expect(screen.getByText("模型减面、DrawCall 合并、材质贴图烘焙与 glTF 导出")).toBeInTheDocument();

    // Switch to English
    const switchBtn = screen.getByRole("button", { name: "English" });
    act(() => {
      switchBtn.click();
    });

    // Verify elements are now in English
    expect(await screen.findByText("Workflow Pipeline & Roles")).toBeInTheDocument();
    expect(screen.getByText("Related Repositories")).toBeInTheDocument();
    expect(screen.getByText("Decimation, DrawCall batching, texture baking & glTF export")).toBeInTheDocument();
  });
});
