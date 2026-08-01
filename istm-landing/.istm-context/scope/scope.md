# Scope: ISTM Master Landing Page

The premium marketing and documentation site for the open-source ISTM Skills Framework. Showcases Awwwards-tier architecture and Context-as-a-Service capabilities.

**Build approach:** Journey (A complete user path end to end per phase).
**Workflow:** Medium (After `/develop`, `/check verify` then `/test`). The project default rigor tier; architect still gates any feature that needs a decision at every tier; a feature's own tier tag overrides it.

## At a glance

| # | Feature | Phase | Status |
|---|---------|-------|--------|
| A | Core Layout & Hero | Foundation | existing |
| B | Problem Section (Chaos) | Slice 1 | existing |
| C | Paradigm Shift & Bento Grid | Slice 1 | existing |
| D | Flagship Arsenal Showcase | Slice 2 | existing |
| E | Gooey CTA | Slice 2 | existing |
| 1 | Waitlist API (Supabase) | Slice 3 | planned |
| 2 | SEO & Core Web Vitals | Deferred | planned |

## Foundations

### A. Core Layout & Hero · existing
Pre-workflow setup: The strict Expo UI tokens, pure white canvas, and main cinematic hero section. code in `app/page.tsx` and `Hero.tsx`.

## Slice 1: The Villain & Solution

### B. Problem Section (Chaos) · existing
TextHoverEffect chaos typography masking. code in `ProblemSection.tsx`.

### C. Paradigm Shift & Bento Grid · existing
The Aceternity CardStack showing the architecture blueprints and the SystemDesign.tsx Bento Grid. code in `ParadigmShift.tsx` and `SystemDesign.tsx`.

## Slice 2: Proof & Conversion

### D. Flagship Arsenal Showcase · existing
Interactive hover-list of the 4 flagship skills, rendering dynamic React visuals (Framer Motion macOS terminal, CSS grid mockups). code in `FlagshipSkills.tsx`.

### E. Gooey CTA · existing
The email capture input with SVG gooey filter and the Magnetic Button CTA. code in `CtaSection.tsx`.

## Slice 3: Backend Logic

### 1. Waitlist API (Supabase) · needs a decision
Connect the `GooeyInput` in the CTA to a real backend to capture waitlist emails so we can convert traffic into users.
**Done when:** A user submits an email in the GooeyInput and it saves to a database securely without breaking the magnetic physics on the button.
- [ ] Design it (spec): `/architect waitlist api`

## Deferred
Out of scope for the current build pass, kept so the plan stays honest.
- **SEO & Core Web Vitals**: Add metadata, structured data, and optimize GSAP load times. · needs a decision

## Legend

**The decision box.** Every feature carries exactly one, the sub-task whose label ends with `(spec)`. Its wording varies (`Design it (spec)` normally, `Decide the stack (spec)` on Stack & architecture), so skills locate it by that `(spec)` suffix, never by an exact label. Every other box is an execution box and `/architect` never ticks one.

**Feature lifecycle**: the scope updates as a feature moves; each row is what it shows and who sets it:

| State | Set by | The feature shows |
|---|---|---|
| `planned` · needs a decision | `/scope` | one box: `Design it (spec): /architect <feature>` |
| `in-progress` (designed) | **`/architect` at spec capture** | `Design it` ticked; spec linked; `Build it: /develop <feature>` + **2 to 5 milestones**; the tier's closing boxes (`Verify it` Lean+, `Test it` Medium+, `Review it` + `Document it` Full); any surfaced follow-up enrolled |
| `in-progress` (building) | `/develop` | milestone sub-boxes tick one by one; code pointer filled |
| `in-progress` (verified) | `/check verify` | `Build it` + milestones ticked; `Verify it` ticked |
| `done` | the tier's last required stage (`Vibe` → `/develop`; `Lean` → `/check verify`; `Medium`/`Full` → `/test`), then `/sync` | required boxes ticked; `Review it`/`Document it` (Full) ticked by `/check review`/`/document`, tracked but not part of the `done` gate (Design/Build/Verify/Test); `/sync` captures conventions |

- **Next step** = the first unticked box (always a command or a tracked milestone).
- **needs a decision** = run `/architect` first; otherwise straight to `/develop` (or `/audit` for standards & tooling). The tag drops once the spec is captured.
- **Atomic build tasks live in the spec's `## Build plan`, not here**: the scope carries only the milestone rollup.
- **Status** `planned` → `in-progress` → `done`, plus `existing` (pre-workflow) and `dropped` (de-scoped, kept for history).
- **Approach tag** beside a heading (e.g. `· Facade`) overrides the project default for that feature; no tag = inherits it.
- **Workflow tier tag** beside a heading (e.g. `· Full`, `· Vibe`) overrides the project default `**Workflow:**` tier for that one feature; no tag = inherit. It is the single rigor dial (there is no separate "weight").
- **Workflow** (header line) is the project default tier, the stages each feature runs **after** `/develop`: **Vibe** = nothing after `/develop` (rely on its build time self check); **Lean** = `/check verify`; **Medium** = `/check verify` then `/test`; **Full** = `/check verify`, `/test`, a fresh model `/check review`, then `/document` (and most features need a spec). The tier also sets what closes a feature to `done`, the last required stage marks it: **Vibe** → `/develop` (build + self check); **Lean** → `/check verify` on PASS; **Medium**/**Full** → `/test` (with verify passed). At every tier an `Assumed` spec still blocks `done` until `/architect` ratifies it, and `/architect` still gates any feature that needs a decision (tier does not turn the gate off). A feature's own tier tag overrides this default. `/develop` reads the effective tier to scale the next steps it recommends.
- **Pointer line** (`spec <n> · code in <path>`): the spec link added by `/architect`, the code path by `/develop`.
