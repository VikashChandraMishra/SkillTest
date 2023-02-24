import React from "react";

export function DotPattern({
  radius,
  color,
  opacity,
}: {
  radius: number;
  color?: string;
  opacity?: number;
}) {
  // clamp opacity in the 0.1 - 1 range
  const usableOpacity = Math.max(0.1, Math.min(opacity ?? 1, 1));
  return (
    <circle cx={radius} cy={radius} r={radius} fill={color ?? "#666666"} opacity={usableOpacity} />
  );
}

export function Background() {
  return (
    <svg
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      }}
    >
      <pattern
        id="pattern-circles"
        x="0"
        y="0"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
        patternContentUnits="userSpaceOnUse"
      >
        <circle id="pattern-circle" cx="10" cy="10" r="1" fill="#acacac"></circle>
      </pattern>

      <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
    </svg>
  );
}
