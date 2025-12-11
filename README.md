# Lettr Documentation

This is the official documentation for Lettr, powered by [Mintlify](https://mintlify.com).

## Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview the documentation locally:

```bash
npm i -g mintlify
```

Run the following command at the root of your documentation (where `mint.json` is):

```bash
mintlify dev
```

## Structure

```
docs/
├── mint.json                    # Mintlify configuration
├── introduction.mdx             # Main introduction page
├── quickstart/                  # Quickstart guides
│   ├── php/                     # PHP guides
│   ├── smtp/                    # SMTP guides
│   ├── serverless/              # Serverless guides
│   └── nodejs/                  # Node.js guides
├── learn/                       # Learning resources
│   ├── sending/                 # Email sending guides
│   ├── receiving/               # Email receiving guides
│   ├── domains/                 # Domain configuration
│   ├── api-keys/                # API key management
│   ├── webhooks/                # Webhook configuration
│   ├── templates/               # Template guides
│   ├── suppressions/            # Suppression management
│   └── settings/                # Account settings
├── resources/                   # Additional resources
│   ├── examples.mdx
│   ├── sdks.mdx
│   ├── security.mdx
│   └── integrations.mdx
├── api-reference/               # API documentation
│   ├── introduction.mdx
│   ├── emails/
│   ├── domains/
│   ├── api-keys/
│   └── webhooks/
└── knowledge-base/              # Help articles
    ├── introduction.mdx
    ├── troubleshooting/
    └── best-practices/
```

## Tabs

The documentation is organized into three main tabs:

1. **Documentation** - Main product documentation and guides
2. **API Reference** - Complete API documentation
3. **Knowledge Base** - Troubleshooting and best practices

## Publishing Changes

Changes to the docs are automatically deployed when pushed to the main branch.

## Links

- [Mintlify Documentation](https://mintlify.com/docs)
- [Lettr Dashboard](https://app.lettr.dev)
- [Lettr Status](https://status.lettr.dev)
