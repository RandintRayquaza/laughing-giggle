"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative w-full min-h-[80vh] bg-canvas flex items-center justify-center overflow-hidden py-32 border-t border-hairline">
      
      {/* Massive Background Text Effect */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-auto">
        <TextHoverEffect text="CHAOS" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-4xl mx-auto px-6 text-center pointer-events-none">
        
        <div className="mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface-strong text-[11px] font-mono font-bold tracking-widest uppercase text-ink">
            The Villain
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl font-heading font-black text-ink tracking-tighter leading-[1.05] mb-8 drop-shadow-sm">
          Raw LLMs are fast.<br />
          <span className="text-body font-medium tracking-tight">But they are chaotic.</span>
        </h2>

        <p className="text-xl md:text-2xl text-body font-sans leading-relaxed max-w-2xl mx-auto backdrop-blur-sm bg-canvas/30 py-2 rounded-xl">
          AI guesses hex codes. It hallucinates database schemas. It ignores your routing rules. 
          You spend more time fixing <span className="font-mono text-ink bg-surface-strong px-2 py-1 rounded">AI Slop</span> than actually writing features.
        </p>

      </motion.div>
    </section>
  );
}
