"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type LineType = "cmd" | "output" | "success" | "blank" | "muted";

interface Line {
  type: LineType;
  text: string;
  delay?: number;
}

const SCRIPT: Line[] = [
  { type: "cmd",     text: "$ whoami",                                                  delay: 400 },
  { type: "output",  text: "Himanshu Sharma",                                           delay: 300 },
  { type: "muted",   text: "Lead Technical Specialist · GlobalXperts (NHL) · Founder, The KPI Hub", delay: 200 },
  { type: "blank",   text: "",                                                           delay: 300 },
  { type: "cmd",     text: "$ cat profile.json",                                        delay: 500 },
  { type: "output",  text: "{",                                                          delay: 100 },
  { type: "output",  text: '  "experience"  : "11+ years · Broadcast & Cloud Operations",',        delay: 80 },
  { type: "output",  text: '  "broadcast"   : "1,500+ NHL events · 99.9% uptime · Zero escalations",', delay: 80 },
  { type: "output",  text: '  "avid"        : "DNxHD/DNxHR · H.264/H.265 · MXF/MOV · NEXIS/ISIS",', delay: 80 },
  { type: "output",  text: '  "cloud"       : "AWS MediaLive · MediaConnect · MediaPackage",',     delay: 80 },
  { type: "output",  text: '  "networking"  : "VLAN 802.1Q · Cisco · VSAT/EIRP · Fiber/OTDR",',  delay: 80 },
  { type: "output",  text: '  "ai"          : "AetherAI (C-suite approved) · NASSCOM 5★ · LangGraph · RAG",', delay: 80 },
  { type: "output",  text: '  "saas"        : "The KPI Hub · Next.js 15 · Supabase · Claude",',   delay: 80 },
  { type: "output",  text: '  "projects"    : ["The KPI Hub","AetherAI","Lumina Numerology"]',     delay: 80 },
  { type: "output",  text: "}",                                                          delay: 200 },
  { type: "blank",   text: "",                                                           delay: 300 },
  { type: "cmd",     text: "$ aether status",                                           delay: 500 },
  { type: "success", text: "✓  Claude        healthy   priority 1",                     delay: 120 },
  { type: "success", text: "✓  Ollama        healthy   priority 2",                     delay: 120 },
  { type: "success", text: "✓  ChromaDB      healthy   priority 3",                     delay: 120 },
  { type: "success", text: "✓  n8n           healthy   priority 4",                     delay: 120 },
  { type: "success", text: "✓  OpenWebUI     healthy   priority 5",                     delay: 120 },
  { type: "blank",   text: "",                                                           delay: 300 },
  { type: "cmd",     text: "$ echo $AVAILABILITY",                                      delay: 500 },
  { type: "success", text: "AVAILABLE_IMMEDIATELY=true",                                delay: 200 },
  { type: "success", text: "OPEN_TO_RELOCATION=true",                                   delay: 200 },
];

const COLOR: Record<LineType, string> = {
  cmd:     "text-green-400",
  output:  "text-zinc-300",
  success: "text-cyan-400",
  blank:   "text-transparent",
  muted:   "text-zinc-500",
};

export default function Terminal() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= SCRIPT.length) return;
    const delay = SCRIPT[visible]?.delay ?? 200;
    const t = setTimeout(() => setVisible((v) => v + 1), delay);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/60"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 px-5 py-4 border-b border-zinc-800 bg-zinc-900/60">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-xs text-zinc-600 font-mono">
              himanshu@forge ~ zsh
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-7 font-mono text-sm leading-7 min-h-[420px]">
            {SCRIPT.slice(0, visible).map((line, i) => (
              <div key={i} className={COLOR[line.type]}>
                {line.text || " "}
              </div>
            ))}
            {visible < SCRIPT.length && (
              <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse align-middle" />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
