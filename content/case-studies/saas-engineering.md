# SaaS & Product Engineering — The KPI Hub

## Problem Statement
How do you build a solo-founder B2B SaaS from zero with automated AI content generation, enterprise-grade auth, and real-time delivery — without a team?

---

## Architecture

- **Frontend**: Next.js 15 App Router + TypeScript + Tailwind CSS
- **Database**: Supabase (PostgreSQL + Row-Level Security policies)
- **Auth**: Supabase Auth with session management
- **AI Pipeline**: Python + Claude 3.5 Sonnet + SerpAPI + WordPress REST
- **Deployment**: Vercel (CI/CD on push to main, edge CDN)
- **CMS**: WordPress (headless) via REST API

---

## 5-Engine AI Content Pipeline

1. **Discovery Engine** — SerpAPI scrapes category signals and trend data
2. **Synthesis Engine** — Claude 3.5 Sonnet synthesizes daily intelligence briefs
3. **Quality Engine** — automated fact-check and tone validation
4. **Publishing Engine** — WordPress REST API push with structured metadata
5. **Delivery Engine** — Supabase real-time + Vercel edge CDN to subscribers

**95% fully automated.** Human review only on quality-flagged outputs.

---

## Key Design Decision: Supabase RLS

Row-Level Security moves multi-tenant data isolation into the database layer:

```sql
-- Example: users only see their own subscription tier content
CREATE POLICY "user_own_tier" ON content
  FOR SELECT USING (auth.uid() = user_id AND tier <= subscription_tier);
```

This eliminates an entire class of application-layer auth bugs that commonly affect solo-built SaaS.

---

## Outcomes

- **India's Top 300 Builders** — VibeCon 2025 (YC × Anthropic × Lightspeed × Razorpay)
- Production SaaS with live subscribers
- Zero infrastructure incidents since launch

---

## Key Lesson

For a solo SaaS builder, database-level RLS and a fully automated content pipeline are the two architectural decisions that most directly compress the team size needed to run a B2B product. Remove the humans from the loop wherever the quality bar can be enforced programmatically.
