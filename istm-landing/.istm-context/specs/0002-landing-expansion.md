# 0002 · Landing Page Expansion

**Status**: Proposed
**Date**: 2026-08-01
**Authorized by**: User, via /istm-craft

## Summary
Refine the existing `HowItWorks` section to reflect updated nomenclature and inject two brand new sections into the landing page flow to increase authority and conversion.

## Requirements (Acceptance Criteria)
1. **Nomenclature Update (`HowItWorks.tsx`)**:
   - The headline "Context-as-a-Service." must be changed. Let's use: **"The Orchestration Pipeline."** or **"Deterministic Execution."**
   - Step 4 ("Harness Injection") copy must change from "Writing .cursorrules" to "Creating AGENTS.md".
2. **New Section 1: The Manifesto (Philosophy)**
   - A minimalist, text-heavy section focused purely on typography.
   - Core message: Why AI needs strict architectural bounds.
   - Design: Pure white background (`bg-canvas`), massive `Inter` typography, fading text on scroll (using GSAP or Framer Motion).
3. **New Section 2: Developer Ecosystem (Social Proof)**
   - A scrolling marquee or grid of GitHub stats, developer avatars, or "Built with ISTM" project cards.
   - Design: Dark mode (`bg-surface-dark`) to contrast with the Manifesto. Must use `<GlowingEffect>` or Aceternity UI `CardStack`.

## UI & Motion
- All new sections MUST use the semantic colors defined in `DESIGN.md` (`bg-canvas`, `bg-surface-dark`, `text-ink`).
- Motion must inherit the `animate.md` guidelines (`power4.out` for GSAP, Spring `stiffness: 300` for Framer).
- No new colors or non-Inter fonts may be introduced.

## Build Plan
1. Update `HowItWorks.tsx` text strings as defined in the requirements.
2. Create `features/landing/ui/Manifesto.tsx` as a purely typographic section.
3. Create `features/landing/ui/Ecosystem.tsx` using a marquee or card stack.
4. Mount both new components inside `app/page.tsx`, directly below `SystemDesign` and before `CtaSection`.
