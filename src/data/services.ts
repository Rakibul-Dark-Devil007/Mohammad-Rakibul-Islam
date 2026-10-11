/**
 * SERVICES DATA
 * Verified service offerings provided to clients and businesses.
 */

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-design",
    title: "Web Design & Development",
    subtitle: "Responsive, Fast & Accessible Web Platforms",
    description:
      "Crafting high-performance, mobile-responsive websites that balance aesthetic beauty and technical precision. Transforming Figma concepts into clean, pixel-perfect code.",
    iconName: "Layout",
    features: [
      "Responsive Layouts (Mobile, Tablet, Desktop)",
      "Modern Frontend (React, HTML5, CSS3, Tailwind)",
      "WordPress & CMS Customization",
      "Fast Page Load & Performance Tuning",
    ],
  },
  {
    id: "ui-ux",
    title: "UI/UX Design & Prototyping",
    subtitle: "Intuitive & Human-Centered Interfaces",
    description:
      "Developing seamless user workflows, interactive wireframes, and scalable design systems backed by structured design thinking and iterative user research.",
    iconName: "PenTool",
    features: [
      "Wireframing & Interactive Prototypes (Figma)",
      "Design Systems & Component Libraries",
      "User Journey Mapping & Usability Focus",
      "Mobile App UI Guidelines",
    ],
  },
  {
    id: "game-development",
    title: "Game Development Prototyping",
    subtitle: "Interactive Mechanics & Unity Prototypes",
    description:
      "Building engaging game mechanics, lightweight browser-based interactive games, and 2D/3D prototypes with polished game loops and responsive controls.",
    iconName: "Gamepad2",
    features: [
      "Core Gameplay Mechanics & Logic",
      "Unity Prototyping & Physics Systems",
      "Level Design & Interactive Scripting",
      "JavaScript & Canvas 2D Experiments",
    ],
  },
];
