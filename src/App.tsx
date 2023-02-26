import React, { useState } from "react";
import "./App.css";
import { Background } from "./components/flow/Background";
import Node from "./components/flow/Node";
import { connectNodes } from "./components/flow/OrthogonalConnector"
import OrthogonalEdgeRouter from "./components/flow/OrthogonalEdgeRouter";

interface pathPoint {
  x: number;
  y: number;
}

function App() {

  const [pathPoints, setPathPoints] = useState<pathPoint[]>([]);

  // sets pathPoints to the array of coordinates received from connectNodes()
  // it also allows the OrthogonalEdgeRouter to be rendered
  const generatePathPoints = () => {

    // the same nodes between which the edge is to be drawn have to be passed 

    setPathPoints(connectNodes(<Node x={150} y={100} height={100} width={100} name={'Node 1'} />, <Node x={400} y={300} height={100} width={300} name={'Node 2'} />))
  }

  return (
    <div className="wrapper">
      <Background />
      <svg className="flow-container">
        <Node x={150} y={100} height={100} width={100} name={'Node 1'} />
        <Node x={400} y={300} height={100} width={300} name={'Node 2'} />
        
        {/* the parameters in 'OrthogonalEdgeRouter' have to be the same as those of the above nodes */}
        {
          pathPoints.length ?
          <OrthogonalEdgeRouter sourceX={150} sourceY={100} targetX={400} targetY={300} pathPoints={pathPoints} />
          : ''
        }
      </svg>

      <button style={{ backgroundColor: 'red', cursor: 'pointer', position: 'relative', margin: '20px 20px' }} onClick={generatePathPoints}>Generate Edge</button>
    </div>
  );
}

export { App };