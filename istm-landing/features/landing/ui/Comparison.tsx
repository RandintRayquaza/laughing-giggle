"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Comparison() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Cinematic Orchestration Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      }
    });

    // 1. Reveal Header
    tl.from(".comp-header", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out"
    })
    // 2. The Problem (Chaos) slams in a bit messily
    .from(".comp-chaos", {
      y: 40,
      opacity: 0,
      rotation: -2,
      scale: 0.95,
      duration: 0.8,
      ease: "back.out(1.2)"
    }, "-=0.6")
    // 3. The Solution (Order) slides in smoothly and structured
    .from(".comp-order", {
      y: 40,
      opacity: 0,
      scale: 0.95,
      duration: 1.2,
      ease: "expo.out"
    }, "-=0.6")
    // 4. Stagger the Context Engine terminal lines (Progressive Disclosure)
    .from(".comp-order-line", {
      x: -20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power2.out"
    }, "-=0.4");

  }, { scope: container });

  return (
    <section 
      ref={container}
      id="comparison" 
      className="relative w-full min-h-screen py-32 bg-white text-black flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      <div className="max-w-6xl w-full flex flex-col gap-20 relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="comp-header text-5xl md:text-7xl font-black tracking-tighter text-black leading-tight">
            The future is <span className="text-text-link">System Design</span>,<br />not typing speed.
          </h2>
          <p className="comp-header text-xl md:text-2xl text-black/60 font-medium">
            Raw AI hallucinates architecture and writes generic code. 
            ISTM injects strict, Awwwards-level context directly into your IDE.
          </p>
        </div>

        {/* The Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          
          {/* Left: The Problem (Without Context) */}
          <motion.div 
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="comp-chaos flex flex-col gap-4"
          >
            <div className="flex items-center justify-between px-2">
              <span className="font-bold text-black/40 text-sm tracking-wider uppercase">Without ISTM</span>
              <span className="px-3 py-1 bg-red-100 text-red-600 text-[10px] font-black tracking-widest uppercase rounded-full">Chaos</span>
            </div>
            
            <div className="bg-[#f5f5f5] rounded-3xl p-8 border border-black/5 shadow-inner min-h-[450px] flex flex-col gap-6 font-mono text-sm text-black/60">
              {/* Mock Window Controls */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              
              <div>
                <span className="text-red-500 font-bold">&gt; User:</span> "Make me an awwwards website"
              </div>
              <div>
                <span className="text-black/80 font-bold">&lt; AI:</span> "Sure! Here is a 800-line React component with inline styles and no architecture."
              </div>
              
              {/* Bad Code Example */}
              <div className="mt-auto p-5 bg-white border border-red-200/50 rounded-xl text-xs sm:text-sm shadow-sm opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="text-purple-600 font-bold">export default function</span> App() {'{'} <br/>
                &nbsp;&nbsp;<span className="text-green-600/70 italic">// TODO: Refactor later (never happens)</span> <br/>
                &nbsp;&nbsp;<span className="text-blue-600 font-bold">return</span> ( <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;div style={'{'}{'{'} transition: 'all 0.3s' {'}'}{'}'}&gt; <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1 style={'{'}{'{'} color: 'red' {'}'}{'}'}&gt;Messy UI&lt;/h1&gt; <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt; <br/>
                &nbsp;&nbsp;);<br/>
                {'}'}
              </div>
            </div>
          </motion.div>

          {/* Right: The Solution (With Context) */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="comp-order flex flex-col gap-4"
          >
            <div className="flex items-center justify-between px-2">
              <span className="font-bold text-black text-sm tracking-wider uppercase">With ISTM Skills</span>
              <span className="px-3 py-1 bg-text-link/10 text-text-link text-[10px] font-black tracking-widest uppercase rounded-full">Structured</span>
            </div>
            
            <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] min-h-[450px] flex flex-col gap-6 font-mono text-sm text-white/70 relative overflow-hidden group">
              {/* Mock Window Controls */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 rounded-full bg-white/20 hover:bg-red-400 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-white/20 hover:bg-yellow-400 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-white/20 hover:bg-green-400 transition-colors" />
              </div>
              
              <div className="comp-order-line">
                <span className="text-blue-400 font-bold">&gt; npx @istmx/skills init</span>
              </div>
              
              <div className="flex flex-col gap-3 mt-2">
                <div className="comp-order-line text-emerald-400 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  Context Engine connected.
                </div>
                <div className="comp-order-line text-emerald-400 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  TanStack + Bun architecture enforced.
                </div>
                <div className="comp-order-line text-emerald-400 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  Design tokens & quality gates loaded.
                </div>
              </div>
              
              {/* Good Code Example */}
              <div className="comp-order-line mt-auto p-5 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm backdrop-blur-md relative z-10">
                <span className="text-white/40 italic"># The AI now acts like a Senior Architect:</span><br/>
                <span className="text-purple-400 font-bold">export default function</span> Hero() {'{'} <br/>
                &nbsp;&nbsp;<span className="text-blue-400 font-bold">return</span> ( <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;section className=<span className="text-yellow-300">"w-full h-dvh bg-surface-elevated"</span>&gt; <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1 className=<span className="text-yellow-300">"text-ink font-display"</span>&gt;Premium UI&lt;/h1&gt; <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/section&gt; <br/>
                &nbsp;&nbsp;);<br/>
                {'}'}
              </div>
              
              {/* Cinematic Glow that reacts to hover */}
              <motion.div 
                animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/20 blur-[100px] pointer-events-none rounded-full group-hover:bg-blue-400/30 transition-colors duration-700" 
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
