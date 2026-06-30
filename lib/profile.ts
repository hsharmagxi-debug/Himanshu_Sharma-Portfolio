export const profile = {
  identity: {
    name: "Himanshu Sharma",
    title: "Broadcast & Cloud Operations Specialist | Avid TSE | AWS Media Services",
    location: "New Delhi, India",
    availability: "Available Immediately · Open to Relocation",
  },

  roles: [
    "Broadcast & Cloud Operations Specialist",
    "Lead Technical Specialist – NHL Broadcasts",
    "Avid Technical Support Engineer",
    "Builder of Autonomous AI Systems",
    "Founder & CEO, The KPI Hub",
  ],

  summary:
    "Broadcast and cloud operations engineer with 11+ years of hands-on experience in live streaming operations, IP video workflows, post-production pipeline support, and Tier 3/4 technical troubleshooting across globally distributed 24×7×365 teams. Delivered 99.9% uptime across 1,500+ live NHL broadcast events — exceeding contracted 99.5% SLA with zero escalations across three consecutive review cycles. Deep expertise in Avid-compatible workflows, codec troubleshooting (DNxHD, DNxHR, H.264, H.265, AVC-Intra, MXF/MOV), AWS MediaLive/MediaConnect/MediaPackage, ServiceNow case management, and Linux administration. Also building production-grade SaaS and autonomous AI systems as Founder of The KPI Hub.",

  // =========================
  // PLATFORM COMPETENCIES — operational/methodological skills
  // distinct from expertise{} to avoid duplication in SkillSnapshot
  // =========================
  skills: [
    "24×7×365 Live Operations",
    "Tier 3/4 Technical Support",
    "SLA Governance & Compliance",
    "Shift Handoff Documentation",
    "Predictive Alerting Frameworks",
    "RCA & Bug Reproduction",
    "SOPs & Runbooks",
    "Version Compatibility Planning",
    "Post-Production Pipeline Support",
    "Media Asset Management (MAM)",
    "NLE Workflow Support",
    "AV Commissioning",
    "Link Budget & EIRP",
    "Encoder / Decoder Validation",
  ],

  // =========================
  // STRUCTURED EXPERTISE (keys match SkillSnapshot CATEGORY_LABELS)
  // =========================
  expertise: {
    broadcasting: [
      "AWS MediaLive",
      "MediaConnect",
      "MediaPackage",
      "Zixi / SRT / RTMP / HLS",
      "VTOC / Clubstream",
      "Sencore / Telstra / Adtec",
      "Avid MediaCentral",
      "DNxHD / DNxHR",
      "MXF / MOV / MPEG-TS",
      "Frame-accurate Monitoring",
    ],
    cloud: [
      "AWS VPC / EC2",
      "Linux (CentOS/RHEL)",
      "Docker / Containers",
      "Python / Bash",
      "Datadog / CloudWatch",
      "ServiceNow",
      "CI/CD",
      "Grafana / LogicMonitor",
    ],
    ai: [
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
    fullstack: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "React",
      "SQL",
      "WordPress REST",
      "LLM APIs",
    ],
    platform: [
      "Q-SYS",
      "Crestron NVX",
      "Biamp Tesira",
      "Dante AoIP",
      "VLAN 802.1Q / QoS",
      "Cisco IOS/IOS-XE",
      "Fiber / OTDR",
      "VSAT / EIRP",
    ],
  },

  // =========================
  // IMPACT METRICS
  // =========================
  impact: {
    feeds: "1,500+",
    uptime: "99.9%",
    projects: 4,
    recognition: "Top 300",
  },

  // =========================
  // TAGS
  // =========================
  tags: [
    "live-broadcasting",
    "nhl-broadcast",
    "avid-workflows",
    "aws-media-services",
    "post-production",
    "ai-systems",
    "saas-founder",
    "platform-engineering",
    "vsat-engineering",
  ],

  // =========================
  // KNOWLEDGE BASE (RAG READY)
  // =========================
  knowledgeAreas: {
    broadcasting:
      "Lead Technical Specialist at GlobalXperts supporting 1,500+ live NHL broadcast events on AWS MediaLive and MediaConnect — 99.9% uptime vs contracted 99.5% SLA, zero Presidio SLA escalations, 100% ServiceNow case compliance. Configured Sencore, Telstra, and Adtec encoder/decoder parameters for frame-accurate delivery. Managed VTOC for post-event archiving. Reduced incident response time by 35% via predictive alerting. Deep expertise in Avid-compatible workflows: IP video ingest/playout, codec troubleshooting (DNxHD, DNxHR, H.264/H.265, AVC-Intra, MXF/MOV), MAM/NLE support — directly analogous to Avid MediaCentral Ingest, Capture, and Playout workflow support.",

    ai:
      "Designed and presented AetherAI (on-premise enterprise AI automation suite) to GlobalXperts C-suite — 11-slide deck, 9 departments, 90-day roadmap; C-suite approved. NASSCOM Agentic AI Hackathon: full RAG + Agentic pipeline — Llama 3.3 70B (Groq) + ChromaDB + LangChain LCEL + LangGraph ReAct Agent + Gradio UI; 5-star Buddy Review. Built PolyMind multi-LLM platform. Stack: Claude, Ollama, LangChain, n8n, Python. Privacy-first: self-hosted AI for air-gapped enterprise environments.",

    saas:
      "Sole developer of The KPI Hub (thekpihub.com) — self-funded B2B SaaS intelligence platform with 95%-automated 5-engine AI content pipeline using Python, LLM APIs, WordPress REST, and SerpAPI. Built PolyMind multi-LLM interface. Stack: Next.js 15, TypeScript, Supabase (with RLS), Claude, Vercel, Tailwind CSS. Selected as India's Top 300 Builders at VibeCon 2025 (YC × Anthropic × Lightspeed × Razorpay).",

    platform:
      "Tier 3/4 incident response and SLA governance: 100% ServiceNow case management compliance, zero SLA breaches across 1,500+ events, 35% incident response time reduction via predictive alerting frameworks. RCA, bug tracking and reproduction, shift handoff documentation, version compatibility planning. Also: VSAT delivery infrastructure for nationwide government e-learning — link budgets, EIRP calculations, bandwidth allocation, RF parameters across hundreds of remote classrooms.",

    networking:
      "Designed VLAN-segmented, IGMP Snooping, QoS-enforced Layer 2/3 network topologies for multi-tenant broadcast delivery — applicable to Avid NEXIS fabric networking and engine zone bandwidth configuration. Cisco IOS/IOS-XE, HPE/Aruba, Juniper. DSP audio commissioning: Biamp Tesira, QSC Q-SYS, Shure IntelliMix, BSS Audio, ClearOne with Dante AoIP distribution — applicable to Pro Tools HDX/Native I/O. AV commissioning: Crestron NVX, Extron, AMX, HDBaseT, SIP/H.323/RTP.",
  },
};
