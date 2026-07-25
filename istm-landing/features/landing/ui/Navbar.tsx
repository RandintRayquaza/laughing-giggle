"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Skills", path: "#skills" },
  { name: "Documentation", path: "#docs" },
];

export default function Navbar() {
  const container = useRef<HTMLDivElement>(null);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useGSAP(() => {
    gsap.from(".nav-container", {
      y: -30,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      delay: 0.3
    });
  }, { scope: container });

  return (
    <div ref={container} className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center pointer-events-none">
      <motion.nav 
        animate={{
          marginTop: isScrolled ? "16px" : "24px",
          width: "100%",
          maxWidth: isScrolled ? "700px" : "900px",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.05)",
          borderColor: isScrolled ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.05)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 1 }}
        className="nav-container pointer-events-auto h-14 mx-4 flex items-center justify-between px-6 backdrop-blur-xl border rounded-full shadow-lg relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <Link href="/" className="text-white font-black text-lg tracking-wider flex items-center gap-1 hover:opacity-80 transition-opacity z-10">
          ISTM<span className="opacity-70 font-medium">X</span>
        </Link>
        
        <div className="hidden md:flex items-center text-sm font-bold text-white/80 tracking-wide relative z-10">
          
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onMouseEnter={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(null)}
              className="relative px-5 py-2 z-10 hover:text-white transition-colors"
            >
              {item.name}
              {hoveredPath === item.path && (
                <motion.div
                  layoutId="navbar-hover-pill"
                  className="absolute inset-0 bg-white/15 rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
          
          <Link 
            href="https://github.com/istmX/skills" 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredPath("github")}
            onMouseLeave={() => setHoveredPath(null)}
            className="relative px-5 py-2 z-10 hover:text-white transition-colors flex items-center gap-1.5 group"
          >
            GitHub
            <svg 
              className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {hoveredPath === "github" && (
              <motion.div
                layoutId="navbar-hover-pill"
                className="absolute inset-0 bg-white/15 rounded-full -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </Link>
        </div>
        
        <div className="flex items-center gap-3 z-10">
          <Link 
            href="#install"
            className="hidden md:flex h-8 px-4 items-center justify-center rounded-full bg-text-link hover:bg-text-link-secondary text-white text-xs font-bold transition-all shadow-[0_0_10px_rgba(13,116,206,0.3)] hover:shadow-[0_0_15px_rgba(13,116,206,0.6)] active:scale-95"
          >
            Get Started
          </Link>

          <button aria-label="Open Menu" className="md:hidden flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/15 transition-colors text-white/90">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.nav>
    </div>
  );
}
