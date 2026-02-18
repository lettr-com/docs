# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Lettr documentation site built with [Mintlify](https://mintlify.com). ~197 MDX files across product docs, API reference, quickstart guides, and a knowledge base.

## Commands

```bash
# Local development (fetches OpenAPI spec, then starts Mintlify dev server)
npm run dev

# Fetch OpenAPI spec only (also the build command for Mintlify deploys)
npm run fetch-openapi

# Install Mintlify CLI globally (required once)
npm i -g mintlify
```

Deployment is automatic on push to `main`.

## Key Facts

- **Config file**: `docs.json` (NOT `mint.json` — Mintlify renamed it)
- **API base URL**: `https://app.lettr.com/api`
- **Auth**: Bearer token with prefix `lttr_` (64 hex chars after prefix)
- **SMTP host**: `smtp.lettr.com` (port 587, STARTTLS)
- **OpenAPI spec**: Auto-fetched from `https://app.lettr.com/openapi.json` into `openapi.json` at build time
- **Theme colors**: Primary `#EC104B`, Light `#F04070`, Dark `#D00E43`

## Architecture

### Navigation Structure (docs.json)

Three top-level tabs configured in `docs.json` → `navigation.tabs`:

1. **Documentation** — `introduction.mdx`, `quickstart/` guides, `learn/` how-tos, `resources/`
2. **API Reference** — `api-reference/` (OpenAPI-driven endpoint pages)
3. **Knowledge Base** — `knowledge-base/` (concepts, DNS guides, best practices, troubleshooting, compliance)

All navigation is defined in `docs.json`. When adding a new page, you must also add it to the appropriate group in `docs.json` or it won't appear in the sidebar.

### Content Sections

| Directory | Purpose | Page count |
|-----------|---------|------------|
| `learn/` | Product how-to guides (sending, receiving, domains, templates, webhooks, etc.) | 70 |
| `knowledge-base/` | Educational content (DNS guides, fundamentals, troubleshooting, compliance) | 76 |
| `quickstart/` | Language/framework integration guides (Laravel, PHP, Node.js, SMTP, Python, Go, Rust, Java, Serverless) | 24 |
| `api-reference/` | API endpoint docs (auto-generated from OpenAPI spec) | 21 |
| `resources/` | SDKs, examples, integrations, security | 4 |

### API Reference Pages

API endpoint pages are minimal — they use an `openapi:` frontmatter directive and Mintlify auto-generates the rest from the OpenAPI spec:

```yaml
---
title: Send Email
openapi: POST /emails
---

Optional 1-2 sentence description.
```

Do NOT write request/response schemas manually for API pages; they come from `openapi.json`.

### Learn / Knowledge Base Pages

Standard MDX pages with Mintlify components:

```yaml
---
title: "Page Title"
description: "Brief description for SEO"
---
```

Common components: `<Card>`, `<CardGroup>`, `<Tip>`, `<Warning>`, `<Note>`, `<Info>`, `<Steps>/<Step>`, `<AccordionGroup>/<Accordion>`

### DNS Guides

All 19 DNS provider guides in `knowledge-base/dns-guides/` follow an identical structure: Sending Domain Setup, Inbound Domain Setup, Tracking Domain Setup, Storage Domain Setup — each with provider-specific screenshots from `images/`.

## Conventions

- API key placeholders must use `lttr_` prefix (never `le_` or other prefixes)
- SMTP host is always `smtp.lettr.com` (never `smtp.lettr.dev`)
- Internal links use root-relative paths: `/learn/domains/sending-domains`
- Images go in `images/` with descriptive kebab-case names
- Code blocks use language hints: `bash`, `json`, `php`, `javascript`, `typescript`, `python`, `go`, `rust`, `java`

## Context Efficiency

### Subagent Discipline

**Context-aware delegation:**
 - Under ~50k context: prefer inline work for tasks under ~5 tool calls.
 - Over ~50k context: prefer subagents for self-contained tasks, even simple ones — the per-call token tax on large contexts adds up fast.

When using subagents, include output rules: "Final response under 2000 characters. List outcomes, not process."
Never call TaskOutput twice for the same subagent. If it times out, increase the timeout — don't re-read.

### File Reading
Read files with purpose. Before reading a file, know what you're looking for.
Use Grep to locate relevant sections before reading entire large files.
Never re-read a file you've already read in this session.
For files over 500 lines, use offset/limit to read only the relevant section.

### Responses
Don't echo back file contents you just read — the user can see them.
Don't narrate tool calls ("Let me read the file..." / "Now I'll edit..."). Just do it.
Keep explanations proportional to complexity. Simple changes need one sentence, not three paragraphs.

**Tables — STRICT RULES (apply everywhere, always):**
- Markdown tables: use minimum separator (`|-|-|`). Never pad with repeated hyphens (`|---|---|`).
- NEVER use box-drawing / ASCII-art tables with characters like `┌`, `┬`, `─`, `│`, `└`, `┘`, `├`, `┤`, `┼`. These are completely banned.
- No exceptions. Not for "clarity", not for alignment, not for terminal output.