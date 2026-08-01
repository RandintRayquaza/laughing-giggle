"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const splitText = (text: string) => {
  return text.split(" ").map((word, i, arr) => (
    <React.Fragment key={i}>
      <span className="inline-block overflow-hidden align-bottom pb-2">
        <span className="word-anim inline-block will-change-transform">{word}</span>
      </span>
      {i < arr.length - 1 && <span className="inline-block">&nbsp;</span>}
    </React.Fragment>
  ));
};

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const track = trackRef.current;
    if (!track) return;

    // Calculate how far to move horizontally
    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${track.scrollWidth * 1.5}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      }
    });

    // 1. Pan the track horizontally
    tl.to(track, {
      x: getScrollAmount,
      ease: "none",
      duration: 1,
    }, 0);

    // 2. Dynamically reveal the words as it scrolls
    tl.fromTo(".word-anim", {
      y: "110%",
      opacity: 0,
      rotate: 10,
    }, {
      y: "0%",
      opacity: 1,
      rotate: 0,
      ease: "power2.out",
      duration: 0.2, // Each word takes 20% of the timeline
      stagger: { amount: 0.8 }, // Distributed across 80% of the timeline
    }, 0.05);
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-canvas h-[100svh] flex items-center overflow-hidden border-t border-hairline-strong">
      <div ref={trackRef} className="flex flex-nowrap whitespace-nowrap items-center h-full px-12 md:px-32">
        <h2 className="text-[80px] md:text-[140px] font-black text-ink tracking-tighter pr-16 md:pr-32">
          {splitText("AI needs architectural bounds.")}
        </h2>
        <h2 className="text-[80px] md:text-[140px] font-black text-ink/50 tracking-tighter pr-16 md:pr-32">
          {splitText("Without tokens, it hallucinates.")}
        </h2>
        <h2 className="text-[80px] md:text-[140px] font-black text-ink/30 tracking-tighter pr-24 md:pr-48">
          {splitText("Without routing, it drifts.")}
        </h2>
        <div className="flex items-center w-[80vw] md:w-[60vw] max-w-[1000px] whitespace-normal pr-32">
          <p className="text-3xl md:text-5xl font-medium text-body leading-tight">
            The Context Engine forces your IDE to respect system design, ensuring that every generated line of code is production-ready.
          </p>
        </div>
      </div>
    </section>
  );
}
