# Spec 0001: Landing Page Architecture

## Summary
A highly-converting, Awwwards-winning landing page for the `@istmx/skills` open-source framework. Designed to act as a "quietly-confident infrastructure brand" that tells a story—taking users from a powerful hook to deep architectural proof, and ending with a frictionless CLI command installation.

## Requirements
- Maintain a strict 6-section storytelling flow: Hook (Hero) -> Trust (Supported AI) -> Proof (Features/Bento Grid) -> Pipeline (Sticky How-It-Works) -> Architecture Engine (System Design) -> Action (CTA).
- Do not use a generic "websites gallery"; use `SystemDesign.tsx` to visually prove the generated output structure.
- Embody "Functionality Over Polish" - animations must enhance understanding (like step-by-step pipeline highlights) rather than distract.

## Data Model
- Static JSON structures for the Features Bento Grid (Title, Description, Component Mapping).
- Static data mapping for the Supported AI harnesses (Cursor, Windsurf, Claude Code, Gemini) to their respective svg logo assets.

## UI & Motion (Bound to DESIGN.md)
- **Canvas & Background**: Pure white `{colors.canvas}` (#ffffff) everywhere except the Hero, which uses the sky-blue gradient wash.
- **Typography**: Inter at `600` weight for display (`{typography.display-mega}` for Hero), `400` for body. All code surfaces use JetBrains Mono (`{typography.code}`).
- **CTAs**: Strict use of pure black (`{colors.primary}`) with `{rounded.md}` (8px radius). No blue buttons (`{colors.text-link}` is strictly for inline text).
- **Interactive Components**: 
  - `glowing-effect` and `card-stack` for the Features Bento grid.
  - `magnetic-button` for CTA interaction.
- **GSAP Orchestration**: 
  - Progressive disclosure via scroll-triggered animations (Lenis smooth scrolling).
  - Terminal typing simulation in the Hero.
  - Sticky-scroll for the "How It Works" pipeline, updating a right-hand IDE mockup (`ide-mockup-card`) as the left-hand text scrolls.

## Build Plan
1. **Initialize Layout**: Setup Next.js page structure, import `Navbar.tsx` and place it at the top.
2. **Hero & AI Support**: Mount `Hero.tsx` with the GSAP typing animation. Immediately follow with `SupportedAI.tsx` using a seamless scrolling marquee.
3. **Features Bento Grid**: Build a new component `FeaturesGrid.tsx` utilizing `glowing-effect` and `card-stack` from the components directory, styled with `{colors.surface-dark}` for contrast against the white canvas.
4. **Pipeline Sticky Scroll**: Build `HowItWorks.tsx`. Use GSAP `ScrollTrigger` with `pin: true` to lock the right-side `ide-mockup-card` while the left-side steps scroll.
5. **System Design Engine**: Mount the existing `SystemDesign.tsx` to visualize the 4 pillars.
6. **CTA**: Mount `CtaSection.tsx` at the bottom with the `magnetic-button` wrapper for the final conversion push.
