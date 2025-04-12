import { createRoot } from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

import React from "react";
import './App.css';

function RotatingBox() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.025;
      meshRef.current.rotation.y += 0.025;
    }
  });
  return (
    <mesh ref={meshRef}>
     <boxGeometry args={[3, 3, 3]}/>
     <meshPhongMaterial color="lightgreen"/>
  </mesh>

  );
}


function App() {
  return (
    <div id="canvas-container" className="App">
      <Canvas>
        <RotatingBox />
        <ambientLight intensity={0.5} />
        <directionalLight position={[1, 1, 3]} color="blue"/>
        <OrbitControls/>
      </Canvas> 
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
export default App;
