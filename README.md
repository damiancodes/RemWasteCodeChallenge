# RemWaste Skip Selection App

## Project Description

This project is a React-based web application for selecting skips, featuring a dynamic filtering system and an interactive size guide. Users can filter skips by road placement, heavy waste suitability, and size range. The application displays detailed information for each skip, including price and hire period.

## Features

- **Skip Filtering:** Filter skips based on Road Placement, Heavy Waste, and Size Range.
- **Dynamic Skip Cards:** Displays various skip options with relevant details like size, hire period, and price.
- **Interactive Size Guide:** A modal view providing detailed descriptions and images for different skip sizes.
- **Responsive Design:** Adapts to various screen sizes for a seamless user experience.
- **Header Navigation:** Clear progress indicators in the header to guide the user through the selection process.

## Technologies Used

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react) ![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?style=flat-square&logo=vite) ![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?style=flat-square&logo=tailwind-css) ![React Icons](https://img.shields.io/badge/React%20Icons-5.5.0-e91e63?style=flat-square&logo=react)

- **React.js:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool that provides a lightning-fast development experience.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **React Icons:** A library for including popular icon packs in React projects.

## Setup and Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/damiancodes/RemWasteCodeChallenge.git
   cd RemWasteCodeChallenge
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or yarn dev
   ```
   
   The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Usage

Upon launching the application, you will see a list of available skips. Use the filter options at the top to narrow down your choices based on your specific requirements. Click on a skip card to view more details.

### Filter Options
- **Road Placement:** Filter skips allowed or not allowed on roads
- **Heavy Waste:** Filter by heavy waste capability
- **Size Range:** Choose between Small (≤8 yd), Medium (9-14 yd), or Large (15+ yd)

### Size Guide
Click "Size Guide" to view an interactive modal with detailed information about each skip size, including capacity and recommended use cases.

## Project Structure

```
src/
├── components/
│   ├── SkipCard/
│   ├── features/FilterBar/
│   └── layout/Header/
├── hooks/
├── assets/skip-images/
├── App.jsx
└── main.jsx
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```
