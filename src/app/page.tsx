'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Cpu,
  Terminal,
  ArrowDown,
  Send,
  ExternalLink,
  Briefcase,
  Code,
  Sparkles,
  Layers,
  ChevronRight,
  Mail
} from 'lucide-react';

// Dynamically import client-only WebGL Scene to prevent SSR hydration errors
const Scene3D = dynamic(() => import('@/components/Scene3D'), { ssr: false });
const SmoothScroll = dynamic(() => import('@/components/SmoothScroll'), { ssr: false });
const LoaderOverlay = dynamic(() => import('@/components/LoaderOverlay'), { ssr: false });
const BackgroundVideo = dynamic(() => import('@/components/BackgroundVideo'), { ssr: false });
const MagneticButton = dynamic(() => import('@/components/MagneticButton'), { ssr: false });

export default function Home() {
  // Segmented control active card state
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  // Independent expansion state for each of the three main cards
  const [expandedCards, setExpandedCards] = useState<boolean[]>([false, false, false]);

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

  // Contact form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll state for fixed navbar
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hotspots array removed to support the new segmented profile card layout

  const projects = [
    {
      title: "Corporate Bulk Rental Portal",
      tech: "React js, Node js Express, SupaBase - PostgreSQL, Vercel",
      desc: "A full-stack B2B rental management platform that streamlines corporate bulk device rentals with secure authentication, inventory management, quotation generation, booking workflows, and an intuitive admin dashboard.",
      link: "https://corporate-bulk-rental-portal-team.vercel.app/"
    },
    {
      title: "Boat Airdopes 700 3D Web App",
      tech: "Three.js • R3F • GSAP • Tailwind CSS",
      desc: "A futuristic digital gallery that renders metallic/glass models with custom shaders. Features smooth dolly zoom transitions on scroll.",
      link: "#"
    },
    {
      title: "NeuralSearch Semantic Engine",
      tech: "Python • FastAPI • HuggingFace • pgvector",
      desc: "High-throughput vector indexing service that parses unstructured documents and performs semantic clustering with sub-50ms query latency.",
      link: "#"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <main className="relative min-h-screen bg-[#08080a] text-white selection:bg-accent-purple/30 overflow-hidden font-sans">
      {/* Premium Loader Overlay */}
      <LoaderOverlay />



      {/* 3D WebGL Canvas Layer */}
      <Scene3D />

      {/* Cinematic looped background video */}
      <BackgroundVideo />

      {/* Radial glow background */}
      <div className="fixed inset-0 glow-bg z-0" />

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/5 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan origin-left"
          initial={{ scaleX: 0 }}
          style={{
            scaleX: 0 // Will hook up to window scroll event below
          }}
          id="scroll-bar"
        />
      </div>

      {/* Fixed Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? 'bg-[#08080a]/75 backdrop-blur-md border-b border-white/5 py-4 shadow-lg'
        : 'bg-transparent py-6'
        }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-start">
          {/* Left Column: Logo & Subtext Pill */}
          <div className="flex flex-col space-y-1.5">
            <motion.div
              className="text-sm font-semibold tracking-[0.35em] uppercase text-white/90"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              V. S. REDDY
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center self-start space-x-1.5 bg-[#55e6ff]/10 border border-[#55e6ff]/20 px-2.5 py-1 rounded-full text-[10px] text-accent-cyan tracking-wider uppercase font-semibold backdrop-blur-sm"
            >
              <Sparkles size={10} className="text-accent-cyan" />
              <span>Spatial Portfolio 2.0</span>
            </motion.div>
          </div>

          {/* Right Column: Navigation Links */}
          <motion.div
            className="flex items-center space-x-6 text-sm text-white/50 pt-0.5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
            <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">Connect</a>
          </motion.div>
        </div>
      </nav>

      {/* Main Smooth Scroll Wrapper */}
      <SmoothScroll>
        <div className="relative z-10 w-full flex flex-col items-center">

          {/* 1. HERO SECTION */}
          <section className="relative w-full min-h-screen flex flex-col justify-between items-center px-6 md:px-12 pt-32 pb-12 max-w-7xl">
            {/* Hero Main Content */}
            <div className="my-auto text-center md:text-left md:self-start max-w-2xl z-20 space-y-6">

              <motion.h1
                className="text-5xl md:text-8xl font-black tracking-tighter leading-none text-gradient"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                CRAFTING <br />
                <span className="text-gradient-purple font-extrabold">COGNITIVE</span> <br />
                EXPERIENCES
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-white/60 font-medium max-w-md tracking-wide leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                Sasidharreddy Vennapusa is a computer science scholar building high-end full stack web platforms integrated with Generative AI.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <MagneticButton>
                  <a
                    href="#about"
                    className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/95 transition-all duration-300 shadow-lg shadow-white/5 flex items-center space-x-2"
                  >
                    <span>Explore Space</span>
                    <ChevronRight size={16} />
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href="#contact"
                    className="px-8 py-3.5 rounded-full bg-white/5 border border-white/15 hover:bg-white/10 text-white font-semibold text-sm transition-all duration-300 backdrop-blur-sm"
                  >
                    Get in touch
                  </a>
                </MagneticButton>
              </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              className="flex flex-col items-center space-y-2 z-20 text-white/40 text-xs tracking-[0.25em] uppercase font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <span>Scroll Down</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowDown size={14} className="text-accent-cyan" />
              </motion.div>
            </motion.div>
          </section>

          {/* 2. SPATIAL ABOUT SECTION */}
          <section id="about" className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-24 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

              {/* Left Side: Text description */}
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-[0.3em] font-semibold text-accent-cyan">01 / Profile Overview</div>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gradient">
                    THE HUMAN <br />
                    BEHIND THE CODE
                  </h2>
                </div>

                <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-lg">
                  I study computer science with a deep focus on artificial intelligence and data systems.
                  My goal is to design spatial applications that dissolve the barrier between complex data models and rich human interfaces.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-2">
                    <Cpu className="text-accent-purple" size={24} />
                    <div className="text-sm font-bold">Generative AI</div>
                    <div className="text-xs text-white/40">Agent orchestration, RAG, custom LLM routing models.</div>
                  </div>
                  <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-2">
                    <Terminal className="text-accent-cyan" size={24} />
                    <div className="text-sm font-bold">Full-Stack Core</div>
                    <div className="text-xs text-white/40">Next.js, Node.js REST/GraphQL APIs, Python scripting.</div>
                  </div>
                </div>
              </div>

              {/* Right Side: Interactive LinkedIn spatial panel */}
              <div className="order-1 lg:order-2 flex flex-col items-center w-full max-w-lg space-y-6 z-10">

                {/* Segmented Control Switcher (Apple-style) */}
                <div className="flex bg-white/[0.03] border border-white/10 rounded-full p-1 w-full backdrop-blur-md relative overflow-hidden">
                  {/* Sliding background highlight */}
                  <motion.div
                    className="absolute bg-white/10 rounded-full h-[calc(100%-8px)] top-1"
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
                      className={`relative z-10 w-1/3 py-2.5 text-[10px] md:text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${activeCardIndex === idx ? 'text-white' : 'text-white/40 hover:text-white/70'
                        }`}
                    >
                      {idx === 0 ? 'Role' : idx === 1 ? 'Training' : 'Scope'}
                    </button>
                  ))}
                </div>

                {/* Card Container holding the active main card and its detailed secondary card */}
                <div className="w-full relative">

                  {/* Glow ring behind card */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/20 to-accent-cyan/10 blur-[80px] rounded-full w-full h-[80%] pointer-events-none z-0" />

                  {/* Active Card Body */}
                  <div className="relative z-10 w-full flex flex-col">
                    {/* Main Card (fixed in place, clickable) */}
                    <div
                      onClick={() => toggleCard(activeCardIndex)}
                      className="relative glass-panel rounded-3xl w-full p-6 md:p-8 flex flex-col justify-between shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-350 cursor-pointer select-none group"
                    >
                      {/* Background tint overlay */}
                      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0">
                        <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 mix-blend-lighten" style={{ backgroundImage: "url('https://honest-fuchsia-g3gjphli.edgeone.dev/Screenshot%202026-07-11%20095048.png')" }} />
                        <div className="absolute inset-0 bg-[#08080a]/60 backdrop-blur-[2px] group-hover:bg-[#08080a]/50 transition-colors duration-500" />
                        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                      </div>

                      {/* Profile details Header */}
                      <div className="relative z-10 flex justify-between items-start">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden bg-cover bg-center bg-no-repeat shadow-lg" style={{ backgroundImage: "url('https://subsequent-pink-ryeyr96y.edgeone.dev/ChatGPT%20Image%20Jul%2010,%202026,%2007_44_41%20PM.png')", backgroundPosition: "15% 25%", backgroundSize: "120%" }} />
                          <div>
                            <h3 className="font-extrabold text-sm md:text-base tracking-tight flex items-center space-x-1.5 text-white">
                              <span>Sasidharreddy Vennapusa</span>
                              <span className="text-[10px] bg-white/10 border border-white/15 px-1.5 py-0.5 rounded-full text-white/50 font-normal">He/Him</span>
                            </h3>
                            <p className="text-xs text-white/40 flex items-center"><MapPin size={10} className="mr-1" /> Pulivendla, Andhra Pradesh</p>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </div>
                      </div>

                      {/* Active Card Body Content */}
                      <div className="relative z-10 mt-8 mb-6 space-y-2">
                        <span className="text-[10px] text-accent-cyan tracking-widest uppercase font-extrabold">{cardsData[activeCardIndex].title}</span>
                        <h4 className="text-xl md:text-2xl font-black text-white leading-snug tracking-tight">
                          {cardsData[activeCardIndex].subtitle}
                        </h4>
                        <p className="text-xs text-white/60 leading-relaxed font-medium">
                          {cardsData[activeCardIndex].summary}
                        </p>
                      </div>

                      {/* Card Footer controls */}
                      <div className="relative z-10 flex justify-between items-center border-t border-white/5 pt-4">
                        <div className="flex items-center space-x-1">
                          <span className="text-[10px] text-white/40 tracking-wider uppercase font-bold">Interactive Profile Card</span>
                        </div>
                        <div className="flex items-center space-x-1.5 text-xs text-accent-cyan font-bold transition-all duration-300">
                          <span>{expandedCards[activeCardIndex] ? 'Collapse Details' : 'Click for more'}</span>
                          <motion.div
                            animate={{ rotate: expandedCards[activeCardIndex] ? 180 : 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                          >
                            <ChevronRight size={14} className="rotate-90 text-accent-cyan" />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Secondary Card (Smoothly expands below the main card) */}
                    <AnimatePresence initial={false}>
                      {expandedCards[activeCardIndex] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, y: -15 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            y: 0,
                            transition: {
                              height: { type: "spring", stiffness: 350, damping: 25 },
                              opacity: { duration: 0.2 },
                              y: { type: "spring", stiffness: 350, damping: 25 }
                            }
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            y: -15,
                            transition: {
                              height: { duration: 0.25, ease: "easeInOut" },
                              opacity: { duration: 0.15 },
                              y: { duration: 0.25, ease: "easeInOut" }
                            }
                          }}
                          className="overflow-hidden w-full z-0"
                        >
                          <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl relative mt-3 space-y-4">
                            {/* Gradient glow line top */}
                            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#55e6ff]/35 to-transparent" />

                            <div className="space-y-2">
                              <h5 className="text-xs uppercase tracking-wider text-accent-cyan font-extrabold">Detailed Information</h5>
                              <p className="text-xs md:text-sm text-white/80 leading-relaxed font-medium">
                                {cardsData[activeCardIndex].details}
                              </p>
                            </div>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                              {cardsData[activeCardIndex].tags.map((tag, tagIdx) => (
                                <span
                                  key={tagIdx}
                                  className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-[10px] text-white/60 tracking-wider font-semibold"
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
          </section>

          {/* 3. PROJECTS CAROUSEL SECTION */}
          <section id="projects" className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-24 max-w-7xl">
            <div className="w-full space-y-16">

              <div className="w-full flex flex-col md:flex-row md:justify-between md:items-end gap-6">
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-[0.3em] font-semibold text-accent-cyan">02 / Selected Works</div>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gradient">
                    AI AGENTS & <br />
                    3D ARCHITECTURES
                  </h2>
                </div>
                <p className="text-white/45 text-sm md:text-base max-w-xs leading-relaxed font-medium">
                  A select showcase of engineering efforts linking AI cognitive models to rich browser experiences.
                </p>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((proj, idx) => (
                  <div key={idx} className="glass-card rounded-2xl p-8 flex flex-col justify-between aspect-[0.9/1]">
                    <div className="space-y-6">
                      <span className="text-xs font-bold text-white/30 uppercase tracking-[0.2em]">00{idx + 1} / project</span>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-black text-white leading-snug tracking-tight">{proj.title}</h3>
                        <p className="text-xs text-accent-cyan tracking-wider font-semibold">{proj.tech}</p>
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed font-medium">
                        {proj.desc}
                      </p>
                    </div>

                    <a 
                      href={proj.link} 
                      target={proj.link.startsWith('http') ? "_blank" : undefined}
                      rel={proj.link.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center space-x-2 text-xs text-white/50 hover:text-white transition-colors duration-200 pt-6 border-t border-white/5 font-semibold mt-auto"
                    >
                      <span>Source Code</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* 4. EXPOLODED VIEW SKILLS SECTION */}
          <section id="skills" className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-24 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

              {/* Spacer on Left to showcase the exploded 3D model */}
              <div className="hidden lg:block" />

              {/* Skills checklist on Right */}
              <div className="space-y-12">
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-[0.3em] font-semibold text-accent-cyan">03 / Engineering Stack</div>
                  <h2 className="text-4xl md:text-6xl font-black tracking-tight text-gradient">
                    SPATIAL ASSEMBLY
                  </h2>
                  <p className="text-white/45 text-sm md:text-base leading-relaxed font-medium">
                    The spatial product representing my skill assembly. As you scroll, the model explodes into three architectural segments:
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Layer 1 */}
                  <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan shrink-0">
                      <Layers size={18} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white tracking-wide">Outer Shell: Client Presentation</h4>
                      <p className="text-xs text-white/50 leading-relaxed font-medium">
                        HTML5 Canvas, WebGL, React Three Fiber, GSAP timeline scrolling, responsive Tailwind frameworks, and client-side performance tuning.
                      </p>
                    </div>
                  </div>

                  {/* Layer 2 */}
                  <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue shrink-0">
                      <Code size={18} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white tracking-wide">Gimbal Rings: System Orchestration</h4>
                      <p className="text-xs text-white/50 leading-relaxed font-medium">
                        Node.js REST servers, Python backend scripts, asynchronous API requests, websocket communication channels, and secure auth layers.
                      </p>
                    </div>
                  </div>

                  {/* Layer 3 */}
                  <div className="flex items-start space-x-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple shrink-0">
                      <Cpu size={18} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white tracking-wide">Glowing Core: Cognitive Intelligence</h4>
                      <p className="text-xs text-white/50 leading-relaxed font-medium">
                        Embedding generation, vector indexing schemas (Pinecone/pgvector), fine-tuning hyperparameter sets, and orchestrating multi-agent workflows.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* 5. CONTACT SECTION */}
          <section id="contact" className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-24 max-w-5xl">
            <div className="w-full glass-panel rounded-3xl p-8 md:p-16 border border-white/10 flex flex-col items-center text-center space-y-12 relative overflow-hidden">

              {/* Background gradient grid */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(123,97,255,0.08)_0%,transparent_70%)] pointer-events-none" />

              <div className="space-y-4 max-w-md">
                <div className="text-xs uppercase tracking-[0.3em] font-semibold text-accent-cyan">04 / Contact</div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gradient">
                  INITIATE CONNECTION
                </h2>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed font-medium">
                  Have an interesting project or research opportunity? Send a spatial request to initiate contact.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 text-left z-10">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Identity / Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-accent-cyan outline-none text-sm transition-colors duration-300 font-medium placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Spatial Vector / Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-accent-cyan outline-none text-sm transition-colors duration-300 font-medium placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Transmission / Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your project or message details..."
                      className="w-full px-5 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-accent-cyan outline-none text-sm transition-colors duration-300 font-medium placeholder:text-white/20 resize-none"
                    />
                  </div>
                </div>

                <MagneticButton className="w-full">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-white text-black hover:bg-white/95 font-bold text-xs uppercase tracking-widest transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <Send size={12} />
                  </button>
                </MagneticButton>
              </form>

              {/* Status Message */}
              <AnimatePresence>
                {formSubmitted && (
                  <motion.div
                    className="absolute bottom-6 bg-accent-cyan/10 border border-accent-cyan/20 px-6 py-2.5 rounded-full text-xs font-bold text-accent-cyan tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    Transmission Sent Successfully!
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Footer */}
            <div className="w-full mt-24 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 font-semibold tracking-wider uppercase">
              <p>&copy; {new Date().getFullYear()} Sasidharreddy Vennapusa. All Rights Reserved.</p>
              <div className="flex space-x-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" /></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="mailto:sasid@example.com" className="hover:text-white transition-colors"><Mail size={16} /></a>
              </div>
            </div>
          </section>

        </div>
      </SmoothScroll>

      {/* Synchronized Scroll Handler Hook for the scroll indicator */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', () => {
            const bar = document.getElementById('scroll-bar');
            if (bar) {
              const h = document.documentElement, 
                    b = document.body,
                    st = 'scrollTop',
                    sh = 'scrollHeight';
              const percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
              bar.style.transform = 'scaleX(' + percent + ')';
            }
          });
        `
      }} />
    </main>
  );
}
