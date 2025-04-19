import { createRoot } from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";

import Hero from "./Components/Hero"
import Endy from "./Components/Hero2"
import { useControls } from "leva";
import React from "react";
import './App.css';


function RotatingBox() {
  const meshRef = useRef();

  // useFrame(() => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.x += 0.025;
  //     meshRef.current.rotation.y += 0.025;
  //   }
  // });
  return (
    <mesh ref={meshRef}>
     <boxGeometry args={[2, 2, 2]}/>
     <meshPhongMaterial color="lightgreen"/>
  </mesh>

  );
}


function App() {
//   const colors2 = useControls("Endy colors", {
//     head: "#f00",
//     body: "#f00",
//     hand: "#00f",
//     leg: "#00f",
//   }
// );
 
  const colors = useControls("Hero colors", {
    head: "#f00",
    body: "#0f0",
    hand: "#00f",
    leg: "#0ff",
  }
);


  return (
    <div id="canvas-container" className="App">
      <Canvas camera={{ position: [5, 3, 5], fov: 50 }}>
        {/* <RotatingBox /> */}
        <Hero colors={colors}/>
        <Endy colors={colors}/>
        <ambientLight intensity={0.8} />
        {/* <directionalLight position={[1, 1, 3]} color="orange" intensity={1}/> */}
        <directionalLight position={[0, 0, 5]} intensity={1}/>
        <OrbitControls/>
      </Canvas> 
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
export default App;
