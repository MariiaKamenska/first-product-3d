import Cube from "./Cube";
import Face from "./Face";

export default function Boy({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Cube position={[1.5, 0.5, 0]} size={[1, 1, 1]} color="blue" />
      <Cube position={[1.5, 1.4, 0]} size={[0.9, 0.9, 0.9]} color="peachpuff" />
      <Face />
      <Cube position={[0.8, 0.5, 0]} size={[0.3, 1, 0.3]} color="blue" />
      <Cube position={[2.2, 0.5, 0]} size={[0.3, 1, 0.3]} color="blue" />
      <Cube position={[1.2, -0.5, 0]} size={[0.3, 1, 0.3]} color="darkblue" />
      <Cube position={[1.8, -0.5, 0]} size={[0.3, 1, 0.3]} color="darkblue" />
    </group>
  );
}