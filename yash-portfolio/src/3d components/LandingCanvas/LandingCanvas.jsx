import React, { Suspense } from "react";
import "./LandingCanvas.css";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import Hero from "../../components/Hero/Hero";
import PorscheModel from "../../models/PorscheModel";

const LandingCanvas = () => {
  return (
    <div className="main-landing-canvas">
      <Canvas
        className="landing-canvas"
        gl={{ antialias: false }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [5, 7, 5] }}
      >
        <ambientLight intensity={0.5} /> {/* Soft global light */}
        <directionalLight position={[10, 10, 5]} intensity={1} />{" "}
        {/* Stronger directional light */}
        <pointLight position={[0, 10, 0]} intensity={1.5} />{" "}
        {/* Light from above */}
        {/* <OrbitControls /> */}
        {/* <axesHelper args={[5]} /> */}
        <Suspense>
          <PorscheModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default LandingCanvas;
