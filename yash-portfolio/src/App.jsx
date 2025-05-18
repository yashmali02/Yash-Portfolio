import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div className="main-app">
      <Header />
      <Navbar />
      {/* <LandingPage /> */}
    </div>
  );
};

export default App;
