import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

import { IoLink } from "react-icons/io5";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 26,
      y: mousePosition.y - 26,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 85,
      y: mousePosition.y - 85,
      backgroundColor: "red",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="main-hero">
      <div className="hero-title">
        <p>Hi, I'm</p>
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
          Yash Mali
        </h1>
        <p>A creative Frontend Developer & 3D artist</p>
      </div>

      <div className="hero-action">
        <p>Got a vision? Lets build it together.</p>
        <p>
          Explore my work and see that creativity looks like in code{" "}
          <a href="https://github.com/yashmali02">
            <IoLink />
          </a>
        </p>
        <p>Your next standout digital experience starts here</p>
      </div>
      <div className="hero-btns">
        <button>Resume</button>
        <button>Book a meeting</button>
      </div>

      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
};

export default Hero;
