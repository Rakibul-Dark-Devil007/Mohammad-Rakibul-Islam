import React, { useState } from 'react';
import { Briefcase, Github, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { siteConfig } from '../config/site';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Web', 'UI/UX', 'Game', 'Academic'];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Project Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Works & Implementations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-dark-muted max-w-xl">
              Real projects including client web applications, UI/UX design prototypes in Figma, and interactive experiments.
            </p>
          </div>

          {/* GitHub Profile quick access */}
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-xs font-semibold text-white hover:border-brand-accent transition-all shrink-0"
          >
            <Github className="w-4 h-4 text-brand-accent" />
            <span>More on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-dark-muted" />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-brand-accent text-dark-bg shadow-sm font-bold'
                  : 'bg-dark-surface border border-dark-border text-dark-muted hover:text-white hover:bg-dark-elevated'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};
