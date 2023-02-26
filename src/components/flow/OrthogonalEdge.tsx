import React, { memo } from "react";
import { BaseEdge } from "./BaseEdge";

type OrthogonalPathParams = {
    sourceX: number;
    sourceY: number;
    sourceH: number;
    sourceW: number;
    targetX: number;
    targetY: number;
    targetH: number;
    targetW: number;
};

const bends = {
    clockwise: {
        topRight: 'q 10 0 10 10',
        bottomRight: 'q 0 10 -10 10',
        bottomLeft: 'q -10 0 -10 -10',
        topLeft: 'q 0 -10 10 -10'
    },
    antiClockWise: {
        topRight: 'q 10 0 10 10',
        bottomRight: 'q 0 10 -10 10',
        bottomLeft: 'q -10 0 -10 -10',
        topLeft: 'q 0 -10 10 -10'
    }
}

function buildOrthogonalEdge({
    sourceX,
    sourceY,
    sourceH,
    sourceW,
    targetX,
    targetY,
    targetH,
    targetW
}: OrthogonalPathParams) {

    const { clockwise, antiClockWise } = bends;

    if (sourceY === targetY)
        return `M${sourceX},${sourceY} L${sourceX - 10},${sourceY} ${clockwise.bottomLeft} L${sourceX - 20},${sourceY - (targetH > sourceH ? targetH : sourceH) / 2 - 10} ${clockwise.topLeft} L${sourceX + Math.abs(targetX - sourceX) + 10},${sourceY - (targetH > sourceH ? targetH : sourceH) / 2 - 20} ${clockwise.topRight} L${sourceX + Math.abs(targetX - sourceX) + 20},${targetY - 10} ${clockwise.bottomRight} L${targetX},${targetY}`;
        
    else if (sourceX === targetX)
        return `M${sourceX},${sourceY} L${sourceX},${sourceY - 10} ${clockwise.topLeft} L${sourceX + (targetW > sourceH ? targetW : sourceW) / 2 + 10},${sourceY - 20} ${clockwise.topRight} L${sourceX + (targetW > sourceH ? targetW : sourceW) / 2 + 20},${sourceY + Math.abs(targetY - sourceY) + 10} ${clockwise.bottomRight} L${sourceX + 10},${targetY + 20} ${clockwise.bottomLeft} L${targetX},${targetY}`;
    else
        return `M${sourceX},${sourceY} L${sourceX + Math.abs((targetX - sourceX) / 2) - 10},${sourceY} ${clockwise.topRight} L${sourceX + Math.abs((targetX - sourceX) / 2)},${targetY - 10} q 0 10 10 10 L${targetX},${targetY}`;

}

const OrthogonalEdge = memo(
    ({
        sourceX,
        sourceY,
        sourceH,
        sourceW,
        targetX,
        targetY,
        targetH,
        targetW,
        testId,
    }: OrthogonalPathParams & { testId?: string }) => {
        const path = buildOrthogonalEdge({
            sourceX,
            sourceY,
            sourceH,
            sourceW,
            targetX,
            targetY,
            targetH,
            targetW
        });

        return <BaseEdge path={path} testId={testId} />;
    }
);

OrthogonalEdge.displayName = "OrthogonalEdge";

export default OrthogonalEdge;