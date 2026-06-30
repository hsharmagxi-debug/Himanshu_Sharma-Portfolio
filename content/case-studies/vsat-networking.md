# VSAT & Network Engineering

## Problem Statement
How do you design reliable satellite video delivery for a nationwide government e-learning initiative across hundreds of remote classrooms with no terrestrial connectivity?

---

## Architecture — Government E-Learning (KMG / Hughes HCIL)

- **Satellite Platform**: Hughes HTS (High-Throughput Satellite), Ku/Ka-band
- **Link Design**: EIRP calculations, link budgets, Eb/No margin analysis per site
- **Bandwidth**: Per-site allocation planning with contention ratio management
- **Encoding**: H.264 compression tuned for VSAT bandwidth constraints
- **RF**: Antenna alignment, interference mitigation, rain fade margin planning
- **NOC**: Remote site monitoring, change window management, incident escalation

---

## HTS Fleet Migration — Hughes India

Executed large-scale enterprise/government VSAT fleet migration from legacy Hughes to HTS:

- RF configuration and post-migration signal validation for each site
- Fiber route planning, OTDR testing, and splicing for hub-side broadcast connectivity
- Escalation support during hub upgrades and broadcast workflow migrations
- Authored SOPs adopted as team standard for future migrations

---

## Enterprise Network Design — GXI / NHL

- **VLAN 802.1Q** segmentation for multi-tenant broadcast stream isolation
- **IGMP Snooping** to contain multicast streams within correct VLAN boundaries
- **QoS enforcement** for latency-sensitive live media (video frames cannot be queued)
- **Cisco IOS/IOS-XE**, HPE/Aruba, Juniper switch configuration and validation
- Architecture directly applicable to Avid NEXIS fabric networking and engine zone bandwidth configuration

---

## Outcomes

- Nationwide e-learning delivery maintained SLA across all VSAT sites throughout the project
- Zero critical signal loss incidents during government broadcast windows
- OTDR validation methodology adopted as team standard SOP

---

## Key Lesson

In satellite delivery, margin is everything. A link budget that looks fine on paper can fail under rain fade or antenna drift conditions. Always design for worst-case Eb/No, not nominal — and always build an automated monitoring alert for signal level degradation before it becomes an outage.
