import Navbar from "../features/landing/ui/Navbar";
import Hero from "../features/landing/ui/Hero";
import ContextEngine from "../features/landing/ui/ContextEngine";
import SystemDesign from "../features/landing/ui/SystemDesign";
import Features from "../features/landing/ui/Features";
import DatabaseStats from "../features/landing/ui/DatabaseStats";
import TemplatesGallery from "../features/landing/ui/TemplatesGallery";
import CtaSection from "../features/landing/ui/CtaSection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col">
      <Navbar />
      
      <div className="sticky top-0 w-full h-screen z-0">
        <Hero />
      </div>

      <div className="relative z-10 w-full flex flex-col">
        <Features />
        <DatabaseStats />
        <ContextEngine />
        <SystemDesign />
        <TemplatesGallery />
      </div>
      
      <CtaSection />
    </main>
  );
}
