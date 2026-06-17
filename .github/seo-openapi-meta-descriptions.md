# API Reference — meta description lengths

API reference pages use `openapi:` frontmatter and **no** `description:` field, so
Mintlify derives each page's meta description from the endpoint `summary`/`description`
in `openapi.json`.

`openapi.json` is **not authored in this repo**. It is re-fetched at every build from
the live API:

```json
"buildCommand": "curl -s https://app.lettr.com/openapi.json -o openapi.json"
```

Any edit to the committed `openapi.json` here is overwritten on the next build/deploy.
**The source of truth is the OpenAPI generator in `lettr-app`.**

## Action required in `lettr-app`

A 2026-06-16 SEO crawl flagged 25 endpoint descriptions whose rendered meta description
exceeds the ~160-character limit (crawler flags ≥165). Shorten the `description` (or add a
concise summary) for these operations at the source so the generated `openapi.json` carries
descriptions ≤160 characters:

| chars | endpoint page |
|-|-|
| 489 | api-reference/campaigns/list-campaign-engagement-events |
| 305 | api-reference/audience/update-a-property |
| 286 | api-reference/emails/get-scheduled-email |
| 270 | api-reference/audience/create-a-contact |
| 268 | api-reference/campaigns/schedule-a-campaign |
| 252 | api-reference/templates/update-template |
| 243 | api-reference/campaigns/send-a-campaign-now |
| 231 | api-reference/audience/create-a-property |
| 220 | api-reference/emails/schedule-email |
| 219 | api-reference/audience/bulk-create-contacts |
| 213 | api-reference/audience/bulk-detach-contacts-from-lists |
| 211 | api-reference/emails/get-email-detail |
| 204 | api-reference/audience/bulk-attach-contacts-to-lists |
| 193 | api-reference/emails/list-email-events |
| 191 | api-reference/domains/create-domain |
| 189 | api-reference/audience/attach-contact-to-list |
| 188 | api-reference/audience/subscribe-contact-to-topic |
| 187 | api-reference/audience/create-a-segment |
| 182 | api-reference/templates/get-merge-tags |
| 172 | api-reference/audience/update-an-audience-list |
| 172 | api-reference/audience/unsubscribe-contact-from-topic |
| 167 | api-reference/campaigns/unschedule-a-campaign |
| 165 | api-reference/audience/bulk-delete-audience-lists |
| 165 | api-reference/webhooks/update-webhook |
| 165 | api-reference/audience/create-a-topic |

Tip: the first sentence of each operation `description` is what becomes the meta
description. Keeping that first sentence ≤160 characters (and moving scope/permission
notes to a second sentence) resolves the flag without losing detail on the page.

## Also too SHORT (15 endpoints, <100 chars)

The same 2026-06-16 crawl flagged 15 endpoint descriptions as too short (<100 chars).
These also come from `openapi.json` and must be lengthened at the source in `lettr-app`
to a 100–160 character description:

| chars | endpoint page |
|-|-|
| 58 | api-reference/audience/show-a-topic |
| 60 | api-reference/audience/show-a-contact |
| 60 | api-reference/audience/show-a-segment |
| 61 | api-reference/audience/show-a-property |
| 62 | api-reference/audience/list-audience-topics |
| 64 | api-reference/audience/list-audience-segments |
| 66 | api-reference/audience/show-an-audience-list |
| 73 | api-reference/webhooks/create-webhook |
| 76 | api-reference/audience/list-audience-properties |
| 78 | api-reference/audience/list-audience-contacts |
| 82 | api-reference/system/health-check |
| 88 | api-reference/audience/list-audience-lists |
| 97 | api-reference/webhooks/get-webhook |
| 98 | api-reference/audience/delete-a-topic |
| 98 | api-reference/audience/update-a-segment |

Target band for both lists: **100–160 characters** of inner description text.

> Maintainer notes. Lives in `.github/` so the Mintlify build never parses or publishes it.
