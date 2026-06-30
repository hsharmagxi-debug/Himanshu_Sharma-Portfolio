import { NextResponse } from "next/server";
import { profile } from "@/lib/profile";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TOPICS: {
  key: keyof typeof profile.knowledgeAreas;
  label: string;
  keywords: string[];
  tools: string[];
  principles: string[];
}[] = [
  {
    key: "broadcasting",
    label: "Live Broadcasting, Streaming & Avid Workflows",
    keywords: [
      "broadcast", "nhl", "streaming", "medialive", "mediaconnect", "mediapackage",
      "srt", "rtmp", "hls", "vtoc", "live", "avid", "media composer", "nexis", "isis",
      "mediacental", "dnxhd", "dnxhr", "mxf", "mov", "codec", "ingest", "playout",
      "mam", "nle", "editing", "sencore", "telstra", "adtec", "elemental", "zixi",
      "mpeg-ts", "servicenow", "incident", "uptime", "sla", "tier 3", "tier 4",
    ],
    tools: [
      "AWS MediaLive", "MediaConnect", "MediaPackage",
      "Avid MediaCentral", "Avid NEXIS/ISIS", "Avid Media Composer",
      "Zixi / SRT / RTMP / HLS", "VTOC", "Sencore / Telstra / Adtec",
      "ServiceNow", "Datadog / CloudWatch",
    ],
    principles: [
      "1,500+ live NHL events supported — 99.9% uptime vs contracted 99.5% SLA",
      "Zero Presidio SLA escalations across three consecutive review cycles",
      "100% ServiceNow case management compliance — zero tickets beyond SLA threshold",
      "35% incident response time reduction via predictive alerting frameworks",
      "End-to-end case ownership: triage → bug reproduction → RCA → corrective action closure",
      "Codec expertise directly transferable to Avid: DNxHD, DNxHR, H.264/H.265, AVC-Intra, MXF/MOV",
      "VTOC post-event archiving analogous to Avid MAM / Interplay archiving workflows",
    ],
  },
  {
    key: "ai",
    label: "AI & Agentic Systems",
    keywords: [
      "ai", "llm", "rag", "agent", "claude", "ollama", "embedding", "vector",
      "multi-agent", "n8n", "langgraph", "langchain", "autonomous", "aether",
      "polymind", "self-hosted", "llama", "nasscom", "hackathon", "chromadb",
    ],
    tools: ["Claude", "Ollama", "LangGraph ReAct Agent", "LangChain LCEL", "ChromaDB", "n8n", "Groq / Llama 3.3 70B"],
    principles: [
      "AetherAI — on-premise enterprise AI suite; 11-slide deck, 9 departments, 90-day roadmap; C-suite approved",
      "NASSCOM Agentic AI Hackathon: full RAG + Agentic pipeline — Llama 3.3 70B + ChromaDB + LangGraph ReAct + Gradio",
      "Privacy-first: self-hosted AI for air-gapped enterprise environments",
      "RAG pipeline: chunk → embed → store in vector DB → retrieve → generate",
      "Multi-agent orchestration for parallel task execution using LangGraph",
      "Zero vendor lock-in: open-source stack with local inference via Ollama",
    ],
  },
  {
    key: "saas",
    label: "SaaS Building & Product Engineering",
    keywords: [
      "saas", "product", "kpi", "hub", "supabase", "next", "nextjs", "startup",
      "founder", "b2b", "mrr", "monetization", "pipeline", "intelligence",
      "thekpihub", "polymind", "lumina",
    ],
    tools: ["Next.js 15", "TypeScript", "Supabase", "Claude", "Vercel", "Tailwind CSS", "WordPress REST", "SerpAPI"],
    principles: [
      "The KPI Hub — self-funded B2B SaaS; 95%-automated 5-engine AI content pipeline",
      "Ship fast, harden incrementally — production-grade from day one",
      "Supabase RLS for row-level security on multi-tenant data",
      "AI-synthesized content pipelines for automated intelligence briefs",
      "Selected as India's Top 300 Builders at VibeCon 2025 (YC × Anthropic × Lightspeed × Razorpay)",
    ],
  },
  {
    key: "platform",
    label: "SLA Governance & Incident Management",
    keywords: [
      "sla", "incident", "platform", "reliability", "observability", "automation",
      "ci", "cd", "deploy", "uptime", "docker", "vercel", "github actions",
      "devops", "rca", "servicenow", "datadog", "monitoring", "runbook", "sop",
    ],
    tools: ["ServiceNow", "Datadog", "Grafana", "AWS CloudWatch", "Zixi Zen Master", "LogicMonitor", "JIRA"],
    principles: [
      "99.9% uptime delivered — SLA governance across 1,500+ NHL broadcast events",
      "Zero SLA escalations across all monitoring cycles; 100% shift handoff compliance",
      "35% MTTR reduction via predictive alerting and structured escalation workflows",
      "RCA documentation with structured evidence — validated by US client ops team",
      "SOPs, troubleshooting runbooks, and shift handoff templates adopted team-wide",
      "Automation over manual toil: everything that can run on a schedule, should",
    ],
  },
  {
    key: "networking",
    label: "AV Systems, Networking & VSAT Engineering",
    keywords: [
      "av", "audio", "video", "crestron", "qsys", "q-sys", "amx", "hdbaset",
      "vlan", "switching", "network", "enterprise", "commissioning", "rstp", "mstp",
      "dante", "aoi", "biamp", "tesira", "shure", "bss", "clearone", "dsp",
      "vsat", "satellite", "eirp", "rf", "link budget", "hts", "fiber", "otdr",
      "cisco", "aruba", "juniper", "layer 2", "layer 3",
    ],
    tools: ["Q-SYS / QSC", "Crestron NVX", "Biamp Tesira", "Dante AoIP", "Shure IntelliMix", "BSS Audio", "AMX / Extron", "Cisco IOS/IOS-XE", "HPE/Aruba"],
    principles: [
      "VLAN-segmented, IGMP Snooping, QoS-enforced Layer 2/3 topologies for multi-tenant broadcast delivery",
      "VSAT satellite delivery: link budgets, EIRP calculations, RF parameters — nationwide government broadcast infrastructure",
      "Fiber route planning, OTDR testing, and splicing for broadcast connectivity",
      "DSP audio commissioning with Dante AoIP distribution — applicable to Pro Tools HDX/Native I/O",
      "SAN/NAS storage architecture; bandwidth & redundancy planning",
      "SIP / H.323 / RTP unified communications; MTR-Pro, Cisco Webex, Zoom Rooms",
    ],
  },
];

function matchTopic(question: string) {
  const q = question.toLowerCase();
  let best: (typeof TOPICS)[0] | null = null;
  let bestScore = 0;

  for (const topic of TOPICS) {
    const score = topic.keywords.filter((kw) => q.includes(kw)).length;
    if (score > bestScore) {
      bestScore = score;
      best = topic;
    }
  }
  return best;
}

export async function POST(req: Request) {
  const { question } = await req.json();

  if (!question?.trim()) {
    return NextResponse.json({ answer: "Please ask a question." });
  }

  const topic = matchTopic(question);

  if (!topic) {
    return NextResponse.json({
      answer: `Hi, I'm ${profile.identity.name} — ${profile.identity.title}.

I can answer questions on:
  · Live broadcasting, streaming & Avid-compatible workflows (NHL / AWS MediaLive)
  · AI & agentic systems (AetherAI, LangGraph, RAG, NASSCOM Hackathon)
  · SaaS building & product engineering (The KPI Hub)
  · SLA governance & incident management (ServiceNow, Tier 3/4)
  · AV systems, networking & VSAT engineering

Try asking something like "How do you manage live NHL broadcasts?" or "Tell me about your Avid workflow experience."`,
    });
  }

  const knowledgeBase = profile.knowledgeAreas[topic.key];

  const answer = `${profile.identity.name} on ${topic.label}
${"─".repeat(52)}

${knowledgeBase}

TOOLS I USE
${topic.tools.map((t) => `  · ${t}`).join("\n")}

KEY PRINCIPLES
${topic.principles.map((p) => `  ✔ ${p}`).join("\n")}

IMPACT
  · ${profile.impact.feeds} live NHL events · ${profile.impact.uptime} uptime
  · ${profile.impact.projects}+ production projects · ${profile.impact.recognition} India Builder (VibeCon 2025)

─────────────────────────────────────────────────────
Have a deeper question? → hsharma.gxi@gmail.com`;

  return NextResponse.json({ answer });
}
