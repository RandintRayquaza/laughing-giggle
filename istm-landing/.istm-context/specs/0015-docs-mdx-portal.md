# 0015 · MDX Documentation Portal

**Status**: Proposed
**Code Area**: `app/docs/[[...slug]]/page.tsx`, `content/docs/`, `lib/mdx.ts`

## Objective
Upgrade the static `/docs` page into a scalable, MDX-driven documentation portal. It must emulate the premium DX of Next.js or Stripe docs, featuring a 3-column layout that explains the mental model and how the ecosystem's skills interlock.

## Requirements & Data Model
- **Content Engine:** We will use `next-mdx-remote` and `gray-matter` to parse local markdown/MDX files from a new `content/docs/` directory.
- **Frontmatter:** Each `.mdx` file must include `title`, `description`, and `order` (for sidebar sorting).
- **Required Content Architecture:**
  - *Getting Started*: Installation and setup.
  - *The Mental Model*: How `.istm-context/` acts as the brain (Context-as-a-Service).
  - *Skill Composability*: Explicitly explaining the chain: `/istm-scope` → `/istm-craft` → `/istm-develop` → `/istm-check`.

## UI & Motion Tokens
- **3-Column Architecture:**
  - **Left Sidebar:** Global navigation mapping the `content/docs` hierarchy. Glassmorphic `bg-black/80`.
  - **Center Pane:** The MDX content area. Strictly constrained to `max-w-3xl` for optimal reading metrics.
  - **Right Sidebar (On This Page):** A sticky Table of Contents that parses the `<h2>` and `<h3>` tags of the current MDX file and tracks active scroll position (Scroll Spy).
- **MDX Component Mapping:** We will map standard markdown to premium UI tokens:
  - `<h1>` / `<h2>`: Massive `font-black` typography, not generic docs headers.
  - `<code>` / `<pre>`: Dark glowing terminal blocks (`border-white/10` with subtle shadows).
  - `<blockquote>`: Left-bordered accent callouts using the primary brand color.

## Build Plan
1. **Dependencies:** Install `next-mdx-remote` and `gray-matter`.
2. **Infrastructure:** Create `lib/mdx.ts` to read the file system, parse frontmatter, and generate slugs.
3. **Content Seeding:** Create the foundational MDX files in `content/docs/` explaining the skill composability.
4. **Routing:** Delete the static `app/docs/page.tsx` and replace it with a dynamic catch-all route `app/docs/[[...slug]]/page.tsx`.
5. **UI Construction:** Build the 3-column layout, mapping the parsed MDX to the custom Awwwards-tier React components.
