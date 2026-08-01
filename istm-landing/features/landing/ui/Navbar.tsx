"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Skills", path: "/skills" },
  { name: "Documentation", path: "https://github.com/istmX/skills" },
];

export default function Navbar() {
  const container = useRef<HTMLDivElement>(null);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const threshold = typeof window !== "undefined" ? window.innerHeight * 0.8 : 500;
    setIsScrolled(latest > threshold);
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
    <>
      <div ref={container} className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center pointer-events-none">
      <motion.nav 
        animate={{
          marginTop: isScrolled ? "16px" : "24px",
          width: "100%",
          maxWidth: isScrolled ? "700px" : "900px",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.05)",
          borderColor: isScrolled ? "rgba(0, 0, 0, 0.1)" : "rgba(255, 255, 255, 0.2)",
          boxShadow: isScrolled ? "0 10px 30px rgba(0,0,0,0.1)" : "0 4px 6px rgba(0,0,0,0.05)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25, mass: 1 }}
        className="nav-container pointer-events-auto h-14 mx-4 flex items-center justify-between px-6 backdrop-blur-xl border rounded-full relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />

        <Link href="/" className={`font-black text-lg tracking-wider flex items-center gap-1 transition-colors duration-300 z-10 ${isScrolled ? "text-black" : "text-white hover:opacity-80"}`}>
          ISTM<span className="opacity-70 font-medium">X</span>
        </Link>
        
        <div className={`hidden md:flex items-center text-sm font-bold tracking-wide relative z-10 transition-colors duration-300 ${isScrolled ? "text-black/70" : "text-white/80"}`}>
          
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onMouseEnter={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(null)}
              className={`relative px-5 py-2 z-10 transition-colors duration-300 ${isScrolled ? "hover:text-black" : "hover:text-white"}`}
            >
              {item.name}
              {hoveredPath === item.path && (
                <motion.div
                  layoutId="navbar-hover-pill"
                  className={`absolute inset-0 rounded-full -z-10 ${isScrolled ? "bg-black/5" : "bg-white/15"}`}
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
            className={`relative px-5 py-2 z-10 flex items-center gap-1.5 group transition-colors duration-300 ${isScrolled ? "hover:text-black" : "hover:text-white"}`}
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
                className={`absolute inset-0 rounded-full -z-10 ${isScrolled ? "bg-black/5" : "bg-white/15"}`}
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
            href="/#install"
            className="hidden md:flex h-8 px-4 items-center justify-center rounded-full bg-text-link hover:bg-text-link-secondary text-white text-xs font-bold transition-all shadow-[0_0_10px_rgba(13,116,206,0.3)] hover:shadow-[0_0_15px_rgba(13,116,206,0.6)] active:scale-95"
          >
            Get Started
          </Link>

          <button 
            aria-label="Toggle Menu" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden flex items-center justify-center w-8 h-8 rounded-full transition-colors relative z-[60] pointer-events-auto ${isScrolled ? "text-black hover:bg-black/5" : "text-white/90 hover:bg-white/15"}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <motion.path 
                d="M4 6h16"
                animate={{ d: isMobileMenuOpen ? "M18 6L6 18" : "M4 6h16" }} 
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.path 
                d="M4 12h16" 
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }} 
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.path 
                d="M4 18h16"
                animate={{ d: isMobileMenuOpen ? "M6 6l12 12" : "M4 18h16" }} 
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </svg>
          </button>
        </div>
      </motion.nav>
    </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.3, delay: 0.1 } }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center px-6 md:hidden"
          >
            <div 
              className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />
            
            <div className="flex flex-col items-center gap-8 w-full max-w-sm relative z-10 pt-10">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link 
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-black text-white/90 tracking-wider hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: 0.1 + navItems.length * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-px bg-white/10 my-4"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: 0.2 + navItems.length * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-6 w-full"
              >
                <Link 
                  href="https://github.com/istmX/skills" 
                  target="_blank"
                  className="text-xl font-bold text-white/70 hover:text-white transition-colors flex items-center gap-2"
                >
                  GitHub
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
                
                <Link 
                  href="/#install"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-4 flex items-center justify-center rounded-full bg-text-link hover:bg-text-link-secondary text-white text-lg font-bold transition-all shadow-[0_0_15px_rgba(13,116,206,0.3)] hover:shadow-[0_0_20px_rgba(13,116,206,0.5)] active:scale-95"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
