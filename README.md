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

## License

MIT
