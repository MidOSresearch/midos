---
title: Architecture
description: How MidOS organizes knowledge through a 5-layer pipeline, vector search, and tiered access control.
---

## System Overview

MidOS is a **knowledge-as-a-service platform** for AI agents, built on the Model Context Protocol (MCP). It provides curated, validated knowledge through semantic search and structured tools.

```
┌─────────────────────────────────────────────┐
│              MCP Clients                     │
│  Claude Desktop │ Cursor │ VS Code │ Cline  │
└────────┬────────────────────────────────────┘
         │  stdio / HTTP (JSON-RPC 2.0)
         ▼
┌─────────────────────────────────────────────┐
│           MidOS MCP Server                   │
│  ┌──────────┐ ┌──────────┐ ┌─────────────┐ │
│  │ Auth &   │ │ Tool     │ │ Metrics &   │ │
│  │ Tiers    │ │ Router   │ │ Sessions    │ │
│  └──────────┘ └──────────┘ └─────────────┘ │
└────────┬────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│         Knowledge Layer                      │
│  ┌──────────┐ ┌──────────┐ ┌─────────────┐ │
│  │ Chunks   │ │ Skills   │ │ EUREKA/SOTA │ │
│  │ (46,000+)│ │ (125)    │ │ (574)       │ │
│  └──────────┘ └──────────┘ └─────────────┘ │
│  ┌──────────┐ ┌──────────┐                  │
│  │ Truth    │ │ Vector   │                  │
│  │ Patches  │ │ Store    │                  │
│  │ (52)     │ │ (670K+)  │                  │
│  └──────────┘ └──────────┘                  │
└─────────────────────────────────────────────┘
```

## Knowledge Pipeline

Content flows through 5 layers of validation before reaching agents:

### Layer 1: Staging → Chunks
Raw content (books, docs, research, Discord harvests) enters the staging area. It gets distilled into focused chunks — each chunk covers one concept, one pattern, or one technique.

- **Input**: Books, documentation, research papers, community discussions
- **Output**: 46,000+ focused knowledge chunks
- **Quality**: Frontmatter with metadata, tags, source attribution

### Layer 2: Skills
Chunks that describe actionable patterns are promoted to skills. Each skill is a self-contained document covering a specific technology or practice.

- **Coverage**: 20+ tech stacks (React, FastAPI, Django, NestJS, Go, Rust, K8s, etc.)
- **Format**: Structured markdown with code examples, patterns, and anti-patterns
- **Count**: 125 skills

### Layer 3: Truth Patches
Corrections to common misconceptions or outdated information. When we discover that a widely-held belief is wrong, we create a truth patch.

- **Format**: Problem → Evidence → Correction
- **Count**: 52 verified patches
- **Examples**: Cache invalidation patterns, ORM anti-patterns, security misconfigurations

### Layer 4: EUREKA
Breakthrough discoveries and improvements validated through testing. Each EUREKA entry includes implementation details and measured ROI.

- **Format**: Problem → Solution → Test Results → ROI
- **Count**: 436 validated improvements
- **Promotion**: High-impact EUREKAs get promoted to SOTA

### Layer 5: SOTA (State of the Art)
The top-tier knowledge — the best patterns, the most impactful discoveries. Only content with proven, significant value reaches this level.

- **Count**: 138 state-of-the-art entries
- **Access**: Dev tier and above

## Vector Store

MidOS uses **LanceDB** with **Gemini embeddings** (3072-dimensional) for semantic search.

| Property | Value |
|----------|-------|
| Engine | LanceDB |
| Embedding Model | gemini-embedding-001 |
| Dimensions | 3,072 |
| Total Vectors | 670,000+ |
| Search Modes | Vector, Keyword, Hybrid |
| Reranking | Built-in relevance reranking |

### Search Modes

- **Keyword**: Fast grep-based search. Good for exact matches.
- **Vector (Semantic)**: Embedding similarity search. Finds conceptually related content even with different wording.
- **Hybrid** (default): Keyword first, semantic fallback. Best of both worlds.

## Access Control

Every tool call passes through the auth layer:

1. Extract `Authorization: Bearer <token>` header
2. Localhost requests get admin access (bypass)
3. Token prefix determines tier: `midos_sk_dev_*`, `midos_sk_pro_*`, `midos_sk_admin_*`
4. No token = free tier

See [Access Tiers](/midos-web/tiers/) for the full breakdown.

## Transports

| Transport | Command | Use Case |
|-----------|---------|----------|
| **stdio** (default) | `midos-mcp serve` | Single-client IDE integration |
| **HTTP** | `midos-mcp serve --http` | Multi-client, remote access |

Both transports use JSON-RPC 2.0 per the MCP specification.

## Input Protection

All tools enforce input bounds to prevent abuse:

- Query strings truncated to 5,000 characters
- Name lookups truncated to 200 characters
- Results capped at 100 items max
- File content truncated to 10,000 characters
- Path traversal prevention on all file operations
