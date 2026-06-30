"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

// ✅ Lazy load AI Chat (IMPORTANT for performance + avoids build stress)
const EngineeringChat = dynamic(
  () => import("@/components/EngineeringChat"),
  { ssr: false }
);

const sections = [
  {
    title: "Live Broadcasting Operations",
    slug: "live-broadcasting",
    desc: "AWS MediaLive, MediaConnect, SRT/Zixi ingest, 1,500+ NHL events at 99.9% uptime with zero SLA escalations",
  },
  {
    title: "AI & Agentic Systems",
    slug: "ai-agentic-systems",
    desc: "AetherAI C-suite approval, NASSCOM 5-star RAG pipeline, LangGraph ReAct Agent, multi-agent architecture",
  },
  {
    title: "SaaS & Product Engineering",
    slug: "saas-engineering",
    desc: "The KPI Hub: B2B SaaS, 95%-automated 5-engine AI content pipeline, Next.js 15, Supabase RLS, Vercel",
  },
  {
    title: "VSAT & Network Engineering",
    slug: "vsat-networking",
    desc: "Satellite delivery architecture, link budgets, EIRP calculations, nationwide government e-learning over VSAT",
  },
];

export default function Engineering() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* BACK */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-500 hover:text-white text-sm mb-10 transition-colors"
        >
          ← Back to Home
        </Link>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-white">
            Engineering Case Studies
          </h1>

          <p className="text-zinc-400 mb-12 max-w-2xl">
            Real-world technical breakdowns from live broadcast operations, AI systems, SaaS, and satellite engineering.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-6 border border-zinc-800 rounded-xl hover:border-cyan-500 transition"
            >
              <h2 className="text-xl font-semibold text-cyan-400">
                {item.title}
              </h2>

              <p className="text-zinc-400 mt-2">{item.desc}</p>

              <Link
                href={`/engineering/${item.slug}`}
                className="inline-block mt-4 text-sm text-white border border-zinc-700 px-4 py-2 rounded-lg hover:border-cyan-500 transition"
              >
                Open Case Study →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* AI ENGINEERING ASSISTANT */}
        <div className="mt-20 border-t border-zinc-800 pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
              🧠 Ask Himanshu Engineering
            </h2>

            <p className="text-zinc-500 mb-6">
              Ask real questions about live broadcasting, AI systems, SaaS, and platform engineering. Built on my experience.
            </p>

            {/* Lazy loaded = prevents build + hydration load spike */}
            <EngineeringChat />
          </motion.div>
        </div>

      </div>
    </section>
  );
}