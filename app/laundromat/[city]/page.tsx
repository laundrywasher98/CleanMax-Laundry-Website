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
    ? `Self-Service Laundromat in Pomona, CA | CleanMax Laundry`
    : `Laundromat Near ${city.name}, CA | CleanMax Laundry`;
  const description = isPomona
    ? `Modern self-service laundromat in Pomona, CA. Open daily 6AM–10PM. Wascomat machines, free parking, app payment. CleanMax Laundry.`
    : `Modern self-service laundromat serving ${city.name}, CA. Open daily 6AM–10PM. Wascomat machines, on-site parking. CleanMax Laundry in Pomona.`;
  const keywords = isPomona
    ? `laundromat Pomona CA, coin laundry Pomona, self service laundry Pomona, lavanderia Pomona`
    : `laundromat near ${city.name}, coin laundry ${city.name} CA, self service laundry ${city.name}, lavanderia ${city.name}`;

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
