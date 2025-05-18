import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import React from "react";

const PorscheModel = () => {
  const model = useLoader(OBJLoader, "/porsche.obj");

  return <primitive object={model} scale={1} />;
};

export default PorscheModel;
