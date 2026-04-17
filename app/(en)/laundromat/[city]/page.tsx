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
    ? `Pomona Coin Laundry & Self-Service Laundromat | CleanMax Laundry`
    : `Laundromat & Coin Laundry Near ${city.name}, CA | CleanMax Laundry`;
  const description = isPomona
    ? `Pomona coin laundry and self-service laundromat at 1009 E Holt Ave. Open daily 6 AM–10 PM, 25 washers up to 80 lb, coin or AirWallet cashless pay, bilingual attendant. CleanMax Laundry.`
    : `Modern laundromat and coin laundry serving ${city.name}, CA. Open daily 6 AM–10 PM. 25 washers (25–80 lb) plus 34 dryers, coin or AirWallet cashless pay, bilingual attendant. CleanMax Laundry in Pomona.`;
  const keywords = isPomona
    ? `laundromat Pomona CA, coin laundry Pomona, pomona coin laundry, self service laundry Pomona, laundry Pomona, lavanderia Pomona`
    : `laundromat ${city.name}, coin laundry ${city.name} CA, laundromat near ${city.name}, self service laundry ${city.name}, lavanderia ${city.name}`;

  return buildMetadata({
    title,
    description,
    path: `/laundromat/${city.slug}`,
    keywords,
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
      <LaundromatCityContent city={city} />
    </main>
  );
}
