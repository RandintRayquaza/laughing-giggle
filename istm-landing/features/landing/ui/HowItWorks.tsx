"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Terminal, Database, Shield, Zap, Lock, Code2 } from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip-card";

const steps = [
  { 
    title: "1. The Prompt", 
    desc: "Run the CLI in your project root. It instantly drops the universal orchestrator into your environment.",
    icon: Terminal,
    command: "$ npx @istmx/skills init\n> Injecting God Mode..."
  },
  { 
    title: (
      <span className="flex items-center gap-2">
        2. <Tooltip content="An intelligent NLP router that determines the project archetype before generating rules."><span className="underline decoration-dashed decoration-ink/30 hover:decoration-ink transition-colors cursor-help">Discovery Gate</span></Tooltip>
      </span>
    ),
    desc: "The engine scans your project to automatically infer architecture, skipping unnecessary questions.",
    icon: Zap,
    command: "> Scanning repository...\n> Found: Next.js, Tailwind, TS\n> Optimizing orchestrators..."
  },
  { 
    title: "3. Context Generation", 
    desc: "Compiles project-overview.md, architecture.md, design.md, and agents.md dynamically.",
    icon: Database,
    command: "> Generating .istm-context/\n> [✔] agents.md\n> [✔] architecture.md\n> [✔] design.md"
  },
  { 
    title: "4. Harness Injection", 
    desc: "Writes directly to .cursorrules or GEMINI.md, hijacking the IDE's core instruction set.",
    icon: Shield,
    command: "> Writing .cursorrules\n> System prompt overridden\n> AI behavior strictly bound."
  },
  { 
    title: "5. Blueprint Lock", 
    desc: "Forces all AI outputs to adhere strictly to your defined design tokens and infrastructure rules.",
    icon: Lock,
    command: "> Enforcing DESIGN.md tokens\n> Rejecting generic UI slop\n> Locking architectural bounds."
  },
  { 
    title: (
      <span className="flex items-center gap-2">
        6. <Tooltip content="The final state where LLMs operate deterministically within your architectural bounds."><span className="underline decoration-dashed decoration-ink/30 hover:decoration-ink transition-colors cursor-help">God-Tier Output</span></Tooltip>
      </span>
    ),
    desc: "Your agents now write flawless, component-driven code guided perfectly by the Context Engine.",
    icon: Code2,
    command: "/* Result */\nexport default function App() {\n  return <AwwwardsLevelUI />;\n}"
  },
];

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate active state as user scrolls past steps
    const stepElements = gsap.utils.toArray<HTMLElement>('.step-item');
    stepElements.forEach((step, i) => {
      ScrollTrigger.create({
        trigger: step,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
      });
    });
    
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section className="w-full bg-[#fafafa] py-32 px-8 lg:px-16 flex justify-center relative border-t border-b border-hairline-strong">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-16 relative">
        
        {/* Left Side: Scrolling Steps */}
        <div className="w-full md:w-1/2 flex flex-col py-16">
          <div className="mb-24">
             <h2 className="text-ink text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Context-as-a-Service.
            </h2>
            <p className="text-body text-lg max-w-md">
              Six intelligent steps that completely redefine how your AI IDE understands your project.
            </p>
          </div>

          <div className="flex flex-col gap-[20vh] pb-[30vh]">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeIndex === idx;
              
              return (
                <div key={idx} className={`step-item flex gap-6 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
                  <div className="mt-1 shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border transition-colors duration-500 ${isActive ? 'bg-ink border-ink text-white shadow-lg' : 'bg-transparent border-hairline-strong text-body'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-ink mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-body text-lg leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Sticky Interactive Terminal */}
        <div className="hidden md:block w-1/2">
          <div className="sticky top-[20vh] w-full max-w-[500px] h-[500px] ml-auto">
            <div className="w-full h-full bg-[#171717] rounded-[16px] p-6 shadow-2xl border border-[#333] flex flex-col overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02]">
              
              {/* macOS Window Controls */}
              <div className="flex items-center gap-2 mb-6 border-b border-[#333] pb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <div className="ml-4 font-mono text-[12px] text-[#888] font-medium tracking-wide">
                  istmX-context-engine — bash
                </div>
              </div>
              
              {/* Dynamic Terminal Content */}
              <div className="flex-1 font-mono text-[14px] leading-relaxed text-[#b0b4ba] flex flex-col gap-1 relative">
                {steps.map((step, idx) => (
                  <div 
                    key={idx}
                    className={`absolute inset-0 transition-all duration-500 ease-out flex flex-col justify-center ${activeIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                  >
                    <pre className="whitespace-pre-wrap font-mono text-green-400">
                      {step.command.split('\n').map((line, i) => (
                        <div key={i} className="mb-2">
                          {line.startsWith('$') ? (
                            <span className="text-white font-semibold">{line}</span>
                          ) : line.startsWith('/*') ? (
                            <span className="text-gray-500">{line}</span>
                          ) : (
                            <span className="text-blue-400">{line}</span>
                          )}
                        </div>
                      ))}
                    </pre>
                  </div>
                ))}
              </div>
              
              {/* Status Bar */}
              <div className="mt-auto pt-4 border-t border-[#333] flex items-center justify-between text-[#888] font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  System Active
                </div>
                <div>v1.0.0-rc</div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
