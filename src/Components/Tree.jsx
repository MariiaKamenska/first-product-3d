import Cube from "./Cube";

export default function Tree({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/* <Cube/> */}
      <mesh position={position}>
            <boxGeometry args={[1, 1, 1]}/>
            <meshToonMaterial color="lightgreen" />
        </mesh>
    </group>
  );
}