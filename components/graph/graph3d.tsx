"use client";

import { useRef, useCallback, useMemo, useEffect, useState } from "react";
import ForceGraph3D from "react-force-graph-3d";

export default function Graph3d({data,detailsHandler}:any) {
  const fgRef: any = useRef();
//   const [data, setData] = useState(jsondata);

  const handleClick = useCallback(
    (node: any) => {
      detailsHandler(node);
      // Aim at node from outside it
      const distance = 40;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

      fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, // lookAt ({ x, y, z })
        3000 // ms transition duration
      );
    },
    [fgRef]
  );

  return (
    <ForceGraph3D
      ref={fgRef}
      graphData={data}
      nodeLabel="id"
      nodeAutoColorBy="group"
      onNodeClick={handleClick}
    />
  );
}