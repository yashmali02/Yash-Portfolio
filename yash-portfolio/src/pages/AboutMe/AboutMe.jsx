import React from "react";
import "./AboutMe.css";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="main-about">
      <div className="canvas-about">{/* Canvas here */}</div>
      <div className="canvas-content">
        <p>console.log(yash)</p>
        <div className="about-cmd">
          <div className="about-cmd-header">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>
          {/* <div className="about-cmd-body">
            <p>yash@admin&gt; npm install yash</p>
            <p>
              &gt;&gt; Module loaded: Visionary.Dev{" "}
              <span className="terminal-line" />
            </p>
            <br />
            <p>yash@admin&gt; npm install react</p>
            <p>
              &gt;&gt; Framework injected: Pixel Perfection{" "}
              <span className="terminal-line" />
            </p>
            <br />

            <p>yash@admin&gt; npm install three</p>
            <p>
              &gt;&gt; Reality upgraded: 3D Immersion v1.0{" "}
              <span className="terminal-line" />
            </p>
            <br />

            <p>yash@admin&gt; npm install porsche</p>
            <p>
              &gt;&gt; This guy loves 911 GT3 RS{" "}
              <span className="terminal-line" />
            </p>
          </div> */}
          <div className="about-cmd-body" contentEditable />
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
      </div>
    </div>
  );
};

export default AboutMe;
