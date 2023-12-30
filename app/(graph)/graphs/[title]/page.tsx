"use client";

import { useRef, useCallback, useState } from "react";
import ForceGraph3D from "react-force-graph-3d";
import jsondata from "../data.json";
import Details from "@/components/graph/graph-details";
import Graph3d from "@/components/graph/graph3d";

export default function Page({params}:any) {
  const [nodeDetails, setNodeDetails] = useState();
  const detailsHandler = (details: any) => {
    console.log(details);
    setNodeDetails(details);
  };
  return (
    <>
      <Details nodeDetails={nodeDetails} params={params} />
      <Graph3d data={jsondata} detailsHandler={detailsHandler} />
    </>
  );
}
