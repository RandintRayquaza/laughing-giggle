"use client";

import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { MagneticWrapper } from "@/components/ui/magnetic-wrapper";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] min-h-[500px] flex flex-col justify-end items-center border-t border-[#1a1a1a] pb-12 relative overflow-hidden">
      
      {/* Massive Hero Text */}
      <div className="absolute inset-0 flex items-center justify-center pt-8 overflow-hidden z-0">
        <div className="w-[120%] md:w-full h-[300px] md:h-full cursor-default flex items-center justify-center">
          <TextHoverEffect text="ISTM" />
        </div>
      </div>

      {/* Social Links Data Layer */}
      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-8 mt-auto pt-[400px] pointer-events-none">
        
        <div className="text-white/40 text-sm font-medium pointer-events-auto">
          © {new Date().getFullYear()} ISTM. All rights reserved.
        </div>

        <div className="flex items-center gap-6 md:gap-10 pointer-events-auto">
          <MagneticWrapper>
            <a href="https://x.com/Istm_x" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0d74ce] transition-colors text-xs md:text-sm font-bold uppercase tracking-wider block p-2">
              X (Twitter)
            </a>
          </MagneticWrapper>

          <MagneticWrapper>
            <a href="https://instagram.com/aryan._xf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ffbd2e] transition-colors text-xs md:text-sm font-bold uppercase tracking-wider block p-2">
              Instagram
            </a>
          </MagneticWrapper>

          <MagneticWrapper>
            <a href="https://github.com/istmX" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#27c93f] transition-colors text-xs md:text-sm font-bold uppercase tracking-wider block p-2">
              GitHub
            </a>
          </MagneticWrapper>

          <MagneticWrapper>
            <a href="https://linkedin.com/in/aryan-xf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#47c2ff] transition-colors text-xs md:text-sm font-bold uppercase tracking-wider block p-2">
              LinkedIn
            </a>
          </MagneticWrapper>
        </div>

      </div>
    </footer>
  );
}
