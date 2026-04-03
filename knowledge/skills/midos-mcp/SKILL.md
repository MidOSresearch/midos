---
name: midos-mcp
version: 1.0.0
description: >
  MidOS MCP server exposes a curated knowledge base as searchable MCP tools.
  Search knowledge chunks, retrieve skills and protocols, query EUREKA breakthroughs,
  run semantic vector search, and persist episodic memory across sessions.
  Use when the user asks to search a knowledge base, find documentation on a topic,
  recall something from a previous session, look up best practices, or retrieve
  curated research across domains like MCP, FastAPI, Astro, AI tooling, or DevOps.
homepage: https://github.com/MidOSresearch/midos
---

# MidOS MCP — Knowledge Base as MCP Tools

MidOS serves a curated knowledge base (46K+ chunks across software engineering, AI, DevOps, and more) through MCP tools. Connect to the server, then search, retrieve, and persist knowledge.

## Setup

```bash
pip install midos-mcp
export MIDOS_ROOT=/path/to/midos   # directory containing knowledge/ and modules/
midos-mcp serve                     # stdio transport (default for Claude Code)
```

Verify with `midos-mcp health` — confirms knowledge base detected and chunk counts.

## Core Tools

### Search and Retrieval

| Tool | What it does | Key parameters |
|------|-------------|----------------|
| `search_knowledge` | Full-text search across all knowledge chunks | `query`, `max_results` |
| `semantic_search` | Vector similarity search via LanceDB embeddings | `query`, `stack` (optional filter) |
| `get_skill` | Retrieve a specific skill document by name | `skill_name` |
| `list_skills` | List available skills, optionally filtered by stack | `stack` (optional) |
| `get_protocol` | Retrieve a protocol document | `protocol_name` |
| `get_eureka` | Retrieve a EUREKA breakthrough document | `eureka_name` |
| `get_truth` | Retrieve a verified truth-patch document | `truth_name` |

### Memory and State

| Tool | What it does | Key parameters |
|------|-------------|----------------|
| `episodic_store` | Save a finding or note to episodic memory | `content`, `context` |
| `episodic_search` | Search episodic memory for past findings | `query` |
| `memory_stats` | Show memory system statistics | — |

### System

| Tool | What it does |
|------|-------------|
| `hive_status` | Server health, uptime, knowledge counts |
| `project_status` | Live dashboard and quick-start guide |
| `agent_handshake` | Personalized onboarding for the current agent |

## Typical Workflow

1. **Find knowledge** — call `search_knowledge` with a topic query, or `semantic_search` for meaning-based lookup
2. **Drill into specifics** — use `get_skill`, `get_eureka`, or `get_protocol` to retrieve full documents returned in search results
3. **Save findings** — call `episodic_store` to persist useful results for future sessions
4. **Recall later** — use `episodic_search` to retrieve saved findings in a new conversation

Example: user asks "what are the best MCP security patterns?"
→ `search_knowledge(query="MCP security patterns")` returns matching chunks
→ `get_eureka(eureka_name="MCP_SECURITY_THREAT_MODEL_2026")` retrieves the full document
→ `episodic_store(content="MCP security summary: ...", context="security review")` saves it

## Error Recovery

| Problem | Fix |
|---------|-----|
| "knowledge base not found" | Set `MIDOS_ROOT` env var to the directory containing `knowledge/` |
| Empty search results | Broaden query terms; try `semantic_search` instead of `search_knowledge` for fuzzy matches |
| Connection refused | Confirm server is running (`midos-mcp serve`) and transport matches client config |
| Vector search unavailable | Install optional deps: `pip install midos-mcp[vector]` |

## Access Tiers

Dev tier (free, no API key): 34 tools, 500 queries/month, full content.
Pro tier ($10/mo): all 68 tools including security ops and write operations.
Invalid keys silently fall back to Dev tier.
