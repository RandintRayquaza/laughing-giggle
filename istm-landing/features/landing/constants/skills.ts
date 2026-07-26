export const showcaseSkills = [
  {
    command: "/istm-architecture",
    title: "Project Architecture Blueprint",
    category: "Core",
    description: "The flagship command. It reads your prompt, identifies missing requirements via an interactive flow, and generates a complete, deterministic project blueprint encompassing everything from UI to system design.",
    snippet: `# Architecture Injected\n- Strict Feature-based routing\n- Deterministic file structures\n- Immutable layout constraints`
  },
  {
    command: "/istm-design",
    title: "UI & Design System",
    category: "Design",
    description: "Generates strict design tokens, typography hierarchies, and semantic color rules. Bans AI from outputting hardcoded Tailwind colors.",
    snippet: `/* Allowed Tokens Injected */\n@theme {\n  --color-canvas-soft: #fafafa;\n  --color-surface-card: #ffffff;\n  --color-text-link: #0d74ce;\n}`
  },
  {
    command: "/istm-animate",
    title: "Dual Motion Engine",
    category: "Motion",
    description: "Injects strict animation vocabularies, ensuring high-end Framer Motion micro-interactions and cinematic GSAP scroll choreographies.",
    snippet: `// Physics Engine Injected\nconst defaultSpring = { type: "spring", stiffness: 300, damping: 30 };\ngsap.registerPlugin(ScrollTrigger, useGSAP);`
  },
  {
    command: "/istm-awwward-designer",
    title: "Awwwards UI Workflow",
    category: "Design",
    description: "Forces the AI to adopt a premium, developer-first Awwwards designer persona for creating elite, interactive web experiences.",
    snippet: `// Design Philosophy Injected\n- Prioritize spatial consistency\n- Implement 60fps interruptible animations\n- Avoid generic SaaS templates`
  },
  {
    command: "/istm-schema-design",
    title: "Database Architect",
    category: "Backend",
    description: "Generates clutter-free database schemas (SQL, NoSQL, MongoDB, ORMs). Enforces strict type-safety and relations without hallucinating invalid structures.",
    snippet: `// Injected Schema Rules\n- Use Prisma ORM for relational integrity\n- MongoDB: Enforce strict Mongoose schemas\n- Rule: No clutter, optimized indexing only`
  },
  {
    command: "/istm-system-design",
    title: "System Design Enforcer",
    category: "Architecture",
    description: "Maps out the exact Next.js App Router tree, API endpoints, and data flow architectures. Prevents broken imports permanently.",
    snippet: `// System Rules Injected\n- Route: src/app/(dashboard)/layout.tsx\n- Enforce strict server/client boundary\n- Prevent leaky API logic in UI components`
  }
];
