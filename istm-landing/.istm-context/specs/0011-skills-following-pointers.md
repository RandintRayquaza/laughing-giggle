# 0011 · Skills Showcase: Massive Typography & Following Tooltips

**Status**: Proposed
**Date**: 2026-08-01
**Authorized by**: User, via /istm-craft

## Summary
The Bento Grid layout is too standard for demonstrating what `@istmx/skills` actually achieves. We are ripping out the Bento Grids and replacing the entire Skills directory with an immersive, highly interactive **Massive Typography + Following Pointer** showcase. The commands themselves become the UI.

## Requirements
1. **Remove Bento/Pinned Containers**: Rip out `PinnedSkillsContainer.tsx` and the `WobbleCard` implementations on the skills page.
2. **Massive Typography List**:
   - The skills page will feature a massive, vertically scrolling list of the raw commands (e.g., `/istm-awwward-designer`).
   - Typography should be gigantic (`text-6xl md:text-8xl`), using `font-black` and `tracking-tighter`.
   - By default, the text is muted (`text-white/20`). On hover, it brightens to pure white with a glow effect, and a subtle transform (e.g., sliding right by 20px).
3. **Following Tooltips (Product Showcase)**:
   - Wrap each massive text row in the `<FollowerPointerCard>` component from `components/ui/following-pointer.tsx`.
   - When the user hovers over a command, a sleek, styled tooltip box follows their cursor.
   - The tooltip will contain a **Code Snippet / Terminal output** simulating exactly what the agent does (e.g., hovering `/istm-craft` shows it generating a `.istm-context/specs/` markdown file).

## Data Model Update
The `SKILL_CATEGORIES` will be flattened into a single list of `SHOWCASE_SKILLS`. Each skill needs:
- `name`: e.g., `/istm-awwward-designer`
- `category`: e.g., "Frontend Execution"
- `snippet`: A small block of simulated code or terminal output to render inside the following pointer.

## UI & Motion Guidelines
- **Motion Engine**: Framer Motion handles the `FollowingPointerCard` and the hover transforms on the text.
- **Canvas**: Pure dark mode (`bg-[#0a0a0a]`).
- **Tooltips**: The following pointers should look like floating glassmorphic terminal windows (dark translucent background, glowing borders).

## Build Plan
1. Flatten the data model in `app/skills/page.tsx` into a single array with `snippet` data.
2. Remove `PinnedSkillsContainer` and the Bento logic.
3. Import `FollowerPointerCard` from `@/components/ui/following-pointer`.
4. Render a massive `<ul>` list. Each `<li>` is a `FollowerPointerCard`.
5. The title of the FollowerPointerCard is the `category`, and the content inside the floating card is the `snippet`.
