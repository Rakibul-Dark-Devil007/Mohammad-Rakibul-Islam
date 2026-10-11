import React from 'react';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { siteConfig } from '../config/site';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div className="relative w-full max-w-4xl h-[90vh] bg-dark-surface border border-dark-border rounded-2xl flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-dark-border bg-dark-elevated/60">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-brand-accent/15 text-brand-accent">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 id="cv-modal-title" className="text-sm sm:text-base font-bold text-white leading-tight">
                Curriculum Vitae — {siteConfig.name}
              </h2>
              <p className="text-xs text-dark-muted">Official Document • PDF</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.cvPdfPath}
              download="MD-Rakibul-Islam-CV.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-brand-accent text-dark-bg hover:opacity-90 transition-opacity"
              title="Download CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>
            <a
              href={siteConfig.cvPdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-dark-muted hover:text-white hover:bg-white/5 transition-colors"
              title="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-dark-muted hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 w-full bg-dark-bg relative">
          <iframe
            src={`${siteConfig.cvPdfPath}#toolbar=1&navpanes=0`}
            title={`CV of ${siteConfig.name}`}
            className="w-full h-full border-none"
          />
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-2.5 border-t border-dark-border bg-dark-surface flex items-center justify-between text-xs text-dark-muted">
          <span>Trouble viewing? Use the download button to save the file.</span>
          <button
            onClick={onClose}
            className="text-brand-accent hover:underline font-medium"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
