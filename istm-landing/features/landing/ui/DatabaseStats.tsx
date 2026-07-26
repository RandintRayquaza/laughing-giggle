"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const STATS = [
  { value: "45+", label: "UI Styles", desc: "Glassmorphism, Neumorphism, Brutalism" },
  { value: "90+", label: "Color Systems", desc: "Product-specific scalable palettes" },
  { value: "50+", label: "Font Pairings", desc: "Google Fonts & Tailwind typography" },
  { value: "8+", label: "Tech Stacks", desc: "Next.js, React, Vue, Svelte, Tailwind" },
  { value: "30+", label: "Layout Patterns", desc: "Conversion-optimized SaaS layouts" },
  { value: "100+", label: "UX Rules", desc: "A11y, Performance, Loading States" },
];

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
              The Intelligence Registry
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-ink leading-[1.05]">
              Everything you need for <br />
              <span className="text-body opacity-50">beautiful UI.</span>
            </h2>
            <p className="text-lg text-body font-medium max-w-xl">
              ISTM isn't just a router. It's a massive, searchable database of design intelligence. We inject strict rules into your AI to generate Awwwards-tier interfaces on the first prompt.
            </p>
          </div>
          <div className="flex-1 w-full flex justify-end">
            {/* Visual element or decorative abstract shape could go here */}
          </div>
        </div>

        <motion.div 
          style={{ scale, opacity }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="relative overflow-hidden rounded-3xl border border-hairline-strong bg-surface-card p-8 group">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
              <div className="relative z-10 flex flex-col gap-2">
                <span className="text-5xl md:text-6xl font-black text-ink tracking-tighter group-hover:text-text-link transition-colors duration-300">
                  {stat.value}
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
