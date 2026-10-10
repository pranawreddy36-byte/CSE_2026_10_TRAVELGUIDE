/**
 * Network Flow Algorithms for Tourism Logistics & Capacity Allocation
 * 
 * Ford-Fulkerson Algorithm (Edmonds-Karp Implementation):
 * - Computes Maximum Flow from a Source transit hub (e.g., Delhi, Hyderabad) to a Destination region (e.g., Goa, South Coastal).
 * - Uses BFS to repeatedly locate the shortest augmenting path in the residual graph.
 * - Time Complexity: O(V * E^2)
 * 
 * Max-Flow Min-Cut Theorem:
 * - The value of the maximum flow equals the capacity of the minimum cut.
 * - Identifies structural bottlenecks in tourist transport corridors (e.g., flight seats, train berths, highway capacity).
 */

export interface FlowEdge {
  from: string;
  to: string;
  capacity: number;
  flow: number;
}

export interface AugmentingPathStep {
  path: string[];
  bottleneckCapacity: number;
}

export interface MinCutPartition {
  sourceSet: string[];
  sinkSet: string[];
  cutEdges: Array<{ from: string; to: string; capacity: number }>;
}

export interface MaxFlowResult {
  source: string;
  sink: string;
  maxFlow: number;
  augmentingPaths: AugmentingPathStep[];
  edgeFlows: FlowEdge[];
  minCut: MinCutPartition;
  executionTimeMs: number;
}

/**
 * Edmonds-Karp Algorithm for Maximum Network Flow
 */
export function edmondsKarpMaxFlow(
  nodes: string[],
  initialEdges: Array<{ from: string; to: string; capacity: number }>,
  source: string,
  sink: string
): MaxFlowResult {
  const startTime = performance.now();

  // Create residual capacity map
  // key: "u->v" => capacity
  const capacity = new Map<string, number>();
  const flow = new Map<string, number>();
  const adj = new Map<string, string[]>();

  for (const node of nodes) {
    adj.set(node, []);
  }

  for (const { from, to, capacity: cap } of initialEdges) {
    adj.get(from)?.push(to);
    adj.get(to)?.push(from); // backward edge for residual graph

    const keyFwd = `${from}->${to}`;
    const keyRev = `${to}->${from}`;

    capacity.set(keyFwd, (capacity.get(keyFwd) || 0) + cap);
    if (!capacity.has(keyRev)) {
      capacity.set(keyRev, 0);
    }
    flow.set(keyFwd, 0);
    flow.set(keyRev, 0);
  }

  let totalFlow = 0;
  const augmentingPaths: AugmentingPathStep[] = [];

  // BFS to find augmenting path with residual capacity > 0
  while (true) {
    const parent = new Map<string, string | null>();
    const visited = new Set<string>();
    const queue: string[] = [source];
    visited.add(source);
    parent.set(source, null);

    let pathFound = false;

    while (queue.length > 0) {
      const u = queue.shift()!;
      if (u === sink) {
        pathFound = true;
        break;
      }

      for (const v of adj.get(u) || []) {
        const key = `${u}->${v}`;
        const residualCap = (capacity.get(key) || 0) - (flow.get(key) || 0);

        if (!visited.has(v) && residualCap > 0) {
          visited.add(v);
          parent.set(v, u);
          queue.push(v);
        }
      }
    }

    if (!pathFound) break;

    // Determine bottleneck capacity along augmenting path
    let pushFlow = Infinity;
    let curr: string | null = sink;
    const pathNodes: string[] = [];

    while (curr !== null) {
      pathNodes.unshift(curr);
      const prev = parent.get(curr);
      if (prev !== null && prev !== undefined) {
        const key = `${prev}->${curr}`;
        const residualCap = (capacity.get(key) || 0) - (flow.get(key) || 0);
        pushFlow = Math.min(pushFlow, residualCap);
      }
      curr = prev ?? null;
    }

    // Apply pushFlow to forward edges and subtract from backward edges
    curr = sink;
    while (curr !== null) {
      const prev = parent.get(curr);
      if (prev !== null && prev !== undefined) {
        const fwdKey = `${prev}->${curr}`;
        const revKey = `${curr}->${prev}`;

        flow.set(fwdKey, (flow.get(fwdKey) || 0) + pushFlow);
        flow.set(revKey, (flow.get(revKey) || 0) - pushFlow);
      }
      curr = prev ?? null;
    }

    totalFlow += pushFlow;
    augmentingPaths.push({
      path: pathNodes,
      bottleneckCapacity: pushFlow,
    });
  }

  // Find Min-Cut: Reachable nodes from source in residual graph
  const reachableFromSource = new Set<string>();
  const cutQueue: string[] = [source];
  reachableFromSource.add(source);

  while (cutQueue.length > 0) {
    const u = cutQueue.shift()!;
    for (const v of adj.get(u) || []) {
      const key = `${u}->${v}`;
      const residual = (capacity.get(key) || 0) - (flow.get(key) || 0);
      if (!reachableFromSource.has(v) && residual > 0) {
        reachableFromSource.add(v);
        cutQueue.push(v);
      }
    }
  }

  const sourceSet = Array.from(reachableFromSource);
  const sinkSet = nodes.filter((n) => !reachableFromSource.has(n));

  // Cut edges cross from sourceSet to sinkSet with original capacity
  const cutEdges: Array<{ from: string; to: string; capacity: number }> = [];
  for (const edge of initialEdges) {
    if (reachableFromSource.has(edge.from) && !reachableFromSource.has(edge.to)) {
      cutEdges.push(edge);
    }
  }

  // Compile edge flow summaries
  const edgeFlows: FlowEdge[] = initialEdges.map((e) => {
    const key = `${e.from}->${e.to}`;
    return {
      from: e.from,
      to: e.to,
      capacity: e.capacity,
      flow: Math.max(0, flow.get(key) || 0),
    };
  });

  return {
    source,
    sink,
    maxFlow: totalFlow,
    augmentingPaths,
    edgeFlows,
    minCut: {
      sourceSet,
      sinkSet,
      cutEdges,
    },
    executionTimeMs: Number((performance.now() - startTime).toFixed(3)),
  };
}
