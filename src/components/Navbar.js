import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="nav">
      <ul id="nav">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/dog">Dog</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
