import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

import { IoLink } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="main-hero">
      <div className="hero-title">
        <p>Hi, I'm</p>
        <h1>
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
    </div>
  );
};

export default Hero;
