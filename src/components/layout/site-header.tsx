import Link from "next/link";
import { Compass, Map, Mountain, Palmtree } from "lucide-react";
import { LinkButton } from "@/components/ui/button";

// CO5: Routing, Forms, Accessibility & Performance Engineering - navigation items define primary client-side routes.
const navItems = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations (30)" },
  { href: "/search", label: "Smart Search" },
  { href: "/algorithms", label: "Algorithms Lab" },
  { href: "/travel-guide", label: "Travel Guide" },
  { href: "/about", label: "About" },
];

// CO1: Foundations of Front-End Engineering & Framework Design - shared header abstracts app navigation across pages.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(10,10,10,0.55)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f6d4a6,#c9832f)] text-stone-950 shadow-md">
            <Compass className="h-5 w-5" />
          </div>
          <div>
            <div className="font-serif text-xl">India Travel Repository</div>
            <div className="text-xs uppercase tracking-[0.3em] text-amber-300/80">
              30 Cities • Advanced Algorithms
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${
                item.href === "/algorithms"
                  ? "text-amber-400 hover:text-amber-300 font-semibold"
                  : item.href === "/search"
                  ? "text-white font-semibold hover:text-amber-300"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <LinkButton href="/algorithms" variant="secondary">
            Algorithms Lab
          </LinkButton>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <Mountain className="h-5 w-5 text-white/80" />
          <Palmtree className="h-5 w-5 text-white/80" />
          <Map className="h-5 w-5 text-white/80" />
        </div>
      </div>
    </header>
  );
}
