import type { Destination } from "@/types/tourism";
import { kmpSearch, rabinKarpSearch } from "./algorithms/string-search";
import { computeLevenshtein, findFuzzySuggestions, type FuzzySuggestion } from "./algorithms/fuzzy-match";
import { buildCorpusIndex, searchCorpusIndex, type IndexedCorpus, type CorpusDocument } from "./algorithms/suffix-array";
import { randomizedQuickSort } from "./algorithms/randomized";

export type SearchAlgorithmType =
  | "KMP (Exact Pattern Match)"
  | "Rabin-Karp (Rolling Hash)"
  | "Suffix Array (Full-Text Index)"
  | "Levenshtein DP (Fuzzy Typo Tolerant)"
  | "None";

export interface SearchResultItem {
  destination: Destination;
  score: number;
  matchedField: string;
  matchedTextSnippet: string;
  algorithmUsed: SearchAlgorithmType;
  editDistance?: number;
  similarityRatio?: number;
}

export interface SearchEngineResponse {
  query: string;
  totalResults: number;
  results: SearchResultItem[];
  suggestions: FuzzySuggestion[];
  algorithmUsed: SearchAlgorithmType;
  executionTimeMs: number;
  isFuzzyFallback: boolean;
}

export class TravelSearchEngine {
  private destinations: Destination[];
  private dictionary: string[] = [];
  private corpusIndex: IndexedCorpus | null = null;

  constructor(destinations: Destination[]) {
    this.destinations = destinations;
    this.buildSearchDictionary();
  }

  private getCorpusIndex(): IndexedCorpus {
    if (!this.corpusIndex) {
      this.corpusIndex = this.buildCorpus();
    }
    return this.corpusIndex;
  }

  private buildSearchDictionary() {
    const dictSet = new Set<string>();
    for (const d of this.destinations) {
      dictSet.add(d.name);
      dictSet.add(d.city);
      dictSet.add(d.state);
      dictSet.add(d.regionType);

      for (const h of d.nearbyHotels || []) {
        dictSet.add(h.name);
      }
      for (const r of d.nearbyRestaurants || []) {
        dictSet.add(r.name);
        dictSet.add(r.cuisine);
        dictSet.add(r.specialDish);
      }
      for (const a of d.featuredAttractions || []) {
        dictSet.add(a.name);
      }
    }
    this.dictionary = Array.from(dictSet);
  }

  private buildCorpus(): IndexedCorpus {
    const docs: CorpusDocument[] = [];
    for (const d of this.destinations) {
      docs.push({
        id: `dest-${d.slug}`,
        type: "destination",
        name: d.name,
        content: `${d.city} ${d.state} ${d.description} ${d.history}`,
        slug: d.slug,
      });

      for (const h of d.nearbyHotels || []) {
        docs.push({
          id: `hotel-${d.slug}-${h.name}`,
          type: "hotel",
          name: h.name,
          content: `${h.category} hotel in ${d.name}. ${h.description} Price: ${h.priceRange}`,
          slug: d.slug,
        });
      }

      for (const r of d.nearbyRestaurants || []) {
        docs.push({
          id: `rest-${d.slug}-${r.name}`,
          type: "restaurant",
          name: r.name,
          content: `${r.cuisine} dining in ${d.name}. Known for ${r.specialDish}. ${r.description}`,
          slug: d.slug,
        });
      }
    }
    return buildCorpusIndex(docs);
  }

  /**
   * Main Search entry point using multi-algorithm pipeline
   */
  public search(query: string, sortBy: "rating" | "relevance" | "budget" = "relevance"): SearchEngineResponse {
    const startTime = performance.now();
    const q = query.trim();

    if (!q) {
      return {
        query: "",
        totalResults: this.destinations.length,
        results: this.destinations.map((d) => ({
          destination: d,
          score: 1.0,
          matchedField: "Catalog",
          matchedTextSnippet: d.description.slice(0, 120) + "...",
          algorithmUsed: "None",
        })),
        suggestions: [],
        algorithmUsed: "None",
        executionTimeMs: 0,
        isFuzzyFallback: false,
      };
    }

    // Step 1: Exact Pattern Search with KMP on Names and Key Fields
    const exactResults: SearchResultItem[] = [];
    const seenSlugs = new Set<string>();

    for (const dest of this.destinations) {
      // Check City Name
      const kmpName = kmpSearch(dest.name, q);
      if (kmpName.indices.length > 0) {
        exactResults.push({
          destination: dest,
          score: 100,
          matchedField: "Destination Name",
          matchedTextSnippet: dest.name,
          algorithmUsed: "KMP (Exact Pattern Match)",
        });
        seenSlugs.add(dest.slug);
        continue;
      }

      // Check State or Region
      const kmpState = kmpSearch(dest.state, q);
      if (kmpState.indices.length > 0) {
        exactResults.push({
          destination: dest,
          score: 90,
          matchedField: "State",
          matchedTextSnippet: dest.state,
          algorithmUsed: "KMP (Exact Pattern Match)",
        });
        seenSlugs.add(dest.slug);
        continue;
      }

      // Check Restaurants
      for (const r of dest.nearbyRestaurants || []) {
        const rkRest = rabinKarpSearch(r.name + " " + r.cuisine + " " + r.specialDish, q);
        if (rkRest.indices.length > 0) {
          exactResults.push({
            destination: dest,
            score: 85,
            matchedField: `Restaurant: ${r.name} (${r.cuisine})`,
            matchedTextSnippet: `Famous for: ${r.specialDish} - ${r.description.slice(0, 80)}...`,
            algorithmUsed: "Rabin-Karp (Rolling Hash)",
          });
          seenSlugs.add(dest.slug);
          break;
        }
      }
      if (seenSlugs.has(dest.slug)) continue;

      // Check Hotels
      for (const h of dest.nearbyHotels || []) {
        const rkHotel = rabinKarpSearch(h.name + " " + h.category, q);
        if (rkHotel.indices.length > 0) {
          exactResults.push({
            destination: dest,
            score: 80,
            matchedField: `Hotel: ${h.name} (${h.category})`,
            matchedTextSnippet: `${h.priceRange} - ${h.description.slice(0, 80)}...`,
            algorithmUsed: "Rabin-Karp (Rolling Hash)",
          });
          seenSlugs.add(dest.slug);
          break;
        }
      }
      if (seenSlugs.has(dest.slug)) continue;

      // Check Attractions
      for (const a of dest.featuredAttractions || []) {
        const kmpAttr = kmpSearch(a.name, q);
        if (kmpAttr.indices.length > 0) {
          exactResults.push({
            destination: dest,
            score: 75,
            matchedField: `Attraction: ${a.name}`,
            matchedTextSnippet: a.description.slice(0, 100) + "...",
            algorithmUsed: "KMP (Exact Pattern Match)",
          });
          seenSlugs.add(dest.slug);
          break;
        }
      }
    }

    // Step 2: Suffix Array search across full corpus if exact results are few
    if (exactResults.length < 3) {
      const corpusHits = searchCorpusIndex(this.getCorpusIndex(), q);
      for (const hit of corpusHits) {
        if (!hit.doc.slug || seenSlugs.has(hit.doc.slug)) continue;
        const dest = this.destinations.find((d) => d.slug === hit.doc.slug);
        if (dest) {
          exactResults.push({
            destination: dest,
            score: 60 + Math.min(15, hit.occurrences * 5),
            matchedField: `Full-Text Index (${hit.doc.type})`,
            matchedTextSnippet: hit.doc.content.slice(0, 120) + "...",
            algorithmUsed: "Suffix Array (Full-Text Index)",
          });
          seenSlugs.add(dest.slug);
        }
      }
    }

    let finalResults = exactResults;
    let mainAlgo: SearchAlgorithmType =
      exactResults.length > 0 ? exactResults[0].algorithmUsed : "None";
    let isFuzzyFallback = false;

    // Step 3: If no exact matches, run Dynamic Programming Levenshtein Edit Distance
    if (finalResults.length === 0) {
      isFuzzyFallback = true;
      mainAlgo = "Levenshtein DP (Fuzzy Typo Tolerant)";
      const fuzzyResults: SearchResultItem[] = [];

      for (const dest of this.destinations) {
        // Compare with destination name
        const levName = computeLevenshtein(q, dest.name);
        const levCity = computeLevenshtein(q, dest.city);
        const levState = computeLevenshtein(q, dest.state);

        let bestDist = Math.min(levName.distance, levCity.distance, levState.distance);
        let bestSim = Math.max(levName.similarity, levCity.similarity, levState.similarity);
        let field = dest.name;

        // Also check restaurants and hotels
        for (const r of dest.nearbyRestaurants || []) {
          const lr = computeLevenshtein(q, r.name);
          if (lr.distance < bestDist) {
            bestDist = lr.distance;
            bestSim = lr.similarity;
            field = `Restaurant: ${r.name}`;
          }
        }

        for (const h of dest.nearbyHotels || []) {
          const lh = computeLevenshtein(q, h.name);
          if (lh.distance < bestDist) {
            bestDist = lh.distance;
            bestSim = lh.similarity;
            field = `Hotel: ${h.name}`;
          }
        }

        // Allow distance up to 3 or similarity >= 0.55
        if (bestDist <= 3 || bestSim >= 0.55) {
          fuzzyResults.push({
            destination: dest,
            score: Math.round(bestSim * 100),
            matchedField: `${field} (Typo Corrected)`,
            matchedTextSnippet: `Closest match with Edit Distance = ${bestDist} (${Math.round(bestSim * 100)}% similarity)`,
            algorithmUsed: "Levenshtein DP (Fuzzy Typo Tolerant)",
            editDistance: bestDist,
            similarityRatio: bestSim,
          });
        }
      }

      finalResults = fuzzyResults;
    }

    // Step 4: Sort Results using Randomized QuickSort
    if (sortBy === "rating") {
      finalResults = randomizedQuickSort(finalResults, (a, b) => b.destination.rating - a.destination.rating).sortedItems;
    } else if (sortBy === "budget") {
      const budgetWeight: Record<string, number> = { budget: 1, "mid-range": 2, premium: 3 };
      finalResults = randomizedQuickSort(
        finalResults,
        (a, b) => (budgetWeight[a.destination.budgetTier] || 2) - (budgetWeight[b.destination.budgetTier] || 2)
      ).sortedItems;
    } else {
      finalResults = randomizedQuickSort(finalResults, (a, b) => b.score - a.score).sortedItems;
    }

    // Step 5: Suggestions ("Did you mean?")
    const suggestions = findFuzzySuggestions(q, this.dictionary, 3, 5);

    const executionTimeMs = Number((performance.now() - startTime).toFixed(3));

    return {
      query: q,
      totalResults: finalResults.length,
      results: finalResults,
      suggestions,
      algorithmUsed: mainAlgo,
      executionTimeMs,
      isFuzzyFallback,
    };
  }
}
