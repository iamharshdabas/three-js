"use client";

import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  Text,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import Macbook from "./Macbook";

export default function Page() {
  return (
    <Canvas camera={{ fov: 45, near: 0.1, far: 100, position: [0, 0, 4] }}>
      {/* <Perf position="top-left" /> */}
      <color args={["#111111"]} attach="background" />
      <Environment preset="city" />

      <PresentationControls
        global
        rotation={[0.2, 0.8, 0]}
        polar={[-0.2, 0.2]}
        azimuth={[-0.8, 0.8]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float position-y={-1} rotationIntensity={0.4}>
          <Macbook />
          <rectAreaLight
            intensity={100}
            rotation-x={Math.PI * 0.915}
            position={[0, 1.6, -1.42]}
            width={2.96}
            height={2.2}
            color="#ff8800"
          />
          <Html
            transform
            distanceFactor={1.2}
            position={[0, 1.54, -1.4]}
            rotation-x={-0.258}
            wrapperClass="htmlMacbookScreen"
          >
            <iframe src="https://bruno-simon.com/html" />
          </Html>
          <Text
            rotation={[-0.04, -Math.PI * 0.5, 0]}
            position={[2, 1.6, 0.4]}
            maxWidth={2}
            lineHeight={1}
            textAlign="center"
          >
            HARSH DABAS
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.2} opacity={0.4} blur={2} />
    </Canvas>
  );
}
