<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
# ISTM Landing Page — AI Agent Working Instructions

This document defines how AI coding agents should understand, architect, and implement the **ISTM Landing Page**.

Everything written here is considered project context. Never ignore these rules.

---

# Project Overview

The ISTM Landing Page is the premium marketing and documentation site for the open-source **ISTM Skills Framework** (`@istmx/skills`).

ISTM provides "Agentic Skills" (like `/istm-context` and `/istm-gsap`) that developers install via an NPM CLI to inject strict architectural blueprints and design tokens directly into their AI IDEs (Cursor, Windsurf, Claude Code).

This landing page must serve as a high-fidelity showcase of what the framework can do. It must look incredibly premium, developer-focused, and cinematic.

---

# Core Product Principles

The product should always feel:
- Professional
- Developer-first
- Minimal
- Premium
- Fast
- Predictable
- Structured

Never make the application feel like a generic SaaS template. It must feel like an elite, enterprise-grade developer tool.

---

# Primary User Flow

User visits landing page.
↓
Sees cinematic Hero section (Manifesto: The future is System Design, not typing speed).
↓
Views feature comparison (AI hallucination vs. ISTM structured context).
↓
Reads the open-source philosophy.
↓
Copies installation command (`npx @istmx/skills init`).
↓
Reads documentation for specific skills (`/istm-context`, `/istm-gsap`).

---

# Supported AI Tools

The ISTM framework itself supports any Markdown-based AI workflow (Cursor, Claude Code, Windsurf, Copilot). This landing page must clearly communicate that universality.

---

# Development Principles

Always prefer:
- Maintainability
- Scalability
- Readability
- Reusability
- Type safety (TypeScript)
- Predictable Next.js App Router architecture

Never write code only because it works. Write code that another engineer can immediately understand.

---

# Frontend Layout and Text-Wrapping Safety

Before adding or changing frontend UI, verify the rendered parent width and alignment at desktop and mobile sizes.
- Do not make a flex or grid text wrapper shrink-to-fit accidentally. A content row that owns a full-width child should explicitly use `w-full min-w-0` when appropriate.
- Do not use `overflow-wrap: anywhere` for normal prose. Use normal wrapping or `overflow-wrap: break-word`.
- Do not hardcode UI surface, text, border, or semantic-state colors in components. Use semantic tokens.
- Use the product sans token for body copy. Use tall/display faces (like Bebas Neue or Satoshi) for deliberate editorial hero typography.
- Shared buttons must use a unified button component vocabulary.

---

# Dual Motion Standard

The landing page must feature a highly polished Dual Motion Engine:
- **Framer Motion (`framer-motion`)**: For interactive component micro-states, hover glows, and 3D card flips.
- **GSAP + ScrollTrigger**: For scroll-linked page reveals, cinematic text reveals, and pinned hero timelines.

---

# Folder Structure

Use Feature-Based Architecture for Next.js App Router.

Recommended structure:
```
src/
  app/
    (routes)
    globals.css
  components/
    ui/ (shared primitives like Button, Input)
    features/ (domain-specific sections like Hero, Docs, Pricing)
  lib/
  hooks/
  types/
  constants/
```
Keep business logic isolated. Pages should only act as routing layers rendering feature components.

---

# Component & File Length Rules

- No source file should exceed approximately 150 lines whenever reasonably possible.
- If a file becomes too large: split it into sub-components, hooks, or constants.
- Keep components focused. One responsibility.

---

# Styling Rules & Constants

- Never hardcode colors, spacing, typography, border radius, or shadows. Always use Tailwind design tokens defined in `globals.css` or `tailwind.config`.
- Never hardcode strings for routes or animation values. Create constants.

---

# Progress & Error Memory Tracking

Two critical memory tracking files should exist:
1. `progress.md`: Tracks completed tasks, feature statuses, and pending deliverables.
2. `memory.md`: Tracks system architecture bugs, root causes, and verified fix patterns.

AI agents MUST inspect `memory.md` before making code changes to avoid repeating past architectural bugs, and update both files after completing meaningful work.

---

# Planning Before Coding

Never immediately start implementing. Before writing code:
1. Understand the feature.
2. Break the feature into small tasks.
3. Explain the implementation plan.
4. Only then begin implementation.

---

# Definition of Done

A task is complete only when:
- Feature works correctly
- Code follows Next.js App Router architecture
- No hardcoded values
- Components are reusable (< 150 lines)
- GSAP/Framer Motion animations are 60fps and bug-free
- `progress.md` is updated
