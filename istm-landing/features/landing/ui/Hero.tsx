"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Background Image Scale-in
    gsap.from(".bg-image", {
      scale: 1.05,
      opacity: 0,
      duration: 2,
      ease: "power3.out"
    });

    // Staggered Hero Elements
    gsap.from(".hero-elem", {
      y: 40,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
      delay: 0.6
    });
  }, { scope: container });

  return (
    <div ref={container} className="relative flex-1 flex flex-col items-center justify-center w-full">
      <div className="bg-image absolute inset-0 z-0">
        <Image
          src="/image.png"
          alt="Pixel Art Landscape"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <section className="relative z-10 w-full px-4 text-center mt-[-40px] flex flex-col items-center">
        <div className="max-w-3xl w-full px-4 flex flex-col items-center">
          
          <h1 className="hero-elem text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
            Equip your AI with <br className="hidden md:block" />
            master-class skills.
          </h1>
          
          <p className="hero-elem text-lg md:text-xl text-white/95 max-w-xl font-medium leading-relaxed mb-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            The open-source registry for agentic context. <br className="hidden md:block" />
            Install production-ready architectures, UI tokens, and schemas instantly via the command line.
          </p>

          <div className="hero-elem flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="#install" 
              className="h-11 px-8 rounded-md bg-text-link hover:bg-text-link-secondary text-white font-semibold flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Started
            </Link>
            
            <div className="h-11 px-5 rounded-md bg-surface-dark/60 backdrop-blur-md border border-white/10 flex items-center justify-between gap-4 font-mono text-sm text-white/90">
              <span className="opacity-50">$</span>
              <span>npx @istmx/skills init</span>
              <button 
                className="opacity-70 hover:opacity-100 transition-opacity ml-2"
                aria-label="Copy to clipboard"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
