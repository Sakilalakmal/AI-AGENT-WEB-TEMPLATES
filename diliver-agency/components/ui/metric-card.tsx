import type { Metric } from "@/lib/content";

type MetricCardProps = {
  metric: Metric;
  align?: "left" | "right";
};

export function MetricCard({ metric, align = "left" }: MetricCardProps) {
  const textAlignment = align === "right" ? "text-left lg:text-right" : "text-left";

  return (
    <div className={`section-panel reveal-up rounded-[28px] p-6 sm:p-8 ${textAlignment}`.trim()}>
      <div className="text-5xl font-black tracking-[-0.08em] text-white/[0.82] sm:text-6xl lg:text-7xl">
        {metric.value}
      </div>
      <div className="mt-2 text-2xl font-medium tracking-[-0.04em] text-white/[0.68] sm:text-3xl">
        {metric.label}
      </div>
      <p className="mt-4 max-w-sm text-sm leading-6 text-white/[0.46]">{metric.detail}</p>
    </div>
  );
}
