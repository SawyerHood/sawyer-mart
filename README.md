# Sawyer Market

A Claude Code plugin marketplace for my personal plugins.

## Installation

### Step 1: Add the Marketplace

In Claude Code, run:

```
/plugin marketplace add sawyerhood/sawyer-market
```

### Step 2: Install a Plugin

```
/plugin install library-docs@sawyerhood/sawyer-market
```

### Step 3: Use It!

Restart Claude Code after installation to activate the plugin.

## Available Plugins

### library-docs

Look up documentation and source code for libraries and packages. Use when you need to understand a library's API or when encountering unfamiliar library usage.

**Trigger phrases:**
- "How do I use X library?"
- "What's the API for Y?"
- "Show me how Z library handles this"

### workflow

Git worktree management commands for task-based development. Includes two commands:

**`/workflow:workspace <task-description>`** - Create a new git worktree and branch for a task. Converts task descriptions to kebab-case branch names and sets up the workspace with dependencies installed.

**`/workflow:cleanup [branch-name]`** - Merge a worktree branch into main and clean up. Handles merging, worktree removal, and branch deletion.

### change-walkthrough

Generate detailed markdown walkthroughs of code changes with automatic HTML conversion and browser preview.

**Trigger phrases:**
- "Create a walkthrough"
- "Explain the changes"
- "Review recent commits"
- "Document what changed"

## Repository Structure

```
sawyer-market/
├── .claude-plugin/
│   └── marketplace.json
└── plugins/
    ├── library-docs/
    │   └── skills/
    │       └── library-docs/
    │           └── SKILL.md
    ├── workflow/
    │   └── commands/
    │       └── workflow/
    │           ├── workspace.md
    │           └── cleanup.md
    └── change-walkthrough/
        └── skills/
            └── change-walkthrough/
                ├── SKILL.md
                ├── package.json
                ├── scripts/
                │   └── md-to-html.js
                └── tmp/
```

Each plugin is isolated in its own directory to prevent skill/command duplication across plugins.

## License

MIT
