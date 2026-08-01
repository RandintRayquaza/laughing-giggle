# 0014 · Docs Developer Guide

**Status**: Proposed
**Code Area**: `app/docs/page.tsx`, `features/docs/`

## Objective
Design and architect the `/docs` Developer Guide UI. It must serve as a premium, Awwwards-tier documentation portal that houses the Core Orchestrators and Workflow Skills documentation compiled by `/istm-document`.

## User Experience (UX) & Design Tokens
We must avoid generic documentation templates (like standard Docusaurus). This must feel like a "God Mode" operating system manual.

- **Layout Structure:**
  - **Left Sidebar:** A sticky, glassmorphic navigation index linking to the different skills and sections. It should use `bg-[#0a0a0a]/80` and `backdrop-blur-md` with subtle `border-white/5` borders.
  - **Main Content Area:** A wide, highly legible reading pane with strict line lengths (`max-w-3xl`) for perfect reading typography (45-75 characters per line as mandated by project rules).
- **Typography:**
  - Strict adherence to the brand font tokens.
  - Massive headers (`text-4xl` to `text-6xl font-black`) for section titles, dropping the generic small docs styling.
  - Command blocks (`/istm-craft`, etc.) must be styled as terminal-like badges with a subtle glow or `border-white/10`.
- **Motion & Interactions:**
  - **Scroll Spy:** As the user scrolls through the documentation, the active section in the sidebar must highlight using a Framer Motion `layoutId` pill or smooth text-color shifting.
  - **Content Fade:** The main content sections should use a staggered `whileInView` reveal (from bottom, `y: 20px`, `opacity: 0` to `1`) as they enter the viewport.

## Acceptance Criteria
1. The `/docs` route exists and is accessible via the main Navbar.
2. The layout features a 2-column Desktop view (Sticky Sidebar + Content) and a stacked Mobile view.
3. The content from the `dev-guide.md` artifact is structurally implemented using the premium typography scale.
4. The sidebar accurately tracks scroll position and highlights the current active section.
