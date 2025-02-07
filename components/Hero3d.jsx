"use client"
import { Suspense } from 'react'


import { Canvas } from '@react-three/fiber'
import { OrbitControls,Environment,ContactShadows } from '@react-three/drei'
import Pump from './Mixer'



function Hero3d() {

  return (
    <>
    <Canvas >
      <ambientLight />
      <directionalLight position={[44,44,44]}  intensity={4}/>
      <Suspense fullback={null}>
        <Pump scale={[0.0073, 0.0073, 0.0073]} rotation={[0.2, Math.PI / 4, 0.04]} position={[0, -0.9, 0]}/>
      </Suspense>
      <Environment preset="sunset" />
    </Canvas>
      
    </>
  )
}

export default Hero3d
