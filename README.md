# midos-mcp

**MidOS MCP Community Library** — Knowledge, Skills, and Research as MCP tools.

Install once, connect to any AI client.

## Install

```bash
pip install midos-mcp
```

**Requirement**: MidOS knowledge base must be available locally. Set the `MIDOS_ROOT` environment variable to point to your MidOS installation directory (the one containing `knowledge/` and `modules/`).

```bash
export MIDOS_ROOT=/path/to/midos
```

## Quick Start

```bash
# Start server (stdio — default for Claude Code, Cursor, etc.)
midos-mcp serve

# Start with HTTP transport
midos-mcp serve --http

# Generate config for your AI client
midos-mcp config --generate claude
midos-mcp config --generate cursor

# Check health
midos-mcp health
```

## Commands

### `midos-mcp serve`

Start the MCP server with your preferred transport.

```bash
midos-mcp serve              # stdio (default)
midos-mcp serve --http       # Streamable HTTP on 127.0.0.1:8419
midos-mcp serve --sse        # Legacy SSE transport
midos-mcp serve --http --host 0.0.0.0 --port 9000
```

| Flag | Transport | Use Case |
|------|-----------|----------|
| `--stdio` | stdio | Claude Code, Cursor, Cline (default) |
| `--http` | Streamable HTTP | Web clients, remote access |
| `--sse` | Server-Sent Events | Legacy clients |

### `midos-mcp config`

Generate ready-to-paste JSON config for any supported MCP client.

```bash
midos-mcp config --generate claude    # Claude Desktop / Claude Code
midos-mcp config --generate cursor    # Cursor IDE
midos-mcp config --generate cline     # Cline (VS Code)
midos-mcp config --generate windsurf  # Windsurf IDE
midos-mcp config --generate continue  # Continue.dev
midos-mcp config --generate zed       # Zed Editor
midos-mcp config --generate opencode  # OpenCode
midos-mcp config --generate http      # Generic HTTP client

# Write to file
midos-mcp config --generate claude -o mcp-config.json
```

### `midos-mcp health`

Check server health: knowledge base stats, vector store status, dependencies.

```bash
midos-mcp health          # Human-readable output
midos-mcp health --json   # JSON output for scripts
```

### `midos-mcp keys`

Manage API keys for tiered access control.

```bash
midos-mcp keys generate --name "my-app" --tier dev
midos-mcp keys list
midos-mcp keys revoke midos_sk_abc
```

Tiers: `dev` (free), `pro` ($10/mo), `admin`.

## Configuration

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `MIDOS_ROOT` | auto-detect | Path to MidOS installation (required) |
| `MIDOS_HOST` | `127.0.0.1` | HTTP server bind host |
| `MIDOS_PORT` | `8419` | HTTP server bind port |
| `MIDOS_TRANSPORT` | `stdio` | Default transport |

### Root Detection

The server locates the MidOS knowledge base:

1. `MIDOS_ROOT` environment variable (recommended)
2. Auto-detect: walks up from package location looking for `CLAUDE.md` + `knowledge/`
3. Fallback: current working directory

**If you installed via pip**, auto-detect won't find the knowledge base. Either:

```bash
# Option A: Clone the repo and point to it
git clone https://github.com/MidOSresearch/midos.git
export MIDOS_ROOT=./midos

# Option B: Point to an existing MidOS directory
export MIDOS_ROOT=/path/to/your/midos
```

Verify with `midos-mcp health` — it shows the detected root and knowledge counts.

## Supported Clients

| Client | Config File | Transport |
|--------|-------------|-----------|
| Claude Desktop | `claude_desktop_config.json` | stdio |
| Claude Code | `.mcp.json` | stdio |
| Cursor | `.cursor/mcp.json` | stdio |
| Cline | `cline_mcp_settings.json` | stdio |
| Windsurf | `~/.codeium/windsurf/mcp_config.json` | stdio |
| Continue.dev | `~/.continue/config.json` | stdio |
| Zed | `~/.config/zed/settings.json` | stdio |
| OpenCode | `opencode.json` | SSE |

## Optional Dependencies

```bash
# Vector store support (LanceDB + embeddings)
pip install midos-mcp[vector]

# Development tools
pip install midos-mcp[dev]
```

## What's Inside

MidOS exposes 68 MCP tools across 2 tiers:

| Tier | Tools | Access |
|------|-------|--------|
| **Dev** | 34 tools | Free — no API key needed, full content, 500 queries/month |
| **Pro** | 68 tools | $10/mo — security ops, AOTC, orchestration, maker write ops |

### Capabilities

- **Knowledge** — Search 46K+ curated chunks across all domains (full content, no truncation)
- **Skills** — 119 reusable patterns across 16+ technology stacks
- **EUREKA** — 383 validated improvements with measured ROI
- **Truth** — 50 verified patches and corrections
- **SOTA** — 140 state-of-the-art convergence ceilings
- **Vector Search** — Semantic search via LanceDB + Gemini embeddings (3072-d)

## Rate Limits

| Tier | Queries/month | Content |
|------|:-------------:|---------|
| Dev | 500 | Full content (no truncation) |
| Pro | 100,000 | Full content + AOTC + ops packs |

Invalid or expired API keys silently fall back to Dev tier.

## Requirements

- Python 3.10+
- FastMCP 2.x
- MidOS knowledge base (local)

## License

MIT
