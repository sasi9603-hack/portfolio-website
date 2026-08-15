'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Mail, MapPin, ExternalLink } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="w-full min-h-screen py-16 px-6 md:px-12 max-w-5xl mx-auto flex flex-col items-center">
      
      {/* Header */}
      <div className="w-full text-center md:text-left space-y-4 mb-16">
        <div className="font-mono text-xs uppercase tracking-[0.3em] font-semibold text-[#C05800] flex items-center justify-center md:justify-start space-x-2">
          <Sparkles size={12} />
          <span>04 / Contact</span>
        </div>
        <h1 className="font-heading text-4xl md:text-7xl font-black tracking-tight text-gradient">
          INITIATE <br />
          <span className="text-gradient-purple italic font-serif">CONNECTION</span>
        </h1>
        <p className="font-sans text-[#FDFBD4]/75 text-base md:text-lg max-w-2xl leading-relaxed">
          Have a project inquiry, research proposal, or technical collaboration? Send a transmission to initiate contact.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
        
        {/* Form Column */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-8 md:p-12 border border-[#FDFBD4]/15 relative overflow-hidden font-sans">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1.5">
              <label className="font-mono text-[10px] text-[#FDFBD4]/50 uppercase tracking-widest font-bold">Identity / Name</label>
              <input
                type="text"
                required
                placeholder="e.g. John Doe"
                className="w-full px-5 py-3.5 rounded-xl bg-[#FDFBD4]/[0.04] border border-[#FDFBD4]/15 hover:border-[#C05800] focus:border-[#C05800] outline-none text-sm transition-colors font-medium text-[#FDFBD4] placeholder:text-[#FDFBD4]/30"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-[10px] text-[#FDFBD4]/50 uppercase tracking-widest font-bold">Spatial Vector / Email</label>
              <input
                type="email"
                required
                placeholder="e.g. john@example.com"
                className="w-full px-5 py-3.5 rounded-xl bg-[#FDFBD4]/[0.04] border border-[#FDFBD4]/15 hover:border-[#C05800] focus:border-[#C05800] outline-none text-sm transition-colors font-medium text-[#FDFBD4] placeholder:text-[#FDFBD4]/30"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-mono text-[10px] text-[#FDFBD4]/50 uppercase tracking-widest font-bold">Transmission / Message</label>
              <textarea
                rows={5}
                required
                placeholder="Describe your project or message details..."
                className="w-full px-5 py-3.5 rounded-xl bg-[#FDFBD4]/[0.04] border border-[#FDFBD4]/15 hover:border-[#C05800] focus:border-[#C05800] outline-none text-sm transition-colors font-medium text-[#FDFBD4] placeholder:text-[#FDFBD4]/30 resize-none"
              />
            </div>

            <MagneticButton className="w-full">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C05800] to-[#713600] hover:from-[#d16200] hover:to-[#854000] text-[#FDFBD4] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#C05800]/30 flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={14} />
              </button>
            </MagneticButton>
          </form>

          {/* Status Toast */}
          <AnimatePresence>
            {formSubmitted && (
              <motion.div
                className="mt-4 bg-[#C05800]/20 border border-[#C05800]/40 p-4 rounded-xl text-center font-mono text-xs font-bold text-[#FDFBD4]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                Transmission Sent Successfully! I will respond shortly.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-[#FDFBD4]/15 space-y-6">
            <h3 className="font-heading text-xl font-bold text-[#FDFBD4]">Direct Channels</h3>
            
            <div className="space-y-4 font-sans">
              <a href="mailto:sasidharreddy3568@gmail.com" className="flex items-center space-x-4 p-4 rounded-2xl bg-[#FDFBD4]/[0.03] border border-[#FDFBD4]/10 hover:border-[#C05800]/40 transition-colors group">
                <div className="w-10 h-10 rounded-xl bg-[#C05800]/20 border border-[#C05800]/40 flex items-center justify-center text-[#FDFBD4] shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#FDFBD4]/50 font-bold uppercase tracking-wider">Email Address</div>
                  <div className="text-xs text-[#FDFBD4] group-hover:text-[#C05800] font-bold transition-colors">sasidharreddy3568@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 rounded-2xl bg-[#FDFBD4]/[0.03] border border-[#FDFBD4]/10">
                <div className="w-10 h-10 rounded-xl bg-[#713600]/30 border border-[#713600]/50 flex items-center justify-center text-[#FDFBD4] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[#FDFBD4]/50 font-bold uppercase tracking-wider">Location</div>
                  <div className="text-xs text-[#FDFBD4] font-bold">Pulivendla, Andhra Pradesh, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-[#FDFBD4]/15 space-y-4">
            <h3 className="font-mono text-xs font-bold text-[#FDFBD4] uppercase tracking-wider">Connect Profiles</h3>
            <div className="grid grid-cols-2 gap-4 font-sans text-xs">
              <a
                href="https://github.com/sasi9603-hack"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#FDFBD4]/[0.03] border border-[#FDFBD4]/10 hover:border-[#C05800]/40 flex items-center justify-between text-[#FDFBD4] font-bold transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink size={12} />
              </a>

              <a
                href="https://www.linkedin.com/in/sasidharreddy-vennapusa-6b70b6370"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#FDFBD4]/[0.03] border border-[#FDFBD4]/10 hover:border-[#C05800]/40 flex items-center justify-between text-[#FDFBD4] font-bold transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
