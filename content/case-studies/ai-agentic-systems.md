# AI & Agentic Systems

## AetherAI — On-Premise Enterprise AI Operating System

### Problem Statement
Enterprise teams need AI capabilities without sending proprietary data to the cloud. How do you design a privacy-first, air-gappable AI Operating System deployable in 90 days?

### Architecture
- **LLM Backend**: Ollama (Llama 3.3 70B, Mistral, Phi-3) — fully local, no cloud calls
- **Orchestration**: n8n workflows + LangChain LCEL pipelines
- **Memory**: ChromaDB vector store + RAG retrieval
- **Interface**: OpenWebUI + FastAPI custom endpoints
- **Stack**: Docker Compose, Python, Linux

### Outcome
Designed and presented 11-slide deck to GlobalXperts C-suite across 9 departments with a 90-day deployment roadmap. **C-suite approved.**

---

## NASSCOM Agentic AI Hackathon

### Architecture
- **LLM**: Llama 3.3 70B via Groq (sub-100ms inference latency)
- **Retrieval**: ChromaDB + LangChain LCEL document ingestion pipeline
- **Agent**: LangGraph ReAct Agent — tool-calling, multi-step reasoning, memory
- **UI**: Gradio
- **Result**: **5-Star Buddy Review** from NASSCOM panel judges (April 2026)

### What Made It Work
LangGraph's stateful graph allowed the agent to maintain context across tool calls — essential for multi-step retrieval tasks where naive RAG pipelines lose thread.

---

## The KPI Hub — Automated AI Content Pipeline

- 95%-automated 5-engine pipeline: Python + Claude 3.5 Sonnet + SerpAPI + WordPress REST
- Zero-human daily brief generation for B2B intelligence categories
- Automated quality validation layer catches hallucinations before publish

---

## Key Lesson

Production AI is infrastructure. Reliability, observability, and fallback handling matter as much as model quality. An LLM that fails silently in a pipeline is worse than no LLM at all. Always instrument your agents.
