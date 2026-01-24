import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

interface AITeamModelProps {
  isHovered?: boolean;
}

const AITeamModel = ({ isHovered = false }: AITeamModelProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRefs = useRef<THREE.Mesh[]>([]);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      
      const targetScale = isHovered ? 1.15 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
    
    if (orbitRef.current) {
      orbitRef.current.rotation.y = state.clock.elapsedTime * 0.8;
      orbitRef.current.rotation.x = state.clock.elapsedTime * 0.4;
    }
    
    if (coreRef.current) {
      // Pulsing core
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.05;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }
    
    // Animate rings
    ringRefs.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.z = state.clock.elapsedTime * (0.5 + i * 0.3);
      }
    });
  });

  // Satellite positions
  const satellites = [
    { pos: [0.7, 0, 0], color: "#60a5fa" },
    { pos: [-0.5, 0.5, 0.3], color: "#a78bfa" },
    { pos: [0.3, -0.6, 0.4], color: "#34d399" },
    { pos: [-0.4, 0.2, -0.6], color: "#f472b6" },
  ];

  return (
    <group ref={groupRef}>
      {/* Central AI Core */}
      <Sphere ref={coreRef} args={[0.35, 32, 32]}>
        <meshStandardMaterial 
          color="#8b5cf6"
          roughness={0.1}
          metalness={0.8}
          emissive="#8b5cf6"
          emissiveIntensity={0.3}
        />
      </Sphere>
      
      {/* Inner glow sphere */}
      <Sphere args={[0.38, 32, 32]}>
        <meshStandardMaterial 
          color="#c4b5fd"
          roughness={0.2}
          metalness={0.5}
          transparent
          opacity={0.3}
        />
      </Sphere>
      
      {/* Orbital rings */}
      {[0.55, 0.7, 0.85].map((radius, i) => (
        <mesh 
          key={i} 
          ref={(el) => { if (el) ringRefs.current[i] = el; }}
          rotation={[Math.PI / 2 + i * 0.4, i * 0.3, 0]}
        >
          <torusGeometry args={[radius, 0.012, 8, 64]} />
          <meshStandardMaterial 
            color={["#60a5fa", "#a78bfa", "#34d399"][i]}
            roughness={0.3}
            metalness={0.6}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
      
      {/* Orbiting satellites (AI team members) */}
      <group ref={orbitRef}>
        {satellites.map((sat, i) => (
          <group key={i} position={sat.pos as [number, number, number]}>
            <Sphere args={[0.1, 16, 16]}>
              <meshStandardMaterial 
                color={sat.color}
                roughness={0.2}
                metalness={0.7}
                emissive={sat.color}
                emissiveIntensity={0.2}
              />
            </Sphere>
            {/* Connection line to core */}
            <mesh>
              <cylinderGeometry args={[0.005, 0.005, 0.6, 8]} />
              <meshStandardMaterial 
                color={sat.color}
                transparent
                opacity={0.3}
              />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
};

export default AITeamModel;
