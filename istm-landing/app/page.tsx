import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col">
      {/* Pixel Art Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image.png"
          alt="Pixel Art Landscape"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Subtle overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Floating Pill Navigation */}
      <div className="relative z-20 w-full pt-6 px-4 flex justify-center">
        <nav className="w-full max-w-2xl h-14 flex items-center justify-between px-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-lg">
          <div className="text-white font-black text-lg tracking-wider">
            ISTM<span className="opacity-70 font-medium">X</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold text-white/90 tracking-wide">
            <Link href="#skills" className="hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="#docs" className="hover:text-white transition-colors">
              Documentation
            </Link>
            <Link href="https://github.com/istmX/skills" className="hover:text-white transition-colors">
              GitHub
            </Link>
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center text-white/90">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 text-center mt-[-40px]">
        {/* Invisible Container (No more heavy glass) */}
        <div className="max-w-3xl w-full px-4 flex flex-col items-center">
          
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
            Equip your AI with <br className="hidden md:block" />
            master-class skills.
          </h1>
          
          <p className="text-lg md:text-xl text-white/95 max-w-xl font-medium leading-relaxed mb-10 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            The open-source registry for agentic context. <br className="hidden md:block" />
            Install production-ready architectures, UI tokens, and schemas instantly via the command line.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            {/* The Blue CTA */}
            <Link 
              href="#install" 
              className="h-11 px-8 rounded-md bg-text-link hover:bg-text-link-secondary text-white font-semibold flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Started
            </Link>
            
            {/* Command Copy Plate */}
            <div className="h-11 px-5 rounded-md bg-surface-dark/60 backdrop-blur-md border border-white/10 flex items-center justify-between gap-4 font-mono text-sm text-white/90">
              <span className="opacity-50">$</span>
              <span>npx @istmx/skills init</span>
              <button 
                className="opacity-70 hover:opacity-100 transition-opacity ml-2"
                aria-label="Copy to clipboard"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
