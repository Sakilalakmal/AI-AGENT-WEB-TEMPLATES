import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import type { LocationItem } from "@/lib/content";

type LocationsProps = {
  items: LocationItem[];
};

export function Locations({ items }: LocationsProps) {
  return (
    <section id="locations" className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,35,7,0.09),rgba(255,35,7,0.02)),rgba(255,255,255,0.02)] px-6 py-10 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:px-8 lg:px-10 lg:py-12">
        <SectionHeading
          eyebrow="Coverage"
          title="Where we move fastest"
          description="Core city hubs are optimized for same-day dispatch, fast pickup windows, and branded delivery handoffs."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {items.map((item, index) => (
              <article
                key={item.city}
                className={`section-panel reveal-up rounded-[28px] p-6 transition duration-200 hover:-translate-y-1 ${index > 1 ? "reveal-delay-1" : ""}`}
              >
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-soft)]">Hub</div>
                <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-white">{item.city}</h3>
                <p className="mt-4 text-sm leading-7 text-white/[0.62]">{item.coverageText}</p>
              </article>
            ))}
          </div>

          <aside className="section-panel reveal-up reveal-delay-2 flex flex-col justify-between rounded-[28px] p-6 sm:p-8">
            <div>
              <div className="inline-flex rounded-full border border-white/[0.12] bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-white/[0.72]">
                Routing notes
              </div>
              <h3 className="mt-6 font-display text-3xl font-semibold tracking-[-0.05em] text-white">
                Pickup windows stay flexible while drop-offs stay predictable.
              </h3>
              <p className="mt-5 text-base leading-7 text-white/[0.64]">
                The network is designed for retail peaks, urgent hand-carry requests, and localized route batching without losing service quality.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="#contact">Request coverage</ButtonLink>
              <div className="text-sm leading-6 text-white/[0.58]">
                Average dispatch preparation under <span className="font-semibold text-white">12 minutes</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
