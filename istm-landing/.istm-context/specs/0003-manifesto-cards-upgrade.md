# 0003 · Manifesto Split Text & Ecosystem Cards Upgrade

**Status**: Proposed
**Date**: 2026-08-01
**Authorized by**: User, via /istm-craft

## Summary
Refine the `Manifesto` horizontal scroll section by increasing its scroll distance/height and animating the text word-by-word. Additionally, replace the fake data in the `Ecosystem` cards with real, value-driven principles.

## Requirements
1. **Manifesto Refinements (`Manifesto.tsx`)**:
   - Increase the total scroll distance of the pinned section so the horizontal scroll feels slower and more deliberate (e.g., multiply the scroll end trigger by `1.5` or `2`).
   - Animate the text into view word-by-word as it scrolls. Since the official GSAP SplitText is a premium plugin, we will achieve this using a React-based text splitting utility (mapping over words to wrap them in `<span className="inline-block overflow-hidden">`) and staggering their translation/opacity.
2. **Ecosystem Cards Overhaul (`Ecosystem.tsx`)**:
   - Remove the fake social proof data.
   - Replace the 4 cards with core orchestrator principles:
     1. **Zero Config**: "Installs directly into any environment."
     2. **Awwwards UI**: "Strict enforcement of premium motion tokens."
     3. **Editor Agnostic**: "Compatible with Cursor, Windsurf, and Claude."
     4. **Deterministic**: "Eliminates generic AI hallucination."

## UI & Motion (Enforced by /istm-animate)
- **Word-by-word Split Text Animation:** 
  - GSAP Config: `opacity: 0`, `y: 40` (hardware-accelerated translation).
  - Reveal Easing: `ease: "power4.out"`.
  - Stagger Physics: `stagger: { each: 0.05, from: "start" }`.
  - Trigger: Must be tied to the `ScrollTrigger` scrub (or fired on enter).
- **Manifesto Scroll Extension:** Multiply the `ScrollTrigger` `end` value by at least `+=${track.scrollWidth * 1.5}` to slow down the pin scrub.
- **Ecosystem Cards:** Retain `<GlowingEffect>` and the `hover:scale-[1.03]` transition using strict custom bezier `cubic-bezier(0.16,1,0.3,1)`.

## Build Plan
1. Update `Manifesto.tsx` to include a manual word-splitting function, then apply a GSAP stagger animation to the `.word-anim` elements.
2. Modify the `end` trigger of the `ScrollTrigger` in `Manifesto.tsx` to extend the scroll length.
3. Update `Ecosystem.tsx` to replace the 4 fake-data cards with the real principles.
