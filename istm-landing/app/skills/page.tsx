"use client";

import React, { useState } from "react";
import Navbar from "@/features/landing/ui/Navbar";
import Footer from "@/features/landing/ui/Footer";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { motion, AnimatePresence } from "motion/react";

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
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

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
          {SHOWCASE_SKILLS.map((skill, idx) => {
            const isExpanded = expandedIdx === idx;
            
            return (
              <div key={idx} className="w-full group">
                
                {/* Desktop: Following Pointer (Hidden on Mobile) */}
                <div className="hidden md:block w-full">
                  <FollowerPointerCard
                    title={
                      <div className="flex flex-col gap-1 px-1">
                        <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest">{skill.category}</span>
                        <span className="text-white font-mono text-xs">{skill.snippet}</span>
                      </div>
                    }
                    className="w-full"
                  >
                    <div className="w-full py-16 border-b border-white/10 flex flex-col justify-center transition-all duration-500 ease-out group-hover:pl-20">
                      <h2 className="text-7xl lg:text-8xl font-black font-mono tracking-tighter text-white/15 transition-all duration-500 ease-out group-hover:text-white group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                        {skill.name}
                      </h2>
                      <p className="mt-4 text-white/40 max-w-2xl text-lg font-medium leading-relaxed transition-all duration-500 ease-out opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0">
                        {skill.description}
                      </p>
                    </div>
                  </FollowerPointerCard>
                </div>

                {/* Mobile: Tap-to-Expand Accordion (Hidden on Desktop) */}
                <div 
                  className="block md:hidden w-full py-8 border-b border-white/10 cursor-pointer"
                  onClick={() => toggleExpand(idx)}
                >
                  <div className="flex items-center justify-between w-full">
                    <h2 className={`text-4xl sm:text-5xl font-black font-mono tracking-tighter transition-colors duration-300 ${isExpanded ? "text-white" : "text-white/40"}`}>
                      {skill.name}
                    </h2>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="text-white/40"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 pb-2 flex flex-col gap-4">
                          <div className="bg-[#111] border border-white/10 rounded-xl p-4 flex flex-col gap-2">
                            <span className="text-[#0d74ce] text-[10px] uppercase font-bold tracking-widest font-mono">
                              {skill.category}
                            </span>
                            <span className="text-white font-mono text-sm">
                              {skill.snippet}
                            </span>
                          </div>
                          <p className="text-white/60 text-sm leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <Footer />
    </main>
  );
}
