"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const orbRef = useRef<THREE.Mesh>(null);

  const positions = useMemo(() => {
    const pseudo = (value: number) => value - Math.floor(value);
    const points = 1400;
    const data = new Float32Array(points * 3);

    for (let i = 0; i < points; i += 1) {
      const i3 = i * 3;
      const x = pseudo(Math.sin(i * 12.9898) * 43758.5453) - 0.5;
      const y = pseudo(Math.sin((i + 21) * 73.1562) * 21341.4812) - 0.5;
      const z = pseudo(Math.sin((i + 53) * 39.4251) * 18476.2421) - 0.5;

      data[i3] = x * 18;
      data[i3 + 1] = y * 10;
      data[i3 + 2] = z * 10;
    }

    return data;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.045;
      pointsRef.current.rotation.x = Math.sin(t * 0.1) * 0.05;
    }

    if (orbRef.current) {
      orbRef.current.rotation.y = t * 0.15;
      orbRef.current.rotation.z = t * 0.08;
      orbRef.current.position.y = Math.sin(t * 0.5) * 0.22;
    }
  });

  return (
    <>
      <ambientLight intensity={0.65} color="#4fb8f2" />
      <directionalLight position={[2.5, 4, 2]} intensity={1.25} color="#f16826" />

      <mesh ref={orbRef} position={[2.8, -0.4, -1.8]}>
        <icosahedronGeometry args={[1.45, 2]} />
        <meshStandardMaterial
          color="#1c3664"
          emissive="#0a2b5d"
          emissiveIntensity={0.55}
          roughness={0.38}
          metalness={0.25}
          wireframe
        />
      </mesh>

      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#00aded"
          size={0.03}
          sizeAttenuation
          transparent
          opacity={0.46}
          depthWrite={false}
        />
      </points>
    </>
  );
}

export default function ThreeBackground() {
  const [canAnimate, setCanAnimate] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const lowCoreCount = navigator.hardwareConcurrency > 0
      ? navigator.hardwareConcurrency <= 4
      : false;

    return !reducedMotion && !lowCoreCount;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const lowCoreCount = navigator.hardwareConcurrency > 0
      ? navigator.hardwareConcurrency <= 4
      : false;

    const handleChange = () => {
      const nowReduced = mediaQuery.matches;
      setCanAnimate(!nowReduced && !lowCoreCount);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  if (!canAnimate) {
    return <div className="three-fallback" aria-hidden="true" />;
  }

  return (
    <div className="three-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 52 }}
        dpr={[1, 1.7]}
        gl={{ antialias: true, alpha: true }}
      >
        <ParticleField />
      </Canvas>
    </div>
  );
}