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
    title: `Commercial Laundry ${city.name}, CA | CleanMax`,
    description: `Commercial laundry pickup & delivery for ${city.name}, CA. CleanMax serves gyms, restaurants, hotels, Airbnb & more. Call (909) 248-7305.`,
    path: `/commercial-laundry/${city.slug}`,
    keywords: `commercial laundry ${city.name} CA, business laundry service ${city.name}, laundry pickup delivery ${city.name}, linen service ${city.name}`,
  });
}

export default async function Page({
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
