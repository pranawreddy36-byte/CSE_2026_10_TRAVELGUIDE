import { testimonials } from "@/data/travel-guide";
import { MotionSection } from "@/components/shared/motion-section";
import { SectionHeading } from "@/components/ui/section-heading";

// CO3: React Component Model - repeated testimonial cards demonstrate component-driven UI rendering.
export function TestimonialsSection() {
  return (
    <MotionSection className="bg-stone-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Traveler Notes"
          title="Built to feel inspiring before the trip and dependable during it."
          description="Visitors want the romance of discovery, but they also need timings, fees, travel distances, and realistic guidance. This platform is designed to hold both."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[30px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
            >
              <p className="text-lg leading-8 text-white/85">“{testimonial.quote}”</p>
              <div className="mt-8">
                <p className="font-serif text-2xl">{testimonial.name}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.25em] text-amber-300">
                  {testimonial.country} · {testimonial.favoriteDestination}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
