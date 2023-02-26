import { memo } from "react";

type NodeParams = {
    x: number;
    y: number;
    width: number;
    height: number;
    name: string;
};

function buildNodePath({
    x,
    y,
    width,
    height,
}: NodeParams) {
    return `M${x + 10},${y} L${x + width - 10},${y} q 10 0 10 10 L${x + width},${y + height - 10} q 0 10 -10 10 L${x + 10},${y + height} q -10 0 -10 -10 L${x},${y + 10} q 0 -10 10 -10`;
}

const Node = memo(
    ({
        x,
        y,
        width,
        height,
        name,
        testId,
    }: NodeParams & { testId?: string }) => {
        const path = buildNodePath({ x, y, width, height, name });

        return (
            <>
                <path
                    data-testid={testId}
                    d={path}
                    fill="#474747"
                    strokeWidth={1}
                    stroke="#eee"
                />
                <text x={x + width / 2 - 20} y={y + height / 2} fill="white">{name}</text>
            </>
        );
    }
);

export default Node;