import type {
  FeatureSectionContent,
  FooterContent,
  TestimonialsSectionContent,
} from "@/types/landing";

export const featureContent: FeatureSectionContent = {
  eyebrow: "Brand System",
  title: "Built to sell fast, feel premium, and scale across product lines.",
  description:
    "The section is structured like a template showcase: bold value statements, shelf-ready metrics, and modular feature cards you can quickly adapt for future snack brands.",
  items: [
    {
      label: "Signature Taste",
      title: "Seasoned for modern shelves",
      description:
        "From first impression to final crunch, the product language feels crisp, fresh, and engineered for a premium online storefront.",
      icon: "sparkle",
      layoutClassName: "lg:col-span-5",
      metrics: [
        { label: "Flavor layers", value: "06+" },
        { label: "Hero variants", value: "12" },
      ],
    },
    {
      label: "Fast Launch",
      title: "Template-ready content blocks",
      description:
        "Swap brand colors, copy, and product art without rebuilding the whole page structure. The sections are designed to be cloned cleanly.",
      icon: "boxes",
      layoutClassName: "lg:col-span-3",
    },
    {
      label: "Clean Energy",
      title: "Light visuals, high impact",
      description:
        "Motion, gradients, and glassy cards add energy without making the landing page feel noisy or gimmicky.",
      icon: "lightning",
      layoutClassName: "lg:col-span-4",
    },
    {
      label: "Ingredient Story",
      title: "Premium positioning without clutter",
      description:
        "Use the bento cards to communicate sourcing, flavor craft, and production credibility in a way that still feels editorial.",
      icon: "leaf",
      layoutClassName: "lg:col-span-4",
    },
    {
      label: "Trust Layer",
      title: "Confident details that reassure buyers",
      description:
        "Nutritional highlights, pack quality, and fulfillment promises are surfaced with structure so the design still feels intentional.",
      icon: "shield",
      layoutClassName: "lg:col-span-8",
      metrics: [
        { label: "Reusable blocks", value: "08" },
        { label: "Mobile-ready", value: "100%" },
      ],
    },
  ],
};

export const testimonialsContent: TestimonialsSectionContent = {
  eyebrow: "Social Proof",
  title: "Loved by launch teams, retail buyers, and brands that need a sharper first impression.",
  description:
    "Two independent marquee lanes keep the section moving. Hovering either row pauses it, so the cards stay readable and still feel premium.",
  laneOne: [
    {
      name: "Milan Perera",
      role: "Brand Strategist",
      quote:
        "This layout feels like a real product launch page, not a generic snack template. The pacing and hierarchy are strong.",
    },
    {
      name: "Raisa Ahmed",
      role: "Packaging Consultant",
      quote:
        "The hero and feature blocks instantly make the product look shelf-ready. It feels modern without becoming sterile.",
    },
    {
      name: "Dilan Fernando",
      role: "DTC Founder",
      quote:
        "The motion is subtle, the sections are reusable, and the design carries enough personality to justify a premium product price.",
    },
  ],
  laneTwo: [
    {
      name: "Naveen Silva",
      role: "Creative Director",
      quote:
        "The testimonial rows and bento structure make the page feel much more editorial. It reads like a finished campaign, not a demo.",
    },
    {
      name: "Ameera Khan",
      role: "Ecommerce Manager",
      quote:
        "The content areas are easy to repurpose for other brands. That matters when you build multiple web templates back to back.",
    },
    {
      name: "Kasun Jayasinghe",
      role: "Retail Partnerships",
      quote:
        "The footer and feature storytelling make the brand feel established. It is the kind of page that helps smaller products look bigger.",
    },
  ],
};

export const footerContent: FooterContent = {
  eyebrow: "Launch Ready",
  title: "Need a sharper snack brand presence?",
  description:
    "This template is designed for modern crisps and packaged-food launches, with enough flexibility to adapt into agency-ready client work.",
  cta: {
    label: "Start a project",
    href: "mailto:hello@cripsstudio.com",
  },
  columns: [
    {
      title: "Navigate",
      links: [
        { label: "Home", href: "#" },
        { label: "Features", href: "#features" },
        { label: "Stories", href: "#stories" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Template Use",
      links: [
        { label: "Product launches", href: "#" },
        { label: "Brand showcases", href: "#" },
        { label: "Agency demos", href: "#" },
        { label: "DTC landing pages", href: "#" },
      ],
    },
  ],
  contactItems: [
    { label: "Instagram", value: "@cripsstudio", icon: "instagram" },
    { label: "Email", value: "hello@cripsstudio.com", icon: "mail" },
    { label: "Phone", value: "+94 77 123 4567", icon: "phone" },
  ],
  socialLinks: [
    { label: "Instagram", href: "#" },
    { label: "Behance", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  legal: "© 2026 Crips Studio. Crafted for premium packaged-food brands.",
};
