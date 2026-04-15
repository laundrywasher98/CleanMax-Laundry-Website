import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CommercialCityContent from "@/components/seo/CommercialCityContent";
import { cities } from "@/data/cities";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return {};

  return buildMetadata({
    title: `Lavandería Comercial ${city.name}, CA | CleanMax`,
    description: `Recolección y entrega de lavandería comercial para ${city.name}, CA. CleanMax atiende gimnasios, restaurantes, hoteles, Airbnb y más. Llama (909) 248-7305.`,
    path: `/commercial-laundry/${city.slug}`,
    keywords: `lavandería comercial ${city.name} CA, servicio de lavandería para negocios ${city.name}, recolección lavandería ${city.name}, servicio de lencería ${city.name}`,
    lang: "es",
  });
}

export default async function PageEs({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  return (
    <main>
      <CommercialCityContent city={city} />
    </main>
  );
}
