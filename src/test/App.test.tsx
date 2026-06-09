import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("../routes/AppRoutes", () => ({
  AppRoutes: () => <div data-testid="app-routes" />,
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom",
  );

  return {
    ...actual,
    BrowserRouter: ({
      basename,
      children,
    }: {
      basename?: string;
      children: React.ReactNode;
    }) => (
      <div data-testid="browser-router" data-basename={basename}>
        {children}
      </div>
    ),
  };
});

describe("App", () => {
  it("passes the Vite base URL to BrowserRouter for GitHub Pages compatibility", async () => {
    vi.stubEnv("BASE_URL", "/personal-profile/");
    const { App } = await import("../App");

    render(<App />);

    expect(screen.getByTestId("browser-router")).toHaveAttribute(
      "data-basename",
      "/personal-profile/",
    );
  });
});
