"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { CardStack } from "@/components/ui/card-stack";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ARCHITECTURE_CARDS = [
  {
    id: 1,
    name: "Routing Layer",
    designation: "src/routes/",
    content: <div className="text-sm font-mono text-ink leading-relaxed">Deterministic framework-agnostic routing rules. No hallucinatory navigation or missing layouts.</div>,
  },
  {
    id: 2,
    name: "Domain Isolation",
    designation: "src/features/",
    content: <div className="text-sm font-mono text-ink leading-relaxed">Strict separation of concerns. UI, API, and Hooks stay perfectly isolated per feature.</div>,
  },
  {
    id: 3,
    name: "Tokenized UI",
    designation: "ui/AnimatedCard.tsx",
    content: <div className="text-sm font-mono text-ink leading-relaxed">Forced inheritance of the global Design System. No hardcoded colors allowed.</div>,
  },
];

export default function SystemDesign() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Interaction states
  const [layoutState, setLayoutState] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      }
    });

    tl.from(".knowledge-header", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out"
    })
    .from(".bento-card", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "expo.out"
    }, "-=0.6");

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      id="knowledge-graph"
      className="relative z-20 w-full bg-canvas text-ink py-32 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.05)] border-t border-hairline overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-6 relative z-10 flex flex-col gap-20">
        
        {/* Header - Awwwards Style Copy */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <span className="knowledge-header inline-block px-4 py-1.5 rounded-full bg-surface-dark-elevated text-[10px] font-mono font-bold tracking-widest uppercase text-white shadow-sm">
            Context As A Service
          </span>
          <h2 className="knowledge-header text-5xl md:text-7xl font-black tracking-tighter text-ink leading-[1.05]">
            Raw LLMs hallucinate.<br />
            <span className="text-text-link">
              ISTM engineers.
            </span>
          </h2>
          <p className="knowledge-header text-xl text-body font-medium max-w-2xl mx-auto">
            Before a single line is written, the Context Engine injects strict tokens, deterministic routing, and Awwwards-tier UI physics. We don't guess hex codes. We enforce system architecture.
          </p>
        </div>

        {/* True Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 w-full md:h-[600px]">
          
          {/* Card 1: The Blueprint (Spans 2 cols, 2 rows) */}
          <div className="bento-card relative md:col-span-2 md:row-span-2 rounded-[2rem] border border-border/50 bg-surface-card p-2">
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
            <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-[1.5rem] border border-hairline-soft bg-surface-card p-8 shadow-sm">
              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="text-3xl font-black text-ink tracking-tight">The Architecture</h3>
                <p className="text-sm text-body font-mono">Trained on `architecture.md`</p>
              </div>
              
              <div className="flex-1 flex items-center justify-center relative z-10">
                {/* ACETERNITY COMPONENT: CARD STACK */}
                <CardStack items={ARCHITECTURE_CARDS} offset={15} scaleFactor={0.08} />
              </div>
              
              <p className="text-sm text-body-strong relative z-10">
                ISTM forces the AI to respect your exact framework architecture and feature-based domain isolation. No more monolithic 800-line files.
              </p>
            </div>
          </div>

          {/* Card 2: Color Theory (Spans 2 cols, 1 row) */}
          <div 
            onMouseMove={handleMouseMove}
            className="bento-card relative md:col-span-2 md:row-span-1 min-h-[250px] rounded-[2rem] border border-border/50 bg-surface-card p-2"
          >
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] border border-hairline-soft bg-surface-card p-6 shadow-sm">
              <motion.div 
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  background: useTransform(
                    [glowX, glowY],
                    ([x, y]) => `radial-gradient(circle 300px at ${x}px ${y}px, #000000, transparent 80%)`
                  )
                }}
              />
              
              <div className="flex justify-between items-start relative z-10">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-ink">Design Tokens</h3>
                  <PointerHighlight
                    rectangleClassName="border-text-link"
                    pointerClassName="text-text-link"
                  >
                    <p className="text-sm text-body-strong font-medium tracking-tight px-1">Strict Token Interpolation.</p>
                  </PointerHighlight>
                </div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-semantic-success border border-border" />
                  <div className="w-6 h-6 rounded-full bg-text-link border border-border" />
                  <div className="w-6 h-6 rounded-full bg-surface-dark border border-border" />
                </div>
              </div>
              
              <p className="text-sm text-body-strong relative z-10 max-w-[80%] mt-auto">
                Semantic variables replace hardcoded hex values, ensuring perfect light/dark mode alignment.
              </p>
            </div>
          </div>

          {/* Card 3: Core Motion (Spans 1 col, 1 row) */}
          <div className="bento-card relative md:col-span-1 md:row-span-1 min-h-[250px] rounded-[2rem] border border-border/50 bg-surface-card p-2">
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] border border-hairline-soft bg-surface-card p-6 shadow-sm">
              <div className="flex flex-col gap-1 relative z-10">
                <h3 className="text-xl font-bold text-ink">Physics</h3>
                <p className="text-[10px] text-body font-mono">`core_motion.md`</p>
              </div>
              
              <div className="flex-1 flex items-center justify-center relative z-10">
                <motion.div 
                  drag
                  dragConstraints={{ top: -40, left: -40, right: 40, bottom: 40 }}
                  dragElastic={0.8}
                  dragTransition={{ bounceStiffness: 400, bounceDamping: 15 }}
                  whileDrag={{ scale: 1.25, rotate: 10, cursor: "grabbing" }}
                  whileHover={{ scale: 1.05 }}
                  className="w-16 h-16 rounded-[1.2rem] bg-gradient-to-br from-text-link to-accent-preview text-white shadow-xl shadow-text-link/20 flex items-center justify-center cursor-grab"
                >
                  <span className="opacity-90 text-xs font-bold tracking-widest uppercase">Pull</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Card 4: Layout Rules (Spans 1 col, 1 row) */}
          <div 
            onClick={() => setLayoutState((prev) => (prev + 1) % 3)}
            className="bento-card relative md:col-span-1 md:row-span-1 min-h-[250px] rounded-[2rem] border border-border/50 bg-surface-card p-2 cursor-pointer"
          >
            <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] border border-hairline-soft bg-surface-card p-6 shadow-sm hover:bg-canvas-soft transition-colors">
              <div className="flex flex-col gap-1 relative z-10 pointer-events-none">
                <h3 className="text-xl font-bold text-ink">Whitespace</h3>
                <p className="text-[10px] text-body font-mono">Click to iterate</p>
              </div>
              
              <div className="flex-1 flex flex-col justify-center gap-2 relative z-10 pointer-events-none mt-4">
                <motion.div layout className="w-full bg-body/10 rounded-md" animate={{ height: layoutState === 0 ? 30 : layoutState === 1 ? 10 : 40 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} />
                <div className="flex gap-2">
                  <motion.div layout className="bg-body/10 rounded-md" animate={{ flex: layoutState === 0 ? 1 : layoutState === 1 ? 2 : 1, height: 20 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} />
                  <motion.div layout className="bg-body/10 rounded-md" animate={{ flex: layoutState === 0 ? 1 : layoutState === 1 ? 0.5 : 1, height: 20 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
