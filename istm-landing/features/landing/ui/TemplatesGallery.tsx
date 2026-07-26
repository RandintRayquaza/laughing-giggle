"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { IconExternalLink, IconCode } from "@tabler/icons-react";

const TEMPLATES = [
  {
    id: 1,
    title: "SaaS Analytics Dashboard",
    category: "SaaS",
    style: "Glassmorphism + Flat Design",
    mode: "☀️ Light",
  },
  {
    id: 2,
    title: "AI Chatbot Platform",
    category: "AI/Chatbot",
    style: "AI-Native UI + Minimalism",
    mode: "☀️ Light",
  },
  {
    id: 3,
    title: "Fintech Crypto Dashboard",
    category: "Fintech/Crypto",
    style: "Glassmorphism + OLED",
    mode: "🌙 Dark",
  },
  {
    id: 4,
    title: "Luxury E-commerce",
    category: "E-commerce",
    style: "Liquid Glass + Minimal",
    mode: "☀️ Light",
  },
  {
    id: 5,
    title: "Educational Platform",
    category: "Education",
    style: "Claymorphism + Block-based",
    mode: "☀️ Light",
  },
  {
    id: 6,
    title: "Pet Grooming & Spa",
    category: "Pet Services",
    style: "Vibrant & Playful",
    mode: "☀️ Light",
  },
];

const CATEGORIES = ["All", "SaaS", "AI/Chatbot", "Fintech/Crypto", "E-commerce", "Education", "Pet Services"];

export default function TemplatesGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTemplates = TEMPLATES.filter(
    (t) => activeCategory === "All" || t.category === "activeCategory" || t.category === activeCategory
  );

  return (
    <section className="relative z-20 w-full bg-canvas py-32 border-t border-hairline overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <span className="px-4 py-1.5 rounded-full bg-surface-dark-elevated text-[10px] font-mono font-bold tracking-widest uppercase text-white shadow-sm mb-6">
            Production Ready
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-ink leading-[1.05] max-w-3xl">
            Real-world websites. <br />
            <span className="text-text-link">Built by ISTM.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg font-medium text-body">
            Browse our gallery of production-ready templates built natively with Shadcn UI and Aceternity UI. 
            All injected directly via the ISTM knowledge base.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-text-link text-white shadow-lg shadow-text-link/20"
                  : "bg-surface-card text-body hover:text-ink border border-hairline-strong hover:border-text-link/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTemplates.map((template) => (
              <motion.div
                key={template.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[2rem] border border-hairline-strong bg-surface-card"
              >
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
                
                {/* Image Placeholder */}
                <div className="w-full h-48 bg-canvas-soft border-b border-hairline-strong relative overflow-hidden flex items-center justify-center group-hover:bg-canvas transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-mono text-sm text-body opacity-30 font-bold uppercase tracking-widest">
                    Template Upload Pending
                  </span>
                  
                  {/* Hover Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm bg-surface-dark/40">
                    <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                      <IconExternalLink className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-surface-dark-elevated text-white border border-white/20 flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                      <IconCode className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-text-link bg-text-link/10 px-2 py-1 rounded">
                      {template.category}
                    </span>
                    <span className="text-[10px] font-mono text-body-strong">
                      {template.mode}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-ink mb-1 group-hover:text-text-link transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-xs font-mono text-body">
                    {template.style}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-4 rounded-xl bg-surface-dark-elevated text-white font-bold text-sm border border-white/10 shadow-xl hover:scale-105 transition-transform">
            Load More Templates
          </button>
        </div>

      </div>
    </section>
  );
}
