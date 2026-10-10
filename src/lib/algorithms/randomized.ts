/**
 * Randomized Algorithms for Tourism Analysis & Recommendation
 * 
 * 1. Randomized QuickSort:
 *    - Uses random pivot selection to achieve O(N log N) expected time complexity
 *      with high probability, regardless of the initial ordering of travel items.
 *    - Tracks comparison metrics, recursion depth, and pivot decisions.
 * 
 * 2. Reservoir Sampling (Algorithm R):
 *    - Selects k items randomly from a stream of N travel items with uniform probability (k/N).
 *    - Operates in a single O(N) pass using O(k) space without loading everything in memory.
 *    - Powers "Surprise Me / Hidden Gems" destination recommendations.
 * 
 * 3. Monte Carlo Budget Simulation:
 *    - Runs stochastic simulations (e.g., 1,000 iterations) with randomized seasonal rate variance
 *      to calculate realistic 10th, 50th (median), and 90th percentile budget forecasts.
 */

export interface QuickSortMetrics {
  comparisons: number;
  swaps: number;
  recursionDepth: number;
  executionTimeMs: number;
}

export interface RandomizedQuickSortResult<T> {
  sortedItems: T[];
  metrics: QuickSortMetrics;
}

export interface ReservoirSamplingResult<T> {
  sample: T[];
  totalSeen: number;
  sampleSize: number;
  executionTimeMs: number;
}

export interface MonteCarloBudgetSimulation {
  iterations: number;
  baseBudget: number;
  p10Low: number;
  p50Median: number;
  p90High: number;
  standardDeviation: number;
  confidenceInterval95: [number, number];
  executionTimeMs: number;
}

/**
 * Randomized QuickSort implementation
 * Comparator returns negative if a < b, 0 if equal, positive if a > b.
 */
export function randomizedQuickSort<T>(
  items: T[],
  comparator: (a: T, b: T) => number
): RandomizedQuickSortResult<T> {
  const startTime = performance.now();
  const arr = [...items];
  let comparisons = 0;
  let swaps = 0;
  let maxDepth = 0;

  function swap(i: number, j: number) {
    swaps++;
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  function partition(low: number, high: number): number {
    // Choose random pivot between low and high
    const randomPivotIdx = low + Math.floor(Math.random() * (high - low + 1));
    swap(randomPivotIdx, high);

    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      comparisons++;
      if (comparator(arr[j], pivot) <= 0) {
        i++;
        swap(i, j);
      }
    }

    swap(i + 1, high);
    return i + 1;
  }

  function sort(low: number, high: number, depth: number) {
    if (depth > maxDepth) maxDepth = depth;
    if (low < high) {
      const pi = partition(low, high);
      sort(low, pi - 1, depth + 1);
      sort(pi + 1, high, depth + 1);
    }
  }

  if (arr.length > 1) {
    sort(0, arr.length - 1, 1);
  }

  return {
    sortedItems: arr,
    metrics: {
      comparisons,
      swaps,
      recursionDepth: maxDepth,
      executionTimeMs: Number((performance.now() - startTime).toFixed(3)),
    },
  };
}

/**
 * Reservoir Sampling (Algorithm R by Alan G. Waterman)
 * Uniformly selects k elements from items array of size N in single pass.
 */
export function reservoirSample<T>(items: T[], k: number): ReservoirSamplingResult<T> {
  const startTime = performance.now();
  const n = items.length;

  if (k <= 0) {
    return { sample: [], totalSeen: n, sampleSize: 0, executionTimeMs: 0 };
  }

  if (k >= n) {
    return {
      sample: [...items],
      totalSeen: n,
      sampleSize: n,
      executionTimeMs: Number((performance.now() - startTime).toFixed(3)),
    };
  }

  const reservoir: T[] = [];

  // Step 1: Fill reservoir with first k elements
  for (let i = 0; i < k; i++) {
    reservoir.push(items[i]);
  }

  // Step 2: Iterate through remaining elements
  for (let i = k; i < n; i++) {
    // Pick random index between 0 and i inclusive
    const j = Math.floor(Math.random() * (i + 1));
    // If j is within reservoir range, replace element
    if (j < k) {
      reservoir[j] = items[i];
    }
  }

  return {
    sample: reservoir,
    totalSeen: n,
    sampleSize: k,
    executionTimeMs: Number((performance.now() - startTime).toFixed(3)),
  };
}

/**
 * Monte Carlo Simulation for Vacation Budget Forecasting
 * Simulates volatile costs (seasonal hotel surges, cab surges, food inflation).
 */
export function runMonteCarloBudgetSimulation(
  baseDailyBudget: number,
  tripDays = 3,
  iterations = 1000
): MonteCarloBudgetSimulation {
  const startTime = performance.now();
  const simulatedTotals: number[] = new Array(iterations);

  const baseTotal = baseDailyBudget * tripDays;

  for (let iter = 0; iter < iterations; iter++) {
    let tripSpend = 0;
    for (let day = 0; day < tripDays; day++) {
      // Hotel rate variation: -10% to +35% (surge pricing)
      const hotelFactor = 0.9 + Math.random() * 0.45;
      // Transport / cab variation: -5% to +40% (surge during peak hours)
      const transitFactor = 0.95 + Math.random() * 0.45;
      // Food / misc variation: -10% to +20%
      const miscFactor = 0.9 + Math.random() * 0.3;

      const dailyRate =
        baseDailyBudget * 0.5 * hotelFactor +
        baseDailyBudget * 0.25 * transitFactor +
        baseDailyBudget * 0.25 * miscFactor;

      tripSpend += dailyRate;
    }
    simulatedTotals[iter] = tripSpend;
  }

  // Sort simulated results to obtain percentiles
  simulatedTotals.sort((a, b) => a - b);

  const p10 = Math.round(simulatedTotals[Math.floor(iterations * 0.1)]);
  const p50 = Math.round(simulatedTotals[Math.floor(iterations * 0.5)]);
  const p90 = Math.round(simulatedTotals[Math.floor(iterations * 0.9)]);

  // Calculate standard deviation
  let sum = 0;
  for (const val of simulatedTotals) sum += val;
  const mean = sum / iterations;

  let varianceSum = 0;
  for (const val of simulatedTotals) varianceSum += (val - mean) ** 2;
  const standardDeviation = Math.round(Math.sqrt(varianceSum / iterations));

  const p025 = Math.round(simulatedTotals[Math.floor(iterations * 0.025)]);
  const p975 = Math.round(simulatedTotals[Math.floor(iterations * 0.975)]);

  return {
    iterations,
    baseBudget: baseTotal,
    p10Low: p10,
    p50Median: p50,
    p90High: p90,
    standardDeviation,
    confidenceInterval95: [p025, p975],
    executionTimeMs: Number((performance.now() - startTime).toFixed(3)),
  };
}
