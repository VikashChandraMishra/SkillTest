import React, { memo } from "react";
import { BaseEdge } from "./BaseEdge";

interface pathPoint {
    x: number;
    y: number;
}

type OrthogonalPathParams = {
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
    pathPoints: pathPoint[];
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
    targetX,
    targetY,
    pathPoints
}: OrthogonalPathParams) {

    const { clockwise, antiClockWise } = bends;
    let path = `M${pathPoints[0].x},${pathPoints[0].y}`;
    
    for (let i=0; i<pathPoints.length; i++) {
        path += `L${pathPoints[i].x},${pathPoints[i].y}`;
    }
    return path;

}

const OrthogonalEdgeRouter = memo(
    ({
        sourceX,
        sourceY,
        targetX,
        targetY,
        pathPoints,
        testId,
    }: OrthogonalPathParams & { testId?: string }) => {
        const path = buildOrthogonalEdge({
            sourceX,
            sourceY,
            targetX,
            targetY,
            pathPoints
        });

        return <BaseEdge path={path} testId={testId} />;
    }
);

OrthogonalEdgeRouter.displayName = "OrthogonalEdgeRouter";

export default OrthogonalEdgeRouter;