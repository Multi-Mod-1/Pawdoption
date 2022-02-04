import React from "react";
import "./Navbar.css";
import logo from ".././logo.svg"
function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <div className="logo-one">P</div>
        <div className="logo-two">
          <img src={logo} alt="Pawdoption" />
        </div>
        <div className="logo-three">WDOPTION</div>
      </div>
      <ul id="nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
