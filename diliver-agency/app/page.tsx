import { About } from "@/components/about";
import { Footer } from "@/components/footer";
import { FooterCta } from "@/components/footer-cta";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Locations } from "@/components/locations";
import { Services } from "@/components/services";
import { aboutPillars, locations, metrics, navItems, services } from "@/lib/content";

export default function Home() {
  return (
    <main className="bg-[var(--color-page)] text-white">
      <section id="home" className="px-3 pt-3 sm:px-4 sm:pt-4 lg:px-5 lg:pt-5">
        <div className="hero-shell relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_32px_90px_rgba(0,0,0,0.45)] sm:rounded-[40px]">
          <Header navItems={navItems} />
          <Hero metrics={metrics} />
        </div>
      </section>
      <Services items={services} />
      <Locations items={locations} />
      <About pillars={aboutPillars} />
      <FooterCta />
      <Footer navItems={navItems} services={services} />
    </main>
  );
}
