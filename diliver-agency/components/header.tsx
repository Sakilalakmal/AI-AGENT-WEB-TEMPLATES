import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import type { NavItem } from "@/lib/content";

type HeaderProps = {
  navItems: NavItem[];
};

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M6.62 10.79a15.66 15.66 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.03-.24c1.12.37 2.3.56 3.56.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.26.2 2.44.56 3.56a1 1 0 0 1-.25 1.03l-2.2 2.2Z" />
    </svg>
  );
}

export function Header({ navItems }: HeaderProps) {
  return (
    <header className="relative z-20 px-5 pt-5 sm:px-7 sm:pt-7 lg:px-10 lg:pt-8">
      <div className="flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3">
          <Image src="/logo-mark.svg" alt="Diliver Agency logo mark" width={34} height={34} priority />
          <div className="font-display text-2xl font-semibold tracking-[-0.06em] text-white sm:text-[2rem]">
            diliver<span className="text-[var(--brand)]">o</span>
          </div>
        </a>

        <nav className="hidden rounded-full border border-white/10 bg-black/20 px-3 py-2 backdrop-blur md:block">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex rounded-full px-5 py-2 text-sm font-medium text-white/[0.58] transition hover:bg-white/[0.07] hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ButtonLink href="#contact" className="px-4 py-2.5 sm:px-5" icon={<PhoneIcon />}>
          Contact
        </ButtonLink>
      </div>

      <nav className="mt-4 md:hidden">
        <ul className="flex gap-2 overflow-x-auto pb-1">
          {navItems.map((item) => (
            <li key={item.href} className="shrink-0">
              <a
                href={item.href}
                className="inline-flex rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-white/[0.7] backdrop-blur transition hover:border-white/20 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
