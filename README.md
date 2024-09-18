# Girman - Full Stack Developer Intern Assignment

## Overview

This repository contains the solution for the Full Stack Developer Intern assignment for Girman Technologies. The objective was to create a search-based web application using Next.js with a focus on front-end and back-end development.

## Vercel Hosted Link
- **Inspect :** https://vercel.com/aman-wadhwanis-projects/girman-aman-wadhwani/Gv3frzX75YBwW4z6HR7v1zsEQdYx
- **Production :** https://girman-aman-wadhwani-6paloergw-aman-wadhwanis-projects.vercel.app 

## Assignment Specifications

### Home Screen
- **Landing Page:** A minimalistic design similar to Google's search page with Girman Technologies branding.
- **Navigation Bar:** 
  - **Website:** Redirects to [girmantech.com](https://girmantech.com)
  - **LinkedIn:** Redirects to Girman Technologies' [LinkedIn page](https://www.linkedin.com/company/girman-technologies)
  - **Contact:** Opens the default email client with a prefilled email to `contact@girmantech.com`
- **Search Box:** Allows users to input search terms.

### Search Results Page
- **Search Functionality:** Displays search results in a card-based UI upon pressing "Enter."
- **Card Details:** Each card includes user information (First Name, Last Name, Address, Phone Number) with a placeholder image.
- **Fetch Details Button:** Opens a dialog box with detailed user information as per the provided Figma design.
- **Empty State UI:** Shows an appropriate message when no results are found.

### User Data
- **API:** The user data is passed through an API in JSON format. An API endpoint is created to fetch user data based on the search input, handling invalid inputs and no results.

## Technical Specifications

- **Framework:** Next.js (Page-based routing)
- **Component Library:** Shadcn component library (including Dialog component)
- **API Design:** REST API with best practices for error handling and security
- **Hosting:** Codebase hosted on GitHub and deployed on Vercel.

## Installation

1. **Clone the Repository**
2. **Open the code in your system IDE**
3. **Run the command in your terminal(to install the node modules) : npm install**
4. **Run the command to run this on your host : npm run dev**
