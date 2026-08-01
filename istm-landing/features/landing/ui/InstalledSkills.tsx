"use client";

import React from "react";
import { Terminal, Database, Shield, PenTool, Search, Layout, Sparkles, CheckCircle2, Rocket, RotateCw, Settings } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const REAL_SKILLS = [
  {
    cmd: "/istm",
    category: "Orchestration",
    title: "God Mode Controller",
    desc: "The master orchestrator that spins up and routes all other specialized skills. Acts as the ultimate AI harness controller.",
    icon: <Settings className="w-5 h-5" />
  },
  {
    cmd: "/istm-scope",
    category: "Planning",
    title: "Idea to Scope",
    desc: "Turns a raw product idea into a living, coarse development plan. Seeds WHAT to build.",
    icon: <Search className="w-5 h-5" />
  },
  {
    cmd: "/istm-craft",
    category: "Architecture",
    title: "Blueprint Validation",
    desc: "Strictly reads the global .istm-context/ blueprints and generates a detailed build spec before code is written.",
    icon: <PenTool className="w-5 h-5" />
  },
  {
    cmd: "/istm-design",
    category: "Aesthetics",
    title: "Visual Orchestrator",
    desc: "Establishes foundational design tokens and strictly enforces premium UI aesthetics, excluding generic AI slop.",
    icon: <Layout className="w-5 h-5" />
  },
  {
    cmd: "/istm-animate",
    category: "Aesthetics",
    title: "Motion Engine",
    desc: "Handles advanced choreography, GSAP timelines, scroll-jacking, and high-performance physics-based animations.",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    cmd: "/istm-develop",
    category: "Execution",
    title: "Feature Execution",
    desc: "Builds a feature from an approved design. Refuses to build if load-bearing architectural decisions are missing.",
    icon: <Rocket className="w-5 h-5" />
  },
  {
    cmd: "/istm-check",
    category: "Verification",
    title: "Verification Loop",
    desc: "Two modes: verify drives the real app to prove behavior, review runs a senior code review before merge.",
    icon: <Shield className="w-5 h-5" />
  },
  {
    cmd: "/istm-sync",
    category: "Workflow",
    title: "Knowledge Sync",
    desc: "Keeps durable knowledge current around merge. Updates .istm-context/agents.md and reconciles the scope from repo evidence.",
    icon: <RotateCw className="w-5 h-5" />
  }
];

export default function InstalledSkills() {
  return (
    <section className="relative w-full py-32 bg-canvas overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row gap-16 items-start">
          
          <div className="md:w-1/3 sticky top-32">
            <span className="inline-block px-4 py-1.5 rounded-full bg-surface-strong text-[11px] font-mono font-bold tracking-widest uppercase text-ink mb-6">
              Real Skills, Real Context
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-6 tracking-tight leading-[1.1]">
              Everything you need. <br />
              <span className="text-body font-normal">Installed locally.</span>
            </h2>
            <p className="text-lg text-body font-sans leading-relaxed mb-8">
              We don't do generic AI chat. The ISTM framework injects 12 highly specialized, deterministic execution scripts directly into your 
              <code className="mx-1 font-mono text-sm bg-surface-strong px-2 py-0.5 rounded">.gemini/skills</code> and 
              <code className="mx-1 font-mono text-sm bg-surface-strong px-2 py-0.5 rounded">.istm-context</code> directories.
            </p>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {REAL_SKILLS.map((skill, idx) => (
              <div 
                key={idx} 
                className="relative group rounded-xl bg-surface-card border border-hairline p-6 transition-shadow hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-md bg-surface-strong text-ink">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold font-mono text-ink tracking-tight">
                    {skill.cmd}
                  </h3>
                </div>
                <p className="text-sm font-sans text-body leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
