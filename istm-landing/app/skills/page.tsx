import React from "react";
import Navbar from "@/features/landing/ui/Navbar";
import Footer from "@/features/landing/ui/Footer";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { PinnedSkillsContainer } from "@/features/skills/ui/PinnedSkillsContainer";

const SKILL_CATEGORIES = [
  {
    title: "Orchestration",
    skills: [
      { name: "/istm", desc: "The God Mode master command. Analyzes the raw prompt and orchestrates the entire workflow." },
      { name: "/istm-architecture", desc: "Master orchestrator. Drafts database schemas, constraints, and structural boundaries." }
    ]
  },
  {
    title: "Frontend Execution",
    skills: [
      { name: "/istm-design", desc: "Core visual orchestrator. Establishes the foundational design tokens." },
      { name: "/istm-awwward-designer", desc: "The premium frontend execution engine. Builds Awwwards-winning experiences." },
      { name: "/istm-animate", desc: "Dedicated motion orchestrator. Handles GSAP timelines and complex physics." }
    ]
  },
  {
    title: "Backend Execution",
    skills: [
      { name: "/istm-system-design", desc: "Backend orchestrator. Owns schema design, API routing, and infrastructure." }
    ]
  },
  {
    title: "Utility & Workflow",
    skills: [
      { name: "/istm-audit", desc: "Run a codebase audit and gap-fill context." },
      { name: "/istm-check", desc: "Verify or review code before merge." },
      { name: "/istm-craft", desc: "Feature architect. Writes blueprints for features." },
      { name: "/istm-debug", desc: "Finds and fixes root causes of bugs." },
      { name: "/istm-develop", desc: "The Builder. Turns specs into working code." },
      { name: "/istm-document", desc: "Writes human-facing prose (changelogs, PRs)." },
      { name: "/istm-scope", desc: "Turns ideas into scopes and plans tasks." },
      { name: "/istm-sync", desc: "Keeps durable knowledge current." },
      { name: "/istm-test", desc: "Writes test suites for your code." }
    ]
  }
];

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#0a0a0a] overflow-x-hidden">
      <Navbar />
      
      <div className="w-full flex flex-col items-center pt-24 pb-0">
        
        {/* Massive Hero Text */}
        <div className="w-full h-[300px] md:h-[500px] flex items-center justify-center cursor-default overflow-hidden relative z-10">
          <div className="w-[120%] md:w-full h-full flex items-center justify-center">
            <TextHoverEffect text="SKILLS" />
          </div>
        </div>
        
        {/* Scroll-Jacked Categories */}
        <div className="w-full relative z-20">
          <PinnedSkillsContainer categories={SKILL_CATEGORIES} />
        </div>

      </div>

      <Footer />
    </main>
  );
}
