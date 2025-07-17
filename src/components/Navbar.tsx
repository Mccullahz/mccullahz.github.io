import React, { useEffect } from "react";
import { Link } from "react-router-dom";
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
        <Link className="navbar-link" to="/">Overview</Link>
        <Link className="navbar-link" to="/projects">Projects</Link>
        <Link className="navbar-link" to="/templates">Templates</Link>
      </div>
    </nav>
  );
}

