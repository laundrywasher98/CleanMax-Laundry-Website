import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CommercialCityContent from "@/components/seo/CommercialCityContent";
import CommercialIndustryCityContent from "@/components/seo/CommercialIndustryCityContent";
import JsonLd from "@/components/JsonLd";
import { cities } from "@/data/cities";
import { industries } from "@/data/industries";
import { buildMetadata } from "@/lib/seo";
import { buildCommercialServiceSchema } from "@/lib/schema";

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
      title: `Lavandería Comercial ${city.name}, CA | CleanMax`,
      description: `Recolección y entrega de lavandería comercial para ${city.name}, CA. CleanMax atiende gimnasios, restaurantes, hoteles, Airbnb y más. Llama (909) 248-7305.`,
      path: `/commercial-laundry/${city.slug}`,
      keywords: `lavandería comercial ${city.name} CA, servicio de lavandería para negocios ${city.name}, recolección lavandería ${city.name}, servicio de lencería ${city.name}`,
      lang: "es",
    });
  }

  const { industry, city } = resolved;
  const shortName = industryShortTitlesEs[industry.slug] ?? industry.nameEs;
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
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const resolved = resolve(slug);
  if (!resolved) notFound();

  if (resolved.kind === "city") {
    return (
      <main>
        <JsonLd data={buildCommercialServiceSchema({ city: resolved.city, lang: "es" })} />
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
          lang: "es",
        })}
      />
      <CommercialIndustryCityContent city={resolved.city} industry={resolved.industry} />
    </main>
  );
}
