import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { defaultMetadata } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = defaultMetadata;

// CO5: Routing, Forms, Accessibility & Performance Engineering - root layout defines shared app-shell routing structure.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className="min-h-screen bg-[#fcfaf6] font-sans text-stone-900 antialiased"
        suppressHydrationWarning
      >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
