import Navbar from "../features/landing/ui/Navbar";
import Hero from "../features/landing/ui/Hero";
import ProblemSection from "../features/landing/ui/ProblemSection";
import ParadigmShift from "../features/landing/ui/ParadigmShift";
import SystemDesign from "../features/landing/ui/SystemDesign";
import FlagshipSkills from "../features/landing/ui/FlagshipSkills";
import CtaSection from "../features/landing/ui/CtaSection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col">
      <Navbar />
      
      <div className="sticky top-0 w-full h-screen z-0">
        <Hero />
      </div>

      <div className="relative z-10 w-full flex flex-col">
        <ProblemSection />
        <ParadigmShift />
        <SystemDesign />
        <FlagshipSkills />
      </div>

      <CtaSection />
    </main>
  );
}
