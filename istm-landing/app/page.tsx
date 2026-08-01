import Navbar from "../features/landing/ui/Navbar";
import Hero from "../features/landing/ui/Hero";
import InstalledSkills from "../features/landing/ui/InstalledSkills";
import CtaSection from "../features/landing/ui/CtaSection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col">
      <Navbar />
      
      <div className="sticky top-0 w-full h-screen z-0">
        <Hero />
      </div>

      <div className="relative z-10 w-full flex flex-col">
        <InstalledSkills />
      </div>
      
      <CtaSection />
    </main>
  );
}
