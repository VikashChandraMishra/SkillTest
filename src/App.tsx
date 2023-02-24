import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Background } from "./components/flow/Background";
import Node from "./components/flow/Node";
import StraightEdge from "./components/flow/StraightEdge";

function App() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const [edge, setEdge] = useState<{
    sx: number;
    sy: number;
    tx: number;
    ty: number;
  }>();

  useEffect(() => {
    if (ref1.current && ref2.current) {
      const node1 = ref1.current;
      const node2 = ref2.current;

      const { x, y, width, height } = node1.getBoundingClientRect();
      const {
        x: n2x,
        y: n2y,
        width: n2w,
        // height: n2h
      } = node2.getBoundingClientRect();

      setEdge({
        sx: x + width,
        sy: y + height / 2,
        tx: n2x + n2w / 2,
        ty: n2y,
      });
    }
  }, [ref1.current, ref2.current]);

  return (
    <div className="wrapper">
      <Background />
      <div className="node" ref={ref1}>
        Node 1
      </div>
      <svg className="flow-container">
        {/* {edge && (
          <StraightEdge
            sourceX={edge.sx}
            sourceY={edge.sy}
            targetX={edge.tx}
            targetY={edge.ty}
            testId="edge-1"
          />
        )} */}
        <Node x={100} y={400} height={100} width={100} name={'Node 1'} />

      </svg>
      <div className="node" ref={ref2}>
        Node 2
      </div>
    </div>
  );
}

export { App };
