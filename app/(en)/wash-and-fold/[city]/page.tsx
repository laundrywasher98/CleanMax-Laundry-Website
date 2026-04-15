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
    title: `Wash & Fold Near ${city.name}, CA | CleanMax Laundry`,
    description: `Wash & fold drop-off service near ${city.name}, CA. From $1.50/lb. Same-day & next-day. $25 min. Open daily 6AM–9PM. CleanMax Laundry, Pomona.`,
    path: `/wash-and-fold/${city.slug}`,
    keywords: `wash and fold ${city.name} CA, drop off laundry ${city.name}, same day laundry ${city.name}, fluff and fold near ${city.name}`,
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
      <WashFoldCityContent city={city} />
    </main>
  );
}
