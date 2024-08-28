import matcapTextures from "@/components/matcap";
import { Center, Float, Text3D, useMatcapTexture } from "@react-three/drei";
import { useControls } from "leva";

export default function Text3d() {
  const text = useControls("text", {
    bevelEnabled: true,
    bevelSize: 0.05,
    matcapID: { value: "8A3B3D_DA5F62_461F20_BC7F81", options: matcapTextures },
  });

  const [matcapTexture] = useMatcapTexture(text.matcapID, 256);

  return (
    <Float>
      <Center>
        <Text3D
          bevelEnabled={text.bevelEnabled}
          bevelSize={text.bevelSize}
          font="./inter.json"
        >
          React Three Fiber
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Center>
    </Float>
  );
}
