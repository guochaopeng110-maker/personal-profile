import { act, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { I18nProvider, useLocale } from "../context/I18nContext";

function LanguageToggler() {
  const { locale, setLocale } = useLocale();
  return (
    <button onClick={() => setLocale(locale === "zh" ? "en" : "zh")}>
      toggle
    </button>
  );
}

function renderWithProviders() {
  return render(
    <I18nProvider>
      <LanguageToggler />
    </I18nProvider>,
  );
}

describe("i18n locale side-effects (issue #4 hardening)", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.lang = "zh-CN";
    document.title = "Guochao Peng | Personal Profile";
  });

  afterEach(() => {
    document.documentElement.lang = "zh-CN";
    document.title = "Guochao Peng | Personal Profile";
  });

  it("synchronizes <html lang> with the active locale", () => {
    const { getByText } = renderWithProviders();
    expect(document.documentElement.lang).toBe("zh-CN");

    act(() => {
      getByText("toggle").click();
    });
    expect(document.documentElement.lang).toBe("en");

    act(() => {
      getByText("toggle").click();
    });
    expect(document.documentElement.lang).toBe("zh-CN");
  });

  it("synchronizes document.title with the active locale", () => {
    const { getByText } = renderWithProviders();
    const zhTitle = document.title;
    expect(zhTitle).toContain("Guochao Peng");
    expect(zhTitle).toMatch(/AI 智能体|全栈/);

    act(() => {
      getByText("toggle").click();
    });
    expect(document.title).not.toBe(zhTitle);
    expect(document.title).toContain("Guochao Peng");
    expect(document.title).toMatch(/AI Agent|Full-Stack/);
  });

  it("uses the Chinese hiring snapshot label on the Chinese homepage", async () => {
     const { content } = await import("../content/zh");
     expect(content.hero.hiringSignalsTitle).toBe("技术主张");
   });
});
