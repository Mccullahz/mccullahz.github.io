import React from "react";
import { ArticleHelper } from "../components/ArticleHelper";
import "../styles/App.css";

export default function Templates() {
  const templates = [
    {
      title: "Statement of Work - SOW Template",
      subtitle: "A straight forward template used to help organize projects as a solo dev.",
      technologies: ["Markdown", "PDF Download"],
      links: {
        github: "No Links Here :)",
      },
      slug: "SOW Template",
    },

  ];

  return (
    <main className="projects-page">
      <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>Templates</h1>
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

