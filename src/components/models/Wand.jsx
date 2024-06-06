"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Wand(props) {
  const { nodes, materials } = useGLTF("/models/scene-transformed.glb");
  return (
    <group
      {...props}
      dispose={null}
      position={[-0.1, -2.3, 0]}
      scale={[2.0, 2.0, 2.0]}
      rotation={[0.25, 0, -0.2]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Sphere_03_-_Default_0"].geometry}
        material={materials["03_-_Default"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.087, 0.094, 0.094]}
      />
    </group>
  );
}

useGLTF.preload("/models/scene-transformed.glb");
