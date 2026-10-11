import React from 'react';
import { Sparkles } from 'lucide-react';
import { servicesData } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-dark-surface/30 border-y border-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Service Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Solutions Tailored for Growth
          </h2>
          <p className="mt-3 text-sm sm:text-base text-dark-muted">
            Specialized engineering and design services for startups, agencies, and businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};
