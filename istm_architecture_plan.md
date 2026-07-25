# ISTM Skills Framework - Architecture Plan

## The Goal
Convert the Zenix RAG knowledge base and backend logic into a set of "Agentic Skills" that operate natively inside IDE chat environments (Cursor, Windsurf, Claude Code, Copilot).

## The CLI + GUI Strategy
We are separating the engine from the interface to hijack the native IDE workflows:

1. **The CLI (`npx @istmx/skills init`)**
   - A command-line tool that developers run in their project.
   - It prompts the user for their tech stack and project type.
   - It injects the specific ISTM Markdown skill files directly into the IDE's hidden context folders (e.g., `.cursor/rules/`, `.clinerules`).

2. **The GUI (Native IDE Integration)**
   - Instead of building a custom web dashboard, the "GUI" is the user's native AI chat window in Cursor or Claude.
   - Because the CLI injected the Markdown skills, the developer can simply type commands like `/istm-context` or `@istm-gsap` directly into the Cursor chat.
   - The IDE's built-in AI will read the ISTM constraints and execute them perfectly.

## The Flat Command Structure
Instead of nested commands, skills will use a flat, recognizable prefix:
- `istm-context.md` (invoked as `/istm-context`)
- `istm-gsap.md` (invoked as `/istm-gsap`)
- `istm-ui.md` (invoked as `/istm-ui`)
- `istm-schema.md` (invoked as `/istm-schema`)

## The Master Skill: `/istm-context`
This is the flagship skill that replaces the Zenix Python Orchestrator. 
- It is a "God Mode" router prompt.
- When invoked (`/istm-context "Build a fintech dashboard"`), it forces the AI to read the bundled UI rules, animation timelines, and schema logic.
- It instructs the AI to generate the 4 Zenix blueprint files (`agents.md`, `design.md`, `architecture.md`, `project-overview.md`) *before* writing any application code.
- If run on an existing codebase, it reverse-engineers the project and generates the strict context constraints for it.

## Next Step: The Landing Page
Before coding the CLI, we will build a premium landing page to serve as the marketing and documentation hub for the framework. This will reuse the high-fidelity React/Vite/GSAP components built during the Zenix era.
