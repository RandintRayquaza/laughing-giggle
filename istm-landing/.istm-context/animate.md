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
   - **Shattered Scatter Assembly:** Text elements must be split into individual `.word-anim` spans. Instead of a uniform stagger, we enforce a premium "Shattered" effect. 
   - **Physics:** Iterate over each word and assign highly randomized vectors using `gsap.utils.random()` (`x: -800 to 800`, `y: -800 to 800`, `rotate: -180 to 180`, `scale: 0.5 to 3`, `opacity: 0`).
   - **Scroll-Linked Scrub:** Bind every word to the master `ScrollTrigger` timeline (starting at time `0`). As the user scrolls vertically (which pans the track horizontally), the words must dynamically fly from their scattered vectors and snap perfectly into `x: 0, y: 0, rotate: 0, scale: 1, opacity: 1` to assemble the sentence.
5. **Hero Copy Refactor:** 
   Update the Hero paragraph to match the new God-Mode positioning. 
   - *Target Copy:* "The Apex Orchestrator for Agentic Development. Route prompts to specialized skills, enforce Awwwards-tier UI tokens, and inject God-mode architectures directly into your IDE."
6. **Sponsor Page Scroll Choreography (`app/sponsor/page.tsx`):**
   - **Hero Parallax:** As the user scrolls down, the "0 SPONSORS" hero must fade out and push backward. Use Framer Motion's `useScroll` and `useTransform` to map `scrollYProgress` to `opacity: [1, 0]`, `scale: [1, 0.9]`, and `y: [0, 150px]`.
   - **Story Scrub (Section 2):** The massive text blocks ("The AI Dev landscape is fragmented...") must reveal dynamically based on scroll. Do not use generic `whileInView` fade-ins. Map the container's `scrollYProgress` (with `offset: ["start center", "center center"]`) to the opacity of the text, creating a smooth scrubbing reveal as they scroll.
   - **CTA Heavy Drop (Section 3):** The final God Sponsor glowing card must scale up smoothly from `0.8` to `1` and opacity `0` to `1` precisely as its container enters the viewport, linked directly to scroll position to give it massive physical weight.

## Cleanup Mandate
Every component that mounts a GSAP timeline or physics listener MUST explicitly kill the timeline/listener on unmount to prevent memory leaks in Next.js.
