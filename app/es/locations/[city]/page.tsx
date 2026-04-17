import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationHubContent from "@/components/seo/LocationHubContent";
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

  const isPomona = slug === "pomona";
  const title = isPomona
    ? `Servicios de Lavandería en Pomona, CA | CleanMax Laundry`
    : `Lavandería Cerca de ${city.name}, CA | CleanMax Laundry`;
  const description = isPomona
    ? `CleanMax Laundry en Pomona, CA — lavandería de autoservicio, lavado y doblado, y lavandería comercial. Abierto todos los días 6AM–10PM.`
    : `Lavandería confiable cerca de ${city.name}, CA. CleanMax Laundry ofrece autoservicio, lavado y doblado, y lavandería comercial con recogida y entrega. Ubicada en Pomona, CA.`;

  return buildMetadata({
    title,
    description,
    path: `/locations/${city.slug}`,
    keywords: `servicios de lavandería ${city.name} CA, lavandería ${city.name}, lavado y doblado ${city.name}, lavandería comercial ${city.name}`,
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

  const nearbyCities = cities
    .filter((c) => c.slug !== slug && c.county === city.county)
    .slice(0, 5);

  return (
    <main>
      <LocationHubContent city={city} nearbyCities={nearbyCities} />
    </main>
  );
}
