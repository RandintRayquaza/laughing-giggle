"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { showcaseSkills } from "../constants/skills";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Showcase() {
  const container = useRef<HTMLDivElement>(null);
  const [activeSkill, setActiveSkill] = useState(showcaseSkills[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useGSAP(() => {
    gsap.from(".registry-header", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 75%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".registry-container", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 60%",
      },
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out"
    });
  }, { scope: container });

  const handleSkillSelect = (skill: typeof showcaseSkills[0]) => {
    if (skill.command === activeSkill.command || isAnimating) return;
    
    setIsAnimating(true);
    
    
    gsap.to(".code-snippet-content", {
      opacity: 0,
      y: 10,
      duration: 0.2,
      onComplete: () => {
        setActiveSkill(skill);
        
        gsap.to(".code-snippet-content", {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
          onComplete: () => setIsAnimating(false)
        });
      }
    });
  };

  return (
    <section ref={container} className="w-full bg-canvas-soft py-32 px-4 flex flex-col items-center relative z-20 min-h-screen">
      
      <div className="registry-header max-w-4xl w-full mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px bg-hairline-strong flex-1" />
          <span className="text-text-link font-bold tracking-widest uppercase text-sm">Interactive Registry</span>
          <div className="h-px bg-hairline-strong flex-1" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-ink tracking-tight mb-6 text-center">
          Inject architecture instantly.
        </h2>
        <p className="text-lg text-body font-medium text-center max-w-2xl mx-auto">
          Don't just read documentation. Select a skill below to see exactly what context it injects into your AI's brain.
        </p>
      </div>

      <div className="registry-container max-w-5xl w-full bg-surface-card border border-hairline-strong rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[600px]">
        
        {/* Left Sidebar: Skill List */}
        <div className="w-full md:w-[40%] bg-canvas-soft border-r border-hairline-strong flex flex-col h-full">
          <div className="p-4 border-b border-hairline-strong bg-surface-card">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-body" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Search skills (e.g. /istm-gsap)..." 
                className="w-full pl-9 pr-4 py-2 bg-canvas border border-hairline-strong rounded-md text-sm outline-none focus:border-text-link transition-colors"
                disabled // Visual only for now to show scale
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2 scrollbar-thin">
            {showcaseSkills.map((skill) => {
              const isActive = activeSkill.command === skill.command;
              return (
                <button
                  key={skill.command}
                  onClick={() => handleSkillSelect(skill)}
                  className={`w-full text-left p-4 rounded-lg mb-2 transition-all duration-300 flex flex-col gap-2 relative ${
                    isActive 
                      ? "bg-text-link/5 border-text-link/30 shadow-sm" 
                      : "bg-transparent hover:bg-canvas border-transparent hover:border-hairline-strong"
                  } border`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-text-link rounded-r-full" />
                  )}
                  <div className="flex items-center justify-between w-full">
                    <span className={`font-mono font-bold text-sm ${isActive ? "text-text-link" : "text-ink"}`}>
                      {skill.command}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-body px-2 py-0.5 bg-hairline-strong/50 rounded-full">
                      {skill.category}
                    </span>
                  </div>
                  <span className={`text-sm font-medium line-clamp-2 ${isActive ? "text-ink" : "text-body"}`}>
                    {skill.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Pane: IDE Context Injection Preview */}
        <div className="w-full md:w-[60%] bg-[#050510] flex flex-col relative overflow-hidden h-full">
          {/* Mac window dots */}
          <div className="h-12 bg-black/40 border-b border-white/10 flex items-center px-4 gap-2 shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-4 font-mono text-xs text-white/40">Zenix Context Engine</span>
          </div>

          {/* IDE Content */}
          <div className="flex-1 p-6 relative flex flex-col">
            <div className="mb-6 flex flex-col gap-2">
              <span className="text-white font-bold text-xl">{activeSkill.title}</span>
              <span className="text-white/50 font-mono text-sm border border-white/10 bg-white/5 px-2 py-1 rounded self-start">
                Executing: {activeSkill.command}
              </span>
            </div>

            <div className="flex-1 bg-black/60 rounded-lg border border-white/10 p-4 font-mono text-sm text-[#cfe7ff] leading-relaxed overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
              <pre className="code-snippet-content whitespace-pre-wrap">
                {activeSkill.snippet}
              </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
