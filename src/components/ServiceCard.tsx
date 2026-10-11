import React from 'react';
import { motion } from 'framer-motion';
import { Layout, PenTool, Gamepad2, ArrowRight, Check } from 'lucide-react';
import { ServiceItem } from '../data/services';
import { siteConfig } from '../config/site';

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6 text-cyan-400" />;
      case 'PenTool':
        return <PenTool className="w-6 h-6 text-indigo-400" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-6 h-6 text-emerald-400" />;
      default:
        return <Layout className="w-6 h-6 text-brand-accent" />;
    }
  };

  const whatsappMessage = `Hello Rakibul, I am interested in discussing a project for ${service.title}.`;

  return (
    <motion.div
      className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between border border-dark-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-dark-elevated border border-dark-border flex items-center justify-center mb-6">
          {getIcon(service.iconName)}
        </div>

        <h3 className="text-xl font-bold text-white mb-1.5 tracking-tight">
          {service.title}
        </h3>
        <p className="text-xs text-brand-accent font-medium mb-4">
          {service.subtitle}
        </p>

        <p className="text-sm text-dark-muted leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Feature List */}
        <div className="space-y-2 mb-8 pt-4 border-t border-dark-border/60">
          {service.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
              <Check className="w-3.5 h-3.5 text-brand-accent shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button: WhatsApp Inquiry for this exact service */}
      <a
        href={siteConfig.getWhatsAppUrl(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold bg-dark-elevated border border-brand-accent/30 text-white hover:bg-brand-accent hover:text-black transition-all group"
      >
        <span>Request Service via WhatsApp</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
};
