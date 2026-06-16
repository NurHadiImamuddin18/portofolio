"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function FaceModel(props) {
  const { nodes } = useGLTF("/head.glb");
  const groupRef = useRef();
  
  const target = useRef({ x: 0, y: 0 });
  const windowHalf = useRef({ x: 0, y: 0 });

  useEffect(() => {
    windowHalf.current.x = window.innerWidth / 2;
    windowHalf.current.y = window.innerHeight / 2;

    const onPointerMove = (e) => {
      target.current.x = (e.clientX - windowHalf.current.x) / windowHalf.current.x;
      target.current.y = (e.clientY - windowHalf.current.y) / windowHalf.current.y;
    };

    const onResize = () => {
      windowHalf.current.x = window.innerWidth / 2;
      windowHalf.current.y = window.innerHeight / 2;
    };

    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      const targetRotationX = target.current.y * (Math.PI / 6);
      const targetRotationY = target.current.x * (Math.PI / 4);

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      {Object.values(nodes).map((node) => {
        if (node.isMesh) {
          return (
            <mesh key={node.uuid} geometry={node.geometry} scale={[18, 18, 18]}>
              <meshBasicMaterial
                color="#d1d5db"
                wireframe={true}
                transparent={true}
                opacity={0.4}
              />
            </mesh>
          );
        }
        return null;
      })}
    </group>
  );
}

export default function HeadAnimation() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        background: "var(--bg)",
      }}
    >
      <Canvas camera={{ position: [0, 0, 50], fov: 45 }}>
        <FaceModel position={[0, -2, 0]} />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/head.glb");
