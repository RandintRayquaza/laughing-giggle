# 0013 · Skills Mobile UX: Tap-to-Expand Accordion

**Status**: Proposed
**Date**: 2026-08-01
**Authorized by**: User, via /istm-craft

## Summary
The "Following Pointer" hover interaction on the `/skills` page is an Awwwards-tier desktop experience, but translates poorly to mobile touch devices. We will implement a responsive fork in the UX: Desktop retains the Following Pointer, while Mobile switches to a sleek Tap-to-Expand Accordion.

## Requirements
1. **Responsive Forking**:
   - The Following Pointer tooltip should only appear on desktop/tablet devices (`md:block`).
   - On mobile screens (`< 768px`), the following pointer is suppressed.
2. **Mobile Tap-to-Expand**:
   - Convert the row mapping in `app/skills/page.tsx` into a stateful client component (e.g., `<SkillRow>`).
   - On mobile, tapping the row expands it via Framer Motion (`<motion.div animate={{ height: "auto" }}>`).
   - The expanded area reveals the `snippet` (styled like a mini terminal) and the `description` inline beneath the command name.
3. **Motion**:
   - Expanding the accordion must use a premium spring physics transition (`type: "spring", stiffness: 300, damping: 30`).

## Build Plan
1. Convert `app/skills/page.tsx` to a `"use client"` directive, or extract a `<MobileSkillRow>` component.
2. Add a local state `expandedIdx` to track which accordion is open on mobile.
3. Wrap the Following Pointer tooltip content in `hidden md:block` to disable the floating UI on small screens.
4. Render a conditionally visible `motion.div` inside each row that only displays on mobile (`md:hidden`) when its index matches `expandedIdx`.
5. Ensure the massive typography scales gracefully on mobile so it doesn't cause horizontal overflow (`text-4xl` or `text-5xl`).
