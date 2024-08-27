import { useControls } from "leva";

export default function Core() {
  const { wireframe } = useControls({ wireframe: true });

  return (
    <mesh>
      <torusGeometry />
      <meshNormalMaterial wireframe={wireframe} />
    </mesh>
  );
}
