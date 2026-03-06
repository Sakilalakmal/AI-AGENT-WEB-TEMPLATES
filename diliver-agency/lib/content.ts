export type NavItem = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  icon: "flash" | "storefront" | "shield" | "pin";
};

export type LocationItem = {
  city: string;
  coverageText: string;
};

export type AboutPillar = {
  title: string;
  description: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Location", href: "#locations" },
  { label: "About", href: "#about" },
];

export const metrics: Metric[] = [
  { value: "265+", label: "Cities reached", detail: "Rapid urban coverage with trained riders and dispatch hubs." },
  { value: "20K", label: "Deliveries monthly", detail: "Reliable same-day runs for brands, shops, and urgent requests." },
];

export const services: ServiceItem[] = [
  {
    title: "Express city drops",
    description: "Fast courier dispatch for documents, retail orders, and urgent customer deliveries.",
    icon: "flash",
  },
  {
    title: "Storefront fulfillment",
    description: "Plug local shops into same-day delivery routes without expanding internal operations.",
    icon: "storefront",
  },
  {
    title: "Secure handling",
    description: "Tracked handoffs, rider verification, and delivery confirmation for every completed route.",
    icon: "shield",
  },
  {
    title: "Live location routing",
    description: "Dynamic pickup and drop coverage that adapts to demand across key neighborhoods.",
    icon: "pin",
  },
];

export const locations: LocationItem[] = [
  { city: "Colombo", coverageText: "Priority dispatch across central business, residential, and retail zones." },
  { city: "Kandy", coverageText: "Same-day rider coverage for stores, clinics, and direct-to-customer shipments." },
  { city: "Galle", coverageText: "Coastal delivery support with route batching for growing local brands." },
  { city: "Jaffna", coverageText: "Flexible drop scheduling with consistent rider availability during peak hours." },
];

export const aboutPillars: AboutPillar[] = [
  {
    title: "Built for delivery-first brands",
    description: "Diliver helps fast-moving businesses protect customer experience after checkout, not just before it.",
  },
  {
    title: "Dispatch that feels premium",
    description: "From rider presentation to route coordination, every touchpoint is designed to feel clear and dependable.",
  },
  {
    title: "Operational clarity",
    description: "Status updates, route structure, and delivery confirmation are organized so your team can act quickly.",
  },
];
