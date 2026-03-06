import { FeatureSection } from "@/components/feature-section";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { TestimonialsSection } from "@/components/testimonials-section";
import { heroContent } from "@/data/hero-content";
import {
  featureContent,
  footerContent,
  testimonialsContent,
} from "@/data/site-content";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--hero-surface)]">
      <HeroSection content={heroContent} />
      <FeatureSection content={featureContent} />
      <TestimonialsSection content={testimonialsContent} />
      <SiteFooter content={footerContent} />
    </main>
  );
}
