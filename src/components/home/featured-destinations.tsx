import { destinations } from "@/data/destinations";
import { MotionSection } from "@/components/shared/motion-section";
import { DestinationCard } from "@/components/shared/destination-card";
import { SectionHeading } from "@/components/ui/section-heading";

// CO3: React Component Model - section composes reusable destination cards from shared data.
export function FeaturedDestinations() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Featured Escapes"
        title="Premium destination stories across both states."
        description="From pilgrimage peaks and canyon ledges to royal fort walls and sea-facing boulevards, every featured stop is shaped for inspiration and practical planning."
      />
      <div className="mt-12 grid gap-8 xl:grid-cols-2">
        {destinations.slice(0, 4).map((destination) => (
          <DestinationCard key={destination.slug} destination={destination} />
        ))}
      </div>
    </MotionSection>
  );
}
