import React from "react";
import { ArticleHelper } from "../components/ArticleHelper"; 
import "../styles/App.css";

export default function Projects() {
  const projects = [
    {
      title: "Go Web Scraper CLI",
      subtitle: "A Linux based TUI tool to scrape local business websites for job postings.",
      technologies: ["Go", "Lipgloss", "HTTP", "Concurrency"],
      links: {
        github: "Private Repository :)",
      },
      slug: "Go-CLI-Scraper",
    },
    {
      title: "Flacer",
      subtitle: "An in development cross-platform high resolution audio player.",
      technologies: ["Go", "Wails", "TypeScript"],
      links: {
        github: "https://github.com/Mccullahz/flacer",
      },
      slug: "Flacer",
    },
  ];

  return (
    <main className="projects-page">
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Projects</h1>
      {projects.map((proj, idx) => (
        <div key={idx} className="project-entry" style={{ marginBottom: "2.5rem" }}>
          <ArticleHelper
            title={proj.title}
            subtitle={proj.subtitle}
            technologies={proj.technologies}
            links={proj.links}
	    slug={proj.slug}
          />
        </div>
      ))}
    </main>
  );
}

