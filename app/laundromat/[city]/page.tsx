import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

  const title = `Laundromat Near ${city.name}, CA | CleanMax Laundry`;
  const description = `Looking for a laundromat near ${city.name}, CA? CleanMax Laundry in Pomona is open daily 6 AM–10 PM. Modern Wascomat machines, free parking, app payment. First wash free.`;

  return {
    title,
    description,
    keywords: `laundromat near ${city.name}, coin laundry ${city.name} CA, self service laundry ${city.name}, lavanderia ${city.name}`,
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
    <>
      <Navbar />
      <main>
        <LaundromatCityContent city={city} />
      </main>
      <Footer />
    </>
  );
}
