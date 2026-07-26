"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { showcaseSkills } from "../constants/skills";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { 
  IconTerminal2, 
  IconEaseInOut, 
  IconDatabase, 
  IconShieldLock, 
  IconPalette, 
  IconLayoutGrid 
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const getIconForSkill = (command: string) => {
  switch (command) {
    case "/istm-architecture": return <IconTerminal2 className="w-4 h-4 text-text-link" />;
    case "/istm-animate": return <IconEaseInOut className="w-4 h-4 text-text-link" />;
    case "/istm-schema-design": return <IconDatabase className="w-4 h-4 text-text-link" />;
    case "/istm-system-design": return <IconShieldLock className="w-4 h-4 text-text-link" />;
    case "/istm-design": return <IconPalette className="w-4 h-4 text-text-link" />;
    case "/istm-awwward-designer": return <IconLayoutGrid className="w-4 h-4 text-text-link" />;
    default: return <IconTerminal2 className="w-4 h-4 text-text-link" />;
  }
};

const SkeletonArchitecture = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-dot-black/[0.2] border border-hairline-strong bg-canvas-soft items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-canvas-soft to-transparent z-10" />
    <PointerHighlight>
      <div className="font-mono text-[10px] text-body-strong bg-white shadow-sm p-4 rounded border border-hairline">
        pages/ <br />
        ├── (auth)/ <br />
        │   ├── login/ <br />
        │   └── register/ <br />
        └── dashboard/
      </div>
    </PointerHighlight>
  </div>
);

const SkeletonDesign = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-hairline-strong bg-canvas-soft items-center justify-center">
    <div className="flex gap-2">
      <div className="w-8 h-8 rounded-full bg-text-link" />
      <div className="w-8 h-8 rounded-full bg-semantic-error" />
      <div className="w-8 h-8 rounded-full bg-accent-warning" />
      <div className="w-8 h-8 rounded-full bg-semantic-success" />
    </div>
  </div>
);

const SkeletonAnimate = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-hairline-strong bg-canvas-soft items-center justify-center p-4 relative">
    <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
    <motion.div
      animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="w-16 h-16 bg-surface-dark-elevated rounded-2xl shadow-xl flex items-center justify-center"
    >
      <span className="font-mono text-xs text-white">GSAP</span>
    </motion.div>
  </div>
);

const SkeletonAwwwards = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-surface-dark items-center justify-center overflow-hidden">
    <TextHoverEffect text="SOTD" />
  </div>
);

const SkeletonSchema = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-hairline-strong bg-canvas-soft items-center justify-center">
    <div className="font-mono text-[10px] text-text-link p-4 bg-text-link/10 rounded-xl border border-text-link/20">
      model User {'{'} <br/>
      &nbsp;&nbsp;id String @id <br/>
      &nbsp;&nbsp;email String @unique <br/>
      {'}'}
    </div>
  </div>
);

const SkeletonSystem = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-hairline-strong bg-canvas-soft items-center justify-center p-4">
    <div className="flex flex-col gap-2 w-full">
      <div className="h-4 w-full bg-surface-card border border-hairline rounded animate-pulse" />
      <div className="h-4 w-3/4 bg-surface-card border border-hairline rounded animate-pulse" />
      <div className="h-4 w-1/2 bg-surface-card border border-hairline rounded animate-pulse" />
    </div>
  </div>
);

const getHeaderForSkill = (command: string) => {
  switch (command) {
    case "/istm-architecture": return <SkeletonArchitecture />;
    case "/istm-design": return <SkeletonDesign />;
    case "/istm-animate": return <SkeletonAnimate />;
    case "/istm-awwward-designer": return <SkeletonAwwwards />;
    case "/istm-schema-design": return <SkeletonSchema />;
    case "/istm-system-design": return <SkeletonSystem />;
    default: return <SkeletonSystem />;
  }
};

export default function Features() {
  return (
    <section className="relative z-20 w-full bg-canvas py-32 border-t border-hairline flex flex-col items-center">
      <div className="max-w-7xl w-full px-6 mb-20 text-center flex flex-col items-center">
        <span className="px-4 py-1.5 rounded-full bg-surface-dark-elevated text-[10px] font-mono font-bold tracking-widest uppercase text-white shadow-sm mb-6">
          Intelligence Registry
        </span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-ink max-w-3xl leading-[1.05]">
          A library of strict <br/>
          <span className="text-text-link">architectural primitives.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-lg font-medium text-body">
          Every feature we enforce is accessible via a dedicated slash command. Here are the core skills injected directly into your AI&apos;s brain.
        </p>
      </div>

      <BentoGrid className="w-full px-6 max-w-7xl mx-auto">
        {showcaseSkills.map((skill, i) => (
          <BentoGridItem
            key={i}
            title={skill.title}
            description={skill.description}
            header={getHeaderForSkill(skill.command)}
            icon={getIconForSkill(skill.command)}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
