import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LaundromatCityContent from "@/components/seo/LaundromatCityContent";
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
    ? `Self-Service Laundromat in Pomona, CA | CleanMax Laundry`
    : `Laundromat Near ${city.name}, CA | CleanMax Laundry`;
  const description = isPomona
    ? `CleanMax Laundry is Pomona's self-service laundromat at 1009 E Holt Ave. Open daily 6 AM–10 PM. Modern Wascomat machines, free parking, app payment. First wash free.`
    : `Looking for a laundromat near ${city.name}, CA? CleanMax Laundry in Pomona is open daily 6 AM–10 PM. Modern Wascomat machines, free parking, app payment. First wash free.`;

  return {
    title,
    description,
    keywords: isPomona
      ? `laundromat Pomona CA, coin laundry Pomona, self service laundry Pomona, lavanderia Pomona`
      : `laundromat near ${city.name}, coin laundry ${city.name} CA, self service laundry ${city.name}, lavanderia ${city.name}`,
    openGraph: {
      title,
      description,
      url: `https://cleanmaxlaundry.com/laundromat/${city.slug}`,
      siteName: "CleanMax Laundry",
    },
    alternates: {
      canonical: `https://cleanmaxlaundry.com/laundromat/${city.slug}`,
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

  return (
    <main>
      <LaundromatCityContent city={city} />
    </main>
  );
}
