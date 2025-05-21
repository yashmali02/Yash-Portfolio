import React, { useEffect, useRef } from "react";
import "./AboutMe.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useCMDContext } from "../../context/CMDContext";
import LogoSlider from "../../components/LogoSlider/LogoSlider";

const AboutMe = () => {
  const { command, setCommand, setOutput, output, handleCommand } =
    useCMDContext();
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "c") {
        e.preventDefault();
        setCommand("");
        setOutput("");
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keyDown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setCommand, setOutput]);

  return (
    <div className="main-about">
      <div className="canvas-about">{/* Canvas here */}</div>
      <div className="canvas-content">
        <p>console.log(yash)</p>
        <div className="about-cmd" onClick={() => inputRef.current?.focus()}>
          <div className="about-cmd-header">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>
          <div className="about-cmd-body">
            <div className="about-cmd-body-panel">
              <div>yash@admin&gt;</div>
              <input
                ref={inputRef}
                type="text"
                className="cmd-input"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleCommand}
                autoFocus
              />
            </div>
            <div className="cmd-render">
              {output.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="about-btns">
          <button
            className="about-github-btn"
            onClick={() =>
              window.open("https://github.com/yashmali02", "_blank")
            }
          >
            <FaGithub />
            &nbsp;Github
          </button>
          <button
            className="about-linkedIn-btn"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/yash-mali-33a44118b/",
                "_blank"
              )
            }
          >
            <FaLinkedin />
            &nbsp;LinkedIN 
          </button>
        </div>
        <div className="about-icons">
          <LogoSlider/>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
