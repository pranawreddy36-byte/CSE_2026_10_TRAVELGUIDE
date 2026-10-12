import type { Metadata } from "next";
import { Shield, SunMedium, Backpack, Bus, CheckCircle2 } from "lucide-react";
import { travelGuideSections } from "@/data/travel-guide";
import { SectionHeading } from "@/components/ui/section-heading";

// CO5: Routing, Forms, Accessibility & Performance Engineering - route metadata defines the guide page contract.
export const metadata: Metadata = {
  title: "Travel Guide",
  description:
    "Travel tips, packing advice, seasonal planning, safety guidance, and transport notes for Andhra Pradesh and Telangana.",
};

const icons = [Backpack, SunMedium, Shield, Bus];

// CO3: React Component Model - component composition renders guide sections from reusable data.
export default function TravelGuidePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Travel Guide"
        title="Practical planning advice for smoother journeys across both states."
        description="This guide covers what to pack, when to go, how to move confidently, and how to respect each place while still traveling efficiently."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {travelGuideSections.map((section, index) => {
          const Icon = icons[index % icons.length];
          return (
            <article
              key={section.title}
              className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-[0_18px_60px_rgba(28,25,23,0.06)]"
            >
              <Icon className="h-8 w-8 text-amber-600" />
              <h2 className="mt-5 font-serif text-3xl text-stone-950">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-stone-600">{section.description}</p>
              <div className="mt-6 space-y-3">
                {section.points.map((point) => (
                  <div key={point} className="flex gap-3 text-sm leading-7 text-stone-700">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amber-600" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
