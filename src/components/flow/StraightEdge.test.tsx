import React from "react";
import StraightEdge from "./StraightEdge";
import { render, screen } from "@testing-library/react";

describe("Straight edge", () => {
  it("builds path", () => {
    render(
      <StraightEdge
        testId={"straight-path"}
        sourceX={0}
        sourceY={0}
        targetX={200}
        targetY={200}
      />
    );
    const path = screen.queryByTestId("straight-path");
    expect(path?.getAttribute("d")).toBe("M0,0L 200,200");
  });
});
export {};
