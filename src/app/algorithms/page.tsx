"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import {
  Binary,
  GitBranch,
  Layers,
  Network,
  Cpu,
  Sparkles,
  Search,
  ArrowRight,
  Clock,
  Compass,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  RefreshCw,
  Zap,
  Play,
  Pause,
  SkipBack,
  ChevronRight,
} from "lucide-react";
import { destinations } from "@/data/destinations";
import { CITY_NODES, TRANSPORT_EDGES, getTransportGraph } from "@/data/transport-graph";
import { kmpSearch, rabinKarpSearch, computeLPSArray } from "@/lib/algorithms/string-search";
import { computeLevenshtein, computeLCS, findFuzzySuggestions } from "@/lib/algorithms/fuzzy-match";
import { buildSuffixArray, suffixArraySearch } from "@/lib/algorithms/suffix-array";
import { dijkstraShortestPath, bfsExplore } from "@/lib/algorithms/graph-transport";
import { DijkstraVisualizerTab } from "@/components/algorithms/dijkstra-visualizer";
import { edmondsKarpMaxFlow } from "@/lib/algorithms/network-flow";
import { solveTSPApproximation, scheduleActivities, type TouristActivity } from "@/lib/algorithms/approximation";
import { randomizedQuickSort, reservoirSample, runMonteCarloBudgetSimulation } from "@/lib/algorithms/randomized";

type TabKey = "string" | "fuzzy" | "suffix" | "graph" | "flow" | "approx" | "random";

export default function AlgorithmsLabPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("string");

  // TAB 1: String Search State
  const [strText, setStrText] = useState(
    "Tirupati is a sacred pilgrimage city in Andhra Pradesh surrounded by the Seshachalam hills and home to Sri Venkateswara Temple."
  );
  const [strPattern, setStrPattern] = useState("temple");

  const kmpResult = useMemo(() => kmpSearch(strText, strPattern), [strText, strPattern]);
  const rkResult = useMemo(() => rabinKarpSearch(strText, strPattern), [strText, strPattern]);
  const lpsTable = useMemo(() => computeLPSArray(strPattern), [strPattern]);

  // TAB 2: Fuzzy Matching State
  const [fuzzySource, setFuzzySource] = useState("tirupathi");
  const [fuzzyTarget, setFuzzyTarget] = useState("Tirupati");

  const levResult = useMemo(() => computeLevenshtein(fuzzySource, fuzzyTarget), [fuzzySource, fuzzyTarget]);
  const lcsResult = useMemo(() => computeLCS(fuzzySource, fuzzyTarget), [fuzzySource, fuzzyTarget]);

  // TAB 3: Suffix Array State
  const [saCorpus, setSaCorpus] = useState("hyderabad#varanasi#jaipur#goa#tirupati#araku");
  const [saQuery, setSaQuery] = useState("pur");

  const saData = useMemo(() => buildSuffixArray(saCorpus), [saCorpus]);
  const saSearchResult = useMemo(
    () => suffixArraySearch(saData.text, saData.suffixArray, saQuery),
    [saData, saQuery]
  );

  // TAB 4: Graph Transport State
  const [graphSource, setGraphSource] = useState("Hyderabad");
  const [graphDest, setGraphDest] = useState("Jaipur");
  const [graphMetric, setGraphMetric] = useState<"time" | "cost" | "distance">("time");

  const graph = useMemo(() => getTransportGraph(), []);
  const dijkstraResult = useMemo(
    () => dijkstraShortestPath(graph, graphSource, graphDest, graphMetric),
    [graph, graphSource, graphDest, graphMetric]
  );

  // TAB 5: Network Flow State
  const [flowSource, setFlowSource] = useState("Delhi");
  const [flowSink, setFlowSink] = useState("Goa");

  const flowResult = useMemo(() => {
    // Select travel edges between key corridor nodes
    const corridorNodes = [
      "Delhi",
      "Agra",
      "Jaipur",
      "Udaipur",
      "Mumbai",
      "Goa",
      "Hyderabad",
      "Bengaluru",
    ];
    const corridorEdges = TRANSPORT_EDGES.filter(
      (e) => corridorNodes.includes(e.from) && corridorNodes.includes(e.to)
    ).map((e) => ({
      from: e.from,
      to: e.to,
      capacity: e.dailyCapacity,
    }));

    return edmondsKarpMaxFlow(corridorNodes, corridorEdges, flowSource, flowSink);
  }, [flowSource, flowSink]);

  // TAB 6: Approximation (TSP & Activity Scheduling)
  const [selectedTSPCities, setSelectedTSPCities] = useState<string[]>([
    "Delhi",
    "Agra",
    "Jaipur",
    "Udaipur",
    "Varanasi",
  ]);

  const tspResult = useMemo(() => {
    const cityCoords = selectedTSPCities
      .map((name) => destinations.find((d) => d.name === name || d.city === name))
      .filter(Boolean)
      .map((d) => ({
        name: d!.name,
        latitude: d!.latitude,
        longitude: d!.longitude,
      }));
    return solveTSPApproximation(cityCoords);
  }, [selectedTSPCities]);

  const sampleActivities: TouristActivity[] = [
    { id: "1", name: "Early Morning Temple Darshan", startTime: 6.0, endTime: 8.5, category: "Spiritual", fee: "Free", rating: 4.9 },
    { id: "2", name: "Heritage Walking Tour", startTime: 8.0, endTime: 10.5, category: "Heritage", fee: "INR 250", rating: 4.6 },
    { id: "3", name: "Royal Palace Museum Visit", startTime: 9.0, endTime: 12.0, category: "Museum", fee: "INR 100", rating: 4.8 },
    { id: "4", name: "Traditional Artisanal Lunch", startTime: 12.5, endTime: 14.0, category: "Dining", fee: "INR 500", rating: 4.7 },
    { id: "5", name: "Old City Spice Market Trail", startTime: 13.5, endTime: 15.5, category: "Shopping", fee: "Free", rating: 4.5 },
    { id: "6", name: "Sunset Fort Viewpoint Trek", startTime: 16.0, endTime: 18.5, category: "Nature", fee: "INR 50", rating: 4.9 },
    { id: "7", name: "Evening Light & Sound Show", startTime: 19.0, endTime: 20.5, category: "Culture", fee: "INR 150", rating: 4.8 },
    { id: "8", name: "Late Night Food Street Crawl", startTime: 21.0, endTime: 23.0, category: "Dining", fee: "INR 400", rating: 4.7 },
  ];

  const activitySchedule = useMemo(() => scheduleActivities(sampleActivities), []);

  // TAB 7: Randomized Algorithms State
  const [reservoirK, setReservoirK] = useState(4);
  const [reservoirSeed, setReservoirSeed] = useState(0);

  const reservoirSampleResult = useMemo(
    () => reservoirSample(destinations, reservoirK),
    [reservoirK, reservoirSeed]
  );

  const mcSimulation = useMemo(() => runMonteCarloBudgetSimulation(4500, 3, 1000), []);

  const [sortField, setSortField] = useState<"rating" | "latitude">("rating");
  const quickSortResult = useMemo(() => {
    return randomizedQuickSort(destinations, (a, b) => {
      if (sortField === "rating") return b.rating - a.rating;
      return a.latitude - b.latitude;
    });
  }, [sortField]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-800 border border-amber-300/40">
          <Cpu className="h-3.5 w-3.5 text-amber-600" />
          Interactive Algorithm Laboratory
        </div>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl text-stone-950 font-medium">
          Computer Science & Tourism Algorithms
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-600">
          Explore live implementations of String Matching, Dynamic Programming, Graph Theory, Network Flow,
          Approximations, and Randomized algorithms powering this 30-city repository.
        </p>
      </div>

      {/* Algorithm Family Tabs */}
      <div className="mt-10 flex overflow-x-auto pb-2 scrollbar-none gap-2 border-b border-stone-200">
        {[
          { key: "string", label: "1. String Search (KMP / RK)", icon: Binary },
          { key: "fuzzy", label: "2. Fuzzy Matching (DP)", icon: Layers },
          { key: "suffix", label: "3. Suffix Array & LCP", icon: Search },
          { key: "graph", label: "4. Graph Transport (Dijkstra)", icon: GitBranch },
          { key: "flow", label: "5. Network Flow (Edmonds-Karp)", icon: Network },
          { key: "approx", label: "6. Approximation (TSP & Greedy)", icon: Compass },
          { key: "random", label: "7. Randomized Algorithms", icon: Sparkles },
        ].map((t) => {
          const Icon = t.icon;
          const isActive = activeTab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key as TabKey)}
              className={`flex items-center gap-2 whitespace-nowrap px-4 py-3 text-xs sm:text-sm font-medium rounded-2xl transition border ${
                isActive
                  ? "bg-amber-600 text-white border-amber-600 shadow-sm"
                  : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
              }`}
            >
              <Icon className="h-4 w-4" />
              {t.label}
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT PANELS */}
      <div className="mt-8">
        {/* TAB 1: STRING SEARCH (KMP & RABIN-KARP) */}
        {activeTab === "string" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="max-w-3xl">
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                  String Algorithms • O(N + M)
                </span>
                <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-stone-950">
                  Knuth-Morris-Pratt (KMP) & Rabin-Karp Rolling Hash
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  KMP precomputes the <strong>Longest Proper Prefix which is also a Suffix (LPS array)</strong> to never backtrack the text pointer on mismatch. Rabin-Karp computes a rolling polynomial hash to test pattern match candidates in constant average time.
                </p>
              </div>

              {/* Interactive Inputs */}
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">
                    Text Corpus
                  </label>
                  <input
                    type="text"
                    value={strText}
                    onChange={(e) => setStrText(e.target.value)}
                    className="w-full rounded-2xl border border-stone-200 px-4 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">
                    Search Pattern
                  </label>
                  <input
                    type="text"
                    value={strPattern}
                    onChange={(e) => setStrPattern(e.target.value)}
                    className="w-full rounded-2xl border border-stone-200 px-4 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>
              </div>

              {/* LPS Table Display */}
              <div className="mt-6 rounded-2xl bg-amber-50/60 border border-amber-200/70 p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-900">
                    KMP Precomputed LPS (π) Table for &quot;{strPattern}&quot;
                  </h3>
                  <span className="text-[11px] text-amber-700 font-medium">Time: O(M)</span>
                </div>
                <div className="mt-3 flex overflow-x-auto gap-2">
                  {strPattern.split("").map((ch, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center justify-center rounded-xl bg-white border border-amber-200 px-3 py-1.5 min-w-[42px] shadow-2xs"
                    >
                      <span className="font-mono text-sm font-bold text-stone-900">{ch}</span>
                      <span className="text-[10px] text-stone-400 font-mono">i={idx}</span>
                      <span className="mt-1 rounded bg-amber-100 px-1.5 py-0.5 text-xs font-mono font-bold text-amber-800">
                        {lpsTable[idx] ?? 0}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comparison Metrics Grid */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {/* KMP Card */}
                <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-emerald-600" />
                      <h4 className="font-serif text-lg text-stone-900">Knuth-Morris-Pratt (KMP)</h4>
                    </div>
                    <span className="text-xs font-mono text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      {kmpResult.executionTimeMs} ms
                    </span>
                  </div>
                  <div className="mt-4 space-y-2 text-xs text-stone-600">
                    <div className="flex justify-between border-b border-stone-200/60 pb-1.5">
                      <span>Matches Found:</span>
                      <strong className="text-stone-900">{kmpResult.indices.length}</strong>
                    </div>
                    <div className="flex justify-between border-b border-stone-200/60 pb-1.5">
                      <span>Match Indices:</span>
                      <strong className="text-stone-900 font-mono">
                        {kmpResult.indices.length > 0 ? kmpResult.indices.join(", ") : "None"}
                      </strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Character Comparisons:</span>
                      <strong className="text-stone-900 font-mono">{kmpResult.comparisons}</strong>
                    </div>
                  </div>
                </div>

                {/* Rabin-Karp Card */}
                <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Binary className="h-4 w-4 text-blue-600" />
                      <h4 className="font-serif text-lg text-stone-900">Rabin-Karp (Rolling Hash)</h4>
                    </div>
                    <span className="text-xs font-mono text-blue-700 font-semibold bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                      {rkResult.executionTimeMs} ms
                    </span>
                  </div>
                  <div className="mt-4 space-y-2 text-xs text-stone-600">
                    <div className="flex justify-between border-b border-stone-200/60 pb-1.5">
                      <span>Matches Found:</span>
                      <strong className="text-stone-900">{rkResult.indices.length}</strong>
                    </div>
                    <div className="flex justify-between border-b border-stone-200/60 pb-1.5">
                      <span>Hash Windows Evaluated:</span>
                      <strong className="text-stone-900 font-mono">{rkResult.hashComparisons}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Spurious Hash Collisions:</span>
                      <strong className="text-stone-900 font-mono">{rkResult.spuriousHits}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FUZZY MATCHING (LEVENSHTEIN & LCS) */}
        {activeTab === "fuzzy" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="max-w-3xl">
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                  Dynamic Programming • O(M × N)
                </span>
                <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-stone-950">
                  Levenshtein Edit Distance & Longest Common Subsequence (LCS)
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  When travelers misspell tourist destinations (e.g., &quot;tirupathi&quot; or &quot;hydrabad&quot;), the 2D Dynamic Programming matrix computes the minimum edit cost (insertions, deletions, substitutions) and calculates string similarity to recommend accurate results.
                </p>
              </div>

              {/* Interactive Inputs */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">
                    Misspelled Query (Source)
                  </label>
                  <input
                    type="text"
                    value={fuzzySource}
                    onChange={(e) => setFuzzySource(e.target.value)}
                    className="w-full rounded-2xl border border-stone-200 px-4 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">
                    Repository Destination (Target)
                  </label>
                  <input
                    type="text"
                    value={fuzzyTarget}
                    onChange={(e) => setFuzzyTarget(e.target.value)}
                    className="w-full rounded-2xl border border-stone-200 px-4 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>
              </div>

              {/* Metrics Summary */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-2xl bg-amber-50 border border-amber-200/60 p-4 text-center">
                  <span className="text-[11px] uppercase font-semibold text-amber-800">
                    Edit Distance
                  </span>
                  <div className="mt-1 font-mono text-3xl font-bold text-amber-900">
                    {levResult.distance}
                  </div>
                  <span className="text-[10px] text-amber-600">operations</span>
                </div>
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200/60 p-4 text-center">
                  <span className="text-[11px] uppercase font-semibold text-emerald-800">
                    Similarity Ratio
                  </span>
                  <div className="mt-1 font-mono text-3xl font-bold text-emerald-900">
                    {(levResult.similarity * 100).toFixed(1)}%
                  </div>
                  <span className="text-[10px] text-emerald-600">normalized score</span>
                </div>
                <div className="rounded-2xl bg-blue-50 border border-blue-200/60 p-4 text-center">
                  <span className="text-[11px] uppercase font-semibold text-blue-800">
                    LCS Length
                  </span>
                  <div className="mt-1 font-mono text-3xl font-bold text-blue-900">
                    {lcsResult.lcsLength}
                  </div>
                  <span className="text-[10px] text-blue-600">chars: &quot;{lcsResult.lcsString}&quot;</span>
                </div>
                <div className="rounded-2xl bg-purple-50 border border-purple-200/60 p-4 text-center">
                  <span className="text-[11px] uppercase font-semibold text-purple-800">
                    DP Execution
                  </span>
                  <div className="mt-1 font-mono text-3xl font-bold text-purple-900">
                    {levResult.executionTimeMs}
                  </div>
                  <span className="text-[10px] text-purple-600">milliseconds</span>
                </div>
              </div>

              {/* Edit Operations Trace */}
              <div className="mt-6 rounded-2xl bg-stone-50 border border-stone-200 p-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3">
                  Backtracked Edit Operations Sequence
                </h4>
                <div className="flex flex-wrap gap-2">
                  {levResult.operations.map((op, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-mono font-medium border ${
                        op.type === "match"
                          ? "bg-emerald-100/60 text-emerald-800 border-emerald-200"
                          : op.type === "substitute"
                          ? "bg-amber-100/60 text-amber-800 border-amber-200"
                          : op.type === "insert"
                          ? "bg-blue-100/60 text-blue-800 border-blue-200"
                          : "bg-red-100/60 text-red-800 border-red-200"
                      }`}
                    >
                      <strong>{op.type.toUpperCase()}</strong>:
                      {op.charA || "∅"} → {op.charB || "∅"}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SUFFIX ARRAY & LCP */}
        {activeTab === "suffix" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="max-w-3xl">
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                  Full-Text Indexing • Suffix Arrays & LCP
                </span>
                <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-stone-950">
                  Lexicographical Suffix Array & Kasai LCP
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  A Suffix Array provides the memory efficiency of an array while achieving the fast $O(M \log N)$ substring search power of a Suffix Tree. The Longest Common Prefix (LCP) array enables identifying repeated travel motifs across city records.
                </p>
              </div>

              {/* Inputs */}
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">
                    Indexed Text (Concatenated Destinations)
                  </label>
                  <input
                    type="text"
                    value={saCorpus}
                    onChange={(e) => setSaCorpus(e.target.value)}
                    className="w-full rounded-2xl border border-stone-200 px-4 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">
                    Substring Query
                  </label>
                  <input
                    type="text"
                    value={saQuery}
                    onChange={(e) => setSaQuery(e.target.value)}
                    className="w-full rounded-2xl border border-stone-200 px-4 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>
              </div>

              {/* Binary Search Telemetry */}
              <div className="mt-6 flex flex-wrap gap-4 items-center justify-between rounded-2xl bg-amber-500/10 border border-amber-300/40 p-4 text-xs">
                <div>
                  Search Pattern: <strong className="font-mono text-amber-900">&quot;{saQuery}&quot;</strong>
                </div>
                <div>
                  Binary Search Steps: <strong className="font-mono text-amber-900">{saSearchResult.binarySearchSteps}</strong>
                </div>
                <div>
                  Matches: <strong className="font-mono text-amber-900">{saSearchResult.indices.length}</strong> (Indices: {saSearchResult.indices.join(", ") || "None"})
                </div>
                <div>
                  Time: <strong className="font-mono text-amber-900">{saSearchResult.executionTimeMs} ms</strong>
                </div>
              </div>

              {/* Suffix Array Table */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-stone-200 text-stone-400 uppercase text-[10px]">
                      <th className="py-2 px-3">Rank (i)</th>
                      <th className="py-2 px-3">SA[i] Offset</th>
                      <th className="py-2 px-3">LCP[i]</th>
                      <th className="py-2 px-3">Suffix String</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {saData.suffixArray.slice(0, 16).map((offset, rank) => {
                      const suffixStr = saData.text.slice(offset);
                      const isMatch = suffixStr.toLowerCase().startsWith(saQuery.toLowerCase()) && saQuery.length > 0;
                      return (
                        <tr
                          key={rank}
                          className={isMatch ? "bg-amber-100/70 text-amber-950 font-bold" : "hover:bg-stone-50 text-stone-700"}
                        >
                          <td className="py-2 px-3">{rank}</td>
                          <td className="py-2 px-3">{offset}</td>
                          <td className="py-2 px-3">{saData.lcpArray[rank] ?? 0}</td>
                          <td className="py-2 px-3 truncate max-w-md">{suffixStr}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: GRAPH TRANSPORT (DIJKSTRA) */}
        {activeTab === "graph" && (
          <DijkstraVisualizerTab
            graphSource={graphSource}
            setGraphSource={setGraphSource}
            graphDest={graphDest}
            setGraphDest={setGraphDest}
            graphMetric={graphMetric}
            setGraphMetric={setGraphMetric}
            dijkstraResult={dijkstraResult}
          />
        )}

        {/* TAB 5: NETWORK FLOW (EDMONDS-KARP) */}
        {activeTab === "flow" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="max-w-3xl">
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                  Network Flow • Max-Flow Min-Cut Theorem
                </span>
                <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-stone-950">
                  Ford-Fulkerson (Edmonds-Karp) Capacity Analysis
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Models tourist transit corridors during peak festival seasons. Uses BFS to repeatedly augment flow along residual paths. By the Max-Flow Min-Cut Theorem, the minimum cut identifies the critical transport bottlenecks.
                </p>
              </div>

              {/* Interactive Source & Sink */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">
                    Origin Transit Hub (Source S)
                  </label>
                  <select
                    value={flowSource}
                    onChange={(e) => setFlowSource(e.target.value)}
                    className="w-full rounded-2xl border border-stone-200 bg-white px-3 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-400"
                  >
                    <option value="Delhi">Delhi (Northern Gateway)</option>
                    <option value="Hyderabad">Hyderabad (South-Central Hub)</option>
                    <option value="Mumbai">Mumbai (Western Gateway)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">
                    Destination Region (Sink T)
                  </label>
                  <select
                    value={flowSink}
                    onChange={(e) => setFlowSink(e.target.value)}
                    className="w-full rounded-2xl border border-stone-200 bg-white px-3 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-400"
                  >
                    <option value="Goa">Goa (Beach Tourism Cluster)</option>
                    <option value="Bengaluru">Bengaluru (Southern Circuit)</option>
                    <option value="Udaipur">Udaipur (Royal Rajasthan)</option>
                  </select>
                </div>
              </div>

              {/* Max-Flow Results */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-amber-500/10 border border-amber-300/40 p-5">
                  <span className="text-[11px] uppercase font-semibold text-amber-900 block">
                    Maximum Tourist Throughput
                  </span>
                  <div className="mt-1 font-mono text-3xl sm:text-4xl font-bold text-amber-900">
                    {flowResult.maxFlow.toLocaleString()}
                  </div>
                  <span className="text-xs text-amber-700">passengers / day across network</span>
                </div>

                <div className="rounded-2xl bg-stone-50 border border-stone-200 p-5">
                  <span className="text-[11px] uppercase font-semibold text-stone-700 block">
                    Min-Cut Capacity Bottlenecks
                  </span>
                  <div className="mt-2 space-y-1.5 text-xs">
                    {flowResult.minCut.cutEdges.map((e, idx) => (
                      <div key={idx} className="flex items-center justify-between font-mono">
                        <span className="text-stone-700">
                          {e.from} → {e.to}
                        </span>
                        <span className="font-bold text-red-600">
                          Cap: {e.capacity.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Augmenting Paths Trace */}
              <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50/60 p-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-700 mb-2">
                  Edmonds-Karp BFS Augmenting Paths Found
                </h4>
                <div className="space-y-2 text-xs font-mono">
                  {flowResult.augmentingPaths.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-xl bg-white border border-stone-200 px-3 py-2"
                    >
                      <span className="text-stone-800">
                        {step.path.join(" → ")}
                      </span>
                      <span className="text-emerald-700 font-bold">
                        +{step.bottleneckCapacity.toLocaleString()} flow
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: APPROXIMATION (GREEDY TSP & ACTIVITY SELECTION) */}
        {activeTab === "approx" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="max-w-3xl">
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                  Approximation & Greedy Algorithms
                </span>
                <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-stone-950">
                  Multi-City Vacation Tour (TSP 2-Opt) & Activity Scheduling
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  The Traveling Salesperson Problem (TSP) is NP-hard. We approximate optimal multi-city vacation routes using Nearest Neighbor followed by 2-Opt local search refinement. Activity Selection greedily schedules non-overlapping attractions in a day by earliest finish time.
                </p>
              </div>

              {/* TSP Section */}
              <div className="mt-6 rounded-2xl bg-stone-50 border border-stone-200 p-5">
                <h3 className="font-serif text-xl text-stone-900">
                  Traveling Salesperson 2-Opt Tour Optimizer
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Tour: {tspResult.orderedCities.join(" → ")}
                </p>

                <div className="mt-4 grid grid-cols-3 gap-3 text-center border-y border-stone-200/80 py-3">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-stone-500 block">
                      Initial Greedy
                    </span>
                    <strong className="text-base font-mono text-stone-900">
                      {tspResult.initialGreedyDistanceKm} km
                    </strong>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-emerald-700 block">
                      2-Opt Improved
                    </span>
                    <strong className="text-base font-mono text-emerald-800">
                      {tspResult.totalDistanceKm} km
                    </strong>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-blue-700 block">
                      Distance Saved
                    </span>
                    <strong className="text-base font-mono text-blue-800">
                      {tspResult.twoOptImprovementKm} km ({tspResult.improvementPercentage}%)
                    </strong>
                  </div>
                </div>
              </div>

              {/* Activity Selection Section */}
              <div className="mt-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl text-stone-900">
                    Greedy Activity Selection (Earliest Finish Time)
                  </h3>
                  <span className="text-xs font-mono font-semibold text-amber-800">
                    {activitySchedule.totalActivitiesCount} / {sampleActivities.length} Activities Fitted
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  {activitySchedule.selectedActivities.map((act) => (
                    <div
                      key={act.id}
                      className="flex items-center justify-between rounded-xl bg-white border border-amber-200 px-3.5 py-2.5 text-xs shadow-2xs"
                    >
                      <div>
                        <strong className="text-stone-900 font-medium">{act.name}</strong>
                        <span className="text-stone-400 ml-2">({act.category} • {act.fee})</span>
                      </div>
                      <div className="font-mono text-amber-900 font-bold">
                        {act.startTime}:00 - {act.endTime}:00 ({act.endTime - act.startTime} hrs)
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 7: RANDOMIZED ALGORITHMS */}
        {activeTab === "random" && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="max-w-3xl">
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                  Randomized Algorithms & Monte Carlo Simulation
                </span>
                <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-stone-950">
                  Randomized QuickSort, Reservoir Sampling & Monte Carlo Budgeting
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Randomized QuickSort selects pivots uniformly at random to guarantee expected $O(N \log N)$ runtime. Reservoir Sampling picks $k$ uniform items in one pass. Monte Carlo runs 1,000 randomized trip expense scenarios to forecast confidence intervals.
                </p>
              </div>

              {/* Reservoir Sampling Controls */}
              <div className="mt-6 rounded-2xl bg-amber-500/10 border border-amber-300/40 p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl text-stone-950">
                    Reservoir Sampling (Algorithm R)
                  </h3>
                  <button
                    onClick={() => setReservoirSeed((s) => s + 1)}
                    className="flex items-center gap-1.5 rounded-xl bg-amber-600 text-white px-3 py-1.5 text-xs font-semibold hover:bg-amber-700 transition"
                  >
                    <RefreshCw className="h-3.5 w-3.5" /> Re-Sample
                  </button>
                </div>
                <p className="text-xs text-stone-600 mt-1">
                  Uniformly selecting {reservoirK} destinations from stream of {destinations.length} cities in single $O(N)$ pass.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-4">
                  {reservoirSampleResult.sample.map((d) => (
                    <div
                      key={d.slug}
                      className="rounded-xl bg-white border border-amber-200 p-3 text-xs shadow-2xs"
                    >
                      <strong className="block text-stone-900 font-medium text-sm">{d.name}</strong>
                      <span className="text-amber-700 text-[11px] block">{d.state}</span>
                      <span className="text-stone-400 text-[10px] mt-1 block">Rating: {d.rating} ★</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monte Carlo Budget Simulation */}
              <div className="mt-6 rounded-2xl bg-stone-50 border border-stone-200 p-5">
                <h3 className="font-serif text-xl text-stone-950">
                  Monte Carlo Vacation Budget Forecast (1,000 Iterations)
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Simulates dynamic surge rates for hotels, flights, and food across a 3-day itinerary.
                </p>

                <div className="mt-4 grid grid-cols-3 gap-3 text-center border-y border-stone-200 py-3">
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-stone-500 block">
                      10th Percentile (Optimistic)
                    </span>
                    <strong className="text-lg font-mono text-emerald-700">
                      ₹{mcSimulation.p10Low.toLocaleString()}
                    </strong>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-stone-500 block">
                      50th Percentile (Median)
                    </span>
                    <strong className="text-lg font-mono text-stone-900">
                      ₹{mcSimulation.p50Median.toLocaleString()}
                    </strong>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-semibold text-stone-500 block">
                      90th Percentile (Peak Surge)
                    </span>
                    <strong className="text-lg font-mono text-amber-800">
                      ₹{mcSimulation.p90High.toLocaleString()}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Randomized QuickSort Metrics */}
              <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl text-stone-950">
                    Randomized QuickSort Telemetry
                  </h3>
                  <select
                    value={sortField}
                    onChange={(e) => setSortField(e.target.value as any)}
                    className="rounded-xl border border-stone-200 px-3 py-1 text-xs text-stone-800"
                  >
                    <option value="rating">Sort by Rating (Desc)</option>
                    <option value="latitude">Sort by Latitude (Asc)</option>
                  </select>
                </div>

                <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs">
                  <div className="bg-stone-50 p-2.5 rounded-xl">
                    <span className="text-[10px] text-stone-400 block uppercase">Comparisons</span>
                    <strong className="font-mono text-stone-900 text-sm">
                      {quickSortResult.metrics.comparisons}
                    </strong>
                  </div>
                  <div className="bg-stone-50 p-2.5 rounded-xl">
                    <span className="text-[10px] text-stone-400 block uppercase">Swaps</span>
                    <strong className="font-mono text-stone-900 text-sm">
                      {quickSortResult.metrics.swaps}
                    </strong>
                  </div>
                  <div className="bg-stone-50 p-2.5 rounded-xl">
                    <span className="text-[10px] text-stone-400 block uppercase">Max Depth</span>
                    <strong className="font-mono text-stone-900 text-sm">
                      {quickSortResult.metrics.recursionDepth}
                    </strong>
                  </div>
                  <div className="bg-stone-50 p-2.5 rounded-xl">
                    <span className="text-[10px] text-stone-400 block uppercase">Time</span>
                    <strong className="font-mono text-stone-900 text-sm">
                      {quickSortResult.metrics.executionTimeMs} ms
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
