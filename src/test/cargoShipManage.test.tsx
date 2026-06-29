import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, beforeEach } from "vitest";
import { AppRoutes } from "../routes/AppRoutes";
import { content as zhContent } from "../content/zh";
import { content as enContent } from "../content/en";

beforeEach(() => {
  localStorage.clear();
});

const ZH = zhContent.themes.items["cargo-ship-manage"];
const EN = enContent.themes.items["cargo-ship-manage"];

function renderAt(initialEntry: string) {
  return render(
    <MemoryRouter initialEntries={[initialEntry]}>
      <AppRoutes />
    </MemoryRouter>,
  );
}

describe("CargoShipManage case study (issue #7)", () => {
  it("describes architecture and engineering trade-offs, not just a tech stack", () => {
    // Acceptance: "体现产品结果与工程取舍，而不是仅展示技术栈"
    expect(ZH.solution.length, "zh solution must be substantive").toBeGreaterThan(120);
  });

  it("lists at least three substantive engineering challenges with concrete trade-offs", () => {
    // Acceptance: "关键挑战" must reflect real engineering trade-offs
    expect(ZH.challenges.length, "zh challenges count").toBeGreaterThanOrEqual(3);
    for (const item of ZH.challenges) {
      expect(item.length, "zh challenge too thin").toBeGreaterThan(20);
    }
  });

  it("expresses concrete product outcomes in results, not only process statements", () => {
    // Acceptance: "体现业务系统项目的产品结果"，每个结果需具体可读
    expect(ZH.results.length, "zh results count").toBeGreaterThanOrEqual(3);
    for (const item of ZH.results) {
      expect(item.length, "zh result too thin").toBeGreaterThan(15);
    }
  });
});
