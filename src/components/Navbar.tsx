import React, { useEffect } from "react";
import "../styles/App.css";
{/* changed this so now we are a static navbar, dont need anything super fancy here*/} 

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>📁</span>
        <span style={{ marginLeft: "0.5rem" }}>Mccullahz / DevLog</span>
      </div>
      <div className="navbar-links">
        <a className="navbar-link" href="#Home">Overview</a>
        <a className="navbar-link" href="#Projects">Projects</a>
        <a className="navbar-link" href="#">3</a>
        <a className="navbar-link" href="#">4</a>
        <a className="navbar-link" href="#">5</a>
        <a className="navbar-link" href="#">6</a>
        <a className="navbar-link" href="#">7</a>
        <a className="navbar-link" href="#">8</a>
        <a className="navbar-link" href="#">Settings</a>
      </div>
    </nav>
  );
}

