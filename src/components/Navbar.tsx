import React, { useEffect } from "react";
import "../styles/App.css";
{/* this is kind of a gross way of going about the navbar, BUT i am pretty sure this will make this functional in gh-pages*/} 
export default function Navbar() {
  useEffect(() => {
    const toggleBtn = document.querySelector("[data-nav-toggler]") as HTMLElement | null;
    const navbar = document.querySelector("[data-navbar]") as HTMLElement | null;

    if (toggleBtn && navbar) {
      const handleClick = () => {
        toggleBtn.classList.toggle("active");
        navbar.classList.toggle("active");
      };
      toggleBtn.addEventListener("click", handleClick);
      return () => toggleBtn.removeEventListener("click", handleClick);
    }
  }, []);

  return (
    <nav className="navbar" data-navbar>
      <button className="nav-toggle" data-nav-toggler aria-label="Toggle navigation">
        ☰
      </button>
      <ul className="nav-links">
        <li><a href="#">Projects</a></li>
      </ul>
    </nav>
  );
}

