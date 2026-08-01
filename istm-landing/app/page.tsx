import Navbar from "../features/landing/ui/Navbar";
import Hero from "../features/landing/ui/Hero";

import SupportedAI from "../features/landing/ui/SupportedAI";
import FeaturesGrid from "../features/landing/ui/FeaturesGrid";
import HowItWorks from "../features/landing/ui/HowItWorks";
import SystemDesign from "../features/landing/ui/SystemDesign";
import Manifesto from "../features/landing/ui/Manifesto";
import Footer from "../features/landing/ui/Footer";
import CtaSection from "../features/landing/ui/CtaSection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <Navbar />
      
      <div className="sticky top-0 w-full h-screen z-0">
        <Hero />
      </div>

      <div className="relative z-10 w-full">
        <SupportedAI />
        <FeaturesGrid />
        <HowItWorks />
        <SystemDesign />
        <Manifesto />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
}
