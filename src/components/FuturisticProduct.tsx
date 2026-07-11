'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FuturisticProduct() {
  const groupRef = useRef<THREE.Group>(null);
  const outerShellRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!groupRef.current) return;

    // We animate the components based on page scroll using GSAP ScrollTrigger
    // The scroll trigger will map the scroll progress to direct transformations on the 3D parts
    
    // Timeline for exploded view
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5, // smooth scrubbing
      }
    });

    // 1. First scroll phase (Hero to About): Product rotates and begins to expand
    tl.to(groupRef.current.position, {
      x: 2.2, // move to the right side to let text sit on left
      y: 0,
      z: -1,
      duration: 1,
    }, 0)
    .to(groupRef.current.rotation, {
      y: Math.PI * 1.5,
      x: 0.2,
      duration: 1,
    }, 0)
    .to(outerShellRef.current!.scale, {
      x: 1.5, // outer shell expands
      y: 1.5,
      z: 1.5,
      duration: 1,
    }, 0)
    .to((outerShellRef.current!.material as THREE.MeshPhysicalMaterial), {
      opacity: 0.15, // glass fades out to reveal internals
      transmission: 0.95,
      duration: 1,
    }, 0);

    // 2. Second scroll phase (About to Projects): Exploded view reveals inner rings separating
    tl.to(ring1Ref.current!.position, {
      y: 1.5, // ring moves up
      duration: 1,
    }, 1)
    .to(ring3Ref.current!.position, {
      y: -1.5, // ring moves down
      duration: 1,
    }, 1)
    .to(ring2Ref.current!.rotation, {
      x: Math.PI,
      y: -Math.PI,
      duration: 1.5,
    }, 1)
    .to(coreRef.current!.scale, {
      x: 1.3,
      y: 1.3,
      z: 1.3,
      duration: 1,
    }, 1)
    .to(groupRef.current.position, {
      x: -2.2, // switch sides
      y: -0.5,
      duration: 1,
    }, 1);

    // 3. Third scroll phase (Projects to Experience/Tech): Inner core spins faster, particles glow
    tl.to(groupRef.current.position, {
      x: 0,
      y: 0,
      z: 1, // move closer to camera
      duration: 1,
    }, 2)
    .to(groupRef.current.rotation, {
      y: Math.PI * 3.5,
      x: 0.5,
      duration: 1,
    }, 2)
    .to(ring1Ref.current!.position, {
      y: 0.2, // assemble slightly back
      duration: 1,
    }, 2)
    .to(ring3Ref.current!.position, {
      y: -0.2,
      duration: 1,
    }, 2);

    return () => {
      // Kill all ScrollTrigger instances created here
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Frame-by-frame subtle rotations (anti-gravity floating effect)
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      // Gentle floating float up/down
      groupRef.current.position.y += Math.sin(t * 1.5) * 0.0015;
    }

    if (outerShellRef.current) {
      outerShellRef.current.rotation.y = t * 0.05;
      outerShellRef.current.rotation.x = Math.sin(t * 0.5) * 0.1;
    }

    if (coreRef.current && wireframeRef.current) {
      coreRef.current.rotation.y = -t * 0.3;
      wireframeRef.current.rotation.y = t * 0.15;
      wireframeRef.current.rotation.z = Math.sin(t * 0.2) * 0.3;
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.4;
      ring1Ref.current.rotation.y = t * 0.1;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -t * 0.5;
      ring2Ref.current.rotation.z = t * 0.2;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = -t * 0.3;
      ring3Ref.current.rotation.z = -t * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[1.2, 1.2, 1.2]}>
      {/* Outer Spatial Glass Visor / Shell (Apple Vision Pro style) */}
      <mesh ref={outerShellRef}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.05}
          metalness={0.1}
          transmission={0.9}
          ior={1.5}
          thickness={1.2}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          transparent
          opacity={0.45}
          depthWrite={false}
        />
      </mesh>

      {/* Central Glowing AI Core */}
      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.6, 2]} />
        <meshStandardMaterial
          color="#55e6ff"
          emissive="#7b61ff"
          emissiveIntensity={1.8}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Holographic Inner Wireframe Core */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[0.7, 1]} />
        <meshBasicMaterial
          color="#55e6ff"
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Metallic Gimbal Rings (Spatial computing architecture layers) */}
      {/* Ring 1 - Vertical Orbit */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[0.9, 0.04, 16, 100]} />
        <meshStandardMaterial
          color="#4da6ff"
          metalness={0.9}
          roughness={0.1}
          emissive="#4da6ff"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Ring 2 - Horizontal Orbit */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.1, 0.035, 16, 100]} />
        <meshStandardMaterial
          color="#7b61ff"
          metalness={0.9}
          roughness={0.1}
          emissive="#7b61ff"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Ring 3 - Diagonal Orbit */}
      <mesh ref={ring3Ref} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[1.3, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#55e6ff"
          metalness={0.9}
          roughness={0.15}
          emissive="#55e6ff"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Volumetric Glowing Light Source inside Core */}
      <pointLight color="#7b61ff" intensity={4.0} distance={5} />
      <pointLight color="#55e6ff" intensity={3.0} distance={4} />
    </group>
  );
}
