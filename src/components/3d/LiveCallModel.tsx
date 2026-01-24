import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface LiveCallModelProps {
  isHovered?: boolean;
}

const LiveCallModel = ({ isHovered = false }: LiveCallModelProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const waveRefs = useRef<THREE.Mesh[]>([]);
  const avatarRefs = useRef<THREE.Group[]>([]);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
      
      const targetScale = isHovered ? 1.1 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
    
    // Animated signal waves
    waveRefs.current.forEach((wave, i) => {
      if (wave && wave.material) {
        const scale = 1 + Math.sin(state.clock.elapsedTime * 3 - i * 0.5) * 0.15;
        wave.scale.set(scale, scale, 1);
        const material = wave.material as THREE.MeshStandardMaterial;
        material.opacity = 0.6 - i * 0.15 + Math.sin(state.clock.elapsedTime * 3 - i * 0.5) * 0.1;
      }
    });
    
    // Bobbing avatars
    avatarRefs.current.forEach((avatar, i) => {
      if (avatar) {
        avatar.position.y = 0.15 + Math.sin(state.clock.elapsedTime * 2 + i * 1.5) * 0.03;
      }
    });
  });

  const avatarPositions = [
    { x: -0.35, color: "#8b5cf6" },
    { x: 0, color: "#06b6d4" },
    { x: 0.35, color: "#f59e0b" },
  ];

  return (
    <group ref={groupRef}>
      {/* Video call window frame */}
      <RoundedBox args={[1.5, 1.0, 0.06]} radius={0.05} smoothness={4} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#18181b"
          roughness={0.3}
          metalness={0.5}
        />
      </RoundedBox>
      
      {/* Screen background */}
      <RoundedBox args={[1.35, 0.85, 0.02]} radius={0.03} smoothness={4} position={[0, 0, 0.04]}>
        <meshStandardMaterial 
          color="#0c0a09"
          roughness={0.2}
          metalness={0.1}
        />
      </RoundedBox>
      
      {/* Avatar circles (call participants) */}
      {avatarPositions.map((avatar, i) => (
        <group 
          key={i} 
          position={[avatar.x, 0.15, 0.08]}
          ref={(el) => { if (el) avatarRefs.current[i] = el; }}
        >
          {/* Avatar circle */}
          <Sphere args={[0.18, 24, 24]}>
            <meshStandardMaterial 
              color={avatar.color}
              roughness={0.3}
              metalness={0.4}
            />
          </Sphere>
          
          {/* Face placeholder */}
          <Sphere args={[0.05, 16, 16]} position={[0, 0.03, 0.15]}>
            <meshStandardMaterial color="#ffffff" roughness={0.5} />
          </Sphere>
        </group>
      ))}
      
      {/* Signal/broadcast waves */}
      {[0.4, 0.55, 0.7].map((radius, i) => (
        <mesh 
          key={i}
          ref={(el) => { if (el) waveRefs.current[i] = el; }}
          position={[0.55, 0.35, 0.1]}
          rotation={[0, 0, 0]}
        >
          <ringGeometry args={[radius - 0.03, radius, 32]} />
          <meshStandardMaterial 
            color="#22c55e"
            transparent
            opacity={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
      
      {/* LIVE indicator */}
      <group position={[-0.5, 0.35, 0.1]}>
        <RoundedBox args={[0.25, 0.1, 0.02]} radius={0.02}>
          <meshStandardMaterial 
            color="#ef4444"
            roughness={0.3}
            metalness={0.3}
            emissive="#ef4444"
            emissiveIntensity={0.5}
          />
        </RoundedBox>
      </group>
      
      {/* Bottom control bar */}
      <mesh position={[0, -0.35, 0.06]}>
        <boxGeometry args={[1.0, 0.08, 0.02]} />
        <meshStandardMaterial 
          color="#27272a"
          roughness={0.4}
          metalness={0.4}
        />
      </mesh>
    </group>
  );
};

export default LiveCallModel;
