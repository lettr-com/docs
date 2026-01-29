# Documentation Audit: Articles Most in Need of Expansion

> **Date:** 2026-01-29
> **Scope:** All MDX files under `/learn` and subdirectories
> **Criteria:** Content depth, introduction quality, completeness

Ranked by severity — combining weak introductions, missing content, and low depth.

---

## 1. `learn/templates/ai-agents.mdx`

- **Word count:** ~500 | **Sections:** 8 | **Code blocks:** 6
- **Problems:**
  - **Intro is a single generic sentence:** "Leverage AI to create, optimize, and personalize your email content."
  - **Likely placeholder/speculative content** — the API endpoints shown (`lettr.ai.generateContent`, `lettr.ai.generateSubjects`, `lettr.ai.improve`) don't appear to correspond to implemented backend features. The usage limits table references "Free/Pro/Enterprise" tiers that don't match the actual billing plans.
  - No real-world use cases or context for when to use each AI feature
- **Suggestions:** Verify which AI features are actually implemented. If they exist, rewrite with a proper introduction explaining the value proposition, add real use cases (e.g., "generate subject line variations for A/B testing"), and fix the tier naming. If the features are not yet implemented, remove from navigation or mark as "Coming Soon."

---

## 2. `learn/sending/analytics.mdx`

- **Word count:** ~350 | **Sections:** 8 | **Code blocks:** 6
- **Problems:**
  - **Intro is one sentence:** "Track opens, clicks, and engagement metrics for your emails."
  - No explanation of *why* analytics matter or what decisions they inform
  - Dashboard Metrics section is cards-only with no prose explaining what data is available
  - Very thin overall for an analytics topic
- **Suggestions:** Expand the introduction to explain what analytics help you accomplish (optimize send times, identify deliverability issues, measure engagement). Add a section explaining the key metrics (delivery rate, open rate, click rate, bounce rate) and what healthy benchmarks look like. Add a practical example showing how to use analytics data to diagnose a deliverability problem.

---

## 3. `learn/sending/attachments.mdx`

- **Word count:** ~300 | **Sections:** 6 | **Code blocks:** 4
- **Problems:**
  - **Intro is generic:** "Learn how to attach files to your emails."
  - No use cases motivating *when* to use attachments vs. download links
  - No error handling examples (what happens when exceeding limits or URL fetch fails)
  - No guidance on when to use base64 vs. URL-based attachments
- **Suggestions:** Rewrite the intro to frame common scenarios (invoices, receipts, reports). Add a "When to Use Attachments vs. Download Links" section. Add error handling examples for limit violations. Include guidance on choosing between base64 and URL-based approaches.

---

## 4. `learn/sending/recipients.mdx`

- **Word count:** ~300 | **Sections:** 8 | **Code blocks:** 5
- **Problems:**
  - **Intro is generic:** "Learn how to specify recipients and configure sender information for your emails."
  - No real-world use cases explaining *when* to use CC vs. BCC, or why reply-to matters
  - The validation section is a bullet list with no code showing what a rejection looks like
- **Suggestions:** Add context to each recipient type (e.g., BCC for compliance archiving, reply-to for no-reply sender addresses). Add an error response example for invalid addresses. Include a practical example combining multiple recipient features.

---

## 5. `learn/domains/bimi.mdx`

- **Word count:** ~1,600 | **Sections:** 15 | **Code blocks:** 12
- **Problems:**
  - **Intro is generic and doesn't mention Lettr:** "BIMI allows your verified brand logo to appear next to your emails in supported email clients."
  - No before/after visual or concrete outcome framing (contrast with tracking-domains.mdx which shows default vs. custom)
  - VMC section is informational-only with no Lettr-specific workflow guidance
  - No guidance on what happens if a VMC expires
- **Suggestions:** Rewrite intro to frame BIMI from the Lettr user's perspective. Add a "What Recipients See" section showing the impact. Add practical guidance on VMC lifecycle management. Note which email clients support BIMI and which don't.

---

## 6. `learn/domains/dmarc.mdx`

- **Word count:** ~1,600 | **Sections:** 13 | **Code blocks:** 15
- **Problems:**
  - **Intro reads like a dictionary definition**, not product documentation — doesn't mention Lettr or frame from the user's perspective
  - Reads more like a general DMARC tutorial than Lettr-specific docs
  - No Lettr-specific DMARC API examples beyond the generic domain GET endpoint
- **Suggestions:** Rewrite intro to connect DMARC to the Lettr setup workflow (e.g., "After configuring SPF and DKIM for your sending domain, DMARC is the final step that tells receivers how to handle messages that fail authentication"). Add Lettr-specific guidance on how DMARC interacts with Lettr's sending infrastructure.

---

## 7. `learn/suppressions/introduction.mdx`

- **Word count:** ~550 | **Sections:** 5 | **Code blocks:** 3
- **Problems:**
  - Short for an introduction page — significantly less content than other intro pages (receiving intro: ~1,800 words, sending intro: ~750 words)
  - Jumps quickly into webhook code examples that duplicate the sub-pages
  - Missing a higher-level explanation of how suppressions flow through the system
- **Suggestions:** Add a "How Suppressions Work" section explaining the lifecycle (email sent → bounce/complaint/unsubscribe → automatic suppression → future sends blocked). Add a diagram or flow. Expand the "Why Suppressions Matter" section with concrete metrics (e.g., impact on sender reputation scores). Differentiate from the sub-pages by focusing on the overview rather than implementation code.

---

## 8. `learn/settings/teams.mdx`

- **Word count:** ~800 | **Sections:** 7 | **Code blocks:** 0
- **Problems:**
  - **Missing `#` heading** — only file in the entire docs without one
  - Zero code blocks — no API examples for team management
  - No use cases explaining when/why to use multiple teams (agency managing clients, multi-brand company)
  - Purely procedural UI instructions
- **Suggestions:** Add the missing `#` heading. Add use case scenarios for multi-team setups. If team management API endpoints exist, add code examples. Add a section on team isolation (what's shared vs. separate between teams).

---

## Honorable Mentions

| File | Issue |
|------|-------|
| `learn/webhooks/event-types.mdx` | Self-referential intro ("This page provides...") — rewrite to explain what event types are and why they matter |
| `learn/sending/errors-retries.mdx` | Intro starts with "Learn how to" — code-heavy with relatively little prose explaining the patterns |
| `learn/templates/topol-editor.mdx` | Only 2 code blocks for 1,500 words of UI description — could use visual examples or annotated output |
| `learn/templates/saved-blocks.mdx` | Only 2 code blocks — no API examples for block management |
| `learn/receiving/best-practices.mdx` | Generic "follow these best practices" opener with no motivation or context |
| `learn/receiving/security.mdx` | Vague intro — should name specific threats (spoofing, XSS, malware) upfront |

---

## Cross-Cutting Patterns

| Issue | Files Affected |
|-------|---------------|
| **Weak intro** (single generic sentence, "Learn how to..." phrasing) | `analytics`, `attachments`, `recipients`, `errors-retries`, `ai-agents`, `event-types` |
| **No use cases** or motivation for the feature | `attachments`, `recipients`, `content-types` (AMP), `ai-agents`, `teams` |
| **Placeholder/undefined helpers** (`getNextNineAM()`, `chunkArray()`, `sleep()`) | `scheduling`, `batch-sending` |
| **Rushed sections** (accordion one-liners, card-only sections with no prose) | `best-practices` (Authentication Setup), `analytics` (Dashboard Metrics) |
| **Missing error handling** for the feature being documented | `attachments`, `scheduling` |
| **Generic intro not mentioning Lettr** | `dmarc`, `bimi` |
