'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Technical Specialist – Broadcasting & Streaming",
    company: "GlobalXperts (NHL Project)",
    period: "2025 – Present",
    description: "Supporting live NHL broadcasts with 16 simultaneous feeds, achieving 99.97% uptime. Responsible for real-time monitoring, incident management, and infrastructure reliability using AWS Media Services and ServiceNow.",
    highlights: [
      "Zero escalations during Stanley Cup Finals Game 7",
      "Managed high-stakes live streaming infrastructure",
      "Supported NHL Innovation Lab testing"
    ]
  },
  {
    role: "Founder & CEO",
    company: "The KPI Hub",
    period: "2025 – Present",
    description: "Building a high-trust B2B SaaS intelligence platform that delivers real-time category intelligence through AI-synthesized daily briefs. Leading product, engineering, and go-to-market.",
    highlights: [
      "Next.js 15 + Supabase + Claude stack",
      "Automated content & intelligence pipelines",
      "Early MRR growth with multiple monetization streams"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 border-t border-white/10 bg-black/40">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold tracking-tight">Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-[#06b6d4]/30 pl-8 relative"
            >
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#06b6d4]" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-semibold">{exp.role}</h3>
                  <p className="text-[#06b6d4]">{exp.company}</p>
                </div>
                <span className="text-white/50 mt-1 md:mt-0">{exp.period}</span>
              </div>

              <p className="text-white/70 mb-4 max-w-3xl">{exp.description}</p>

              <ul className="space-y-1.5 text-white/70">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#06b6d4] mt-1.5">→</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
