"use client";

import { useMemo, useState } from "react";
import { DestinationCard } from "@/components/shared/destination-card";
import { FiltersPanel, type DestinationFilters } from "@/components/destinations/filters-panel";
import type { Destination } from "@/types/tourism";

// CO4: State Architecture, Async Data Engineering & API Integration - local filter state starts from a predictable default.
const initialFilters: DestinationFilters = {
  search: "",
  state: "All",
  budget: "All",
  season: "All",
  minimumRating: 0,
};

interface DestinationsBrowserProps {
  destinations: Destination[];
}

export function DestinationsBrowser({ destinations }: DestinationsBrowserProps) {
  const [filters, setFilters] = useState(initialFilters);

  // CO5: Routing, Forms, Accessibility & Performance Engineering - memoized filtering avoids unnecessary list work.
  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const matchesSearch =
        !filters.search ||
        `${destination.name} ${destination.city} ${destination.description}`
          .toLowerCase()
          .includes(filters.search.toLowerCase());
      const matchesState = filters.state === "All" || destination.state === filters.state;
      const matchesBudget = filters.budget === "All" || destination.budgetTier === filters.budget;
      const matchesSeason = filters.season === "All" || destination.bestTimeToVisit === filters.season;
      const matchesRating = destination.rating >= filters.minimumRating;

      return matchesSearch && matchesState && matchesBudget && matchesSeason && matchesRating;
    });
  }, [destinations, filters]);

  return (
    <div className="space-y-8">
      <FiltersPanel filters={filters} onChange={setFilters} />
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-stone-500">
          Showing <span className="font-semibold text-stone-900">{filteredDestinations.length}</span> curated destinations
        </p>
      </div>
      <div className="grid gap-8 xl:grid-cols-2">
        {/* CO3: React Component Model - destination cards are composed from stable props and keys. */}
        {filteredDestinations.map((destination) => (
          <DestinationCard key={destination.slug} destination={destination} />
        ))}
      </div>
      {filteredDestinations.length === 0 ? (
        <div className="rounded-[28px] border border-dashed border-stone-300 bg-stone-50 px-6 py-10 text-center text-stone-500">
          No destinations matched this filter mix. Try widening the season, rating, or budget selection.
        </div>
      ) : null}
    </div>
  );
}
