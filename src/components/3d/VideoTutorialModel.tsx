import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface VideoTutorialModelProps {
  isHovered?: boolean;
}

const VideoTutorialModel = ({ isHovered = false }: VideoTutorialModelProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const playRef = useRef<THREE.Mesh>(null);
  const barsRef = useRef<THREE.Mesh[]>([]);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
      
      const targetScale = isHovered ? 1.1 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
    
    if (playRef.current) {
      // Pulsing play button
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.08;
      playRef.current.scale.set(pulse, pulse, pulse);
    }
    
    // Animated equalizer bars
    barsRef.current.forEach((bar, i) => {
      if (bar) {
        const height = 0.15 + Math.sin(state.clock.elapsedTime * 4 + i * 1.5) * 0.1;
        bar.scale.y = height / 0.15;
        bar.position.y = -0.55 + height / 2;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Monitor/Screen frame */}
      <RoundedBox args={[1.6, 1.1, 0.08]} radius={0.04} smoothness={4} position={[0, 0.1, 0]}>
        <meshStandardMaterial 
          color="#27272a"
          roughness={0.3}
          metalness={0.7}
        />
      </RoundedBox>
      
      {/* Screen */}
      <RoundedBox args={[1.4, 0.9, 0.02]} radius={0.02} smoothness={4} position={[0, 0.1, 0.05]}>
        <meshStandardMaterial 
          color="#0f172a"
          roughness={0.1}
          metalness={0.2}
          emissive="#1e40af"
          emissiveIntensity={0.1}
        />
      </RoundedBox>
      
      {/* Play button triangle */}
      <mesh ref={playRef} position={[0, 0.1, 0.08]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.2, 0.25, 3]} />
        <meshStandardMaterial 
          color="#ffffff"
          roughness={0.2}
          metalness={0.3}
          emissive="#ffffff"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Monitor stand */}
      <mesh position={[0, -0.45, 0]}>
        <boxGeometry args={[0.15, 0.25, 0.08]} />
        <meshStandardMaterial 
          color="#3f3f46"
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
      
      {/* Stand base */}
      <mesh position={[0, -0.6, 0]}>
        <boxGeometry args={[0.6, 0.05, 0.25]} />
        <meshStandardMaterial 
          color="#3f3f46"
          roughness={0.4}
          metalness={0.6}
        />
      </mesh>
      
      {/* Equalizer bars */}
      {[-0.2, -0.1, 0, 0.1, 0.2].map((x, i) => (
        <mesh 
          key={i}
          ref={(el) => { if (el) barsRef.current[i] = el; }}
          position={[x, -0.55, 0.15]}
        >
          <boxGeometry args={[0.04, 0.15, 0.04]} />
          <meshStandardMaterial 
            color={["#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4"][i]}
            roughness={0.3}
            metalness={0.5}
            emissive={["#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4"][i]}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};

export default VideoTutorialModel;
