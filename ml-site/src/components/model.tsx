import { useRef } from "react";
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useControls } from "leva";

export default function Model() {
  const scene = useGLTF("/torus.gltf") as any;
  const {viewport} = useThree();

  const r = useRef<any>(null);

  useFrame(() => {
    if (!r.current) return;
    r.current.rotation.y += 0.02;
  });

    const torusMesh = scene.nodes.Torus as THREE.Mesh;

    const materialProps = useControls("Material", {
        transmission: { value: 0.99, min: 0, max: 1, step: 0.01 },
        roughness: { value: 0.10, min: 0, max: 1, step: 0.01 },
        thickness: { value: 3, min: 0, max: 10, step: 1 },
        ior: { value: 0.8, min: 0, max: 3, step: 0.1 },
        chromaticAberration: { value: 0.05, min: 0, max: 0.1 },
        backside: true
    });

  return (
    <group scale={(viewport.width + viewport.height) / 6}> 
        <Text fontSize={0.5} position={[0, 0, -0.3]}>testing wow</Text>
        <mesh ref={r} geometry={torusMesh.geometry} position={[0, 0, 0]} scale={0.01}>
            <MeshTransmissionMaterial {...materialProps} />
        </mesh>
    </group>
  );
}
