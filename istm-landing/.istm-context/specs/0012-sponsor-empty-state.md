# 0012 · Sponsor Page: The "Waiting for Hero" Empty State

**Status**: Proposed
**Date**: 2026-08-01
**Authorized by**: User, via /istm-craft

## Summary
The project currently has zero sponsors. Instead of hiding this fact, the `/sponsor` page will lean into it heavily, treating it as an exclusive opportunity. The page will be a massive, premium "Empty State" designed to recruit the very first sponsor, promising them prime real estate on the home screen.

## Requirements
1. **Routing**: Must live at `/sponsor` (i.e., `app/sponsor/page.tsx`).
2. **The Empty State Hero**:
   - A massive typographic hero section declaring "0 SPONSORS" or "AWAITING SPONSOR".
   - Dark, moody aesthetics. The emptiness of the page should feel intentional and high-end, not like a broken page.
3. **The 'Become the First' CTA Card**:
   - A massive, centralized card representing the available sponsor slot.
   - Must use the `<GlowingEffect>` or `<PointerHighlight>` component to make the empty slot feel highly interactive and premium.
   - Text inside the card must state: "Become the first sponsor. Get featured directly on the home screen."
   - The primary action must be a `mailto:` link directing to `roaringmoon07@gmail.com`.
   
## UI & Motion Guidelines
- **Canvas**: Absolute dark mode (`bg-[#0a0a0a]`).
- **Typography**: `font-sans` (Inter), `font-black`, and muted grays (`text-white/20`) for the empty state, sharply contrasting with pure white or glowing accents for the CTA.
- **Motion**: The empty slot card should gently pulse or react to the cursor, making the user physically feel the "empty" space waiting to be filled.

## Build Plan
1. Create `app/sponsor/page.tsx`.
2. Construct the layout using the global `Navbar` and `Footer`.
3. Implement a massive typographic title: "0 SPONSORS".
4. Build a centralized `<PointerHighlight>` or `<GlowingEffect>` card acting as the placeholder for the future sponsor.
5. Wire the card's button/link to `mailto:roaringmoon07@gmail.com`.
