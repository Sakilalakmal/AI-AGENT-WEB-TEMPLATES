import { HeroSection } from "@/components/hero-section";
import { heroContent } from "@/data/hero-content";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--page-shell)] px-3 py-3 md:px-5 md:py-5">
      <HeroSection content={heroContent} />
    </main>
  );
}
