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
6. [Writer](#writer)


## Overview
This CLI Job Scraper is a Go powered TUI application that finds nearby business websites and searches them for career or job listing pages. The goal is to automate localized job hunting by surfacing hiring pages often buried in small business websites. 

By searching only these local businesses, applicants can find job opportunities that may not be listed on larger job boards, reducing resume traffic and potentially aiding in landing a desired position.

## Structure
This project is structured similar to a standard Go application, with the main logic in the 'cmd' directory. This main function only acts as the entry point of the project. The rest of the Go packages are placed inside the internal directory, and further split into packages to modulate each function. 

TUI interface is inside the ui package, the 'scraper' that handles HTTP requests is located inside web, and so fourth.

## Terminal Interface
The TUI is built using the Bubbletea library, which provides a simple and effective way to create terminal user interfaces in Go, and styled with the Lipgloss addition to Bubbletea. The interface allows users to input a ZIP code, select a radius for scraping, and view the results in a structured format. The UI is designed to be intuitive and responsive, and will eventually be able to provide real time feedback as the scraper processes each website.

As the backend for this project has been built out, the UI has had room to grow as well. The current implementation has just been modularized to separate the different views and components of the TUI. Packages for the UI have been split up several ways, and now our 'ui.go' file simply serves as the entry point for the TUI, and then calls the appropriate view based on the current state of the application. Modularizing the UI has proven to be quite beneficial, as it allows for easier maintenance and updates to the UI without affecting the core logic of the application. No more breaking everything when I want to change a color!

While the UI is the "easier" portion of this project, it has become quite a headache to get everything working together properly, and still has plenty of work to be done. I am currently working on adjusting the results view to be more dynamic, such that it will allow for the user to scroll through the results and ultimately select a set of results to add to an apply to list. This will allow the user to easily keep track of which jobs they have applied to, and which ones they still need to apply to.

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
Identifying dedicated job pages can be tricky, as different websites may use different structures and naming conventions. To address this, the scraper uses a set of predefined keywords and patterns to search for potential job listing pages, for example inside the 'web' package we have a list of keywords like this:
\`\`\`go
	var JobPageKeywords = []string{"careers", "jobs", "join-us", "employment", "opportunities", "work-with-us", "hiring"}

func IsJobPage(url string, body string) bool {
	urlLower := strings.ToLower(url)
	for _, kw := range JobPageKeywords {
		if strings.Contains(urlLower, kw) {
			return true
		}
	}
	bodyLower := strings.ToLower(body)
	for _, kw := range JobPageKeywords {
		if strings.Contains(bodyLower, kw) {
			return true
		}
	}
	return false
}
\`\`\`

This function checks both the URL and the body of the page for any of the keywords, returning true if a match is found. This approach helps to catch a variety of naming conventions that businesses might use for their job listing pages.

Using this method, the scraper can effectively identify potential job pages across a wide range of business websites, increasing the chances of finding relevant job listings for users. The issue with this method is that it can produce false positives, as some pages may contain these keywords without actually being job listing pages, or we can also miss job pages that do not use these keywords. To address this in the future, we could implement more advanced techniques such as ml or nlp to better understand the context of the page, but for now I am trying to do as much as I can without bringing in more dependencies.

To perform the actual scraping, we use the 'net/http' package to make GET requests to each business website found by Geo. The response body is then parsed, looking for links that match the above identifiers. If a match is found, the URL is added to the results along with the business name.
	\`\`\`go
	func ScrapeWebsite(rootURL string) (string, error) {
	// fetch url root and checks if responds 
	resp, err := http.Get(rootURL)
	if err != nil {
		return "", fmt.Errorf("failed to fetch %s: %w", rootURL, err)
	}
	defer resp.Body.Close()

	bodyBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", fmt.Errorf("failed to read body: %w", err)
	}
	body := string(bodyBytes)


	if IsJobPage(rootURL, body) {
	// instead of returning immediately, record it as a candidate
		candidate := rootURL
		// parse HTML and scan links
	    	pageLinks := extractLinks(body, rootURL)
		for _, link := range pageLinks {
			for _, kw := range JobPageKeywords {
				if strings.Contains(strings.ToLower(link), kw) {
					jobURL, ok := checkLink(link)
					if ok {
						return jobURL, nil // prefer deeper link
					}
				}
			}
		}
    return candidate, nil // fallback: root really is the careers page OR no better link found but career keywords were present
	}

	// parse HTML and scan links
	pageLinks := extractLinks(body, rootURL)
	for _, link := range pageLinks {
		// quick keyword check before fetching
		for _, kw := range JobPageKeywords {
			if strings.Contains(strings.ToLower(link), kw) {
				// fetch link and confirm it’s a job page
				jobURL, ok := checkLink(link)
				if ok {
					return jobURL, nil
				}
			}
		}
	}

	return "", nil // nothing found
}
	\`\`\`

This is quite a simple approach and could be improved to be both more robust and efficient, but for the current scope of the project, this works just fine.


## Writer (IO)
The writer package is responsible for handling input and output operations, specifically writing the results of the scraping process to a file. The results are stored in a structured format, making it easy to review and utilize the data later.

The current implementation of the writer takes the results from Overpass and throws them into 'geo_results.json', and then feeds them into our scraper to check the returned business websites. The results from the scraper then gets thrown into 'results.json'. Both of these files are structured as JSON arrays, with each entry containing relevant information about the business and any job pages found.

Here is an example of how the results are written to a JSON file:
	\`\`\`go
	// io for managing results files
package utils

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"path/filepath"
	"sort"
	"os"
	//"time"

)

// result struct to hold job page details
type JobPageResult struct {
	BusinessName string json:"business_name"
	URL	   string json:"url"
	Description string json:"description"
}

func LoadLatestResults(dir string) ([]JobPageResult, error) {
	files, err := filepath.Glob(filepath.Join(dir, "results*.json"))
	if err != nil || len(files) == 0 {
		return nil,fmt.Errorf("no result files found")
	}

	sort.Slice(files, func(i, j int) bool {
		return files[i] > files[j]
	})

	data, err := ioutil.ReadFile(files[0])
	if err != nil {
		return nil, err
	}

	var results []JobPageResult
	if err := json.Unmarshal(data, &results); err != nil {
		return nil, err
	}

	return results, nil
}

func WriteResults(results []JobPageResult, outDir string) error {
	// output directory exist? if not create it then write results to a file
	if err := os.MkdirAll(outDir, os.ModePerm); err != nil {
		return fmt.Errorf("Failed to create output directory: %w", err)
	}

	filename := "results.json"
	filepath := filepath.Join(outDir, filename)
	file, err := os.Create(filepath)
	if err != nil {
		return fmt.Errorf("Failed to create results file: %w", err)
	}
	defer file.Close()

	encoder := json.NewEncoder(file)
	encoder.SetIndent("", "  ")

	if err := encoder.Encode(results); err != nil {
		return fmt.Errorf("Failed to write results to file: %w", err)
	}

	return nil

} 

//lets make this better, ensure we are writing the files similar to the results file above
func WriteGeoResults(data []byte, outDir string) error {
	// Ensure output directory exists
	if err := os.MkdirAll(outDir, os.ModePerm); err != nil {
		return fmt.Errorf("failed to create output directory: %w", err)
	
	}
	var prettyJSON bytes.Buffer
	if err := json.Indent(&prettyJSON, data, "", "  "); err != nil {
		return fmt.Errorf("failed to pretty-print Geo results: %w", err)
	}

	filename := "geo_results.json"
	filePath := filepath.Join(outDir, filename)
	
	file, err := os.Create(filePath) // os.Create overwrites existing file
	if err != nil {
		return fmt.Errorf("failed to create results file: %w", err)
	}
	defer file.Close()

	encoder := json.NewEncoder(file)
	encoder.SetIndent("", "  ")


	if err := os.WriteFile(filePath, prettyJSON.Bytes(), 0644); err != nil {
		return fmt.Errorf("failed to write Geo results to file: %w", err)
	}

	return nil
}

func DeleteOldestResults(dir string) error {
	files, err := filepath.Glob(filepath.Join(dir, "results_*.json"))
	if err != nil || len(files) == 0 {
		return fmt.Errorf("no result files found")
	}

	// sort files by name in ascending order
	sort.Slice(files, func(i, j int) bool {
		return files[i] < files[j]
	})
	// keep only the newest file
	if len(files) > 1 {

	}
		return nil
}
\'\'\'

This is currently how we are hadnling IO, and it works very well. This will be expanded in the future to include more details on the results, such as timestamps and job descriptions, but for now this is sufficient.


`,
  },

  {
    type: "project",
    slug: "portfolio",
    title: "zylarmccullah.tech",
    subtitle: "My ever-evolving web portfolio.",
    technologies: ["TypeScript", "React"],
    links: {
      github: "https://www.github.com/Mccullahz/portfolio",
      demo: "https://zylarmccullah.tech",
    },
    content: `

# Table of contents
1. [Overview](#overview)
2. [Structure](#structure)
3. [Home](#home)
4. [Portfolio](#portfolio)
	1. [CLI Portfolio](#cli-portfolio)
	2. [GUI Portfolio](#gui-portfolio)
		1. [Animation](#animation)

## Overview
This is my personal portfolio website, built with TypeScript and React. It serves as a showcase for my projects, skills, and experiences. The site is designed to be responsive and user-friendly, providing visitors with an easy way to learn more about me and my work. 

## Structure
This project is structured similar to a standard React application, with a strong emphasis on modularity and reusability. The main components are organized into directories based on their functionality, making it easy to navigate and maintain the codebase.

The component strucure in this project includes:
- **Contact**: A component for displaying my contact information and a form for visitors to reach out.
- **Education**: A component that lists my educational background, including degrees and certifications.
- **Experience**: A component that showcases my professional experience, including job titles, companies, and responsibilities.
- **Footer**: A component that contains the footer of the website, including links to my social media profiles and other relevant resources.
- **GuiCard**: A component that provides a guide for the non-cli based portfolio page
- **Header**: A component that contains the header of the website, including the navigation menu and logo.
- **Hero**: A component that serves as the hero section of the website, providing a brief introduction and call to action.
- **Navbar**: A component that contains the navigation bar, allowing users to navigate between different sections of the website.
- **ProjectPage**: A component that displays a command-line-esque list of my projects, including descriptions, technologies used, and links to the project repositories or live demos.
- **Skills**: A component that lists my skills and technologies I am proficient in, providing a quick overview of my technical capabilities.

## Home
The home page of my portfolio site is designed to read similar to a resume, providing an uber quick overview of experience skills and education. It is structured to give visitors a quick snapshot of my professional background and capabilities, with links to more detailed sections for those interested in learning more.

This page is quite simple, and simply serves the main components in a single page format:
\`\`\`tsx
  <>
    <Hero />
    <Experience />
    <Skills />
    <Education />
    <Contact />
  </>
\`\`\`

Realistically, this page works just fine as is, however I do intend to add a couple of features in the future.
The current idea that I have in mind is to add a layer of interactivity to the experience section, such that this will be less of a simple list, and rather appear as more of a timeline. This should allow for hovering over each position to reveal more information and then make some changes to a timeline undeneath the cards to show the duration of each position.


## Portfolio
The portfolio page is designed to showcase my projects. There are two versions of this page, one for the CLI based portfolio and one for the web based portfolio. The CLI based portfolio is designed to appear like a terminal, while the web based portfolio is designed to look like a modern web app.
### CLI Portfolio

### GUI Portfolio
The GUI portfolio is designed to provide a more traditional web experience, with a focus on visual appeal and user interaction. It features a grid layout that displays my projects in a visually appealing manner, with each project represented by a card that includes a title, description, technologies used, and links to the project repository and a gif demo.

I am currently working on a more advanced way to display my projects, with a focus on making it more interactive and engaging. The goal is to provide a more immersive experience for visitors, allowing them to explore my projects in greater detail and see the technologies I used in action. Currently we are using a simple card layout where each card represents a project and flips to reveal more information when hovered and redirects to the project page when clicked.

To change this, I am considering using a more dynamic setup, where this is more of a 3D rendering of my projects, with each project represented by a 3D card that can be rotated and interacted with. To do this, I am looking into using Three.js, and preloading a scene. I am thinking maybe doing something like a 3D coffee table, where each project is represented by a coffee mug, and the user can rotate the table to view different projects. This would allow for a more interactive experience, and would also allow me to showcase my abilities in 3D rendering and animation.

So with this in mind, let's get to work and see what we can knock out.

#### Animation
The animation for this page is likely going to be the most complex part of this project, so I am going to use Three.js to simplify this process. WIth react-three-fiber, we can easily integrate Three.js into our React application, allowing us to create 3D scenes and animations with *relative* ease.

To start, we will need to install the necessary dependencies:
\`\`\`bash
npm install three @react-three/fiber @react-three/drei
\`\`\`

Next, we can create the component that will handle the 3D scene. This component will be responsible for rendering the 3D models of the projects, as well as handling any animations, lighting(maybe) or user interactions.

\`\`\`tsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

const Mug: React.FC<{ position: [number, number, number] }> = ({ position }) => (
  <mesh position={position}>
    <cylinderGeometry args={[0.3, 0.3, 0.5, 32]} />
    <meshStandardMaterial color="#c49e6e" />
  </mesh>
);

const Table: React.FC = () => (
  <mesh rotation={[Math.PI / 2, 0, 0]}>
    <cylinderGeometry args={[2, 2, 0.1, 64]} />
    <meshStandardMaterial color="#4b3b2a" />
  </mesh>
);

const Lights = () => (
  <>
    <ambientLight intensity={0.3} />
    <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
  </>
);

export const ThreeScene: React.FC = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 5], fov: 50 }}
      style={{ width: "100%", height: "100vh" }}
    >
      <Lights />
      <Environment preset="city" />
      <OrbitControls enablePan={false} />
      <Table />
      <Mug position={[1, 0.3, 0]} />
      <Mug position={[-1, 0.3, 0]} />
      <Mug position={[0, 0.3, 1]} />
    </Canvas>
  );
};
\`\`\`

This example creates a simple 3D scene with a table and three cylinders representing projects. These are not yet mug shaped, but that will be a later me problem to make look nice. The 'OrbitControls' component allows for scene rotation. The 'Environment' component adds a background to the scene, enhancing the visual appeal.

Now that we have this basic setup, we can start integrating this into the portfolio page. We can replace our current card setup with this created scene:

\`\`\`tsx 
// inside Gui.tsx (where our portfolio is rendered)
import React from "react";
import { ThreeScene } from "../components/Three";

export const Gui: React.FC = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ThreeScene />
    </div>
  );
};
\`\`\`

This will render the 3D scene into the gui page, maintaining the full viewport height and width. This fits quite nicely, and the header component will still be rendered above the scene, allowing for navigation and interaction.

Now lets address an initial issue. The 'table' is currently rotated the wrong way, so we need to adjust the rotation of the table mesh in the 'ThreeScene' component:
\`\`\`tsx
<Table rotation={[Math.PI / 1, 0, 0]} />
\`\`\`

This will ensure that the table is flat, I mistook the rotation direction in the initial example, but this works just fine now.

Now that we have the basic setup and rendering properly, we can start adding more detail here. Next up is to address how we can differentiate between projects, and how we can make the mugs look more like actual coffee mugs.

To differentiate between projects, my idea is to add tickets to the mugs, which will contain the project title and a brief description similar to the conent from the cards before. This will allow us to easily identify each project, and will also allow us to add more information about each project in the future.

To do this, we can create a new object that contains project information. For this purpose, I am going to go with a 'ticket' onject becasue it is fitting and should allow us to do what we need here.

The current issue with the ticket object, adn will likely also be an issue with the mugs, is that their rotation is set once, and though this may be correct for 2 positions, is is going to be incorrect for the perpendicular sides of the tables. To address this, we can use the 'useFrame' hook from 'react-three-fiber' to update the rotation of the mugs and tickets based on their position on the table. I have never used this hook before, so let's see how we can implement it.


    `
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

