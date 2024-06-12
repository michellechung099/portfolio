"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Witch(props) {
  const { nodes, materials } = useGLTF("/models/scene-transformed.glb");

  const modelRef = useRef();

  useFrame((state, delta, xrFrame) => {
    // console.log(state.clock);
    modelRef.current.position.y =
      -2.1 + Math.sin(state.clock.elapsedTime) * 0.15;
  });

  return (
    <group
      {...props}
      ref={modelRef}
      dispose={null}
      position={[0.4, -2.1, 0]}
      scale={[0.35, 0.35, 0.35]}
      rotation={[0, 0.03, -0.02]}
    >
      <primitive object={nodes._rootJoint} />
      <skinnedMesh
        geometry={nodes.Object_162.geometry}
        material={materials.Body}
        skeleton={nodes.Object_162.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_163.geometry}
        material={materials.Coat}
        skeleton={nodes.Object_163.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_164.geometry}
        material={materials.Outline_Skin}
        skeleton={nodes.Object_164.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_166.geometry}
        material={materials.Dress}
        skeleton={nodes.Object_166.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_167.geometry}
        material={materials.Outline_Coth}
        skeleton={nodes.Object_167.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_169.geometry}
        material={materials.Dress}
        skeleton={nodes.Object_169.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_170.geometry}
        material={materials.Outline_Coth}
        skeleton={nodes.Object_170.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_172.geometry}
        material={materials.Coat}
        skeleton={nodes.Object_172.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_173.geometry}
        material={materials.Outline_Coth}
        skeleton={nodes.Object_173.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_175.geometry}
        material={materials.Coat}
        skeleton={nodes.Object_175.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_176.geometry}
        material={materials.Brooch}
        skeleton={nodes.Object_176.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_177.geometry}
        material={materials.Outline_Coth}
        skeleton={nodes.Object_177.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_179.geometry}
        material={materials.Coat}
        skeleton={nodes.Object_179.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_180.geometry}
        material={materials.Hair}
        skeleton={nodes.Object_180.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_181.geometry}
        material={materials.Dress}
        skeleton={nodes.Object_181.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_182.geometry}
        material={materials.Outline_Hair}
        skeleton={nodes.Object_182.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_184.geometry}
        material={materials.Hair}
        skeleton={nodes.Object_184.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_185.geometry}
        material={materials.Face}
        skeleton={nodes.Object_185.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_186.geometry}
        material={materials.Body}
        skeleton={nodes.Object_186.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <skinnedMesh
        geometry={nodes.Object_187.geometry}
        material={materials.Outline_Skin}
        skeleton={nodes.Object_187.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={5.849}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wand_broom_0.geometry}
        material={materials.broom}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wand_Outline_cloth_0.geometry}
        material={materials.Outline_cloth}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ribbon_Dress_0.geometry}
        material={materials.Dress}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ribbon_Outline_Coth_0.geometry}
        material={materials.Outline_Coth}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/scene-transformed.glb");
