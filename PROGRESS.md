# @istmx/skills Progress Record

This document tracks the massive architectural work completed to build the ultimate AI coding agent orchestrator.

## Phase 1: The "Impeccable" Context Engine
- **Master Orchestrator (`SKILL.md`)**: Rewrote the entire root architecture skill to act as a self-consuming bootstrap. It evaluates raw prompts, executes a Discovery Gate, and orchestrates the generation of 4 foundational pillars.
- **The 4 Pillars**: Created highly structured templates for `.istm-context/`:
  - `agents.md`: The 250-line rulebook and progress memory loops.
  - `project-overview.md`: Business logic and core features.
  - `architecture.md`: System design and API flows.
  - `design.md`: The UX strategy, motion logic, and UI principles.
- **Aesthetic Enforcement**: Hardcoded strict rules forbidding emojis and forcing the AI to pause for asset uploads, ensuring premium visual output.

## Phase 2: The CLI Installer (`bin/cli.js`)
- **Multi-Tier Harness Detection**: The CLI smartly detects the user's IDE via `process.env.TERM_PROGRAM` or directory scanning (`.cursor`, `.claude`, `.gemini`, `.cline`).
- **Pure Installer Mode**: The CLI was stripped of redundant interactive questions. It now acts as a silent dropper that prepares the environment for the AI to take over.
- **The Self-Destruct Loop**: 
  - The CLI drops the Master Orchestrator at the root (named after the IDE harness).
  - It drops the blank `agents.md` rulebook into `.istm-context/`.
  - The Orchestrator instructs the AI to interview the user, hydrate `agents.md`, and then overwrite the root Orchestrator file with the finished rulebook.

## Phase 3: The 1-2 Punch Workflow (`istm-craft`)
- Separated "Day Zero" architecture (`istm-architecture`) from "Day-to-Day" feature building.
- Renamed the bloated JSM `architect` skill to `istm-craft`.
- Gutted the 29,000-byte JSM file and replaced it with a lean, targeted skill that strictly reads `.istm-context/` blueprints before designing new features in `docs/specs/`.

## Phase 4: Full Orchestrator Ecosystem Completion
- **Architectural Mapping**: Mapped out a highly modular dependency graph linking all skills (`SKILL_ARCHITECTURE.md`).
- **The Core Orchestrators**: Built out the remaining elite `SKILL.md` files:
  - `/istm-design`: Visual token core with anti-slop rules.
  - `/istm-animate`: Hardware-accelerated motion orchestrator.
  - `/istm-system-design`: Backend logic and schema orchestrator.
  - `/istm-awwward-designer`: Premium frontend engine combining WebGL and GSAP.
- **The Universal NLP Router (`/istm`)**: Upgraded the God Mode command to semantically route raw prompts to the absolute best skill across the entire ecosystem, including workflow tools like `/audit` and `/istm-craft`.
- **Structural Distribution**: Removed UI framework stacks out of `system-design` and strictly distributed them to `design` (Shadcn, Uno), `architecture` (Next.js, React, Flutter), and `awwward-designer` (ThreeJS).
- **GitHub Syncing**: Synced these sweeping changes directly to `istmX/skills` and `laughing-giggle`. Removed legacy files (`install.sh`, `.gitignore`) from `/istm-awwward-designer` via a Pull Request workflow.

## Next Steps
- Write the dynamic install scripts (e.g., inside `bin/cli.js`) to intelligently stitch these completed orchestrators together into the end-user's IDE.
- Continue refactoring the `/istm-workflow` commands (like `/audit`, `/develop`, `/debug`) to ensure they fully adopt the new Impeccable YAML structure and `.istm-context/` blueprints.

## Phase 5: The Awwwards Execution Engine & Refactoring
- **Execution Conversion (`istm-awwward-designer`)**: Rewrote the premium frontend engine to physically *write code* rather than just output blueprints. Enforced GSAP, Lenis, and strict visual aesthetics.
- **Reference Library Flattening**: Cleaned up legacy git clone cruft inside `istm-awwward-designer` and flattened the massive `references/` documentation library for direct AI access.
- **Blueprint Centralization**: Ensured all workflow skills strictly output their blueprints to `.istm-context/` instead of polluting the root repository.
- **Slash Command Fix**: Identified why custom skills weren't appearing in the Antigravity CLI `/` menu (they need to be in `.gemini/skills/`).

## Phase 6: Production CLI & Open-Source NPM Launch
- **Installer Precision (`bin/cli.js`)**: Fixed the fatal symlinking issue. The installer now perfectly drops the true Universal NLP Router (`/istm`) and correctly routes IDE slash commands into `.gemini/skills/` or `.cursor/rules/`.
- **Public Ecosystem Preparation**: Obliterated the `_legacy_archive` and messy development files to ensure a lean package size. 
- **Production Manifest**: Transformed `package.json` into a production-ready artifact with native `npx` routing (`bin: "bin/cli.js"`) and SEO-optimized keywords.
- **The Global README**: Authored a massive, compelling `README.md` introducing "Context-as-a-Service" and the `@istmx/skills` philosophy.
- **Merge & Publish**: Successfully resolved git merge conflicts on GitHub via command-line force resolution. Masterfully published `npx @istmx/skills` to the global NPM registry via direct OTP bypass token.

## Phase 7: NPM SEO Maximization & Global Workflow Injection
- **SEO Powerhouse**: Completely maxed out the `keywords` array in `package.json` with nearly 90 high-value search terms targeting Generative AI, Awwwards animations (GSAP/Lenis), DX, architectures, and UI/UX.
- **Google Search Optimization**: Overhauled the GitHub/NPM `README.md` to be extremely highly indexed by Google. Embedded major search intent keywords organically into H1/H2 structures and descriptive paragraphs.
- **Global Skill Symlinking**: Fixed the IDE detection issue by directly symlinking all `.agents/skills` and nested `istm-workflow` utility skills into the global `~/.gemini/skills/` directory. All slash commands are now natively accessible in the terminal from any folder.
- **Installer Bug Fix (`bin/cli.js`)**: Modified the NodeJS installer logic to correctly extract individual workflow skills (`istm-audit`, `istm-craft`, etc.) from the `istm-workflow` source directory instead of incorrectly nesting them as a single parent folder in the user's IDE context.
- **Git Remote Restoration**: Identified and fixed a fatal git collision where the `skills` repository's `origin` remote was incorrectly pointing to the `laughing-giggle` parent directory. Re-routed the config to securely push to `istmX/skills`.
- **The Masterpiece README**: Completely rewrote the `@istmx/skills` README from scratch. It is now a high-end, engaging manifesto explicitly detailing the exact capabilities of every single Core Orchestrator (e.g., `/istm-awwward-designer`) and Day-to-Day Workflow Skill (e.g., `/istm-debug`, `/istm-craft`), establishing absolute clarity for the open-source community.

## Phase 8: Landing Page Expansion (Skills & Sponsors)
- **Skills Page Interactive UI**: Refactored the generic skills grid into a massive typography list. Implemented responsive fork logic: Desktop features a `FollowerPointerCard` glassmorphic tooltip, while Mobile uses a sleek tap-to-expand accordion using Framer Motion spring physics.
- **Sponsor Page God Tier Pitch**: Architected and developed a 3-section storytelling funnel for the `/sponsor` route. Transformed it from a basic "0 Sponsors" text into a premium God Sponsor pitch with scrolling animations, dynamic sticky headers, and integrated the `GooeyInput` for immediate lead capture.
- **Motion Architecture Setup**: Replaced basic intersection observers with scroll-linked physics using Framer Motion's `useScroll` and `useTransform` to bind exact scroll wheel progress to element opacity, scale, and parallax dragging on the Sponsor page.

## Phase 9: The Anti-Slop Architecture & Open Source Release
- **Strict Scaffold Validation**: Overhauled `/istm-architecture` to enforce Just-In-Time Scaffold creation, completely banning the generation of massive empty folder trees upfront. Native framework structures (e.g. Next.js `app/`) are explicitly preserved.
- **Component Boundary Guardrails**: Codified Feature-Based Architecture rules into the Builder engine. Reusable elements (like Shadcn components) are strictly isolated to `shared/components/`, while feature-specific logic is locked in `features/<name>/components/`.
- **Dynamic Context Parsing**: Implemented real-time URL ingestion logic into `/istm-craft` and `/istm-develop`. Agents can now scrape documentation URLs pasted into prompts, overriding outdated AI training weights (e.g. Next.js 16 updates) and caching the patterns to `.istm-context/docs/`.
- **Bespoke Design Token Engine**: Eradicated generic "AI Slop" style presets (Minimal, Brutalism, etc.) from `/istm-design`. Added a mandatory `Step 0` execution gate forcing the AI to recursively read the massive internal `istm-design/` subdirectories to parse user prompts into bespoke typography scaling and semantic color variables.
- **Open-Source Professionalization**: Upgraded the repository for public scaling. Rewrote the `README.md` to highlight the new deterministic features and solicit community collaboration. Drafted an AI-specific `CODE_OF_CONDUCT.md` and expanded the MIT `LICENSE` to legally guarantee user ownership of all AI-generated code output.
- **v1.2.0 Launch**: Bumped the framework version across the board, generated the official release notes, guided the GitHub Tag resolution process, and successfully prepared the project for its massive public launch after achieving immense early organic traction.

## Phase 10: Cloudflare Deployment & Advanced SEO Architecture
- **Cloudflare Integration**: Configured the `istm-landing` Next.js application for Cloudflare deployment by installing `@cloudflare/next-on-pages` and generating a strict `wrangler.jsonc` file with Node.js compatibility flags.
- **Dynamic SEO Enforcement**: Eradicated static `public/sitemap.xml` and `public/robots.txt` files to fix Google Search Console parsing failures. Implemented Next.js dynamic Metadata API endpoints (`app/sitemap.ts` and `app/robots.ts`) to guarantee precise HTTP header delivery.
- **Agent Knowledge Bases**: Engineered a massive `lmm.txt` file serving as an exhaustive LLM manifesto. It documents the entire CLI architecture, 4 Pillars of Truth, and God Mode frameworks directly for AI crawling. Updated `AGENTS.md` to permanently ban the use of static SEO files.
- **Global Domain Migration**: Executed a codebase-wide domain migration from Vercel to `https://istmx.dpdns.org`, programmatically updating all OpenGraph, canonical, and structured JSON-LD URL tokens across every Next.js route.

## Phase 11: The Omni-Channel Architecture & Dual-Mode Paradigm
- **Repository Integration**: Successfully extracted and merged the native intelligence from `genjutsu`, `design-dna`, and Emil Kowalski's physics into the core `@istmx/skills` orchestrators. Permanently scrubbed all external branding, ensuring 100% `@istmx` native identity.
- **Dual-Mode Orchestration**: Rewrote `istm-animate/SKILL.md` and `istm-awwward-designer/SKILL.md` to introduce the **Dual-Mode Paradigm**. Agents now operate as Architects (Context Phase via Discovery Gate) or lethal Executors (Execution Phase via Cast & Paint pipelines).
- **Omni-Channel Expansion**: Engineered the architecture to natively support multi-platform environments beyond the web. Integrated flawless execution principles for Apple (SwiftUI, Metal) and Android (Jetpack Compose, AGSL).
- **Claude Code Supremacy**: Completely overhauled the root `README.md` to explicitly optimize the ecosystem for **Claude Code**. Eradicated all hardcoded technology stacks (Next.js, React, Shadcn, Prisma) to establish the orchestrators as 100% stack-agnostic.
- **Enterprise Guardrails Documentation**: Updated the documentation to heavily highlight the Day-to-Day workflow safety net, explicitly detailing the **Spec Gate** (mathematical refusal to guess) and **Git Guardrails** (mandatory branch status checks).
- **v2.0 Deployment**: Checked out and committed the massive 23,927+ line codebase update to the `feat/v2-architecture-rebrand` branch, successfully synchronized both `laughing-giggle` and `skills` repositories back to `main`, and published the finalized `RELEASE_v1.2.0.md` for public deployment.
