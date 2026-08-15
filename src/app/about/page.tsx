'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Cpu, Terminal, ChevronRight, Sparkles } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import Link from 'next/link';

export default function AboutPage() {
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [expandedCards, setExpandedCards] = useState<boolean[]>([true, false, false]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const cardsData = [
    {
      title: "Core Role & Focus",
      subtitle: "CSE-AIDE Student & GenAI Engineer",
      summary: "Specializing in building 3D spatial web applications and cognitive AI agents.",
      details: "Focuses on developing cutting-edge interfaces using React, Next.js, and Three.js/React Three Fiber. Passionate about LLM orchestration, cognitive agent workflows, and vector databases.",
      tags: ["Next.js", "React Three Fiber", "GenAI", "TypeScript"]
    },
    {
      title: "Advanced Training",
      subtitle: "NxtWave Advanced Tech Scholar",
      summary: "Building production-ready expertise in full-stack architectures and machine learning.",
      details: "Undergoing rigorous training in professional software engineering, full-stack development, and Generative AI systems. Gaining intensive training in full-stack web architectures, Generative AI integration, and production deployment.",
      tags: ["Node.js", "Python", "PostgreSQL", "Machine Learning"]
    },
    {
      title: "Location & Scope",
      subtitle: "Pulivendla, Andhra Pradesh",
      summary: "Operating globally to design and implement high-performance distributed systems.",
      details: "Based in India, operating in a fully connected global workspace. Experienced in working with remote APIs, serverless computing, and edge networks to achieve low-latency solutions.",
      tags: ["Distributed Systems", "Vercel", "APIs", "Cloud Architecture"]
    }
  ];

  return (
    <div className="w-full min-h-screen py-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
      
      {/* Page Header */}
      <div className="w-full text-center md:text-left space-y-4 mb-16">
        <div className="font-mono text-xs uppercase tracking-[0.3em] font-semibold text-[#C05800] flex items-center justify-center md:justify-start space-x-2">
          <Sparkles size={12} />
          <span>01 / Profile Overview</span>
        </div>
        <h1 className="font-heading text-4xl md:text-7xl font-black tracking-tight text-gradient">
          THE HUMAN <br />
          <span className="text-gradient-purple italic font-serif">BEHIND THE CODE</span>
        </h1>
        <p className="font-sans text-[#FDFBD4]/75 text-base md:text-lg max-w-2xl leading-relaxed">
          I am a computer science scholar specializing in artificial intelligence and modern data systems, designing web platforms that connect complex models with beautiful human interfaces.
        </p>
      </div>

      {/* Grid: Bio Left & Interactive Card Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start w-full">
        
        {/* Left Side: Story & Focus Areas */}
        <div className="space-y-8 font-sans">
          <div className="glass-panel p-8 rounded-3xl border border-[#FDFBD4]/15 space-y-4">
            <h2 className="font-heading text-xl font-extrabold text-[#FDFBD4]">Engineering Philosophy</h2>
            <p className="text-[#FDFBD4]/80 text-sm md:text-base leading-relaxed font-normal">
              Software shouldn't just process data—it should feel alive and responsive. By combining full-stack web engineering with cognitive AI tools, I build applications that reduce friction and empower users.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel p-6 rounded-2xl border border-[#FDFBD4]/10 space-y-3">
              <Cpu className="text-[#C05800]" size={26} />
              <h3 className="font-heading text-sm font-bold text-[#FDFBD4]">Generative AI Core</h3>
              <p className="font-sans text-xs text-[#FDFBD4]/65 leading-relaxed">
                Agent orchestration, RAG architectures, custom LLM routing, and vector index schemas.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-[#FDFBD4]/10 space-y-3">
              <Terminal className="text-[#FDFBD4]" size={26} />
              <h3 className="font-heading text-sm font-bold text-[#FDFBD4]">Full-Stack Core</h3>
              <p className="font-sans text-xs text-[#FDFBD4]/65 leading-relaxed">
                Next.js App Router, Node.js REST/GraphQL APIs, Python backend automation, and PostgreSQL.
              </p>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-[#FDFBD4]/10 flex items-center space-x-4">
            <MapPin className="text-[#C05800] shrink-0" size={24} />
            <div>
              <div className="font-heading text-sm font-bold text-[#FDFBD4]">Base Location</div>
              <div className="font-mono text-xs text-[#FDFBD4]/60">Pulivendla, Andhra Pradesh, India — Operating globally</div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Segmented Profile Card */}
        <div className="flex flex-col items-center w-full space-y-6 font-sans">
          
          {/* Segmented Control Switcher */}
          <div className="flex bg-[#FDFBD4]/[0.05] border border-[#FDFBD4]/15 rounded-full p-1 w-full backdrop-blur-md relative overflow-hidden font-sans">
            <motion.div
              className="absolute bg-[#C05800]/30 border border-[#C05800]/40 rounded-full h-[calc(100%-8px)] top-1"
              initial={false}
              animate={{
                left: `calc(${(activeCardIndex * 100) / 3}% + 4px)`,
                width: 'calc(33.333% - 8px)'
              }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
            {cardsData.map((card, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCardIndex(idx)}
                className={`relative z-10 w-1/3 py-2.5 text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                  activeCardIndex === idx ? 'text-[#FDFBD4]' : 'text-[#FDFBD4]/50 hover:text-[#FDFBD4]/80'
                }`}
              >
                {idx === 0 ? 'Role' : idx === 1 ? 'Training' : 'Scope'}
              </button>
            ))}
          </div>

          {/* Active Card Body */}
          <div className="w-full relative">
            <div className="relative z-10 w-full flex flex-col">
              
              {/* Main Card */}
              <div
                onClick={() => toggleCard(activeCardIndex)}
                className="relative glass-panel rounded-3xl w-full p-6 md:p-8 flex flex-col justify-between shadow-2xl border border-[#FDFBD4]/15 hover:border-[#C05800]/40 transition-all duration-350 cursor-pointer select-none group"
              >
                {/* Background tint */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0">
                  <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 mix-blend-lighten" style={{ backgroundImage: "url('/Linkedin.png')" }} />
                  <div className="absolute inset-0 bg-[#38240D]/70 backdrop-blur-[2px] group-hover:bg-[#38240D]/60 transition-colors duration-500" />
                </div>

                {/* Profile details Header */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full border-2 border-[#FDFBD4]/30 overflow-hidden bg-cover bg-center bg-no-repeat shadow-lg" style={{ backgroundImage: "url('/profile.jpg')" }} />
                    <div>
                      <h3 className="font-heading font-extrabold text-sm md:text-base tracking-tight flex items-center space-x-1.5 text-[#FDFBD4]">
                        <span>Sasidharreddy Vennapusa</span>
                        <span className="font-mono text-[10px] bg-[#FDFBD4]/10 border border-[#FDFBD4]/15 px-1.5 py-0.5 rounded-full text-[#FDFBD4]/70 font-normal">He/Him</span>
                      </h3>
                      <p className="font-mono text-xs text-[#FDFBD4]/60 flex items-center"><MapPin size={10} className="mr-1" /> Pulivendla, Andhra Pradesh</p>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="relative z-10 mt-8 mb-6 space-y-2">
                  <span className="font-mono text-[10px] text-[#C05800] tracking-widest uppercase font-extrabold">{cardsData[activeCardIndex].title}</span>
                  <h4 className="font-heading text-xl md:text-2xl font-black text-[#FDFBD4] leading-snug tracking-tight">
                    {cardsData[activeCardIndex].subtitle}
                  </h4>
                  <p className="font-sans text-xs text-[#FDFBD4]/70 leading-relaxed font-medium">
                    {cardsData[activeCardIndex].summary}
                  </p>
                </div>

                {/* Footer toggle indicator */}
                <div className="relative z-10 flex justify-between items-center border-t border-[#FDFBD4]/10 pt-4 font-sans">
                  <span className="font-mono text-[10px] text-[#FDFBD4]/50 tracking-wider uppercase font-bold">Interactive Card</span>
                  <div className="flex items-center space-x-1.5 text-xs text-[#C05800] font-bold uppercase tracking-wider">
                    <span>{expandedCards[activeCardIndex] ? 'Collapse Details' : 'Click for more'}</span>
                    <motion.div
                      animate={{ rotate: expandedCards[activeCardIndex] ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <ChevronRight size={14} className="rotate-90 text-[#C05800]" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Secondary Details Card */}
              <AnimatePresence initial={false}>
                {expandedCards[activeCardIndex] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, y: -15 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      y: 0,
                      transition: { height: { type: "spring", stiffness: 350, damping: 25 }, opacity: { duration: 0.2 } }
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      y: -15,
                      transition: { height: { duration: 0.25 }, opacity: { duration: 0.15 } }
                    }}
                    className="overflow-hidden w-full z-0 font-sans"
                  >
                    <div className="glass-panel rounded-3xl p-6 md:p-8 border border-[#FDFBD4]/15 shadow-2xl relative mt-3 space-y-4">
                      <div className="space-y-2">
                        <h5 className="font-mono text-xs uppercase tracking-wider text-[#C05800] font-extrabold">Detailed Information</h5>
                        <p className="text-xs md:text-sm text-[#FDFBD4]/90 leading-relaxed font-medium">
                          {cardsData[activeCardIndex].details}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2 border-t border-[#FDFBD4]/10 font-mono text-[10px]">
                        {cardsData[activeCardIndex].tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="bg-[#FDFBD4]/5 border border-[#FDFBD4]/15 px-2.5 py-1 rounded-full text-[#FDFBD4]/70 tracking-wider font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>

      <div className="mt-16 font-sans">
        <MagneticButton>
          <Link href="/projects" className="px-8 py-3.5 rounded-full bg-[#FDFBD4] text-[#38240D] font-bold text-xs uppercase tracking-widest flex items-center space-x-2">
            <span>Explore Works</span>
            <ChevronRight size={16} />
          </Link>
        </MagneticButton>
      </div>

    </div>
  );
}
