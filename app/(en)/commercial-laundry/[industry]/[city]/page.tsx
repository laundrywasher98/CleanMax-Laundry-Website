import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CommercialIndustryCityContent from "@/components/seo/CommercialIndustryCityContent";
import { cities } from "@/data/cities";
import { industries } from "@/data/industries";
import { buildMetadata } from "@/lib/seo";

// Short names for meta titles — keeps all titles under 60 chars
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
  const params: { industry: string; city: string }[] = [];
  for (const industry of industries) {
    for (const city of cities) {
      params.push({ industry: industry.slug, city: city.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ industry: string; city: string }>;
}): Promise<Metadata> {
  const { industry: industrySlug, city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  const industry = industries.find((i) => i.slug === industrySlug);
  if (!city || !industry) return {};

  const shortName = industryShortTitles[industrySlug] ?? industry.name;

  return buildMetadata({
    title: `${shortName} Laundry ${city.name}, CA | CleanMax`,
    description: `Commercial laundry for ${industry.name} in ${city.name}, CA. CleanMax offers scheduled pickup & delivery. Call (909) 248-7305.`,
    path: `/commercial-laundry/${industry.slug}/${city.slug}`,
    keywords: `laundry for ${industry.name.toLowerCase()} ${city.name}, commercial laundry ${city.name} CA, ${industry.name.toLowerCase()} linen service ${city.name}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ industry: string; city: string }>;
}) {
  const { industry: industrySlug, city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  const industry = industries.find((i) => i.slug === industrySlug);
  if (!city || !industry) notFound();

  return (
    <main>
      <CommercialIndustryCityContent city={city} industry={industry} />
    </main>
  );
}
