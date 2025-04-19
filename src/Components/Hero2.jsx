import React from "react";

export default function Endy({ colors }) {
    
    return (
        <group>
            {/* {Head} */}
            <mesh position={[4, 5.75, 0]}>
                <boxGeometry args={[1.2, 1.2, 1]}/>
                <meshPhongMaterial color={colors.head}/>
            </mesh>

            {/* {Body} */}
            <mesh position={[4, 4, 0]}>
                <boxGeometry args={[0.8, 3.2, 0.5]}/>
                <meshPhongMaterial color={colors.body}/>
            </mesh> 

            
            {/* {Left Hand} */}
            <mesh position={[3.45, 3.55, 0]}>
                <boxGeometry args={[0.3, 3, 0.5]}/>
                <meshPhongMaterial color={colors.hand}/>
            </mesh>   

            {/* {Right Hand} */}
            <mesh position={[4.55, 3.55, 0]}>
                <boxGeometry args={[0.3, 3, 0.5]}/>
                <meshPhongMaterial color={colors.hand}/>
            </mesh>   

            {/* {Left Leg} */}
            <mesh position={[3.85, 0.9, 0]}>
                <boxGeometry args={[0.3, 3, 0.5]}/>
                <meshPhongMaterial color={colors.leg}/>
            </mesh>   

            {/* {Right Leg} */}
            <mesh position={[4.14, 0.9, 0]}>
                <boxGeometry args={[0.3, 3, 0.5]}/>
                <meshPhongMaterial color={colors.leg}/>
            </mesh>   
        </group>
      );
}