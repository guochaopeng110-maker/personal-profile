import { render, screen, act } from "@testing-library/react";
import { describe, expect, it, beforeEach } from "vitest";
import { I18nProvider, useLocale } from "../context/I18nContext";

// Simple localStorage mock in case JSDOM's is incomplete or missing in the global scope
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    }
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
  writable: true
});

globalThis.localStorage = localStorageMock as any;

function TestComponent() {
  const { locale, setLocale, content } = useLocale();
  return (
    <div>
      <span data-testid="locale">{locale}</span>
      <span data-testid="title">{content.hero.title}</span>
      <button onClick={() => setLocale("en")}>Switch to English</button>
      <button onClick={() => setLocale("zh")}>Switch to Chinese</button>
    </div>
  );
}

describe("I18nProvider", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("provides default Chinese content", () => {
    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    );

    expect(screen.getByTestId("locale").textContent).toBe("zh");
    expect(screen.getByTestId("title").textContent).toContain("AI 智能体");
  });

  it("can switch language to English", () => {
    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    );

    const button = screen.getByText("Switch to English");
    act(() => {
      button.click();
    });

    expect(screen.getByTestId("locale").textContent).toBe("en");
    expect(screen.getByTestId("title").textContent).toContain("AI Agent");
  });

  it("persists language choice in localStorage", () => {
    const { unmount } = render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    );

    const button = screen.getByText("Switch to English");
    act(() => {
      button.click();
    });

    expect(localStorage.getItem("locale")).toBe("en");
    unmount();

    render(
      <I18nProvider>
        <TestComponent />
      </I18nProvider>
    );
    expect(screen.getByTestId("locale").textContent).toBe("en");
  });
});
