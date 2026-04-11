import type { Metadata } from "next";

export const DEFAULT_OG_IMAGE = "/images/IMG_8888.jpg";
export const BASE_URL = "https://cleanmaxlaundry.com";

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  ogImage,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogImage?: string;
}): Metadata {
  const imageUrl = `${BASE_URL}${ogImage ?? DEFAULT_OG_IMAGE}`;
  return {
    title,
    description,
    ...(keywords && { keywords }),
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${path}`,
      siteName: "CleanMax Laundry",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "CleanMax Laundry — Pomona, CA",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `${BASE_URL}${path}`,
    },
  };
}
