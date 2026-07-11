'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import FuturisticProduct from './FuturisticProduct';

// Custom floating particles component
function AmbientParticles({ count = 200 }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  const [positions, speeds, phases] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    const phs = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Spawn particles in a box around the center
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
      
      // Speed of upward float
      spd[i] = 0.005 + Math.random() * 0.015;
      
      // Random phases for trigonometry oscillation
      phs[i * 3] = Math.random() * Math.PI;
      phs[i * 3 + 1] = Math.random() * Math.PI;
      phs[i * 3 + 2] = Math.random() * Math.PI;
    }
    return [pos, spd, phs];
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position;
    const t = state.clock.getElapsedTime();

    for (let i = 0; i < count; i++) {
      // Float upwards
      let y = posAttr.getY(i) + speeds[i];
      if (y > 6) y = -6; // reset at bottom
      posAttr.setY(i, y);

      // Horizontal drift (sway)
      const x = posAttr.getX(i) + Math.sin(t * 0.5 + phases[i * 3]) * 0.003;
      const z = posAttr.getZ(i) + Math.cos(t * 0.5 + phases[i * 3 + 2]) * 0.003;
      posAttr.setX(i, x);
      posAttr.setZ(i, z);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#55e6ff"
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Subcomponent inside Canvas to handle mouse lag/parallax
function InteractiveGroup({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Get mouse coordinates from state (-1 to 1)
    const { x, y } = state.pointer;
    
    // Smoothly interpolate rotation to create subtle parallax
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.15, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.15, 0.05);
  });

  return <group ref={groupRef}>{children}</group>;
}

export default function Scene3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 bg-transparent flex items-center justify-center pointer-events-none">
        {/* Loading spacer */}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 w-full h-screen z-0 overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]} // optimized for mobile and high-density screens
      >
        {/* Cinematic ambient fog */}
        <ambientLight intensity={0.4} />
        
        {/* Lighting structure: Soft fill light and a strong accent keylight */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          color="#55e6ff"
        />
        <directionalLight
          position={[-5, 5, -5]}
          intensity={0.6}
          color="#7b61ff"
        />
        
        {/* Volumetric atmosphere particles */}
        <AmbientParticles count={150} />
        
        {/* Deep background space dust */}
        <Stars radius={100} depth={50} count={300} factor={4} saturation={0.5} fade speed={1} />
        
        {/* Interactive parallax group containing our main rotating 3D headset */}
        <InteractiveGroup>
          <FuturisticProduct />
        </InteractiveGroup>
      </Canvas>
    </div>
  );
}
