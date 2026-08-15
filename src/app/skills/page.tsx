'use client';

import { Layers, Code, Cpu, Sparkles, ChevronRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import Link from 'next/link';

export default function SkillsPage() {
  const stackLayers = [
    {
      icon: <Layers size={22} className="text-[#FDFBD4]" />,
      title: "Layer 1: Client Presentation",
      subtitle: "High-Performance Interactive Web UIs",
      desc: "HTML5, WebGL, React Three Fiber, GSAP animation timelines, responsive Tailwind CSS v4, client-side performance tuning, and accessible component architectures.",
      tags: ["React 19", "Next.js 16", "Three.js", "GSAP", "Tailwind CSS"]
    },
    {
      icon: <Code size={22} className="text-[#C05800]" />,
      title: "Layer 2: System Orchestration",
      subtitle: "Scalable Full-Stack Architecture",
      desc: "Node.js REST/GraphQL servers, Express, Python scripting, PostgreSQL, Supabase database management, authentication layers, and serverless edge functions.",
      tags: ["Node.js", "Python", "PostgreSQL", "Supabase", "REST APIs"]
    },
    {
      icon: <Cpu size={22} className="text-[#713600]" />,
      title: "Layer 3: Cognitive Intelligence",
      subtitle: "Generative AI & Agent Workflows",
      desc: "Embedding generation, vector indexing schemas (Pinecone / pgvector), LLM fine-tuning, RAG retrieval pipelines, and orchestrating multi-agent cognitive workflows.",
      tags: ["GenAI", "RAG", "pgvector", "LangChain", "LLMs"]
    }
  ];

  return (
    <div className="w-full min-h-screen py-16 px-6 md:px-12 max-w-5xl mx-auto flex flex-col items-center">
      
      {/* Header */}
      <div className="w-full text-center md:text-left space-y-4 mb-16">
        <div className="font-mono text-xs uppercase tracking-[0.3em] font-semibold text-[#C05800] flex items-center justify-center md:justify-start space-x-2">
          <Sparkles size={12} />
          <span>03 / Engineering Stack</span>
        </div>
        <h1 className="font-heading text-4xl md:text-7xl font-black tracking-tight text-gradient">
          SERVICES & <br />
          <span className="text-gradient-purple italic font-serif">ARCHITECTURE</span>
        </h1>
        <p className="font-sans text-[#FDFBD4]/75 text-base md:text-lg max-w-2xl leading-relaxed">
          Comprehensive technical toolkit spanning modern front-end interfaces, server architectures, and Generative AI cognitive frameworks.
        </p>
      </div>

      {/* Layers List */}
      <div className="space-y-8 w-full mb-16">
        {stackLayers.map((layer, idx) => (
          <div key={idx} className="glass-panel p-8 rounded-3xl border border-[#FDFBD4]/15 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FDFBD4]/5 border border-[#FDFBD4]/15 flex items-center justify-center shrink-0">
                {layer.icon}
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-[#FDFBD4]">{layer.title}</h3>
                <p className="font-mono text-xs text-[#C05800] font-semibold">{layer.subtitle}</p>
              </div>
            </div>

            <p className="font-sans text-sm text-[#FDFBD4]/80 leading-relaxed font-normal">
              {layer.desc}
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#FDFBD4]/10 font-mono text-[10px]">
              {layer.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="bg-[#FDFBD4]/5 border border-[#FDFBD4]/15 px-3 py-1.5 rounded-full text-[#FDFBD4]/70 font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="font-sans">
        <MagneticButton>
          <Link href="/contact" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#C05800] to-[#713600] text-[#FDFBD4] font-bold text-xs uppercase tracking-widest flex items-center space-x-2 shadow-lg shadow-[#C05800]/30">
            <span>Initiate Contact</span>
            <ChevronRight size={16} />
          </Link>
        </MagneticButton>
      </div>

    </div>
  );
}
