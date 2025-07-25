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
/*
 * 	This setup is pretty straight forward, but
 * 	type: is used to differentiate between templates and projects, this changes what page the content is displayed on
 *  	slug: is used to create the URL for the page, so it should be unique and descriptive for each item
 *  	title: is the main title of the content item, displayed prominently on the card and the page
 *  	subtitle: is the secondary heading, only displayed on the card
 *  	technologies: is an array of strings representing the technologies used, displayed on the card
 *  	links: is an object containing optional links, shown on the card only
 *  	content: is the main content of the item, displayed on the page, rendered as markdown, use \`\`\`markdown to showcase markdown without formatting
 * */

    type: "template",
    slug: "sow-template",
    title: "Statement of Work - SOW Template",
    subtitle: "A straightforward template to organize solo dev projects.",
    technologies: ["Markdown", "PDF Download"],
    links: {
      github: "None here :)",
    },
    content: `
## Overview

This is a simple template for a **Statement of Work (SOW)** document.

## Features
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
    type: "template",
    slug: "cover-letter-template",
    title: "Cover Letter Template",
    subtitle: "A simple, reuable Markdown cover letter template for applications that accept text based CVs.",
    technologies: ["Markdown", "PDF Download"],
    links: {
      github: "Templates don't need links siily!",
    },
    content: `

This template serves as a straight forward reusable cover letter for job applications that accept text based CVs. It is designed to be easily customizable and reusable for various job applications. If I feel fancy I will also add a PDF / DOC download option in the near future.

Zylar McCullah

Location: Loveland, OH,
Email: zylardmccullah@gmail.com,	
Phone: (937)-205-2799,
Website: https://zylarmccullah.tech

[DATE]

[COMPANY]

Dear Hiring Manager(s),

I am very interested in the [JOB TITLE] position as advertised on [BOARD]. With a strong foundation in backend development, systems programming, and automation as well as hands on experience building full-stack projects using [REL TECH], I am excited by the opportunity to contribute to a team focused on innovation and excellence.

In my most recent role at Firewatch Design Studio, I led the development of a computer vision application using Python primarily within the Panda3D rendering library. Here I also collaborated cross functionally with the C-Suite to deliver production grade features for real time animation. Prior to that, I supported enterprise grade environments at Forward Edge Inc., managing thousands of user devices and accounts, and building internal tools like FTP servers and VPN systems to streamline IT workflows.

Beyond work, I’ve built several projects for my university courses in Java / C++ / Go, finding a love for building with Go / Python + Typescript / React. I bring a practical mindset, a bias toward clean and scalable architecture, and an enthusiasm for system level thinking.
I’m confident my experience with a variety of technologies, from development / scripting to containerization and DevOps (CI/CD, Docker), aligns with the challenges and goals of [COMPANY]. I’m excited to grow alongside a collaborative and technically curious team.
Thank you for considering my application, if there is anything at all that I can provide to further this evaluation do not hesitate to reach out!

Sincerely,

Zylar McCullah

    `,
  },
  {
    type: "project",
    slug: "job-scraper-cli",
    title: "Job Scraper CLI",
    subtitle: "Scrapes business websites near a ZIP code for job pages.",
    technologies: ["Go", "Bubbletea", "Lipgloss"],
    links: {
      github: "PRIVATEhttps://github.com/Mccullahz/cli-scraper",
    },
    content: `
# Table of contents
1. [Overview](#overview)
2. [Structure](#structure)
3. [Terminal Interface](#TUI)
4. [Geo](#geo)
	1. [Zippopotamus API](#zippopotamus-api)
	2. [Overpass API](#overpass-api)
5. [Scraping](#scraping)
	1. [Concurrency](#concurrency)
6. [Writer](#writer)


## Overview
This CLI Job Scraper is a Go powered TUI application that finds nearby business websites and searches them for career or job listing pages. The goal is to automate localized job hunting by surfacing hiring pages often buried in small business websites. 

By searching only these local businesses, applicants can find job opportunities that may not be listed on larger job boards, reducing resume traffic and potentially aiding in landing a desired position.

## Structure
This project is structured similar to a standard Go application, with the main logic in the 'cmd' directory. This main function only acts as the entry point of the project. The rest of the Go packages are placed inside the internal directory, and further split into packages to modulate each function. 

TUI interface is inside the ui package, the 'scraper' that handles HTTP requests is located inside web, and so fourth.

## Terminal Interface
The TUI is built using the Bubbletea library, which provides a simple and effective way to create terminal user interfaces in Go, and styled with the Lipgloss addition to Bubbletea. The interface allows users to input a ZIP code, select a radius for scraping, and view the results in a structured format. The UI is designed to be intuitive and responsive, and will eventually be able to provide real time feedback as the scraper processes each website.

## Geo (Locator)
The 'Geo' package is responsible for the handling of geographic data, such as ZIP codes and their associated locations. The current idea is to use the [Zippopotamus API](https://docs.zippopotam.us/) to fetch location data based on ZIP codes. 
This package should provide functionality to fetch geographic coordinates (latitude and longitude). 

From here, we can use these coordinates to locate nearby businesses via the [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API). If this fails, we can pivot to either the Google Maps API or perhaps Yelp, but these will require 1.) API keys and 2.) money.

Once we have the coordinates from Zippopotamus, we can use the Overpass API to query OpenStreetMap for nearby businesses. We should then be able to throw the results into a 'geo-results' json file and throw the results into the 'web' package to be scraped.
### Zippopotamus API
While there is not an official Go client for the Zippopotamus API, it is a simple REST API that we can interact with using 'net/http'. This implementation can look the following example in the codebase:
\`\`\`go
func GetCoordinatesFromZip(zip string) (float64, float64, error) {
	url := fmt.Sprintf("https://api.zippopotam.us/us/%s", zip)
	resp, err := http.Get(url)
	if err != nil {
		return 0, 0, fmt.Errorf("HTTP request failed: %w", err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return 0, 0, fmt.Errorf("reading response failed: %w", err)
	}

	var data ZippoResponse
	if err := json.Unmarshal(body, &data); err != nil {
		return 0, 0, fmt.Errorf("JSON unmarshal failed: %w", err)
	}

	if len(data.Places) == 0 {
		return 0, 0, fmt.Errorf("no places found for zip %s", zip)
	}

	place := data.Places[0]
	lat, err1 := strconv.ParseFloat(place.Latitude, 64)
	lon, err2 := strconv.ParseFloat(place.Longitude, 64)
	if err1 != nil || err2 != nil {
		return 0, 0, fmt.Errorf("invalid coordinates in API response")
	}

	return lat, lon, nil
}
\`\`\`

While this function is perhaps one of the most significant in this project, it is also quite simple. All we are doing is making a GET request to the Zippo API, reading the response, and unmarshalling the JSON into a struct. 

We know that our JSON will look similar to this:

\`\`\`json
{
  "post code": "90210",
  "country": "United States",
  "country abbreviation": "US",
  "places": [
    {
      "place name": "Beverly Hills",
      "state": "California",
      "state abbreviation": "CA",
      "latitude": "34.0901",
      "longitude": "-118.4065"
    }
  ]
}
\`\`\`

Working off of this, we check the validity of the response, and then extract / convert coordinates and return them if they are valid.


### Overpass API
For the Overpass API, there is a Go client available, [go-overpass], however I am opting to use the 'net/http' package directly for simplicity. The Overpass API allows us to query OpenStreetMap data, which we can use to find businesses near the coordinates we obtained from the Zippopotamus API.

The current implementation uses a simple HTTP GET request to the Overpass API with a query that searches for nodes tagged as "amenity". For the purpose of this project we are looking for all business types within a certain radius, so my query looks like this:
\`\`\`go
	query := fmt.Sprintf("[out:json];node(around:%d,%f,%f)[amenity];out;", radius, lat, lon)
\`\`\`

This query will return all nodes (which are businesses in this case) within the specified radius of the given latitude and longitude. The results are then sent into a 'geo-results' JSON file, which is then used by the scraper to find job pages. Currently, this functionality is very very rough, and it simlpy returning JSON that looks like this:
\`\`\`json
{
  "type": "node",
  "id": 12879790217,
  "lat": 39.2332032,
  "lon": -84.2498673
  "tags": {
	"power": "terminal"
  }
}

  ]
}
\`\`\`

From this JSON, we have the lat and lgn of the business, and the ID of the node. Though not particularly helpful on it's own, this is enough to pass into the scaper, which will then use the ID to find the business website and then search for a job / career page.

## Web (Scraping)
The scraping functionality is implemented using Go's 'net/http' package to make HTTP requests and 'goquery' for parsing HTML. The scraper first locates all pages attached to a zipcode via our Geo Package, then parses every page within the radius. We are then parsing the HTML to find links that match common job listing patterns, such as "careers", "jobs", or "employment".
### Identifiers
How do we identify business information, even something as simple as whether they have a website or not? 


### Concurrency
The scraper uses Go's goroutines to handle multiple HTTP requests concurrently, significantly speeding up the scraping process. Each request is handled in a separate goroutine, allowing the application to scrape multiple websites simultaneously without blocking the main thread.

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
Flacer is a cross platform audio player designed for high resolution audio playback. It aims to provide a seamless listening experience with support for various audio formats and a user friendly interface. The project is built using Go for the backend and Wails for the frontend, leveraging TypeScript for enhanced development efficiency.
		`,
  },


];

export function getContentBySlug(slug: string): ContentItem | undefined {
  return contentRegistry.find((item) => item.slug === slug);
}

