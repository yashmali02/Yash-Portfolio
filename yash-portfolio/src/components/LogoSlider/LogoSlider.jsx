import React from "react";
import "./LogoSlider.css";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiThreedotjs,
  SiNodedotjs,
  SiBlender,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiGit,
} from "react-icons/si";

const icons = [
  { icon: <SiHtml5 color="#e34c26" />, name: "HTML5" },
  { icon: <SiCss3 color="#264de4" />, name: "CSS3" },
  { icon: <SiJavascript color="#f0db4f" />, name: "JavaScript" },
  { icon: <SiReact color="#61DBFB" />, name: "React" },
  { icon: <SiThreedotjs color="#ffffff" />, name: "Three.js" },
  { icon: <SiNodedotjs color="#68A063" />, name: "Node.js" },
  { icon: <SiBlender color="#f5792a" />, name: "Blender" },
  { icon: <SiAdobephotoshop color="#31A8FF" />, name: "Photoshop" },
  { icon: <SiAdobeillustrator color="#FF9A00" />, name: "Illustrator" },
  { icon: <SiGit color="#f05032" />, name: "Git" },
];

const LogoSlider = () => {
  return (
    <div className="slider-container">
      <div className="slider-track">
        {icons.concat(icons).map((item, index) => (
          <div className="slider-icon" key={index}>
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
