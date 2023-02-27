import { render, screen } from "@testing-library/react";
import OrthogonalEdgeRouter from "./OrthogonalEdgeRouter";

describe("OrthogonalEdgeRouter", () => {
    it("checks orthogonal edge path between source and target nodes", () => {
        render(
            <OrthogonalEdgeRouter testId="path" sourceX={100} sourceY={100} targetX={200} targetY={300} pathPoints={[{x: 150,y: 100}, {x: 150,y: 80}, {x: 300,y: 80}, {x: 300,y: 620}, {x: 240,y: 620}, {x: 240,y: 600}]} />
        );
        const path = screen.getByTestId("path");
        expect(path?.getAttribute("d")).toBe("M150,100 L150,100 L150,80 L300,80 L300,620 L240,620 L240,600");
    })
})