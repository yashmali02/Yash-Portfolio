// CMDContext.js
import React, { createContext, useContext, useState } from "react";

const CMDContext = createContext();

export const CMDProvider = ({ children }) => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");

  const handleCommand = async (e) => {
    if (e.key !== "Enter") return;

    const input = command.toLowerCase().trim();
    setCommand(""); // reset input
    setOutput(""); // reset output

    const messageMap = {
      cls: [],
      dir: [
        " Directory of Yash's Terminal",
        "",
        "📁 npm install yash        - Discover the dev behind the screen",
        "📁 npm install cars        - Fire up a GT3 RS dream build",
        "📁 npm install react       - Dive into component-driven UIs",
        "📁 npm install blender3d   - Render the world from vertices",
        "📁 npm install three       - Add some 3D spice to the browser",
        "",
        " Type any above command to explore!",
      ],
      ls: [
        "📂 yash.js         📂 sonu.js",
        "📂 cars.js         📂 react.config.js",
        "📂 blender3d.glb    📂 three.module.js",
        "📂 chai.json       📂 projects/",
        "",
        "Hint: use 'npm install <module>' to open a file.",
      ],
      "--help": [
        "Available commands:",
        "----------------------------------",
        "npm install yash      - Know more about Yash",
        "npm install react     - Showcase React skills",
        "npm install three     - Showcase Three.js magic",
        "npm install blender   - Showcase Blender 3D skills",
        "npm install cars      - Download GT3 RS fantasies",
        "dir                   - List available commands",
        "ls                    - List current directory contents",
        "cls                   - Clear the screen",
        "--help                - Display this help menu",
      ],
      "npm install yash": [
        ">> Initializing DevMode: yash@latest",
        ">> Frontend wizardry loaded - React and Three.js enabled",
        ">> Passion module activated for design, code, and speed",
        ">> Syntax checking... Clean and beautiful",
        ">> Installing dreams - Porsche, pixels, and purpose",
        ">> Status: Running with ambition | Version: Limitless",
      ],
      "npm install react": [
        ">> Installing component-driven architecture...",
        ">> Implementing reusable UI with hooks and context...",
        ">> Integrating TailwindCSS for clean styling...",
        ">> Optimizing renders with memoization and lazy loading...",
        ">> Managing global state with efficiency and scalability...",
        ">> Status: Seamless, responsive, and production-ready UI live",
      ],
      "npm install blender": [
        ">> Initializing 3D workspace...",
        ">> Sculpting dreams into vertices and faces...",
        ">> Texturing scenes with PBR materials and HDRIs...",
        ">> Rigging meshes and animating life into models...",
        ">> Rendering realism with Cycles and compositing magic...",
        ">> Status: Visually immersive and artistically precise.",
      ],
      "npm install three": [
        ">> Setting up WebGL renderer and virtual scene...",
        ">> Crafting meshes, lights, and immersive perspectives...",
        ">> Binding shaders and playing with camera magic...",
        ">> Loading models, textures, and real-time environments...",
        ">> Animating in 60fps with requestAnimationFrame...",
        ">> Output: Interactive 3D experiences—browser powered.",
      ],
      "npm install porsche": [
        ">> Initializing GT3 RS performance module...",
        ">> Loading naturally aspirated flat-six engine ",
        ">> Screaming to 9000 RPM...  Pure symphony engaged",
        ">> Injecting magnesium, carbon, and race-ready soul ",
        ">> Importing rear wing: Size = Confidence x 100 ",
        ">> Calibrating track mode... No compromises ",
        ">> Grip level: Unfair advantage loaded ",
        ">> Lightweight philosophy: Added speed, removed excuses ",
        ">> Paint color: Python Green. Mood: Dangerous ",
        ">> Injecting Nürburgring DNA",
        ">> Spoiler alert: Literally! ",
        ">> Chassis talking to asphalt in fluent Motorsport",
        ">> Heartbeat sync with throttle mapped",
        ">> Race telemetry streaming in real-time",
        ">> Status: GT3 RS installed | Purpose: Dominate every corner",
      ],
      "npm install sonu": [
        ">> 💖 Heart-connected module loading...",
        ">> Establishing soul sync with Sonu...",
        ">> Injecting affection.js...",
        ">> Compiling shared dreams and late-night talks...",
        ">> Activating cuddles, kisses & care protocols...",
        ">> Memory overflow: Too many moments to store 💫",
        ">> Status: Forever cherished | Version: Eternal Love 💑",
        ">> Encrypting every 'I love you' into heart-core memory 💌",
        ">> Importing playlist of 'our songs' 🎶",
        ">> Deploying 'You + Me = Always' module ♾️",
        ">> Replacing sadness.js with hugTherapy.ts ❤️",
        ">> Optimizing laughter levels to 100%",
        ">> Launching ‘Date Night Mode’ 🌙✨",
        ">> Real-time updates from her smile server 😍",
        ">> Connection stable: Linked by trust and cuddles 🤝",
        ">> Package signed with love, sealed with a kiss 💋",
      ],
    };

    const lines = messageMap[input];

    if (lines) {
      for (let line of lines) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setOutput((prev) => prev + line + "\n");
      }
    } else {
      setOutput(">> Command not found. Try `--help`");
    }
  };

  return (
    <CMDContext.Provider value={{ command, setCommand, output, handleCommand }}>
      {children}
    </CMDContext.Provider>
  );
};

export const useCMDContext = () => useContext(CMDContext);
