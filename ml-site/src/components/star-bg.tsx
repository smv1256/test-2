"use client"

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import Model from "./model";
import Nebula from "./nebula";

export default function StarBG () {
  return (
    <Canvas className="bg-black w-screen h-screen" camera={{ position: [0, 0, 0] }} >
        {/** <directionalLight position={[0, 3, 2]} intensity={3} />
        <Environment preset="night" /> **/}
        <Nebula />

        {/** <Model /> **/ }
    </Canvas>
  );
}
