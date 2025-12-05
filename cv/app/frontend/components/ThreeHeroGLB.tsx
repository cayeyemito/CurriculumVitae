"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/3d/Monitor001.glb");
  return <primitive object={scene} scale={1.6} />;
}

export default function ThreeHeroGLB() {
  return (
    <div className="w-full h-[400px] md:h-[600px]">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} />

        <group rotation={[0.4, 0.4, 0]}>
          <Model />
        </group>

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}
