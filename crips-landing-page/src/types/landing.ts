export type FeatureMetric = {
  label: string;
  value: string;
};

export type FeatureItem = {
  label: string;
  title: string;
  description: string;
  icon: "sparkle" | "lightning" | "leaf" | "boxes" | "shield";
  layoutClassName: string;
  metrics?: FeatureMetric[];
};

export type FeatureSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: FeatureItem[];
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type TestimonialsSectionContent = {
  eyebrow: string;
  title: string;
  description: string;
  laneOne: Testimonial[];
  laneTwo: Testimonial[];
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: FooterLink[];
};

export type FooterContactItem = {
  label: string;
  value: string;
  icon: "instagram" | "mail" | "phone";
};

export type FooterContent = {
  eyebrow: string;
  title: string;
  description: string;
  cta: FooterLink;
  columns: FooterColumn[];
  contactItems: FooterContactItem[];
  socialLinks: FooterLink[];
  legal: string;
};
