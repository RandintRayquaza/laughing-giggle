# 0004 · Fix SplitText Timeline Invalidation

**Status**: Proposed
**Date**: 2026-08-01
**Authorized by**: User, via /audit

## Root Cause Analysis
The GSAP timeline is using a `.from()` tween to stagger the `.word-anim` reveals (`tl.from(".word-anim", { y: "110%", opacity: 0 ... })`). 
However, the master `ScrollTrigger` uses `invalidateOnRefresh: true` to recalculate horizontal scroll boundaries on resize. GSAP explicitly warns against combining `.from()` tweens with `invalidateOnRefresh: true`, because upon refresh, GSAP recalculates the starting state based on the element's *current* position. If the user has already scrolled and the elements are visible, the "from" state gets permanently overwritten with `opacity: 1` and `y: 0`, completely breaking the animation.

## Solution Requirements
1. **Refactor to `.fromTo()`**: We must replace the `.from()` tween with a `.fromTo()` tween. This hardcodes both the start state (`y: "110%", opacity: 0, rotate: 10`) and the end state (`y: "0%", opacity: 1, rotate: 0`), rendering it immune to `invalidateOnRefresh` recalculation bugs.
2. Ensure the scrub duration and stagger amount remain exactly as defined in the previous blueprint (`duration: 0.2`, `stagger: { amount: 0.8 }`).

## Code Area
- `/features/landing/ui/Manifesto.tsx`
