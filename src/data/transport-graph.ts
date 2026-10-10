import { TransportEdge, buildTransportGraph, TransportGraph } from "@/lib/algorithms/graph-transport";

export const CITY_NODES: string[] = [
  "Tirupati",
  "Visakhapatnam",
  "Araku Valley",
  "Gandikota",
  "Vijayawada",
  "Rajahmundry",
  "Srisailam",
  "Hyderabad",
  "Warangal",
  "Ramappa",
  "Nagarjuna Sagar",
  "Delhi",
  "Mumbai",
  "Jaipur",
  "Udaipur",
  "Agra",
  "Varanasi",
  "Goa",
  "Bengaluru",
  "Mysuru",
  "Hampi",
  "Chennai",
  "Madurai",
  "Kochi",
  "Munnar",
  "Kolkata",
  "Darjeeling",
  "Amritsar",
  "Shimla",
  "Manali",
];

export const TRANSPORT_EDGES: TransportEdge[] = [
  // Andhra & Telangana Regional Circuit
  { from: "Hyderabad", to: "Warangal", distanceKm: 145, timeHours: 2.5, costInr: 350, mode: "Train", dailyCapacity: 12000 },
  { from: "Warangal", to: "Ramappa", distanceKm: 65, timeHours: 1.5, costInr: 200, mode: "Road", dailyCapacity: 4000 },
  { from: "Hyderabad", to: "Nagarjuna Sagar", distanceKm: 165, timeHours: 3.5, costInr: 450, mode: "Road", dailyCapacity: 5000 },
  { from: "Hyderabad", to: "Srisailam", distanceKm: 215, timeHours: 4.5, costInr: 600, mode: "Road", dailyCapacity: 6000 },
  { from: "Hyderabad", to: "Vijayawada", distanceKm: 275, timeHours: 4.0, costInr: 550, mode: "Train", dailyCapacity: 18000 },
  { from: "Vijayawada", to: "Rajahmundry", distanceKm: 160, timeHours: 2.5, costInr: 300, mode: "Train", dailyCapacity: 15000 },
  { from: "Rajahmundry", to: "Visakhapatnam", distanceKm: 190, timeHours: 3.0, costInr: 400, mode: "Train", dailyCapacity: 16000 },
  { from: "Visakhapatnam", to: "Araku Valley", distanceKm: 115, timeHours: 3.0, costInr: 250, mode: "Train", dailyCapacity: 4500 },
  { from: "Vijayawada", to: "Tirupati", distanceKm: 380, timeHours: 6.0, costInr: 650, mode: "Train", dailyCapacity: 14000 },
  { from: "Tirupati", to: "Gandikota", distanceKm: 220, timeHours: 4.5, costInr: 550, mode: "Road", dailyCapacity: 3500 },
  { from: "Hyderabad", to: "Gandikota", distanceKm: 385, timeHours: 7.0, costInr: 850, mode: "Road", dailyCapacity: 3000 },

  // South-Central Hubs
  { from: "Hyderabad", to: "Bengaluru", distanceKm: 570, timeHours: 1.2, costInr: 3200, mode: "Flight", dailyCapacity: 9000 },
  { from: "Hyderabad", to: "Bengaluru", distanceKm: 570, timeHours: 8.5, costInr: 950, mode: "Train", dailyCapacity: 14000 },
  { from: "Hyderabad", to: "Chennai", distanceKm: 630, timeHours: 1.3, costInr: 3400, mode: "Flight", dailyCapacity: 8000 },
  { from: "Hyderabad", to: "Goa", distanceKm: 650, timeHours: 1.5, costInr: 3800, mode: "Flight", dailyCapacity: 5000 },
  { from: "Hyderabad", to: "Mumbai", distanceKm: 710, timeHours: 1.4, costInr: 3600, mode: "Flight", dailyCapacity: 12000 },
  { from: "Hyderabad", to: "Delhi", distanceKm: 1580, timeHours: 2.2, costInr: 4800, mode: "Flight", dailyCapacity: 15000 },
  { from: "Hyderabad", to: "Kolkata", distanceKm: 1480, timeHours: 2.1, costInr: 4600, mode: "Flight", dailyCapacity: 7500 },

  // Karnataka & Tamil Nadu Network
  { from: "Bengaluru", to: "Mysuru", distanceKm: 145, timeHours: 2.0, costInr: 250, mode: "Train", dailyCapacity: 22000 },
  { from: "Bengaluru", to: "Hampi", distanceKm: 340, timeHours: 6.5, costInr: 650, mode: "Train", dailyCapacity: 6000 },
  { from: "Bengaluru", to: "Chennai", distanceKm: 350, timeHours: 4.5, costInr: 600, mode: "Train", dailyCapacity: 25000 },
  { from: "Chennai", to: "Tirupati", distanceKm: 135, timeHours: 3.0, costInr: 200, mode: "Train", dailyCapacity: 16000 },
  { from: "Chennai", to: "Madurai", distanceKm: 460, timeHours: 6.5, costInr: 750, mode: "Train", dailyCapacity: 15000 },
  { from: "Bengaluru", to: "Kochi", distanceKm: 550, timeHours: 1.1, costInr: 3100, mode: "Flight", dailyCapacity: 7000 },

  // Kerala Circuit
  { from: "Kochi", to: "Munnar", distanceKm: 130, timeHours: 3.5, costInr: 450, mode: "Road", dailyCapacity: 5500 },
  { from: "Madurai", to: "Munnar", distanceKm: 155, timeHours: 4.0, costInr: 500, mode: "Road", dailyCapacity: 4000 },
  { from: "Madurai", to: "Kochi", distanceKm: 270, timeHours: 6.0, costInr: 600, mode: "Road", dailyCapacity: 4500 },

  // Goa & Western Links
  { from: "Goa", to: "Mumbai", distanceKm: 590, timeHours: 1.1, costInr: 2900, mode: "Flight", dailyCapacity: 10000 },
  { from: "Goa", to: "Mumbai", distanceKm: 590, timeHours: 9.0, costInr: 950, mode: "Train", dailyCapacity: 12000 },
  { from: "Goa", to: "Bengaluru", distanceKm: 560, timeHours: 1.2, costInr: 3100, mode: "Flight", dailyCapacity: 6000 },
  { from: "Goa", to: "Hampi", distanceKm: 315, timeHours: 6.5, costInr: 550, mode: "Road", dailyCapacity: 3500 },

  // North & Golden Triangle Circuit
  { from: "Delhi", to: "Agra", distanceKm: 210, timeHours: 2.0, costInr: 500, mode: "Train", dailyCapacity: 30000 },
  { from: "Delhi", to: "Jaipur", distanceKm: 270, timeHours: 3.5, costInr: 550, mode: "Train", dailyCapacity: 24000 },
  { from: "Agra", to: "Jaipur", distanceKm: 240, timeHours: 4.0, costInr: 450, mode: "Train", dailyCapacity: 12000 },
  { from: "Jaipur", to: "Udaipur", distanceKm: 395, timeHours: 6.5, costInr: 650, mode: "Train", dailyCapacity: 8000 },
  { from: "Delhi", to: "Udaipur", distanceKm: 660, timeHours: 1.3, costInr: 3500, mode: "Flight", dailyCapacity: 6500 },
  { from: "Mumbai", to: "Udaipur", distanceKm: 750, timeHours: 1.4, costInr: 3600, mode: "Flight", dailyCapacity: 6000 },
  { from: "Delhi", to: "Varanasi", distanceKm: 820, timeHours: 1.4, costInr: 3800, mode: "Flight", dailyCapacity: 9000 },
  { from: "Delhi", to: "Varanasi", distanceKm: 820, timeHours: 8.0, costInr: 1100, mode: "Train", dailyCapacity: 18000 },
  { from: "Agra", to: "Varanasi", distanceKm: 610, timeHours: 7.0, costInr: 850, mode: "Train", dailyCapacity: 10000 },
  { from: "Delhi", to: "Amritsar", distanceKm: 450, timeHours: 5.5, costInr: 800, mode: "Train", dailyCapacity: 16000 },

  // Himalayan & Northern Hills Circuit
  { from: "Delhi", to: "Shimla", distanceKm: 345, timeHours: 7.0, costInr: 900, mode: "Road", dailyCapacity: 8000 },
  { from: "Shimla", to: "Manali", distanceKm: 250, timeHours: 6.5, costInr: 750, mode: "Road", dailyCapacity: 5000 },
  { from: "Delhi", to: "Manali", distanceKm: 540, timeHours: 12.0, costInr: 1400, mode: "Road", dailyCapacity: 7000 },
  { from: "Amritsar", to: "Manali", distanceKm: 400, timeHours: 9.5, costInr: 1100, mode: "Road", dailyCapacity: 4000 },

  // Eastern & Northeast Gateway Circuit
  { from: "Kolkata", to: "Varanasi", distanceKm: 680, timeHours: 9.0, costInr: 950, mode: "Train", dailyCapacity: 14000 },
  { from: "Kolkata", to: "Darjeeling", distanceKm: 610, timeHours: 11.0, costInr: 1200, mode: "Train", dailyCapacity: 7500 },
  { from: "Kolkata", to: "Visakhapatnam", distanceKm: 880, timeHours: 13.0, costInr: 1100, mode: "Train", dailyCapacity: 11000 },
  { from: "Kolkata", to: "Delhi", distanceKm: 1450, timeHours: 2.1, costInr: 4500, mode: "Flight", dailyCapacity: 16000 },
  { from: "Mumbai", to: "Delhi", distanceKm: 1410, timeHours: 2.1, costInr: 4200, mode: "Flight", dailyCapacity: 28000 },
  { from: "Mumbai", to: "Bengaluru", distanceKm: 980, timeHours: 1.6, costInr: 3500, mode: "Flight", dailyCapacity: 18000 },
  { from: "Chennai", to: "Kolkata", distanceKm: 1660, timeHours: 2.3, costInr: 4700, mode: "Flight", dailyCapacity: 7000 },
];

let cachedGraph: TransportGraph | null = null;

export function getTransportGraph(): TransportGraph {
  if (!cachedGraph) {
    cachedGraph = buildTransportGraph(CITY_NODES, TRANSPORT_EDGES, false);
  }
  return cachedGraph;
}
