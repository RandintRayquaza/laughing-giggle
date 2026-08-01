"use client";

import React from "react";
import { Box, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { WobbleCard } from "@/components/ui/wobble-card";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Ecosystem() {
  return (
    <section className="w-full bg-surface-dark py-[160px] px-6 lg:px-16 flex flex-col items-center justify-center text-center overflow-hidden border-t border-[#1a1a1a]">
      <div className="max-w-7xl w-full flex flex-col items-center gap-16">
        
        <div className="flex flex-col items-center w-full">
          <div className="inline-block px-3 py-1.5 rounded-full bg-white/10 text-white text-[11px] font-mono font-bold tracking-widest uppercase shadow-sm relative z-10 mt-6">
            Core Principles
          </div>
          
          <div className="w-full max-w-5xl h-[150px] md:h-[240px] relative -mt-6 md:-mt-12 -mb-2 md:-mb-8 z-0">
            <TextHoverEffect text="DETERMINISM" />
          </div>

          <p className="text-lg md:text-xl text-[#b0b4ba] max-w-2xl mx-auto font-medium leading-relaxed relative z-10 mt-4 mb-8">
            Forget generic prompts. Enforce strict, God-mode architectural orchestration across your entire workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
          <div className="relative rounded-[24px] border border-[#222] p-1 h-[280px] bg-[#0a0a0a] md:col-span-2">
            <GlowingEffect spread={60} glow={true} proximity={64} inactiveZone={0.01} />
            <WobbleCard containerClassName="relative z-10 w-full h-full rounded-[20px] bg-[#141414] !border-none" className="p-0 sm:p-0 flex flex-col items-center justify-center gap-5 h-full">
              <Zap className="w-12 h-12 text-white" />
              <div className="text-center px-6">
                <div className="text-3xl font-black text-white tracking-tight mb-2">Zero Config</div>
                <div className="text-base text-[#888] leading-relaxed max-w-[400px] mx-auto">Installs directly into any environment. No overhead.</div>
              </div>
            </WobbleCard>
          </div>

          <div className="relative rounded-[24px] border border-[#222] p-1 h-[280px] bg-[#0a0a0a] md:col-span-1">
            <GlowingEffect spread={60} glow={true} proximity={64} inactiveZone={0.01} />
            <WobbleCard containerClassName="relative z-10 w-full h-full rounded-[20px] bg-[#141414] !border-none" className="p-0 sm:p-0 flex flex-col items-center justify-center gap-5 h-full">
              <Sparkles className="w-12 h-12 text-[#ffbd2e]" />
              <div className="text-center px-6">
                <div className="text-2xl font-black text-white tracking-tight mb-2">Awwwards UI</div>
                <div className="text-sm text-[#888] leading-relaxed">Strict enforcement of premium motion tokens.</div>
              </div>
            </WobbleCard>
          </div>

          <div className="relative rounded-[24px] border border-[#222] p-1 h-[280px] bg-[#0a0a0a] md:col-span-1">
            <GlowingEffect spread={60} glow={true} proximity={64} inactiveZone={0.01} />
            <WobbleCard containerClassName="relative z-10 w-full h-full rounded-[20px] bg-[#141414] !border-none" className="p-0 sm:p-0 flex flex-col items-center justify-center gap-5 h-full">
              <Box className="w-12 h-12 text-[#0d74ce]" />
              <div className="text-center px-6">
                <div className="text-2xl font-black text-white tracking-tight mb-2">Editor Agnostic</div>
                <div className="text-sm text-[#888] leading-relaxed">Cursor, Windsurf, Claude.</div>
              </div>
            </WobbleCard>
          </div>

          <div className="relative rounded-[24px] border border-[#222] p-1 h-[280px] bg-[#0a0a0a] md:col-span-2">
            <GlowingEffect spread={60} glow={true} proximity={64} inactiveZone={0.01} />
            <WobbleCard containerClassName="relative z-10 w-full h-full rounded-[20px] bg-[#141414] !border-none" className="p-0 sm:p-0 flex flex-col items-center justify-center gap-5 h-full">
              <ShieldCheck className="w-12 h-12 text-[#27c93f]" />
              <div className="text-center px-6">
                <div className="text-3xl font-black text-white tracking-tight mb-2">Deterministic</div>
                <div className="text-base text-[#888] leading-relaxed max-w-[400px] mx-auto">Eliminates generic AI hallucination completely.</div>
              </div>
            </WobbleCard>
          </div>

        </div>

      </div>
    </section>
  );
}
