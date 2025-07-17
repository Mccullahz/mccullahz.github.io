import React from 'react';
import '../styles/App.css';

export default function Home() {
  return (
	  <div className= "container">
	  	<div className="hero-cards">
		<div className="card">
			<img src="./headshot.jpg" alt="Avatar" className="avatar" />
		  	<h1> Hi, I'm Zylar!</h1>
			<p>
			I am a developer from Cincinnati, Ohio with a love for backend development!
			</p>
		</div>
		</div>

		<div className="info-cards">
		<div className="card">
			<h2>What is this?</h2>
			<p>
				This is my personal devlog, where I keep tabs of my projects' progress and issues, templates, and *potentially* other things I work on.
				Feel free to explore the `Projects` section above and see what I've been up to :)
			</p>
		</div>

		<div className="card">
			<h2>Contact</h2>
			<p>
				If you would like to get in touch, you can reach out through any of the links in the footer below!
			</p>
		</div>
		</div>
	</div>
  );
}
