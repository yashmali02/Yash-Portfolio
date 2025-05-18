import React from "react";
import "./LandingCanvas.css";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import Hero from "../../components/Hero/Hero";

const LandingCanvas = () => {
  return (
    <div className="main-landing-canvas">
      <Canvas
        className="landing-canvas"
        gl={{ antialias: false }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [5, 7, 5] }}
      >
        <Html>
          <Hero />
        </Html>

        <axesHelper args={[5]} />

        <mesh position={[0, 1, 0]}>
          <sphereGeometry />
          <meshBasicMaterial color="red" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default LandingCanvas;
