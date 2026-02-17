# Documentation Writing Guide

## Voice and Tone

### Voice Characteristics
- **Professional but approachable** - Technical but not intimidating
- **Direct and clear** - No marketing fluff or unnecessary jargon
- **Helpful and supportive** - Anticipate developer questions
- **Confident** - Assert facts, don't hedge unnecessarily

### Examples

❌ **Bad**: "You might want to consider possibly adding an API key to authenticate your requests."
✅ **Good**: "Authenticate your requests with an API key."

❌ **Bad**: "Lettr is the world's best email platform that revolutionizes..."
✅ **Good**: "Lettr provides transactional email infrastructure via API."

## Content Structure

### Page Organization

1. **Introduction** (1-2 sentences) - What this page covers
2. **Prerequisites** (if applicable) - What user needs before starting
3. **Main Content** - Step-by-step or conceptual explanation
4. **Next Steps** - Links to related content

### Headings Hierarchy

```markdown
# Page Title (H1) - Only one per page, from frontmatter

## Main Section (H2) - Primary divisions

### Subsection (H3) - Subdivisions within H2

#### Detail (H4) - Rarely needed, use sparingly
```

## Writing Effective Instructions

### Step-by-Step Guides

Use `<Steps>` component for sequential tasks:

```mdx
<Steps>
  <Step title="Create an API Key">
    Navigate to Settings > API Keys and click "Create New Key".
  </Step>
  <Step title="Configure Permissions">
    Select the permissions your application needs.
  </Step>
  <Step title="Save Your Key">
    Copy the key immediately - it won't be shown again.
  </Step>
</Steps>
```

### Code Examples

**Always include**:
- Language identifier
- Comments explaining non-obvious parts
- Error handling
- Complete, runnable examples

**Example**:

```javascript
const lettr = require('@lettr/node');

const client = new lettr.Client({
  apiKey: 'lttr_your_api_key_here'
});

try {
  const result = await client.emails.send({
    from: 'hello@yourdomain.com',
    to: 'user@example.com',
    subject: 'Welcome!',
    html: '<p>Thanks for signing up!</p>'
  });
  
  console.log('Email sent:', result.id);
} catch (error) {
  console.error('Failed to send email:', error.message);
}
```

## Using Callouts Effectively

### `<Tip>` - Best Practices and Helpful Hints

```mdx
<Tip>
  Use descriptive email subjects to improve open rates and deliverability.
</Tip>
```

### `<Warning>` - Important Caveats

```mdx
<Warning>
  API keys grant full access to your account. Never commit them to version control.
</Warning>
```

### `<Note>` - Additional Context

```mdx
<Note>
  DKIM records may take up to 48 hours to propagate globally.
</Note>
```

### `<Info>` - Informational Callouts

```mdx
<Info>
  Lettr automatically handles bounce processing and maintains suppression lists.
</Info>
```

## Common Patterns

### Introducing New Concepts

1. **Define it** - What is it?
2. **Explain why** - Why does it matter?
3. **Show how** - How to use it?
4. **Link further** - Where to learn more?

**Example**:

```markdown
## Tracking Domains

A tracking domain is a custom subdomain used for click and open tracking in your emails.

### Why Use a Tracking Domain?

Using your own tracking domain instead of Lettr's shared domain improves:
- Email deliverability and sender reputation
- Brand consistency in tracking links
- Trust with recipients

### Setting Up a Tracking Domain

<Steps>
  <Step title="Add Domain">
    Go to Settings > Domains and click "Add Tracking Domain".
  </Step>
  ...
</Steps>

### Learn More

- [Domain Authentication](/learn/domains/authentication)
- [DNS Configuration](/knowledge-base/dns-guides/cloudflare)
```

### Troubleshooting Sections

Structure troubleshooting as problem → solution:

```markdown
## Troubleshooting

### Emails Not Sending

**Problem**: API returns 401 Unauthorized

**Solution**: Verify your API key is correct and has sending permissions.

**Problem**: Emails stuck in queue

**Solution**: Check your domain verification status in the dashboard.
```

## SEO Best Practices

### Title Optimization
- Keep under 60 characters
- Include primary keyword
- Be descriptive and specific

❌ **Bad**: "Domains"
✅ **Good**: "Configure Sending Domains for Email Authentication"

### Description Optimization
- 150-160 characters
- Include primary and secondary keywords
- Summarize page value

❌ **Bad**: "Learn about domains"
✅ **Good**: "Configure SPF, DKIM, and DMARC records for your sending domain to improve email deliverability and authentication."

## Accessibility

### Alt Text for Images
- Describe what's shown, not just "screenshot"
- Include relevant text visible in image
- Keep under 125 characters

❌ **Bad**: `![screenshot](image.png)`
✅ **Good**: `![Cloudflare DNS settings showing CNAME record configuration](cloudflare-dns.png)`

### Link Text
- Use descriptive link text
- Avoid "click here" or "read more"

❌ **Bad**: "Click [here](/learn/domains) to learn about domains"
✅ **Good**: "Learn how to [configure sending domains](/learn/domains)"

## Maintenance

### Regular Reviews
- Verify code examples still work
- Update screenshots if UI changes
- Check for broken links
- Ensure version numbers are current

### Deprecation Notices

When features are deprecated:

```mdx
<Warning>
  **Deprecated**: This endpoint is deprecated and will be removed in v2.0. 
  Use [Send Email v2](/api-reference/emails/send-v2) instead.
</Warning>
```

