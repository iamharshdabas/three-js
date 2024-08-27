"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import Text3d from "./text-3D";

export default function Page() {
  return (
    <Canvas>
      <Perf position="top-left" />
      <OrbitControls enablePan={false} />
      <Text3d />
    </Canvas>
  );
}
