import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";
  const base = siteUrl || "";
  const now = new Date();

  return [
    {
      url: base ? `${base}/` : "/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
