import matcapTextures from "@/components/matcap";
import { Center, Float, Text3D, useMatcapTexture } from "@react-three/drei";
import { useControls } from "leva";

export default function Text3d() {
  const text = useControls("text", {
    bevelEnabled: true,
    bevelSize: 0.05,
  });

  const matcapTexturesOptions = useControls("matcap", {
    id: { options: matcapTextures },
  });

  const [matcapTexture] = useMatcapTexture(matcapTexturesOptions.id, 256);

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
