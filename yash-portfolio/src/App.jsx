import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./pages/AboutMe/AboutMe";

import { CMDProvider } from "./context/CMDContext";

const App = () => {
  return (
    <CMDProvider>
      <div className="main-app">
        <Header />
        <Navbar />
        {/* <LandingPage /> */}
        <AboutMe />
      </div>
    </CMDProvider>
  );
};

export default App;
