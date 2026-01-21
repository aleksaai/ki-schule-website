import { Canvas } from "@react-three/fiber";
import { 
  Environment, 
  Float, 
  RoundedBox,
  MeshTransmissionMaterial,
  ContactShadows
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Individual 3D pill element
const Pill = ({ 
  position, 
  rotation, 
  color, 
  scale = [1, 1, 1] 
}: { 
  position: [number, number, number]; 
  rotation: [number, number, number]; 
  color: string;
  scale?: [number, number, number];
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <capsuleGeometry args={[0.15, 0.5, 16, 32]} />
      <meshPhysicalMaterial
        color={color}
        metalness={0.1}
        roughness={0.2}
        clearcoat={1}
        clearcoatRoughness={0.1}
        envMapIntensity={1.5}
      />
    </mesh>
  );
};

// Glass-like rounded square base
const GlassBase = () => {
  return (
    <RoundedBox args={[3, 3, 0.4]} radius={0.4} smoothness={8} position={[0, 0, -0.3]}>
      <meshPhysicalMaterial
        color="#ffffff"
        metalness={0}
        roughness={0.05}
        transmission={0.1}
        thickness={0.5}
        envMapIntensity={0.5}
        clearcoat={1}
        clearcoatRoughness={0}
      />
    </RoundedBox>
  );
};

// The Slack-style pinwheel logo
const SlackLogo = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Colors matching the Slack brand
  const cyan = "#36C5F0";
  const green = "#2EB67D";
  const yellow = "#ECB22E";
  const pink = "#E01E5A";

  return (
    <Float 
      speed={2} 
      rotationIntensity={0.3} 
      floatIntensity={0.5}
    >
      <group ref={groupRef} rotation={[0.3, -0.2, 0]}>
        {/* Glass base */}
        <GlassBase />
        
        {/* Pinwheel arrangement - 8 pills */}
        {/* Top section - Cyan */}
        <Pill position={[0, 0.7, 0]} rotation={[0, 0, 0]} color={cyan} />
        <Pill position={[0.35, 0.9, 0]} rotation={[0, 0, Math.PI / 2]} color={cyan} scale={[0.6, 0.6, 0.6]} />
        
        {/* Right section - Green */}
        <Pill position={[0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]} color={green} />
        <Pill position={[0.9, 0.35, 0]} rotation={[0, 0, 0]} color={green} scale={[0.6, 0.6, 0.6]} />
        
        {/* Bottom section - Yellow */}
        <Pill position={[0, -0.7, 0]} rotation={[0, 0, 0]} color={yellow} />
        <Pill position={[-0.35, -0.9, 0]} rotation={[0, 0, Math.PI / 2]} color={yellow} scale={[0.6, 0.6, 0.6]} />
        
        {/* Left section - Pink */}
        <Pill position={[-0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]} color={pink} />
        <Pill position={[-0.9, -0.35, 0]} rotation={[0, 0, 0]} color={pink} scale={[0.6, 0.6, 0.6]} />
      </group>
    </Float>
  );
};

const Logo3D = () => {
  return (
    <div className="h-[400px] w-full lg:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true,
          alpha: true,
        }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting setup for that premium 3D look */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow 
        />
        <directionalLight 
          position={[-5, 3, 2]} 
          intensity={0.5} 
          color="#ffeedd"
        />
        <pointLight position={[0, 5, 0]} intensity={0.3} color="#ffffff" />
        
        {/* Environment for realistic reflections */}
        <Environment preset="city" />
        
        {/* The 3D Logo */}
        <SlackLogo />
        
        {/* Soft shadow underneath */}
        <ContactShadows 
          position={[0, -1.8, 0]} 
          opacity={0.4} 
          scale={8} 
          blur={2.5} 
          far={4}
        />
      </Canvas>
    </div>
  );
};

export default Logo3D;
