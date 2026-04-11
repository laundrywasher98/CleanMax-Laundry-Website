import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CommercialIndustryCityContent from "@/components/seo/CommercialIndustryCityContent";
import { cities } from "@/data/cities";
import { industries } from "@/data/industries";

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

  const title = `Laundry Service for ${industry.name} in ${city.name}, CA | CleanMax`;
  const description = `CleanMax Laundry provides commercial laundry pickup and delivery for ${industry.name.toLowerCase()} in ${city.name}, CA. We handle ${industry.items}. Scheduled service, custom recurring plans. Call (626) 340-3098.`;

  return {
    title,
    description,
    keywords: `laundry for ${industry.name.toLowerCase()} ${city.name}, commercial laundry ${city.name} CA, ${industry.name.toLowerCase()} linen service ${city.name}`,
    openGraph: {
      title,
      description,
      url: `https://cleanmaxlaundry.com/commercial-laundry/${industry.slug}/${city.slug}`,
      siteName: "CleanMax Laundry",
    },
    alternates: {
      canonical: `https://cleanmaxlaundry.com/commercial-laundry/${industry.slug}/${city.slug}`,
    },
  };
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
