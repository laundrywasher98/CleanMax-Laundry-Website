import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationHubContent from "@/components/seo/LocationHubContent";
import { cities } from "@/data/cities";

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
    ? `CleanMax Laundry — Pomona, CA | Laundry Services`
    : `CleanMax Laundry — Serving ${city.name}, CA`;
  const description = isPomona
    ? `CleanMax Laundry in Pomona, CA offers self-service laundry, wash & fold drop-off, and commercial pickup & delivery. Open daily. Located at 1009 E Holt Ave.`
    : `CleanMax Laundry serves ${city.name}, CA with self-service laundry, wash & fold drop-off, and commercial pickup & delivery. Open daily. Located at 1009 E Holt Ave, Pomona.`;

  return {
    title,
    description,
    keywords: `laundry services ${city.name} CA, laundromat ${city.name}, wash and fold ${city.name}, commercial laundry ${city.name}`,
    openGraph: {
      title,
      description,
      url: `https://cleanmaxlaundry.com/locations/${city.slug}`,
      siteName: "CleanMax Laundry",
    },
    alternates: {
      canonical: `https://cleanmaxlaundry.com/locations/${city.slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  // Nearby cities = others in the same county, up to 5
  const nearbyCities = cities
    .filter((c) => c.slug !== slug && c.county === city.county)
    .slice(0, 5);

  return (
    <main>
      <LocationHubContent city={city} nearbyCities={nearbyCities} />
    </main>
  );
}
