// CO2: JavaScript & TypeScript Engineering - domain types enforce UI data correctness across components.
export type StateName =
  | "Andhra Pradesh"
  | "Telangana"
  | "Delhi"
  | "Maharashtra"
  | "Goa"
  | "Rajasthan"
  | "Uttar Pradesh"
  | "West Bengal"
  | "Tamil Nadu"
  | "Karnataka"
  | "Kerala"
  | "Himachal Pradesh"
  | "Punjab"
  | "Ladakh"
  | "Uttarakhand"
  | "Madhya Pradesh"
  | "Odisha"
  | "Puducherry"
  | "Sikkim"
  | (string & {});

export type RegionType = "city" | "hill-station" | "heritage-site" | "spiritual-site";

export type BudgetTier = "budget" | "mid-range" | "premium";

export interface DestinationImage {
  src: string;
  alt: string;
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  image: string;
  timings: string;
  entryFee: string;
}

export interface NearbyAttraction {
  name: string;
  distance: string;
  description: string;
}

export interface TransportInfo {
  mode: "Flights" | "Trains" | "Buses" | "Taxi";
  title: string;
  details: string;
  estimatedCost: string;
}

export interface Hotel {
  name: string;
  category: BudgetTier;
  priceRange: string;
  distanceFromCenter: string;
  rating: number;
  description: string;
}

export interface Restaurant {
  name: string;
  cuisine: string;
  priceRange: string;
  rating: number;
  specialDish: string;
  distanceFromCenter: string;
  description: string;
}

export interface ItineraryDay {
  title: string;
  summary: string;
  highlights: string[];
}

export interface TravelTip {
  title: string;
  detail: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  state: StateName;
  city: string;
  regionType: RegionType;
  description: string;
  history: string;
  heroImage: string;
  heroImageAlt: string;
  galleryImages: DestinationImage[];
  openingTime: string;
  closingTime: string;
  entryFee: string;
  foreignerFee: string;
  parkingFee: string;
  bestTimeToVisit: string;
  recommendedDuration: string;
  rating: number;
  transportModes: string[];
  latitude: number;
  longitude: number;
  nearbyAttractions: NearbyAttraction[];
  featuredAttractions: Attraction[];
  nearbyHotels: Hotel[];
  nearbyRestaurants: Restaurant[];
  suggestedItinerary: ItineraryDay[];
  travelTips: TravelTip[];
  startingBudget: string;
  budgetTier: BudgetTier;
  costEstimate: {
    backpacker: string;
    comfort: string;
    premium: string;
  };
}

export interface Testimonial {
  name: string;
  country: string;
  quote: string;
  favoriteDestination: string;
}

export interface TravelGuideSection {
  title: string;
  description: string;
  points: string[];
}
