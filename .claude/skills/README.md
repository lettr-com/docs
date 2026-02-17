# Claude Skills for Lettr Documentation

This directory contains local-only Claude Code skills for maintaining the Lettr documentation.

## What Are Skills?

Skills are specialized instruction sets that Claude Code automatically loads when working in specific contexts. They provide domain-specific guidelines, best practices, and workflows.

## Available Skills

### `mintlify-documentation`

**Purpose**: Documentation writing and maintenance guidelines for Lettr's Mintlify-based documentation site.

**Activates when**:
- Creating or editing MDX files
- Updating navigation in `docs.json`
- Adding API reference pages
- Writing guides or knowledge base articles
- Maintaining DNS provider guides
- User mentions: documentation, docs, Mintlify, MDX, knowledge base

**Includes**:
- Core documentation principles
- Writing guidelines and voice/tone
- Mintlify component usage
- SEO best practices
- Quality checklist
- Common tasks and workflows

**Reference Files**:
- `references/writing-guide.md` - Comprehensive writing guidelines
- `references/mintlify-components.md` - Component reference and examples
- `references/seo-checklist.md` - SEO optimization checklist

## Why Local-Only?

These skills are kept **local** (not committed to git) because they represent:
- Personal workflow preferences
- Machine-specific configurations
- Experimental guidelines being refined
- Documentation that may evolve independently of the codebase

The `.gitignore` file ensures `.claude/skills/` is never committed.

## How Skills Work

1. **Automatic Loading**: Claude Code automatically detects and loads skills from `.claude/skills/`
2. **Context-Aware**: Skills activate based on their `description` field and current work context
3. **Hierarchical**: Skills can reference additional files in `references/` subdirectories
4. **Composable**: Multiple skills can be active simultaneously

## Creating New Skills

To create a new skill:

1. Create a directory: `.claude/skills/your-skill-name/`
2. Add a `SKILL.md` file with frontmatter:

```markdown
---
name: your-skill-name
description: >
  Brief description of when this skill should activate.
  Include trigger keywords and use cases.
license: MIT
metadata:
  author: your-name
---

# Your Skill Name

## Context
Explain what this skill is for...

## Guidelines
Provide specific instructions...
```

3. Optionally add reference files in `references/` subdirectory
4. The skill will automatically load when working in relevant contexts

## Skill Structure

```
.claude/skills/
├── README.md                           # This file
└── mintlify-documentation/             # Skill directory
    ├── SKILL.md                        # Main skill file
    └── references/                     # Additional reference docs
        ├── writing-guide.md
        ├── mintlify-components.md
        └── seo-checklist.md
```

## Best Practices

### Skill Design
- **Focused**: Each skill should cover one domain or workflow
- **Actionable**: Provide specific, actionable guidelines
- **Examples**: Include examples of good and bad practices
- **Checklists**: Use checklists for multi-step processes

### Maintenance
- **Review regularly**: Update skills as workflows evolve
- **Test effectiveness**: Verify Claude follows the guidelines
- **Iterate**: Refine based on actual usage
- **Document changes**: Keep skills up-to-date with project changes

### Organization
- **Clear naming**: Use descriptive, kebab-case names
- **Logical structure**: Group related guidelines together
- **Reference files**: Split large skills into focused reference files
- **Cross-references**: Link between related skills and references

## Troubleshooting

### Skill Not Activating

**Check**:
1. Skill directory is in `.claude/skills/`
2. `SKILL.md` file exists with proper frontmatter
3. `description` field includes relevant trigger keywords
4. You're working in a context that matches the description

### Skill Conflicts

If multiple skills provide conflicting guidance:
1. More specific skills take precedence
2. Explicitly mention which skill to follow
3. Consider merging or refining skill descriptions

### Skill Not Loading

**Verify**:
1. Frontmatter is valid YAML
2. File is named `SKILL.md` (case-sensitive)
3. Directory structure is correct
4. No syntax errors in the markdown

## Related Files

- `.claude/settings.local.json` - Local Claude Code settings (also git-ignored)
- `CLAUDE.md` - Root-level Claude Code instructions (git-ignored)
- `.gitignore` - Ensures skills remain local

## Learn More

- [Claude Code Documentation](https://docs.anthropic.com/claude/docs)
- [Mintlify Documentation](https://mintlify.com/docs)
- [Lettr Documentation Site](https://docs.lettr.com)

## Questions?

If you have questions about these skills or want to suggest improvements, discuss with the team or update the skills directly.

