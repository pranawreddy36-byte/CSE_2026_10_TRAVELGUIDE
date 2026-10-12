import type { Metadata } from "next";
import { wikimediaFile } from "@/lib/wikimedia";

// CO6: Build Systems, Testing, CI/CD & Deployment Engineering - centralized metadata supports deploy-time SEO output.
export const siteConfig = {
  name: "Explore Andhra & Telangana",
  description:
    "A premium tourism discovery platform for cinematic escapes, sacred landmarks, forts, beaches, and hill getaways across Andhra Pradesh and Telangana.",
  url: "https://exploreandhratelangana.com",
  ogImage: wikimediaFile("Full view of Charminar.jpg"),
  keywords: [
    "Andhra Pradesh tourism",
    "Telangana tourism",
    "Tirupati travel guide",
    "Charminar tourism",
    "Visakhapatnam itinerary",
    "Araku Valley map",
    "Golconda Fort timings",
  ],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1600,
        height: 900,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  category: "travel",
};
