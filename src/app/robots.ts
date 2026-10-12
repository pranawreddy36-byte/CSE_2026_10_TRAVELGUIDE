import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

// CO6: Build Systems, Testing, CI/CD & Deployment Engineering - robots policy is emitted for deployment crawlers.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
