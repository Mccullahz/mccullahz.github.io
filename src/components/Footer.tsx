import '../styles/App.css';
import React from "react";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

export default function Footer() {

	const LinkedInIcon = IoLogoLinkedin as unknown as React.FC;
	const GitHubIcon = IoLogoGithub as unknown as React.FC;


	 return (
    <footer className="footer">
      <div className="container">
	<ul className="social-list">
	  <li>
	    <a
	      href="https://www.linkedin.com/in/zylar-mccullah-b4654420a/"
	      className="social-link"
	      target="_blank"
	      rel="noopener noreferrer"
	    >
	      <LinkedInIcon aria-hidden="true" />
	    </a>
	  </li>
	  <li>
	    <a
	      href="https://github.com/Mccullahz"
	      className="social-link"
	      target="_blank"
	      rel="noopener noreferrer"
	    >
	      <GitHubIcon aria-hidden="true" />
	    </a>
	  </li>
	</ul>
      </div>
    </footer>
  );
};

