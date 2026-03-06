import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { MetricCard } from "@/components/ui/metric-card";
import type { Metric } from "@/lib/content";

type HeroProps = {
  metrics: Metric[];
};

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M6.62 10.79a15.66 15.66 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.03-.24c1.12.37 2.3.56 3.56.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.26.2 2.44.56 3.56a1 1 0 0 1-.25 1.03l-2.2 2.2Z" />
    </svg>
  );
}

export function Hero({ metrics }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-8 pt-12 sm:px-8 sm:pt-16 lg:px-10 lg:pb-10 lg:pt-12">
      <Image
        src="/map-texture.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none absolute inset-0 object-cover opacity-32 mix-blend-screen"
      />
      <div className="grid-glow left-1/2 top-24 -translate-x-1/2" />
      <div className="grid-glow bottom-20 left-1/2 -translate-x-1/2 opacity-80" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="reveal-up flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/5 px-4 py-2 text-sm font-semibold text-white/[0.88] backdrop-blur">
            <span className="text-base text-[#ffc44d]">★</span>
            <span>4.7+ global overall rating</span>
          </div>
        </div>

        <div className="reveal-up reveal-delay-1 mx-auto mt-8 max-w-5xl text-center">
          <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.07em] text-white sm:text-6xl lg:text-[6rem]">
            Your item delivered <span className="text-[var(--brand)]">fast</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/[0.62] sm:text-lg lg:text-[1.35rem]">
            Fast-moving courier support for local brands, urgent drop-offs, and same-day orders that need to arrive with confidence.
          </p>
        </div>

        <div className="reveal-up reveal-delay-2 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="#contact" className="min-w-40" icon={<PhoneIcon />}>
            Contact
          </ButtonLink>
          <ButtonLink href="#locations" variant="secondary" className="min-w-44">
            Know Locations
          </ButtonLink>
        </div>

        <div className="relative mt-12 grid items-end gap-5 lg:mt-[4.5rem] lg:grid-cols-[minmax(0,1fr)_minmax(320px,520px)_minmax(0,1fr)] lg:gap-6">
          <div className="order-2 lg:order-1">
            <MetricCard metric={metrics[0]} />
          </div>

          <div className="reveal-up reveal-delay-3 relative order-1 mx-auto w-full max-w-[340px] sm:max-w-[430px] lg:order-2 lg:max-w-[520px]">
            <div className="absolute inset-x-12 bottom-7 h-20 rounded-full bg-[var(--brand)]/30 blur-3xl" />
            <Image
              src="/hero-courier.svg"
              alt="Courier rider on a scooter"
              width={820}
              height={1040}
              priority
              className="relative z-10 h-auto w-full drop-shadow-[0_24px_64px_rgba(0,0,0,0.55)]"
            />
          </div>

          <div className="order-3 lg:order-3">
            <MetricCard metric={metrics[1]} align="right" />
          </div>
        </div>
      </div>
    </section>
  );
}
