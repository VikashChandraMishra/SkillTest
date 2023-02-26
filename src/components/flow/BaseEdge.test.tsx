import React from "react";
import { BaseEdge } from "./BaseEdge";
import { render, screen } from "@testing-library/react";

describe("Base edge", () => {
  it("builds path", () => {
    render(<BaseEdge testId={"base-path"} path={"M0,0L 200,200"} />);
    const path = screen.queryByTestId("base-path");
    expect(path?.getAttribute("d")).toBe("M0,0L 200,200");
    expect(path?.getAttributeNames().sort()).toEqual(
      ["d", "data-testid", "fill", "stroke", "stroke-width"].sort()
    );
  });
});

export {};