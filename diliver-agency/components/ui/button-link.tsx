import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  icon?: ReactNode;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
}: ButtonLinkProps) {
  const baseClassName =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-[0.01em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  const variantClassName =
    variant === "primary"
      ? "bg-[var(--brand)] text-white shadow-[0_12px_40px_var(--brand-shadow)] hover:-translate-y-0.5 hover:bg-[#ff3b1c]"
      : "border border-white/20 bg-white/[0.06] text-white backdrop-blur hover:-translate-y-0.5 hover:border-white/[0.35] hover:bg-white/10";

  return (
    <a href={href} className={`${baseClassName} ${variantClassName} ${className}`.trim()}>
      {icon}
      <span>{children}</span>
    </a>
  );
}
