"use client";
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import ConcretePump from './ConcretePump';

function About3d() {
  return (
    <>
      <Canvas>
        <ambientLight />
        <directionalLight position={[44, 44, 44]} intensity={4} />
        <Suspense fallback={null}>
          {/* <Concrete scale={[0.0073, 0.0073, 0.0073]} rotation={[0.2, Math.PI / 4, 0.04]} position={[0, -0.9, 0]} /> */}
          <ConcretePump/>
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default About3d;
