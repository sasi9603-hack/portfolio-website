'use client';

import { ExternalLink, Sparkles, ChevronRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
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
    },
    {
      title: "NeuralSearch Semantic Engine",
      tech: "Python • FastAPI • HuggingFace • pgvector",
      desc: "High-throughput vector indexing service that parses unstructured documents and performs semantic clustering with sub-50ms query latency.",
      link: "#"
    }
  ];

  return (
    <div className="w-full min-h-screen py-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center">
      
      {/* Header */}
      <div className="w-full text-center md:text-left space-y-4 mb-16">
        <div className="font-mono text-xs uppercase tracking-[0.3em] font-semibold text-[#C05800] flex items-center justify-center md:justify-start space-x-2">
          <Sparkles size={12} />
          <span>02 / Selected Works</span>
        </div>
        <h1 className="font-heading text-4xl md:text-7xl font-black tracking-tight text-gradient">
          AI AGENTS & <br />
          <span className="text-gradient-purple italic font-serif">3D ARCHITECTURES</span>
        </h1>
        <p className="font-sans text-[#FDFBD4]/75 text-base md:text-lg max-w-2xl leading-relaxed">
          A showcase of full-stack engineering efforts linking AI cognitive models to rich browser experiences.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
        {projects.map((proj, idx) => (
          <div key={idx} className="glass-card rounded-2xl p-8 flex flex-col justify-between aspect-[0.9/1]">
            <div className="space-y-6">
              <span className="font-mono text-xs font-bold text-[#FDFBD4]/40 uppercase tracking-[0.2em]">00{idx + 1} / project</span>
              <div className="space-y-3">
                <h3 className="font-heading text-2xl font-bold text-[#FDFBD4] leading-snug tracking-tight">{proj.title}</h3>
                <p className="font-mono text-xs text-[#C05800] tracking-wider font-semibold">{proj.tech}</p>
              </div>
              <p className="font-sans text-xs text-[#FDFBD4]/75 leading-relaxed font-normal">
                {proj.desc}
              </p>
            </div>

            <a
              href={proj.link}
              target={proj.link.startsWith('http') ? "_blank" : undefined}
              rel={proj.link.startsWith('http') ? "noopener noreferrer" : undefined}
              className="font-sans inline-flex items-center space-x-2 text-xs uppercase tracking-wider text-[#FDFBD4]/50 hover:text-[#FDFBD4] transition-colors duration-200 pt-6 border-t border-[#FDFBD4]/10 font-semibold mt-auto"
            >
              <span>Source Code / Live Demo</span>
              <ExternalLink size={12} />
            </a>
          </div>
        ))}
      </div>

      <div className="font-sans">
        <MagneticButton>
          <Link href="/skills" className="px-8 py-3.5 rounded-full bg-[#FDFBD4] text-[#38240D] font-bold text-xs uppercase tracking-widest flex items-center space-x-2">
            <span>View Engineering Services</span>
            <ChevronRight size={16} />
          </Link>
        </MagneticButton>
      </div>

    </div>
  );
}
