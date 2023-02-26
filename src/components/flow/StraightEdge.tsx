import React, { memo } from "react";
import { BaseEdge } from "./BaseEdge";

type StraightPathParams = {
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
};

function buildStraightEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
}: StraightPathParams) {
  return `M${sourceX},${sourceY}L ${targetX},${targetY}`;
}

const StraightEdge = memo(
  ({
    sourceX,
    sourceY,
    targetX,
    targetY,
    testId,
  }: StraightPathParams & { testId?: string }) => {
    const path = buildStraightEdge({ sourceX, sourceY, targetX, targetY });

    return <BaseEdge path={path} testId={testId} />;
  }
);

StraightEdge.displayName = "StraightEdge";

export default StraightEdge;