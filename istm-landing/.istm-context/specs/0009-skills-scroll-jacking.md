# 0009 · Skills Page Scroll-Jacking

**Status**: Proposed
**Date**: 2026-08-01
**Authorized by**: User, via /istm-craft

## Summary
The vertical stacking of the `/skills` page categories is too standard. To elevate this to Awwwards-tier, we are implementing a **Scroll-Jacking & Pinned Section** architecture. As the user scrolls past the Hero, a main container will pin to the viewport. The user's scroll wheel will then drive the transition between the categories (Orchestration → Frontend → Backend → Utility), bringing each 3D Carousel in and out of focus sequentially, akin to high-end Apple product landing pages.

## Requirements
1. **The Pinned Container**:
   - Create a massive wrapper div below the Hero that takes up `100vh`.
   - Use GSAP `ScrollTrigger` to `pin: true` this container when it hits the center or top of the screen.
2. **Scroll-Driven Transitions**:
   - The scroll distance (scrub) controls a GSAP timeline.
   - The timeline fades/slides in "Orchestration" and its `Carousel3D`.
   - As scrolling continues, "Orchestration" is pushed up/faded out, and "Frontend Execution" takes its place.
   - This repeats for all 4 categories.
3. **Preservation of Assets**:
   - The `Carousel3D` component remains untouched; it is simply rendered inside the pinned panels.
   - The "SKILLS" SVG Hero remains untouched.

## UI & Motion Guidelines
- **Motion Engine**: GSAP `ScrollTrigger` is mandatory for scroll-jacking, as it handles pinning far better than pure CSS or Framer Motion's `useScroll`.
- **Transitions**: Use an ease of `power2.inOut` or `none` for scrubbed timelines so the motion directly tracks the user's physical mouse wheel.
- **Opacity & Blur**: To make it cinematic, categories leaving the screen should blur and fade to opacity 0 as the new category rises from the bottom.

## Build Plan
1. Refactor `app/skills/page.tsx` into a client component (if not already) or extract the category mapping into a `<PinnedSkillsContainer>` client component.
2. Setup a `useGSAP` hook with `ScrollTrigger`.
3. Create a wrapper `div` with `h-screen`.
4. Inside the wrapper, render all 4 categories absolutely positioned on top of each other.
5. Create a `gsap.timeline({ scrollTrigger: { trigger: wrapper, pin: true, scrub: 1, end: "+=4000" } })`.
6. Chain the animations in the timeline to sequence the categories in and out based on the scroll position.
