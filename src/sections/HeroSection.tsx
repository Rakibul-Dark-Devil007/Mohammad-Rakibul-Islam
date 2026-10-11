import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  ArrowRight,
  Github,
  Linkedin,
  MapPin,
  Shield,
  Code2,
  ExternalLink,
} from 'lucide-react';
import { siteConfig } from '../config/site';

interface HeroSectionProps {
  onOpenCvModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCvModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-primary/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-brand-accent/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-accent/10 border border-brand-accent/30 text-brand-accent">
                <Shield className="w-3.5 h-3.5" />
                Network Security & Web Architecture
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-dark-surface border border-dark-border text-dark-muted">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                {siteConfig.location}
              </span>
            </div>

            {/* Greeting & Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
              Hi, I'm <br />
              <span className="text-gradient-cyan">{siteConfig.name}</span>
            </h1>

            <p className="text-base sm:text-lg text-dark-muted font-normal max-w-2xl leading-relaxed mb-4">
              Owner & Founder at <span className="text-white font-semibold">Nest Tech Solution and Consultant</span>. 
              Computer Science & Engineering graduate specializing in network defense, cybersecurity, and high-performance web development.
            </p>

            <p className="text-xs sm:text-sm text-dark-muted/80 mb-8 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-brand-accent" />
              <span>UI/UX Design • Full-Stack Development • Cisco Certified Networking</span>
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 text-black hover:opacity-95 shadow-glow-cyan transition-all transform hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-dark-surface border border-brand-accent/40 text-brand-accent hover:bg-brand-accent/10 transition-all transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download CV</span>
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-dark-surface border border-dark-border text-white hover:border-dark-muted transition-all"
              >
                Contact Me
              </a>
            </div>

            {/* Verified Quick Links */}
            <div className="flex items-center gap-4 pt-6 border-t border-dark-border/80 w-full">
              <span className="text-xs font-semibold text-dark-muted uppercase tracking-wider">
                Connect:
              </span>
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-surface border border-dark-border text-dark-muted hover:text-white hover:border-brand-accent transition-all"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-surface border border-dark-border text-dark-muted hover:text-white hover:border-brand-accent transition-all"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/20 transition-all"
                title="WhatsApp Direct Chat"
              >
                <span>WhatsApp</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Photo with Animated Glow & Border */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="relative w-72 sm:w-80 md:w-96 group">
              {/* Animated background gradient halo */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-brand-accent via-indigo-500 to-cyan-400 opacity-40 blur-xl group-hover:opacity-75 transition duration-1000 group-hover:duration-300 animate-pulse-glow" />

              {/* Main photo frame card with subtle float */}
              <motion.div
                className="relative rounded-2xl p-2 bg-dark-surface border border-brand-accent/30 shadow-2xl overflow-hidden"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
              >
                <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-dark-bg">
                  <img
                    src={siteConfig.avatar}
                    alt="MD Rakibul Islam - Founder of Nest Tech Solution"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle inner gradient shadow at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-dark-bg/90 via-dark-bg/40 to-transparent flex flex-col justify-end p-4">
                    <span className="text-white font-bold text-sm tracking-wide">
                      MD Rakibul Islam
                    </span>
                    <span className="text-xs text-brand-accent font-medium">
                      Owner & Founder • Nest Tech Solution
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Verified Status Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-dark-elevated/90 border border-brand-accent/40 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-white">
                  Available for Consultations
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
