import Image from "next/image";
import { Clock3, IndianRupee, MapPin, Star } from "lucide-react";
import { LinkButton } from "@/components/ui/button";
import { formatCurrencyLabel } from "@/lib/utils";
import type { Destination } from "@/types/tourism";

interface DestinationCardProps {
  destination: Destination;
}

// CO3: React Component Model - reusable card receives destination props and renders consistent UI.
export function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className="group overflow-hidden rounded-[30px] border border-stone-200 bg-white shadow-[0_18px_80px_rgba(28,25,23,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_26px_90px_rgba(28,25,23,0.14)]">
      <div className="relative h-72 overflow-hidden">
        <Image
          src={destination.heroImage}
          alt={destination.heroImageAlt}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/15 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/15 px-3 py-2 text-xs uppercase tracking-[0.28em] text-white backdrop-blur-md">
          {destination.state}
        </div>
        <div className="absolute bottom-5 left-5 right-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-3xl text-white">{destination.name}</h3>
              <p className="mt-2 flex items-center gap-2 text-sm text-white/80">
                <MapPin className="h-4 w-4" /> {destination.city}
              </p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md">
              <Star className="h-4 w-4 fill-current text-amber-300" /> {destination.rating.toFixed(1)}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-5 p-6">
        <p className="line-clamp-3 text-sm leading-7 text-stone-600">{destination.description}</p>
        <div className="grid gap-3 text-sm text-stone-700 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-2xl bg-stone-50 px-4 py-3">
            <Clock3 className="h-4 w-4 text-amber-600" />
            <span>{destination.openingTime} - {destination.closingTime}</span>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-stone-50 px-4 py-3">
            <IndianRupee className="h-4 w-4 text-amber-600" />
            <span>{formatCurrencyLabel(destination.entryFee)}</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-400">Best Time</p>
            <p className="mt-1 text-sm font-medium text-stone-800">{destination.bestTimeToVisit}</p>
          </div>
          <LinkButton href={`/destinations/${destination.slug}`}>Explore</LinkButton>
        </div>
      </div>
    </article>
  );
}
