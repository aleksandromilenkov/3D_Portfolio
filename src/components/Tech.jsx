import React, { Suspense } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Pc } from "./canvas";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "./Loader";
const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technlogy) => (
          <div className="w-28 h-28" key={technlogy.name}>
            <BallCanvas icon={technlogy.icon} />
          </div>
        ))}
      </div>
      <div className="m-auto mt-16 computerSize">
        <Canvas
          frameloop="demand"
          shadows
          dpr={[1, 2]}
          camera={{ position: [25, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[2, 1, 2]} intensity={1} />
          <Suspense fallback={<CanvasLoader />}>
            <Pc />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
};

export default SectionWrapper(Tech);
