import Image from "next/image";
import { Clock3, Hotel, IndianRupee, MapPin, Sparkles, Star, TrainFront, CarTaxiFront, Plane, BusFront, History, CalendarClock, Utensils, GitBranch, ArrowRight, Landmark, Compass } from "lucide-react";
import Link from "next/link";
import { CompactInteractiveMap } from "@/components/map/interactive-map";
import { SectionHeading } from "@/components/ui/section-heading";
import { formatCurrencyLabel } from "@/lib/utils";
import type { Destination } from "@/types/tourism";

interface DestinationDetailProps {
  destination: Destination;
}

const transportIcons = {
  Flights: Plane,
  Trains: TrainFront,
  Buses: BusFront,
  Taxi: CarTaxiFront,
};

// CO3: React Component Model - detail view renders a destination object as a deterministic UI function.
export function DestinationDetail({ destination }: DestinationDetailProps) {
  return (
    <div className="pb-24">
      <section className="relative overflow-hidden bg-stone-950">
        <div className="absolute inset-0">
          <Image
            src={destination.heroImage}
            alt={destination.heroImageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-stone-950/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300">{destination.state}</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl text-white sm:text-6xl">
            {destination.name}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
            {destination.description}
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            <div className="rounded-[26px] border border-white/10 bg-white/10 p-5 text-white backdrop-blur-xl">
              <div className="flex items-center gap-2 text-sm text-amber-300">
                <Clock3 className="h-4 w-4" /> Timings
              </div>
              <p className="mt-3 text-lg">{destination.openingTime} - {destination.closingTime}</p>
            </div>
            <div className="rounded-[26px] border border-white/10 bg-white/10 p-5 text-white backdrop-blur-xl">
              <div className="flex items-center gap-2 text-sm text-amber-300">
                <IndianRupee className="h-4 w-4" /> Entry
              </div>
              <p className="mt-3 text-lg">{formatCurrencyLabel(destination.entryFee)}</p>
            </div>
            <div className="rounded-[26px] border border-white/10 bg-white/10 p-5 text-white backdrop-blur-xl">
              <div className="flex items-center gap-2 text-sm text-amber-300">
                <CalendarClock className="h-4 w-4" /> Best season
              </div>
              <p className="mt-3 text-lg">{destination.bestTimeToVisit}</p>
            </div>
            <div className="rounded-[26px] border border-white/10 bg-white/10 p-5 text-white backdrop-blur-xl">
              <div className="flex items-center gap-2 text-sm text-amber-300">
                <Star className="h-4 w-4 fill-current" /> Rating
              </div>
              <p className="mt-3 text-lg">{destination.rating.toFixed(1)} / 5</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mt-12 max-w-7xl space-y-24 px-4 sm:px-6 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-[32px] border border-stone-200 bg-stone-900 text-white p-8 flex flex-col justify-between shadow-[0_18px_60px_rgba(28,25,23,0.08)]">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-amber-400">
                <Compass className="h-4 w-4" /> Destination Insights
              </div>
              <h3 className="mt-4 font-serif text-3xl text-white">Experience {destination.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-stone-300">
                Located in {destination.city}, {destination.state}. Curated for seamless exploration with algorithmic routing, verified transit links, and realistic budget planning.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-stone-400">Region & Vibe</p>
                <p className="mt-1 font-semibold text-amber-200">{destination.state}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-stone-400">Ideal For</p>
                <p className="mt-1 font-semibold text-amber-200">{destination.recommendedDuration}</p>
              </div>
            </div>
          </div>
          <div className="rounded-[32px] border border-stone-200 bg-[#f8f3ea] p-8">
            <SectionHeading
              eyebrow="Overview"
              title="A complete planning snapshot before you go."
              description="Everything here is arranged to support a confident visit, from timings and fees to transport, nearby attractions, and suggested pacing."
            />
            <dl className="mt-10 space-y-4 text-sm text-stone-700">
              <div className="flex items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <dt>Recommended Duration</dt>
                <dd className="font-medium text-stone-950">{destination.recommendedDuration}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <dt>Foreigner Fee</dt>
                <dd className="font-medium text-stone-950">{formatCurrencyLabel(destination.foreignerFee)}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <dt>Parking Fee</dt>
                <dd className="font-medium text-stone-950">{formatCurrencyLabel(destination.parkingFee)}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt>Starting Budget</dt>
                <dd className="font-medium text-stone-950">{formatCurrencyLabel(destination.startingBudget)}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-[0_18px_60px_rgba(28,25,23,0.06)]">
            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-amber-600">
              <History className="h-4 w-4" /> History
            </div>
            <p className="mt-6 text-base leading-8 text-stone-600">{destination.history}</p>
          </div>
          <div className="rounded-[32px] border border-stone-200 bg-white p-8 shadow-[0_18px_60px_rgba(28,25,23,0.06)]">
            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-amber-600">
              <Sparkles className="h-4 w-4" /> Best Time To Visit
            </div>
            <p className="mt-6 text-base leading-8 text-stone-600">
              {destination.bestTimeToVisit} is the sweet spot for weather, photography, and easy daytime movement. Shoulder-season visits can also work well if you prefer lighter crowds.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading
            eyebrow="Nearby Attractions"
            title="What to pair with the main destination."
            description="These are the most useful nearby stops to shape a half-day, full-day, or overnight route."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {destination.featuredAttractions.map((attraction) => (
              <article
                key={attraction.id}
                className="overflow-hidden rounded-[30px] border border-stone-200 bg-white shadow-[0_18px_60px_rgba(28,25,23,0.06)]"
              >
                <div className="h-24 bg-gradient-to-br from-amber-500/10 via-amber-600/10 to-stone-100 p-6 flex items-center justify-between border-b border-stone-100">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-amber-600/15 text-amber-800 flex items-center justify-center font-bold">
                      <Landmark className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">Key Attraction</span>
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="font-serif text-2xl text-stone-950">{attraction.name}</h3>
                  <p className="text-sm leading-7 text-stone-600">{attraction.description}</p>
                  <div className="text-sm text-stone-700">
                    <p><span className="font-medium">Timings:</span> {attraction.timings}</p>
                    <p className="mt-1"><span className="font-medium">Entry:</span> {formatCurrencyLabel(attraction.entryFee)}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1fr,1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Transportation"
              title="How travelers usually reach and move around."
              description="Choose the right transport mix depending on whether your priority is speed, comfort, or budget."
            />
            <div className="mt-8 space-y-4">
              {destination.transportModes.map((mode) => {
                const Icon = transportIcons[mode as keyof typeof transportIcons];
                const detail = {
                  Flights: "Nearest airport connections work well for faster interstate hops.",
                  Trains: "Rail remains the most efficient value option for most regional circuits.",
                  Buses: "Useful for budget-conscious or last-mile regional connectivity.",
                  Taxi: "Best for flexible local exploration and sunrise or sunset timing control.",
                }[mode];
                const estimatedCost = {
                  Flights: "INR 3,500-8,500",
                  Trains: "INR 400-2,500",
                  Buses: "INR 250-1,500",
                  Taxi: "INR 1,200-4,500",
                }[mode];
                return (
                  <div
                    key={mode}
                    className="rounded-[26px] border border-stone-200 bg-white p-5 shadow-[0_14px_40px_rgba(28,25,23,0.05)]"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-amber-600" />
                      <p className="text-lg font-medium text-stone-950">{mode}</p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-stone-600">{detail}</p>
                    <p className="mt-3 text-sm text-stone-800">
                      <span className="font-medium">Typical spend:</span> {estimatedCost}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="overflow-hidden rounded-[32px] border border-stone-200 bg-white p-3 shadow-[0_18px_60px_rgba(28,25,23,0.06)]">
            <CompactInteractiveMap />
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Suggested Itinerary"
              title="A clear route rhythm for first-time visitors."
              description="Use this as a starting point, then adjust for pace, weather, and transport windows."
            />
            <div className="mt-8 space-y-4">
              {destination.suggestedItinerary.map((day) => (
                <div key={day.title} className="rounded-[30px] border border-stone-200 bg-[#f8f3ea] p-6">
                  <h3 className="font-serif text-2xl text-stone-950">{day.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{day.summary}</p>
                  <ul className="mt-4 space-y-2 text-sm text-stone-700">
                    {day.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-amber-600" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Nearby Hotels"
              title="Curated stays to match your travel style."
              description="These guide-level hotel suggestions help set budget expectations and proximity, without live booking or availability claims."
            />
            <div className="mt-8 space-y-4">
              {destination.nearbyHotels.map((hotel) => (
                <article
                  key={hotel.name}
                  className="rounded-[30px] border border-stone-200 bg-white p-6 shadow-[0_14px_40px_rgba(28,25,23,0.05)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-2xl text-stone-950">{hotel.name}</h3>
                      <p className="mt-2 text-sm uppercase tracking-[0.22em] text-amber-600">
                        {hotel.category}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-stone-700">
                      <Star className="h-4 w-4 fill-current text-amber-500" />
                      {hotel.rating.toFixed(1)}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-stone-600">{hotel.description}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-stone-700">
                    <span className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2">
                      <Hotel className="h-4 w-4 text-amber-600" /> {hotel.priceRange}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2">
                      <MapPin className="h-4 w-4 text-amber-600" /> {hotel.distanceFromCenter}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Dining & Regional Cuisine Section */}
        {destination.nearbyRestaurants && destination.nearbyRestaurants.length > 0 && (
          <section>
            <SectionHeading
              eyebrow="Dining & Culinary Heritage"
              title="Signature restaurants and iconic local specialties."
              description="From legacy street vendors to fine dining, experience the authentic regional flavors of this destination."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {destination.nearbyRestaurants.map((restaurant) => (
                <article
                  key={restaurant.name}
                  className="flex flex-col justify-between rounded-[30px] border border-stone-200 bg-white p-6 shadow-[0_14px_40px_rgba(28,25,23,0.05)] hover:shadow-lg transition"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-2xl text-stone-950">{restaurant.name}</h3>
                        <p className="mt-1 text-xs uppercase tracking-wider text-amber-700 font-semibold">
                          {restaurant.cuisine}
                        </p>
                      </div>
                      <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-900 border border-amber-200">
                        <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                        {restaurant.rating.toFixed(1)}
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl bg-amber-500/10 border border-amber-500/15 p-3">
                      <span className="text-[10px] font-semibold text-amber-900 uppercase tracking-wider block">
                        Must-Try Signature Dish
                      </span>
                      <p className="mt-0.5 text-xs font-medium text-stone-900">
                        {restaurant.specialDish}
                      </p>
                    </div>

                    <p className="mt-4 text-xs leading-6 text-stone-600">
                      {restaurant.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-3 text-xs text-stone-500">
                    <span className="font-medium text-stone-800">{restaurant.priceRange}</span>
                    <span>{restaurant.distanceFromCenter} from center</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Algorithm Route Hub Banner */}
        <section className="rounded-[32px] border border-amber-200 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800">
                <GitBranch className="h-4 w-4 text-amber-600" /> Dijkstra Graph Route Optimization
              </span>
              <h3 className="mt-2 font-serif text-2xl text-stone-950">
                Connect {destination.name} to 29 other Indian Destinations
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-stone-600">
                Compute the fastest transit path, minimum cost route, and multi-city vacation schedules with our graph algorithms engine.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/algorithms"
                className="inline-flex items-center gap-2 rounded-2xl bg-stone-950 hover:bg-stone-800 text-white px-5 py-3 text-xs font-semibold shadow-sm transition"
              >
                Open Algorithms Lab <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/search"
                className="inline-flex items-center gap-2 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-800 px-5 py-3 text-xs font-semibold shadow-sm transition"
              >
                Smart Search
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-[36px] bg-stone-950 px-6 py-10 text-white sm:px-10">
          <SectionHeading
            eyebrow="Travel Notes"
            title="Small details that improve the day."
            description="These practical tips help smooth transport, weather, queueing, photography, and cultural etiquette."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {destination.travelTips.map((tip) => (
              <div key={tip.title} className="rounded-[28px] border border-white/10 bg-white/10 p-5">
                <h3 className="font-serif text-2xl">{tip.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">{tip.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
