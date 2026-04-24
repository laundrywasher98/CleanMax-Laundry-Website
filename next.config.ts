import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    const toHome = [
      "/contact-us",
      "/contact",
      "/contact-1",
      "/home",
      "/home-1",
      "/hours",
      "/shop",
      "/gallery",
      "/faq",
      "/account",
      "/config",
    ];
    const toPricing = [
      "/services",
      "/pricing",
      "/wash-and-fold",
      "/wash-fold",
      "/wash-dry-fold",
    ];
    const toLocations = [
      "/laundromat",
      "/location",
    ];
    const toPickup = [
      "/pickup",
      "/delivery",
      "/book",
      "/booking",
      "/appointments",
    ];
    const map = (sources: string[], destination: string) =>
      sources.map((source) => ({ source, destination, permanent: true }));

    const industryMerge: Array<[string, string]> = [
      ["restaurant", "restaurants"],
      ["gym", "gyms"],
      ["airbnb", "airbnb-vacation-rentals"],
      ["salon", "salons-spas"],
      ["medical-office", "medical-offices"],
      ["hotel", "hotels-hospitality"],
    ];
    const industryRedirects = industryMerge.flatMap(([oldSlug, newSlug]) => [
      {
        source: `/commercial-laundry/${oldSlug}/pomona`,
        destination: `/commercial-laundry/${newSlug}/pomona`,
        permanent: true,
      },
      {
        source: `/es/commercial-laundry/${oldSlug}/pomona`,
        destination: `/es/commercial-laundry/${newSlug}/pomona`,
        permanent: true,
      },
    ]);

    return [
      ...map(toHome, "/"),
      ...map(toPricing, "/wash-and-fold/pricing"),
      ...map(toLocations, "/locations"),
      ...map(toPickup, "/commercial-laundry"),
      { source: "/pickup-delivery", destination: "/commercial-laundry", permanent: true },
      { source: "/es/pickup-delivery", destination: "/es/commercial-laundry", permanent: true },
      { source: "/about-1", destination: "/about", permanent: true },
      { source: "/blog-1", destination: "/blog", permanent: true },
      ...industryRedirects,
    ];
  },
};

export default nextConfig;
