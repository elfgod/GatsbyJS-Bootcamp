# Gatsby.js Tutorial and Projects Course

Create Blazingly Fast Websites with latest version of Gatsby.js  
Instructor: **John Smilga**  
Course Repository:

1. https://www.johnsmilga.com/ (Go to projects + Gatsby)
2. https://github.com/john-smilga/gatsby-v3-tutorial-recipes

### What you'll learn:

- Learn Gatsby
- Build Awesome Projects
- Build Blazingly Fast Websites
- Become Better React Developer

### Description

Gatsby is a React-based, GraphQL powered static site generator. It combines together the best parts of React, webpack, react-router, GraphQL, and other front end tools to provide excellent developer experience. Gatsby is far more than typical static site generator though. You can think of it more like a modern front-end framework.

It uses powerful pre-configuration to build a website that uses only static files for incredibly fast page loads, service workers, code splitting, server side rendering, smart image loading, asset optimization, and data prefetching.

The course will consist of two parts. In the first part, the tutorial part we will cover Gatsby basics, and in the second part, projects part, we will build interesting projects using Gatsby.

All project intro videos are available for preview.

With the new Gatsby create blazing fast web experiences that integrate your favorite services and content. Build e-commerce sites, landing pages, blogs and more in minutes.

Go from idea to production in literal minutes with a 10x developer experience. Gatsby is built on popular, proven tech like React and GraphQL, has loads of tutorials and starter templates, and over 2500 plugins that can help integrate all of your favorite web services.

Gatsby loads only critical 1 parts of the page, exactly when the visitor needs it, and not a second sooner. Once loaded, Gatsby prefetches resources 2 for other pages so that clicking on the site feels buttery smooth and responsive. Everything is statically generated at runtime - so your site loads as fast as possible.

## Sections

### Who this course is for:

- Everyone Interested in Building Blazingly Fast Static Websites With Gatsby

### Requirements

- Basic Knowledge of React

### Helpers

1. Dummy text? More like dummy thicc text, amirite?  
   https://hipsum.co/

## Section 1: Introduction

## Section 2: Gatsby Tutorial - SimplyRecipes Project

### 1. Install gatsby-cli

Part 0: Set Up Your Development Environment  
https://www.gatsbyjs.com/docs/tutorial/part-0/  
`sudo npm install -g gatsby-cli`

`gatsby --version`

See the available commands:  
`gatsby --help`

### 2. Setup New Project

gatsby-starter-hello-world v4:  
https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-hello-world/

`npx gatsby new tutorial https://github.com/gatsbyjs/gatsby-starter-hello-world`

`gatsby develop`

To delete the .cache, public run:  
`gatsby clean`

### 3. Inline CSS

`<h1 style={{ color: "red", textTransform: "capitalize" }}>Home page</h1>`

### 4. Styles

Normalize.css  
A modern, HTML5-ready alternative to CSS resets

Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.  
https://necolas.github.io/normalize.css/  
`npm install normalize.css`

how to setup the HTML&CSS for the project  
HTML&CSS Project - Simply Recipes 2 hours tutorial  
https://youtu.be/m3LbCAL9JUI

// Read the docs for full CONFIGURATION OPTIONS //  
gatsby-plugin-styled-components  
A Gatsby plugin for styled-components with built-in server-side rendering support  
https://www.gatsbyjs.com/plugins/gatsby-plugin-styled-components/?=style%20components  
`npm install gatsby-plugin-styled-components styled-components babel-plugin-styled-components`

### 5. Assets and Icons

https://react-icons.github.io/react-icons/  
`npm install react-icons --save`

### 6. Install Plugin Image

Gatsby Image plugin  
https://www.gatsbyjs.com/plugins/gatsby-plugin-image/?=gatsby-image-  
https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/  
`npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp`

### 7. GraphQL

- In GraphiQL use this command to open options for querying:  
  `ctrl + spacebar`

- **Field Alias**: Change query from siteMetadata to info  
  `info:siteMetadata`

- Query Keyword, Name and Gatsby Clean:
  This names must be unique

### 8. ENV Variables

https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/

### 9. Recipe Template Page Walkthrough

File System Route API  
Use the File System Route API when you want to create dynamic pages e.g. to create individual blog post pages for your blog.  
https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/

### 10. Slugify

https://www.npmjs.com/package/slugify
