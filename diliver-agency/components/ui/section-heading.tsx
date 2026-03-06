type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-2xl ${alignment}`.trim()}>
      <span className="mb-4 inline-flex rounded-full border border-white/[0.12] bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--brand-soft)]">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-[3.25rem]">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-white/[0.68] sm:text-lg">{description}</p>
    </div>
  );
}
