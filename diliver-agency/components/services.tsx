import { SectionHeading } from "@/components/ui/section-heading";
import type { ServiceItem } from "@/lib/content";

type ServicesProps = {
  items: ServiceItem[];
};

function ServiceIcon({ icon }: { icon: ServiceItem["icon"] }) {
  const className = "h-5 w-5 stroke-current";

  if (icon === "flash") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="m13 2-7 11h5l-1 9 8-12h-5l0-8Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "storefront") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M4 10.5V20h16v-9.5M3 10l1.4-5h15.2L21 10M7 20v-5h10v5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "shield") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M12 3 5 6v6c0 4.2 2.5 7.6 7 9 4.5-1.4 7-4.8 7-9V6l-7-3Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m9.5 12 1.8 1.8L15 10.2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21c4-4 7-7 7-11a7 7 0 1 0-14 0c0 4 3 7 7 11Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Services({ items }: ServicesProps) {
  const [primaryService, secondaryService, tertiaryService, quaternaryService] = items;

  return (
    <section id="services" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Delivery operations designed for speed, clarity, and repeat demand."
          description="We package rider coordination, route logic, and brand-safe delivery into one service layer for fast-growing local businesses."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-12 lg:grid-rows-[minmax(250px,1fr)_minmax(210px,1fr)]">
          <article className="section-panel reveal-up relative overflow-hidden rounded-[30px] p-7 transition duration-200 hover:-translate-y-1 hover:border-white/[0.18] lg:col-span-6 lg:row-span-2 lg:p-9">
            <div className="absolute -right-14 top-10 h-44 w-44 rounded-full bg-[var(--brand)]/15 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-40 w-56 bg-[linear-gradient(135deg,rgba(255,35,7,0.2),transparent)]" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand)]/14 text-[var(--brand-soft)]">
                <ServiceIcon icon={primaryService.icon} />
              </div>
              <div className="mt-8 max-w-xl">
                <span className="inline-flex rounded-full border border-white/[0.12] bg-white/[0.05] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/[0.64]">
                  Signature service
                </span>
                <h3 className="mt-5 font-display text-3xl font-semibold tracking-[-0.06em] text-white sm:text-[2.8rem]">
                  {primaryService.title}
                </h3>
                <p className="mt-5 max-w-lg text-base leading-8 text-white/[0.64]">
                  {primaryService.description}
                </p>
              </div>
              <div className="mt-auto grid gap-4 pt-8 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/[0.1] bg-black/20 p-5">
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[var(--brand-soft)]">
                    Dispatch target
                  </div>
                  <div className="mt-3 font-display text-4xl font-semibold tracking-[-0.06em] text-white">
                    12 min
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/[0.54]">
                    Fast launch from request to rider assignment in active coverage zones.
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/[0.1] bg-black/20 p-5">
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[var(--brand-soft)]">
                    Best fit
                  </div>
                  <div className="mt-3 font-display text-2xl font-semibold tracking-[-0.05em] text-white">
                    Urgent retail and direct orders
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/[0.54]">
                    Built for premium brands that need final-mile speed without messy ops.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="section-panel reveal-up reveal-delay-1 rounded-[30px] p-7 transition duration-200 hover:-translate-y-1 hover:border-white/[0.18] lg:col-span-6 lg:row-span-1">
            <div className="flex items-start justify-between gap-5">
              <div className="max-w-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand)]/14 text-[var(--brand-soft)]">
                  <ServiceIcon icon={secondaryService.icon} />
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold tracking-[-0.05em] text-white">
                  {secondaryService.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/[0.62]">{secondaryService.description}</p>
              </div>
              <div className="hidden rounded-[24px] border border-white/[0.1] bg-white/[0.03] px-5 py-4 text-right lg:block">
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-white/[0.5]">
                  Integration
                </div>
                <div className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] text-white">
                  Store-ready
                </div>
              </div>
            </div>
          </article>

          <article className="section-panel reveal-up reveal-delay-1 rounded-[30px] p-7 transition duration-200 hover:-translate-y-1 hover:border-white/[0.18] lg:col-span-3 lg:row-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand)]/14 text-[var(--brand-soft)]">
              <ServiceIcon icon={tertiaryService.icon} />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.05em] text-white">
              {tertiaryService.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/[0.62]">{tertiaryService.description}</p>
          </article>

          <article className="section-panel reveal-up reveal-delay-2 rounded-[30px] p-7 transition duration-200 hover:-translate-y-1 hover:border-white/[0.18] lg:col-span-3 lg:row-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand)]/14 text-[var(--brand-soft)]">
              <ServiceIcon icon={quaternaryService.icon} />
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.05em] text-white">
              {quaternaryService.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/[0.62]">{quaternaryService.description}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
