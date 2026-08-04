import re

skill_path = "/workspaces/laughing-giggle/skills/istm-workflow/istm-sync/SKILL.md"
with open(skill_path, "r") as f:
    content = f.read()

# Edit what this skill does
new_content = content.replace(
    "Closes the loop on a completed change: syncs .istm-context/agents.md files, the scope, and linked spec `**Status**:` lines to what the repo now shows, and flags what it must not edit (stale specs, curated prose). The Boundaries table below is the exact contract.",
    "Dual-mode orchestrator: \n1. **Save mode** (default): Closes the loop on a completed change, syncing `.istm-context/agents.md`, the scope, and linked spec `**Status**:` lines to repo evidence.\n2. **Restore mode** (`/istm-sync restore`): Reads all progress files (`progress.md`, `memory.md`, `.istm-context/istm-scope/*`, and `agents.md`) to fully rehydrate the AI's context for a new session, establishing exactly what was last completed and what is pending."
)

# Edit Execution
exec_addition = """
## Execution Modes

### Mode: Restore (`/istm-sync restore`)
Run this on a fresh session to instantly restore context.
1. **Find all context files**: Using glob tools, locate `progress.md`, `memory.md`, `.istm-context/decisions.md`, `.istm-context/istm-scope/**/*.md`, and all `.istm-context/agents.md` files.
2. **Read them all**: Ingest these files completely so you have maximum context on architectural decisions, the last completed task, pending specs, and active TODOs.
3. **Output Rehydration Summary**: Output a structured "You Are Here" block summarizing the current architecture, completed tasks, active spec, and immediate next steps. Do not run any Git commands or try to write files in this mode.

### Mode: Save (Default)
Run after completing a change.
"""

new_content = new_content.replace("## Execution\n", exec_addition)

with open(skill_path, "w") as f:
    f.write(new_content)

prompt_path = "/workspaces/laughing-giggle/skills/istm-workflow/istm-sync/agent-prompt.md"
with open(prompt_path, "r") as f:
    prompt_content = f.read()

prompt_addition = """
## If MODE is Restore

If you were invoked as `/istm-sync restore`:
1. Read all the loaded files (`progress.md`, `memory.md`, scope files, agents.md).
2. Synthesize the project state.
3. Output a "Context Restored" summary containing:
   - **Architecture & Tech Stack**: Core technologies in use.
   - **Recent Decisions**: From memory or decisions logs.
   - **Progress**: What was just finished (from `progress.md` or scope `[x]`).
   - **Active Task**: What is currently `In Progress`.
   - **Next Steps**: The immediate TODOs to tackle next.
4. Stop execution here. Do not attempt to reconcile git diffs or edit files.

---

## If MODE is Save (Default Maintenance)
"""

prompt_content = prompt_content.replace("## The change\n", prompt_addition + "\n## The change\n")

with open(prompt_path, "w") as f:
    f.write(prompt_content)
