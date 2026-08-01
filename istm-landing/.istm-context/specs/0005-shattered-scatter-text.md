# 0005 · Shattered Scatter Text Assembly

**Status**: Proposed
**Date**: 2026-08-01
**Authorized by**: User, via /istm -> /istm-craft

## Summary
The current linear stagger reveal in `Manifesto.tsx` is being upgraded to a true premium "Shattered / Scatter" effect. Every word will begin in a completely chaotic, random position across the screen and precisely assemble into the final sentence as the user scrubs the timeline.

## Requirements
1. **Randomized Start State (Shatter Physics)**:
   - Instead of a uniform stagger, iterate over every `.word-anim` node individually.
   - Calculate random values for each word using `gsap.utils.random()`.
   - Start `x`: Randomly scattered between `-800` and `800`.
   - Start `y`: Randomly scattered between `-800` and `800`.
   - Start `rotate`: Random angle between `-180` and `180` degrees.
   - Start `scale`: Random scale between `0.5` and `3`.
   - Start `opacity`: `0`.

2. **Scroll-Linked Assembly**:
   - The end state must be mathematically locked to `x: 0, y: 0, rotate: 0, scale: 1, opacity: 1`.
   - This animation MUST remain bound to the master `ScrollTrigger` timeline.

## Execution Plan for `/develop`
1. Inside `Manifesto.tsx`, remove the single `tl.fromTo(".word-anim", ...)` block.
2. Use `gsap.utils.toArray(".word-anim").forEach((word) => { ... })` to iterate through every word.
3. Inside the loop, append a `tl.fromTo(word, { ...randoms }, { ...targets }, 0)` to the master timeline, ensuring all words begin assembling at timeline position `0` but from their own unique chaotic vectors.
