# Lettr Documentation Gap Analysis (2026-02-12)

## Executive Summary

After auditing all 70 `/learn/` articles, 197 total MDX files, the full `app/Lettr/` codebase (16 feature directories), `routes/api.php`, `routes/editor-api.php`, legacy controllers, services, and the OpenAPI spec, here is the prioritized gap analysis.

**Overall assessment**: The documentation is in strong shape. The previous gap analysis (2026-02-06) addressed major issues. The remaining gaps fall into three categories: undocumented user-facing features, thin coverage of existing features, and missing practical guidance.

---

## Priority: HIGH

### 1. Social Login (OAuth Sign-in with GitHub & Google)

| Field | Details |
|-------|---------|
| **Article title** | `Social Login (OAuth)` |
| **Proposed location** | `learn/settings/social-login.mdx` |
| **Justification** | `app/Http/Controllers/Auth/SocialLoginController.php` implements full GitHub & Google OAuth. It handles: new user registration via OAuth, automatic team creation, invitation acceptance during social signup, and 2FA bypass for OAuth users. |
| **Current gap** | Zero documentation. No mention of social login anywhere in `/learn/`. The security page only covers password + 2FA. Users have no guidance on linking/unlinking social accounts or understanding how OAuth interacts with team invitations. |
| **Priority** | **High** — This is a production-ready, user-facing auth feature with no documentation at all. |

### 2. Domain Approval & Scoring

| Field | Details |
|-------|---------|
| **Article title** | `Domain Approval Process` |
| **Proposed location** | `learn/domains/approval.mdx` |
| **Justification** | `app/Lettr/Domains/Services/DomainScoringService.php` implements a 100-point scoring system with approval threshold of 50. It evaluates domain age (30d minimum, 2yr+ excellent), website analysis via `WebsiteAnalysisService`, and WHOIS data via `WhoisService`. The `app/Lettr/Kiosk/Actions/ApproveDomain.php` shows a manual approval queue. `DomainScoredNotification` alerts users about results. |
| **Current gap** | Only a 3-line mention in `learn/domains/introduction.mdx:130-132` saying "Lettr automatically evaluates it for approval" with bullet points about domain age, website content, and DNS configuration. No details on: the scoring criteria, what score is needed, how long approval takes, what to do if rejected, or how the manual review queue works. |
| **Priority** | **High** — Domain approval is a gating step for new users. Without clear documentation, users who get stuck in the approval queue have no self-service path to resolution. |

### 3. GET `/templates/html` API Endpoint

| Field | Details |
|-------|---------|
| **Article title** | `Get Template HTML` |
| **Proposed location** | `api-reference/templates/get-template-html.mdx` |
| **Justification** | Defined in `routes/api.php` as `GET /templates/html` → `TemplateHtmlController@show`. Available to both "Full Access" and "Sending Only" API keys (confirmed in `learn/api-keys/permissions.mdx:178`). This endpoint renders template HTML with merge tag values — essential for email previewing. |
| **Current gap** | No dedicated API reference page. Only referenced in the permissions matrix table. Not in the OpenAPI spec (`openapi.json`). Users can't discover this endpoint through the API reference docs. |
| **Priority** | **High** — It's an active, authenticated API endpoint with no documentation. |

### 4. Domain Connect (Automatic DNS Configuration)

| Field | Details |
|-------|---------|
| **Article title** | `Domain Connect` |
| **Proposed location** | `learn/domains/domain-connect.mdx` |
| **Justification** | `app/Lettr/Domains/Services/DomainConnectService.php` implements the Domain Connect protocol for Cloudflare specifically, generating signed URLs that auto-configure DNS records (MX, CNAME, DKIM, DMARC, SPF). The `DomainController` has dedicated methods for Domain Connect flows. This is a significant UX feature that eliminates manual DNS configuration for supported providers. |
| **Current gap** | Zero documentation. No mention of "Domain Connect" anywhere in the docs. Users on supported DNS providers (Cloudflare) don't know they can skip manual DNS record setup entirely. |
| **Priority** | **High** — This dramatically simplifies onboarding for Cloudflare users (the most popular DNS provider), but nobody knows it exists. |

---

## Priority: MEDIUM

### 5. Email Usage & Quotas (Technical Details)

| Field | Details |
|-------|---------|
| **Article title** | `Email Usage & Quotas` |
| **Proposed location** | `learn/sending/usage-quotas.mdx` |
| **Justification** | `app/Services/EmailCounterService.php` implements DynamoDB-based monthly counters with per-domain tracking, TTL-based reset, and abuse detection triggering at configurable intervals. The billing page covers pricing tiers but not the technical behavior of quota enforcement. |
| **Current gap** | The billing page (`learn/settings/billing.mdx`) covers what counts as usage (lines 159-163) but doesn't explain: real-time counter behavior, what happens when you hit your daily limit on the free tier (100/day), how the counter resets mid-month vs start-of-month, or how to check remaining quota programmatically. The `learn/sending/rate-limits.mdx` covers API rate limits (requests/minute) but conflates them with email quotas. |
| **Priority** | **Medium** — Users need to understand the difference between API rate limits and email quotas. The information is split across two articles without clear delineation. |

### 6. Dashboard Overview

| Field | Details |
|-------|---------|
| **Article title** | `Dashboard` |
| **Proposed location** | `learn/settings/dashboard.mdx` |
| **Justification** | `app/Http/Controllers/DashboardController.php` renders the main dashboard with: usage metrics, delivery alerts, onboarding checklist, domain status summaries, and quick-action cards. This is the first thing users see after login. |
| **Current gap** | No documentation for the dashboard page. Users who land on the dashboard after onboarding have no guide explaining what each metric means, what the checklist items are, or how to interpret the alerts. The analytics docs cover the Analytics page (a separate section), not the main dashboard. |
| **Priority** | **Medium** — It's the primary landing page, but most elements are self-explanatory. |

### 7. Audience Management

| Field | Details |
|-------|---------|
| **Article title** | `Audience` |
| **Proposed location** | `learn/sending/audience.mdx` |
| **Justification** | `app/Http/Controllers/AudienceController.php` renders an audience overview page. This appears to be a UI feature for viewing recipient data and engagement patterns. |
| **Current gap** | Zero documentation. No mention of "audience" in the `/learn/` directory. Users don't know this feature exists in the dashboard. |
| **Priority** | **Medium** — Depends on how fully developed this feature is in the UI. Needs verification. |

### 8. Template Autosaves

| Field | Details |
|-------|---------|
| **Article title** | `Template Autosaves` (section within existing `topol-editor.mdx`) |
| **Proposed location** | Enhancement to `learn/templates/topol-editor.mdx` |
| **Justification** | `app/Lettr/Emails/Controllers/TemplateAutosavesController.php` and corresponding Editor API routes (`GET/POST /templates/{template}/template-autosaves`) show a full autosave system. `TemplateAutosave` model with `TemplateAutosaveRepository` manages versioned auto-saves with named checkpoints. |
| **Current gap** | The Topol editor documentation doesn't mention autosaves at all. Users don't know their work is being auto-saved, how to recover from autosaves, or how named checkpoints work. |
| **Priority** | **Medium** — Autosave is a safety net feature that's most useful when things go wrong. Users need to know it exists before they need it. |

### 9. Webhook CRUD (Create/Update/Delete)

| Field | Details |
|-------|---------|
| **Article title** | `Managing Webhooks` (enhance existing `learn/webhooks/introduction.mdx`) |
| **Proposed location** | Enhancement to `learn/webhooks/introduction.mdx` |
| **Justification** | `app/Http/Controllers/WebhookController.php` has full CRUD: `store()`, `update()`, `enable()`, `disable()`, `destroy()`. The `Webhook` model shows fields for auth_type, auth_username, auth_password, event_types, and enable/disable state. |
| **Current gap** | The webhook introduction says "Webhooks are managed through the Lettr dashboard" but doesn't provide step-by-step instructions for creating, editing, enabling/disabling, or deleting webhooks via the UI. The API only exposes read-only endpoints (`GET /webhooks`, `GET /webhooks/{id}`). Users need dashboard guidance for webhook lifecycle management. |
| **Priority** | **Medium** — The existing webhook docs are excellent for handling/consuming webhooks but light on the setup/management side. |

---

## Priority: LOW

### 10. Image & File Storage (Topol Storage)

| Field | Details |
|-------|---------|
| **Article title** | `Image Storage` |
| **Proposed location** | `learn/templates/image-storage.mdx` |
| **Justification** | `app/Lettr/TopolStorage/` implements a complete file management system with folder CRUD (`TopolStorageFoldersController`), image uploads (`TopolStorageUploadController`), and an image editor (`TopolStorageImageEditorController`). Editor API routes define 5 endpoints for storage management. |
| **Current gap** | No documentation on the image/asset storage system used by the email editor. Users don't know about upload limits, supported formats, folder organization, or the image editor feature. |
| **Priority** | **Low** — The storage UI is integrated into the Topol editor and somewhat discoverable, but a reference page would help users understand limits and capabilities. |

### 11. Campaigns

| Field | Details |
|-------|---------|
| **Article title** | N/A (verify feature completeness first) |
| **Proposed location** | `learn/sending/campaigns.mdx` (if warranted) |
| **Justification** | `app/Http/Controllers/CampaignController.php` exists as what appears to be a stub. |
| **Current gap** | No documentation, but the controller appears to be a stub/placeholder. Only document if this feature has been built out with UI and functionality. |
| **Priority** | **Low** — Needs verification of whether this is a production feature or a placeholder. |

### 12. Signed Links

| Field | Details |
|-------|---------|
| **Article title** | N/A (internal/infrastructure feature) |
| **Proposed location** | N/A |
| **Justification** | `app/Lettr/Helpers/Signator/` implements signed URL generation for secure, time-limited links. Used internally for email previews and secure downloads. |
| **Current gap** | Not user-facing — this is infrastructure. No documentation needed unless exposed as a user feature. |
| **Priority** | **Low** — Internal mechanism, not a user-facing feature. |

---

## Existing Articles That Need Enhancement

These aren't new articles but improvements to existing ones:

| Article | Gap | Suggested Enhancement |
|---------|-----|-----------------------|
| `learn/settings/security.mdx` | No mention of social login/OAuth | Add section on GitHub/Google sign-in |
| `learn/settings/onboarding.mdx` | No mention of Domain Connect or domain scoring | Add info about automatic DNS setup for supported providers |
| `learn/domains/introduction.mdx` | Domain approval scoring only gets 3 lines | Expand or link to new dedicated approval article |
| `learn/sending/rate-limits.mdx` | Conflates API rate limits with email quotas | Clarify the distinction; link to usage-quotas article |
| `learn/templates/topol-editor.mdx` | No autosave documentation | Add section on autosave behavior and recovery |
| `learn/webhooks/introduction.mdx` | No dashboard setup instructions | Add step-by-step for creating webhooks in the UI |
| `api-reference/introduction.mdx` | Missing `/templates/html` endpoint | Add to endpoint listing once OpenAPI spec is updated |

---

## Summary

| Priority | Count | Articles |
|----------|-------|----------|
| **High** | 4 | Social Login, Domain Approval, Template HTML endpoint, Domain Connect |
| **Medium** | 5 | Usage & Quotas, Dashboard, Audience, Template Autosaves, Webhook CRUD |
| **Low** | 3 | Image Storage, Campaigns (verify), Signed Links (skip) |
| **Enhancements** | 7 | Existing articles needing expansion |

The most impactful items are the **4 High-priority gaps** — they represent fully production-ready features with zero or near-zero documentation. Domain Connect and Social Login in particular would significantly improve the onboarding experience.
