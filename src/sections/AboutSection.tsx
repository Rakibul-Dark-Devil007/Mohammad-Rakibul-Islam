import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Compass, Award, Shield, Cpu, Code } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-primary/10 border border-brand-primary/30 text-brand-primary mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designer-Developer Focused on <br />
            <span className="text-gradient-cyan">Security & Seamless UX</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story & Philosophy */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-4">
                Engineering with Precision & Aesthetic Purpose
              </h3>
              
              <p className="text-dark-muted text-sm sm:text-base leading-relaxed mb-4">
                I am <strong className="text-white">MD Rakibul Islam</strong>, a Computer Science & Engineering graduate from{' '}
                <span className="text-brand-accent">American International University-Bangladesh (AIUB)</span>, where I specialized in{' '}
                <strong className="text-white">Computer Networking and Network Security</strong>.
              </p>

              <p className="text-dark-muted text-sm sm:text-base leading-relaxed mb-4">
                My engineering passion lies at the intersection of solid infrastructure and human-centered design. I believe software must not only look clean and intuitive, but also stand on resilient, secure foundations. From configuring routing, switching, and VPN tunnels to engineering pixel-perfect web interfaces with modern frontend tooling, I focus on delivering end-to-end reliability.
              </p>

              <p className="text-dark-muted text-sm sm:text-base leading-relaxed">
                As the Owner and Founder of <strong className="text-white">Nest Tech Solution and Consultant</strong>, I collaborate with clients to translate business objectives into functional digital systems, providing transparent advisory and modern web execution.
              </p>
            </div>

            {/* Verified Personal Interests & Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-4 flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-indigo-500/15 text-indigo-400 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Avid Reader</h4>
                  <p className="text-xs text-dark-muted mt-1 leading-relaxed">
                    Passionate about lifelong learning with a personal collection of 300+ books on technology, leadership, and personal growth.
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-cyan-500/15 text-cyan-400 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Exploration & Travel</h4>
                  <p className="text-xs text-dark-muted mt-1 leading-relaxed">
                    Curious traveler documented through photography, constantly seeking fresh perspectives that inform creative design.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Verified Pillars & Quick Highlights */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-brand-accent">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5 text-brand-accent" />
                <h4 className="font-bold text-white text-base">Network Security Mindset</h4>
              </div>
              <p className="text-xs sm:text-sm text-dark-muted leading-relaxed">
                Trained in TCP/IP, VLANs, subnetting, firewall concepts, and VPN security architectures with Cisco Packet Tracer.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-indigo-500">
              <div className="flex items-center gap-3 mb-2">
                <Code className="w-5 h-5 text-indigo-400" />
                <h4 className="font-bold text-white text-base">Modern Web Engineering</h4>
              </div>
              <p className="text-xs sm:text-sm text-dark-muted leading-relaxed">
                Building responsive interfaces with React, JavaScript, TypeScript, Tailwind CSS, and WordPress CMS.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-amber-500">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-amber-400" />
                <h4 className="font-bold text-white text-base">Formal Education (AIUB)</h4>
              </div>
              <p className="text-xs sm:text-sm text-dark-muted leading-relaxed">
                B.Sc. in Computer Science & Engineering graduate (Class of 2025) with Cisco academic course certification.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 border-l-4 border-l-emerald-500">
              <div className="flex items-center gap-3 mb-2">
                <Cpu className="w-5 h-5 text-emerald-400" />
                <h4 className="font-bold text-white text-base">Languages & Communication</h4>
              </div>
              <div className="flex gap-2 mt-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-dark-surface border border-dark-border text-emerald-400">
                  Bangla (Native / Fluent)
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-dark-surface border border-dark-border text-slate-200">
                  English (Fluent)
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
