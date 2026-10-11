# MD Rakibul Islam — Personal Portfolio & Company Website

> **Owner & Founder:** MD Rakibul Islam  
> **Company:** Nest Tech Solution and Consultant  
> **Location:** Bangladesh  
> **Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Motion (Framer Motion), Lucide React  

---

## 📖 Overview / পরিচিতি

This repository contains the complete, modernized, responsive, and animated personal portfolio and entrepreneurial showcase of **MD Rakibul Islam**. It highlights his academic background in Computer Science & Engineering (AIUB), Cisco network security training, web development projects, and his technology venture **Nest Tech Solution and Consultant**.

---

## 🚀 Quick Start / লোকাল সেটআপ ও চালানো

### Prerequisites:
- Node.js (v18 or newer recommended, v20/v22/v24 tested)
- npm or pnpm or yarn

### 1. Install Dependencies:
```bash
npm install
```

### 2. Start Development Server:
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port displayed in the console).

### 3. Build for Production:
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory.

### 4. Preview Production Build:
```bash
npm run preview
```

---

## 📁 Project Structure / ফোল্ডার বিন্যাস

```text
├── public/
│   ├── assets/
│   │   ├── Rakibul.png             # Official profile photograph
│   │   ├── MRI.png                 # Personal monogram logo
│   │   └── projects/               # Project screenshots
│   │       ├── interior.png
│   │       ├── real-estate.png
│   │       ├── tic-tac.png
│   │       └── petcare.png
│   ├── documents/
│   │   └── MD-Rakibul-Islam-CV.pdf # Verified CV document (PDF)
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/                 # Reusable UI components
│   │   ├── Navbar.tsx              # Sticky nav with mobile drawer & quick actions
│   │   ├── Footer.tsx              # Footer with copyright & social links
│   │   ├── ProjectCard.tsx         # Responsive project showcase card
│   │   ├── ServiceCard.tsx         # Service offering card with WhatsApp CTA
│   │   └── PdfModal.tsx            # In-browser CV viewer & downloader modal
│   ├── sections/                   # Core portfolio sections
│   │   ├── HeroSection.tsx         # Animated photo & primary calls to action
│   │   ├── AboutSection.tsx        # Bio, AIUB CSE, networking & personal interests
│   │   ├── FounderSection.tsx      # Nest Tech Solution and Consultant showcase
│   │   ├── SkillsSection.tsx       # Categorized skills (Web, Security, DB, UI)
│   │   ├── ProjectsSection.tsx     # Filterable projects grid
│   │   ├── ServicesSection.tsx     # Client services (Web, UI/UX, Game Dev)
│   │   ├── EducationSection.tsx    # Academic journey & Cisco certification
│   │   ├── CvSection.tsx           # CV preview & download banner
│   │   └── ContactSection.tsx      # WhatsApp composer, email, phone & Google Form
│   ├── config/                     # Central configuration files
│   │   ├── site.ts                 # Personal identity, phone, email, WhatsApp, socials
│   │   └── company.ts              # Nest Tech Solution info, website URL & services
│   ├── data/                       # Ground truth data files
│   │   ├── projects.ts             # Project list, tags, screenshots, links
│   │   ├── skills.ts               # Categorized skills list
│   │   ├── services.ts             # Services information
│   │   └── education.ts            # Timeline entries (Education, experience)
│   ├── App.tsx                     # Main layout mounting all sections
│   ├── index.css                   # Tailwind CSS & custom styling
│   └── main.tsx                    # React application entry point
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ How to Customize & Maintain / কীভাবে তথ্য আপডেট করবেন

### 1. How to Change Personal Details, Phone, Email & WhatsApp:
Open `src/config/site.ts`:
- Update `name`, `title`, `location`, `email`, or `phone`.
- Update `whatsAppNumber` (use international digits only without `+`, e.g. `8801846281071`).
- Social links: Update `github`, `linkedin`, or `googleForm`.

### 2. How to Update Company Information (Nest Tech Solution):
Open `src/config/company.ts`:
- Change `officialWebsiteUrl` to your live domain (e.g. `https://nesttechbd.com`).
- Toggle `isWebsiteLive: true` once the domain is live.
- Update `tagline`, `description`, or `servicesOffered`.

### 3. How to Replace Your Profile Photograph:
Place your new photo in `public/assets/` and either:
1. Name it `Rakibul.png` to replace the existing one automatically, or
2. Update the filename in `src/config/site.ts`: `avatar: "./assets/your-new-image.png"`.

### 4. How to Update Your CV / Resume:
Place your new PDF in `public/documents/` and name it `MD-Rakibul-Islam-CV.pdf`.

### 5. How to Add a New Project:
Open `src/data/projects.ts` and add an entry:
```typescript
{
  id: "my-new-project",
  title: "New Project Name",
  description: "Brief summary of what this project does.",
  image: "./assets/projects/my-screenshot.png",
  tags: ["React", "TypeScript", "Tailwind CSS"],
  githubUrl: "https://github.com/Rakibul-Dark-Devil007/my-repo",
  liveDemoUrl: "https://my-demo-link.com",
  category: "Web", // "Web" | "UI/UX" | "Game" | "Academic"
  featured: true,
}
```

---

## 🚢 Deployment to GitHub Pages / গিটহাবে ডিপ্লয়মেন্ট

This project is built with `base: './'` in `vite.config.ts`, ensuring it works perfectly on `https://rakibul-dark-devil007.github.io/MD-Rakibul-Islam/` without asset path breakages.

### Deploy Steps:
1. Build the production bundle:
   ```bash
   npm run build
   ```
2. Commit and push the project to GitHub:
   ```bash
   git add .
   git commit -m "Complete portfolio rebuild with Nest Tech Founder section"
   git push origin main
   ```
3. Configure GitHub Pages:
   - Go to your repository settings on GitHub: **Settings > Pages**.
   - Under **Build and deployment**, select **GitHub Actions** (recommended) or choose the `gh-pages` branch.
