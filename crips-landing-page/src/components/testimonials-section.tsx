import { Star } from "lucide-react";

import type { Testimonial, TestimonialsSectionContent } from "@/types/landing";

type TestimonialsSectionProps = {
  content: TestimonialsSectionContent;
};

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="hero-soft-shadow w-[22rem] shrink-0 rounded-[1.75rem] border border-white/65 bg-white/78 p-6 backdrop-blur-md sm:w-[24rem]">
      <div className="flex items-center gap-1 text-[var(--hero-accent)]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="size-4 fill-current" />
        ))}
      </div>

      <p className="mt-5 text-base leading-7 text-[var(--hero-text)]">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-full bg-[rgba(31,126,207,0.12)] font-display text-lg font-black text-[var(--hero-accent)]">
          {testimonial.name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <div className="font-display text-lg font-bold text-[var(--hero-text)]">
            {testimonial.name}
          </div>
          <div className="text-sm font-semibold text-[var(--hero-muted)]">
            {testimonial.role}
          </div>
        </div>
      </div>
    </article>
  );
}

export function TestimonialsSection({ content }: TestimonialsSectionProps) {
  const topLane = [...content.laneOne, ...content.laneOne];
  const bottomLane = [...content.laneTwo, ...content.laneTwo];

  return (
    <section
      id="stories"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#edf5fb_0%,#f9fcfe_100%)] px-6 py-20 sm:px-8 lg:px-14 xl:px-16"
    >
      <div className="absolute left-10 top-12 size-44 rounded-full bg-[rgba(142,216,255,0.16)] blur-3xl" />
      <div className="absolute right-10 bottom-10 size-52 rounded-full bg-[rgba(83,180,255,0.14)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[rgba(31,126,207,0.14)] bg-white/70 px-4 py-2 text-sm font-bold tracking-[0.08em] text-[var(--hero-accent)] uppercase backdrop-blur-sm">
            {content.eyebrow}
          </span>
          <h2 className="font-display mt-6 text-4xl font-black tracking-[-0.05em] text-[var(--hero-text)] sm:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--hero-muted)]">
            {content.description}
          </p>
        </div>

        <div className="mt-14 space-y-5">
          <div className="marquee-lane group">
            <div className="marquee-track-left group-hover:[animation-play-state:paused]">
              {topLane.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.name}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>

          <div className="marquee-lane group">
            <div className="marquee-track-right group-hover:[animation-play-state:paused]">
              {bottomLane.map((testimonial, index) => (
                <TestimonialCard
                  key={`${testimonial.name}-${index}`}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
