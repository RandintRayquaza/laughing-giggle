"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { GooeyInput } from "@/components/ui/gooey-input";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CtaSection() {
  const container = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");

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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-b from-surface-dark/5 to-transparent blur-[100px] rounded-full pointer-events-none" />

      <div className="cta-content max-w-4xl w-full text-center flex flex-col items-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-ink tracking-tight mb-8">
          Ready to equip <br className="hidden md:block"/> your AI?
        </h2>
        <p className="text-xl text-body font-medium mb-12 max-w-2xl">
          Stop writing context prompts. Start injecting architecture. Install the registry and build master-class software today.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-lg mx-auto">
          <div className="flex-1 w-full relative z-10">
            <GooeyInput 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Join the waitlist..."
              className="w-full"
            />
          </div>
          
          <div className="relative z-20">
            <MagneticButton className="h-[52px] px-8 rounded-full bg-ink text-white font-bold flex items-center justify-center shadow-[0_0_20px_rgba(23,23,23,0.2)]">
              <span>Get Access</span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
