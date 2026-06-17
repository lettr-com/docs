# SEO Audit Notes — 2026-06-16 crawl

Disposition of the 12 audit files. Code fixes were committed separately on the
`seo/fix-audit-issues-2026-06` branch (one commit per fixable issue). This file records
the items that have **no in-repo code fix** — they are operational, host-level, or
content-quality signals — so the disposition is tracked rather than silently dropped.

## Fixed in code (see git history)
- **Logo root redirect** — added `logo.href: /introduction` in `docs.json`. Clears the
  307+307 "page has links to redirect" rows, the redirect-chain notice, and the bare-root
  3XX warning.
- **19 short titles** — expanded to descriptive phrases.
- **218 short meta descriptions** — rewritten into the 100–164 char band.
- **1 long meta description** — `knowledge-base/concepts/email-service-provider.mdx`
  trimmed to 155 chars.

## OpenAPI-derived (fix in `lettr-app`, not here)
API reference pages take their meta description from `openapi.json`, which is re-fetched
from `app.lettr.com` at build time. 25 over-long + 15 too-short endpoint descriptions are
listed with their lengths in [`seo-openapi-meta-descriptions.md`](seo-openapi-meta-descriptions.md).
Editing `openapi.json` here is overwritten on the next deploy.

## No code change required

### Notice-Pages_to_submit_to_IndexNow.csv (307 URLs)
All 307 rows are HTTP 200, indexable pages. This is a **submission worklist**, not a
defect: these URLs should be pushed to IndexNow so search engines re-crawl them. That is a
deploy/hosting action (ping the IndexNow API, or enable IndexNow in the hosting platform),
not a change to docs source. No file edits.

### Notice-indexable-Pages_have_high_AI_content_levels.csv (6 pages)
Flagged "High" / "Very high" AI-content:
- knowledge-base/best-practices/deliverability (Very high)
- knowledge-base/best-practices/smtp-vs-api (Very high)
- knowledge-base/compliance/acceptable-use-policy (High)
- knowledge-base/best-practices/sending-reputation (High)
- knowledge-base/best-practices/transactional-vs-marketing (High)
- knowledge-base/best-practices/email-editor-best-practices (High)

These are accurate articles; the flag is a writing-style signal, not an error. Optional
follow-up: a human editing pass to vary phrasing. No structural/code change.

### Warning-Slow_page.csv (3 pages)
- knowledge-base/concepts/dedicated-vs-shared-ips — TTFB 1243 ms / load 1552 ms
- learn/logs/status-codes — TTFB 1871 ms / load 1874 ms
- learn/settings/security — TTFB 989 ms / load 1008 ms

Load time is almost entirely time-to-first-byte, i.e. server/CDN response latency on the
Mintlify-hosted deployment. There is no oversized asset or heavy client bundle in the page
source to trim. Mitigation is a hosting/CDN concern, not a docs-source change.

### Notice-HTTP_to_HTTPS_redirect.csv
The `http://docs.lettr.com/` → `https://` 308 is correct canonical behavior enforced at the
host/proxy layer. Not configurable in this repo, and not a defect.

> Maintainer notes. Lives in `.github/` so the Mintlify build never parses or publishes it.
