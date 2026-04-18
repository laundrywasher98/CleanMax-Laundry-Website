import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CommercialCityContent from "@/components/seo/CommercialCityContent";
import CommercialIndustryCityContent from "@/components/seo/CommercialIndustryCityContent";
import JsonLd from "@/components/JsonLd";
import { cities } from "@/data/cities";
import { industries } from "@/data/industries";
import { buildMetadata } from "@/lib/seo";
import { buildCommercialServiceSchema } from "@/lib/schema";

const industryShortTitles: Record<string, string> = {
  gyms: "Gym",
  restaurants: "Restaurant",
  "airbnb-vacation-rentals": "Airbnb",
  "hotels-hospitality": "Hotel",
  "salons-spas": "Salon",
  "medical-offices": "Medical",
  "schools-daycares": "School",
  "auto-shops": "Auto Shop",
};

export function generateStaticParams() {
  const params: { slug: string[] }[] = [];
  for (const city of cities) {
    params.push({ slug: [city.slug] });
  }
  for (const industry of industries) {
    for (const city of cities) {
      params.push({ slug: [industry.slug, city.slug] });
    }
  }
  return params;
}

type Resolved =
  | { kind: "city"; city: (typeof cities)[number] }
  | {
      kind: "industry-city";
      industry: (typeof industries)[number];
      city: (typeof cities)[number];
    };

function resolve(slug: string[]): Resolved | null {
  if (slug.length === 1) {
    const city = cities.find((c) => c.slug === slug[0]);
    if (!city) return null;
    return { kind: "city", city };
  }
  if (slug.length === 2) {
    const industry = industries.find((i) => i.slug === slug[0]);
    const city = cities.find((c) => c.slug === slug[1]);
    if (!industry || !city) return null;
    return { kind: "industry-city", industry, city };
  }
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolve(slug);
  if (!resolved) return {};

  if (resolved.kind === "city") {
    const { city } = resolved;
    return buildMetadata({
      title: `Commercial Laundry ${city.name}, CA | CleanMax`,
      description: `Commercial laundry pickup & delivery for ${city.name}, CA. CleanMax serves gyms, restaurants, hotels, Airbnb & more. Call (909) 248-7305.`,
      path: `/commercial-laundry/${city.slug}`,
      keywords: `commercial laundry ${city.name} CA, business laundry service ${city.name}, laundry pickup delivery ${city.name}, linen service ${city.name}`,
    });
  }

  const { industry, city } = resolved;
  const shortName = industryShortTitles[industry.slug] ?? industry.name;
  return buildMetadata({
    title: `${shortName} Laundry Service in ${city.name}, CA | CleanMax`,
    description: `${industry.name} commercial laundry in ${city.name}, CA — ${industry.items}. $35 flat pickup, next-day turnaround, bilingual team. (909) 248-7305.`,
    path: `/commercial-laundry/${industry.slug}/${city.slug}`,
    keywords: `${industry.name.toLowerCase()} laundry service ${city.name}, commercial laundry ${city.name} CA, ${industry.name.toLowerCase()} linen service ${city.name}, ${industry.name.toLowerCase()} pickup delivery ${city.name}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const resolved = resolve(slug);
  if (!resolved) notFound();

  if (resolved.kind === "city") {
    return (
      <main>
        <JsonLd data={buildCommercialServiceSchema({ city: resolved.city, lang: "en" })} />
        <CommercialCityContent city={resolved.city} />
      </main>
    );
  }

  return (
    <main>
      <JsonLd
        data={buildCommercialServiceSchema({
          city: resolved.city,
          industry: resolved.industry,
          lang: "en",
        })}
      />
      <CommercialIndustryCityContent city={resolved.city} industry={resolved.industry} />
    </main>
  );
}
