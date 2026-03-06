import { SectionHeading } from "@/components/ui/section-heading";
import type { AboutPillar } from "@/lib/content";

type AboutProps = {
  pillars: AboutPillar[];
};

export function About({ pillars }: AboutProps) {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="section-panel reveal-up rounded-[32px] p-6 sm:p-8 lg:p-10">
          <SectionHeading
            eyebrow="About"
            title="A delivery agency built to feel as sharp as the brands it serves."
            description="Diliver is positioned as an operational partner for businesses that care about speed, trust, and a premium final-mile experience."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <div className="text-sm uppercase tracking-[0.28em] text-[var(--brand-soft)]">Response</div>
              <div className="mt-3 font-display text-4xl font-semibold tracking-[-0.06em] text-white">12m</div>
              <p className="mt-2 text-sm leading-6 text-white/[0.58]">Average dispatch prep for priority orders.</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <div className="text-sm uppercase tracking-[0.28em] text-[var(--brand-soft)]">Satisfaction</div>
              <div className="mt-3 font-display text-4xl font-semibold tracking-[-0.06em] text-white">98%</div>
              <p className="mt-2 text-sm leading-6 text-white/[0.58]">Reported delivery completion confidence across partner accounts.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className={`section-panel reveal-up rounded-[28px] p-6 sm:p-8 ${index === 1 ? "reveal-delay-1" : index === 2 ? "reveal-delay-2" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.05em] text-white sm:text-[2rem]">
                  {pillar.title}
                </h3>
                <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-white/5 text-sm font-semibold text-white/[0.72]">
                  0{index + 1}
                </span>
              </div>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/[0.64]">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
