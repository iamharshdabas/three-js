"use client";

import { Canvas } from "@react-three/fiber";
import Core from "./core";
import { OrbitControls } from "@react-three/drei";

export default function Page() {
  return (
    <Canvas>
      <OrbitControls enablePan={false} />
      <Core />
    </Canvas>
  );
}
