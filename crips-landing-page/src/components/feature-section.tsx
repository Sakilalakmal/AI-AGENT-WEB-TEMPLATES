import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Leaf,
  Sparkles,
  Zap,
} from "lucide-react";

import type { FeatureSectionContent } from "@/types/landing";

const iconMap = {
  sparkle: Sparkles,
  lightning: Zap,
  leaf: Leaf,
  boxes: Boxes,
  shield: BadgeCheck,
};

type FeatureSectionProps = {
  content: FeatureSectionContent;
};

export function FeatureSection({ content }: FeatureSectionProps) {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f6fbff_0%,#edf5fb_100%)] px-6 py-20 sm:px-8 lg:px-14 xl:px-16"
    >
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(221,235,245,0.85),rgba(246,251,255,0))]" />
      <div className="absolute left-[-5rem] top-28 size-44 rounded-full bg-[rgba(83,180,255,0.16)] blur-3xl" />
      <div className="absolute right-0 top-10 size-56 rounded-full bg-[rgba(142,216,255,0.18)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-[rgba(31,126,207,0.14)] bg-white/70 px-4 py-2 text-sm font-bold tracking-[0.08em] text-[var(--hero-accent)] uppercase backdrop-blur-sm">
            {content.eyebrow}
          </span>
          <h2 className="font-display mt-6 text-4xl font-black tracking-[-0.05em] text-[var(--hero-text)] sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--hero-muted)]">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid auto-rows-[minmax(14rem,auto)] gap-5 lg:grid-cols-12">
          {content.items.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <article
                key={item.title}
                className={`hero-soft-shadow group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/72 p-6 backdrop-blur-md ${item.layoutClassName}`}
              >
                <div className="absolute right-0 top-0 size-36 rounded-full bg-[radial-gradient(circle_at_top,_rgba(142,216,255,0.35),_transparent_70%)] opacity-80 transition-transform duration-500 group-hover:scale-110" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[rgba(31,126,207,0.1)] text-[var(--hero-accent)]">
                      <Icon className="size-6" />
                    </div>
                    <span className="rounded-full bg-[rgba(31,126,207,0.08)] px-3 py-1 text-xs font-extrabold tracking-[0.08em] text-[var(--hero-accent)] uppercase">
                      {item.label}
                    </span>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-[var(--hero-text)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-7 text-[var(--hero-muted)]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    {item.metrics ? (
                      <div className="grid grid-cols-2 gap-3">
                        {item.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-2xl bg-[rgba(239,247,253,0.95)] p-4"
                          >
                            <div className="font-display text-2xl font-black tracking-[-0.04em] text-[var(--hero-accent)]">
                              {metric.value}
                            </div>
                            <div className="mt-1 text-sm font-semibold text-[var(--hero-muted)]">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-sm font-extrabold text-[var(--hero-accent)]">
                        Learn more
                        <ArrowUpRight className="size-4" />
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
