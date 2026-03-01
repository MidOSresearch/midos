<!-- mcp-name: io.github.MidOSresearch/midos -->
<p align="center">
  <h1 align="center">MidOS — MCP Server for Developer Knowledge</h1>
  <p align="center">Curated, validated knowledge for AI coding agents. Not raw docs — battle-tested patterns.</p>
</p>

<p align="center">
  <a href="https://modelcontextprotocol.io"><img src="https://img.shields.io/badge/MCP-Compatible-blue?style=flat-square" alt="MCP Compatible"></a>
  <a href="https://claude.ai"><img src="https://img.shields.io/badge/Claude_Code-Ready-D79943?style=flat-square" alt="Claude Code"></a>
  <a href="https://cursor.com"><img src="https://img.shields.io/badge/Cursor-Ready-4B8BBE?style=flat-square" alt="Cursor"></a>
  <a href="https://github.com/cline/cline"><img src="https://img.shields.io/badge/Cline-Ready-green?style=flat-square" alt="Cline"></a>
  <a href="https://github.com/nicepkg/aide"><img src="https://img.shields.io/badge/Windsurf-Ready-purple?style=flat-square" alt="Windsurf"></a>
  <br>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT License"></a>
  <a href="https://github.com/MidOSresearch/midos/stargazers"><img src="https://img.shields.io/github/stars/MidOSresearch/midos?style=social" alt="GitHub stars"></a>
  <a href="https://smithery.ai"><img src="https://img.shields.io/badge/Smithery-Listed-orange?style=flat-square" alt="Smithery"></a>
  <a href="https://www.python.org/"><img src="https://img.shields.io/badge/Python-3.10+-blue?style=flat-square&logo=python&logoColor=white" alt="Python 3.10+"></a>
</p>

---

**200+ skill packs** across 20+ tech stacks. **46,000+ curated chunks**. **383 validated discoveries**. Every piece reviewed, cross-validated, and myth-busted.

```
Your agent asks: "How do I implement optimistic updates in React 19?"
MidOS returns: Battle-tested pattern with useOptimistic + Server Actions, validated Feb 2026.
Context7 returns: Raw React docs from reactjs.org.
```

## Quick Start

**One line.** Add to your MCP config and start querying:

<details>
<summary><b>Claude Code</b> — <code>.mcp.json</code> or <code>~/.claude/settings.json</code></summary>

```json
{
  "mcpServers": {
    "midos": {
      "url": "https://mcp.midos.dev/mcp"
    }
  }
}
```
</details>

<details>
<summary><b>Cursor / Windsurf</b> — MCP Settings</summary>

Add a new server:
- **Name**: `midos`
- **URL**: `https://mcp.midos.dev/mcp`
- **Transport**: Streamable HTTP
</details>

<details>
<summary><b>Cline</b> — MCP Settings</summary>

```json
{
  "mcpServers": {
    "midos": {
      "url": "https://mcp.midos.dev/mcp",
      "transportType": "streamable-http"
    }
  }
}
```
</details>

<details>
<summary><b>Claude Desktop</b> — <code>claude_desktop_config.json</code></summary>

- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "midos": {
      "url": "https://mcp.midos.dev/mcp"
    }
  }
}
```
</details>

<details>
<summary><b>Self-hosted</b> — Run locally</summary>

```bash
git clone https://github.com/MidOSresearch/midos.git
cd midos
pip install -e .
pip install -e hive_commons/
python -m modules.mcp_server.midos_mcp --http --port 8419
```

Then point your MCP client to `http://localhost:8419/mcp`.
</details>

### First Tool Call

After connecting, personalize your experience:

```
agent_handshake(model="claude-opus-4-6", client="claude-code", languages="python,typescript", frameworks="fastapi,react")
```

Then search for what you need:

```
search_knowledge("React 19 Server Components patterns")
```

## Tools Reference

### Dev Tier (free, no API key)

| Tool | Description | Example |
|------|-------------|---------|
| `search_knowledge` | Search 46,000+ curated chunks across all stacks | `search_knowledge("FastAPI dependency injection")` |
| `smart_search` | Unified search with auto/keyword/semantic/hybrid modes | `smart_search("PostgreSQL JSONB indexing")` |
| `hybrid_search` | Combined keyword + semantic search with reranking | `hybrid_search("event sourcing patterns")` |
| `list_skills` | Browse 200+ skill packs by technology | `list_skills(stack="react")` |
| `get_skill` | Get a complete skill pack | `get_skill("nextjs")` |
| `get_eureka` | Access 383 validated breakthrough discoveries | `get_eureka("response-cache")` |
| `get_truth` | Empirically verified truth patches (50 items) | `get_truth("qlora-myths")` |
| `semantic_search` | Vector search with Gemini embeddings (670K vectors, 3072-d) | `semantic_search("event sourcing CQRS")` |
| `get_protocol` | Protocol and pattern documentation | `get_protocol("domain-driven-design")` |
| `hive_status` | System health and live statistics | `hive_status()` |
| `agent_handshake` | Personalized onboarding for your model + stack | See example above |

### Pro Tier ($20/mo — security ops, AOTC, orchestration)

| Tool | Description | Example |
|------|-------------|---------|
| `get_aotc` | Ahead-of-the-curve frontier research (140 SOTA + 3 AOTC) | `get_aotc("mcp-streaming")` |
| `security_scan_target` | Automated security scanning | `security_scan_target("https://example.com")` |
| `generate_pentest_report` | Penetration testing report | `generate_pentest_report(target="api")` |
| `quality_gate` | Quality gate evaluation for knowledge items | `quality_gate(chunk_id="react19_hooks")` |
| `episodic_search` | Search agent session history | `episodic_search("last deployment issue")` |
| `create_plan` | Persistent execution plans for multi-step tasks | `create_plan(goal="migrate to v2")` |
| `where_was_i` | Recover last session context instantly | `where_was_i()` |

## Skill Packs (200+ and growing)

Production-tested patterns for:

**Frontend**: React 19, Next.js 16, Angular 21, Svelte 5, Tailwind CSS v4, Remix v2

**Backend**: FastAPI, Django 5, NestJS 11, Laravel 12, Spring Boot, Symfony 8

**Languages**: TypeScript, Go, Rust, Python

**Data**: PostgreSQL, Redis, MongoDB, Elasticsearch, LanceDB, Drizzle ORM, Prisma 7

**Infrastructure**: Kubernetes, Terraform, Docker, GitHub Actions

**AI/ML**: LoRA/QLoRA, MCP patterns, multi-agent orchestration, Vercel AI SDK

**Testing**: Playwright, Vitest

**Architecture**: DDD, GraphQL, event-driven, microservices, spec-driven dev

## How MidOS is Different

| | Raw Docs (Context7, etc.) | MidOS |
|---|---|---|
| **Content** | Documentation dumps | Curated, human-reviewed, cross-validated |
| **Quality** | No validation | 5-layer pipeline: chunks → truth → EUREKA → SOTA |
| **Search** | Keyword matching | Semantic + hybrid search (Gemini embeddings, 3072-d) |
| **Onboarding** | Generic | Personalized per model + CLI + stack |
| **Format** | Raw text | Stack-specific skill packs with production patterns |
| **Accuracy** | Stale docs | Myth-busted with empirical evidence |

## Knowledge Pipeline

```
staging/ → chunks/ → skills/ → truth/ → EUREKA/ → SOTA/
 (entry)    (L1)      (L2)      (L3)     (L4)      (L5)
```

- **Chunks** (46,000+): Curated, indexed knowledge across 20+ stacks
- **Skills** (200+): Organized, actionable, versioned by stack
- **Truth** (50): Verified with empirical evidence
- **EUREKA** (383): Validated improvements with measured ROI
- **SOTA** (140): Best-in-class, currently unimprovable

## Using an API Key

Pass your key via the `Authorization` header for Pro access:

```json
{
  "mcpServers": {
    "midos": {
      "url": "https://mcp.midos.dev/mcp",
      "headers": {
        "Authorization": "Bearer midos_your_key_here"
      }
    }
  }
}
```

Get a key at [midos.dev/pricing](https://midos.dev/pricing).

## Architecture

```
midos/
├── modules/mcp_server/   FastMCP server (streamable-http)
├── knowledge/
│   ├── chunks/            Curated knowledge (L1) — 46,000+ items
│   ├── skills/            Stack-specific skill packs (L2) — 200+ items
│   ├── EUREKA/            Validated discoveries (L4) — 383 items
│   ├── SOTA/              State-of-the-art (L5) — 140 items
│   └── truth/             Empirical patches (L3) — 50 items
├── hive_commons/          Shared library (LanceDB vector store, config)
├── smithery.yaml          Smithery marketplace manifest
├── Dockerfile             Production container
└── pyproject.toml         Dependencies and build config
```

## Tech Stack

- **Server**: [FastMCP](https://github.com/jlowin/fastmcp) 2.x (streamable-http transport)
- **Vectors**: [LanceDB](https://lancedb.com) + Gemini embeddings (670,000+ vectors, 3072-d)
- **Auth**: 2-tier API key middleware (dev → pro) with rate limiting
- **Pipeline**: 5-layer quality validation with myth-busting
- **Deploy**: Docker + Coolify (auto-deploy on push)

## Contributing

MidOS is community-first. If you have production-tested patterns, battle scars, or discovered that a popular claim is false — we want it.

1. Search existing knowledge first: `search_knowledge("your topic")`
2. [Open an issue](https://github.com/MidOSresearch/midos/issues/new) describing the pattern or discovery
3. We'll review and add it to the pipeline

## License

[MIT](LICENSE)

---

<p align="center">
  Source-verified developer knowledge. Built by devs, for agents.
  <br>
  <a href="https://midos.dev">midos.dev</a> · <a href="https://github.com/MidOSresearch/midos/discussions">Discussions</a> · <a href="https://github.com/MidOSresearch/midos/issues">Issues</a>
</p>
