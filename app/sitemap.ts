import type { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { industries } from "@/data/industries";
import { blogPosts } from "@/data/blogPosts";

const BASE_URL = "https://cleanmaxlaundry.com";

// Every EN path gets a mirrored /es path. hreflang alternates are emitted
// per entry so Google knows the two URLs are language-equivalent.
type Entry = {
  path: string;
  changeFrequency: "weekly" | "monthly" | "daily";
  priority: number;
  lastModified?: Date;
};

function toBilingualSitemap(entries: Entry[]): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = [];
  for (const entry of entries) {
    const enUrl = `${BASE_URL}${entry.path}`;
    const esUrl = `${BASE_URL}/es${entry.path}`;
    const alternates = {
      languages: {
        en: enUrl,
        es: esUrl,
        "x-default": enUrl,
      },
    };
    out.push({
      url: enUrl,
      lastModified: entry.lastModified ?? new Date(),
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      alternates,
    });
    out.push({
      url: esUrl,
      lastModified: entry.lastModified ?? new Date(),
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      alternates,
    });
  }
  return out;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    { path: "", changeFrequency: "weekly", priority: 1.0 },
    { path: "/locations", changeFrequency: "weekly", priority: 0.9 },
    { path: "/commercial-laundry", changeFrequency: "monthly", priority: 0.8 },
    { path: "/commercial-quote", changeFrequency: "monthly", priority: 0.8 },
    { path: "/wash-and-fold/pricing", changeFrequency: "monthly", priority: 0.8 },
    { path: "/pickup-delivery", changeFrequency: "monthly", priority: 0.85 },
    { path: "/comforters-large-loads", changeFrequency: "monthly", priority: 0.75 },
    { path: "/testimonials", changeFrequency: "weekly", priority: 0.7 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.6 },
    { path: "/about", changeFrequency: "monthly", priority: 0.5 },
  ];

  // Generate city-level entries for each service pattern
  for (const city of cities) {
    entries.push({ path: `/locations/${city.slug}`, changeFrequency: "monthly", priority: 0.8 });
    entries.push({ path: `/laundromat/${city.slug}`, changeFrequency: "monthly", priority: 0.8 });
    entries.push({ path: `/wash-and-fold/${city.slug}`, changeFrequency: "monthly", priority: 0.8 });
    entries.push({ path: `/commercial-laundry/${city.slug}`, changeFrequency: "monthly", priority: 0.7 });
  }

  // Industry × city commercial pages
  for (const industry of industries) {
    for (const city of cities) {
      entries.push({
        path: `/commercial-laundry/${industry.slug}/${city.slug}`,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  // Blog posts
  for (const post of blogPosts) {
    entries.push({
      path: `/blog/${post.slug}`,
      changeFrequency: "monthly",
      priority: 0.6,
      lastModified: new Date(post.publishDate),
    });
  }

  return toBilingualSitemap(entries);
}
