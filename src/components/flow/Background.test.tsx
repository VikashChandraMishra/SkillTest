import React from "react";
import { DotPattern } from "./Background";
import { render, screen } from "@testing-library/react";

describe("flow background", () => {
  it("returns svg pattern", () => {
    render(
      <div data-testid="svg-pattern">
        <DotPattern radius={3} color={"#acacac"} />
      </div>
    );
    const container = screen.getByTestId("svg-pattern");
    expect(container.innerHTML).toBe(
      '<circle cx="3" cy="3" r="3" fill="#acacac" opacity="1"></circle>'
    );
  });

  it("returns svg pattern with default color", () => {
    render(
      <div data-testid="svg-pattern">
        <DotPattern radius={3} />
      </div>
    );
    const container = screen.getByTestId("svg-pattern");
    expect(container.innerHTML).toBe(
      '<circle cx="3" cy="3" r="3" fill="#666666" opacity="1"></circle>'
    );
  });

  it("normalizes opacity value to min 0.1", () => {
    render(
      <div data-testid="svg-pattern">
        <DotPattern radius={3} opacity={0} />
      </div>
    );
    const container = screen.getByTestId("svg-pattern");
    expect(container.innerHTML).toBe(
      '<circle cx="3" cy="3" r="3" fill="#666666" opacity="0.1"></circle>'
    );
  });

  it("normalizes opacity value to max 1", () => {
    render(
      <div data-testid="svg-pattern">
        <DotPattern radius={3} opacity={2} />
      </div>
    );
    const container = screen.getByTestId("svg-pattern");
    expect(container.innerHTML).toBe(
      '<circle cx="3" cy="3" r="3" fill="#666666" opacity="1"></circle>'
    );
  });
});