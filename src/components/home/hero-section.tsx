"use client";

import { useMemo, useState } from "react";
import { ArrowRight, MapPinned, Star } from "lucide-react";
import { destinations } from "@/data/destinations";
import { LinkButton } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { SearchPanel } from "@/components/shared/search-panel";
import { StatsBand } from "@/components/shared/stats-band";

// CO3: React Component Model - interactive hero composes search, cards, motion, images, and navigation controls.
export function HeroSection() {
  const [search, setSearch] = useState("");

  // CO4: State Architecture, Async Data Engineering & API Integration - derived search results are computed from local state.
  const quickResults = useMemo(() => {
    if (!search.trim()) {
      return destinations.slice(0, 4);
    }

    const term = search.toLowerCase();
    return destinations.filter((destination) =>
      `${destination.name} ${destination.city} ${destination.description}`.toLowerCase().includes(term),
    );
  }, [search]);

  return (
    <section className="relative overflow-hidden bg-stone-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-amber-950/30 to-stone-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.24),transparent_35%),linear-gradient(135deg,rgba(12,10,9,0.6),rgba(12,10,9,0.82))]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-amber-300">
              Searchable Repository • 30 Destinations • Advanced Algorithms
            </p>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Intelligent travel guide powered by CS algorithms & structured repository.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Explore 30 Indian cities with curated hotels, restaurants, and attractions using KMP & Rabin-Karp pattern searching, Levenshtein fuzzy matching, Dijkstra transit graphs, and network flow analysis.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <LinkButton href="/search">Smart Search (KMP + DP)</LinkButton>
              <LinkButton href="/algorithms" variant="secondary">
                Algorithms Lab
              </LinkButton>
            </div>
          </div>
          <div>
            <GlassCard className="space-y-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/70">
                <MapPinned className="h-4 w-4 text-amber-300" /> Search your next route
              </div>
              <SearchPanel search={search} onSearchChange={setSearch} />
              <div className="grid gap-3">
                {quickResults.slice(0, 4).map((destination) => (
                  <div
                    key={destination.slug}
                    className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/10 px-4 py-3 text-white"
                  >
                    <div>
                      <p className="font-serif text-xl">{destination.name}</p>
                      <p className="text-sm text-white/65">{destination.bestTimeToVisit}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-amber-200">
                      <Star className="h-4 w-4 fill-current" /> {destination.rating.toFixed(1)}
                    </div>
                  </div>
                ))}
                {quickResults.length === 0 ? (
                  <div className="rounded-3xl border border-dashed border-white/20 px-4 py-6 text-sm text-white/70">
                    No destinations matched that search yet. Try a city, temple, or heritage keyword.
                  </div>
                ) : null}
              </div>
              <LinkButton href="/destinations" variant="secondary" className="w-full">
                Browse All Destinations <ArrowRight className="ml-2 h-4 w-4" />
              </LinkButton>
            </GlassCard>
          </div>
        </div>
        <div className="mt-14">
          <StatsBand />
        </div>
      </div>
    </section>
  );
}
