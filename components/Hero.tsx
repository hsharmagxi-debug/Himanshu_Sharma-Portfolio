'use client';

import { motion } from 'framer-motion';
import SkillSnapshot from '@/components/SkillSnapshot';

export default function Hero() {
  const titles = [
    "Broadcast & Cloud Operations Specialist",
    "Lead Technical Specialist – NHL Broadcasts",
    "Avid Technical Support Engineer",
    "Builder of Autonomous AI Systems",
    "Founder & CEO, The KPI Hub",
  ];

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="px-4 py-1.5 text-sm rounded-full border border-white/20 text-white/70">
            New Delhi, India
          </span>
          <span className="px-4 py-1.5 text-sm rounded-full border border-emerald-400/30 text-emerald-400/90">
            Available Immediately · Open to Relocation
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter mb-6">
          Himanshu Sharma
        </h1>

        <div className="h-20 mb-8 overflow-hidden">
          <motion.div
            animate={{ y: [0, -80, -160, -240, -320, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="text-3xl md:text-4xl text-[#06b6d4] font-medium"
          >
            {titles.map((title, index) => (
              <div key={index} className="h-20 flex items-center">
                {title}
              </div>
            ))}
          </motion.div>
        </div>

        <p className="max-w-2xl text-xl text-white/70 mb-10">
          11+ years in live broadcast infrastructure and cloud operations. Delivered 99.9% uptime
          across 1,500+ NHL events with zero SLA escalations. Avid-compatible workflows, AWS Media Services,
          VSAT engineering — and building autonomous AI systems and The KPI Hub as a SaaS founder.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-white text-black rounded-xl font-medium hover:bg-white/90 transition"
          >
            View Projects
          </a>
          <a
            href="#experience"
            className="px-8 py-3.5 border border-white/30 hover:bg-white/5 rounded-xl font-medium transition"
          >
            Experience
          </a>
          <SkillSnapshot />
        </div>

        <div className="flex gap-6 mt-12 text-sm text-white/60">
          <a href="https://github.com/hsharmagxi-debug" target="_blank" className="hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/himanshu-sharma-broadcast" target="_blank" className="hover:text-white transition">LinkedIn</a>
          <a href="https://thekpihub.com" target="_blank" className="hover:text-white transition">The KPI Hub</a>
          <a href="https://hsharmagxi-debug.github.io" target="_blank" className="hover:text-white transition">Portfolio</a>
        </div>
      </div>
    </section>
  );
}
