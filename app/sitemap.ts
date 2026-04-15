import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { industries } from "@/data/industries";
import { blogPosts } from "@/data/blogPosts";

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
      url: `${BASE_URL}/locations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/commercial-laundry`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/commercial-quote`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
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
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // /locations/[city] — all cities
  const locationCityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/locations/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // /laundromat/[city] — all cities
  const laundromatPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/laundromat/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // /wash-and-fold/[city] — all cities
  const washFoldPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/wash-and-fold/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // /commercial-laundry/[city] — all cities
  const commercialCityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/commercial-laundry/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // /commercial-laundry/[industry]/[city] — all industries × all cities
  const industryPages: MetadataRoute.Sitemap = industries.flatMap((industry) =>
    cities.map((city) => ({
      url: `${BASE_URL}/commercial-laundry/${industry.slug}/${city.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  // /blog/[slug] — all posts
  const blogPostPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...locationCityPages,
    ...laundromatPages,
    ...washFoldPages,
    ...commercialCityPages,
    ...industryPages,
    ...blogPostPages,
  ];
}
