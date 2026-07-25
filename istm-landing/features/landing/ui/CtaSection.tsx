"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CtaSection() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".cta-content", {
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-canvas py-40 px-4 flex flex-col items-center relative z-20 border-t border-hairline-strong overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-sky-light/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="cta-content max-w-4xl text-center flex flex-col items-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-ink tracking-tight mb-8">
          Ready to equip <br className="hidden md:block"/> your AI?
        </h2>
        <p className="text-xl text-body font-medium mb-12 max-w-2xl">
          Stop writing context prompts. Start injecting architecture. Install the registry and build master-class software today.
        </p>
        <Link 
          href="https://github.com/istmX/skills"
          target="_blank"
          className="h-14 px-10 rounded-full bg-ink hover:bg-ink/80 text-white font-bold flex items-center justify-center transition-all shadow-[0_0_20px_rgba(23,23,23,0.2)] hover:shadow-[0_0_30px_rgba(23,23,23,0.4)] hover:-translate-y-1 active:scale-95 text-lg"
        >
          View Documentation
        </Link>
      </div>
    </section>
  );
}
