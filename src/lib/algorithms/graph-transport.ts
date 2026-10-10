/**
 * Graph Algorithms for Tourism Transportation & Route Optimization
 * 
 * 1. Dijkstra's Algorithm:
 *    - Computes single-source shortest path on weighted graphs with non-negative edge weights.
 *    - Uses a Min-Heap / Priority Queue.
 *    - Allows optimization for Travel Time (hours), Cost (INR), or Distance (km).
 * 
 * 2. Breadth-First Search (BFS):
 *    - Finds minimum transit transfers/hops between any two cities.
 *    - Discovers all reachable tourist destinations within K hops.
 * 
 * 3. Depth-First Search (DFS):
 *    - Explores full travel circuits and connected components.
 */

export interface TransportEdge {
  from: string;
  to: string;
  distanceKm: number;
  timeHours: number;
  costInr: number;
  mode: "Road" | "Train" | "Flight";
  dailyCapacity: number; // For network flow modeling
}

export interface TransportGraph {
  nodes: string[];
  adjacency: Map<string, TransportEdge[]>;
}

export interface DijkstraStep {
  currentCity: string;
  neighbor: string;
  edgeWeight: number;
  previousDistance: number;
  newDistance: number;
  relaxed: boolean;
}

export interface DijkstraResult {
  source: string;
  destination: string;
  path: string[];
  edgePath: TransportEdge[];
  totalDistanceKm: number;
  totalTimeHours: number;
  totalCostInr: number;
  relaxationTrace: DijkstraStep[];
  allDistances: Record<string, number>;
  executionTimeMs: number;
}

export interface BFSResult {
  source: string;
  destination: string;
  hops: number;
  path: string[];
  reachableCities: Array<{ city: string; hops: number }>;
  executionTimeMs: number;
}

/**
 * Builds an adjacency list transport graph from a list of edges.
 * Treats transport edges as bidirectional by default.
 */
export function buildTransportGraph(
  nodes: string[],
  edges: TransportEdge[],
  directed = false
): TransportGraph {
  const adjacency = new Map<string, TransportEdge[]>();

  for (const node of nodes) {
    adjacency.set(node, []);
  }

  for (const edge of edges) {
    if (!adjacency.has(edge.from)) adjacency.set(edge.from, []);
    if (!adjacency.has(edge.to)) adjacency.set(edge.to, []);

    adjacency.get(edge.from)!.push(edge);

    if (!directed) {
      adjacency.get(edge.to)!.push({
        from: edge.to,
        to: edge.from,
        distanceKm: edge.distanceKm,
        timeHours: edge.timeHours,
        costInr: edge.costInr,
        mode: edge.mode,
        dailyCapacity: edge.dailyCapacity,
      });
    }
  }

  return { nodes, adjacency };
}

/**
 * Priority Queue (Min-Heap) for Dijkstra
 */
class MinPriorityQueue<T> {
  private heap: Array<{ item: T; priority: number }> = [];

  enqueue(item: T, priority: number): void {
    this.heap.push({ item, priority });
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue(): T | undefined {
    if (this.heap.length === 0) return undefined;
    const min = this.heap[0].item;
    const end = this.heap.pop()!;
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown(0);
    }
    return min;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  private bubbleUp(index: number): void {
    const element = this.heap[index];
    while (index > 0) {
      const parentIdx = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIdx];
      if (element.priority >= parent.priority) break;
      this.heap[index] = parent;
      this.heap[parentIdx] = element;
      index = parentIdx;
    }
  }

  private sinkDown(index: number): void {
    const length = this.heap.length;
    const element = this.heap[index];

    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let swapIdx: number | null = null;

      if (leftChildIdx < length) {
        if (this.heap[leftChildIdx].priority < element.priority) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        if (
          (swapIdx === null && this.heap[rightChildIdx].priority < element.priority) ||
          (swapIdx !== null &&
            this.heap[rightChildIdx].priority < this.heap[leftChildIdx].priority)
        ) {
          swapIdx = rightChildIdx;
        }
      }

      if (swapIdx === null) break;
      this.heap[index] = this.heap[swapIdx];
      this.heap[swapIdx] = element;
      index = swapIdx;
    }
  }
}

export type DijkstraMetric = "time" | "cost" | "distance";

/**
 * Dijkstra's Shortest Path Algorithm
 * Time Complexity: O((V + E) log V) with Priority Queue
 */
export function dijkstraShortestPath(
  graph: TransportGraph,
  source: string,
  destination: string,
  metric: DijkstraMetric = "time"
): DijkstraResult {
  const startTime = performance.now();

  const getWeight = (edge: TransportEdge): number => {
    switch (metric) {
      case "time":
        return edge.timeHours;
      case "cost":
        return edge.costInr;
      case "distance":
        return edge.distanceKm;
    }
  };

  const distances: Record<string, number> = {};
  const previousNode: Record<string, string | null> = {};
  const previousEdge: Record<string, TransportEdge | null> = {};
  const visited = new Set<string>();
  const trace: DijkstraStep[] = [];

  for (const node of graph.nodes) {
    distances[node] = Infinity;
    previousNode[node] = null;
    previousEdge[node] = null;
  }

  distances[source] = 0;

  const pq = new MinPriorityQueue<string>();
  pq.enqueue(source, 0);

  while (!pq.isEmpty()) {
    const current = pq.dequeue()!;

    if (visited.has(current)) continue;
    visited.add(current);

    if (current === destination) break;

    const neighbors = graph.adjacency.get(current) || [];
    for (const edge of neighbors) {
      const neighbor = edge.to;
      if (visited.has(neighbor)) continue;

      const weight = getWeight(edge);
      const prevDist = distances[neighbor];
      const newDist = distances[current] + weight;

      if (newDist < prevDist) {
        distances[neighbor] = newDist;
        previousNode[neighbor] = current;
        previousEdge[neighbor] = edge;
        pq.enqueue(neighbor, newDist);

        trace.push({
          currentCity: current,
          neighbor,
          edgeWeight: weight,
          previousDistance: prevDist === Infinity ? -1 : prevDist,
          newDistance: newDist,
          relaxed: true,
        });
      } else {
        trace.push({
          currentCity: current,
          neighbor,
          edgeWeight: weight,
          previousDistance: prevDist,
          newDistance: newDist,
          relaxed: false,
        });
      }
    }
  }

  // Reconstruct path
  const path: string[] = [];
  const edgePath: TransportEdge[] = [];
  let curr: string | null = destination;

  if (distances[destination] !== Infinity) {
    while (curr) {
      path.unshift(curr);
      const edge = previousEdge[curr];
      if (edge) edgePath.unshift(edge);
      curr = previousNode[curr];
    }
  }

  let totalDistanceKm = 0;
  let totalTimeHours = 0;
  let totalCostInr = 0;

  for (const e of edgePath) {
    totalDistanceKm += e.distanceKm;
    totalTimeHours += e.timeHours;
    totalCostInr += e.costInr;
  }

  const executionTimeMs = Number((performance.now() - startTime).toFixed(3));

  return {
    source,
    destination,
    path,
    edgePath,
    totalDistanceKm: Number(totalDistanceKm.toFixed(1)),
    totalTimeHours: Number(totalTimeHours.toFixed(1)),
    totalCostInr: Math.round(totalCostInr),
    relaxationTrace: trace.slice(0, 30), // first 30 steps for UI display
    allDistances: distances,
    executionTimeMs,
  };
}

/**
 * Breadth-First Search (BFS) for Minimum Transfers and Reachability
 */
export function bfsExplore(
  graph: TransportGraph,
  source: string,
  destination?: string
): BFSResult {
  const startTime = performance.now();
  const queue: Array<{ city: string; hops: number; path: string[] }> = [
    { city: source, hops: 0, path: [source] },
  ];
  const visited = new Set<string>([source]);
  const reachableCities: Array<{ city: string; hops: number }> = [];

  let foundPath: string[] = [];
  let totalHops = -1;

  while (queue.length > 0) {
    const { city, hops, path } = queue.shift()!;
    reachableCities.push({ city, hops });

    if (destination && city === destination) {
      foundPath = path;
      totalHops = hops;
      break;
    }

    const neighbors = graph.adjacency.get(city) || [];
    for (const edge of neighbors) {
      if (!visited.has(edge.to)) {
        visited.add(edge.to);
        queue.push({
          city: edge.to,
          hops: hops + 1,
          path: [...path, edge.to],
        });
      }
    }
  }

  return {
    source,
    destination: destination || "",
    hops: totalHops,
    path: foundPath,
    reachableCities,
    executionTimeMs: Number((performance.now() - startTime).toFixed(3)),
  };
}
