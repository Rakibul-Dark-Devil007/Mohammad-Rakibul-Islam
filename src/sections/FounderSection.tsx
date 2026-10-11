import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  ArrowUpRight,
  Server,
  Layers,
} from 'lucide-react';
import { companyConfig } from '../config/company';
import { siteConfig } from '../config/site';

export const FounderSection: React.FC = () => {
  return (
    <section
      id="founder"
      className="relative py-28 bg-gradient-to-b from-dark-bg via-dark-surface/40 to-dark-bg border-y border-dark-border/60 overflow-hidden"
    >
      {/* Decorative background grid and lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-amber-500/15 to-brand-accent/15 border border-amber-500/30 text-amber-400 mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Entrepreneurial Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Founder & Owner at <br />
            <span className="text-gradient-cyan">{companyConfig.name}</span>
          </h2>
          <p className="mt-4 text-base text-dark-muted leading-relaxed">
            Leading an independent technology firm dedicated to bridging software engineering,
            robust IT network infrastructure, and high-impact digital solutions.
          </p>
        </div>

        {/* Central Company Profile Showcase Card */}
        <motion.div
          className="relative rounded-3xl bg-dark-surface/90 border border-brand-accent/30 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Top highlight bar */}
          <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Brand Emblem & Founder Bio */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-dark-elevated to-dark-surface border border-brand-accent/40 flex items-center justify-center p-3 shadow-glow-cyan">
                  <Building2 className="w-8 h-8 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {companyConfig.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      <Briefcase className="w-3 h-3" />
                      {companyConfig.designation}
                    </span>
                    <span className="text-xs text-dark-muted font-medium">
                      Founded by {siteConfig.name}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-dark-muted text-base leading-relaxed mb-6">
                {companyConfig.description}
              </p>

              {/* Company Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {companyConfig.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-300">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={companyConfig.officialWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 text-black hover:opacity-95 shadow-glow-cyan transition-all transform hover:-translate-y-0.5"
                >
                  <span>Visit Official Company Website</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.getWhatsAppUrl(
                    `Hello Rakibul, I would like to inquire about business services from ${companyConfig.name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-dark-elevated border border-brand-accent/40 text-brand-accent hover:bg-brand-accent/10 transition-all"
                >
                  <span>Inquire via WhatsApp</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Key Offerings Preview */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-dark-muted mb-1">
                Company Service Verticals
              </h4>

              {companyConfig.servicesOffered.map((service, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-dark-elevated/70 border border-dark-border/80 hover:border-brand-accent/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-brand-accent/10 text-brand-accent">
                      {idx === 0 ? (
                        <Layers className="w-4 h-4" />
                      ) : idx === 1 ? (
                        <ShieldCheck className="w-4 h-4" />
                      ) : (
                        <Server className="w-4 h-4" />
                      )}
                    </div>
                    <h5 className="font-semibold text-sm text-white">
                      {service.title}
                    </h5>
                  </div>
                  <p className="text-xs text-dark-muted leading-relaxed pl-9">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
