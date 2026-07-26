"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContextEngine() {
  const outerContainer = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const promptWords = "/istm-architect Build a collaborative code editor.".split(" ");

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=3500",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    tl.to(".prompt-word", {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "power2.out",
      duration: 1
    })
    
    tl.to(".prompt-container", {
      scale: 0.6,
      y: "-30vh",
      opacity: 0.5,
      ease: "power3.inOut",
      duration: 1.5
    }, "+=0.5")

    tl.to(".connect-line", {
      height: "15vh",
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    }, "<0.5")

    tl.to(".decision-card", {
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.2,
      duration: 1.2,
      ease: "back.out(1.2)"
    }, "<0.5")

    tl.to(".opt-wrong", {
      opacity: 0.1,
      scale: 0.95,
      duration: 1,
      ease: "power2.out"
    }, "+=0.5")

    tl.to(".opt-rec", {
      backgroundColor: "rgba(13,116,206,0.15)",
      borderColor: "rgba(13,116,206,0.6)",
      boxShadow: "0px 0px 40px rgba(13,116,206,0.4)",
      scale: 1.05,
      color: "#ffffff",
      duration: 1,
      ease: "power2.out"
    }, "<")

    tl.to([".decision-card", ".connect-line", ".prompt-container"], {
      y: "10vh",
      scale: 0,
      opacity: 0,
      stagger: 0.1,
      duration: 1.5,
      ease: "power3.in"
    }, "+=1")

    tl.to(".blueprint-title", {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "back.out(1.5)"
    })

    tl.to(".blueprint-title", {
      y: "-20vh",
      scale: 0.8,
      opacity: 0.6,
      duration: 1,
      ease: "power3.inOut"
    }, "+=0.5")

    tl.fromTo(".file-card", {
      x: 0,
      y: 0,
      opacity: 0,
      scale: 0,
      rotation: -10
    }, {
      x: (index) => (index % 2 === 0 ? -120 : 120),
      y: (index) => (index < 2 ? -60 : 60),
      opacity: 1,
      scale: 1,
      rotation: 0,
      stagger: 0.1,
      duration: 1.5,
      ease: "power3.out"
    }, "<0.2")

    tl.to({}, { duration: 1 })

  }, { scope: outerContainer });

  return (
    <div ref={outerContainer} className="w-full relative">
    <section ref={container} className="relative w-full h-screen bg-canvas overflow-hidden flex items-center justify-center border-t border-hairline-strong">
      
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-text-link rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-accent-preview rounded-full blur-[120px] mix-blend-screen opacity-50" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        
        <div className="prompt-container absolute flex flex-wrap justify-center items-center max-w-4xl gap-x-[0.3em] gap-y-2 text-center origin-center">
          <span className="text-text-link text-4xl md:text-5xl lg:text-6xl font-mono opacity-80 mr-4">{'>'}</span>
          {promptWords.map((word, i) => (
            <span 
              key={i} 
              className="prompt-word opacity-0 translate-y-4 text-4xl md:text-5xl lg:text-6xl font-black text-ink tracking-tight"
            >
              {word}
            </span>
          ))}
        </div>

        <div className="connect-line absolute top-1/2 left-1/2 -translate-x-1/2 w-px h-0 bg-gradient-to-b from-text-link/50 to-transparent opacity-0 -translate-y-20 z-0" />

        <div className="absolute flex flex-col md:flex-row gap-6 lg:gap-10 w-full max-w-6xl justify-center translate-y-10 z-10">
          
          <div className="decision-card opacity-0 translate-y-10 scale-95 flex flex-col items-center p-6 rounded-3xl bg-surface-dark-elevated border border-white/5 backdrop-blur-xl shadow-2xl w-full max-w-[320px]">
            <span className="font-mono text-[10px] text-text-link uppercase tracking-widest mb-4">State Sync</span>
            <div className="flex flex-col gap-3 w-full">
              <div className="opt-rec px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white/50 font-mono text-xs text-center transition-colors">
                CRDTs (Yjs)
              </div>
              <div className="opt-wrong px-4 py-3 rounded-xl border border-white/5 text-white/30 font-mono text-xs text-center">
                WebSockets
              </div>
            </div>
          </div>

          <div className="decision-card opacity-0 translate-y-10 scale-95 flex flex-col items-center p-6 rounded-3xl bg-surface-dark-elevated border border-white/5 backdrop-blur-xl shadow-2xl w-full max-w-[320px]">
            <span className="font-mono text-[10px] text-text-link uppercase tracking-widest mb-4">Authentication</span>
            <div className="flex flex-col gap-3 w-full">
              <div className="opt-rec px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white/50 font-mono text-xs text-center transition-colors">
                OAuth (GitHub)
              </div>
              <div className="opt-wrong px-4 py-3 rounded-xl border border-white/5 text-white/30 font-mono text-xs text-center">
                Email/Password
              </div>
            </div>
          </div>

          <div className="decision-card opacity-0 translate-y-10 scale-95 flex flex-col items-center p-6 rounded-3xl bg-surface-dark-elevated border border-white/5 backdrop-blur-xl shadow-2xl w-full max-w-[320px]">
            <span className="font-mono text-[10px] text-text-link uppercase tracking-widest mb-4">UI Language</span>
            <div className="flex flex-col gap-3 w-full">
              <div className="opt-rec px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white/50 font-mono text-xs text-center transition-colors">
                Glassmorphism
              </div>
              <div className="opt-wrong px-4 py-3 rounded-xl border border-white/5 text-white/30 font-mono text-xs text-center">
                Brutalist
              </div>
            </div>
          </div>

        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div className="blueprint-title absolute opacity-0 scale-50 font-black text-4xl md:text-5xl text-ink tracking-tight flex items-center gap-4">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-semantic-success)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            Blueprints Generated.
          </div>
          
          <div className="absolute w-full h-full flex items-center justify-center origin-center">
            {[
              { name: "agents.md", desc: "AI Working Instructions", icon: "M12 2a10 10 0 1 0 10 10H12V2z" },
              { name: "architecture.md", desc: "System Design & Routes", icon: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" },
              { name: "design.md", desc: "UI Tokens & Motion", icon: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" },
              { name: "project-overview.md", desc: "Core Philosophy", icon: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" }
            ].map((file, i) => (
              <div 
                key={i} 
                className="file-card absolute flex flex-col items-center justify-center p-6 rounded-2xl bg-surface-dark-elevated border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl w-[220px]"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-link)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
                  <path d={file.icon}></path>
                </svg>
                <span className="font-mono text-sm text-white font-bold mb-1">{file.name}</span>
                <span className="font-sans text-[10px] text-white/50 text-center uppercase tracking-widest">{file.desc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
    </div>
  );
}
