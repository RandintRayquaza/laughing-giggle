# ISTM Landing Page - Progress Tracker

## Completed Work
- [x] Initialized Next.js App Router project (`istm-landing`)
- [x] Installed Shadcn UI, Tailwind CSS v4, Framer Motion, and GSAP
- [x] Injected complete Expo design token palette into `globals.css`
- [x] Set up typography system (Satoshi for Sans, Jetbrains for Mono)
- [x] Created `GEMINI.md` context file for strict architectural rules
- [x] Built the initial Hero Section (`features/landing/ui/Hero.tsx`)
  - Full-bleed Pixel Art background image
  - Custom bold typography without the "eyebrow badge"
  - Blue CTA (`text-link` background) for high contrast against the landscape
- [x] Built the Top Navigation (`features/landing/ui/Navbar.tsx`)
  - Converted from full-width to a floating, centered pill design
  - Upgraded interaction quality with animated hover pills and external icons (bouncy easing removed per user preference)
  - Implemented dynamic Framer Motion scroll states (navbar shrinks and frost intensifies on scroll)
  - Injected physical noise texture overlay for ultra-premium glassmorphism feel
  - Added mini right-anchored "Get Started" glowing CTA
  - Added mobile responsiveness
- [x] Refined Global Styles & Hero Micro-Interactions
  - Changed `::selection` color to istmX deep blue (`#0d74ce`)
  - Upgraded CTA with glowing blue box shadows and `active:scale` press feedback
  - Rebuilt the CLI plate into a fully interactive copy button with a temporary glowing green checkmark state
- [x] Light Mode Architecture Transition
  - Refactored `Showcase.tsx` from dark to strict Light Mode tokens (`canvas-soft`, `ink`, `surface-card`)
- [x] Implemented GSAP Animations
  - Added initial mount animations (Hero reveal, staggering, background scaling)
- [x] Installed custom manual `favicon.ico` into `app/` folder
- [x] Refactored `page.tsx` to remain extremely thin and only import UI components

## Current Status
The initial hero visual foundation is laid and animated. The user is currently planning out the content structure and specific sections.

## Pending Work
- [ ] Remove all existing code comments from `Hero.tsx`, `Navbar.tsx`, and `page.tsx` to comply with the new "No Comments" rule
- [x] Build the documentation/commands section (Created `Showcase.tsx`)
- [x] Showcase the specific skills (`/istm-context`, `/istm-gsap`)
- [ ] Build the mobile menu drawer/overlay

## Blockers
- None at the moment. Waiting on user's content plan.
