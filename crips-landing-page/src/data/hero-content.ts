import type { HeroContent } from "@/types/hero";

export const heroContent: HeroContent = {
  brandName: "Crips",
  announcement: "Small-batch crunch, presented fresh.",
  navItems: [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ],
  headlineLeading: "Everyone's favorite",
  headlineAccent: "Crips.",
  description:
    "Crafted for modern snack shelves with bright seasoning, airy crunch, and a premium look that feels instantly shelf-ready.",
  primaryCta: {
    label: "Add to cart",
    href: "#shop",
  },
  secondaryCta: {
    label: "Bulk order",
    href: "#contact",
  },
  featurePills: [
    {
      label: "Sea salt finish",
      positionClassName:
        "left-4 top-[11.5rem] sm:left-6 sm:top-[13rem] lg:left-8 lg:top-[15rem] xl:left-16 xl:top-[16rem]",
      delayMs: 260,
    },
    {
      label: "High energy, low fuss",
      positionClassName:
        "right-0 top-16 sm:right-6 sm:top-20 lg:right-6 lg:top-24 xl:right-3 xl:top-[6.5rem]",
      delayMs: 360,
    },
    {
      label: "40% less oil",
      positionClassName:
        "right-0 bottom-24 sm:right-10 sm:bottom-24 lg:right-2 lg:bottom-[4.5rem] xl:right-0 xl:bottom-20",
      delayMs: 460,
    },
  ],
  heroImages: {
    logo: "/brand/crips-logo.svg",
    pack: "/brand/crips-pack.svg",
    chips: "/brand/chips-cluster.svg",
    seasoningCard: "/brand/seasoning-card.svg",
    dipBowl: "/brand/dip-bowl.svg",
  },
};
