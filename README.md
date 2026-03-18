# Lettr Documentation

This is the official documentation for Lettr, powered by [Mintlify](https://mintlify.com).

## Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview the documentation locally:

```bash
npm i -g mintlify
```

Run the development server (fetches the OpenAPI spec, then starts Mintlify):

```bash
npm run dev
```

To fetch the OpenAPI spec only:

```bash
npm run fetch-openapi
```

## Configuration

- **Config file**: `docs.json` (not `mint.json`)
- **OpenAPI spec**: Auto-fetched from `https://app.lettr.com/openapi.json` at build time

## Structure

```
lettr-docs/
├── docs.json                       # Mintlify configuration & navigation
├── introduction.mdx                # Main introduction page
├── quickstart/                     # Quickstart guides
│   ├── laravel/                    # Laravel integration
│   ├── php/                        # PHP integration
│   ├── nodejs/                     # Node.js (Next.js, Nuxt)
│   ├── smtp/                       # SMTP (Laravel, PHPMailer, Supabase)
│   ├── serverless/                 # AWS Lambda, Vercel, Cloudflare Workers
│   ├── go/                         # Go quickstart & advanced
│   ├── rust/                       # Rust quickstart & advanced
│   └── java/                       # Java quickstart & advanced
├── learn/                          # Product how-to guides
│   ├── api-keys/                   # API key management & permissions
│   ├── domains/                    # Sending, tracking, inbound, storage domains; SPF/DKIM/DMARC/BIMI
│   ├── sending/                    # Email sending (recipients, attachments, tracking, batch, idempotency, etc.)
│   ├── receiving/                  # Inbound email (setup, routing, parsing, spam filtering)
│   ├── suppressions/               # Bounces, complaints & unsubscribes
│   ├── templates/                  # Topol editor, template language, versions, saved blocks
│   ├── audience/                   # Contacts, segments, campaigns
│   ├── webhooks/                   # Event types, handling, authorization, retries
│   ├── events/                     # Event types & message details
│   ├── logs/                       # Filtering, searching, status codes
│   ├── analytics/                  # Dashboard, filtering & breakdowns
│   ├── mcp/                        # MCP server setup & tools reference
│   └── settings/                   # Dashboard, onboarding, profile, teams, security, billing, alerts
├── integrations/                   # Third-party integrations (Stripe, Supabase, WordPress, Zapier)
├── api-reference/                  # API documentation (OpenAPI-driven)
│   ├── introduction.mdx
│   ├── rate-limit.mdx
│   ├── emails/                     # Send, detail, events, scheduling
│   ├── domains/                    # CRUD + verify
│   ├── templates/                  # CRUD + merge tags
│   ├── webhooks/                   # CRUD
│   └── system/                     # Health check, auth check
├── knowledge-base/                 # Help articles & educational content
│   ├── introduction.mdx
│   ├── dns-guides/                 # 19 DNS provider guides (Cloudflare, Route 53, GoDaddy, etc.)
│   ├── concepts/                   # Deliverability, transactional email, feedback loops, ESPs
│   ├── fundamentals/               # SPF/DKIM/DMARC, bounce codes, SMTP basics, BIMI, etc.
│   ├── best-practices/             # Deliverability, list hygiene, security, dark mode, accessibility
│   ├── compliance/                 # Google/Yahoo requirements, CAN-SPAM, GDPR, CASL
│   ├── troubleshooting/            # Delivery, spam, bounces, auth, rate limits, rendering
│   ├── use-cases/                  # Password reset, order confirmation, welcome, 2FA, invoices
│   └── glossary/                   # Email glossary
└── images/                         # Screenshots and diagrams
```

## Tabs

The documentation is organized into three main tabs:

1. **Documentation** — Product docs, quickstart guides, learning resources, and integrations
2. **API Reference** — Complete API documentation (auto-generated from OpenAPI spec)
3. **Knowledge Base** — DNS guides, email fundamentals, best practices, compliance, troubleshooting, and use cases

## Publishing Changes

Changes are automatically deployed when pushed to the `main` branch.

## Links

- [Mintlify Documentation](https://mintlify.com/docs)
- [Lettr Dashboard](https://app.lettr.com)
- [Lettr Status](https://status.lettr.com)
