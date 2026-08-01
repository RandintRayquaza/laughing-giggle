"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { GlowingEffect } from "@/components/ui/glowing-effect";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TerminalVisual = () => (
  <div className="w-full max-w-md mx-auto rounded-xl bg-black border border-[#222] p-6 font-mono text-xs text-white/80 flex flex-col shadow-2xl relative">
    <div className="flex gap-2 mb-6">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
    </div>
    <div className="space-y-4">
      <p><span className="text-emerald-400">~/project $</span> npx @istmx/skills run /istm-architecture</p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <span className="text-blue-400">Analyzing repository...</span>
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="pl-4 border-l-2 border-[#333] space-y-2">
        <p className="text-yellow-400">? Missing requirement detected.</p>
        <p>What is the primary authentication method?</p>
        <p className="text-emerald-400">❯ [OAuth] GitHub/Google</p>
        <p className="text-white/40">  [Email/Pass] Supabase Auth</p>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
        <span className="text-emerald-400">✔</span> Generated .istm-context/architecture.md
      </motion.p>
    </div>
  </div>
);

const DesignVisual = () => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-8">
    <div className="flex -space-x-4">
      <div className="w-24 h-24 rounded-full bg-canvas border-2 border-hairline shadow-lg z-30 flex items-center justify-center">
        <span className="text-[10px] font-mono text-ink">canvas</span>
      </div>
      <div className="w-24 h-24 rounded-full bg-surface-strong border-2 border-hairline shadow-lg z-20 flex items-center justify-center">
        <span className="text-[10px] font-mono text-ink">strong</span>
      </div>
      <div className="w-24 h-24 rounded-full bg-surface-dark border-2 border-hairline shadow-lg z-10 flex items-center justify-center">
        <span className="text-[10px] font-mono text-white">dark</span>
      </div>
    </div>
    <motion.div 
      initial={{ width: 0 }} animate={{ width: "200px" }} transition={{ duration: 1 }}
      className="h-[1px] bg-ink"
    />
    <p className="font-mono text-sm tracking-widest uppercase text-ink">Semantic Variables</p>
  </div>
);

const MotionVisual = () => (
  <div className="w-full h-full flex items-center justify-center">
    <motion.div 
      animate={{ 
        y: [0, -40, 0],
        rotateX: [0, 15, 0],
        rotateY: [0, -15, 0]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="w-48 h-48 rounded-full bg-gradient-to-tr from-text-link to-purple-400 blur-sm absolute opacity-30"
    />
    <motion.div 
      animate={{ 
        y: [0, -40, 0],
        rotateX: [0, 15, 0],
        rotateY: [0, -15, 0]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="w-48 h-48 rounded-3xl bg-gradient-to-br from-text-link to-purple-600 shadow-2xl flex items-center justify-center relative z-10"
    >
      <span className="text-white font-mono font-bold tracking-widest text-lg">60FPS</span>
    </motion.div>
  </div>
);

const AwwwardsVisual = () => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-2">
    <div className="w-64 h-32 flex gap-2">
       <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }} className="flex-1 bg-surface-strong rounded-xl border border-hairline" />
       <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1.05 }} transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }} className="flex-[2] bg-surface-dark rounded-xl" />
    </div>
    <div className="w-64 h-16 bg-canvas border border-hairline rounded-xl flex items-center justify-center overflow-hidden relative">
      <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-ink/5 to-transparent w-full" animate={{ x: ['-100%', '100%'] }} transition={{ duration: 1.5, repeat: Infinity }} />
      <span className="font-mono text-[10px] uppercase tracking-widest">Spatial Architecture</span>
    </div>
  </div>
);


const CORE_SKILLS = [
  {
    cmd: "/istm-architecture",
    title: "System Context Generation",
    desc: "The flagship skill. Analyzes the project, identifies missing requirements via interview prompts, and writes the definitive Context-As-A-Service blueprint.",
    visual: <TerminalVisual />
  },
  {
    cmd: "/istm-design",
    title: "Token Injection",
    desc: "Injects strict semantic tokens, typography scales, and structural layouts directly into the AI's generation process. No more generic hex codes.",
    visual: <DesignVisual />
  },
  {
    cmd: "/istm-awwward-designer",
    title: "Premium UI Workflows",
    desc: "Uses unified Awwwards designer logic for premium layouts. Forces the AI to utilize advanced spatial constraints instead of default CSS grids.",
    visual: <AwwwardsVisual />
  },
  {
    cmd: "/istm-animate",
    title: "Motion Choreography",
    desc: "Injects strict animation rules. Enforces Framer Motion for interactive micro-states and GSAP for cinematic scroll-jacking.",
    visual: <MotionVisual />
  }
];

export default function FlagshipSkills() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(".skill-list-item", {
      x: -40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full py-32 bg-canvas overflow-hidden border-t border-hairline">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        
        <div className="mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface-strong text-[11px] font-mono font-bold tracking-widest uppercase text-ink mb-6 border border-hairline">
            The Arsenal
          </span>
          <h2 className="text-5xl md:text-7xl font-heading font-black text-ink tracking-tighter leading-[1.05]">
            Prompt architecture.<br />
            <span className="text-body font-medium">Not just code.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center min-h-[500px]">
          
          {/* Interactive List (Left) */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 relative z-20">
            {CORE_SKILLS.map((skill, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div 
                  key={idx}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`skill-list-item relative cursor-pointer rounded-[1.5rem] p-6 transition-all duration-300 border ${
                    isActive ? "border-ink bg-surface-strong shadow-md scale-[1.02]" : "border-transparent hover:bg-surface-strong/50"
                  }`}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <h3 className={`font-mono text-xl md:text-2xl font-bold tracking-tight transition-colors ${isActive ? "text-ink" : "text-body"}`}>
                        {skill.cmd}
                      </h3>
                      {isActive && (
                        <motion.div layoutId="active-indicator" className="w-2 h-2 rounded-full bg-text-link" />
                      )}
                    </div>
                    {isActive && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-body font-sans text-sm mt-2"
                      >
                        {skill.desc}
                      </motion.p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Visual Showcase (Right) */}
          <div className="w-full lg:w-1/2 h-[500px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                {CORE_SKILLS[activeIdx].visual}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
