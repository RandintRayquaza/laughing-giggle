"use client";

import React from "react";
import { Zap, Sparkles, Box, ShieldCheck } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Ecosystem() {
  return (
    <section className="w-full bg-surface-dark py-[160px] px-6 lg:px-16 flex flex-col items-center justify-center text-center overflow-hidden border-t border-[#1a1a1a]">
      <div className="max-w-7xl w-full flex flex-col items-center gap-16">
        
        <div className="space-y-6">
          <div className="inline-block px-3 py-1.5 rounded-full bg-white/10 text-white text-[11px] font-mono font-bold tracking-widest uppercase shadow-sm">
            Core Principles
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Engineered for Determinism.
          </h2>
          <p className="text-lg md:text-xl text-[#b0b4ba] max-w-2xl mx-auto font-medium leading-relaxed">
            Forget generic prompts. Enforce strict, God-mode architectural orchestration across your entire workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          
          <div className="relative rounded-[20px] border border-[#222] p-1 h-[220px] bg-[#0a0a0a]">
            <GlowingEffect spread={40} glow={true} proximity={64} inactiveZone={0.01} />
            <div className="relative z-10 w-full h-full rounded-[16px] bg-[#141414] border border-[#222] flex flex-col items-center justify-center gap-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] cursor-default px-6">
              <Zap className="w-10 h-10 text-white" />
              <div className="text-center">
                <div className="text-2xl font-black text-white tracking-tight mb-2">Zero Config</div>
                <div className="text-sm text-[#888] leading-relaxed">Installs directly into any environment.</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[20px] border border-[#222] p-1 h-[220px] bg-[#0a0a0a]">
            <GlowingEffect spread={40} glow={true} proximity={64} inactiveZone={0.01} />
            <div className="relative z-10 w-full h-full rounded-[16px] bg-[#141414] border border-[#222] flex flex-col items-center justify-center gap-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] cursor-default px-6">
              <Sparkles className="w-10 h-10 text-[#ffbd2e]" />
              <div className="text-center">
                <div className="text-2xl font-black text-white tracking-tight mb-2">Awwwards UI</div>
                <div className="text-sm text-[#888] leading-relaxed">Strict enforcement of premium motion tokens.</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[20px] border border-[#222] p-1 h-[220px] bg-[#0a0a0a]">
            <GlowingEffect spread={40} glow={true} proximity={64} inactiveZone={0.01} />
            <div className="relative z-10 w-full h-full rounded-[16px] bg-[#141414] border border-[#222] flex flex-col items-center justify-center gap-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] cursor-default px-6">
              <Box className="w-10 h-10 text-[#0d74ce]" />
              <div className="text-center">
                <div className="text-2xl font-black text-white tracking-tight mb-2">Editor Agnostic</div>
                <div className="text-sm text-[#888] leading-relaxed">Compatible with Cursor, Windsurf, and Claude.</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[20px] border border-[#222] p-1 h-[220px] bg-[#0a0a0a]">
            <GlowingEffect spread={40} glow={true} proximity={64} inactiveZone={0.01} />
            <div className="relative z-10 w-full h-full rounded-[16px] bg-[#141414] border border-[#222] flex flex-col items-center justify-center gap-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] cursor-default px-6">
              <ShieldCheck className="w-10 h-10 text-[#27c93f]" />
              <div className="text-center">
                <div className="text-2xl font-black text-white tracking-tight mb-2">Deterministic</div>
                <div className="text-sm text-[#888] leading-relaxed">Eliminates generic AI hallucination.</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
