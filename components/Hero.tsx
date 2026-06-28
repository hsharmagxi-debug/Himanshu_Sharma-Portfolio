'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const titles = [
    "Technical Specialist – Broadcasting & Streaming",
    "Founder & CEO, The KPI Hub",
    "Builder of Autonomous AI Systems",
    "Platform Engineer | NHL Broadcast Support"
  ];

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <span className="px-4 py-1.5 text-sm rounded-full border border-white/20 text-white/70">
            Delhi-NCR, India
          </span>
        </div>

        <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter mb-6">
          Himanshu Sharma
        </h1>

        <div className="h-20 mb-8 overflow-hidden">
          <motion.div
            animate={{ y: [0, -80, -160, -240, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
          Technical Specialist supporting live NHL broadcasts with 99.97% uptime. 
          Founder building production-grade SaaS and self-hosted AI systems. 
          Focused on reliability, autonomy, and building things that matter.
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
        </div>

        <div className="flex gap-6 mt-12 text-sm text-white/60">
          <a href="https://github.com/hsharmagxi-debug" target="_blank" className="hover:text-white transition">GitHub</a>
          <a href="https://thekpihub.com" target="_blank" className="hover:text-white transition">The KPI Hub</a>
          <a href="https://hsharmagxi-debug.github.io" target="_blank" className="hover:text-white transition">Portfolio</a>
        </div>
      </div>
    </section>
  );
}