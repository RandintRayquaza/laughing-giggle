import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Code AI Skills & Agentic Cursor Rules | ISTM",
  description: "Explore the complete library of Agentic AI skills for Claude Code, Cursor, and Windsurf. Generate deterministic UI/UX and backend architectures.",
  keywords: ["istm skills", "ai orchestrator", "cursor rules", "agentic skills", "ai workflow", "god mode command"],
  openGraph: {
    title: "Claude Code AI Skills & Agentic Cursor Rules | ISTM",
    description: "Explore the complete library of Agentic AI skills for Claude Code, Cursor, and Windsurf. Generate deterministic UI/UX and backend architectures.",
    url: "https://istmx.dpdns.org/skills",
  }
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
