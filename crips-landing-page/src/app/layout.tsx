import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/space-grotesk";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crips | Premium Crisps Landing Page",
  description:
    "A premium crisps landing page concept with a bold, modern hero section.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
