import Link from "next/link";
import { MapPin, Plane, ShieldCheck, Sparkles } from "lucide-react";

// CO1: Foundations of Front-End Engineering & Framework Design - shared footer completes the reusable app shell.
export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr,1fr,1fr] lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Explore Beyond Itineraries</p>
          <h3 className="mt-4 font-serif text-3xl">Travel Andhra Pradesh and Telangana with confidence.</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
            Discover spiritual landmarks, canyon viewpoints, temple artistry, and coastline escapes with a guide designed for real planning and beautiful inspiration.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Explore</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <Link href="/destinations">Destinations</Link>
            <Link href="/travel-guide">Travel Guide</Link>
            <Link href="/about">About the Region</Link>
          </div>
        </div>
        <div className="grid gap-4 text-sm text-white/70">
          <div className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-amber-300" /> Interactive AP + Telangana map
          </div>
          <div className="flex items-center gap-3">
            <Plane className="h-4 w-4 text-amber-300" /> Transport and cost guidance
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-4 w-4 text-amber-300" /> Accessibility and safe planning
          </div>
          <div className="flex items-center gap-3">
            <Sparkles className="h-4 w-4 text-amber-300" /> Curated premium destination stories
          </div>
        </div>
      </div>
    </footer>
  );
}
