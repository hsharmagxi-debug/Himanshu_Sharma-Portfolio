'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Avid & Post-Production",
    skills: [
      "Avid Media Composer",
      "Avid NEXIS/ISIS",
      "Avid MediaCentral",
      "Pro Tools",
      "Avid Interplay / MAM",
      "Avid iNEWS / Airspeed",
      "DNxHD / DNxHR",
      "H.264 / H.265 / AVC-Intra",
      "MXF / MOV / MPEG-TS",
    ],
  },
  {
    title: "Broadcast & IP Video",
    skills: [
      "AWS MediaLive",
      "MediaConnect",
      "MediaPackage",
      "Zixi / SRT / RTMP / HLS",
      "VTOC / Clubstream",
      "Sencore / Telstra / Adtec",
      "Elemental Link/Live",
      "Harmonic / Ateme / Ericsson",
      "VSAT / Satellite / EIRP",
    ],
  },
  {
    title: "Networking & Storage",
    skills: [
      "VLAN 802.1Q / QoS",
      "IGMP Snooping",
      "Layer 2/3 Topology Design",
      "Cisco IOS/IOS-XE",
      "HPE/Aruba / Juniper",
      "Fiber / OTDR",
      "SAN / NAS",
      "Multicast / Unicast",
    ],
  },
  {
    title: "Case Management & Monitoring",
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
    skills: [
      "Q-SYS / QSC",
      "Crestron NVX",
      "Biamp Tesira",
      "Dante AoIP",
      "Shure IntelliMix",
      "BSS Audio / ClearOne",
      "AMX / Extron",
      "SIP / H.323 / RTP",
    ],
  },
  {
    title: "Cloud, Linux & Scripting",
    skills: [
      "Linux (CentOS/RHEL)",
      "AWS VPC / EC2",
      "Docker / Containers",
      "Python / Bash / PowerShell",
      "CI/CD",
      "LangChain / LangGraph",
      "Next.js 15 / TypeScript",
      "SQL",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-semibold tracking-tight">Skills & Expertise</h2>
          <p className="text-white/60 mt-3 max-w-md">
            11+ years across live broadcast infrastructure, post-production workflows, enterprise networking, and cloud operations.
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
