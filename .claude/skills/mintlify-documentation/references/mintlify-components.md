# Mintlify Components Reference

## Navigation Components

### Card & CardGroup

Use for navigation, feature highlights, or related links.

```mdx
<CardGroup cols={2}>
  <Card title="API Keys" icon="key" href="/learn/api-keys/introduction">
    Manage authentication and permissions
  </Card>
  <Card title="Domains" icon="globe" href="/learn/domains/introduction">
    Configure SPF, DKIM, and DMARC
  </Card>
</CardGroup>
```

**Props**:
- `cols` - Number of columns (1-4)
- `title` - Card title
- `icon` - Icon name (Lucide icons)
- `href` - Link destination
- `color` - Optional color override

### Tabs

Use for language-specific examples or platform variations.

```mdx
<Tabs>
  <Tab title="Node.js">
    ```javascript
    const lettr = require('@lettr/node');
    ```
  </Tab>
  <Tab title="PHP">
    ```php
    use Lettr\Client;
    ```
  </Tab>
  <Tab title="Python">
    ```python
    from lettr import Client
    ```
  </Tab>
</Tabs>
```

## Callout Components

### Tip

For best practices, helpful hints, and optimization suggestions.

```mdx
<Tip>
  Use descriptive subjects to improve open rates and deliverability.
</Tip>
```

### Warning

For important caveats, security concerns, or potential issues.

```mdx
<Warning>
  Never commit API keys to version control. Use environment variables instead.
</Warning>
```

### Note

For additional context, clarifications, or supplementary information.

```mdx
<Note>
  DNS changes may take up to 48 hours to propagate globally.
</Note>
```

### Info

For informational callouts that don't fit other categories.

```mdx
<Info>
  Lettr automatically handles bounce processing and maintains suppression lists.
</Info>
```

## Instructional Components

### Steps & Step

For sequential, numbered instructions.

```mdx
<Steps>
  <Step title="Create API Key">
    Navigate to Settings > API Keys in your dashboard.
  </Step>
  <Step title="Configure Permissions">
    Select the permissions your application needs.
  </Step>
  <Step title="Save Securely">
    Copy the key and store it in your environment variables.
  </Step>
</Steps>
```

### Accordion & AccordionGroup

For collapsible content, FAQs, or optional details.

```mdx
<AccordionGroup>
  <Accordion title="What is SPF?">
    SPF (Sender Policy Framework) is an email authentication method that specifies which mail servers are authorized to send email on behalf of your domain.
  </Accordion>
  <Accordion title="What is DKIM?">
    DKIM (DomainKeys Identified Mail) adds a digital signature to your emails, allowing recipients to verify the message wasn't altered in transit.
  </Accordion>
</AccordionGroup>
```

## Code Components

### Code Blocks

Always specify language for syntax highlighting:

```mdx
```javascript
const client = new Lettr.Client({
  apiKey: process.env.LETTR_API_KEY
});
```
```

**Supported languages**:
- `bash` / `shell`
- `javascript` / `typescript`
- `php`
- `python`
- `go`
- `rust`
- `java`
- `json`
- `yaml`
- `html`
- `css`

### Inline Code

Use backticks for inline code, commands, or technical terms:

```mdx
Set your `LETTR_API_KEY` environment variable before running the application.
```

## API Reference Components

### OpenAPI Integration

Minimal frontmatter for API endpoint pages:

```mdx
---
title: Send Email
openapi: POST /emails
---

Send a transactional email to one or more recipients.
```

The `openapi` field automatically generates:
- Request parameters
- Request body schema
- Response schemas
- Example requests/responses
- Authentication requirements

## Layout Components

### Frame

Embed external content (use sparingly):

```mdx
<Frame>
  <img src="/images/dashboard-overview.png" alt="Dashboard overview" />
</Frame>
```

### CodeGroup

Group related code examples:

```mdx
<CodeGroup>
```javascript Node.js
const result = await client.emails.send({...});
```

```php PHP
$result = $client->emails->send([...]);
```

```python Python
result = client.emails.send({...})
```
</CodeGroup>
```

## Best Practices

### When to Use Each Component

| Component | Use Case | Don't Use For |
|-----------|----------|---------------|
| `<Card>` | Navigation, feature highlights | Long-form content |
| `<Tip>` | Best practices, optimization | Critical warnings |
| `<Warning>` | Security, breaking changes | General information |
| `<Note>` | Additional context | Primary content |
| `<Steps>` | Sequential tasks | Unordered lists |
| `<Accordion>` | Optional details, FAQs | Primary content |
| `<Tabs>` | Language/platform variations | Unrelated content |

### Component Nesting

**Allowed**:
- `<CardGroup>` → `<Card>`
- `<AccordionGroup>` → `<Accordion>`
- `<Steps>` → `<Step>`
- `<Tabs>` → `<Tab>`

**Avoid**:
- Nesting callouts (`<Tip>` inside `<Warning>`)
- Multiple `<Steps>` in one section
- Excessive `<Accordion>` nesting

### Accessibility

- Always include `title` props where required
- Use descriptive link text in cards
- Provide alt text for images
- Don't rely solely on color for meaning

## Common Patterns

### Feature Introduction

```mdx
## Webhooks

Webhooks allow you to receive real-time notifications when email events occur.

<CardGroup cols={2}>
  <Card title="Setup Guide" icon="gear" href="/learn/webhooks/setup">
    Configure webhook endpoints
  </Card>
  <Card title="Event Types" icon="list" href="/learn/webhooks/events">
    Available webhook events
  </Card>
</CardGroup>
```

### Quick Start

```mdx
<Steps>
  <Step title="Install SDK">
    ```bash
    npm install @lettr/node
    ```
  </Step>
  <Step title="Initialize Client">
    ```javascript
    const lettr = require('@lettr/node');
    const client = new lettr.Client({ apiKey: 'lttr_...' });
    ```
  </Step>
  <Step title="Send Email">
    ```javascript
    await client.emails.send({
      from: 'hello@yourdomain.com',
      to: 'user@example.com',
      subject: 'Welcome!',
      html: '<p>Thanks for signing up!</p>'
    });
    ```
  </Step>
</Steps>
```

### Troubleshooting

```mdx
<AccordionGroup>
  <Accordion title="401 Unauthorized Error">
    Verify your API key is correct and has the required permissions.
    
    <Tip>
      Check that your API key starts with `lttr_` and is 68 characters long.
    </Tip>
  </Accordion>
  <Accordion title="Emails Not Delivering">
    Ensure your sending domain is verified and DNS records are configured correctly.
  </Accordion>
</AccordionGroup>
```

