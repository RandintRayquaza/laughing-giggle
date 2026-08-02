import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "God Sponsor | ISTM Skills Framework",
  description: "Become the God Sponsor of the @istmx/skills ecosystem. Reach top-tier engineers building the future of software.",
  keywords: ["sponsor ai dev", "god sponsor", "istm sponsor", "ai dev landscape", "developer marketing"],
  openGraph: {
    title: "God Sponsor | ISTM Skills Framework",
    description: "Reach top-tier engineers building the future of software.",
    url: "https://istmskills.vercel.app/sponsor",
  }
};

export default function SponsorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
