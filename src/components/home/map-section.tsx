import { InteractiveMap } from "@/components/map/interactive-map";
import { MotionSection } from "@/components/shared/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";

// CO5: Routing, Forms, Accessibility & Performance Engineering - map section exposes an interactive geographic browsing path.
export function MapSection() {
  return (
    <MotionSection className="bg-[#f8f3ea] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Interactive Discovery Map"
          title="See Andhra Pradesh and Telangana together on one elegant travel canvas."
          description="Click a marker to preview a destination, inspect timings and best season, and jump directly into the full guide for trip planning."
        />
        <div className="mt-12 overflow-hidden rounded-[34px] border border-stone-200 bg-white p-3 shadow-[0_24px_90px_rgba(28,25,23,0.08)]">
          <InteractiveMap />
        </div>
      </div>
    </MotionSection>
  );
}
