"use client";

import React, { useState } from "react";
import Navbar from "@/features/landing/ui/Navbar";
import Footer from "@/features/landing/ui/Footer";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { GooeyInput } from "@/components/ui/gooey-input";
import { motion } from "motion/react";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default function SponsorPage() {
  const [email, setEmail] = useState("");

  return (
    <main className="relative min-h-screen w-full bg-[#0a0a0a] flex flex-col selection:bg-white/20">
      <Navbar />
      
      {/* SECTION 1: The Hero */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 relative z-10 border-b border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] uppercase font-bold tracking-widest mb-8">
            An Open Invitation
          </div>
          <h1 className="text-6xl md:text-[9rem] leading-none font-black font-mono tracking-tighter text-white/10 text-center mb-8 select-none cursor-default">
            0 SPONSORS
          </h1>
          <p className="text-white/40 text-lg md:text-2xl font-medium max-w-2xl text-center leading-relaxed">
            The spot is empty. The legacy is waiting. Scroll to discover why you should claim it.
          </p>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-12 text-white/20"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14"></path>
            <path d="M19 12l-7 7-7-7"></path>
          </svg>
        </motion.div>
      </section>

      {/* SECTION 2: The Story & Impact */}
      <section className="w-full py-32 px-6 relative z-10 border-b border-white/5 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto flex flex-col gap-32">
          
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
              The AI Dev landscape is fragmented. <br/>
              <span className="text-white/30">We are unifying it.</span>
            </h2>
            <p className="text-white/50 text-xl md:text-2xl leading-relaxed font-medium">
              Every day, thousands of engineers struggle with disconnected AI agents and scattered prompt libraries. We built the <strong className="text-white">@istmx/skills</strong> ecosystem to give developers a God-Mode orchestrator that actually architects and builds premium software.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
              We aren't selling ads. <br/>
              <span className="text-white/30">We are offering a partnership.</span>
            </h2>
            <p className="text-white/50 text-xl md:text-2xl leading-relaxed font-medium">
              We are turning down standard banner ads. We are looking for a <strong className="text-amber-500">God Sponsor</strong>—a brand that wants to position themselves at the absolute center of the next-generation developer experience.
            </p>
          </FadeIn>
          
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#111] border border-white/5 p-8 rounded-3xl">
                <h3 className="text-white text-3xl font-black mb-4">Elite Reach</h3>
                <p className="text-white/40 text-sm">Your brand placed directly in front of top-tier engineers building the future of software.</p>
              </div>
              <div className="bg-[#111] border border-white/5 p-8 rounded-3xl">
                <h3 className="text-white text-3xl font-black mb-4">Global Home</h3>
                <p className="text-white/40 text-sm">Exclusive, permanent placement on the ISTMx landing page hero section.</p>
              </div>
              <div className="bg-[#111] border border-white/5 p-8 rounded-3xl">
                <h3 className="text-white text-3xl font-black mb-4">CLI Integration</h3>
                <p className="text-white/40 text-sm">Native mentions inside the actual developer tooling and `.istm-context` generations.</p>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* SECTION 3: The Final CTA */}
      <section className="w-full py-40 px-6 flex flex-col items-center justify-center relative z-10 bg-black">
        <FadeIn>
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">Ready to claim the void?</h2>
            <p className="text-white/40 text-lg max-w-xl">Enter your email below to start the conversation. We only accept one God Sponsor at a time.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="relative group w-full max-w-2xl rounded-3xl border border-white/5 bg-[#111] p-10 md:p-16 flex flex-col items-center justify-center transition-transform duration-700 hover:scale-[1.01]">
            <GlowingEffect disabled={false} variant="default" glow={true} spread={30} inactiveZone={0.6} />
            
            <div className="relative z-10 flex flex-col items-center text-center gap-8 w-full">
              <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/50 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-widest uppercase">
                    Super Developer
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-black tracking-widest uppercase">
                    God Sponsor
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">Claim This Spot</h2>
              </div>
              
              <div className="w-full flex flex-col items-center gap-4 mt-6">
                <GooeyInput 
                  value={email}
                  onValueChange={setEmail}
                  placeholder="Enter email to sponsor..." 
                  expandedWidth={280}
                  collapsedWidth={280}
                  className="mb-4"
                  classNames={{
                    root: "w-full max-w-xs",
                    trigger: "bg-white text-black hover:bg-neutral-200 transition-colors",
                    input: "text-black placeholder:text-black/50"
                  }}
                />
                
                <a 
                  href={`mailto:roaringmoon07@gmail.com?subject=God Sponsor Application&body=Hi, I want to claim the God Sponsor spot.%0A%0AMy Email: ${email}`}
                  className="text-xs font-bold text-white/50 hover:text-white uppercase tracking-widest transition-colors underline underline-offset-4"
                >
                  Or Email Us Directly
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </main>
  );
}
