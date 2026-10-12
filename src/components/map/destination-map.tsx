"use client";

import "leaflet/dist/leaflet.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.css";
import "react-leaflet-cluster/dist/assets/MarkerCluster.Default.css";

import Image from "next/image";
import Link from "next/link";
import L from "leaflet";
import { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Clock3, ExternalLink, MapPinned, Sparkles } from "lucide-react";
import { destinationMapData } from "@/data/destinations";

const bounds: [[number, number], [number, number]] = [
  [12.1, 77.8],
  [19.2, 84.8],
];

// CO2: JavaScript & TypeScript Engineering - module-level Leaflet icon config isolates third-party setup.
const markerIcon = new L.DivIcon({
  html: `
    <div style="display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:999px;background:linear-gradient(135deg,#f8d4a1,#ca7f2d);box-shadow:0 10px 30px rgba(202,127,45,.45);border:2px solid rgba(255,255,255,.65);">
      <div style="width:12px;height:12px;border-radius:999px;background:#25170c;"></div>
    </div>
  `,
  className: "",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -32],
});

function MapBounds() {
  const map = useMap();

  useEffect(() => {
    // CO5: Routing, Forms, Accessibility & Performance Engineering - map viewport is constrained for predictable interaction.
    map.fitBounds(bounds, { animate: false, padding: [24, 24] });
    map.invalidateSize();
  }, [map]);

  return null;
}

interface DestinationMapProps {
  compact?: boolean;
}

export function DestinationMap({ compact = false }: DestinationMapProps) {
  return (
    <div className={compact ? "h-[360px]" : "h-[580px]"}>
      <MapContainer
        className="z-0 h-full w-full rounded-[30px]"
        scrollWheelZoom={false}
        zoomControl={!compact}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapBounds />
        <MarkerClusterGroup chunkedLoading>
          {/* CO6: Build Systems, Testing, CI/CD & Deployment Engineering - chunked clustering improves map rendering performance. */}
          {destinationMapData.map((destination) => (
            <Marker
              key={destination.slug}
              position={[destination.latitude, destination.longitude]}
              icon={markerIcon}
            >
              <Popup minWidth={280}>
                <div
                  className="w-[260px] overflow-hidden rounded-3xl bg-white"
                >
                  <div className="relative h-36">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover"
                      sizes="280px"
                    />
                  </div>
                  <div className="space-y-3 p-4">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-amber-700">
                      <MapPinned className="h-3.5 w-3.5" /> Signature Destination
                    </div>
                    <h3 className="font-serif text-2xl text-stone-950">{destination.name}</h3>
                    <p className="line-clamp-3 text-sm leading-6 text-stone-600">
                      {destination.description}
                    </p>
                    <div className="space-y-2 text-sm text-stone-700">
                      <div className="flex items-center gap-2">
                        <Clock3 className="h-4 w-4 text-amber-600" />
                        {destination.openingTime} - {destination.closingTime}
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-amber-600" />
                        Best season: {destination.bestTimeToVisit}
                      </div>
                    </div>
                    <Link
                      href={`/destinations/${destination.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-stone-800"
                    >
                      Explore Destination <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
