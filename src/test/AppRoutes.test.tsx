import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { AppRoutes } from "../routes/AppRoutes";

function renderRoutes(initialEntry: string) {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <AppRoutes />
    </MemoryRouter>,
  );
}

describe("site routes", () => {
  it("renders the homepage on the root route", () => {
    renderRoutes("/");

    expect(
      screen.getByRole("heading", {
        name: "AI 应用 / 智能体 / 全栈工程站点骨架",
      }),
    ).toBeInTheDocument();
  });

  it("renders a project theme detail page", () => {
    renderRoutes("/themes/ai-agents");

    expect(
      screen.getByRole("heading", { name: "AI 智能体与 AI 应用" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("这里会继续扩展 AI agent、workflow 和业务应用案例。"),
    ).toBeInTheDocument();
  });

  it("redirects unknown routes to the not found page", async () => {
    renderRoutes("/does-not-exist");

    expect(
      await screen.findByRole("heading", { name: "页面未找到" }),
    ).toBeInTheDocument();
  });
});
