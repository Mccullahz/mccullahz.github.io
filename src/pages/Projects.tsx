import React from "react";
import { ArticleHelper } from "../components/ArticleHelper";
import { contentRegistry } from "../data/ContentReg";
import "../styles/App.css";

export default function Projects() {
  const templates = contentRegistry.filter((item) => item.type === "project");

  return (
    <main className="projects-page">
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Projects</h1>
      {templates.map((tmpl, idx) => (
        <div key={idx} className="project-entry" style={{ marginBottom: "2.5rem" }}>
          <ArticleHelper
            title={tmpl.title}
            subtitle={tmpl.subtitle}
            technologies={tmpl.technologies}
            links={tmpl.links}
            slug={tmpl.slug}
          />
        </div>
      ))}
    </main>
  );
}

