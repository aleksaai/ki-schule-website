import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface BlueprintModelProps {
  isHovered?: boolean;
}

const BlueprintModel = ({ isHovered = false }: BlueprintModelProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const gearRefs = useRef<THREE.Mesh[]>([]);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.05;
      
      const targetScale = isHovered ? 1.1 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
    
    // Rotate gears
    gearRefs.current.forEach((gear, i) => {
      if (gear) {
        gear.rotation.z = state.clock.elapsedTime * (i % 2 === 0 ? 1 : -1) * 0.8;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Main document/blueprint */}
      <RoundedBox args={[1.2, 1.5, 0.06]} radius={0.03} smoothness={4}>
        <meshStandardMaterial 
          color="#1e3a5f"
          roughness={0.4}
          metalness={0.3}
        />
      </RoundedBox>
      
      {/* Grid lines on blueprint */}
      {[-0.4, -0.2, 0, 0.2, 0.4].map((x, i) => (
        <mesh key={`v${i}`} position={[x, 0, 0.04]}>
          <boxGeometry args={[0.01, 1.3, 0.01]} />
          <meshStandardMaterial color="#38bdf8" transparent opacity={0.5} />
        </mesh>
      ))}
      {[-0.5, -0.25, 0, 0.25, 0.5].map((y, i) => (
        <mesh key={`h${i}`} position={[0, y, 0.04]}>
          <boxGeometry args={[1.0, 0.01, 0.01]} />
          <meshStandardMaterial color="#38bdf8" transparent opacity={0.5} />
        </mesh>
      ))}
      
      {/* Floating gears (automation symbols) */}
      {[
        { pos: [0.35, 0.35, 0.15], size: 0.18 },
        { pos: [-0.3, -0.3, 0.12], size: 0.14 },
        { pos: [0.15, -0.45, 0.1], size: 0.1 },
      ].map((gear, i) => (
        <mesh 
          key={i}
          ref={(el) => { if (el) gearRefs.current[i] = el; }}
          position={gear.pos as [number, number, number]}
        >
          <cylinderGeometry args={[gear.size, gear.size, 0.04, 8]} />
          <meshStandardMaterial 
            color="#f59e0b"
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      ))}
      
      {/* Folder tab */}
      <mesh position={[-0.4, 0.8, 0]}>
        <boxGeometry args={[0.35, 0.12, 0.06]} />
        <meshStandardMaterial 
          color="#3b82f6"
          roughness={0.3}
          metalness={0.5}
        />
      </mesh>
    </group>
  );
};

export default BlueprintModel;
