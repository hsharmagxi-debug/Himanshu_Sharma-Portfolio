'use client';

import { motion } from 'framer-motion';

// Primary skill categories — merged from portfolio focus + CV technical depth
const skillCategories = [
  {
    title: "Broadcasting & Streaming",
    color: "text-orange-400",
    skills: [
      "AWS MediaLive",
      "MediaConnect",
      "MediaPackage",
      "Zixi / SRT / RTMP / HLS",
      "VTOC / Clubstream",
      "Sencore / Telstra / Adtec",
      "Live Monitoring",
      "MPEG-TS",
    ],
  },
  {
    title: "Avid & Post-Production",
    color: "text-red-400",
    skills: [
      "Avid Media Composer",
      "Avid NEXIS / ISIS",
      "Avid MediaCentral",
      "Pro Tools",
      "Avid Interplay / MAM",
      "Avid iNEWS / Airspeed",
      "DNxHD / DNxHR",
      "H.264 / H.265 / AVC-Intra",
      "MXF / MOV / MP4",
    ],
  },
  {
    title: "AI & Agentic Systems",
    color: "text-purple-400",
    skills: [
      "Claude",
      "Ollama",
      "LangGraph ReAct Agent",
      "LangChain LCEL",
      "ChromaDB",
      "RAG Pipelines",
      "Llama 3.3 70B",
      "n8n Workflows",
      "Multi-Agent Architecture",
    ],
  },
  {
    title: "Networking & Storage",
    color: "text-cyan-400",
    skills: [
      "VLAN 802.1Q / QoS",
      "IGMP Snooping",
      "Layer 2/3 Topology",
      "Cisco IOS/IOS-XE",
      "HPE/Aruba / Juniper",
      "Fiber / OTDR",
      "SAN / NAS",
      "VSAT / Satellite",
      "Multicast / Unicast",
    ],
  },
  {
    title: "Case Management & Monitoring",
    color: "text-yellow-400",
    skills: [
      "ServiceNow",
      "Datadog / Grafana",
      "AWS CloudWatch",
      "Zixi Zen Master",
      "LogicMonitor / JIRA",
      "Tier 3/4 Incident Response",
      "RCA / Bug Tracking",
      "SLA Governance",
    ],
  },
  {
    title: "AV Systems & Audio",
    color: "text-green-400",
    skills: [
      "Q-SYS / QSC",
      "Crestron NVX",
      "Biamp Tesira",
      "Dante AoIP",
      "Shure IntelliMix",
      "BSS Audio / ClearOne",
      "AMX / Extron / HDBaseT",
      "SIP / H.323 / RTP",
    ],
  },
  {
    title: "Full-Stack & Product",
    color: "text-blue-400",
    skills: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "React",
      "SQL",
      "WordPress REST",
      "LLM APIs",
    ],
  },
  {
    title: "Cloud, Linux & Scripting",
    color: "text-emerald-400",
    skills: [
      "Linux (CentOS/RHEL)",
      "AWS VPC / EC2",
      "Docker / Containers",
      "Python / Bash / PowerShell",
      "CI/CD",
      "REST API",
      "Windows Server / macOS",
      "UEM / Remote Enrolment",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold tracking-tight">Skills & Expertise</h2>
          <p className="text-white/60 mt-3 max-w-lg">
            11+ years across live broadcast infrastructure, Avid post-production workflows, enterprise networking,
            cloud operations, and AI systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all"
            >
              <h3 className={`font-semibold text-base mb-4 ${category.color}`}>{category.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs bg-white/10 rounded-full text-white/80"
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
