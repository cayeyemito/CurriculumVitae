"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, MeshDistortMaterial } from "@react-three/drei";

export default function ThreeHero() {
  return (
    <div className="w-full h-[450px] md:h-[600px]">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} />

        {/* TORUS KNOT – Objeto 3D abstracto */}
        <mesh rotation={[0.4, 0.2, 0]}>
          <torusKnotGeometry args={[1, 0.3, 256, 64]} />
          <MeshDistortMaterial
            color="black"
            distort={0.3}
            speed={2}
            roughness={0.1}
            metalness={1}
          />
        </mesh>

        {/* Desactiva interacción */}
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
