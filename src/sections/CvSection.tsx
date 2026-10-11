import React from 'react';
import { FileText, Download, Eye, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/site';

interface CvSectionProps {
  onOpenCvModal: () => void;
}

export const CvSection: React.FC<CvSectionProps> = ({ onOpenCvModal }) => {
  return (
    <section id="cv" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CV Showcase Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-dark-surface via-dark-elevated to-dark-surface border border-brand-accent/40 p-8 sm:p-12 shadow-2xl overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-accent/15 border border-brand-accent/30 text-brand-accent mb-4">
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Review My Full Professional Qualifications
              </h2>

              <p className="text-dark-muted text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                Download or preview my latest Curriculum Vitae detailing academic credentials from AIUB (CGPA 3.65), software developer internship experience, Cisco networking certification, and published research.
              </p>

              {/* CV Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-lg">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>B.Sc. CSE (AIUB, CGPA 3.65)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Junior Developer Internship</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>6G & ML Research Papers</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Founder • Nest Tech Solution</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onOpenCvModal}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 text-black hover:opacity-95 shadow-glow-cyan transition-all transform hover:-translate-y-0.5"
                >
                  <Eye className="w-4 h-4" />
                  <span>View CV Online</span>
                </button>

                <a
                  href={siteConfig.cvPdfPath}
                  download="MD-Rakibul-Islam-CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-dark-surface border border-brand-accent/40 text-brand-accent hover:bg-brand-accent/10 transition-all transform hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF Document</span>
                </a>
              </div>
            </div>

            {/* Right Decorative CV Document Preview Mockup */}
            <div className="lg:col-span-4 flex justify-center">
              <div
                onClick={onOpenCvModal}
                className="w-48 sm:w-56 aspect-[1/1.4] rounded-xl bg-white/5 border border-white/20 p-4 shadow-2xl backdrop-blur-md flex flex-col justify-between cursor-pointer hover:scale-105 transition-transform group"
                title="Click to preview CV"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="w-6 h-6 rounded bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                    <FileText className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] text-white/50 font-mono">2-PAGE PDF</span>
                </div>

                <div className="space-y-2 py-4">
                  <div className="h-2 w-3/4 bg-white/20 rounded" />
                  <div className="h-1.5 w-full bg-white/10 rounded" />
                  <div className="h-1.5 w-5/6 bg-white/10 rounded" />
                  <div className="h-1.5 w-2/3 bg-white/10 rounded" />
                  <div className="h-1.5 w-4/5 bg-white/10 rounded" />
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-center text-xs text-brand-accent font-semibold group-hover:underline">
                  <span>Click to Expand</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
