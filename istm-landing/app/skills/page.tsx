import React from "react";
import Navbar from "@/features/landing/ui/Navbar";
import Footer from "@/features/landing/ui/Footer";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

const SHOWCASE_SKILLS = [
  { name: "/istm", category: "Orchestration", snippet: "System Router", description: "The God Mode master command. Analyzes your raw prompt and dynamically orchestrates the entire AI workflow to build your vision." },
  { name: "/istm-architecture", category: "Orchestration", snippet: "Foundation", description: "Drafts database schemas, establishes strict constraints, and plans structural boundaries before writing a single line of code." },
  { name: "/istm-design", category: "Frontend", snippet: "UI Tokens", description: "The core visual orchestrator. Establishes the foundational design tokens, typography, and ensures strict adherence to Awwwards aesthetics." },
  { name: "/istm-awwward-designer", category: "Frontend", snippet: "Execution Engine", description: "The premium frontend execution engine. Consumes the design tokens to build cutting-edge React, GSAP, and WebGL experiences." },
  { name: "/istm-animate", category: "Frontend", snippet: "Motion Physics", description: "The dedicated motion orchestrator. Handles advanced choreography, scroll-jacking timelines, and complex UI physics." },
  { name: "/istm-system-design", category: "Backend", snippet: "Infra Router", description: "The backend orchestrator. Owns schema design, secure API routing, ORM logic, and scalable infrastructure planning." },
  { name: "/istm-audit", category: "Workflow", snippet: "Code Review", description: "Runs a comprehensive codebase audit to gap-fill AI context and verify architectural integrity." },
  { name: "/istm-check", category: "Workflow", snippet: "CI/CD Verify", description: "Verifies functionality against the spec and reviews logic before PR merges." },
  { name: "/istm-craft", category: "Workflow", snippet: "Feature Architect", description: "Interviews the engineer, weighs options, and writes a detailed feature specification strictly bound to global blueprints." },
  { name: "/istm-develop", category: "Workflow", snippet: "The Builder", description: "Turns specifications into working code. Tracks UI components and logical data layers without silently inventing load-bearing decisions." },
];

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#0a0a0a] overflow-x-hidden">
      <Navbar />
      
      <div className="w-full flex flex-col items-center pt-24 pb-32">
        
        {/* Massive Hero Text */}
        <div className="w-full h-[300px] md:h-[500px] flex items-center justify-center cursor-default overflow-hidden relative z-0">
          <div className="w-[120%] md:w-full h-full flex items-center justify-center">
            <TextHoverEffect text="SKILLS" />
          </div>
        </div>
        
        {/* Massive Typography List */}
        <div className="w-full max-w-[90%] md:max-w-7xl px-6 flex flex-col relative z-10 mt-8">
          {SHOWCASE_SKILLS.map((skill, idx) => (
            <FollowerPointerCard
              key={idx}
              title={
                <div className="flex flex-col gap-1 px-1">
                  <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest">{skill.category}</span>
                  <span className="text-white font-mono text-xs">{skill.snippet}</span>
                </div>
              }
              className="w-full group"
            >
              <div className="w-full py-10 md:py-16 border-b border-white/10 flex flex-col justify-center transition-all duration-500 ease-out group-hover:pl-12 md:group-hover:pl-20">
                <h2 className="text-4xl md:text-7xl lg:text-8xl font-black font-mono tracking-tighter text-white/15 transition-all duration-500 ease-out group-hover:text-white group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                  {skill.name}
                </h2>
                <p className="mt-4 text-white/40 max-w-2xl text-sm md:text-lg font-medium leading-relaxed transition-all duration-500 ease-out opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
                  {skill.description}
                </p>
              </div>
            </FollowerPointerCard>
          ))}
        </div>

      </div>

      <Footer />
    </main>
  );
}
