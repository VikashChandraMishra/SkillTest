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

function buildOrthogonalEdge({
    pathPoints
}: OrthogonalPathParams) {

    let path = `M${pathPoints[0].x},${pathPoints[0].y}`;
    
    // generates path by looping through the pathPoints
    for (let i=0; i<pathPoints.length; i++) {
        path += ` L${pathPoints[i].x},${pathPoints[i].y}`;
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