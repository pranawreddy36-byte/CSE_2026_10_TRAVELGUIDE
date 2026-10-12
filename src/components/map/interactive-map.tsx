"use client";

import dynamic from "next/dynamic";

// CO5: Routing, Forms, Accessibility & Performance Engineering - dynamic import disables SSR for browser-only Leaflet APIs.
const DestinationMap = dynamic(
  () => import("@/components/map/destination-map").then((module) => module.DestinationMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[580px] items-center justify-center rounded-[30px] border border-stone-200 bg-stone-100 text-sm text-stone-500">
        Loading the Andhra Pradesh + Telangana map...
      </div>
    ),
  },
);

export function InteractiveMap() {
  return <DestinationMap />;
}

export function CompactInteractiveMap() {
  return <DestinationMap compact />;
}
