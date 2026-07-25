export const showcaseSkills = [
  {
    command: "/istm-context",
    title: "Zenix Master Node",
    category: "Architecture",
    description: "Forces AI tools to generate the 4 architectural Zenix blueprints before writing any logic.",
    snippet: `# Mandatory Context Injected
- architecture.md: Feature-based enforcement
- memory.md: Long-term error tracking
- progress.md: Task completion states`
  },
  {
    command: "/istm-gsap",
    title: "Dual Motion Engine",
    category: "UI/UX",
    description: "Injects strict animation vocabularies, ensuring high-end Framer Motion and GSAP choreographies.",
    snippet: `// Physics Engine Injected
const defaultSpring = { 
  type: "spring", 
  stiffness: 300, 
  damping: 30 
};
gsap.registerPlugin(ScrollTrigger, useGSAP);`
  },
  {
    command: "/istm-schema",
    title: "Database Architect",
    category: "Backend",
    description: "Enforces strict database relations, type-safety, and indexing rules so your AI never hallucinates an invalid table.",
    snippet: `-- Injected SQL Rules
CREATE INDEX idx_user_email ON users(email);
-- Rule: Never use soft deletes without a timestamp
-- Rule: All foreign keys must have ON DELETE CASCADE`
  },
  {
    command: "/istm-auth",
    title: "Security Middleware",
    category: "Backend",
    description: "Injects JWT, OAuth2, and session management protocols. Prevents AI from generating insecure auth flows.",
    snippet: `// Auth Context Injected
export const middleware = (req: Request) => {
  // Enforced Rule: All routes default to protected
  // Enforced Rule: CSRF tokens required on mutations
}`
  },
  {
    command: "/istm-tailwind",
    title: "Design System Tokens",
    category: "UI/UX",
    description: "Locks the AI into your specific design tokens. Bans the use of generic Tailwind colors like 'bg-blue-500'.",
    snippet: `/* Allowed Tokens Injected */
@theme {
  --color-canvas-soft: #fafafa;
  --color-surface-card: #ffffff;
  --color-text-link: #0d74ce;
}`
  }
];
