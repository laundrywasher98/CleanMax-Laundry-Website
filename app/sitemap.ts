import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { industries } from "@/data/industries";

const BASE_URL = "https://cleanmaxlaundry.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/commercial-laundry`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/wash-and-fold/pricing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/testimonials`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const laundromatPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/laundromat/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const washFoldPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/wash-and-fold/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const commercialCityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/commercial-laundry/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const locationHubPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/locations/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryPages: MetadataRoute.Sitemap = industries.flatMap((industry) =>
    cities.map((city) => ({
      url: `${BASE_URL}/commercial-laundry/${industry.slug}/${city.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }))
  );

  return [
    ...staticPages,
    ...laundromatPages,
    ...washFoldPages,
    ...commercialCityPages,
    ...locationHubPages,
    ...industryPages,
  ];
}
