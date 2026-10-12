import type { Metadata } from "next";
import { DestinationsBrowser } from "@/components/destinations/destinations-browser";
import { SectionHeading } from "@/components/ui/section-heading";
import { destinations } from "@/data/destinations";

// CO5: Routing, Forms, Accessibility & Performance Engineering - route metadata supports discoverable SPA pages.
export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Browse destinations across Andhra Pradesh and Telangana with filters for state, rating, budget, and best season.",
};

export default function DestinationsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="All Destinations"
        title="Curated places to anchor a spiritual, heritage, coastal, or landscape journey."
        description="Filter by state, budget, season, and rating to move from inspiration to a usable itinerary."
      />
      <div className="mt-12">
        {/* CO4: State Architecture, Async Data Engineering & API Integration - server data is passed into a client filter island. */}
        <DestinationsBrowser destinations={destinations} />
      </div>
    </div>
  );
}
