import React, { useEffect } from "react";
import "./AboutMe.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useCMDContext } from "../../context/CMDContext";
import LogoSlider from "../../components/LogoSlider/LogoSlider";

const AboutMe = () => {
  const { command, setCommand, setOutput, output, handleCommand, inputRef } =
    useCMDContext();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "c") {
        e.preventDefault();
        setCommand("");
        setOutput("");
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setCommand, setOutput]);

  return (
    <div className="main-about">
      <div className="canvas-about">{/* Canvas here */}</div>
      <motion.div
        className="canvas-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible
        transition={{ staggerChildren: 0.2 }}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          console.log(yash)
        </motion.p>

        <motion.div
          className="about-cmd"
          onClick={() => inputRef.current?.focus()}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
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
        </motion.div>

        <motion.div
          className="about-btns"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
          variants={{
            hidden: {},
            visible: {},
          }}
        >
          <motion.button
            className="about-github-btn"
            onClick={() =>
              window.open("https://github.com/yashmali02", "_blank")
            }
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <FaGithub />
            &nbsp;Github
          </motion.button>

          <motion.button
            className="about-linkedIn-btn"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/yash-mali-33a44118b/",
                "_blank"
              )
            }
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <FaLinkedin />
            &nbsp;LinkedIN
          </motion.button>
        </motion.div>

        <motion.div
          className="about-icons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <LogoSlider />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
