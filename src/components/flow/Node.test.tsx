import { render, screen } from "@testing-library/react";
import Node from "./Node";

describe("Node", () => {
    it("creates a node", () => {
        render(
            <Node testId="node" x={100} y={100} height={100} width={100} name={'Node 1'} />
        );
        const node = screen.getByTestId("node");
        expect(node?.getAttribute("d")).toBe("M110,100 L190,100 q 10 0 10 10 L200,190 q 0 10 -10 10 L110,200 q -10 0 -10 -10 L100,110 q 0 -10 10 -10");
    })
})