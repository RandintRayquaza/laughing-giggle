# ISTM Motion Architecture (`animate.md`)

## Core Philosophy
We enforce hardware-accelerated, high-performance physics across the entire application. All UI must feel alive, deeply interactive, and premium, avoiding generic web animations.

## Libraries
- **Scroll & Complex Timelines:** GSAP (`gsap`, `@gsap/react`, `ScrollTrigger`)
- **Micro-Interactions & Physics:** Framer Motion (`framer-motion`)

## Easing Tokens
Never use standard `ease-in` or `ease-out`. All components MUST inherit these specific custom curves:
- **Default Reveal (GSAP):** `power4.out`
- **Default Reveal (Framer):** `[0.16, 1, 0.3, 1]`
- **Spring Physics (Hover/Magnetic):** `type: "spring", stiffness: 300, damping: 20`
- **Choreographed Stagger:** `0.15s` delay between siblings.

## Hardware Acceleration Rules
1. **Allowed Properties:** You may ONLY animate `transform` (translate, scale, rotate) and `opacity`.
2. **Forbidden Properties:** NEVER animate layout-triggering properties (`width`, `height`, `top`, `left`, `margin`, `padding`). Doing so causes frame drops and layout thrashing.

## Micro-Interactions Specification (To Build)
1. **Global Buttons:** Upgrade all CTAs to use the `<MagneticButton>` or `<MagneticWrapper>`. They must pull toward the user's cursor on hover using Framer Motion springs.
2. **Context Tooltips (`tooltip-card.tsx`):** Inject these into the `HowItWorks` steps. Instead of static text, users should be able to hover over key terms (like "Discovery Gate") to see deep architectural definitions via smooth spring-based tooltips.
3. **Card Physics:** The `FeaturesGrid` and `SystemDesign` cards must utilize `<GlowingEffect>` (already implemented) combined with `<WobbleCard>` or scale physics (`hover:scale-[1.02]`) so they physically react to the mouse.
4. **Manifesto Horizontal Scroll & Split Text:** 
   - The Manifesto section MUST employ a strict GSAP ScrollTrigger pin.
   - Set `pin: true` and `scrub: 1` on the section container. Extend scroll duration by increasing `end`.
   - The typography must translate horizontally (`xPercent: -100` or equivalent).
   - **SplitText Scrub:** Text elements must be split into individual spans. Instead of a one-time play animation on enter, this stagger reveal MUST be baked directly into the master `ScrollTrigger` timeline with `scrub: 1`.
   - **Scroll-Linked Assembly:** As the user scrolls vertically (which pans horizontally), the words/letters must dynamically fly into place (e.g. from `y: 110%`, `opacity: 0`, `rotate: 10`) to form the sentence, keeping the motion strictly tied to the user's scroll wheel.
5. **Hero Copy Refactor:** 
   Update the Hero paragraph to match the new God-Mode positioning. 
   - *Target Copy:* "The Apex Orchestrator for Agentic Development. Route prompts to specialized skills, enforce Awwwards-tier UI tokens, and inject God-mode architectures directly into your IDE."

## Cleanup Mandate
Every component that mounts a GSAP timeline or physics listener MUST explicitly kill the timeline/listener on unmount to prevent memory leaks in Next.js.
