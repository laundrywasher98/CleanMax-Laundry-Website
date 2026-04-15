import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WashFoldCityContent from "@/components/seo/WashFoldCityContent";
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
    title: `Lavado y Doblado Cerca de ${city.name}, CA | CleanMax Laundry`,
    description: `Servicio de lavado y doblado cerca de ${city.name}, CA. Desde $1.50/lb. Mismo día y al día siguiente. Mínimo $25. Abierto todos los días 6AM–9PM. CleanMax Laundry, Pomona.`,
    path: `/wash-and-fold/${city.slug}`,
    keywords: `lavado y doblado ${city.name} CA, dejar ropa ${city.name}, lavandería mismo día ${city.name}, servicio de lavado ${city.name}`,
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
      <WashFoldCityContent city={city} />
    </main>
  );
}
