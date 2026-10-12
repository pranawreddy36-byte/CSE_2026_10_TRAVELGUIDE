import type { Metadata } from "next";
import { Landmark, Music4, ScrollText, Trees } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

// CO5: Routing, Forms, Accessibility & Performance Engineering - per-route metadata improves page discoverability.
export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the culture, heritage, spiritual importance, landscapes, and tourism identity of Andhra Pradesh and Telangana.",
};

const pillars = [
  {
    icon: Landmark,
    title: "Heritage",
    detail:
      "From Kakatiya temples to Deccan forts and old-city landmarks, the region carries a dense architectural memory.",
  },
  {
    icon: Music4,
    title: "Culture",
    detail:
      "Cuisine, markets, devotional traditions, language, crafts, and festivals shape the visitor experience as much as monuments do.",
  },
  {
    icon: Trees,
    title: "Landscape",
    detail:
      "Travelers move between beaches, valleys, sacred hills, fort plateaus, river gorges, and agricultural plains in surprisingly short distances.",
  },
  {
    icon: ScrollText,
    title: "Storytelling",
    detail:
      "This platform treats tourism as narrative and logistics together, so the place feels rich before the traveler arrives.",
  },
];

// CO3: React Component Model - deterministic component maps typed content into repeated UI cards.
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About The Region"
        title="Two states, many travel moods: sacred, scenic, historic, and deeply alive."
        description="Andhra Pradesh and Telangana offer a layered travel experience where coastal ease, temple devotion, plateau landscapes, and centuries of art and architecture coexist."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[32px] bg-stone-950 p-8 text-white">
          <h2 className="font-serif text-3xl">Why this platform exists</h2>
          <p className="mt-5 text-base leading-8 text-white/75">
            Tourism planning often swings between glossy inspiration and scattered logistics. Explore Andhra & Telangana is designed to unify both: strong visuals, destination context, practical timings, entry fees, transport clues, local mapping, and itinerary support.
          </p>
        </div>
        <div className="rounded-[32px] border border-stone-200 bg-[#f8f3ea] p-8">
          <h2 className="font-serif text-3xl text-stone-950">Tourism identity</h2>
          <p className="mt-5 text-base leading-8 text-stone-600">
            Andhra Pradesh leans into pilgrimage, beaches, and hill landscapes, while Telangana offers a compelling concentration of Deccani urban heritage and Kakatiya temple artistry. Together they form a rich and often underestimated travel circuit.
          </p>
        </div>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="rounded-[30px] border border-stone-200 bg-white p-6 shadow-[0_18px_60px_rgba(28,25,23,0.06)]"
          >
            <pillar.icon className="h-8 w-8 text-amber-600" />
            <h3 className="mt-5 font-serif text-2xl text-stone-950">{pillar.title}</h3>
            <p className="mt-3 text-sm leading-7 text-stone-600">{pillar.detail}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
