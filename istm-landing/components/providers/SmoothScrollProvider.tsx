"use client";

import { ReactLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Ensure GSAP plugins are registered safely on the client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  
  useEffect(() => {
    // If you need strict GSAP syncing in the future, you can bind it here.
    // However, ReactLenis with the `root` prop emulates native scroll so well 
    // that standard ScrollTrigger instances usually work out of the box.
  }, []);

  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08, // The lower the lerp, the smoother/heavier the scroll
        duration: 1.5, 
        smoothWheel: true 
      }}
    >
      {children}
    </ReactLenis>
  );
}
