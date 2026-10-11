/**
 * SITE CONFIGURATION
 * Centralized configuration file for personal details, social links,
 * CV document path, and contact information.
 * 
 * Update contact details, phone, email, or social URLs here.
 */

export interface SiteConfig {
  name: string;
  title: string;
  location: string;
  headline: string;
  bio: string;
  avatar: string;
  logo: string;
  cvPdfPath: string;
  email: string;
  phone: string;
  whatsAppNumber: string; // International format without '+' or spaces, e.g. '8801846281071'
  socials: {
    github: string;
    linkedin: string;
    googleForm: string;
  };
  getWhatsAppUrl: (customMessage?: string) => string;
}

export const siteConfig: SiteConfig = {
  name: "MD Rakibul Islam",
  title: "Full-Stack Web Developer & Network Security Enthusiast",
  location: "Dhaka, Bangladesh",
  headline: "I build clean, fast, accessible digital experiences and provide IT security solutions.",
  bio: "Passionate Computer Science and Engineering graduate specializing in Network Security and resilient Web Development. Dedicated to crafting intuitive UI/UX, robust frontend architectures, and high-performance applications.",
  avatar: "./assets/Rakibul.png",
  logo: "./assets/MRI.png",
  cvPdfPath: "./documents/MD-Rakibul-Islam-CV.pdf",
  email: "rakibulislam.refat07@gmail.com",
  phone: "+8801846281071",
  whatsAppNumber: "8801846281071",
  socials: {
    github: "https://github.com/Rakibul-Dark-Devil007",
    linkedin: "https://www.linkedin.com/in/rakibul-islam-refat-884833388",
    googleForm: "https://forms.gle/aK1FAcoLKAPxQn9m7",
  },
  /**
   * Helper function to build a click-to-chat WhatsApp link
   * Official WhatsApp link schema: https://wa.me/<number>?text=<url-encoded-text>
   */
  getWhatsAppUrl: (customMessage?: string) => {
    const defaultMsg =
      "Hello Rakibul, I visited your portfolio and would like to discuss a project with you.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/8801846281071?text=${text}`;
  },
};
