import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface CertificateModelProps {
  isHovered?: boolean;
}

const CertificateModel = ({ isHovered = false }: CertificateModelProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const ribbonRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Smooth floating animation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
      
      // Scale on hover
      const targetScale = isHovered ? 1.1 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
    
    if (ribbonRef.current) {
      ribbonRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Certificate base */}
      <RoundedBox args={[1.6, 1.2, 0.08]} radius={0.04} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#f5f5f0" 
          roughness={0.3} 
          metalness={0.1}
        />
      </RoundedBox>
      
      {/* Gold border */}
      <RoundedBox args={[1.7, 1.3, 0.06]} radius={0.05} smoothness={4} position={[0, 0, -0.02]}>
        <meshStandardMaterial 
          color="#d4af37" 
          roughness={0.2} 
          metalness={0.8}
        />
      </RoundedBox>
      
      {/* Ribbon/Medal */}
      <group position={[0, -0.45, 0.1]} ref={ribbonRef}>
        {/* Ribbon tails */}
        <mesh position={[-0.1, -0.15, 0]}>
          <boxGeometry args={[0.08, 0.25, 0.02]} />
          <meshStandardMaterial color="#dc2626" roughness={0.4} />
        </mesh>
        <mesh position={[0.1, -0.15, 0]}>
          <boxGeometry args={[0.08, 0.25, 0.02]} />
          <meshStandardMaterial color="#dc2626" roughness={0.4} />
        </mesh>
        
        {/* Medal circle */}
        <mesh position={[0, 0, 0.02]}>
          <cylinderGeometry args={[0.15, 0.15, 0.04, 32]} />
          <meshStandardMaterial 
            color="#ffd700" 
            roughness={0.15} 
            metalness={0.9}
          />
        </mesh>
        
        {/* Star on medal */}
        <mesh position={[0, 0, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.06, 0.06, 0.02, 5]} />
          <meshStandardMaterial 
            color="#ffffff" 
            roughness={0.3} 
            metalness={0.5}
          />
        </mesh>
      </group>
      
      {/* Text lines (decorative) */}
      {[0.35, 0.15, -0.05].map((y, i) => (
        <mesh key={i} position={[0, y, 0.05]}>
          <boxGeometry args={[1.1 - i * 0.2, 0.06, 0.01]} />
          <meshStandardMaterial color="#333" roughness={0.8} opacity={0.3} transparent />
        </mesh>
      ))}
    </group>
  );
};

export default CertificateModel;
