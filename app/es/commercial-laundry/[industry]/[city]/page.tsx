import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CommercialIndustryCityContent from "@/components/seo/CommercialIndustryCityContent";
import { cities } from "@/data/cities";
import { industries } from "@/data/industries";
import { buildMetadata } from "@/lib/seo";

const industryShortTitlesEs: Record<string, string> = {
  gyms: "Gimnasio",
  restaurants: "Restaurante",
  "airbnb-vacation-rentals": "Airbnb",
  "hotels-hospitality": "Hotel",
  "salons-spas": "Salón",
  "medical-offices": "Médico",
  "schools-daycares": "Escuela",
  "auto-shops": "Taller",
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

  const shortName = industryShortTitlesEs[industrySlug] ?? industry.nameEs;

  return buildMetadata({
    title: `Lavandería ${shortName} ${city.name}, CA | CleanMax`,
    description: `Lavandería comercial para ${industry.nameEs} en ${city.name}, CA. CleanMax ofrece recolección y entrega programada. Llama (909) 248-7305.`,
    path: `/commercial-laundry/${industry.slug}/${city.slug}`,
    keywords: `lavandería para ${industry.nameEs.toLowerCase()} ${city.name}, lavandería comercial ${city.name} CA, servicio de lencería ${industry.nameEs.toLowerCase()} ${city.name}`,
    lang: "es",
  });
}

export default async function PageEs({
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
