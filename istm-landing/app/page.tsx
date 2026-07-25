import Navbar from "../features/landing/ui/Navbar";
import Hero from "../features/landing/ui/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col bg-canvas">
      <Navbar />
      <Hero />
    </main>
  );
}
