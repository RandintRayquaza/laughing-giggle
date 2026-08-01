# 0001 - Master Landing Page Architecture

## Summary
The master landing page for the `@istmx/skills` framework. The goal is to convey the paradigm shift from "AI typing speed" to "Context-As-A-Service" through a deterministic 6-section narrative arc.

## Requirements
The page will implement the following sequential sections:
1. **The Hook (Hero)**: Cinematic title ("The future is System Design...").
2. **The Villain (The Problem)**: The chaos of "AI Slop" and hallucinations.
3. **The Paradigm Shift (The Solution)**: Context-as-a-Service blueprints locking into place.
4. **The Proof (Features Grid Hybrid)**: A hybrid grid leveraging custom Aceternity UI components from `components/ui/` to demonstrate deterministic architecture.
5. **The Arsenal (Installed Skills)**: The `InstalledSkills.tsx` component showcasing real CLI commands.
6. **The Call to Action (CTA)**: The terminal install block (`npx @istmx/skills init`).

## Data Model
- No database requirements for the static landing page.
- Static data for skills and features is mapped locally within the components.

## UI & Motion (Dual Motion Engine)
- **Aesthetic**: Strictly adheres to the Expo `DESIGN.md` guidelines. Pure white canvas (`bg-canvas`), near-black ink (`text-ink`), and soft hairline borders.
- **Motion (Framer + GSAP)**: 
  - Framer Motion will be used for micro-interactions (hover glows, feature cards).
  - GSAP ScrollTrigger will be used for scroll-linked reveals and pinning.
  - **Restriction**: NO WebGL or heavy 3D physics. The motion must feel highly cinematic but grounded in minimalist typography and clean 2D spatial layouts.
- **Components**: The design will leverage the extensive library of Aceternity components already present in `@/components/ui/` (e.g., `card-stack.tsx`, `glowing-effect.tsx`, `wobble-card.tsx`, `bento-grid.tsx`), merged to create hybrid feature presentations.

## Build Plan
1. Scaffold `app/page.tsx` with the 6 core layout divs.
2. Build `ProblemSection.tsx` (The Villain) using a clean text-reveal and glitch-free, high-contrast typography.
3. Build `ParadigmShift.tsx` (The Solution) using GSAP pinned scrolling or Card Stack.
4. Build `FeaturesHybrid.tsx` (The Proof) using Aceternity UI grid elements to showcase "Before & After" or strict deterministic capabilities.
5. Integrate the already built `InstalledSkills.tsx` (The Arsenal).
6. Verify responsive text wrapping across all sections to prevent "shrink-to-fit" anomalies per `AGENTS.md`.
