import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ShieldCheck, Database, Palette, Wrench } from 'lucide-react';
import { skillCategories } from '../data/skills';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-rose-400" />;
      default:
        return <Wrench className="w-5 h-5 text-brand-accent" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-accent/10 border border-brand-accent/30 text-brand-accent mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Skills & Expertise
          </h2>
          <p className="mt-3 text-sm sm:text-base text-dark-muted">
            Ground truth engineering stack organized across software, networking, security, and interface design.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-dark-elevated border border-dark-border">
                    {getIcon(category.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-dark-muted leading-relaxed mb-6">
                  {category.description}
                </p>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-dark-border/60">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2.5 py-1 text-xs font-medium rounded-lg bg-dark-elevated/90 border border-dark-border text-slate-200 hover:border-brand-accent/40 hover:text-brand-accent transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
