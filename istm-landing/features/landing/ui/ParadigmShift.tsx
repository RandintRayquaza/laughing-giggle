"use client";

import React from "react";
import { CardStack } from "@/components/ui/card-stack";

const CONTEXT_CARDS = [
  {
    id: 1,
    name: "design.md",
    designation: "UI Blueprint",
    content: (
      <div className="font-mono text-sm leading-relaxed text-ink">
        <span className="text-text-link">const</span> theme = "Expo Light";<br/>
        <span className="text-text-link">const</span> bg = "pure white";<br/>
        <span className="text-body">{"// Strict semantic tokens injected"}</span>
      </div>
    )
  },
  {
    id: 2,
    name: "architecture.md",
    designation: "System Blueprint",
    content: (
      <div className="font-mono text-sm leading-relaxed text-ink">
        <span className="text-text-link">Database</span>: PostgreSQL<br/>
        <span className="text-text-link">ORM</span>: Prisma<br/>
        <span className="text-body">{"// No hallucinatory data models"}</span>
      </div>
    )
  },
  {
    id: 3,
    name: "agents.md",
    designation: "Rules Blueprint",
    content: (
      <div className="font-mono text-sm leading-relaxed text-ink">
        <span className="text-body">{"// The infinite memory loop"}</span><br/>
        Read PROGRESS.md before writing code.<br/>
        Never use Tailwind colors.
      </div>
    )
  }
];

export default function ParadigmShift() {
  return (
    <section className="relative w-full py-32 bg-surface-strong border-y border-hairline overflow-hidden">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-canvas text-[11px] font-mono font-bold tracking-widest uppercase text-ink border border-hairline mb-6">
              The Paradigm Shift
            </span>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-ink tracking-tighter leading-[1.05] mb-6">
              Context as a Service.
            </h2>
            <p className="text-lg text-body font-sans leading-relaxed mb-8 max-w-lg">
              Don't prompt for code. Prompt for architecture. The orchestrator locks down your database, UI tokens, and system design into strict <code className="font-mono bg-canvas px-1.5 py-0.5 rounded border border-hairline text-ink">.istm-context</code> blueprints before a single line is written.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center items-center h-[400px]">
             <CardStack items={CONTEXT_CARDS} />
          </div>

        </div>
      </div>
    </section>
  );
}
