/**
 * EDUCATION & EXPERIENCE TIMELINE DATA
 * Verified academic milestones, research papers, certifications, and developer roles.
 */

export interface TimelineEntry {
  id: string;
  type: "education" | "experience" | "certification" | "research";
  title: string;
  organization: string;
  period: string;
  description: string;
  badge?: string;
  highlights?: string[];
}

export const educationAndExperienceData: TimelineEntry[] = [
  {
    id: "nest-tech-founder",
    type: "experience",
    title: "Owner & Founder",
    organization: "Nest Tech Solution and Consultant",
    period: "2024 – Present",
    badge: "Entrepreneurship",
    description:
      "Leading technical initiatives, client consultation, web architecture design, and strategic digitalization solutions for local and regional businesses.",
    highlights: [
      "Client IT consultancy & solution roadmap planning",
      "Full-stack web architecture & implementation oversight",
      "Network infrastructure & security setup guidance",
    ],
  },
  {
    id: "junior-developer-intern",
    type: "experience",
    title: "Internship (Junior Developer)",
    organization: "Web & Software Solutions (Remote)",
    period: "Oct 2025 – Jan 2026",
    badge: "Developer",
    description:
      "Developed and maintained dynamic web modules using React.js, Node.js, and MongoDB. Improved performance, SEO, responsiveness, and integrated payment gateways with subscription management.",
    highlights: [
      "Dynamic web modules with React.js, Node.js & MongoDB",
      "Payment gateway integration & subscription-based products",
      "Performance optimization, SEO enhancements, and UX refinement",
    ],
  },
  {
    id: "bsc-cse",
    type: "education",
    title: "B.Sc. in Computer Science & Engineering",
    organization: "American International University-Bangladesh (AIUB)",
    period: "2021 – 2025",
    badge: "CGPA 3.65",
    description:
      "Major in Computer Engineering with Computer Networking specialization and minor in Management Information Systems (MIS). Graduated in 2025.",
    highlights: [
      "CGPA: 3.65 (Major: Computer Engineering)",
      "Thesis on 6G Energy-Efficient Networks",
      "Hands-on routing/switching lab implementations & course capstone",
    ],
  },
  {
    id: "research-papers",
    type: "research",
    title: "Research Publications & Thesis",
    organization: "AIUB / Academic Conferences",
    period: "2024 – 2025",
    badge: "Publications",
    description:
      "Author of academic research spanning next-generation telecommunications and machine learning applied diagnostics.",
    highlights: [
      "Thesis: 'Energy-Efficient Base Station Management in 6G Networks Using Clustering Approaches'",
      "Conference Paper: 'Mushroom Quality Prediction Using KNN And Ensemble Learning With Enhanced Preprocessing'",
    ],
  },
  {
    id: "cisco-cert",
    type: "certification",
    title: "Cisco Networking Certificate",
    organization: "Cisco Networking Academy / AIUB",
    period: "2021",
    badge: "Certified",
    description:
      "Completed foundational Cisco course covering TCP/IP protocol stack, network device configuration, packet routing, and subnet design.",
    highlights: ["Packet Tracer simulations", "Network fundamentals and security principles"],
  },
  {
    id: "hsc",
    type: "education",
    title: "Higher Secondary Certificate (HSC)",
    organization: "NS Govt College, Natore",
    period: "2018 – 2020",
    badge: "GPA 5.00",
    description: "Completed higher secondary education in Science curriculum with perfect GPA 5.00.",
  },
  {
    id: "ssc",
    type: "education",
    title: "Secondary School Certificate (SSC)",
    organization: "Natore Govt Boys' High School",
    period: "2016 – 2018",
    badge: "GPA 5.00",
    description: "Completed secondary school education with perfect GPA 5.00.",
  },
];
