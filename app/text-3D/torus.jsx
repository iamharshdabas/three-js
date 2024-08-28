import matcapTextures from "@/components/matcap";
import { Float, useMatcapTexture } from "@react-three/drei";
import { folder, useControls } from "leva";
import { useMemo, useState } from "react";

export default function Torus() {
  const [torusGeometry, setTorusGeometry] = useState();
  const [meshMatcapMaterial, setMeshMatcapMaterial] = useState();

  const torus = useControls("torus", {
    args: folder({
      radius: 1,
      tube: 0.4,
      radialSegments: 8,
      tubularSegments: 24,
      count: 100,
      matcapID: {
        value: "1B1B1B_999999_575757_747474",
        options: matcapTextures,
      },
    }),
    position: folder({
      x: 1,
      y: 0.4,
      z: 1,
      randomness: 10,
      spread: 8,
    }),
    scale: 1,
    rotation: 1,
  });

  const array = useMemo(() => [...Array(torus.count)], [torus.count]);

  const position = useMemo(
    () =>
      array.map(() => [
        (Math.random() - 0.5) * torus.spread * torus.randomness * torus.x,
        (Math.random() - 0.5) * torus.spread * torus.randomness * torus.y,
        (Math.random() - 0.5) * torus.spread * torus.randomness * torus.z,
      ]),
    [array, torus.randomness, torus.spread, torus.x, torus.y, torus.z],
  );

  const scale = useMemo(
    () => array.map(() => Math.random() + torus.scale),
    [array, torus.scale],
  );

  const rotation = useMemo(
    () =>
      array.map(() => [
        (Math.random() - 0.5) * torus.rotation,
        (Math.random() - 0.5) * torus.rotation,
        0,
      ]),
    [array, torus.rotation],
  );

  const [matcapTexture] = useMatcapTexture(torus.matcapID, 256);

  return (
    <>
      <torusGeometry
        ref={setTorusGeometry}
        args={[
          torus.radius,
          torus.tube,
          torus.radialSegments,
          torus.tubularSegments,
        ]}
      />
      <meshMatcapMaterial ref={setMeshMatcapMaterial} matcap={matcapTexture} />
      {array.map((_value, index) => (
        <Float key={index}>
          <mesh
            position={position[index]}
            scale={scale[index]}
            rotation={rotation[index]}
            geometry={torusGeometry}
            material={meshMatcapMaterial}
          />
        </Float>
      ))}
    </>
  );
}
