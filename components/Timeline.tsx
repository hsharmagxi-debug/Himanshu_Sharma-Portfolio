"use client";

import { motion } from "framer-motion";

// Primary experience — recent + directly relevant roles
const EXPERIENCE = [
  {
    period: "Apr 2025 – Present",
    role: "Lead Technical Specialist — Promoted",
    company: "GlobalXperts Networks (GXI)",
    client: "Client: NHL / Presidio",
    location: "Noida, India",
    type: "Full-time",
    bullets: [
      "Promoted to Lead following sustained 99.9% SLA performance; led technical escalation handling, junior engineer mentoring, and shift handoff documentation standardisation across the global NHL broadcast support team.",
      "End-to-end case ownership for all Tier 3/4 incidents — from initial triage through bug reproduction, RCA documentation, and corrective action closure.",
      "Designed and presented AetherAI (on-premise enterprise AI automation suite) to GlobalXperts C-suite — 11-slide deck, 9 departments, 90-day roadmap. C-suite approved.",
    ],
    tags: ["Tier 3/4", "RCA", "ServiceNow", "Leadership", "AetherAI", "SLA Governance"],
  },
  {
    period: "2025 – Present",
    role: "Founder & CEO",
    company: "The KPI Hub",
    client: "thekpihub.com",
    location: "New Delhi, India",
    type: "Founder",
    bullets: [
      "Building a high-trust B2B SaaS intelligence platform delivering real-time category intelligence via AI-synthesized daily briefs — 95%-automated 5-engine AI content pipeline (Python, LLM APIs, WordPress REST, SerpAPI).",
      "Stack: Next.js 15, TypeScript, Tailwind, Supabase (with RLS), Claude 3.5 Sonnet, Vercel.",
    ],
    tags: ["Next.js 15", "TypeScript", "Supabase", "Claude", "SaaS", "AI Pipelines"],
  },
  {
    period: "Jun 2023 – Mar 2025",
    role: "AWS Streaming Technician – Broadcast & Cloud Operations",
    company: "GlobalXperts Networks (GXI)",
    client: "Client: NHL / Presidio",
    location: "Noida, India",
    type: "Full-time",
    bullets: [
      "Tier 3/4 technical support for global live streaming across AWS MediaLive and MediaConnect — end-to-end IP video ingest, transcode, and playout pipelines for 1,500+ live NHL broadcast events.",
      "Maintained 99.9% uptime against contracted 99.5% SLA — zero Presidio SLA escalations, 100% ServiceNow compliance, 100% shift handoff documentation compliance.",
      "Configured and validated encoder/decoder parameters (Sencore, Telstra, Adtec) for frame-accurate signal delivery — codec expertise transferable to Avid: DNxHD, DNxHR, H.264/H.265, AVC-Intra, MXF/MOV.",
      "Designed VLAN-segmented, IGMP Snooping, QoS-enforced Layer 2/3 network topologies — applicable to Avid NEXIS fabric networking and engine zone bandwidth configuration.",
      "Reduced incident response time by 35% via predictive alerting frameworks; managed VTOC for post-event archiving; commissioned DSP audio systems (Biamp Tesira, QSC Q-SYS, Shure IntelliMix) with Dante AoIP.",
    ],
    tags: ["AWS MediaLive", "MediaConnect", "Zixi/SRT/RTMP", "VTOC", "ServiceNow", "DNxHD/DNxHR", "VLAN", "Dante AoIP"],
  },
  {
    period: "Apr 2021 – May 2023",
    role: "Lead Technical Specialist – Broadcast, Cloud & VSAT Engineering",
    company: "KMG Tech Solutions Pvt. Ltd.",
    client: "Client: Hughes Communications India Ltd. (HCIL)",
    location: "Sonipat, Haryana",
    type: "Full-time",
    bullets: [
      "Managed broadcast streaming infrastructure for a nationwide government e-learning project over VSAT — designed link budgets, EIRP calculations, bandwidth allocation, and RF parameters for satellite video delivery across hundreds of remote classrooms.",
      "Led technical team delivery: field operations oversight, SLA governance, client escalation management, and corrective action implementation for critical broadcast incidents.",
      "Coordinated multi-site VSAT installations, remote migrations, and satellite upgrades; supported NOC teams during incidents and change windows.",
      "Authored SOPs, configuration procedures, and operational workflow documentation; drove process improvements that enhanced incident resolution speed and SLA adherence.",
    ],
    tags: ["VSAT", "EIRP", "Link Budget", "SLA Governance", "NOC Support", "SOPs"],
  },
  {
    period: "Sep 2018 – Mar 2021",
    role: "Sr. Network Engineer – Network & Satellite Projects",
    company: "Hughes Communications India Ltd.",
    location: "India",
    type: "Full-time",
    bullets: [
      "Executed high-throughput satellite (HTS) migration for enterprise and government VSAT fleets: RF configuration, remote site validation, post-migration quality testing; designed link budgets, EIRP calculations, and satellite delivery architecture.",
      "Conducted fiber route planning, OTDR testing, and splicing for broadcast connectivity; provided escalation support for hub upgrades and broadcast workflow migrations.",
    ],
    tags: ["VSAT/HTS", "RF Configuration", "EIRP", "Fiber/OTDR", "Network Architecture"],
  },
];

// Earlier career — shown separately in a compact block
const EARLIER_CAREER = [
  {
    period: "Jun 2016 – Aug 2018",
    role: "Senior Testing Engineer",
    company: "Krishna Associates",
    type: "Part-time",
    note: "Route planning, field assessment, quality validation, and RCA documentation for all testing deliverables.",
  },
  {
    period: "Jan 2013 – May 2016",
    role: "Technical Support & IT Operations | Process Developer",
    company: "Genpact India / System Networks",
    client: "Account: Samsung — AV & IT Operations",
    type: "Full-time",
    note: "End-to-end IT and AV device technical support for Samsung consumer electronics and enterprise AV lines; incident resolution, user training, MTTR reduction.",
  },
];

const CERTIFICATIONS = [
  { name: "ServiceNow IT Leadership Professional Certificate", issuer: "ServiceNow", year: "2025" },
  { name: "AWS Elemental Media Services (MediaLive, MediaPackage, MediaStore)", issuer: "AWS", year: "2023–24" },
  { name: "AWS Elemental Link", issuer: "AWS", year: "2024–25" },
  { name: "AWS MediaLive Captions", issuer: "AWS", year: "2024–25" },
  { name: "AWS Storage Services Deep Dive", issuer: "AWS", year: "2023–24" },
  { name: "AI-Driven Professional", issuer: "AI Career Accelerator Inner Circle", year: "2025" },
  { name: "SQL | Python Workshop", issuer: "Be10x", year: "Jun 2025" },
  { name: "India's Top 300 Builders — VibeCon 2025 (YC × Anthropic × Lightspeed × Razorpay)", issuer: "VibeCon", year: "2025" },
  { name: "NASSCOM Agentic AI Hackathon — 5-Star Buddy Review", issuer: "NASSCOM", year: "Apr 2026" },
];

const PURSUING = [
  "Avid Certified User",
  "Crestron Certified",
  "Biamp Tesira Certified",
  "QSC Q-SYS Level 1",
  "AVIXA CTS",
];

const EDUCATION = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Shobhit University",
    period: "Apr 2014 – May 2016",
  },
  {
    degree: "Diploma – Information Technology Enabled Services & Management (ITSM Branch)",
    institution: "Integrated Institute of Technology, Dwarka, New Delhi",
    period: "2011 – 2014",
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="bg-zinc-950 py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Career History
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience
          </h2>
          <p className="mt-4 text-zinc-400">
            Broadcast Cloud Operations → VSAT Engineering → Lead Technical Specialist (NHL) → SaaS Founder & AI Builder
          </p>
        </motion.div>

        {/* Primary Timeline */}
        <div className="relative">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-zinc-800" />

          <div className="space-y-12">
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={`${job.company}-${i}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-cyan-400 -translate-x-0.5" />

                <div className="text-xs font-mono text-zinc-500 mb-2">{job.period}</div>

                <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                  <h3 className="text-lg font-bold text-white">{job.role}</h3>
                  <span className="text-zinc-600">·</span>
                  <span className="text-cyan-400 font-semibold text-sm">{job.company}</span>
                </div>

                {"client" in job && job.client && (
                  <div className="text-xs text-zinc-500 mb-1">{job.client}</div>
                )}

                <div className="text-xs text-zinc-600 mb-4">
                  {job.location} · {job.type}
                </div>

                <ul className="space-y-2 mb-5">
                  {job.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      className="flex items-start gap-2 text-sm text-zinc-400 leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-zinc-500 bg-zinc-800/70 border border-zinc-700/60 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Earlier Career — isolated compact block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16"
        >
          <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-2xl p-6">
            <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-4">
              Earlier Career
            </h4>
            <div className="space-y-4">
              {EARLIER_CAREER.map((job, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-600 flex-shrink-0" />
                  <div>
                    <div className="flex flex-wrap items-baseline gap-1.5">
                      <span className="text-sm text-zinc-300 font-medium">{job.role}</span>
                      <span className="text-zinc-600 text-xs">·</span>
                      <span className="text-zinc-500 text-xs">{job.company}</span>
                      {"client" in job && job.client && (
                        <span className="text-zinc-600 text-xs">· {job.client}</span>
                      )}
                    </div>
                    <div className="text-xs text-zinc-600 mb-1">{job.period} · {job.type}</div>
                    <div className="text-xs text-zinc-500 leading-relaxed">{job.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">
              Certifications & Recognition
            </h4>
            <div className="space-y-2.5 mb-5">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.name} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <div>
                    <span className="text-sm text-zinc-300">{cert.name}</span>
                    <span className="text-zinc-600 text-xs ml-2">{cert.issuer} · {cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-zinc-800 pt-4">
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Currently Pursuing</p>
              <div className="flex flex-wrap gap-2">
                {PURSUING.map((cert) => (
                  <span key={cert} className="text-xs font-mono text-zinc-500 bg-zinc-800/70 border border-zinc-700/60 px-2.5 py-1 rounded-md">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6">
            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-4">
              Education
            </h4>
            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div key={edu.degree} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-zinc-300 font-medium">{edu.degree}</div>
                    <div className="text-xs text-zinc-500">{edu.institution} · {edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
