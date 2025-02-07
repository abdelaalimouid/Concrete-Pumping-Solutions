import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Model({ scale = [1, 1, 1], rotation = [0, 0, 0],position = [0, 0, 0], ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/pump.gltf');

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y -= 0.004; 
    }
  });
  return (
    <group ref={group} {...props} scale={scale} rotation={rotation} position={position} dispose={null}>
      <group position={[-12.31, 0, -0.854]}>
        <mesh geometry={nodes.truckMixer_PlasticBlack_0.geometry} material={materials.PlasticBlack} />
        <mesh geometry={nodes.truckMixer_LightOrange_0.geometry} material={materials.LightOrange} />
        <mesh geometry={nodes.truckMixer_LightRed_0.geometry} material={materials.LightRed} />
        <mesh geometry={nodes.truckMixer_MetalGreyMatt_0.geometry} material={materials.MetalGreyMatt} />
        <mesh geometry={nodes.truckMixer_MetalRedMatt_0.geometry} material={materials.MetalRedMatt} />
        <mesh geometry={nodes.truckMixer_MetalGrey_0.geometry} material={materials.MetalGrey} />
        <mesh geometry={nodes.truckMixer_LightYellow_0.geometry} material={materials.LightYellow} />
        <mesh geometry={nodes.truckMixer_GlassDarkCar_0.geometry} material={materials.GlassDarkCar} />
        <mesh geometry={nodes.truckMixer_PlasticGrey_0.geometry} material={materials.PlasticGrey} />
        <mesh geometry={nodes.truckMixer_Chrome_0.geometry} material={materials.Chrome} />
        <mesh geometry={nodes.truckMixer_MetalBlackMattLight_0.geometry} material={materials.MetalBlackMattLight} />
      </group>
    </group>
  );
}

useGLTF.preload('/pump.gltf');
