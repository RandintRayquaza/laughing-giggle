"use client";

import React, { useState } from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";
import { Tooltip } from "@/components/ui/tooltip-card";
import { GooeyInput } from "@/components/ui/gooey-input";

const SKILLS = [
  {
    cmd: "/istm-scope",
    title: "Idea to Scope",
    desc: "Turns a raw product idea into a living, coarse development plan. Establishes the exact sequence of what needs to be built before code generation.",
  },
  {
    cmd: "/istm-architect",
    title: "System Design",
    desc: "Makes load-bearing decisions. Writes the system design specification and forces strict routing constraints.",
  },
  {
    cmd: "/istm-schema",
    title: "Data Enforcement",
    desc: "Enforces NoSQL architectures and strict ORM models, eradicating generic or unoptimized data structures.",
  },
  {
    cmd: "/istm-design",
    title: "Token Injection",
    desc: "Injects global semantic tokens into the AI's generation process, ensuring true Dark Mode and UI consistency.",
  },
  {
    cmd: "/istm-animate",
    title: "Hardware Physics",
    desc: "Forces hardware-accelerated physics curves using GSAP and Framer Motion for Awwwards-tier micro-interactions.",
  },
  {
    cmd: "/istm-awwwards",
    title: "Cinematic Motion",
    desc: "Injects cinematic motion design, WebGL physics, and scroll-linked animations directly into the frontend.",
  },
  {
    cmd: "/istm-develop",
    title: "Feature Execution",
    desc: "Builds the feature from the exact spec. Refuses to build if architectural decisions are missing.",
  },
  {
    cmd: "/istm-verify",
    title: "Verification Loop",
    desc: "Runs the real app to prove the feature works, synchronizing context files so the AI never loses its state.",
  },
];

export default function Features() {
  const [activeSkill, setActiveSkill] = useState(SKILLS[0]);

  return (
    <div className="w-full relative z-20 bg-canvas py-32 border-t border-hairline overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left Side: The Interactive List */}
        <div className="flex-1 w-full max-w-xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface-dark-elevated text-[10px] font-mono font-bold tracking-widest uppercase text-white shadow-sm mb-6">
            The Intelligence Lifecycle
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-ink leading-[1.05] mb-8">
            Deterministic by design. <br />
            <span className="text-text-link">Zero hallucinations.</span>
          </h2>

          <div className="flex flex-col gap-2 relative">
            {SKILLS.map((skill, index) => (
              <MagneticWrapper key={index}>
                <Tooltip
                  content={
                    <div className="flex flex-col gap-1">
                      <span className="font-bold text-ink">{skill.title}</span>
                      <span className="text-xs text-body">Agent ready for execution.</span>
                    </div>
                  }
                >
                  <button
                    onMouseEnter={() => setActiveSkill(skill)}
                    className={`w-full text-left px-6 py-4 rounded-2xl transition-all duration-300 font-mono text-sm md:text-lg tracking-tight ${
                      activeSkill.cmd === skill.cmd
                        ? "bg-text-link text-white font-bold shadow-lg shadow-text-link/20 scale-105"
                        : "text-body hover:text-ink hover:bg-surface-strong"
                    }`}
                  >
                    {skill.cmd}
                  </button>
                </Tooltip>
              </MagneticWrapper>
            ))}
          </div>

          <div className="mt-12 w-full max-w-sm">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-body mb-4 ml-4">
              Initialize Sequence
            </p>
            <GooeyInput 
              placeholder="Inject context..." 
              className="w-full"
            />
          </div>
        </div>

        {/* Right Side: The Active Wobble Card */}
        <div className="flex-1 w-full lg:sticky lg:top-32 h-[500px]">
          <WobbleCard containerClassName="bg-surface-dark border border-white/10 h-full w-full" className="p-8 md:p-12 flex flex-col justify-end relative h-full">
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
            
            <div className="relative z-10 w-full">
              <span className="inline-block px-3 py-1 rounded bg-white/10 text-white font-mono text-[10px] uppercase tracking-widest mb-4 backdrop-blur-md border border-white/20">
                {activeSkill.title}
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">
                {activeSkill.cmd}
              </h3>
              <p className="text-white/80 font-medium text-lg leading-relaxed max-w-md">
                {activeSkill.desc}
              </p>
            </div>
          </WobbleCard>
        </div>

      </div>
    </div>
  );
}
