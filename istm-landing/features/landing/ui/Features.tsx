"use client";

import React, { useEffect, useRef, useId } from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconRouteAltLeft, IconTerminal2 } from "@tabler/icons-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Features() {
  const outerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".feature-card", {
      scrollTrigger: {
        trigger: outerRef.current,
        start: "top 75%",
      },
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out"
    });
    
    gsap.from(".feature-header", {
      scrollTrigger: {
        trigger: outerRef.current,
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  }, { scope: outerRef });

  return (
    <div ref={outerRef} className="w-full relative">
      <section ref={containerRef} className="relative z-20 w-full bg-canvas py-32 border-t border-hairline overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="feature-header flex flex-col items-center text-center mb-20">
            <span className="px-4 py-1.5 rounded-full bg-surface-dark-elevated text-[10px] font-mono font-bold tracking-widest uppercase text-white shadow-sm mb-6">
              The Intelligence Registry
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-ink leading-[1.05] max-w-4xl">
              Deterministic by design. <br className="hidden md:block"/>
              <span className="text-text-link">Zero hallucinations.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-medium text-body">
              Every feature we enforce is accessible via a dedicated slash command. We built ISTM to force generative models into strict architectural constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:auto-rows-[420px]">
            
            {/* CARD 1: istm-design */}
            <FeatureCard className="feature-card md:col-span-4 bg-surface-card border-hairline shadow-sm">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
              <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
                <GridPattern className="absolute inset-0 h-full w-full opacity-[0.03] text-ink mix-blend-overlay pointer-events-none" />
              </div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <FeatureCommand>/istm-design</FeatureCommand>
                  <FeatureTitle>Strict Token Interpolation</FeatureTitle>
                  <FeatureDescription>
                    AI naturally outputs hardcoded colors. We intercept and map every value to your global design system, ensuring perfect light/dark mode alignment.
                  </FeatureDescription>
                </div>
                
                <div className="flex-1 w-full flex items-end justify-start pb-4 pt-8">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -20, scale: 1.05, rotate: Math.random() * 10 - 5, zIndex: 50 }}
                        className="w-24 h-32 rounded-xl bg-canvas border border-hairline-strong shadow-lg flex items-center justify-center relative overflow-hidden cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/[0.02]" />
                        <span className="font-mono text-[10px] font-bold text-body-strong">var(--token)</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </FeatureCard>

            {/* CARD 2: istm-schema-design */}
            <FeatureCard className="feature-card md:col-span-2 bg-surface-dark-elevated border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <FeatureCommand>/istm-schema-design</FeatureCommand>
                  <FeatureTitle className="text-white">Global Database Sync</FeatureTitle>
                  <FeatureDescription className="text-white/60">
                    Inject strict NoSQL/SQL schemas and ORM constraints simultaneously across all AI models.
                  </FeatureDescription>
                </div>
                <div className="flex-1 w-full relative flex items-center justify-center overflow-hidden pointer-events-none">
                  <Globe className="absolute -bottom-32 md:-bottom-24 -right-10 md:right-0 opacity-80" />
                </div>
              </div>
            </FeatureCard>

            {/* CARD 3: istm-animate */}
            <FeatureCard className="feature-card md:col-span-2 bg-text-link border-text-link shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <FeatureCommand className="bg-white/20 text-white border-white/30">/istm-animate</FeatureCommand>
                  <FeatureTitle className="text-white">Hardware Physics</FeatureTitle>
                  <FeatureDescription className="text-white/80">
                    Pre-configured GSAP and Framer Motion spring profiles that guarantee a 60fps tactile feel.
                  </FeatureDescription>
                </div>
                <div className="flex-1 w-full flex items-center justify-center">
                  <motion.div 
                    drag
                    dragConstraints={{ top: -20, left: -20, right: 20, bottom: 20 }}
                    dragElastic={0.5}
                    whileDrag={{ scale: 1.1, cursor: "grabbing" }}
                    className="w-16 h-16 rounded-full bg-white shadow-[0_10px_30px_rgba(255,255,255,0.3)] flex items-center justify-center cursor-grab"
                  >
                    <IconTerminal2 className="text-text-link w-6 h-6" />
                  </motion.div>
                </div>
              </div>
            </FeatureCard>

            {/* CARD 4: istm-architecture */}
            <FeatureCard className="feature-card md:col-span-4 bg-canvas-soft border-hairline-strong shadow-sm group">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-text-link/[0.02] to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <FeatureCommand>/istm-architecture</FeatureCommand>
                  <FeatureTitle>Deterministic Routing</FeatureTitle>
                  <FeatureDescription>
                    AI naturally hallucinates file paths. We enforce a strict Next.js App Router tree structure, eliminating broken imports permanently.
                  </FeatureDescription>
                </div>
                
                <div className="flex-1 w-full flex items-center justify-end pointer-events-none">
                  <div className="w-full max-w-sm h-32 rounded-lg border border-hairline bg-surface-card shadow-sm p-4 font-mono text-[10px] text-body-strong flex flex-col gap-2 relative overflow-hidden group-hover:border-text-link/30 transition-colors">
                    <div className="flex items-center gap-2">
                      <IconRouteAltLeft className="w-4 h-4 text-semantic-success" />
                      <span>src/app/(dashboard)/layout.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-50">
                      <IconRouteAltLeft className="w-4 h-4" />
                      <span>src/app/(dashboard)/page.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-50">
                      <IconRouteAltLeft className="w-4 h-4" />
                      <span>src/features/auth/ui/Login.tsx</span>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-surface-card to-transparent" />
                  </div>
                </div>
              </div>
            </FeatureCard>

          </div>
        </div>
      </section>
    </div>
  );
}

const FeatureCard = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("relative overflow-hidden rounded-[2rem] border p-8 transition-all duration-300", className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <h3 className={cn("text-2xl md:text-3xl font-bold tracking-tight text-ink mb-3", className)}>
      {children}
    </h3>
  );
};

const FeatureDescription = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <p className={cn("text-base font-medium text-body max-w-lg leading-relaxed", className)}>
      {children}
    </p>
  );
};

const FeatureCommand = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("inline-block mb-4 font-mono text-xs font-bold text-text-link px-3 py-1 rounded bg-text-link/10 border border-text-link/20", className)}>
      {children}
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;
    
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 4000,
      mapBrightness: 6,
      baseColor: [0.1, 0.1, 0.1],
      markerColor: [0.05, 0.45, 0.8],
      glowColor: [0.05, 0.05, 0.08],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state: any) => {
        state.phi = phi;
        phi += 0.005;
      },
    } as any);

    return () => globe.destroy();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

export function GridPattern({ className }: { className?: string }) {
  const patternId = useId();
  return (
    <svg aria-hidden="true" className={className}>
      <defs>
        <pattern id={patternId} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M.5 40V.5H40" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
