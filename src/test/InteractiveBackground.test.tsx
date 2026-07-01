import { render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { InteractiveBackground } from "../components/InteractiveBackground";

describe("InteractiveBackground", () => {
  it("renders a canvas with the correct CSS class and accessibility properties", () => {
    const { container } = render(<InteractiveBackground />);
    const canvas = container.querySelector("canvas");

    expect(canvas).toBeInTheDocument();
    expect(canvas).toHaveClass("interactive-bg-canvas");
    expect(canvas).toHaveAttribute("aria-hidden", "true");
  });

  it("adds and cleans up event listeners on mount and unmount", () => {
    const addSpy = vi.spyOn(window, "addEventListener");
    const removeSpy = vi.spyOn(window, "removeEventListener");

    const { unmount } = render(<InteractiveBackground />);

    expect(addSpy).toHaveBeenCalledWith("mousemove", expect.any(Function), expect.any(Object));
    expect(addSpy).toHaveBeenCalledWith("mouseleave", expect.any(Function), expect.any(Object));
    expect(addSpy).toHaveBeenCalledWith("resize", expect.any(Function), expect.any(Object));

    unmount();

    expect(removeSpy).toHaveBeenCalledWith("mousemove", expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith("mouseleave", expect.any(Function));
    expect(removeSpy).toHaveBeenCalledWith("resize", expect.any(Function));

    addSpy.mockRestore();
    removeSpy.mockRestore();
  });
});
