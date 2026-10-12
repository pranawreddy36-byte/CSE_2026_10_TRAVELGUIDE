"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Sparkles,
  Zap,
  MapPin,
  Star,
  Utensils,
  Hotel,
  Clock3,
  Tag,
  Dice5,
  SlidersHorizontal,
  ChevronRight,
  Info,
} from "lucide-react";
import { destinations } from "@/data/destinations";
import { TravelSearchEngine, SearchResultItem } from "@/lib/search-engine";
import { reservoirSample } from "@/lib/algorithms/randomized";
import { SectionHeading } from "@/components/ui/section-heading";
import { formatCurrencyLabel } from "@/lib/utils";

export default function SmartSearchPage() {
  const searchEngine = useMemo(() => new TravelSearchEngine(destinations), []);

  const [query, setQuery] = useState("");
  const [selectedState, setSelectedState] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedBudget, setSelectedBudget] = useState("All");
  const [sortBy, setSortBy] = useState<"relevance" | "rating" | "budget">("relevance");
  const [surpriseItem, setSurpriseItem] = useState<any | null>(null);

  // Run multi-algorithm search pipeline
  const searchResponse = useMemo(() => {
    return searchEngine.search(query, sortBy);
  }, [searchEngine, query, sortBy]);

  // Apply secondary facet filters
  const filteredResults = useMemo(() => {
    return searchResponse.results.filter((item) => {
      const d = item.destination;
      const matchState = selectedState === "All" || d.state === selectedState;
      const matchRegion = selectedRegion === "All" || d.regionType === selectedRegion;
      const matchBudget = selectedBudget === "All" || d.budgetTier === selectedBudget;
      return matchState && matchRegion && matchBudget;
    });
  }, [searchResponse.results, selectedState, selectedRegion, selectedBudget]);

  // Extract unique states for filter
  const allStates = useMemo(() => {
    const set = new Set(destinations.map((d) => d.state));
    return ["All", ...Array.from(set).sort()];
  }, []);

  // Handle Reservoir Sampling "Surprise Me"
  const handleSurpriseMe = () => {
    const result = reservoirSample(destinations, 1);
    if (result.sample.length > 0) {
      setSurpriseItem(result.sample[0]);
    }
  };

  const getAlgoBadgeColor = (algo: string) => {
    if (algo.includes("KMP")) return "bg-emerald-500/10 text-emerald-700 border-emerald-300";
    if (algo.includes("Rabin-Karp")) return "bg-blue-500/10 text-blue-700 border-blue-300";
    if (algo.includes("Suffix Array")) return "bg-purple-500/10 text-purple-700 border-purple-300";
    if (algo.includes("Levenshtein")) return "bg-amber-500/10 text-amber-800 border-amber-300";
    return "bg-stone-100 text-stone-700 border-stone-200";
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header & Algorithms Telemetry Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800 border border-amber-300/40">
          <Zap className="h-3.5 w-3.5 text-amber-600" />
          Algorithmic Search Repository
        </div>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-stone-950 font-medium">
          Smart Travel Search
        </h1>
        <p className="mt-3 text-base text-stone-600">
          Powered by <strong>Knuth-Morris-Pratt (KMP)</strong>, <strong>Rabin-Karp Rolling Hash</strong>,{" "}
          <strong>Suffix Arrays</strong>, and <strong>Levenshtein Dynamic Programming</strong> for typo-tolerant queries across 30 cities, hotels & restaurants.
        </p>
      </div>

      {/* Main Search Input & Controls */}
      <div className="mt-10 max-w-4xl mx-auto space-y-4">
        <div className="relative flex items-center shadow-lg rounded-3xl border border-stone-300/80 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-amber-500/40 focus-within:border-amber-500 transition">
          <div className="pl-6 text-stone-400">
            <Search className="h-6 w-6" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search city, hotel, biryani, beach, temple, or typo (e.g. 'tirupathi', 'jaipurr', 'dosa')..."
            className="w-full py-4 pl-4 pr-32 text-stone-900 placeholder:text-stone-400 text-base focus:outline-none"
          />
          <div className="absolute right-3 flex items-center gap-2">
            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-xs text-stone-400 hover:text-stone-700 px-2 py-1"
              >
                Clear
              </button>
            )}
            <button
              onClick={handleSurpriseMe}
              title="Reservoir Sampling Random Pick"
              className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs font-medium px-3.5 py-2 rounded-2xl shadow-sm transition"
            >
              <Dice5 className="h-4 w-4" />
              Surprise Me
            </button>
          </div>
        </div>

        {/* Typo Correction ("Did you mean?") banner */}
        {searchResponse.suggestions.length > 0 && query.trim().length > 0 && (
          <div className="flex items-center gap-2 flex-wrap text-sm text-stone-600 px-3">
            <span className="font-medium text-amber-700">Did you mean:</span>
            {searchResponse.suggestions.map((sug) => (
              <button
                key={sug.text}
                onClick={() => setQuery(sug.text)}
                className="inline-flex items-center gap-1 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1 text-xs text-amber-900 font-medium transition"
              >
                <span>{sug.text}</span>
                <span className="text-[10px] text-amber-600">(dist: {sug.distance})</span>
              </button>
            ))}
          </div>
        )}

        {/* Telemetry Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500 px-3 py-1">
          <div className="flex items-center gap-3">
            <span>
              Algorithm:{" "}
              <strong className="text-stone-800 font-semibold">{searchResponse.algorithmUsed}</strong>
            </span>
            <span>•</span>
            <span>
              Time:{" "}
              <strong className="text-stone-800 font-mono">{searchResponse.executionTimeMs} ms</strong>
            </span>
            <span>•</span>
            <span>
              Total results:{" "}
              <strong className="text-stone-800">{filteredResults.length}</strong>
            </span>
          </div>

          {searchResponse.isFuzzyFallback && (
            <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
              <Info className="h-3 w-3" /> Exact match not found; activated Levenshtein DP typo correction
            </span>
          )}
        </div>

        {/* Filter Toolbar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {/* State Filter */}
          <div>
            <label className="block text-[11px] font-medium text-stone-500 uppercase tracking-wider mb-1">
              State
            </label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full rounded-2xl border border-stone-200 bg-white px-3 py-2 text-xs font-medium text-stone-800 shadow-sm focus:outline-none focus:border-amber-400"
            >
              {allStates.map((st) => (
                <option key={st} value={st}>
                  {st === "All" ? "All States (30 Cities)" : st}
                </option>
              ))}
            </select>
          </div>

          {/* Region Type Filter */}
          <div>
            <label className="block text-[11px] font-medium text-stone-500 uppercase tracking-wider mb-1">
              Theme / Region
            </label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full rounded-2xl border border-stone-200 bg-white px-3 py-2 text-xs font-medium text-stone-800 shadow-sm focus:outline-none focus:border-amber-400"
            >
              <option value="All">All Themes</option>
              <option value="spiritual-site">Spiritual & Temples</option>
              <option value="heritage-site">Heritage & Forts</option>
              <option value="hill-station">Hill Stations</option>
              <option value="city">Urban & Cultural</option>
            </select>
          </div>

          {/* Budget Tier Filter */}
          <div>
            <label className="block text-[11px] font-medium text-stone-500 uppercase tracking-wider mb-1">
              Budget Tier
            </label>
            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="w-full rounded-2xl border border-stone-200 bg-white px-3 py-2 text-xs font-medium text-stone-800 shadow-sm focus:outline-none focus:border-amber-400"
            >
              <option value="All">All Budgets</option>
              <option value="budget">Budget-Friendly</option>
              <option value="mid-range">Mid-Range Comfort</option>
              <option value="premium">Luxury & Palace</option>
            </select>
          </div>

          {/* Sort By (Randomized QuickSort) */}
          <div>
            <label className="block text-[11px] font-medium text-stone-500 uppercase tracking-wider mb-1">
              Sort (QuickSort)
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full rounded-2xl border border-stone-200 bg-white px-3 py-2 text-xs font-medium text-stone-800 shadow-sm focus:outline-none focus:border-amber-400"
            >
              <option value="relevance">Algorithmic Relevance</option>
              <option value="rating">Highest Rated (QuickSort)</option>
              <option value="budget">Budget (Low to High)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Surprise Me Modal Popup */}
      {surpriseItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="max-w-lg w-full rounded-3xl bg-white p-6 shadow-2xl border border-amber-200 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div className="flex items-center gap-2 text-amber-700 font-semibold text-sm">
                <Sparkles className="h-4 w-4" /> Reservoir Sampling Algorithm Result
              </div>
              <button
                onClick={() => setSurpriseItem(null)}
                className="text-stone-400 hover:text-stone-700 text-sm font-bold"
              >
                ✕
              </button>
            </div>
            <div className="relative mt-4 h-48 w-full rounded-2xl overflow-hidden">
              <Image
                src={surpriseItem.heroImage}
                alt={surpriseItem.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-4 font-serif text-2xl text-stone-900">{surpriseItem.name}</h3>
            <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mt-1">
              {surpriseItem.city}, {surpriseItem.state} • Rating: {surpriseItem.rating} ★
            </p>
            <p className="mt-2 text-xs text-stone-600 line-clamp-3 leading-relaxed">
              {surpriseItem.description}
            </p>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-medium text-stone-500">
                Starting: {surpriseItem.startingBudget}
              </span>
              <Link
                href={`/destinations/${surpriseItem.slug}`}
                className="rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium px-4 py-2 flex items-center gap-1 transition"
              >
                View Destination <ChevronRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Results Grid */}
      <div className="mt-12">
        {filteredResults.length === 0 ? (
          <div className="text-center py-16 rounded-3xl border border-dashed border-stone-300 bg-stone-50 max-w-2xl mx-auto">
            <Search className="h-10 w-10 text-stone-400 mx-auto" />
            <h3 className="mt-3 font-serif text-xl text-stone-800">No destinations found</h3>
            <p className="mt-2 text-sm text-stone-500">
              Try adjusting your query or filters. You can search for city names, hotels, dishes, or regional heritage.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredResults.map((item) => {
              const d = item.destination;
              return (
                <article
                  key={d.slug}
                  className="group flex flex-col rounded-3xl border border-stone-200 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image & Badges */}
                  <div className="relative h-56 w-full overflow-hidden bg-stone-100">
                    <Image
                      src={d.heroImage}
                      alt={d.heroImageAlt || d.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold border backdrop-blur-md shadow-sm ${getAlgoBadgeColor(
                          item.algorithmUsed
                        )}`}
                      >
                        <Zap className="h-3 w-3" />
                        {item.algorithmUsed?.split(" ")[0] ?? "N/A"}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-amber-300">
                        <Star className="h-3 w-3 fill-amber-300" />
                        {d.rating.toFixed(1)}
                      </span>
                    </div>

                    {/* Bottom overlay text */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-[11px] uppercase tracking-wider font-medium text-amber-300">
                        {d.state}
                      </p>
                      <h2 className="font-serif text-2xl font-medium leading-snug">{d.name}</h2>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col justify-between p-5 space-y-4">
                    {/* Algorithm match snippet */}
                    <div className="rounded-2xl bg-amber-500/5 border border-amber-500/15 p-3 text-xs">
                      <div className="flex items-center justify-between text-stone-500 text-[10px] uppercase font-semibold">
                        <span>Match Context</span>
                        <span className="text-amber-700 font-mono font-bold">
                          {item.matchedField}
                        </span>
                      </div>
                      <p className="mt-1 text-stone-700 line-clamp-2 italic">
                        &quot;{item.matchedTextSnippet}&quot;
                      </p>
                    </div>

                    {/* Quick Info Grid */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 border-t border-stone-100 pt-3">
                      <div>
                        <span className="text-[10px] text-stone-400 block uppercase font-medium">
                          Budget
                        </span>
                        <span className="font-semibold text-stone-900">{d.startingBudget}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-stone-400 block uppercase font-medium">
                          Best Season
                        </span>
                        <span className="font-medium text-stone-800 line-clamp-1">
                          {d.bestTimeToVisit}
                        </span>
                      </div>
                    </div>

                    {/* Curated Hotels & Restaurants Preview */}
                    <div className="space-y-1.5 text-xs text-stone-600 border-t border-stone-100 pt-3">
                      <div className="flex items-center gap-1.5 text-stone-800">
                        <Hotel className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                        <span className="font-medium truncate">
                          {d.nearbyHotels?.[0]?.name}
                        </span>
                        <span className="text-[10px] text-stone-400 ml-auto">
                          ({d.nearbyHotels?.length || 3} stays)
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-stone-800">
                        <Utensils className="h-3.5 w-3.5 text-amber-600 shrink-0" />
                        <span className="font-medium truncate">
                          {d.nearbyRestaurants?.[0]?.name}
                        </span>
                        <span className="text-[10px] text-stone-400 ml-auto">
                          ({d.nearbyRestaurants?.[0]?.specialDish?.slice(0, 18)}...)
                        </span>
                      </div>
                    </div>

                    {/* View Details Link */}
                    <div className="pt-2">
                      <Link
                        href={`/destinations/${d.slug}`}
                        className="flex w-full items-center justify-center gap-1.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white py-2.5 text-xs font-semibold shadow-sm transition"
                      >
                        Explore Guide & Itinerary <ChevronRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
