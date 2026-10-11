import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.article
      className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col h-full border border-dark-border"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Project Screenshot Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-dark-surface border-b border-dark-border group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-dark-bg/85 backdrop-blur-md border border-dark-border/80 px-2.5 py-1 rounded-md text-[11px] font-semibold text-brand-accent flex items-center gap-1 shadow-sm">
          <Layers className="w-3 h-3" />
          <span>{project.category}</span>
        </div>

        {/* Quick hover overlay with links if available */}
        <div className="absolute inset-0 bg-dark-bg/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-surface/90 border border-brand-accent/50 text-white hover:bg-brand-accent hover:text-black transition-all"
              title="View GitHub Repository"
              aria-label={`View GitHub Repository for ${project.title}`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-brand-accent text-dark-bg font-bold hover:opacity-90 transition-all"
              title="View Live Demo"
              aria-label={`View Live Demo for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white mb-2 leading-snug tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-dark-muted leading-relaxed mb-5">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[11px] font-medium bg-dark-elevated text-slate-300 border border-dark-border/60"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links & CTA footer */}
          <div className="flex items-center justify-between pt-4 border-t border-dark-border/60 text-xs">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-accent font-semibold hover:underline"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Source</span>
              </a>
            ) : (
              <span className="text-dark-muted text-[11px] font-medium">
                Verified Showcase
              </span>
            )}

            {project.liveDemoUrl ? (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-400 font-semibold hover:underline"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <span className="text-[11px] text-dark-muted/70">
                Portfolio Item
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};
