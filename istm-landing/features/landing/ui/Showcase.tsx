"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const skills = [
  {
    command: "/istm-context",
    title: "The Master Node",
    description: "Reverse-engineers your codebase and forces AI tools to generate the 4 architectural Zenix blueprints before writing any logic."
  },
  {
    command: "/istm-gsap",
    title: "The Dual Motion Engine",
    description: "Injects strict animation vocabularies, ensuring your IDE builds high-end Framer Motion and GSAP choreographies."
  },
  {
    command: "/istm-schema",
    title: "Database Architect",
    description: "Enforces strict database relations, type-safety, and indexing rules so your AI never hallucinates an invalid table."
  }
];

export default function Showcase() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".showcase-header", {
      scrollTrigger: {
        trigger: ".showcase-header",
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".skill-card", {
      scrollTrigger: {
        trigger: ".skill-grid",
        start: "top 75%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out"
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full bg-[#050510] py-32 px-4 flex flex-col items-center relative z-20">
      
      <div className="showcase-header max-w-3xl text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
          Flat command structure. <br/>
          <span className="text-[#cfe7ff]">Zero context windows.</span>
        </h2>
        <p className="text-lg text-white/70 font-medium">
          Instead of endlessly re-explaining your project to different AI tools, just type a command. The IDE natively reads the injected rules and executes perfectly.
        </p>
      </div>

      <div className="skill-grid grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {skills.map((skill) => (
          <div 
            key={skill.command}
            className="skill-card bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-colors duration-300 flex flex-col"
          >
            <div className="bg-[#0d74ce]/20 text-[#cfe7ff] border border-[#0d74ce]/40 font-mono text-sm px-3 py-1 rounded-md self-start mb-6 font-bold tracking-wide">
              {skill.command}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {skill.title}
            </h3>
            <p className="text-white/60 font-medium leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
      
    </section>
  );
}
