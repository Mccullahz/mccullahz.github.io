export type ContentItem = {
  slug: string;
  title: string;
  subtitle?: string;
  technologies?: string[];
  links?: {
    github?: string;
    demo?: string;
    download?: string;
  };
  content: string;
  type: "template" | "project";
};

export const contentRegistry: ContentItem[] = [
  {
/*	This setup is pretty straight forward, but
 * 	type: is used to differentiate between templates and projects, this changes what page the content is displayed on
 *  	slug: is used to create the URL for the page, so it should be unique and descriptive for each item
 *  	title: is the main title of the content item, displayed prominently on the card and the page
 *  	subtitle: is the secondary heading, only displayed on the card
 *  	technologies: is an array of strings representing the technologies used, displayed on the card
 *  	links: is an object containing optional links, shown on the card only
 *  	content: is the main content of the item, displayed on the page, rendered as markdown, use \`\`\`markdown to showcase markdown without formatting
 *
 * */

    type: "template",
    slug: "sow-template",
    title: "Statement of Work - SOW Template",
    subtitle: "A straightforward template to organize solo dev projects.",
    technologies: ["Markdown", "PDF Download"],
    links: {
      github: "https://github.com/yourname/sow-template",
    },
    content: `
### Overview

This is a simple template for a **Statement of Work (SOW)** document.

#### Features
- Clear sections for scope, objectives, and deliverables
- Lightweight Markdown formatting
- Ideal for solo developers and small teams

#### Markdown Format Doc

\`\`\`markdown
# Statement of Work (SOW)

## 1. Project Title
**[Title]**  
_Description_

---

## 2. Project Overview

A brief description of the project, its purpose, and its significance.
---

## 3. Objectives
Clear, measurable objectives this project aims to achieve.


---

## 4. Scope of Work

### 4.1 In Scope
Specific features, deliverables, and services to be included:


### 4.2 Out of Scope
Clarify what will not be covered:


---

## 5. Deliverables

| Deliverable               | Description                                |
|---------------------------|--------------------------------------------|
|                           |                                            |

---

## 6. Timeline & Milestones

3xbackticksmermaid
gantt
title Project Timeline
dateFormat  YYYY-MM-DD
section Planning
    Gantt timeline data      :a1, 2023-10-01, 2w
3xbackticks

---

## 7. Assumptions


---

## 8. Constraints


---

## 9. Acceptance Criteria
This project will be considered complete when:
\`\`\`
    `,
  },


  {
    type: "project",
    slug: "job-scraper-cli",
    title: "Job Scraper CLI",
    subtitle: "Scrapes business websites near a ZIP code for job pages.",
    technologies: ["Go", "Bubbletea", "Lipgloss"],
    links: {
      github: "https://github.com/yourname/job-scraper-cli",
    },
    content: `
	CLI Job Scraper is a Go-powered command-line application that finds nearby business websites 
and searches them for career or job listing pages. The goal is to automate localized job hunting 
by surfacing hiring pages often buried in small-business websites. By searching only these local businesses, applicants can find job opportunities that may not be listed on larger job boards, reducing resume traffic and potentially aiding in landing a desired position.
`,
  },

  {
    type: "project",
    slug: "flacer",
    title: "Flacer",
    subtitle: "An in development cross-platform high resolution audio player.",
    technologies: ["Go", "Wails", "TypeScript"],
    links: {
      github: "https://www.github.com/Mccullahz/flacer",
    },
    content: `
Flacer is a cross-platform audio player designed for high-resolution audio playback. It aims to provide a seamless listening experience with support for various audio formats and a user-friendly interface. The project is built using Go for the backend and Wails for the frontend, leveraging TypeScript for enhanced development efficiency.
		`,
  },


];

export function getContentBySlug(slug: string): ContentItem | undefined {
  return contentRegistry.find((item) => item.slug === slug);
}

