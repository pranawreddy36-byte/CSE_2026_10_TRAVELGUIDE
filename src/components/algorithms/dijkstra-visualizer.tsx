"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  SkipForward,
  SkipBack,
  ArrowRight,
  Zap,
  Clock,
  IndianRupee,
  Compass,
  CheckCircle2,
  ListOrdered,
  Layers,
  Info,
  Sparkles,
  Plane,
  Train,
  Car,
} from "lucide-react";
import { CITY_NODES, TRANSPORT_EDGES, getTransportGraph } from "@/data/transport-graph";
import type { TransportEdge, DijkstraResult, DijkstraMetric } from "@/lib/algorithms/graph-transport";

// Latitudes & Longitudes for all 30 destinations
const CITY_COORDS: Record<string, { lat: number; lng: number; state: string }> = {
  Manali: { lat: 32.2432, lng: 77.1892, state: "Himachal Pradesh" },
  Shimla: { lat: 31.1048, lng: 77.1734, state: "Himachal Pradesh" },
  Amritsar: { lat: 31.634, lng: 74.8723, state: "Punjab" },
  Delhi: { lat: 28.6139, lng: 77.209, state: "Delhi" },
  Agra: { lat: 27.1767, lng: 78.0081, state: "Uttar Pradesh" },
  Jaipur: { lat: 26.9124, lng: 75.7873, state: "Rajasthan" },
  Darjeeling: { lat: 27.041, lng: 88.2663, state: "West Bengal" },
  Varanasi: { lat: 25.3176, lng: 82.9739, state: "Uttar Pradesh" },
  Udaipur: { lat: 24.5854, lng: 73.7125, state: "Rajasthan" },
  Kolkata: { lat: 22.5726, lng: 88.3639, state: "West Bengal" },
  Mumbai: { lat: 19.076, lng: 72.8777, state: "Maharashtra" },
  Araku: { lat: 18.3274, lng: 82.8779, state: "Andhra Pradesh" },
  "Araku Valley": { lat: 18.3274, lng: 82.8779, state: "Andhra Pradesh" },
  Ramappa: { lat: 18.2612, lng: 79.9431, state: "Telangana" },
  Warangal: { lat: 17.9784, lng: 79.5941, state: "Telangana" },
  Visakhapatnam: { lat: 17.6868, lng: 83.2185, state: "Andhra Pradesh" },
  Hyderabad: { lat: 17.385, lng: 78.4867, state: "Telangana" },
  Rajahmundry: { lat: 17.0005, lng: 81.804, state: "Andhra Pradesh" },
  "Nagarjuna Sagar": { lat: 16.5775, lng: 79.3125, state: "Andhra Pradesh" },
  Vijayawada: { lat: 16.5062, lng: 80.648, state: "Andhra Pradesh" },
  Srisailam: { lat: 16.0734, lng: 78.8688, state: "Andhra Pradesh" },
  Hampi: { lat: 15.335, lng: 76.46, state: "Karnataka" },
  Goa: { lat: 15.2993, lng: 74.124, state: "Goa" },
  Gandikota: { lat: 14.8144, lng: 78.2863, state: "Andhra Pradesh" },
  Tirupati: { lat: 13.6288, lng: 79.4192, state: "Andhra Pradesh" },
  Chennai: { lat: 13.0827, lng: 80.2707, state: "Tamil Nadu" },
  Bengaluru: { lat: 12.9716, lng: 77.5946, state: "Karnataka" },
  Mysuru: { lat: 12.2958, lng: 76.6394, state: "Karnataka" },
  Munnar: { lat: 10.0889, lng: 77.0595, state: "Kerala" },
  Kochi: { lat: 9.9312, lng: 76.2673, state: "Kerala" },
  Madurai: { lat: 9.9252, lng: 78.1198, state: "Tamil Nadu" },
};

// Canvas projection boundaries
const SVG_WIDTH = 920;
const SVG_HEIGHT = 680;
const PADDING_X = 70;
const PADDING_Y = 60;
const MIN_LNG = 72.0;
const MAX_LNG = 89.5;
const MIN_LAT = 8.8;
const MAX_LAT = 33.5;

function projectToSvg(lat: number, lng: number): { x: number; y: number } {
  const normX = (lng - MIN_LNG) / (MAX_LNG - MIN_LNG);
  const normY = (MAX_LAT - lat) / (MAX_LAT - MIN_LAT);

  const x = PADDING_X + normX * (SVG_WIDTH - 2 * PADDING_X);
  const y = PADDING_Y + normY * (SVG_HEIGHT - 2 * PADDING_Y);

  return { x: Math.round(x), y: Math.round(y) };
}

export interface SimulationStep {
  stepNumber: number;
  type: "INIT" | "DEQUEUE" | "EXAMINE" | "RELAX" | "TARGET_REACHED" | "COMPLETE";
  currentNode: string;
  neighborNode?: string;
  edge?: TransportEdge;
  relaxed?: boolean;
  edgeWeight?: number;
  oldDist?: number;
  newDist?: number;
  settledNodes: string[];
  frontierNodes: string[];
  distances: Record<string, number>;
  predecessors: Record<string, string | null>;
  pqSnapshot: Array<{ node: string; dist: number }>;
  explanation: string;
  activePath: string[];
}

interface DijkstraVisualizerTabProps {
  graphSource: string;
  setGraphSource: (val: string) => void;
  graphDest: string;
  setGraphDest: (val: string) => void;
  graphMetric: DijkstraMetric;
  setGraphMetric: (val: DijkstraMetric) => void;
  dijkstraResult: DijkstraResult;
}

export function DijkstraVisualizerTab({
  graphSource,
  setGraphSource,
  graphDest,
  setGraphDest,
  graphMetric,
  setGraphMetric,
  dijkstraResult,
}: DijkstraVisualizerTabProps) {
  // Transport graph instance
  const graph = useMemo(() => getTransportGraph(), []);

  // Filter modes (All, Flight, Train, Road)
  const [filterMode, setFilterMode] = useState<"All" | "Flight" | "Train" | "Road">("All");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [hoveredEdge, setHoveredEdge] = useState<TransportEdge | null>(null);

  // Playback state
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(400); // ms per step
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Unit label based on metric
  const metricUnit = graphMetric === "time" ? "hrs" : graphMetric === "cost" ? "₹" : "km";
  const formatMetric = (val: number) => {
    if (val === Infinity) return "∞";
    if (graphMetric === "cost") return `₹${Math.round(val).toLocaleString()}`;
    return `${val.toFixed(1)} ${metricUnit}`;
  };

  // Generate complete step-by-step simulation trace
  const simulationSteps: SimulationStep[] = useMemo(() => {
    const steps: SimulationStep[] = [];
    const getWeight = (edge: TransportEdge): number => {
      switch (graphMetric) {
        case "time":
          return edge.timeHours;
        case "cost":
          return edge.costInr;
        case "distance":
          return edge.distanceKm;
      }
    };

    const distances: Record<string, number> = {};
    const predecessors: Record<string, string | null> = {};
    const previousEdges: Record<string, TransportEdge | null> = {};
    const visited = new Set<string>();
    const pq: Array<{ node: string; dist: number }> = [];

    for (const node of CITY_NODES) {
      distances[node] = Infinity;
      predecessors[node] = null;
      previousEdges[node] = null;
    }

    distances[graphSource] = 0;
    pq.push({ node: graphSource, dist: 0 });

    const getPqSnapshot = () => [...pq].sort((a, b) => a.dist - b.dist);

    // Initial step
    steps.push({
      stepNumber: 0,
      type: "INIT",
      currentNode: graphSource,
      settledNodes: [],
      frontierNodes: [graphSource],
      distances: { ...distances },
      predecessors: { ...predecessors },
      pqSnapshot: getPqSnapshot(),
      explanation: `Initialized Dijkstra from ${graphSource}. Starting distance set to 0, all other 29 cities set to ∞. ${graphSource} placed into Priority Queue.`,
      activePath: [graphSource],
    });

    let stepCounter = 1;

    while (pq.length > 0) {
      // Sort to extract min
      pq.sort((a, b) => a.dist - b.dist);
      const minItem = pq.shift()!;
      const current = minItem.node;

      if (visited.has(current)) continue;
      visited.add(current);

      const reconstructCurrentPath = (node: string): string[] => {
        const p: string[] = [];
        let curr: string | null = node;
        while (curr) {
          p.unshift(curr);
          curr = predecessors[curr];
        }
        return p;
      };

      const pathSoFar = reconstructCurrentPath(current);

      steps.push({
        stepNumber: stepCounter++,
        type: "DEQUEUE",
        currentNode: current,
        settledNodes: Array.from(visited),
        frontierNodes: pq.map((item) => item.node),
        distances: { ...distances },
        predecessors: { ...predecessors },
        pqSnapshot: getPqSnapshot(),
        explanation: `Dequeued min-distance node ${current} (tentative distance: ${formatMetric(
          distances[current]
        )}) from Priority Queue. Marked as permanently settled.`,
        activePath: pathSoFar,
      });

      if (current === graphDest) {
        steps.push({
          stepNumber: stepCounter++,
          type: "TARGET_REACHED",
          currentNode: current,
          settledNodes: Array.from(visited),
          frontierNodes: pq.map((item) => item.node),
          distances: { ...distances },
          predecessors: { ...predecessors },
          pqSnapshot: getPqSnapshot(),
          explanation: `Destination ${graphDest} dequeued! Optimal shortest path verified with final distance: ${formatMetric(
            distances[graphDest]
          )}.`,
          activePath: pathSoFar,
        });
        break;
      }

      const neighbors = graph.adjacency.get(current) || [];
      for (const edge of neighbors) {
        const neighbor = edge.to;
        if (visited.has(neighbor)) continue;

        const weight = getWeight(edge);
        const oldDist = distances[neighbor];
        const newDist = Number((distances[current] + weight).toFixed(2));

        if (newDist < oldDist) {
          distances[neighbor] = newDist;
          predecessors[neighbor] = current;
          previousEdges[neighbor] = edge;

          // Push or update in PQ
          const existingIdx = pq.findIndex((p) => p.node === neighbor);
          if (existingIdx >= 0) {
            pq[existingIdx].dist = newDist;
          } else {
            pq.push({ node: neighbor, dist: newDist });
          }

          steps.push({
            stepNumber: stepCounter++,
            type: "RELAX",
            currentNode: current,
            neighborNode: neighbor,
            edge,
            edgeWeight: weight,
            oldDist,
            newDist,
            relaxed: true,
            settledNodes: Array.from(visited),
            frontierNodes: pq.map((item) => item.node),
            distances: { ...distances },
            predecessors: { ...predecessors },
            pqSnapshot: getPqSnapshot(),
            explanation: `Relaxed edge ${current} → ${neighbor} via ${edge.mode} (${weight} ${metricUnit}): New tentative distance (${formatMetric(
              distances[current]
            )} + ${weight} = ${formatMetric(newDist)}) is shorter than ${formatMetric(oldDist)}.`,
            activePath: reconstructCurrentPath(neighbor),
          });
        } else {
          steps.push({
            stepNumber: stepCounter++,
            type: "EXAMINE",
            currentNode: current,
            neighborNode: neighbor,
            edge,
            edgeWeight: weight,
            oldDist,
            newDist,
            relaxed: false,
            settledNodes: Array.from(visited),
            frontierNodes: pq.map((item) => item.node),
            distances: { ...distances },
            predecessors: { ...predecessors },
            pqSnapshot: getPqSnapshot(),
            explanation: `Examined edge ${current} → ${neighbor} via ${edge.mode} (${weight} ${metricUnit}): Potential distance (${formatMetric(
              newDist
            )}) is NOT shorter than existing best (${formatMetric(oldDist)}). Skipped.`,
            activePath: pathSoFar,
          });
        }
      }
    }

    // Final completion step
    const finalPath = dijkstraResult.path;
    steps.push({
      stepNumber: stepCounter,
      type: "COMPLETE",
      currentNode: graphDest,
      settledNodes: Array.from(visited),
      frontierNodes: [],
      distances: { ...distances },
      predecessors: { ...predecessors },
      pqSnapshot: [],
      explanation: `Dijkstra's shortest path computation complete! Route: ${finalPath.join(
        " → "
      )} | Total ${metricUnit}: ${formatMetric(distances[graphDest] || 0)}.`,
      activePath: finalPath,
    });

    return steps;
  }, [graph, graphSource, graphDest, graphMetric, dijkstraResult]);

  // Reset step when inputs change
  useEffect(() => {
    setCurrentStepIndex(0);
    setIsPlaying(false);
  }, [graphSource, graphDest, graphMetric]);

  // Handle Play / Pause animation
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev >= simulationSteps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, playbackSpeed);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, simulationSteps.length, playbackSpeed]);

  const currentStep = simulationSteps[currentStepIndex] || simulationSteps[0];

  // Helper set of shortest path edges
  const shortestPathEdges = useMemo(() => {
    const set = new Set<string>();
    const path = dijkstraResult.path;
    for (let i = 0; i < path.length - 1; i++) {
      set.add(`${path[i]}->${path[i + 1]}`);
      set.add(`${path[i + 1]}->${path[i]}`);
    }
    return set;
  }, [dijkstraResult.path]);

  // Final path node set
  const shortestPathNodes = useMemo(() => new Set(dijkstraResult.path), [dijkstraResult.path]);

  // Unique edges for rendering on canvas
  const renderedEdges = useMemo(() => {
    const seen = new Set<string>();
    const list: TransportEdge[] = [];
    for (const e of TRANSPORT_EDGES) {
      const key = [e.from, e.to].sort().join("<->") + `-${e.mode}`;
      if (!seen.has(key)) {
        seen.add(key);
        list.push(e);
      }
    }
    return list;
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      {/* Top Description & Input Selectors (matching user screen) */}
      <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
            Graph Algorithms • O((V + E) log V)
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl text-stone-950">
            Dijkstra&apos;s Shortest Path on Indian Transport Graph
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
            Computes the optimal route between any of the 30 destinations using priority queue edge relaxation.
            Switch between minimizing Travel Time (hours), Cost (INR), or Distance (km).
          </p>
        </div>

        {/* Interactive Selectors */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">
              Origin City
            </label>
            <select
              value={graphSource}
              onChange={(e) => setGraphSource(e.target.value)}
              className="w-full rounded-2xl border border-stone-200 bg-white px-3 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-400"
            >
              {CITY_NODES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">
              Destination City
            </label>
            <select
              value={graphDest}
              onChange={(e) => setGraphDest(e.target.value)}
              className="w-full rounded-2xl border border-stone-200 bg-white px-3 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-400"
            >
              {CITY_NODES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-500 uppercase tracking-wider mb-1">
              Optimization Metric
            </label>
            <select
              value={graphMetric}
              onChange={(e) => setGraphMetric(e.target.value as DijkstraMetric)}
              className="w-full rounded-2xl border border-stone-200 bg-white px-3 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-400"
            >
              <option value="time">Travel Time (Fastest)</option>
              <option value="cost">Travel Cost (Cheapest)</option>
              <option value="distance">Physical Distance (Shortest)</option>
            </select>
          </div>
        </div>

        {/* Result Summary Band (from screenshot) */}
        <div className="mt-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 p-5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-900">
              Optimal Route Computed via Dijkstra
            </span>
            <span className="text-xs font-mono text-amber-800">
              Execution: {dijkstraResult.executionTimeMs} ms
            </span>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            {dijkstraResult.path.map((city, idx) => (
              <div key={city} className="flex items-center gap-2">
                <span className="rounded-xl bg-white border border-amber-300 px-3 py-1.5 font-medium text-xs sm:text-sm text-stone-900 shadow-2xs">
                  {city}
                </span>
                {idx < dijkstraResult.path.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-amber-600" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-amber-200/60 pt-4 text-center">
            <div>
              <span className="text-[10px] uppercase font-semibold text-amber-800 block">Total Time</span>
              <strong className="text-base sm:text-lg font-mono text-stone-900">
                {dijkstraResult.totalTimeHours} hrs
              </strong>
            </div>
            <div>
              <span className="text-[10px] uppercase font-semibold text-amber-800 block">Estimated Spend</span>
              <strong className="text-base sm:text-lg font-mono text-stone-900">
                ₹{dijkstraResult.totalCostInr.toLocaleString()}
              </strong>
            </div>
            <div>
              <span className="text-[10px] uppercase font-semibold text-amber-800 block">Distance</span>
              <strong className="text-base sm:text-lg font-mono text-stone-900">
                {dijkstraResult.totalDistanceKm} km
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE ALGORITHM VISUALIZER SUITE */}
      {/* ========================================================================= */}
      <div className="rounded-3xl border border-stone-200 bg-stone-950 text-white overflow-hidden shadow-xl">
        {/* Visualizer Top Bar & Controls */}
        <div className="border-b border-stone-800 bg-stone-900/90 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-amber-500 animate-pulse" />
            <h3 className="font-serif text-lg text-white font-medium flex items-center gap-2">
              <span>Interactive Graph Visualizer</span>
              <span className="text-xs font-mono font-normal text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded-full">
                Step {currentStepIndex + 1} / {simulationSteps.length}
              </span>
            </h3>
          </div>

          {/* Mode Legend & Filter */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-stone-400 hidden sm:inline">Highlight Mode:</span>
            {(["All", "Flight", "Train", "Road"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setFilterMode(mode)}
                className={`px-2.5 py-1 rounded-lg font-medium transition text-xs flex items-center gap-1.5 ${
                  filterMode === mode
                    ? "bg-amber-500 text-stone-950 font-semibold"
                    : "bg-stone-800 text-stone-300 hover:bg-stone-700"
                }`}
              >
                {mode === "Flight" && <Plane className="h-3 w-3" />}
                {mode === "Train" && <Train className="h-3 w-3" />}
                {mode === "Road" && <Car className="h-3 w-3" />}
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Step Explanation Banner */}
        <div className="bg-stone-900/60 border-b border-stone-800/80 px-6 py-3.5">
          <div className="flex items-start gap-3">
            <div
              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                currentStep.type === "RELAX"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : currentStep.type === "TARGET_REACHED" || currentStep.type === "COMPLETE"
                  ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                  : "bg-sky-500/20 text-sky-400 border border-sky-500/30"
              }`}
            >
              {currentStep.type === "RELAX" ? "✓" : currentStep.type === "DEQUEUE" ? "↓" : "ℹ"}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 font-mono">
                  {currentStep.type.replace("_", " ")}
                </span>
                {currentStep.edge && (
                  <span className="text-[11px] text-stone-400 font-mono">
                    [{currentStep.edge.mode} • {currentStep.edgeWeight} {metricUnit}]
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-xs sm:text-sm text-stone-200 leading-relaxed font-sans">
                {currentStep.explanation}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive SVG Canvas */}
        <div className="relative w-full overflow-hidden bg-radial from-stone-900 via-stone-950 to-black select-none">
          {/* Legend Overlay */}
          <div className="absolute top-4 left-4 z-10 hidden md:flex flex-col gap-1.5 rounded-xl bg-stone-900/80 p-3 text-[11px] text-stone-300 backdrop-blur-md border border-stone-800/70">
            <div className="font-semibold text-stone-200 text-xs mb-1">Visual Legend</div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-emerald-400/40" />
              <span>Origin ({graphSource})</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500 ring-2 ring-rose-400/40" />
              <span>Destination ({graphDest})</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-amber-400 ring-4 ring-amber-400/30" />
              <span>Current Evaluated Node</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-sky-400" />
              <span>In Priority Queue (Frontier)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-stone-700" />
              <span>Settled / Visited</span>
            </div>
            <div className="border-t border-stone-800 pt-1.5 mt-1 flex items-center gap-2 text-amber-300 font-mono">
              <span className="h-1.5 w-6 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
              <span>Optimal Route</span>
            </div>
          </div>

          <svg
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
            className="w-full h-auto max-h-[640px] drop-shadow-md"
          >
            <defs>
              {/* Glowing filter for shortest path */}
              <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background subtle grid lines */}
            <g stroke="#262626" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.4">
              {Array.from({ length: 8 }).map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1={PADDING_X}
                  y1={PADDING_Y + (i * (SVG_HEIGHT - 2 * PADDING_Y)) / 7}
                  x2={SVG_WIDTH - PADDING_X}
                  y2={PADDING_Y + (i * (SVG_HEIGHT - 2 * PADDING_Y)) / 7}
                />
              ))}
              {Array.from({ length: 10 }).map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={PADDING_X + (i * (SVG_WIDTH - 2 * PADDING_X)) / 9}
                  y1={PADDING_Y}
                  x2={PADDING_X + (i * (SVG_WIDTH - 2 * PADDING_X)) / 9}
                  y2={SVG_HEIGHT - PADDING_Y}
                />
              ))}
            </g>

            {/* 1. EDGES LAYER */}
            <g className="edges-layer">
              {renderedEdges.map((e, idx) => {
                const c1 = CITY_COORDS[e.from];
                const c2 = CITY_COORDS[e.to];
                if (!c1 || !c2) return null;

                const p1 = projectToSvg(c1.lat, c1.lng);
                const p2 = projectToSvg(c2.lat, c2.lng);

                const isShortestPath = shortestPathEdges.has(`${e.from}->${e.to}`);
                const isCurrentEdge =
                  currentStep.edge &&
                  ((currentStep.edge.from === e.from && currentStep.edge.to === e.to) ||
                    (currentStep.edge.from === e.to && currentStep.edge.to === e.from));

                const isFiltered = filterMode === "All" || filterMode === e.mode;
                if (!isFiltered && !isShortestPath && !isCurrentEdge) return null;

                // Edge appearance based on state
                let strokeColor = "#44403c"; // stone-700
                let strokeWidth = 1.2;
                let strokeDash = "";
                let opacity = 0.35;

                if (e.mode === "Flight") {
                  strokeDash = "4 4";
                  strokeColor = "#38bdf8"; // sky-400
                  opacity = 0.35;
                } else if (e.mode === "Train") {
                  strokeColor = "#34d399"; // emerald-400
                  opacity = 0.4;
                } else if (e.mode === "Road") {
                  strokeDash = "2 3";
                  strokeColor = "#fbbf24"; // amber-400
                  opacity = 0.4;
                }

                if (isCurrentEdge) {
                  strokeColor = currentStep.relaxed ? "#10b981" : "#f43f5e";
                  strokeWidth = 3.5;
                  opacity = 1;
                } else if (isShortestPath) {
                  strokeColor = "#f59e0b"; // amber-500
                  strokeWidth = 4;
                  opacity = 0.95;
                }

                return (
                  <g key={`${e.from}-${e.to}-${e.mode}-${idx}`}>
                    <line
                      x1={p1.x}
                      y1={p1.y}
                      x2={p2.x}
                      y2={p2.y}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      strokeDasharray={strokeDash}
                      opacity={opacity}
                      filter={isShortestPath ? "url(#goldGlow)" : undefined}
                      className="transition-all duration-300"
                    />

                    {/* Edge Hover Hotspot */}
                    <line
                      x1={p1.x}
                      y1={p1.y}
                      x2={p2.x}
                      y2={p2.y}
                      stroke="transparent"
                      strokeWidth={14}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredEdge(e)}
                      onMouseLeave={() => setHoveredEdge(null)}
                    />
                  </g>
                );
              })}
            </g>

            {/* 2. NODES LAYER */}
            <g className="nodes-layer">
              {CITY_NODES.map((city) => {
                const coord = CITY_COORDS[city];
                if (!coord) return null;

                const { x, y } = projectToSvg(coord.lat, coord.lng);

                const isSource = city === graphSource;
                const isDest = city === graphDest;
                const isCurrent = currentStep.currentNode === city;
                const isNeighbor = currentStep.neighborNode === city;
                const isSettled = currentStep.settledNodes.includes(city);
                const isFrontier = currentStep.frontierNodes.includes(city);
                const isOnShortestPath = shortestPathNodes.has(city);

                // Node coloring & sizing
                let fillColor = "#292524"; // stone-800
                let strokeColor = "#57534e"; // stone-600
                let radius = 6;
                let strokeWidth = 1.5;

                if (isSource) {
                  fillColor = "#10b981"; // emerald-500
                  strokeColor = "#ecfdf5";
                  radius = 10;
                  strokeWidth = 3;
                } else if (isDest) {
                  fillColor = "#f43f5e"; // rose-500
                  strokeColor = "#fff1f2";
                  radius = 10;
                  strokeWidth = 3;
                } else if (isCurrent) {
                  fillColor = "#f59e0b"; // amber-500
                  strokeColor = "#ffffff";
                  radius = 9;
                  strokeWidth = 3;
                } else if (isNeighbor) {
                  fillColor = "#0284c7"; // sky-600
                  strokeColor = "#e0f2fe";
                  radius = 8;
                  strokeWidth = 2.5;
                } else if (isOnShortestPath) {
                  fillColor = "#f59e0b";
                  strokeColor = "#fef3c7";
                  radius = 8;
                  strokeWidth = 2.5;
                } else if (isSettled) {
                  fillColor = "#44403c"; // stone-700
                  strokeColor = "#78716c";
                  radius = 6;
                } else if (isFrontier) {
                  fillColor = "#0369a1"; // sky-700
                  strokeColor = "#38bdf8"; // sky-400
                  radius = 7;
                  strokeWidth = 2;
                }

                const distVal = currentStep.distances[city];
                const labelDist = distVal !== undefined && distVal < Infinity ? formatMetric(distVal) : null;

                return (
                  <g
                    key={city}
                    className="cursor-pointer group transition-transform duration-200"
                    onClick={() => {
                      if (city !== graphSource) {
                        setGraphDest(city);
                      }
                    }}
                    onMouseEnter={() => setHoveredNode(city)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    {/* Pulsing ring for current node or source */}
                    {(isCurrent || isSource) && (
                      <circle
                        cx={x}
                        y={y}
                        r={radius + 7}
                        fill="none"
                        stroke={isSource ? "#10b981" : "#f59e0b"}
                        strokeWidth={1.5}
                        opacity={0.6}
                        className="animate-ping"
                      />
                    )}

                    {/* Main Node Circle */}
                    <circle
                      cx={x}
                      y={y}
                      r={radius}
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      filter={isCurrent || isSource || isDest ? "url(#goldGlow)" : undefined}
                      className="transition-all duration-300"
                    />

                    {/* City Name Label */}
                    <text
                      x={x}
                      y={y - radius - 5}
                      textAnchor="middle"
                      className={`text-[10px] font-sans font-medium transition-all ${
                        isSource
                          ? "fill-emerald-300 font-bold text-[11px]"
                          : isDest
                          ? "fill-rose-300 font-bold text-[11px]"
                          : isCurrent
                          ? "fill-amber-300 font-bold text-[11px]"
                          : isOnShortestPath
                          ? "fill-amber-400 font-semibold"
                          : "fill-stone-300 group-hover:fill-white"
                      }`}
                    >
                      {city}
                    </text>

                    {/* Current Tentative Distance Badge */}
                    {labelDist && (
                      <text
                        x={x}
                        y={y + radius + 11}
                        textAnchor="middle"
                        className="text-[9px] font-mono fill-stone-400 font-medium"
                      >
                        {labelDist}
                      </text>
                    )}
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Floating Hover Tooltip */}
          {hoveredNode && (
            <div className="absolute bottom-4 right-4 z-20 rounded-xl bg-stone-900/95 p-3.5 text-xs text-stone-200 border border-stone-700/80 shadow-2xl backdrop-blur-md min-w-[200px]">
              <div className="flex items-center justify-between border-b border-stone-800 pb-1.5 mb-2">
                <strong className="text-white text-sm font-serif">{hoveredNode}</strong>
                <span className="text-[10px] font-mono text-stone-400">
                  {CITY_COORDS[hoveredNode]?.state}
                </span>
              </div>
              <div className="space-y-1 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-stone-400">Tentative Dist:</span>
                  <span className="font-mono font-bold text-amber-400">
                    {formatMetric(currentStep.distances[hoveredNode] || Infinity)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Predecessor (Via):</span>
                  <span className="font-mono text-stone-300">
                    {currentStep.predecessors[hoveredNode] || "None"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Status:</span>
                  <span
                    className={`font-semibold ${
                      currentStep.settledNodes.includes(hoveredNode)
                        ? "text-emerald-400"
                        : currentStep.frontierNodes.includes(hoveredNode)
                        ? "text-sky-400"
                        : "text-stone-500"
                    }`}
                  >
                    {currentStep.settledNodes.includes(hoveredNode)
                      ? "Settled (Visited)"
                      : currentStep.frontierNodes.includes(hoveredNode)
                      ? "In Priority Queue"
                      : "Unvisited"}
                  </span>
                </div>
              </div>
              <div className="mt-2.5 pt-2 border-t border-stone-800 flex gap-2">
                <button
                  onClick={() => setGraphSource(hoveredNode)}
                  className="flex-1 py-1 rounded bg-stone-800 text-[10px] text-stone-200 hover:bg-stone-700"
                >
                  Set Origin
                </button>
                <button
                  onClick={() => setGraphDest(hoveredNode)}
                  className="flex-1 py-1 rounded bg-stone-800 text-[10px] text-stone-200 hover:bg-stone-700"
                >
                  Set Dest
                </button>
              </div>
            </div>
          )}

          {/* Hovered Edge Tooltip */}
          {hoveredEdge && (
            <div className="absolute bottom-4 left-4 z-20 rounded-xl bg-stone-900/95 p-3 text-xs text-stone-200 border border-stone-700 shadow-xl backdrop-blur-md">
              <div className="font-semibold text-white">
                {hoveredEdge.from} ↔ {hoveredEdge.to}
              </div>
              <div className="mt-1 flex items-center gap-3 text-[11px] text-stone-400 font-mono">
                <span>Mode: {hoveredEdge.mode}</span>
                <span>Time: {hoveredEdge.timeHours} hrs</span>
                <span>Cost: ₹{hoveredEdge.costInr.toLocaleString()}</span>
                <span>Dist: {hoveredEdge.distanceKm} km</span>
              </div>
            </div>
          )}
        </div>

        {/* Playback Controls & Scrubber */}
        <div className="border-t border-stone-800 bg-stone-900 p-4 sm:p-5">
          <div className="flex flex-col gap-4">
            {/* Timeline Slider */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-stone-400 w-12 text-right">
                {currentStepIndex}
              </span>
              <input
                type="range"
                min={0}
                max={simulationSteps.length - 1}
                value={currentStepIndex}
                onChange={(e) => {
                  setIsPlaying(false);
                  setCurrentStepIndex(Number(e.target.value));
                }}
                className="flex-1 h-2 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <span className="text-xs font-mono text-stone-400 w-12">
                {simulationSteps.length - 1}
              </span>
            </div>

            {/* Playback Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentStepIndex(0);
                  }}
                  title="Reset to Start"
                  className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentStepIndex((prev) => Math.max(0, prev - 1));
                  }}
                  title="Step Backward"
                  disabled={currentStepIndex === 0}
                  className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 disabled:opacity-40 transition"
                >
                  <SkipBack className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsPlaying((p) => !p)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-xs sm:text-sm transition ${
                    isPlaying
                      ? "bg-amber-600 text-white hover:bg-amber-500"
                      : "bg-amber-500 text-stone-950 font-semibold hover:bg-amber-400"
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-4 w-4" /> Pause
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" /> Play Animation
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentStepIndex((prev) => Math.min(simulationSteps.length - 1, prev + 1));
                  }}
                  title="Step Forward"
                  disabled={currentStepIndex >= simulationSteps.length - 1}
                  className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 disabled:opacity-40 transition"
                >
                  <SkipForward className="h-4 w-4" />
                </button>
                <button
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentStepIndex(simulationSteps.length - 1);
                  }}
                  title="Jump to Solution"
                  className="px-3 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs text-stone-300 transition"
                >
                  Finish
                </button>
              </div>

              {/* Speed Buttons */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-stone-400">Speed:</span>
                {[
                  { label: "0.5x", val: 800 },
                  { label: "1x", val: 400 },
                  { label: "2x", val: 200 },
                  { label: "4x", val: 80 },
                ].map((s) => (
                  <button
                    key={s.label}
                    onClick={() => setPlaybackSpeed(s.val)}
                    className={`px-2.5 py-1 rounded-lg font-mono text-xs transition ${
                      playbackSpeed === s.val
                        ? "bg-amber-500 text-stone-950 font-bold"
                        : "bg-stone-800 text-stone-400 hover:bg-stone-700"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live State Inspector Grid (Priority Queue & Routing Table) */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-800 bg-stone-900/60 border-t border-stone-800">
          {/* Priority Queue (Min-Heap) Inspector */}
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <ListOrdered className="h-4 w-4 text-sky-400" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
                  Priority Queue Min-Heap ({currentStep.pqSnapshot.length} entries)
                </h4>
              </div>
              <span className="text-[10px] text-stone-400 font-mono">Sorted by {metricUnit}</span>
            </div>

            {currentStep.pqSnapshot.length === 0 ? (
              <div className="rounded-xl border border-dashed border-stone-800 p-4 text-center text-xs text-stone-500">
                Priority Queue is empty (all reachable nodes settled).
              </div>
            ) : (
              <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-1">
                {currentStep.pqSnapshot.map((item, idx) => (
                  <div
                    key={`${item.node}-${idx}`}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono transition ${
                      idx === 0
                        ? "bg-sky-950/80 border-sky-400/60 text-sky-200 shadow-sm shadow-sky-500/20"
                        : "bg-stone-800/80 border-stone-700/60 text-stone-300"
                    }`}
                  >
                    <span className="text-white font-medium">{item.node}</span>
                    <span className="text-amber-400 font-bold">
                      {formatMetric(item.dist)}
                    </span>
                    {idx === 0 && (
                      <span className="ml-1 text-[9px] bg-sky-500 text-stone-950 font-bold px-1.5 py-0.2 rounded uppercase">
                        Next Min
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Current Settled Cities List */}
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
                  Settled Cities ({currentStep.settledNodes.length} / 30)
                </h4>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono">
                {Math.round((currentStep.settledNodes.length / 30) * 100)}% Visited
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
              {currentStep.settledNodes.map((city) => (
                <span
                  key={city}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono border ${
                    shortestPathNodes.has(city)
                      ? "bg-amber-950/60 border-amber-600/70 text-amber-200 font-bold"
                      : "bg-stone-800/60 border-stone-700/60 text-stone-300"
                  }`}
                >
                  <span>{city}</span>
                  <span className="text-stone-400 text-[10px]">
                    ({formatMetric(currentStep.distances[city] || 0)})
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
