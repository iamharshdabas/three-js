"use client";

import { Canvas } from "@react-three/fiber";
import Core from "./core";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function Page() {
  return (
    <Canvas>
      <Perf position="top-left" />
      <OrbitControls enablePan={false} />
      <Core />
    </Canvas>
  );
}
