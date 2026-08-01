# 0010 · Skills Bento Grid Upgrade

**Status**: Proposed
**Date**: 2026-08-01
**Authorized by**: User, via /istm-craft

## Summary
The 3D Carousel proved to be the wrong visual direction for the `/skills` page. We are ripping it out and replacing it with **Premium Bento Grids**. The Scroll-Jacking GSAP container (from Spec 0009) remains untouched, but the content inside each pinned panel will now be an asymmetrical, glowing Bento layout utilizing the `WobbleCard` or `BentoGrid` aesthetic established on the landing page.

## Requirements
1. **Remove Carousel3D**: Completely remove the `<Carousel3D>` component from the page architecture.
2. **Bento Grid Integration**:
   - Each category in the `PinnedSkillsContainer` will map its `skills` array into a `<BentoGrid>`.
   - Small categories (like Orchestration with 2 skills) will split the grid `md:grid-cols-2`.
   - Large categories (like Utility with 9 skills) will form a dense `md:grid-cols-3` asymmetrical grid.
3. **Card Design**:
   - The individual skill cards must use `<WobbleCard>` or a glowing border box (e.g., `<GlowingEffect>`) to ensure the dark mode looks extremely premium.
   - Typography inside the cards must remain `font-sans` (Inter), leaning on high contrast and `tracking-tighter`.

## UI & Motion Guidelines
- **Motion**: The cards do not need heavy entrance animations because they are already wrapped inside the `ScrollTrigger` timeline from `PinnedSkillsContainer` (which fades/scales them in as a group). The motion is handled entirely by the hover physics (`WobbleCard`).
- **Canvas**: Dark mode remains active (`bg-[#0a0a0a]`).

## Build Plan
1. Delete `features/skills/ui/Carousel3D.tsx`.
2. Update `features/skills/ui/PinnedSkillsContainer.tsx` to import `BentoGrid`, `BentoGridItem` (if available), or `WobbleCard` from the `components/ui` folder.
3. Replace the `<Carousel3D items={cat.skills} />` line with a mapped Bento layout.
4. For dynamic col-spans (to make it asymmetrical), assign `col-span-1 md:col-span-2` to the first item of a 3-item list, etc., or just let `WobbleCard` fill a standard CSS grid.
