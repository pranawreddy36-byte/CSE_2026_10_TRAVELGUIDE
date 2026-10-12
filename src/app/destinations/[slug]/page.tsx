import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DestinationDetail } from "@/components/destination/destination-detail";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import { siteConfig } from "@/data/site";

interface DestinationPageProps {
  params: Promise<{ slug: string }>;
}

// CO5: Routing, Forms, Accessibility & Performance Engineering - dynamic route params prebuild destination detail pages.
export async function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({
  params,
}: DestinationPageProps): Promise<Metadata> {
  // CO4: State Architecture, Async Data Engineering & API Integration - async params drive metadata lookup for each route.
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return {};
  }

  return {
    title: destination.name,
    description: destination.description,
    openGraph: {
      title: `${destination.name} Travel Guide`,
      description: destination.description,
      url: `${siteConfig.url}/destinations/${destination.slug}`,
      images: [
        {
          url: destination.heroImage,
          alt: destination.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${destination.name} Travel Guide`,
      description: destination.description,
      images: [destination.heroImage],
    },
  };
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    // CO5: Routing, Forms, Accessibility & Performance Engineering - invalid dynamic routes use framework not-found boundaries.
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.description,
    touristType: destination.regionType,
    image: [destination.heroImage, ...destination.galleryImages.map((image) => image.src)],
    address: {
      "@type": "PostalAddress",
      addressLocality: destination.city,
      addressRegion: destination.state,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: destination.latitude,
      longitude: destination.longitude,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DestinationDetail destination={destination} />
    </>
  );
}
