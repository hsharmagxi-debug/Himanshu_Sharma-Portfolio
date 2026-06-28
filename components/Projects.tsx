'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: "The KPI Hub",
    description: "High-trust B2B SaaS platform delivering real-time category intelligence through AI-synthesized daily briefs. Built for founders and operators.",
    tech: ["Next.js 15", "TypeScript", "Supabase", "Claude"],
    link: "https://thekpihub.com",
    status: "Live"
  },
  {
    title: "AetherAI",
    description: "Self-hosted, privacy-first AI Operating System. Docker Compose stack with Ollama, ChromaDB, and multi-agent architecture designed for air-gapped environments.",
    tech: ["Docker", "Ollama", "ChromaDB", "FastAPI"],
    link: "https://github.com/hsharmagxi-debug/aetherAI",
    status: "Open Source"
  },
  {
    title: "PolyMind",
    description: "Multi-LLM platform supporting GPT-4o, Claude, and Gemini with document RAG, code assistance, and image generation capabilities.",
    tech: ["Next.js", "OpenRouter", "RAG"],
    link: "https://github.com/hsharmagxi-debug/polymind",
    status: "Active"
  },
  {
    title: "Lumina Numerology",
    description: "Free, offline, high-accuracy numerology PWA with Pythagorean & Chaldean systems and a 5-expert consensus engine. Fully local with zero data collection.",
    tech: ["HTML/CSS/JS", "Tailwind", "PWA"],
    link: "https://hsharmagxi-debug.github.io/lumina-numerology/",
    status: "Live"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight">Featured Projects</h2>
            <p className="text-white/60 mt-2">Production-grade systems I've built and continue to evolve.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              whileHover={{ y: -6 }}
              className="group block border border-white/10 rounded-2xl p-7 hover:border-white/30 transition-all bg-white/5"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold group-hover:text-[#06b6d4] transition">{project.title}</h3>
                <span className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/60">
                  {project.status}
                </span>
              </div>
              <p className="text-white/70 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-white/10 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
