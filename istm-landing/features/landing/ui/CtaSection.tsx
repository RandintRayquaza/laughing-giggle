"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MagneticButton } from "@/components/ui/magnetic-button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}
export default function CtaSection() {
  const container = useRef<HTMLDivElement>(null);
  const [isCopied, setIsCopied] = useState(false);

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

  const handleCopy = () => {
    navigator.clipboard.writeText("npx @istmx/skills init");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section ref={container} className="w-full bg-canvas py-40 px-4 flex flex-col items-center relative z-20 border-t border-hairline-strong overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-gradient-to-b from-surface-dark/5 to-transparent blur-[100px] rounded-full pointer-events-none" />

      <div className="cta-content max-w-4xl w-full text-center flex flex-col items-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-ink tracking-tight mb-8">
          The Open-Source <br className="hidden md:block"/> Context Engine
        </h2>
        <p className="text-xl text-body font-medium mb-12 max-w-2xl">
          Stop writing context prompts. Start injecting architecture. Install the `@istmx/skills` registry and build master-class software today.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full max-w-2xl mx-auto">
          
          <div className="relative z-20 shrink-0">
            <MagneticButton>
              <a href="https://github.com/istmX/skills" target="_blank" rel="noopener noreferrer" className="h-[52px] px-8 rounded-md bg-text-link hover:bg-text-link-secondary text-white font-semibold flex items-center justify-center shadow-[0_0_15px_rgba(13,116,206,0.5)] transition-colors active:scale-95 gap-2">
                <span>Contribute on GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>
            </MagneticButton>
          </div>

          <div className="flex-1 max-w-[280px] w-full relative z-10">
            <button 
              onClick={handleCopy}
              className="w-full h-[52px] px-5 rounded-md bg-surface-dark/5 hover:bg-surface-dark/10 border border-hairline-strong hover:border-ink/20 flex items-center justify-between gap-4 font-mono text-sm text-ink transition-all active:scale-95 cursor-pointer group"
              aria-label="Copy install command"
            >
              <span className="opacity-50 group-hover:opacity-70 transition-opacity">$</span>
              <span className="font-semibold text-[13px]">npx @istmx/skills init</span>
              <div className="opacity-70 group-hover:opacity-100 transition-opacity ml-2">
                {isCopied ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_4px_rgba(22,163,74,0.4)]">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                  </svg>
                )}
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
