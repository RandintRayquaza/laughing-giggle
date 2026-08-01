"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const splitChars = (text: string) => {
  return text.split(" ").map((word, wi, arr) => (
    <React.Fragment key={wi}>
      <span className="inline-block whitespace-nowrap">
        {word.split("").map((char, ci) => (
          <span key={ci} className="char-anim inline-block will-change-transform">
            {char}
          </span>
        ))}
      </span>
      {wi < arr.length - 1 && <span className="inline-block">&nbsp;</span>}
    </React.Fragment>
  ));
};

export default function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const svgRectRef = useRef<SVGRectElement>(null);
  const svgWrapRef = useRef<HTMLDivElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const container = containerRef.current;
      const svgWrap = svgWrapRef.current;
      const rect = svgRectRef.current;
      const para = paraRef.current;
      if (!track || !container || !svgWrap || !rect || !para) return;

      const ctx = gsap.context(() => {
        // Arbitrary "virtual duration" for the timeline — everything below
        // is positioned proportionally within this, so the exact number
        // doesn't matter, only the ratios do.
        const D = 100;

        const build = () => {
          const scrollDistance = Math.max(track.scrollWidth - window.innerWidth, 0);
          const vw = window.innerWidth;
          
          // Set section height to match exact scroll distance for perfect 1:1 scrub speed
          gsap.set(container, { height: scrollDistance + window.innerHeight });

          // Converts an element's horizontal offset in the track into a
          // timeline time (0..D) representing "when it's roughly centered
          // in the viewport during the horizontal pan."
          const timeForOffset = (elLeft: number) => {
            const raw = ((elLeft - vw * 0.65) / scrollDistance) * D;
            return gsap.utils.clamp(0, D - 0.001, raw);
          };

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "bottom bottom",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });

          // 1. Horizontal pan — the spine everything else is placed against
          tl.to(track, { x: () => -scrollDistance, ease: "none", duration: D }, 0);

          // 2. Randomized per-character reveal, each placed at the moment
          // it's about to enter view — not a shared stagger, so timing
          // tracks the actual scroll position instead of guessing.
          const chars = gsap.utils.toArray<HTMLElement>(".char-anim", track);
          chars.forEach((char) => {
            const t = timeForOffset(char.offsetLeft);
            const variant = gsap.utils.random(0, 3, 1); // 4 different entrance styles

            const from =
              variant === 0
                ? { y: gsap.utils.random(40, 90), x: 0, rotate: 0, scale: 1 }
                : variant === 1
                ? { y: -gsap.utils.random(40, 90), x: 0, rotate: 0, scale: 1 }
                : variant === 2
                ? { y: 0, x: 0, rotate: gsap.utils.random(-70, 70), scale: 0.4 }
                : { y: 0, x: gsap.utils.random(-50, 50), rotate: 0, scale: gsap.utils.random(1.6, 2.4) };

            tl.fromTo(
              char,
              { autoAlpha: 0, ...from },
              { autoAlpha: 1, y: 0, x: 0, rotate: 0, scale: 1, ease: "back.out(1.7)", duration: 3 },
              t
            );
          });

          // 3. Paragraph rises + fades in as its section arrives
          const paraTime = timeForOffset(svgWrap.offsetLeft);
          tl.fromTo(
            para,
            { autoAlpha: 0, y: 70 },
            { autoAlpha: 1, y: 0, ease: "power2.out", duration: 6 },
            paraTime
          );

          // 4. SVG frame draws around the paragraph over the same span,
          // via manual DrawSVG technique (dasharray/dashoffset).
          const rectLength = 2 * (svgWrap.offsetWidth + svgWrap.offsetHeight);
          gsap.set(rect, { strokeDasharray: rectLength, strokeDashoffset: rectLength });
          tl.to(rect, { strokeDashoffset: 0, ease: "power1.inOut", duration: 8 }, paraTime);

          return tl;
        };

        let tl = build();
        const onResize = () => {
          tl.scrollTrigger?.kill();
          tl.kill();
          tl = build();
          ScrollTrigger.refresh();
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
      }, container);

      return () => ctx.revert();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-canvas border-t border-hairline-strong"
    >
      <div className="sticky top-0 w-full h-[100svh] overflow-hidden">
        <div
          ref={trackRef}
          className="w-max flex flex-nowrap whitespace-nowrap items-center h-full px-12 md:px-32 will-change-transform"
        >
        <h2 className="text-[80px] md:text-[140px] font-black text-ink tracking-tighter pr-16 md:pr-32">
          {splitChars("AI needs architectural bounds.")}
        </h2>
        <h2 className="text-[80px] md:text-[140px] font-black text-ink/50 tracking-tighter pr-16 md:pr-32">
          {splitChars("Without tokens, it hallucinates.")}
        </h2>
        <h2 className="text-[80px] md:text-[140px] font-black text-ink/30 tracking-tighter pr-24 md:pr-48">
          {splitChars("Without routing, it drifts.")}
        </h2>

        <div
          ref={svgWrapRef}
          className="relative flex items-center justify-center w-[80vw] md:w-[60vw] max-w-[1000px] whitespace-normal pr-32 py-10 px-10 md:px-14"
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <rect
              ref={svgRectRef}
              x="4"
              y="4"
              width="calc(100% - 8px)"
              height="calc(100% - 8px)"
              rx="24"
              ry="24"
              fill="none"
              stroke="#0d74ce"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <p ref={paraRef} className="relative text-3xl md:text-5xl font-medium text-body leading-tight">
            The Context Engine forces your IDE to respect system design,
            ensuring that every generated line of code is production-ready.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}