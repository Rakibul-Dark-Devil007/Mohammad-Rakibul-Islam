import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { educationAndExperienceData } from '../data/education';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Verified Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-dark-muted">
            Formal qualifications, technical training milestones, and venture leadership.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-dark-border/80 ml-4 sm:ml-8 space-y-10">
          {educationAndExperienceData.map((item, idx) => (
            <motion.div
              key={item.id}
              className="relative pl-6 sm:pl-8 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Timeline marker node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-dark-surface border-2 border-brand-accent/50 group-hover:border-brand-accent flex items-center justify-center transition-all shadow-glow-cyan">
                {item.type === 'experience' ? (
                  <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                ) : item.type === 'certification' ? (
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                )}
              </div>

              {/* Timeline Card */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-dark-border">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    {item.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-brand-accent/15 text-brand-accent border border-brand-accent/30">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-dark-muted">
                    <Calendar className="w-3.5 h-3.5 text-brand-accent" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h4 className="text-sm font-semibold text-brand-accent mb-3">
                  {item.organization}
                </h4>

                <p className="text-xs sm:text-sm text-dark-muted leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-1.5 pt-3 border-t border-dark-border/60">
                    {item.highlights.map((point, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
