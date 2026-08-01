"use client";

import React from "react";
import Image from "next/image";

const LOGOS = [
  { name: "Claude Code", src: "/ai/claude.png" },
  { name: "Cursor", src: "/ai/cursor.png" },
  { name: "Windsurf", src: "/ai/windsurf.svg" }, // Windsurf svg
  { name: "GitHub Copilot", src: "/ai/github.png" },
  { name: "Gemini", src: "/ai/gemini.png" },
  { name: "OpenAI Codex", src: "/ai/codex.png" },
];

export default function SupportedAI() {
  return (
    <section className="w-full bg-canvas py-12 border-b border-hairline overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-canvas to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-canvas to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col items-center justify-center mb-8">
        <p className="text-[10px] font-mono font-bold tracking-widest uppercase text-body opacity-50">
          Native Architecture Support For
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden">
        <div className="flex min-w-full animate-marquee gap-16 md:gap-32 items-center justify-around px-8 md:px-16">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
            <div key={index} className="flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer min-w-max">
              <div className="relative w-12 h-12 md:w-16 md:h-16">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-bold text-ink whitespace-nowrap hidden md:block">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
