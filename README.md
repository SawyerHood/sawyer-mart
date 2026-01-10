# Sawyer Mart

A [Claude Code](https://docs.anthropic.com/en/docs/claude-code) plugin marketplace for my personal plugins and skills.

## Prerequisites

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) CLI installed

## Installation

First, add the marketplace:

```
/plugin marketplace add sawyerhood/sawyer-mart
```

Then install any plugin you want:

```
/plugin install <plugin-name>@sawyerhood/sawyer-mart
```

Restart Claude Code after installation.

For more details on plugin marketplaces, see the [Claude Code plugin marketplace documentation](https://code.claude.com/docs/en/plugin-marketplaces).

## Plugins

### library-docs

Look up documentation and source code for libraries and packages. Useful when you need to understand a library's API or encounter unfamiliar library usage.

**Install:**
```
/plugin install library-docs@sawyerhood/sawyer-mart
```

**Usage:**

> "How do I use the zod library?"

> "What's the API for React Query?"

> "Show me how date-fns handles timezone formatting"

---

### workflow

Git worktree management commands for task-based development. Create isolated workspaces for each task without stashing or switching branches.

**Install:**
```
/plugin install workflow@sawyerhood/sawyer-mart
```

**Commands:**

| Command | Description |
|---------|-------------|
| `/workflow:workspace <task>` | Create a new git worktree and branch for a task |
| `/workflow:cleanup [branch]` | Merge a worktree branch into main and clean up |

**Usage:**

> `/workflow:workspace add user authentication`

Creates a new worktree at `../repo-add-user-authentication` with a branch named `add-user-authentication` and installs dependencies.

> `/workflow:cleanup`

Merges the current branch into main, removes the worktree, and deletes the branch.

---

### change-walkthrough

Generate detailed markdown walkthroughs of code changes with automatic HTML conversion and browser preview. Great for documenting what you built or reviewing commits.

**Install:**
```
/plugin install change-walkthrough@sawyerhood/sawyer-mart
```

**Usage:**

> "Create a walkthrough of the changes I just made"

> "Document the last 3 commits"

> "Explain what changed in this PR"

## License

MIT

## Author

[Sawyer Hood](https://github.com/sawyerhood)
