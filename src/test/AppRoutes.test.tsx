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
        name: "AI 智能体 / AI 应用 / 全栈开发工程师",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "面向 AI 应用、智能体与全栈交付，能够把 Web3D、VR、多媒体与工业系统经验整合成可落地的产品与工程能力。",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "下载 PDF 简历" }),
    ).toHaveAttribute("href", "/personal-profile/docs/MyResume.pdf");
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/guochaopeng110-maker",
    );
    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:guochaopeng110maker@gmail.com",
    );
    expect(screen.queryByText(/1[3-9]\d{9}/)).not.toBeInTheDocument();
  });

  it("renders a hiring-oriented narrative path instead of generic portfolio filler", () => {
    renderRoutes("/");

    expect(
      screen.getByRole("heading", { name: "为什么这个站适合招聘阅读" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("先判断岗位匹配，再决定是否深入看项目与经历。"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "从工业系统、VR、Web3D 走到 AI 应用与全栈工程，不是方向分散，而是能力持续演进。",
      ),
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
