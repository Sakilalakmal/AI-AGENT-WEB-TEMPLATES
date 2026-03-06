import { HeroSection } from "@/components/hero-section";
import { heroContent } from "@/data/hero-content";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--hero-surface)]">
      <HeroSection content={heroContent} />
    </main>
  );
}
