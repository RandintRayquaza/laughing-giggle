"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Features() {
  return (
    <div className="w-full relative z-20 bg-canvas py-32 border-t border-hairline overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col xl:flex-row gap-12 items-center xl:items-start">
        
        {/* Left Side: Title */}
        <div className="flex-1 w-full max-w-xl xl:sticky xl:top-32">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface-dark-elevated text-[10px] font-mono font-bold tracking-widest uppercase text-white shadow-sm mb-6">
            The Intelligence Lifecycle
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-ink leading-[1.05]">
            Deterministic by design. <br />
            <span className="text-text-link">Zero hallucinations.</span>
          </h2>
          <p className="mt-6 text-lg font-medium text-body leading-relaxed max-w-md">
            Every stage of software development is enforced through a strict AI workflow constraint. We wrap the chaotic nature of generative models in a titanium architectural pipeline.
          </p>
        </div>

        {/* Right Side: Wobble Card Grid */}
        <div className="flex-1 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto xl:mx-0 w-full">
            
            {/* Card 1: Scope */}
            <FollowerPointerCard title="/istm-scope" className="md:col-span-2">
              <WobbleCard containerClassName="bg-surface-dark border border-white/10" className="p-8 md:p-12 min-h-[250px] flex flex-col justify-end relative">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative z-10 w-full md:max-w-md">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">/istm-scope</h3>
                  <p className="text-white/70 font-medium text-base">
                    Turns a raw product idea into a living, coarse development plan. It establishes the exact sequence of what needs to be built before any code is generated.
                  </p>
                </div>
              </WobbleCard>
            </FollowerPointerCard>

            {/* Card 2: Architect */}
            <FollowerPointerCard title="/istm-architect" className="md:col-span-1">
              <WobbleCard containerClassName="bg-text-link border border-text-link/50" className="p-8 min-h-[250px] flex flex-col justify-end relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">/istm-architect</h3>
                  <p className="text-white/90 font-medium text-sm">
                    Makes load-bearing decisions. Writes the system design specification and forces strict routing constraints.
                  </p>
                </div>
              </WobbleCard>
            </FollowerPointerCard>

            {/* Card 3: Schema Design */}
            <FollowerPointerCard title="/istm-schema-design" className="md:col-span-1">
              <WobbleCard containerClassName="bg-surface-card border border-hairline-strong" className="p-8 min-h-[250px] flex flex-col justify-end relative">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-ink mb-2">/istm-schema</h3>
                  <p className="text-body font-medium text-sm">
                    Enforces NoSQL architectures and strict ORM models, eradicating generic or unoptimized data structures.
                  </p>
                </div>
              </WobbleCard>
            </FollowerPointerCard>

            {/* Card 4: Design */}
            <FollowerPointerCard title="/istm-design" className="md:col-span-1">
              <WobbleCard containerClassName="bg-surface-card border border-hairline-strong" className="p-8 min-h-[250px] flex flex-col justify-end relative">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-ink mb-2">/istm-design</h3>
                  <p className="text-body font-medium text-sm">
                    Injects global semantic tokens into the AI's generation process, ensuring true Dark Mode and UI consistency.
                  </p>
                </div>
              </WobbleCard>
            </FollowerPointerCard>

            {/* Card 5: Animate */}
            <FollowerPointerCard title="/istm-animate" className="md:col-span-1">
              <WobbleCard containerClassName="bg-surface-dark-elevated border border-white/5" className="p-8 min-h-[250px] flex flex-col justify-end relative">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-2">/istm-animate</h3>
                  <p className="text-white/70 font-medium text-sm">
                    Forces hardware-accelerated physics curves using GSAP and Framer Motion for Awwwards-tier micro-interactions.
                  </p>
                </div>
              </WobbleCard>
            </FollowerPointerCard>

            {/* Card 6: Awwwards Designer */}
            <FollowerPointerCard title="/istm-awwwards" className="md:col-span-2">
              <WobbleCard containerClassName="bg-surface-dark border border-white/10" className="p-8 md:p-12 min-h-[250px] flex flex-col justify-end relative">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative z-10 w-full md:max-w-md">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">/istm-awwwards-designer</h3>
                  <p className="text-white/70 font-medium text-base">
                    Injects cinematic motion design, WebGL physics, and scroll-linked animations directly into the frontend. We don't just build UI, we enforce Awwwards-tier storytelling.
                  </p>
                </div>
              </WobbleCard>
            </FollowerPointerCard>

            {/* Card 7: Develop & Verify */}
            <FollowerPointerCard title="/istm-develop" className="md:col-span-2">
              <WobbleCard containerClassName="bg-canvas-soft border border-hairline-strong" className="p-8 md:p-12 min-h-[250px] flex flex-col justify-end relative">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                <div className="relative z-10 w-full md:max-w-md">
                  <h3 className="text-2xl md:text-3xl font-bold text-ink mb-2">/istm-develop & /istm-verify</h3>
                  <p className="text-body font-medium text-base">
                    Builds the feature from the exact spec. Then runs the real app to prove the feature works, synchronizing the context files so the AI never loses its memory state.
                  </p>
                </div>
              </WobbleCard>
            </FollowerPointerCard>

          </div>
        </div>

      </div>
    </div>
  );
}
