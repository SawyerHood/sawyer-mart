---
description: Merge a worktree branch into main and clean up
argument-hint: [branch-name]
allowed-tools: Bash(git:*), Bash(rm:*), Bash(ls:*), Bash(cd:*)
---

# Cleanup Worktree

Merge the worktree branch into main and clean up.

## Workflow

### 1. Identify the branch

If `$ARGUMENTS` is provided, use that as the branch name. Otherwise:
```bash
git worktree list
```
Ask the user which worktree/branch to clean up if multiple exist.

### 2. Switch to main branch (in the main working directory)

Ensure you're in the main repository (not a worktree):
```bash
cd <main-repo-path>
git checkout main
```

### 3. Merge the branch

```bash
git merge <branch-name>
```

If there are merge conflicts, help the user resolve them before proceeding.

### 4. Remove the worktree

```bash
git worktree remove ~/worktrees/<branch-name>
```

If there are uncommitted changes, warn the user and ask if they want to force removal with `--force`.

### 5. Delete the branch

```bash
git branch -d <branch-name>
```

### 6. Verify cleanup

```bash
git worktree list
git branch
```

### 7. Report to user

Confirm that:
- The branch has been merged into main
- The worktree has been removed
- The branch has been deleted

## Notes

- Always ensure changes are committed before cleanup
- If merge fails, help resolve conflicts
- Use `git worktree remove --force` only if user confirms
