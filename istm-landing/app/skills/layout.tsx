import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | ISTM Skills Framework",
  description: "Explore the God Mode orchestrators and AI workflows for @istmx/skills. View the complete list of premium AI agent commands.",
  keywords: ["istm skills", "ai orchestrator", "cursor rules", "agentic skills", "ai workflow", "god mode command"],
  openGraph: {
    title: "Skills | ISTM Skills Framework",
    description: "Explore the complete list of premium AI agent commands.",
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
