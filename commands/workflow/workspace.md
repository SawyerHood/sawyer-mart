---
description: Create a new git worktree and branch for a task
argument-hint: <task-description>
allowed-tools: Bash(git:*), Bash(mkdir:*), Bash(cd:*), Bash(bun:*), Bash(ls:*)
---

# Create Workspace

Create a new git worktree for the task: **$ARGUMENTS**

## Workflow

1. **Generate branch name**: Convert the task description into a kebab-case branch name (e.g., "add user auth" → `add-user-auth`)

2. **Ensure worktrees directory exists**:
   ```bash
   mkdir -p ~/worktrees
   ```

3. **Create the worktree and branch**:
   ```bash
   git worktree add ~/worktrees/<branch-name> -b <branch-name>
   ```

4. **Install dependencies** in the new worktree:
   ```bash
   cd ~/worktrees/<branch-name> && bun i
   ```

5. **Confirm success** by listing the worktree:
   ```bash
   git worktree list
   ```

6. **Report to user**: Tell them the worktree is ready at `~/worktrees/<branch-name>` and they can start working on their task.

## Notes

- Branch names should be lowercase, kebab-case, and descriptive
- Keep branch names reasonably short (under 50 chars)
- The worktree will be created from the current HEAD
