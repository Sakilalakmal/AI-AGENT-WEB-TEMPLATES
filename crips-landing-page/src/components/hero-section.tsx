import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import LiquidEther from "@/components/liquid-ether";
import { Button } from "@/components/ui/button";
import type { HeroContent } from "@/types/hero";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[var(--hero-surface)] text-[var(--hero-text)]">
      <div className="absolute inset-0 z-0 opacity-55">
        <LiquidEther
          colors={["#8ED8FF", "#53B4FF", "#B9E9FF"]}
          mouseForce={18}
          cursorSize={110}
          isViscous
          viscous={28}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.45}
          isBounce={false}
          autoDemo
          autoSpeed={0.42}
          autoIntensity={1.8}
          takeoverDuration={0.3}
          autoResumeDelay={2200}
          autoRampDuration={0.8}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-36 size-[26rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.55),_rgba(255,255,255,0.2)_48%,_transparent_49%)] opacity-90" />
        <div className="absolute -left-10 top-1/2 h-[24rem] w-[9rem] -translate-y-1/2 rounded-full bg-white/16 blur-3xl" />
        <div className="absolute right-10 top-10 size-40 rounded-full bg-white/20 blur-[90px]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,rgba(221,235,245,0),rgba(205,224,239,0.55))]" />
      </div>

      <div className="relative z-10 flex min-h-[inherit] flex-col px-6 py-6 sm:px-8 md:px-10 md:py-8 lg:px-14 lg:py-10 xl:px-16">
        <header className="hero-reveal flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="#"
            className="flex w-fit items-center gap-3 rounded-full bg-white/45 px-3 py-2 pr-4 backdrop-blur-sm"
            style={{ animationDelay: "0ms" }}
          >
            <Image
              src={content.heroImages.logo}
              alt={`${content.brandName} logo`}
              width={108}
              height={56}
              priority
            />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-base font-semibold text-[var(--hero-text)] lg:flex-1 lg:gap-10">
            {content.navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`${
                  index === 0 ? "text-[var(--hero-accent)]" : "text-[var(--hero-text)]"
                } hover:text-[var(--hero-accent)]`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-fit rounded-full border-[1.5px] border-[color:rgba(16,18,21,0.18)] bg-white/35 px-6 text-[1.05rem] font-semibold text-[var(--hero-accent)] shadow-none backdrop-blur-sm hover:bg-white/55"
          >
            <Link href="#cart">
              <ShoppingCart className="size-5" />
              My Cart
            </Link>
          </Button>
        </header>

        <div className="relative flex flex-1 flex-col gap-10 py-8 lg:grid lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-6 xl:gap-10 xl:py-10">
          <div className="relative z-10 max-w-[36rem] pt-2 lg:pt-10">
            <span
              className="hero-reveal inline-flex rounded-full bg-[var(--hero-surface-soft)] px-5 py-2 text-sm font-bold tracking-[0.01em] text-[var(--hero-accent)] sm:text-base"
              style={{ animationDelay: "120ms" }}
            >
              {content.announcement}
            </span>

            <h1
              className="hero-reveal mt-7 max-w-[11ch] text-[3.55rem] leading-[0.93] font-black tracking-[-0.06em] text-[var(--hero-text)] sm:text-[4.35rem] lg:text-[5.15rem] xl:text-[5.85rem]"
              style={{ animationDelay: "200ms" }}
            >
              <span className="font-display">{content.headlineLeading}</span>{" "}
              <span className="font-display text-[var(--hero-accent)]">
                {content.headlineAccent}
              </span>
            </h1>

            <p
              className="hero-reveal mt-6 max-w-[34rem] text-base leading-8 text-[var(--hero-muted)] sm:text-lg"
              style={{ animationDelay: "300ms" }}
            >
              {content.description}
            </p>

            <div
              className="hero-reveal mt-8 flex flex-wrap items-center gap-4 sm:gap-6"
              style={{ animationDelay: "380ms" }}
            >
              <Button
                asChild
                size="lg"
                className="hero-pill-shadow rounded-full bg-[var(--hero-accent)] px-7 py-6 text-base font-bold text-white hover:bg-[#166eb8]"
              >
                <Link href={content.primaryCta.href}>
                  <ShoppingCart className="size-5" />
                  {content.primaryCta.label}
                </Link>
              </Button>

              <Button
                asChild
                variant="link"
                className="h-auto px-0 text-lg font-extrabold text-[var(--hero-accent)] no-underline hover:no-underline"
              >
                <Link href={content.secondaryCta.href}>
                  {content.secondaryCta.label}
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative flex min-h-[28rem] items-center justify-center sm:min-h-[34rem] lg:min-h-[40rem] xl:min-h-[44rem]">
            <div className="absolute -left-4 bottom-6 z-0 hidden size-28 rounded-full bg-white/40 blur-2xl sm:block" />

            <Image
              src={content.heroImages.dipBowl}
              alt="Signature dip bowl"
              width={260}
              height={260}
              className="hero-reveal absolute -bottom-20 -left-16 z-0 hidden w-[13rem] md:block lg:-left-24 lg:w-[15rem] xl:-left-28 xl:w-[17rem]"
              style={{ animationDelay: "400ms" }}
            />

            <Image
              src={content.heroImages.seasoningCard}
              alt="Seasoning detail"
              width={400}
              height={230}
              className="hero-reveal absolute right-8 top-2 z-10 w-[15rem] rotate-[10deg] sm:w-[18rem] lg:right-12 lg:top-0 lg:w-[20rem] xl:w-[22rem]"
              style={{ animationDelay: "320ms" }}
            />

            <Image
              src={content.heroImages.chips}
              alt="Crisp chips detail"
              width={170}
              height={110}
              className="hero-reveal absolute left-6 top-12 z-20 w-[6.5rem] -rotate-[16deg] sm:left-10 sm:w-[8rem] lg:left-8 lg:top-20 xl:left-12 xl:w-[9rem]"
              style={{ animationDelay: "340ms" }}
            />

            <div
              className="hero-pack-shadow hero-reveal relative z-20 w-full max-w-[25rem] sm:max-w-[28rem] lg:max-w-[32rem] xl:max-w-[36rem]"
              style={{ animationDelay: "240ms" }}
            >
              <Image
                src={content.heroImages.pack}
                alt={`${content.brandName} featured pack`}
                width={720}
                height={900}
                priority
                className="w-full"
              />
            </div>

            <Image
              src={content.heroImages.chips}
              alt="Crisp chips stack"
              width={330}
              height={220}
              className="hero-reveal absolute -bottom-1 right-0 z-30 w-[12rem] sm:right-2 sm:w-[14rem] md:w-[16rem] lg:right-4 lg:w-[18rem] xl:right-0 xl:w-[20rem]"
              style={{ animationDelay: "460ms" }}
            />

            {content.featurePills.map((pill) => (
              <div
                key={pill.label}
                className={`hero-pill-shadow hero-float absolute z-30 rounded-full bg-[var(--hero-accent)] px-4 py-3 text-sm font-extrabold text-white sm:px-5 sm:text-base ${pill.positionClassName}`}
                style={{ animationDelay: `${pill.delayMs}ms` }}
              >
                {pill.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
