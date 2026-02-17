---
name: mintlify-documentation
description: >
  Documentation writing and maintenance guidelines for Lettr's Mintlify-based documentation.
  Activates when: creating or editing MDX files, updating navigation in docs.json,
  adding API reference pages, writing guides, maintaining DNS provider guides,
  or when the user mentions documentation, docs, Mintlify, MDX, or knowledge base.
license: MIT
metadata:
  author: lettr
---

# Mintlify Documentation Guidelines

## Context

You are maintaining the Lettr documentation site built with Mintlify. This is a technical documentation project with ~197 MDX files covering product docs, API reference, quickstart guides, and knowledge base articles.

## Core Principles

1. **Accuracy First** - Documentation must match the actual API and product behavior
2. **User-Focused** - Write for developers integrating Lettr, not internal team
3. **Consistency** - Follow established patterns across all documentation
4. **Maintainability** - Keep structure simple and navigation logical

## Documentation Structure

### Three Main Tabs (docs.json)

1. **Documentation** - Product guides, quickstarts, how-tos
2. **API Reference** - OpenAPI-driven endpoint documentation
3. **Knowledge Base** - Educational content, DNS guides, best practices

### Content Types

| Type           | Location          | Purpose               | Approach                   |
| -------------- | ----------------- | --------------------- | -------------------------- |
| API Reference  | `api-reference/`  | Endpoint docs         | Minimal - use OpenAPI      |
| How-To Guides  | `learn/`          | Task-based guides     | Step-by-step instructions  |
| Quickstarts    | `quickstart/`     | Language integrations | Copy-paste ready code      |
| Knowledge Base | `knowledge-base/` | Concepts & education  | Comprehensive explanations |

## Writing Guidelines

### MDX Frontmatter

Every page must have:

```yaml
---
title: "Clear, Descriptive Title"
description: "Brief SEO-friendly description (150-160 chars)"
---
```

### Mintlify Components

Use these components appropriately:

- `<Card>` / `<CardGroup>` - Navigation cards, feature highlights
- `<Tip>` - Helpful suggestions, best practices
- `<Warning>` - Important caveats, potential issues
- `<Note>` - Additional context, clarifications
- `<Info>` - Informational callouts
- `<Steps>` / `<Step>` - Sequential instructions
- `<Accordion>` / `<AccordionGroup>` - Collapsible content
- `<Tabs>` / `<Tab>` - Language/platform-specific examples

### Code Examples

- Always include language hints: `bash`, `json`, `php`, `javascript`, `typescript`, `python`, `go`, `rust`, `java`
- Use realistic examples with proper API keys format: `lttr_` prefix
- Test code examples before publishing
- Include error handling in examples

### API Reference Pages

API pages should be **minimal** - let OpenAPI do the work:

```yaml
---
title: Send Email
openapi: POST /emails
---
Optional 1-2 sentence description of what this endpoint does.
```

**Do NOT** manually write request/response schemas - they come from `openapi.json`.

## Navigation Management

### Adding New Pages

1. Create the MDX file in the appropriate directory
2. **MUST** add to `docs.json` navigation or it won't appear
3. Place in logical group/section
4. Test navigation locally with `npm run dev`

### Navigation Structure in docs.json

```json
{
  "navigation": {
    "tabs": [
      {
        "name": "Documentation",
        "groups": [
          {
            "group": "Getting Started",
            "pages": ["introduction", "quickstart/..."]
          }
        ]
      }
    ]
  }
}
```

## Conventions & Standards

### Terminology

- **API Key** (not "API token" or "auth key")
- **Sending Domain** (not "sender domain")
- **Tracking Domain** (not "click domain")
- **Inbound Domain** (not "receiving domain")
- Use **Lettr** (not "lettr" or "LETTR" in prose)

### Links

- Internal links: Root-relative paths `/learn/domains/sending-domains`
- External links: Full URLs with `https://`
- Always verify links work before committing

### Images

- Store in `images/` directory
- Use descriptive kebab-case names: `cloudflare-dns-records.png`
- Optimize images before adding (compress, appropriate size)
- Include alt text for accessibility

### API Keys & Credentials

- Always use placeholder format: `lttr_` + 64 hex characters
- Example: `lttr_1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef`
- Never use real API keys in documentation

### SMTP Configuration

- Host: Always `smtp.lettr.com` (never `smtp.lettr.dev`)
- Port: `587` (STARTTLS)
- Username: `lettr`
- Password: User's API key

## DNS Provider Guides

All 19 DNS guides in `knowledge-base/dns-guides/` follow **identical structure**:

1. **Sending Domain Setup** - SPF, DKIM, DMARC records
2. **Inbound Domain Setup** - MX records
3. **Tracking Domain Setup** - CNAME for click/open tracking
4. **Storage Domain Setup** - CNAME for attachment storage

When updating one guide, check if others need the same update.

## Quality Checklist

Before finalizing documentation changes:

- [ ] Frontmatter includes title and description
- [ ] Code examples use correct language hints
- [ ] API keys use `lttr_` prefix format
- [ ] Internal links use root-relative paths
- [ ] New pages added to `docs.json` navigation
- [ ] Mintlify components used appropriately
- [ ] Terminology matches conventions
- [ ] Images optimized and have alt text
- [ ] Tested locally with `npm run dev`
- [ ] No broken links

## Common Tasks

### Adding a New Guide

1. Create MDX file in appropriate directory (`learn/`, `knowledge-base/`, etc.)
2. Add frontmatter with title and description
3. Write content using Mintlify components
4. Add to `docs.json` navigation
5. Test locally: `npm run dev`

### Updating API Documentation

1. Update OpenAPI spec in `lettr-app` (not in docs repo)
2. Docs automatically fetch latest spec on build
3. Only update API reference MDX if adding context/examples

### Fixing Broken Links

1. Search for the broken link: `grep -r "broken-link" .`
2. Update to correct path
3. Verify with `npm run dev`

## Development Commands

```bash
# Start local dev server (fetches OpenAPI, starts Mintlify)
npm run dev

# Fetch OpenAPI spec only
npm run fetch-openapi

# Install Mintlify CLI (one-time)
npm i -g mintlify
```

## When to Ask for Help

- Unsure about technical accuracy → Ask user to verify
- Major structural changes → Discuss before implementing
- New documentation patterns → Propose and get approval
- Breaking changes to API → Coordinate with app team

## Documentation Philosophy

> "Documentation is code. It should be tested, reviewed, and maintained with the same rigor as application code."

- Write for the developer who's integrating Lettr at 2 AM
- Assume they're smart but unfamiliar with Lettr
- Provide copy-paste ready examples
- Explain the "why" not just the "how"
- Keep it concise but complete
