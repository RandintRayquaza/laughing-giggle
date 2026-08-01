# 0006 · Ecosystem Bento Grid & 3D Tilt Upgrade

**Status**: Proposed
**Date**: 2026-08-01
**Authorized by**: User, via /istm-craft

## Summary
The current `Ecosystem` section utilizes a generic, linear 4-column layout that fails to meet the premium Awwwards-tier standards of the project. We are upgrading this section into an asymmetrical Bento Grid that integrates real-time 3D physics (`<WobbleCard>`) to make the interface feel deeply interactive and tactile.

## Requirements
1. **Asymmetrical Bento Grid**:
   - The layout must break out of the standard 1x4 grid.
   - Example architecture: A 2-row layout where the first row contains one wide card (spanning 2 columns) and one square card (1 column). The second row inverses this or places two squares and one wide card.
   - The grid should be responsive, collapsing gracefully to a single column on mobile.

2. **WobbleCard 3D Physics**:
   - The existing `<GlowingEffect>` must be preserved for the neon-edge hover state.
   - Wrap the contents of every card inside a `<WobbleCard>` (or implement a Framer Motion 3D tilt effect if the component doesn't exist).
   - When the user's cursor moves over a card, it must physically rotate on its X and Y axes, creating a 3D parallax effect against the glowing background.

3. **Typography & Styling**:
   - The "Engineered for Determinism" header must be tightened and perhaps given a subtle entrance animation (staggered fade-up on scroll).
   - Card backgrounds must remain `bg-surface-dark` or `#141414` to contrast against the neon glow lines.

## Code Area
- `/features/landing/ui/Ecosystem.tsx`
- `/components/ui/wobble-card.tsx` (to be created or utilized)

## Build Plan
1. Scaffold the `<WobbleCard>` component if it is not already in the UI library.
2. Refactor the CSS Grid classes in `Ecosystem.tsx` to an asymmetrical `grid-cols-1 md:grid-cols-3` layout with specific `col-span` utilities.
3. Wrap each feature block in the WobbleCard logic while keeping the `GlowingEffect` underneath.
