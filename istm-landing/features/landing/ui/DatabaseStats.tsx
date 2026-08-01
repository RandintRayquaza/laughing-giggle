"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const STATS = [
  { value: 9, suffix: "", label: "Engineering Stages", desc: "Scope → Architect → Develop → Verify" },
  { value: 150, suffix: "+", label: "Architectural Rules", desc: "Strict domain isolation & routing" },
  { value: 60, suffix: "fps", label: "Hardware Physics", desc: "GSAP & Framer Motion curves" },
  { value: 95, suffix: "+", label: "Semantic Tokens", desc: "Glassmorphism & True Dark Mode" },
];

const AnimatedCounter = ({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const springValue = useSpring(from, { damping: 30, stiffness: 60, bounce: 0 });

  useEffect(() => {
    if (inView) {
      springValue.set(to);
    }
  }, [inView, springValue, to]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
  }, [springValue]);

  return <span ref={ref}>{from}</span>;
};

export default function DatabaseStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] as any,
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={containerRef} className="relative z-20 w-full bg-canvas py-32 border-t border-hairline overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="flex-1 space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-text-link/10 border border-text-link/20 text-[10px] font-mono font-bold tracking-widest uppercase text-text-link shadow-sm">
              Context As A Service
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-ink leading-[1.05]">
              Raw LLMs hallucinate. <br />
              <span className="text-text-link">ISTM engineers.</span>
            </h2>
            <p className="text-lg text-body font-medium max-w-xl">
              Before a single line is written, the Context Engine injects strict tokens, deterministic routing, and Awwwards-tier UI physics. We don't guess hex codes. We enforce system architecture.
            </p>
          </div>
          <div className="flex-1 w-full flex justify-end">
            {/* Visual element or decorative abstract shape could go here */}
          </div>
        </div>

        <motion.div 
          style={{ scale, opacity }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="relative overflow-hidden rounded-3xl border border-hairline-strong bg-surface-card p-8 group">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
              <div className="relative z-10 flex flex-col gap-2">
                <span className="text-5xl md:text-6xl font-black text-ink tracking-tighter group-hover:text-text-link transition-colors duration-300">
                  <AnimatedCounter from={0} to={stat.value} />
                  {stat.suffix}
                </span>
                <span className="text-xl font-bold text-ink mt-2">
                  {stat.label}
                </span>
                <span className="text-sm font-medium text-body">
                  {stat.desc}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
