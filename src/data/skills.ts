/**
 * TECHNICAL SKILLS DATA
 * Categorized strictly from verified CV and existing website data.
 * To add or modify skills, edit the arrays below.
 */

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Full-Stack",
    description: "Core languages and web technologies for client-side and full-stack development.",
    iconName: "Code2",
    skills: [
      { name: "React.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "JavaScript" },
      { name: "C++" },
      { name: "Python" },
      { name: "Next.js" },
      { name: "HTML5 & CSS3" },
      { name: "WordPress & Elementor" },
    ],
  },
  {
    title: "Networking & Security",
    description: "System defense, network architecture and infrastructure configuration.",
    iconName: "ShieldCheck",
    skills: [
      { name: "TCP/IP" },
      { name: "Routing & Switching" },
      { name: "VLANs & Subnetting" },
      { name: "DNS & DHCP" },
      { name: "Cisco Packet Tracer" },
      { name: "VPN Configuration" },
      { name: "Kali Linux" },
    ],
  },
  {
    title: "Databases & Tools",
    description: "Data storage, version management, and engineering environments.",
    iconName: "Database",
    skills: [
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "SQL" },
      { name: "Git & GitHub" },
      { name: "Linux / CLI" },
      { name: "VS Code" },
      { name: "MS Office & Presentation" },
    ],
  },
  {
    title: "UI/UX & Creative",
    description: "Interface architecture, research, visual wireframes, and product prototyping.",
    iconName: "Palette",
    skills: [
      { name: "Figma" },
      { name: "User Interface (UI)" },
      { name: "User Experience (UX)" },
      { name: "Wireframing & Prototyping" },
      { name: "Payment Gateways & UX" },
    ],
  },
];
