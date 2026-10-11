import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ExternalLink, Briefcase } from 'lucide-react';
import { siteConfig } from '../config/site';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'My Company', href: '#founder', highlight: true },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  // Track scroll position to add backdrop shadow and update active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section calculation
      const sections = ['home', 'about', 'founder', 'skills', 'projects', 'services', 'education', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg/85 backdrop-blur-md border-b border-dark-border/80 shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo and Name */}
        <a
          href="#home"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-lg p-1"
          aria-label="Rakibul Islam Portfolio Home"
        >
          <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-brand-accent/40 bg-dark-surface flex items-center justify-center shadow-glow-cyan transition-transform group-hover:scale-105">
            <img
              src={siteConfig.logo}
              alt="MRI Logo"
              className="w-full h-full object-contain p-0.5"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-white group-hover:text-brand-accent transition-colors">
              MD Rakibul Islam
            </span>
            <span className="text-[10px] text-brand-accent/80 font-medium tracking-wider uppercase">
              Founder • Nest Tech
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-dark-surface/60 border border-dark-border/60 backdrop-blur-md px-3 py-1.5 rounded-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-accent text-dark-bg font-semibold shadow-sm'
                    : link.highlight
                    ? 'text-brand-accent hover:text-white hover:bg-brand-accent/15 flex items-center gap-1 font-semibold'
                    : 'text-dark-muted hover:text-white hover:bg-white/5'
                }`}
              >
                {link.highlight && <Briefcase className="w-3 h-3 inline-block" />}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions (CV View / Download) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCvModal}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-dark-surface border border-brand-accent/40 text-brand-accent hover:bg-brand-accent hover:text-black transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-accent"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View CV</span>
          </button>
          <a
            href={siteConfig.getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-black transition-all"
          >
            <span>WhatsApp</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg bg-dark-surface border border-dark-border text-dark-muted hover:text-white hover:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5 text-brand-accent" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 bg-dark-surface border border-dark-border rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-brand-accent text-dark-bg font-bold'
                      : link.highlight
                      ? 'text-brand-accent font-semibold bg-brand-accent/10'
                      : 'text-dark-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.highlight && <Briefcase className="w-4 h-4 inline mr-2 text-brand-accent" />}
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-dark-border flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenCvModal();
                }}
                className="w-full py-2.5 px-3 rounded-xl bg-dark-elevated border border-brand-accent/40 text-brand-accent font-semibold text-xs flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                View & Download CV
              </button>
              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-500 text-black font-bold text-xs flex items-center justify-center gap-2"
              >
                Chat on WhatsApp
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
