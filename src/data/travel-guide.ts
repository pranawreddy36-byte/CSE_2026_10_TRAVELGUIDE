import type { Testimonial, TravelGuideSection } from "@/types/tourism";

// CO2: JavaScript & TypeScript Engineering - typed module data keeps guide content reusable and validated.
export const travelGuideSections: TravelGuideSection[] = [
  {
    title: "Packing Recommendations",
    description: "Travel light, but pack with the climate and terrain in mind.",
    points: [
      "Carry breathable cotton layers for warm afternoons and one light jacket for hill stations like Araku.",
      "Slip-resistant footwear is helpful for temple steps, fort walls, and cave walks.",
      "Keep a refillable water bottle, sunscreen, sunglasses, and a compact power bank within reach.",
    ],
  },
  {
    title: "Seasonal Recommendations",
    description: "The region changes dramatically by season, so timing shapes the experience.",
    points: [
      "October to February is ideal for most destinations thanks to cooler weather and clearer skies.",
      "Monsoon travel works beautifully for waterfalls and valley landscapes, but confirm local safety conditions before cave or trekking visits.",
      "Summer is best reserved for early-morning temple visits and coastal evenings.",
    ],
  },
  {
    title: "Safety & Etiquette",
    description: "Respectful travel opens doors to richer local experiences.",
    points: [
      "Dress modestly at spiritual and heritage sites, especially temples.",
      "Use registered taxis or app-based cabs for late-evening transfers.",
      "Keep digital copies of ID, transport tickets, and hotel confirmations ready on your phone.",
    ],
  },
  {
    title: "Smart Transport Tips",
    description: "Combine rail, road, and short cab hops for the smoothest journeys.",
    points: [
      "Use major rail hubs like Tirupati, Visakhapatnam, and Hyderabad for cost-effective intercity movement.",
      "Book sunrise and sunset fort visits with a return cab in advance in lower-connectivity areas like Gandikota.",
      "Add buffer time for temple queues, hill roads, and festival traffic when planning a day trip.",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Maya Chen",
    country: "Singapore",
    quote:
      "The platform made it easy to combine heritage, spirituality, and landscape photography into one unforgettable week.",
    favoriteDestination: "Araku Valley",
  },
  {
    name: "Arjun Mehta",
    country: "India",
    quote:
      "From Tirupati timings to hotel suggestions near Charminar, everything felt curated rather than generic.",
    favoriteDestination: "Tirupati",
  },
  {
    name: "Sofia Alvarez",
    country: "Spain",
    quote:
      "The interactive map helped us build a realistic route across both states without losing the sense of wonder.",
    favoriteDestination: "Golconda Fort",
  },
];
