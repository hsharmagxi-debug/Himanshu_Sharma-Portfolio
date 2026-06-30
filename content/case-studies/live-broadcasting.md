# Live Broadcasting Operations — NHL Events

## Problem Statement
How do you maintain 99.9% uptime across 1,500+ live NHL broadcast events on a globally distributed AWS media infrastructure with zero SLA escalations?

---

## Architecture

- **Ingest**: Zixi / SRT / RTMP from arena encoders (Sencore, Telstra, Adtec)
- **AWS MediaConnect**: Encrypted contribution flow transport with redundant paths
- **AWS MediaLive**: Transcode to adaptive bitrate (H.264/H.265, HLS, MPEG-TS)
- **AWS MediaPackage**: Origin packaging and CDN origin endpoint management
- **VTOC / Clubstream**: Post-event archival and VOD workflow
- **Monitoring**: Zixi Zen Master, AWS CloudWatch, Datadog, Grafana

---

## Operational Approach

- 24×7×365 Tier 3/4 incident ownership — triage through RCA closure
- 100% ServiceNow case management compliance
- 100% shift handoff documentation compliance
- Predictive alerting frameworks reduced incident response time by 35%
- VLAN-segmented, IGMP Snooping, QoS-enforced Layer 2/3 network topologies

---

## Codec & Signal Expertise

- DNxHD / DNxHR — direct Avid NEXIS workflow compatibility
- H.264 / H.265 / AVC-Intra — encoder/decoder validation for frame-accurate delivery
- MXF / MOV / MPEG-TS container handling
- Audio commissioning: Dante AoIP, Biamp Tesira, QSC Q-SYS, Shure IntelliMix

---

## Outcomes

- **99.9% uptime** vs contracted 99.5% SLA
- **Zero Presidio SLA escalations** across 3 consecutive review cycles
- **35% reduction** in incident response time via predictive alerting
- Promoted to Lead Technical Specialist based on sustained performance

---

## Key Lesson

Broadcast reliability is a process, not a configuration. Consistent RCA documentation, predictive alerting calibration, and tight shift handoff discipline are what keep a 1,500-event track record clean.
