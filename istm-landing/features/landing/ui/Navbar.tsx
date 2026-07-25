"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Skills", path: "#skills" },
  { name: "Documentation", path: "#docs" },
];

export default function Navbar() {
  const container = useRef<HTMLDivElement>(null);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

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
    <div ref={container} className="relative z-20 w-full pt-6 px-4 flex justify-center">
      <nav className="nav-container w-full max-w-2xl h-14 flex items-center justify-between px-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-lg">
        
        <Link href="/" className="text-white font-black text-lg tracking-wider flex items-center gap-1 hover:opacity-80 transition-opacity z-10">
          ISTM<span className="opacity-70 font-medium">X</span>
        </Link>
        
        <div className="hidden md:flex items-center text-sm font-bold text-white/80 tracking-wide relative">
          
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
        
        <button aria-label="Open Menu" className="md:hidden flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/15 transition-colors text-white/90 z-10">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </div>
  );
}
