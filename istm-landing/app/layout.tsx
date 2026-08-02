import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://istmskills.vercel.app"),
  title: "ISTM Skills Framework | Agentic Context Engine",
  description: "The ultimate Context-as-a-Service (CaaS) engine for AI IDEs. Build Awwwards-winning UI and Next.js architectures with zero hallucinations using istm skills.",
  keywords: [
    "istm", "istmx", "skills", "istm skills", "istm-skills", "skill", "agentic skills", "ai skills", 
    "caas", "context-as-a-service", "zenix", "ai agents", "cursor", "windsurf", "claude code", 
    "gemini", "cline", "roo-code", "orchestrator", "prompt engineering", "awwwards", "gsap", 
    "react", "nextjs", "frontend architecture", "backend design", "developer tools", "dx",
    "ui", "ux", "ui-ux", "ui/ux", "pro skill ui", "best ui", "premium ui", "design system",
    "micro-interactions", "webgl", "threejs", "aceternity", "magic ui", "radix ui", "shadcn",
    "framer motion", "locomotive scroll", "lenis", "smooth scrolling", "animation", "motion",
    "god tier ui", "top tier ux", "awwward-winning", "award winning ui", "frontend",
    "build ai coding agent with python", "open source ai coding agents", "ai agent framework", 
    "llm-based coding assistant", "cursor vs claude code", "ai agent github", 
    "saas development framework", "design system architecture", "atomic design methodology", 
    "glassmorphism ui dashboards", "dark mode ui system", "wcag compliant design system",
    "istm ai templates", "istmx ai templates", "istm nextjs templates", "istm ui components",
    "istm skills ai framework", "istmx vs istm", "istm react template", "istm agent templates",
    "istm developer tools", "istm coding assistant",
    ".cursorrules alternative", "cursor rules directory", "AGENTS.md standard",
    "claude code agents.md", "windsurf rules", "aider coding agent", "zed ai editor",
    "roo code context", "cline mcp server", "cursor vs windsurf", "claude code vs cursor",
    "best ai agent configuration", "model context protocol", "mcp context"
  ],
  authors: [{ name: "Aryan", url: "https://github.com/istmX" }],
  openGraph: {
    title: "ISTM Skills Framework | Agentic Context Engine",
    description: "The God Mode master command for the @istmx/skills ecosystem. Build premium Awwwards UI and full-stack architectures instantly.",
    url: "https://github.com/istmX/skills",
    siteName: "ISTM Skills",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISTM Skills Framework | Agentic Context Engine",
    description: "The ultimate Context-as-a-Service (CaaS) engine for AI IDEs.",
    creator: "@istmX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "@istmx/skills",
              "operatingSystem": "Windows, macOS, Linux",
              "applicationCategory": "DeveloperApplication",
              "description": "Context-as-a-Service (CaaS) framework. The elite orchestration engine for Cursor, Windsurf, Claude Code, and Gemini. Build Awwwards-winning UI and full-stack architectures instantly.",
              "url": "https://istmskills.vercel.app",
              "author": {
                "@type": "Person",
                "name": "Aryan",
                "url": "https://github.com/istmX"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body className="min-h-full font-sans">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
