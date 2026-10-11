/**
 * PROJECT DATA
 * Add new projects here. Project cards in the portfolio are rendered automatically.
 * 
 * Fields:
 * - id: Unique string identifier
 * - title: Project name
 * - description: Accurate summary of the project
 * - image: Path to screenshot in public/assets/projects/
 * - tags: Technologies used
 * - githubUrl: Link to repository (if verified, else undefined)
 * - liveDemoUrl: Link to live website (if available, else undefined)
 * - category: Filter category (Web, UI/UX, Game, System)
 */

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  category: "Web" | "UI/UX" | "Game" | "Academic";
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "interior-design",
    title: "Interior Design Website",
    description:
      "A modern digital platform for interior design showcases, service catalogs, company profiles, and seamless client collaboration.",
    image: "./assets/projects/interior.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: "Web",
    featured: true,
  },
  {
    id: "real-estate",
    title: "Real Estate Website",
    description:
      "A real estate property listing and agency portal built with WordPress and Elementor, featuring property showcases and agent contact workflows.",
    image: "./assets/projects/real-estate.png",
    tags: ["WordPress", "Elementor", "Web Architecture", "CMS"],
    category: "Web",
    featured: true,
  },
  {
    id: "tictac",
    title: "Tic-Tac-Toe Interactive Game",
    description:
      "A browser-based interactive game built to practice core JavaScript logic, DOM manipulation, responsive layouts, and state tracking.",
    image: "./assets/projects/tic-tac.png",
    tags: ["JavaScript", "HTML5", "CSS3", "Game Logic"],
    category: "Game",
    featured: false,
  },
  {
    id: "pet-care-app",
    title: "Pet Care Mobile App Concept",
    description:
      "A complete UI/UX mobile application prototype designed in Figma during the Software Engineering course, focusing on pet adoption and user-centric flows.",
    image: "./assets/projects/petcare.png",
    tags: ["Figma", "UI/UX Design", "Wireframing", "Mobile App Prototype"],
    category: "UI/UX",
    featured: true,
  },
  {
    id: "air-quality",
    title: "Air Quality Monitoring Portal",
    description:
      "University Web Technologies final project featuring sensor data visualization, client-side dashboard, and MySQL backend integration.",
    image: "./assets/projects/AQI.png", // fallback placeholder thumbnail
    tags: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    githubUrl: "https://github.com/Rakibul-Dark-Devil007/Web-Tech",
    category: "Academic",
    featured: false,
  },
];
