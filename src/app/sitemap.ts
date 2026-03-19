import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: "https://snapog.vercel.app", lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: "https://snapog.vercel.app/og-image-generator", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://snapog.vercel.app/og-image-guide", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://snapog.vercel.app/blog", lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];
}
