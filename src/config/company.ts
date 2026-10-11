/**
 * COMPANY CONFIGURATION: NEST TECH SOLUTION AND CONSULTANT
 * 
 * Central configuration file for your enterprise identity.
 * Edit this file whenever you update:
 * 1. Company Name
 * 2. Official Website URL
 * 3. Logo path
 * 4. Your Designation / Role
 * 5. Company description and service offerings
 */

export interface CompanyConfig {
  name: string;
  designation: string;
  officialWebsiteUrl: string;
  isWebsiteLive: boolean; // Set to true once public domain is verified and active
  logoPath?: string;
  tagline: string;
  description: string;
  highlights: string[];
  servicesOffered: {
    title: string;
    description: string;
  }[];
  socials?: {
    linkedin?: string;
    facebook?: string;
    email?: string;
  };
}

export const companyConfig: CompanyConfig = {
  name: "Nest Tech Solution and Consultant",
  designation: "Owner & Founder",
  // EDIT HERE: Replace with your actual company URL when ready (e.g. "https://nesttechbd.com")
  officialWebsiteUrl: "https://nesttechbd.com", 
  isWebsiteLive: false, // Set to true when domain is live. If false, UI shows a clear 'Coming Soon' / 'Official Domain' badge
  tagline: "Empowering businesses through reliable IT systems, web architecture & technical consultancy.",
  description: 
    "Nest Tech Solution and Consultant is a technology firm founded by MD Rakibul Islam. We provide end-to-end digital solutions, enterprise web development, IT infrastructure security consultation, and modern UI/UX design to help businesses scale securely and efficiently.",
  highlights: [
    "Full-Lifecycle Web & Software Architecture",
    "IT Infrastructure & Network Security Advisory",
    "Tailored Business Digitalization & Modernization",
    "Client-First Consultation & Reliable Support",
  ],
  servicesOffered: [
    {
      title: "Enterprise Web Development",
      description: "Developing fast, responsive, and secure web platforms engineered to modern performance standards.",
    },
    {
      title: "IT & Network Security Consulting",
      description: "Assisting organizations with network defense setup, vulnerability mitigation, and infrastructure audit.",
    },
    {
      title: "UI/UX & Product Design",
      description: "Transforming ideas into user-centric, high-converting interfaces and scalable digital product prototypes.",
    },
  ],
  socials: {
    email: "rakibulislam.refat07@gmail.com",
  },
};
