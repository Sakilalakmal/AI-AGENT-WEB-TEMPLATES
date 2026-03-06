import Link from "next/link";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";

import type { FooterContent } from "@/types/landing";

type SiteFooterProps = {
  content: FooterContent;
};

const iconMap = {
  instagram: Instagram,
  mail: Mail,
  phone: Phone,
};

export function SiteFooter({ content }: SiteFooterProps) {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#0e2336] px-6 py-16 text-white sm:px-8 lg:px-14 xl:px-16"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
      <div className="absolute left-0 top-0 size-72 rounded-full bg-[rgba(83,180,255,0.16)] blur-3xl" />
      <div className="absolute right-0 bottom-0 size-80 rounded-full bg-[rgba(142,216,255,0.12)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/12 pb-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
          <div>
            <span className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-extrabold tracking-[0.12em] text-[#9fd8ff] uppercase">
              {content.eyebrow}
            </span>
            <h2 className="font-display mt-5 text-4xl font-black tracking-[-0.05em]">
              {content.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-white/70">
              {content.description}
            </p>
            <Link
              href={content.cta.href}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#2a8be0] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#1f7ecf]"
            >
              {content.cta.label}
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          {content.columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-lg font-bold text-white">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-semibold text-white/68 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-lg font-bold text-white">
              Contact
            </h3>
            <ul className="mt-5 space-y-4">
              {content.contactItems.map((item) => {
                const Icon = iconMap[item.icon];

                return (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-9 items-center justify-center rounded-full bg-white/8 text-[#9fd8ff]">
                      <Icon className="size-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-[0.12em] text-white/45 uppercase">
                        {item.label}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-white/78">
                        {item.value}
                      </div>
                    </div>
                  </li>
                );
              })}
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex size-9 items-center justify-center rounded-full bg-white/8 text-[#9fd8ff]">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-[0.12em] text-white/45 uppercase">
                    Studio
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white/78">
                    Colombo, Sri Lanka
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>{content.legal}</p>
          <div className="flex items-center gap-4">
            {content.socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-semibold text-white/65 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
