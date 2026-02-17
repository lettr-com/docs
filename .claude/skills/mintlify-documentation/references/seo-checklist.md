# SEO Checklist for Documentation

## Page-Level SEO

### Frontmatter Requirements

Every MDX page must have:

```yaml
---
title: "Descriptive, Keyword-Rich Title (Under 60 Chars)"
description: "Clear description with primary keywords, 150-160 characters for optimal display in search results."
---
```

### Title Optimization

**Rules**:
- 50-60 characters (including spaces)
- Include primary keyword near the beginning
- Be specific and descriptive
- Match user search intent

**Examples**:

❌ **Bad**: "Domains"
✅ **Good**: "Configure Sending Domains for Email Authentication"

❌ **Bad**: "API Reference"
✅ **Good**: "Send Email API - REST Endpoint Reference"

❌ **Bad**: "Getting Started with Lettr"
✅ **Good**: "Lettr Quickstart: Send Your First Email in 5 Minutes"

### Description Optimization

**Rules**:
- 150-160 characters (optimal for Google snippets)
- Include primary and secondary keywords naturally
- Summarize page value proposition
- Include a call-to-action when appropriate

**Examples**:

❌ **Bad**: "Learn about webhooks"
✅ **Good**: "Configure webhooks to receive real-time notifications for email events like opens, clicks, bounces, and deliveries. Includes setup guide and event reference."

❌ **Bad**: "This page explains how to use the API"
✅ **Good**: "Complete REST API reference for sending transactional emails, managing domains, and tracking delivery. Includes authentication, rate limits, and error codes."

## Content SEO

### Heading Structure

Use proper heading hierarchy for SEO and accessibility:

```markdown
# Page Title (H1) - From frontmatter, only one per page

## Main Topic (H2) - Primary sections

### Subtopic (H3) - Subdivisions

#### Detail (H4) - Use sparingly
```

**SEO Tips**:
- Include keywords in H2 and H3 headings
- Make headings descriptive and scannable
- Use question format for FAQ-style content

### Keyword Usage

**Primary Keyword**:
- In title (frontmatter)
- In first paragraph
- In at least one H2 heading
- In URL slug
- In image alt text

**Secondary Keywords**:
- Naturally throughout content
- In H3 headings
- In code examples (where relevant)
- In callout components

**Avoid**:
- Keyword stuffing
- Unnatural repetition
- Forcing keywords where they don't fit

### Internal Linking

**Best Practices**:
- Link to related documentation pages
- Use descriptive anchor text (not "click here")
- Link from high-traffic pages to new content
- Create topic clusters (hub and spoke model)

**Examples**:

❌ **Bad**: "Click [here](/learn/domains) for more information"
✅ **Good**: "Learn how to [configure sending domains](/learn/domains/sending-domains)"

❌ **Bad**: "See [this page](/api-reference/emails/send)"
✅ **Good**: "Use the [Send Email API endpoint](/api-reference/emails/send) to deliver messages"

### External Linking

**When to Link Externally**:
- Official specifications (RFC documents)
- Third-party tools or services
- Industry standards
- Authoritative sources

**Best Practices**:
- Use `rel="nofollow"` for untrusted sources (Mintlify handles this)
- Verify links regularly
- Prefer HTTPS links
- Link to stable, permanent URLs

## Technical SEO

### URL Structure

**Good URL patterns**:
- `/learn/domains/sending-domains` ✅
- `/api-reference/emails/send` ✅
- `/knowledge-base/dns-guides/cloudflare` ✅

**Bad URL patterns**:
- `/page1` ❌
- `/docs/learn/how-to-send-emails-with-lettr-api` ❌ (too long)
- `/learn/domains?id=123` ❌ (query parameters)

### Image Optimization

**File Names**:
- Use descriptive, keyword-rich names
- Use hyphens (not underscores)
- Keep lowercase

❌ **Bad**: `Screenshot 2024-01-15.png`
✅ **Good**: `cloudflare-dns-configuration.png`

**Alt Text**:
- Describe image content
- Include relevant keywords naturally
- Keep under 125 characters
- Don't start with "Image of" or "Picture of"

❌ **Bad**: `![](image.png)`
✅ **Good**: `![Cloudflare DNS settings showing CNAME record for tracking domain](cloudflare-dns-configuration.png)`

**File Size**:
- Compress images before uploading
- Use appropriate formats (PNG for screenshots, JPG for photos)
- Aim for under 200KB per image

### Code Examples

**SEO Value**:
- Code examples improve time-on-page
- Increase page comprehensiveness
- Target long-tail keywords

**Best Practices**:
- Include comments explaining code
- Use realistic variable names
- Show complete, working examples
- Include error handling

## Content Quality Signals

### Comprehensiveness

**Checklist**:
- [ ] Answers the primary question completely
- [ ] Covers related subtopics
- [ ] Includes examples and use cases
- [ ] Provides troubleshooting guidance
- [ ] Links to related resources

### Freshness

**Maintain Freshness**:
- Update version numbers regularly
- Refresh screenshots when UI changes
- Add new examples for new features
- Review and update quarterly

### User Engagement

**Improve Engagement**:
- Use clear, scannable formatting
- Include visual elements (images, diagrams)
- Provide interactive examples
- Add navigation cards for related content

## Mintlify-Specific SEO

### Navigation Structure

Good navigation improves SEO:
- Logical hierarchy in `docs.json`
- Descriptive group names
- Breadcrumb navigation (automatic)

### OpenAPI Integration

API reference pages benefit from:
- Structured data (automatic)
- Consistent formatting
- Complete parameter documentation
- Example requests/responses

## Monitoring and Improvement

### Regular Audits

**Monthly**:
- Check for broken links
- Verify image loading
- Test code examples
- Review search console data

**Quarterly**:
- Update outdated content
- Refresh screenshots
- Add new examples
- Expand thin content

### Metrics to Track

- Organic search traffic
- Time on page
- Bounce rate
- Internal link clicks
- Search rankings for target keywords

### Common Issues

**Low Rankings**:
- Thin content (under 300 words)
- Missing or poor meta descriptions
- Broken internal links
- Outdated information

**High Bounce Rate**:
- Misleading title/description
- Poor content organization
- Missing code examples
- Broken links or images

## Quick Reference

### Pre-Publish Checklist

- [ ] Title is 50-60 characters with primary keyword
- [ ] Description is 150-160 characters
- [ ] H1 (title) appears only once
- [ ] H2/H3 headings use keywords naturally
- [ ] First paragraph includes primary keyword
- [ ] Internal links use descriptive anchor text
- [ ] Images have descriptive filenames and alt text
- [ ] Code examples are complete and tested
- [ ] Page added to `docs.json` navigation
- [ ] Related pages linked in content

