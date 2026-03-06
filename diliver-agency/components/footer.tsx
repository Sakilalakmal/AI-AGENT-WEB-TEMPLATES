import Image from "next/image";

import type { NavItem, ServiceItem } from "@/lib/content";

type FooterProps = {
  navItems: NavItem[];
  services: ServiceItem[];
};

const contactDetails = [
  { label: "Email", value: "hello@diliveragency.com", href: "mailto:hello@diliveragency.com" },
  { label: "Phone", value: "+94 011 234 5678", href: "tel:+940112345678" },
  { label: "Office", value: "Colombo 03, Sri Lanka", href: "#locations" },
];

export function Footer({ navItems, services }: FooterProps) {
  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02)),#080808] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
        <div className="grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1.15fr_0.7fr_0.8fr_0.95fr] lg:px-10 lg:py-10">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-3">
              <Image src="/logo-mark.svg" alt="Diliver Agency logo mark" width={28} height={28} />
              <span className="font-display text-xl font-semibold tracking-[-0.05em] text-white">
                diliver<span className="text-[var(--brand)]">o</span>
              </span>
            </a>
            <p className="mt-5 text-sm leading-7 text-white/[0.6]">
              Premium local delivery for growth-focused brands that need speed, reliable routing, and a cleaner customer experience.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.56]">
                Same-day dispatch
              </span>
              <span className="rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.56]">
                City coverage
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.26em] text-white/[0.44]">Sitemap</h3>
            <nav className="mt-5">
              <ul className="space-y-3 text-sm text-white/[0.7]">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="transition hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.26em] text-white/[0.44]">Services</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/[0.7]">
              {services.map((service) => (
                <li key={service.title}>
                  <a href="#services" className="transition hover:text-white">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.26em] text-white/[0.44]">Contact</h3>
            <ul className="mt-5 space-y-4">
              {contactDetails.map((item) => (
                <li key={item.label}>
                  <div className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[var(--brand-soft)]">
                    {item.label}
                  </div>
                  <a href={item.href} className="mt-1 block text-sm leading-6 text-white/[0.72] transition hover:text-white">
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.08] px-6 py-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-3 text-sm text-white/[0.45] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Diliver Agency. All rights reserved.</p>
            <div className="flex flex-wrap gap-5">
              <a href="#contact" className="transition hover:text-white/[0.76]">
                Contact sales
              </a>
              <a href="#services" className="transition hover:text-white/[0.76]">
                Service terms
              </a>
              <a href="#about" className="transition hover:text-white/[0.76]">
                Company profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
