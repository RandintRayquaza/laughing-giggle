"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { showcaseSkills } from "../constants/skills";
import { motion } from "framer-motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Features() {
  const outerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !scrollWrapperRef.current) return;
    
    // Get total width of scroll content
    const wrapperWidth = scrollWrapperRef.current.scrollWidth;
    const windowWidth = window.innerWidth;
    
    // Horizontal scroll timeline
    gsap.to(scrollWrapperRef.current, {
      x: -(wrapperWidth - windowWidth),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1, // Smooth scrubbing
        end: () => `+=${wrapperWidth}`,
        anticipatePin: 1,
      }
    });

    // Reveal animations for each card as they enter the screen horizontally
    const cards = gsap.utils.toArray(".horizontal-card") as HTMLElement[];
    cards.forEach((card) => {
      gsap.fromTo(card.querySelector(".card-content"), {
        opacity: 0,
        x: 100,
        scale: 0.9,
      }, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "left 80%",
          containerAnimation: gsap.getById(scrollWrapperRef.current?.id || ""), // Link to horizontal scroll
        }
      });
    });

  }, { scope: outerRef });

  return (
    <div ref={outerRef} className="w-full relative">
      <section 
        ref={containerRef} 
        className="relative z-20 w-full h-screen bg-canvas overflow-hidden border-t border-hairline-strong flex flex-col"
      >
      
      {/* Header Overlay (Stays static while cards scroll beneath) */}
      <div className="absolute top-0 left-0 w-full p-8 md:p-12 z-30 pointer-events-none flex justify-between items-start mix-blend-difference">
        <div className="flex flex-col text-white">
          <span className="px-3 py-1 rounded-full border border-white/20 text-[10px] font-mono tracking-widest uppercase self-start mb-4">
            Intelligence Registry
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-sm">
            Core Blueprints
          </h2>
        </div>
      </div>

      {/* Horizontal Scrolling Wrapper */}
      <div 
        ref={scrollWrapperRef}
        id="horizontal-scroll"
        className="flex h-full w-[600vw] lg:w-[300vw] items-center"
      >
        {showcaseSkills.map((skill, index) => (
          <div 
            key={skill.command}
            className="horizontal-card relative w-screen lg:w-[50vw] h-full flex items-center justify-center p-6 md:p-12 border-r border-hairline-strong"
          >
            {/* Background Index Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
              <span className="text-[40vw] lg:text-[20vw] font-black font-sans leading-none tracking-tighter">
                0{index + 1}
              </span>
            </div>

            {/* Interactive Content Card */}
            <div className="card-content w-full h-[60vh] max-h-[600px] bg-surface-card rounded-[2.5rem] shadow-xl border border-hairline-strong flex flex-col relative overflow-hidden group">
              
              {/* Top Banner */}
              <div className="h-16 border-b border-hairline-strong flex items-center justify-between px-8 bg-canvas-soft shrink-0">
                <span className="font-mono text-xs font-bold text-ink uppercase tracking-widest">
                  {skill.category}
                </span>
                <span className="font-mono text-xs text-text-link bg-text-link/10 px-3 py-1 rounded-full font-bold">
                  {skill.command}
                </span>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col p-8 md:p-12 relative z-10 justify-between">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-ink tracking-tight mb-4 group-hover:text-text-link transition-colors duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-lg text-body font-medium max-w-md leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Custom Interaction Zone per Skill */}
                <div className="w-full mt-8 pt-8 border-t border-hairline-strong relative h-32 flex items-center justify-center">
                  
                  {/* If istm-animate, show spring physics demo */}
                  {skill.command === "/istm-animate" && (
                    <div className="flex gap-4">
                      <motion.div drag dragConstraints={{ top: -20, left: -20, right: 20, bottom: 20 }} className="w-12 h-12 rounded-full bg-text-link shadow-lg cursor-grab active:cursor-grabbing" />
                      <motion.div drag dragConstraints={{ top: -20, left: -20, right: 20, bottom: 20 }} dragElastic={0.8} className="w-12 h-12 rounded-xl bg-semantic-success shadow-lg cursor-grab active:cursor-grabbing" />
                      <motion.div drag dragConstraints={{ top: -20, left: -20, right: 20, bottom: 20 }} dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }} className="w-12 h-12 rotate-45 bg-accent-warning shadow-lg cursor-grab active:cursor-grabbing" />
                    </div>
                  )}

                  {/* If istm-schema-design, show NoSQL MongoDB nodes */}
                  {skill.command === "/istm-schema-design" && (
                    <div className="flex items-center gap-2">
                      <div className="px-4 py-2 rounded-xl border border-hairline bg-canvas font-mono text-[10px] shadow-sm">MongoDB Document</div>
                      <div className="h-px w-8 bg-hairline-strong relative"><div className="absolute inset-0 bg-text-link animate-pulse" /></div>
                      <div className="px-4 py-2 rounded-xl border border-hairline bg-canvas font-mono text-[10px] shadow-sm">Prisma ORM</div>
                    </div>
                  )}

                  {/* Default: Context Snippet */}
                  {skill.command !== "/istm-animate" && skill.command !== "/istm-schema-design" && (
                    <div className="w-full h-full bg-surface-dark-elevated rounded-xl p-4 overflow-hidden border border-white/5">
                      <pre className="font-mono text-[10px] text-[#cfe7ff] opacity-80 whitespace-pre-wrap">
                        {skill.snippet}
                      </pre>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}
