"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel3D({ items }: { items: { name: string; desc: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center [perspective:1000px]">
      <div className="relative w-full max-w-[400px] h-[220px] flex items-center justify-center [transform-style:preserve-3d]">
        <AnimatePresence initial={false}>
          {items.map((item, index) => {
            const offset = (index - currentIndex + items.length) % items.length;
            
            let rotateY = 0;
            let translateZ = 0;
            let translateX = 0;
            let opacity = 1;
            let zIndex = 0;

            if (offset === 0) {
              translateZ = 50;
              zIndex = 10;
            } else if (offset === 1) {
              rotateY = -15;
              translateX = 120;
              translateZ = -100;
              opacity = 0.5;
              zIndex = 5;
            } else if (offset === items.length - 1 && items.length > 1) {
              rotateY = 15;
              translateX = -120;
              translateZ = -100;
              opacity = 0.5;
              zIndex = 5;
            } else {
              opacity = 0;
              translateZ = -200;
            }

            return (
              <motion.div
                key={item.name}
                className="absolute w-full h-full bg-[#141414] border border-[#222] rounded-[24px] p-8 flex flex-col justify-center gap-4 cursor-pointer shadow-2xl overflow-hidden"
                animate={{
                  rotateY,
                  z: translateZ,
                  x: translateX,
                  opacity,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ zIndex }}
                onClick={() => {
                  if (offset === 1) next();
                  if (offset === items.length - 1) prev();
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                <div className="relative z-10 text-2xl font-black text-white font-mono tracking-tighter">{item.name}</div>
                <div className="relative z-10 text-base text-[#888] font-medium leading-relaxed">{item.desc}</div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      
      {items.length > 1 && (
        <div className="absolute -bottom-4 flex justify-center gap-4">
          <button onClick={prev} className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-[#222]">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-[#222]">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
