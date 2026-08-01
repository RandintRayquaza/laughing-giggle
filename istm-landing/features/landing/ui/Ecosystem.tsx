"use client";

import React from "react";
import { Star, GitMerge, Users } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Ecosystem() {
  return (
    <section className="w-full bg-surface-dark py-[160px] px-6 lg:px-16 flex flex-col items-center justify-center text-center overflow-hidden border-t border-[#1a1a1a]">
      <div className="max-w-7xl w-full flex flex-col items-center gap-16">
        
        <div className="space-y-6">
          <div className="inline-block px-3 py-1.5 rounded-full bg-white/10 text-white text-[11px] font-mono font-bold tracking-widest uppercase shadow-sm">
            The Movement
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Backed by the Open-Source Ecosystem.
          </h2>
          <p className="text-lg md:text-xl text-[#b0b4ba] max-w-2xl mx-auto font-medium leading-relaxed">
            Thousands of developers are abandoning generic AI prompts in favor of strict, God-mode architectural orchestration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          
          <div className="relative rounded-[20px] border border-[#222] p-1 h-[220px] bg-[#0a0a0a]">
            <GlowingEffect spread={40} glow={true} proximity={64} inactiveZone={0.01} />
            <div className="relative z-10 w-full h-full rounded-[16px] bg-[#141414] border border-[#222] flex flex-col items-center justify-center gap-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] cursor-default">
              <Star className="w-10 h-10 text-[#ffbd2e]" />
              <div className="text-center">
                <div className="text-4xl font-black text-white tracking-tight mb-1">14.2k+</div>
                <div className="text-sm font-mono text-[#888]">GitHub Stars</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[20px] border border-[#222] p-1 h-[220px] bg-[#0a0a0a]">
            <GlowingEffect spread={40} glow={true} proximity={64} inactiveZone={0.01} />
            <div className="relative z-10 w-full h-full rounded-[16px] bg-[#141414] border border-[#222] flex flex-col items-center justify-center gap-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] cursor-default">
              <GitMerge className="w-10 h-10 text-[#27c93f]" />
              <div className="text-center">
                <div className="text-4xl font-black text-white tracking-tight mb-1">1.8M+</div>
                <div className="text-sm font-mono text-[#888]">Agents Generated</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[20px] border border-[#222] p-1 h-[220px] bg-[#0a0a0a]">
            <GlowingEffect spread={40} glow={true} proximity={64} inactiveZone={0.01} />
            <div className="relative z-10 w-full h-full rounded-[16px] bg-[#141414] border border-[#222] flex flex-col items-center justify-center gap-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] cursor-default">
              <Users className="w-10 h-10 text-[#0d74ce]" />
              <div className="text-center">
                <div className="text-4xl font-black text-white tracking-tight mb-1">40k+</div>
                <div className="text-sm font-mono text-[#888]">Community Members</div>
              </div>
            </div>
          </div>

          <div className="relative rounded-[20px] border border-[#222] p-1 h-[220px] bg-[#0a0a0a]">
            <GlowingEffect spread={40} glow={true} proximity={64} inactiveZone={0.01} />
            <div className="relative z-10 w-full h-full rounded-[16px] bg-[#141414] border border-[#222] flex flex-col items-center justify-center gap-5 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03] cursor-default">
              <GithubIcon className="w-10 h-10 text-white" />
              <div className="text-center">
                <div className="text-4xl font-black text-white tracking-tight mb-1">Top 10</div>
                <div className="text-sm font-mono text-[#888]">Trending on GitHub</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
