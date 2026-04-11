import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WashFoldCityContent from "@/components/seo/WashFoldCityContent";
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

  const title = `Wash & Fold Near ${city.name}, CA | CleanMax Laundry`;
  const description = `Drop-off wash & fold service near ${city.name}, CA. Starting at $1.50/lb. Same-day and next-day turnaround. $25 minimum. Open daily 6 AM–9 PM at CleanMax Laundry, Pomona.`;

  return {
    title,
    description,
    keywords: `wash and fold ${city.name} CA, drop off laundry ${city.name}, same day laundry ${city.name}, fluff and fold near ${city.name}`,
    openGraph: {
      title,
      description,
      url: `https://cleanmaxlaundry.com/wash-and-fold/${city.slug}`,
      siteName: "CleanMax Laundry",
    },
    alternates: {
      canonical: `https://cleanmaxlaundry.com/wash-and-fold/${city.slug}`,
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
      <WashFoldCityContent city={city} />
    </main>
  );
}
