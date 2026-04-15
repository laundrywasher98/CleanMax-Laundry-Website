import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LaundromatCityContent from "@/components/seo/LaundromatCityContent";
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
    ? `Lavandería de Autoservicio en Pomona, CA | CleanMax Laundry`
    : `Lavandería Cerca de ${city.name}, CA | CleanMax Laundry`;
  const description = isPomona
    ? `Lavandería moderna de autoservicio en Pomona, CA. Abierto todos los días de 6 AM a 10 PM. Máquinas Wascomat, estacionamiento gratis, pago con app. CleanMax Laundry.`
    : `Lavandería moderna de autoservicio atendiendo ${city.name}, CA. Abierto todos los días de 6 AM a 10 PM. Máquinas Wascomat, estacionamiento. CleanMax Laundry en Pomona.`;
  const keywords = isPomona
    ? `lavandería Pomona CA, lavandería de monedas Pomona, lavandería autoservicio Pomona, lavandería cerca de mí Pomona`
    : `lavandería cerca de ${city.name}, lavandería de monedas ${city.name} CA, lavandería autoservicio ${city.name}, lavandería cerca de mí ${city.name}`;

  return buildMetadata({
    title,
    description,
    path: `/laundromat/${city.slug}`,
    keywords,
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
      <LaundromatCityContent city={city} />
    </main>
  );
}
