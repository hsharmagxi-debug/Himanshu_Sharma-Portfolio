'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Broadcasting & Streaming",
    skills: ["AWS MediaLive", "MediaPackage", "SRT / RTMP", "Live Monitoring", "VTOC", "ServiceNow"]
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS", "Docker", "Vercel", "Supabase", "GitHub Actions", "CI/CD Pipelines"]
  },
  {
    title: "AI & Agentic Systems",
    skills: ["Claude", "Ollama", "LangGraph-style Agents", "n8n Workflows", "RAG Systems", "Multi-Agent Architecture"]
  },
  {
    title: "Full-Stack & Product",
    skills: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui", "React", "Product Strategy"]
  },
  {
    title: "Platform Engineering",
    skills: ["Reliability Engineering", "Observability", "Automation", "Documentation-first", "Incremental Hardening", "99.97%+ Uptime Focus"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold tracking-tight">Skills & Expertise</h2>
          <p className="text-white/60 mt-3 max-w-md">
            A focused set of capabilities built across live broadcasting, cloud infrastructure, and autonomous systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
            >
              <h3 className="font-semibold text-lg mb-4 text-[#06b6d4]">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-white/10 rounded-full text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
