// // PorscheModel.jsx
// import React, { useRef } from "react";
// import { useLoader } from "@react-three/fiber";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { useFrame } from "@react-three/fiber";

// const PorscheModel = ({ url }) => {
//   const obj = useLoader(OBJLoader, "/models/porsche.obj");
//   const ref = useRef();

//   useFrame(() => {
//     if (ref.current) ref.current.rotation.y += 0.01;
//   });

//   return <primitive ref={ref} object={obj} scale={1} position={[0, 0, 0]} />;
// };

// export default PorscheModel;

import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import React from "react";

const PorscheModel = () => {
  const model = useLoader(OBJLoader, "/porsche.obj");

  return <primitive object={model} scale={0.35} />;
};

export default PorscheModel;
