import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/site';
import { companyConfig } from '../config/company';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-bg border-t border-dark-border py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-dark-border/60">
          
          {/* Brand & Venture */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <img
                src={siteConfig.logo}
                alt="MRI Logo"
                className="w-7 h-7 object-contain rounded"
              />
              <span className="font-extrabold text-white text-base">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs text-dark-muted max-w-sm">
              Owner & Founder at{' '}
              <span className="text-slate-300 font-medium">
                {companyConfig.name}
              </span>
              . Building secure, accessible, and high-performance digital solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-surface border border-dark-border text-dark-muted hover:text-white hover:border-brand-accent transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-surface border border-dark-border text-dark-muted hover:text-white hover:border-brand-accent transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-surface border border-dark-border text-emerald-400 hover:border-emerald-500 transition-all"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-2.5 rounded-xl bg-dark-surface border border-dark-border text-cyan-400 hover:border-cyan-500 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-surface border border-dark-border text-xs font-semibold text-dark-muted hover:text-white hover:border-brand-accent transition-all"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Legal & Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-dark-muted gap-4 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Engineered with React, TypeScript, Tailwind CSS & Motion. Hosted statically on GitHub Pages.
          </p>
        </div>
      </div>
    </footer>
  );
};
