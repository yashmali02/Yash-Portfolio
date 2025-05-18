import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main-navbar">
      <ul className="nav-list">
        <li className="nav-list-items">
          <a>Home</a>
        </li>
        <li className="nav-list-items">
          <a>About</a>
        </li>
        <li className="nav-list-items">
          <a>Projects</a>
        </li>
        <li className="nav-list-items">
          <a>Experience</a>
        </li>
        <li className="nav-list-items">
          <a>Testimonials</a>
        </li>
        <li className="nav-list-items">
          <a>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
