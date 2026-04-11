import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CommercialCityContent from "@/components/seo/CommercialCityContent";
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

  const title = `Commercial Laundry Pickup & Delivery in ${city.name}, CA | CleanMax`;
  const description = `Commercial laundry pickup and delivery for businesses in ${city.name}, CA. We serve gyms, restaurants, hotels, Airbnb hosts, salons, and medical offices with custom recurring schedules. Call (626) 340-3098.`;

  return {
    title,
    description,
    keywords: `commercial laundry ${city.name} CA, business laundry service ${city.name}, laundry pickup delivery ${city.name}, linen service ${city.name}`,
    openGraph: {
      title,
      description,
      url: `https://cleanmaxlaundry.com/commercial-laundry/${city.slug}`,
      siteName: "CleanMax Laundry",
    },
    alternates: {
      canonical: `https://cleanmaxlaundry.com/commercial-laundry/${city.slug}`,
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
      <CommercialCityContent city={city} />
    </main>
  );
}
