import React from "react";
import "./LandingPage.css";
import LandingCanvas from "../../3d components/LandingCanvas/LandingCanvas";
import Hero from "../Hero/Hero";

const LandingPage = () => {
  return (
    <div className="main-landing-page">
      <div className="sub-landing-page">
        <Hero />
        <LandingCanvas />
      </div>
    </div>
  );
};

export default LandingPage;
