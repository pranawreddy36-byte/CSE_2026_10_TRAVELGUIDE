import dynamic from "next/dynamic";
import { AttractionsStrip } from "@/components/home/attractions-strip";
import { FeaturedDestinations } from "@/components/home/featured-destinations";
import { HeroSection } from "@/components/home/hero-section";
import { SectionHeading } from "@/components/ui/section-heading";

// CO5: Routing, Forms, Accessibility & Performance Engineering - dynamic imports for below-the-fold sections reduce initial JS bundle.
const MapSection = dynamic(() => import("@/components/home/map-section").then((m) => m.MapSection), {
  loading: () => (
    <div className="bg-[#f8f3ea] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-stone-400">Loading map…</div>
    </div>
  ),
});

const TravelChart = dynamic(() => import("@/components/shared/travel-chart").then((m) => m.TravelChart), {
  loading: () => <div className="h-[320px] animate-pulse rounded-2xl bg-stone-100" />,
});

const TestimonialsSection = dynamic(
  () => import("@/components/home/testimonials-section").then((m) => m.TestimonialsSection),
  {
    loading: () => (
      <div className="bg-stone-950 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-white/40">Loading testimonials…</div>
      </div>
    ),
  },
);

// CO1: Foundations of Front-End Engineering & Framework Design - page composition assembles reusable UI sections declaratively.
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedDestinations />
      <AttractionsStrip />
      <MapSection />
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="Travel Costs"
            title="Quick budget guidance for realistic route planning."
            description="Approximate comfort-tier daily spend helps travelers balance transport, lodging, and pacing before they start booking anything."
          />
          <div className="rounded-[32px] border border-stone-200 bg-white p-6 shadow-[0_18px_60px_rgba(28,25,23,0.06)]">
            <TravelChart />
          </div>
        </div>
      </section>
      <TestimonialsSection />
    </>
  );
}
