/**
 * Approximation & Greedy Algorithms for Tourism Optimization
 * 
 * 1. Traveling Salesperson Problem (TSP) Approximation:
 *    - Finds a near-optimal tour visiting a set of chosen tourist cities and returning to start.
 *    - Uses Nearest Neighbor Greedy Heuristic combined with 2-Opt local search optimization.
 *    - Approximates the NP-hard Metric TSP problem in polynomial time O(N^2).
 * 
 * 2. Activity Selection Problem (Greedy Scheduling):
 *    - Selects the maximum number of non-overlapping tourist activities in a single day.
 *    - Sorts activities by earliest finish time and greedily admits compatible events.
 *    - Time Complexity: O(N log N)
 */

export interface TSPCityNode {
  name: string;
  latitude: number;
  longitude: number;
}

export interface TSPLeg {
  from: string;
  to: string;
  distanceKm: number;
}

export interface TSPTourResult {
  orderedCities: string[];
  legs: TSPLeg[];
  totalDistanceKm: number;
  initialGreedyDistanceKm: number;
  twoOptImprovementKm: number;
  improvementPercentage: number;
  executionTimeMs: number;
}

export interface TouristActivity {
  id: string;
  name: string;
  startTime: number; // e.g. 9.5 for 9:30 AM
  endTime: number;   // e.g. 11.5 for 11:30 AM
  category: string;
  fee: string;
  rating: number;
}

export interface ActivityScheduleResult {
  selectedActivities: TouristActivity[];
  totalActivitiesCount: number;
  conflictingActivitiesCount: number;
  totalHoursPlanned: number;
  executionTimeMs: number;
}

/**
 * Haversine formula to calculate great-circle distance between two coordinates in kilometers.
 */
export function calculateHaversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Approximates TSP using Nearest Neighbor followed by 2-Opt Local Search
 */
export function solveTSPApproximation(cities: TSPCityNode[]): TSPTourResult {
  const startTime = performance.now();
  const n = cities.length;

  if (n <= 1) {
    return {
      orderedCities: cities.map((c) => c.name),
      legs: [],
      totalDistanceKm: 0,
      initialGreedyDistanceKm: 0,
      twoOptImprovementKm: 0,
      improvementPercentage: 0,
      executionTimeMs: 0,
    };
  }

  // Precompute distance matrix
  const distMatrix: number[][] = Array.from({ length: n }, () => new Array<number>(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        distMatrix[i][j] = calculateHaversineDistance(
          cities[i].latitude,
          cities[i].longitude,
          cities[j].latitude,
          cities[j].longitude
        );
      }
    }
  }

  // 1. Nearest Neighbor Heuristic
  const visited = new Array<boolean>(n).fill(false);
  const tour: number[] = [0];
  visited[0] = true;

  for (let step = 1; step < n; step++) {
    const last = tour[tour.length - 1];
    let nearest = -1;
    let minDist = Infinity;

    for (let candidate = 0; candidate < n; candidate++) {
      if (!visited[candidate] && distMatrix[last][candidate] < minDist) {
        minDist = distMatrix[last][candidate];
        nearest = candidate;
      }
    }

    if (nearest !== -1) {
      tour.push(nearest);
      visited[nearest] = true;
    }
  }
  // Return to start
  tour.push(tour[0]);

  const calcTourDistance = (t: number[]): number => {
    let sum = 0;
    for (let i = 0; i < t.length - 1; i++) {
      sum += distMatrix[t[i]][t[i + 1]];
    }
    return sum;
  };

  const initialGreedyDistance = calcTourDistance(tour);

  // 2. 2-Opt Local Search Improvement
  let improved = true;
  let currentTour = [...tour];
  let currentDist = initialGreedyDistance;
  let iterations = 0;

  while (improved && iterations < 50) {
    improved = false;
    iterations++;

    for (let i = 1; i < currentTour.length - 2; i++) {
      for (let k = i + 1; k < currentTour.length - 1; k++) {
        // Reverse segment between i and k
        const newTour = [
          ...currentTour.slice(0, i),
          ...currentTour.slice(i, k + 1).reverse(),
          ...currentTour.slice(k + 1),
        ];

        const newDist = calcTourDistance(newTour);
        if (newDist < currentDist - 0.01) {
          currentTour = newTour;
          currentDist = newDist;
          improved = true;
          break;
        }
      }
      if (improved) break;
    }
  }

  // Construct legs
  const legs: TSPLeg[] = [];
  for (let i = 0; i < currentTour.length - 1; i++) {
    const fromCity = cities[currentTour[i]].name;
    const toCity = cities[currentTour[i + 1]].name;
    const legDist = distMatrix[currentTour[i]][currentTour[i + 1]];
    legs.push({
      from: fromCity,
      to: toCity,
      distanceKm: Number(legDist.toFixed(1)),
    });
  }

  const twoOptImprovementKm = Number(Math.max(0, initialGreedyDistance - currentDist).toFixed(1));
  const improvementPercentage = initialGreedyDistance > 0
    ? Number(((twoOptImprovementKm / initialGreedyDistance) * 100).toFixed(1))
    : 0;

  return {
    orderedCities: currentTour.map((idx) => cities[idx].name),
    legs,
    totalDistanceKm: Number(currentDist.toFixed(1)),
    initialGreedyDistanceKm: Number(initialGreedyDistance.toFixed(1)),
    twoOptImprovementKm,
    improvementPercentage,
    executionTimeMs: Number((performance.now() - startTime).toFixed(3)),
  };
}

/**
 * Greedy Activity Selection Problem
 * Optimal scheduling for maximum non-overlapping tourist attractions in one day.
 */
export function scheduleActivities(activities: TouristActivity[]): ActivityScheduleResult {
  const startTime = performance.now();

  // Sort activities by earliest finish time (Greedy Choice Property)
  const sorted = [...activities].sort((a, b) => a.endTime - b.endTime);
  const selected: TouristActivity[] = [];

  let lastFinishTime = -1;

  for (const act of sorted) {
    if (act.startTime >= lastFinishTime) {
      selected.push(act);
      lastFinishTime = act.endTime;
    }
  }

  let totalHours = 0;
  for (const s of selected) {
    totalHours += s.endTime - s.startTime;
  }

  return {
    selectedActivities: selected,
    totalActivitiesCount: selected.length,
    conflictingActivitiesCount: activities.length - selected.length,
    totalHoursPlanned: Number(totalHours.toFixed(1)),
    executionTimeMs: Number((performance.now() - startTime).toFixed(3)),
  };
}
