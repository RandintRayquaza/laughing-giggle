# 0007 · Interactive Footer & Ecosystem Deprecation

**Status**: Proposed
**Date**: 2026-08-01
**Authorized by**: User, via /istm-craft

## Summary
The `Ecosystem` section has been deemed inadequate for the Awwwards-tier visual standards of this project. We are completely ripping it out and replacing it with a massive, highly interactive Footer. The footer will be dominated by a gigantic SVG `<TextHoverEffect>` component displaying "ISTM" and will include the founder's primary social links.

## Requirements
1. **Section Replacement**:
   - The `/features/landing/ui/Ecosystem.tsx` must be completely rewritten or deleted and replaced with a `Footer.tsx` component.
   - If `Ecosystem.tsx` is deleted, ensure it is removed from the `page.tsx` or `layout.tsx` imports.

2. **The Hero Element**:
   - The footer must feature a massive `<TextHoverEffect>` component rendering the text **"ISTM"**.
   - This replaces the `text-hover-effect-demo.tsx` test file, integrating the component directly into the footer architecture.

3. **Social Links Data Layer**:
   The footer must present clean, minimalist links to the following platforms:
   - **X (Twitter)**: `@Istm_x` (https://x.com/Istm_x)
   - **Instagram**: `@aryan._xf` (https://instagram.com/aryan._xf)
   - **GitHub**: `@istmX` (https://github.com/istmX)
   - **LinkedIn**: `aryan-xf` (https://linkedin.com/in/aryan-xf)

4. **UI & Motion**:
   - The footer should sit on a perfectly dark canvas (`bg-surface-dark` or `#0a0a0a`) to allow the `TextHoverEffect` gradient to pop.
   - The social links should be elegant, perhaps utilizing a magnetic hover effect (`<MagneticWrapper>`) or a sleek underline animation.

## Code Area
- `/features/landing/ui/Footer.tsx` (to be created or to replace Ecosystem.tsx)
- `/app/page.tsx` (to update the section import)

## Build Plan
1. Delete or rename `Ecosystem.tsx` to `Footer.tsx`.
2. Clean out the bento grid logic and import `<TextHoverEffect>`.
3. Set up a flex/grid layout where the massive "ISTM" text dominates the background or center, and the social links sit cleanly at the bottom of the viewport.
4. Verify the social links open in new tabs (`target="_blank" rel="noopener noreferrer"`).
