import React, { useState } from "react";
import Navbar from "@/features/landing/ui/Navbar";
import Footer from "@/features/landing/ui/Footer";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { GooeyInput } from "@/components/ui/gooey-input";

export default function SponsorPage() {
  const [email, setEmail] = useState("");

  return (
    <main className="relative min-h-screen w-full bg-[#0a0a0a] overflow-x-hidden flex flex-col">
      <Navbar />
      
      <div className="w-full flex-grow flex flex-col items-center justify-center pt-32 pb-24 px-6 relative z-10">
        <h1 className="text-6xl md:text-9xl font-black font-mono tracking-tighter text-white/10 text-center mb-16 select-none cursor-default">
          0 SPONSORS
        </h1>

        <div 
          className="relative group w-full max-w-2xl rounded-3xl border border-white/5 bg-[#111] p-10 md:p-16 flex flex-col items-center justify-center transition-transform duration-700 hover:scale-[1.01]"
        >
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
              <p className="text-white/40 text-sm md:text-lg font-medium max-w-md mt-2 leading-relaxed">
                We don't have a sponsor yet. You could be the first. Secure your legacy and get featured globally on the ISTMx home screen.
              </p>
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
      </div>

      <Footer />
    </main>
  );
}
