import { Camera, Landmark, MountainSnow, WavesLadder } from "lucide-react";
import { MotionSection } from "@/components/shared/motion-section";

// CO2: JavaScript & TypeScript Engineering - local array data drives repeated UI without duplicate markup.
const highlights = [
  {
    icon: Landmark,
    title: "Sacred Routes",
    detail: "Tirupati, Ramappa, and Thousand Pillar Temple anchor deeply meaningful heritage journeys.",
  },
  {
    icon: WavesLadder,
    title: "Coastal Leisure",
    detail: "Visakhapatnam offers beaches, museums, and easy-paced sea-view evenings.",
  },
  {
    icon: MountainSnow,
    title: "Hill & Canyon Landscapes",
    detail: "Araku Valley and Gandikota transform the route into a visual adventure.",
  },
  {
    icon: Camera,
    title: "Photography-Ready Moments",
    detail: "Every destination includes curated imagery, gallery inspiration, and golden-hour planning cues.",
  },
];

// CO1: Foundations of Front-End Engineering & Framework Design - declarative mapping turns content data into UI.
export function AttractionsStrip() {
  return (
    <MotionSection className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-[0_18px_60px_rgba(28,25,23,0.06)]"
          >
            <item.icon className="h-8 w-8 text-amber-600" />
            <h3 className="mt-5 font-serif text-2xl text-stone-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">{item.detail}</p>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}
