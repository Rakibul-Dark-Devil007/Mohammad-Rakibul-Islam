import React, { useState } from 'react';
import { Mail, Phone, ExternalLink, Send, MapPin, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/site';

export const ContactSection: React.FC = () => {
  const [customMsg, setCustomMsg] = useState(
    'Hello Rakibul, I visited your portfolio and would like to discuss a project with you.'
  );

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const url = siteConfig.getWhatsAppUrl(customMsg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-24 relative bg-dark-surface/40 border-t border-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="mt-3 text-sm sm:text-base text-dark-muted">
            Have a project in mind, need IT security consulting, or want to explore collaboration with Nest Tech? Connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* WhatsApp Direct Card */}
            <a
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover rounded-2xl p-6 border-l-4 border-l-emerald-500 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                    Instant Chat
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    WhatsApp Direct
                  </h3>
                  <p className="text-xs text-dark-muted mt-0.5">
                    +{siteConfig.whatsAppNumber}
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-dark-muted group-hover:text-emerald-400 transition-colors" />
            </a>

            {/* Email Card (With Mailto) */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="glass-card glass-card-hover rounded-2xl p-6 border-l-4 border-l-brand-accent flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400">
                    Official Email
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Send an Email
                  </h3>
                  <p className="text-xs text-dark-muted mt-0.5 break-all">
                    {siteConfig.email}
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-dark-muted group-hover:text-cyan-400 transition-colors" />
            </a>

            {/* Phone Card (With Tel) */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="glass-card glass-card-hover rounded-2xl p-6 border-l-4 border-l-indigo-500 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-400">
                    Direct Call
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                    Phone Inquiries
                  </h3>
                  <p className="text-xs text-dark-muted mt-0.5">
                    {siteConfig.phone}
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-dark-muted group-hover:text-indigo-400 transition-colors" />
            </a>

            {/* Location & Response Note */}
            <div className="glass-card rounded-2xl p-5 flex items-center gap-3 text-xs text-dark-muted">
              <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Based in {siteConfig.location} • Usually responds within a few hours.</span>
            </div>

            {/* Google Form Link */}
            <div className="glass-card rounded-2xl p-5">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                Prefer Google Forms?
              </h4>
              <p className="text-xs text-dark-muted mb-3">
                You can also fill out my formal project inquiry form.
              </p>
              <a
                href={siteConfig.socials.googleForm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-brand-accent hover:underline"
              >
                <span>Open Google Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive WhatsApp Direct Message Composer */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-dark-border">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-dark-border/60">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Direct WhatsApp Message Composer
                  </h3>
                  <p className="text-xs text-dark-muted mt-0.5">
                    Type your message below to immediately initiate a chat on WhatsApp with pre-filled text.
                  </p>
                </div>
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              <form onSubmit={handleWhatsAppSend} className="space-y-4">
                <div>
                  <label htmlFor="wa-message" className="block text-xs font-semibold text-slate-300 mb-2">
                    Message Preview / Custom Message
                  </label>
                  <textarea
                    id="wa-message"
                    rows={4}
                    value={customMsg}
                    onChange={(e) => setCustomMsg(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-elevated border border-dark-border text-white placeholder-dark-muted focus:border-brand-accent focus:ring-1 focus:ring-brand-accent focus:outline-none text-sm leading-relaxed resize-none"
                    placeholder="Enter your message here..."
                  />
                </div>

                {/* Quick Presets */}
                <div>
                  <span className="text-[11px] font-semibold text-dark-muted uppercase tracking-wider block mb-2">
                    Quick message presets:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setCustomMsg(
                          'Hello Rakibul, I would like to discuss building a website for my business.'
                        )
                      }
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-dark-elevated hover:bg-dark-border text-slate-300 transition-colors"
                    >
                      Web Development
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setCustomMsg(
                          'Hello Rakibul, I need an IT and Network Security consultation.'
                        )
                      }
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-dark-elevated hover:bg-dark-border text-slate-300 transition-colors"
                    >
                      Security Consulting
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setCustomMsg(
                          'Hello Rakibul, I am interested in enterprise services from Nest Tech Solution.'
                        )
                      }
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-dark-elevated hover:bg-dark-border text-slate-300 transition-colors"
                    >
                      Nest Tech Partnership
                    </button>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm bg-emerald-500 hover:bg-emerald-400 text-black shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Start WhatsApp Conversation</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[11px] text-dark-muted/80 text-center mt-3">
                    Clicking will securely open WhatsApp Web or the WhatsApp App with this message pre-filled. You will send it manually.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
