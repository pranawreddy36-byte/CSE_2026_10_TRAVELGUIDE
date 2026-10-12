import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { siteConfig } from "@/data/site";

// CO6: Build Systems, Testing, CI/CD & Deployment Engineering - sitemap generation supports production indexing.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/destinations", "/travel-guide", "/about"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...destinations.map((destination) => ({
      url: `${siteConfig.url}/destinations/${destination.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
