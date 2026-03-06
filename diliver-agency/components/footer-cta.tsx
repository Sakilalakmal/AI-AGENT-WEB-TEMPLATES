import { ButtonLink } from "@/components/ui/button-link";

export function FooterCta() {
  return (
    <section id="contact" className="px-4 pb-8 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[34px] border border-[var(--brand)]/25 bg-[linear-gradient(135deg,rgba(255,35,7,0.22),rgba(255,35,7,0.04)),#0b0b0b] px-6 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:px-8 lg:px-10 lg:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/[0.12] bg-white/[0.07] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-white/[0.82]">
              Contact
            </span>
            <h2 className="font-display mt-5 text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
              Need a delivery presence that looks fast before the rider even arrives?
            </h2>
            <p className="mt-5 text-base leading-7 text-white/[0.7] sm:text-lg">
              Start with a branded local delivery setup designed for same-day speed, reliable coverage, and a cleaner customer experience.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="mailto:hello@diliveragency.com" className="min-w-44">
              hello@diliveragency.com
            </ButtonLink>
            <ButtonLink href="tel:+940112345678" variant="secondary" className="min-w-40">
              +94 011 234 5678
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
