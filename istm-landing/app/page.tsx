import Navbar from "../features/landing/ui/Navbar";
import Hero from "../features/landing/ui/Hero";
import SystemDesign from "../features/landing/ui/SystemDesign";
import CtaSection from "../features/landing/ui/CtaSection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col">
      <Navbar />
      
      {/* Sticky wrapper for overlap effect */}
      <div className="sticky top-0 w-full h-screen z-0">
        <Hero />
      </div>

      {/* This section scrolls OVER the sticky hero above */}
      <SystemDesign />
      
      <CtaSection />
    </main>
  );
}
