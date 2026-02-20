# MidOS — Curated Knowledge API for AI Agents

> **22,900+ vectors | 104 skills | 104 validated discoveries | 48 MCP tools | 20+ tech stacks**

MidOS is a curated developer knowledge base exposed as an MCP server. Not raw docs — battle-tested patterns, validated against papers, and myth-busted. Plug into Claude Code, Cursor, Cline, Gemini CLI, or any MCP client.

## Why MidOS?

| Feature | Raw Docs (Context7, etc.) | MidOS |
|---------|---------------------------|-------|
| Content | Auto-scraped documentation | Curated, human-reviewed, cross-validated |
| Quality | No validation | 5-layer pipeline: chunks > truth > EUREKA > SOTA |
| Search | Keyword matching | Semantic + hybrid search (Gemini embeddings, 3072-d) |
| Onboarding | Generic | Personalized agent handshake per model + CLI + stack |
| Format | Raw text | Stack-specific skill packs with production patterns |
| Accuracy | Stale docs | Myth-busted (QLoRA, Next.js versions, Prisma Python) |

## Quick Start

### 1. Connect via HTTP (hosted)

```json
{
  "mcpServers": {
    "midos": {
      "url": "https://midos.dev/mcp",
      "transport": "streamable-http"
    }
  }
}
```

### 2. Or run locally

```bash
git clone https://github.com/MidOSresearch/midos-mcp.git
cd midos-mcp
pip install -e .
pip install -e hive_commons/
python -m modules.mcp_server.midos_mcp --http --port 8419
```

### 3. Query

```bash
# Free — no API key needed
curl -X POST http://localhost:8419/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"search_knowledge","arguments":{"query":"react 19 hooks"}}}'
```

## Tools

### Free Tier (8 tools, 100 queries/mo)

| Tool | Description |
|------|-------------|
| `search_knowledge` | Keyword search across all knowledge |
| `list_skills` | Browse 104 skills by stack |
| `hive_status` | System health and stats |
| `project_status` | Knowledge pipeline status |
| `pool_status` | Agent coordination status |
| `get_eureka` | Get a validated discovery document |
| `get_truth` | Get a verified truth patch |
| `agent_handshake` | Personalized onboarding per agent |

### Premium (additional tools with API key)

| Tool | Description |
|------|-------------|
| `semantic_search` | Vector search with Gemini embeddings |
| `hybrid_search` | Combined keyword + semantic + reranking |
| `get_skill` | Full skill content with production code |
| `get_protocol` | Protocol and pattern docs |
| `smart_search` | Adaptive search mode selection |
| `memory_stats` | Vector store analytics |
| `episodic_search` | Search agent session history |
| `episodic_store` | Store agent learnings |
| `chunk_code` | Intelligent code chunking |
| `pool_signal` | Multi-agent coordination |
| `research_youtube` | Video knowledge extraction |

## Knowledge Pipeline

```
staging/ > chunks/ > skills/ > truth/ > EUREKA/ > SOTA/
 (entry)    (L1)      (L2)      (L3)     (L4)      (L5)
```

- **Chunks** (1,284): Curated, indexed knowledge across 20+ stacks
- **Skills** (104): Organized, actionable, versioned by stack
- **Truth** (17): Verified with empirical evidence
- **EUREKA** (104): Validated improvements with measured ROI
- **SOTA** (11): Best-in-class, currently unimprovable

## Pricing

| Tier | Price | Queries/mo | Tools |
|------|-------|------------|-------|
| Free | $0 | 100 | 8 basic |
| Dev | $9/mo | 5,000 | All tools |
| Pro | $19/mo | 25,000 | All tools + priority |
| Team | $49/mo | 100,000 | All tools + 3 seats |
| Founders Pack | $49 one-time | 12 months Pro | Limited availability |

## Skill Stacks

React 19, Next.js 16, Angular 21, Svelte 5, TypeScript, Tailwind CSS, FastAPI, Django 5, NestJS 11, Laravel 12, Spring Boot, Go, Rust, PostgreSQL, Redis, MongoDB, Elasticsearch, Kubernetes, Terraform, Docker, Playwright, Vitest, DDD, GraphQL, Prisma 7, Drizzle ORM, MercadoPago, WhisperX, LoRA/QLoRA, LanceDB, MCP patterns, AI agent security, multi-agent orchestration, and more.

## Architecture

```
midos-mcp/
├── modules/
│   └── mcp_server/     FastMCP server (streamable-http)
├── hive_commons/       Shared library (LanceDB vector store, config)
├── smithery.yaml       Smithery marketplace manifest
├── Dockerfile          Production container
└── pyproject.toml      Dependencies and build config
```

## Tech Stack

- **Server**: FastMCP 2.x (streamable-http transport)
- **Vectors**: LanceDB + Gemini embeddings (22,900+ vectors, 3072-d)
- **Auth**: Tier-based API key middleware with rate limiting
- **Pipeline**: 5-layer quality validation with myth-busting
- **Compatible CLIs**: Claude Code, Cursor, Cline, Gemini CLI, OpenCode, Codex CLI

## Contributing

MidOS is community-first. If you have production-tested patterns, battle scars, or discovered that a popular claim is false — we want it.

```bash
# Search existing knowledge before contributing
python -m modules.mcp_server.midos_mcp --http --port 8419
# Then use search_knowledge to check if it already exists
```

## License

MIT

---

Source-verified developer knowledge. Built by devs, for agents.
