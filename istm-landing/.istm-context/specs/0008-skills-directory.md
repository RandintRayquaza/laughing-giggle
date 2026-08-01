# 0008 · Skills Directory Page

**Status**: Proposed
**Date**: 2026-08-01
**Authorized by**: User, via /istm-craft

## Summary
A dedicated `/skills` route to serve as the God-mode architectural orchestrator directory. The page will list the `@istmx/skills` ecosystem (e.g., `/istm-architecture`, `/istm-awwward-designer`, `/istm-system-design`), categorized logically, and presented via high-end 3D Parallax Carousels instead of standard grids.

## Requirements
1. **Routing**: Must live at `/skills` (i.e., `app/skills/page.tsx`).
2. **Hero Section**: 
   - No generic paragraphs or standard hero boxes.
   - Just a massive, screen-spanning, animated text block spelling **"SKILLS"**. 
   - Should use `TextHoverEffect` (modified for this specific text) or a custom SVG path animation to match the premium Awwwards-tier aesthetic.
3. **Data Organization**: 
   - Skills must be strictly categorized (e.g., "Orchestration", "Frontend Exec", "Backend Exec", "Utility").
4. **Layout Architecture (3D Parallax Carousel)**:
   - For each category, the skills must be displayed in a 3D Parallax Carousel.
   - Cards should rotate/scale in 3D space as the user scrolls or interacts, creating a deeply tactile experience.

## Data Model (Static Seed)
```typescript
const SKILL_CATEGORIES = [
  {
    title: "Orchestration",
    skills: [
      { name: "/istm", desc: "The God Mode master command." },
      { name: "/istm-architecture", desc: "Master orchestrator for project foundation." }
    ]
  },
  {
    title: "Frontend Execution",
    skills: [
      { name: "/istm-design", desc: "Visual tokens and UI foundations." },
      { name: "/istm-awwward-designer", desc: "Premium frontend engine. Writes React/GSAP code." },
      { name: "/istm-animate", desc: "Advanced choreography and GSAP timelines." }
    ]
  },
  {
    title: "Backend Execution",
    skills: [
      { name: "/istm-system-design", desc: "Backend orchestrator (APIs, Schemas, DBs)." }
    ]
  }
];
```

## UI & Motion Guidelines
- **Canvas**: Absolute dark mode (`bg-[#0a0a0a]`).
- **Typography**: Strictly `font-sans` (Inter), leaning heavily on `font-black` and `tracking-tighter`.
- **Motion**: 
  - The massive "SKILLS" text must animate in on load (SVG draw or gradient reveal).
  - The 3D Parallax Carousel must use Framer Motion 3D transforms (`rotateY`, `scaleZ`, etc.) to create depth.

## Build Plan
1. Create `app/skills/page.tsx`.
2. Construct the massive "SKILLS" animated hero at the top of the page.
3. Build a reusable `<Carousel3D>` component in `features/skills/ui/Carousel3D.tsx`.
4. Map the `SKILL_CATEGORIES` data into multiple `<Carousel3D>` instances on the page.
5. Apply the global `Footer` to the bottom of the page.
