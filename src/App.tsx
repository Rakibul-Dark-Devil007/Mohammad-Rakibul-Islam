import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PdfModal } from './components/PdfModal';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { FounderSection } from './sections/FounderSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ServicesSection } from './sections/ServicesSection';
import { EducationSection } from './sections/EducationSection';
import { CvSection } from './sections/CvSection';
import { ContactSection } from './sections/ContactSection';

export const App: React.FC = () => {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-dark-bg text-dark-light">
      {/* Top Navigation */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <HeroSection onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 2. About Me Section */}
        <AboutSection />

        {/* 3. Founder & Owner - Nest Tech Solution and Consultant */}
        <FounderSection />

        {/* 4. Categorized Skills Section */}
        <SkillsSection />

        {/* 5. Projects Showcase Section */}
        <ProjectsSection />

        {/* 6. Services Section */}
        <ServicesSection />

        {/* 7. Education & Experience Timeline */}
        <EducationSection />

        {/* 8. CV Download & Inline Viewing Section */}
        <CvSection onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* 9. WhatsApp & Direct Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen CV Viewer Modal */}
      <PdfModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
};

export default App;
