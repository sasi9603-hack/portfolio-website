'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowUpRight, Cpu, Terminal, Layers, ExternalLink } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';

export default function Home() {
  const featuredProjects = [
    {
      title: "Corporate Bulk Rental Portal",
      tech: "React js • Node js Express • SupaBase - PostgreSQL • Vercel",
      desc: "A full-stack B2B rental management platform that streamlines corporate bulk device rentals with secure authentication, inventory management, quotation generation, booking workflows, and an intuitive admin dashboard.",
      link: "https://corporate-bulk-rental-portal-team.vercel.app/"
    },
    {
      title: "Boat Airdopes 700 3D Web App",
      tech: "Three.js • R3F • GSAP • Tailwind CSS",
      desc: "A futuristic digital gallery that renders metallic/glass models with custom shaders. Features smooth dolly zoom transitions on scroll.",
      link: "#"
    }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-between items-center px-6 md:px-12 py-12 max-w-7xl">
        <div className="my-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-20">

          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-center md:text-left">
            <motion.h1
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.02] text-gradient"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              CRAFTING <br />
              <span className="text-gradient-purple italic font-serif">COGNITIVE</span> <br />
              EXPERIENCES
            </motion.h1>

            <motion.p
              className="font-sans text-base md:text-lg text-[#FDFBD4]/75 font-normal max-w-lg tracking-wide leading-relaxed mx-auto md:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Sasidharreddy Vennapusa is a computer science scholar building high-end full stack web platforms integrated with Generative AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="pt-4 flex flex-wrap gap-4 justify-center md:justify-start font-sans"
            >
              <MagneticButton>
                <Link
                  href="/about"
                  className="px-8 py-3.5 rounded-full bg-[#FDFBD4] text-[#38240D] font-bold text-xs uppercase tracking-widest hover:bg-[#FDFBD4]/90 transition-all duration-300 shadow-lg shadow-[#FDFBD4]/10 flex items-center space-x-2"
                >
                  <span>About Me</span>
                  <ChevronRight size={16} />
                </Link>
              </MagneticButton>

              <MagneticButton>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-[#FDFBD4]/10 border border-[#FDFBD4]/20 hover:bg-[#FDFBD4]/15 text-[#FDFBD4] font-bold text-xs uppercase tracking-widest transition-all duration-300 backdrop-blur-sm"
                >
                  Get in touch
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Clean Arch-Shaped Hero Portrait Card */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-full max-w-[380px] md:max-w-[420px]">
              {/* Ambient glowing halo matching swatch colors */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C05800]/30 via-[#713600]/25 to-[#FDFBD4]/15 blur-[60px] rounded-full pointer-events-none" />

              {/* Arch Frame Container */}
              <div className="relative glass-panel rounded-t-[180px] md:rounded-t-[220px] rounded-b-[40px] p-3 md:p-4 border border-[#FDFBD4]/20 shadow-2xl shadow-black/80 overflow-hidden group">
                
                {/* Top light shimmer */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#FDFBD4]/15 to-transparent pointer-events-none z-10 rounded-t-[180px] md:rounded-t-[220px]" />

                {/* User Portrait Image */}
                <div className="relative w-full h-[460px] md:h-[520px] rounded-t-[165px] md:rounded-t-[200px] rounded-b-[28px] overflow-hidden bg-[#38240D]">
                  <img
                    src="/profile.jpg"
                    alt="Sasidharreddy Vennapusa"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03] group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  
                  {/* Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#38240D] via-transparent to-transparent opacity-80" />
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* QUICK PREVIEW: FEATURED WORKS */}
      <section className="relative w-full py-20 px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.3em] font-semibold text-[#C05800]">02 / Featured Projects</span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-gradient">SELECTED WORKS</h2>
          </div>
          <Link href="/projects" className="font-sans inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-[#C05800] hover:text-[#FDFBD4] transition-colors font-bold">
            <span>View All Projects</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((proj, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="font-mono text-xs font-bold text-[#FDFBD4]/40 uppercase tracking-[0.2em]">00{idx + 1} / project</span>
                <h3 className="font-heading text-2xl font-bold text-[#FDFBD4] leading-snug">{proj.title}</h3>
                <p className="font-mono text-xs text-[#C05800] font-semibold">{proj.tech}</p>
                <p className="font-sans text-xs text-[#FDFBD4]/75 leading-relaxed font-normal">{proj.desc}</p>
              </div>
              <a
                href={proj.link}
                target={proj.link.startsWith('http') ? "_blank" : undefined}
                rel={proj.link.startsWith('http') ? "noopener noreferrer" : undefined}
                className="font-sans inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-[#FDFBD4]/50 hover:text-[#FDFBD4] transition-colors pt-6 border-t border-[#FDFBD4]/10 font-semibold mt-6"
              >
                <span>Live Portal / Demo</span>
                <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK PREVIEW: SERVICES & STACK */}
      <section className="relative w-full py-20 px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-[#FDFBD4]/10 space-y-3">
            <Cpu className="text-[#C05800]" size={28} />
            <h3 className="font-heading text-lg font-bold text-[#FDFBD4]">Generative AI Core</h3>
            <p className="font-sans text-xs text-[#FDFBD4]/65 leading-relaxed">Agent orchestration, RAG pipelines, vector search, and LLM fine-tuning.</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-[#FDFBD4]/10 space-y-3">
            <Terminal className="text-[#FDFBD4]" size={28} />
            <h3 className="font-heading text-lg font-bold text-[#FDFBD4]">Full-Stack Architecture</h3>
            <p className="font-sans text-xs text-[#FDFBD4]/65 leading-relaxed">Next.js 16 App Router, React 19, Node.js REST APIs, PostgreSQL, & Supabase.</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-[#FDFBD4]/10 space-y-3">
            <Layers className="text-[#713600]" size={28} />
            <h3 className="font-heading text-lg font-bold text-[#FDFBD4]">Spatial Interfaces</h3>
            <p className="font-sans text-xs text-[#FDFBD4]/65 leading-relaxed">High-performance responsive rendering, GSAP timelines, and glassmorphic designs.</p>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative w-full py-20 px-6 md:px-12 max-w-5xl">
        <div className="glass-panel rounded-3xl p-10 md:p-16 border border-[#FDFBD4]/15 text-center space-y-6">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-gradient">READY TO BUILD SOMETHING EXTRAORDINARY?</h2>
          <p className="font-sans text-sm text-[#FDFBD4]/75 max-w-lg mx-auto">Initiate a connection to discuss full-stack platforms, Generative AI integration, or research collaborations.</p>
          <div className="pt-4 flex justify-center font-sans">
            <MagneticButton>
              <Link href="/contact" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C05800] to-[#713600] text-[#FDFBD4] font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#C05800]/30 flex items-center space-x-2">
                <span>Get In Touch</span>
                <ArrowUpRight size={16} />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
