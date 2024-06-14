"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Mushroom(props) {
  const { nodes, materials } = useGLTF("/models/mushroom-transformed.glb");

  const mushroomRef = useRef();

  useFrame(() => {
    mushroomRef.current.rotation.y += 0.007;
  });

  return (
    <group
      {...props}
      ref={mushroomRef}
      dispose={null}
      position={[0, 3.8, 0]}
      scale={[0.75, 0.75, 0.75]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.body}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials.bones}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.hair}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.mushrooms}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.outline}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.things}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/mushroom-transformed.glb");
