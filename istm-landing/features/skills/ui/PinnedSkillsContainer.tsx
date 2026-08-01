"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Carousel3D } from "./Carousel3D";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function PinnedSkillsContainer({ categories }: { categories: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!containerRef.current || categories.length === 0) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: `+=${categories.length * 1200}`,
      }
    });

    panelsRef.current.forEach((panel, i) => {
      if (i !== 0 && panel) {
        gsap.set(panel, { opacity: 0, y: 150, scale: 0.95 });
      }
    });

    panelsRef.current.forEach((panel, i) => {
      if (!panel) return;
      
      if (i !== categories.length - 1) {
        const nextPanel = panelsRef.current[i + 1];
        
        tl.to(panel, {
          opacity: 0,
          y: -150,
          scale: 0.95,
          duration: 1,
          ease: "none"
        }, "+=0.5"); 

        if (nextPanel) {
          tl.to(nextPanel, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "none"
          }, "<");
        }
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full h-screen relative flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-7xl h-full flex items-center justify-center px-6">
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            ref={el => { panelsRef.current[idx] = el; }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            style={{ zIndex: categories.length - idx }}
          >
            <div className="w-full pointer-events-auto flex flex-col items-center mt-20">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-16 text-center drop-shadow-lg">
                {cat.title}
              </h2>
              <Carousel3D items={cat.skills} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
