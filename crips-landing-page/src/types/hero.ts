export type HeroNavItem = {
  label: string;
  href: string;
};

export type HeroAction = {
  label: string;
  href: string;
};

export type HeroFeaturePill = {
  label: string;
  positionClassName: string;
  delayMs: number;
};

export type HeroImages = {
  logo: string;
  pack: string;
  chips: string;
  seasoningCard: string;
  dipBowl: string;
};

export type HeroContent = {
  brandName: string;
  announcement: string;
  navItems: HeroNavItem[];
  headlineLeading: string;
  headlineAccent: string;
  description: string;
  primaryCta: HeroAction;
  secondaryCta: HeroAction;
  featurePills: HeroFeaturePill[];
  heroImages: HeroImages;
};
