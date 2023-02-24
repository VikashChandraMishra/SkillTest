import React, { memo } from "react";
import { BaseEdge } from "./BaseEdge";

type OrthogonalPathParams = {
    sourceX: number;
    sourceY: number;
    targetX: number;
    targetY: number;
};

function buildOrthogonalEdge({
    sourceX,
    sourceY,
    targetX,
    targetY,
}: OrthogonalPathParams) {
    return `M${sourceX},${sourceY}L ${targetX},${targetY}`;
}

const OrthogonalEdge = memo(
    ({
        sourceX,
        sourceY,
        targetX,
        targetY,
        testId,
    }: OrthogonalPathParams & { testId?: string }) => {
        const path = buildOrthogonalEdge({ sourceX, sourceY, targetX, targetY });

        return <BaseEdge path={path} testId={testId} />;
    }
);

OrthogonalEdge.displayName = "StraightEdge";

export default OrthogonalEdge;
