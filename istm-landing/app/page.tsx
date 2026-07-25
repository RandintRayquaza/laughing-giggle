import Navbar from "../features/landing/ui/Navbar";
import Hero from "../features/landing/ui/Hero";
import CtaSection from "../features/landing/ui/CtaSection";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col bg-canvas">
      <Navbar />
      <Hero />
      <CtaSection />
    </main>
  );
}
