import type { Metadata } from "next";
import type { Language } from "@/contexts/LanguageContext";

export const DEFAULT_OG_IMAGE = "/images/IMG_8888.jpg";
export const BASE_URL = "https://cleanmaxlaundry.com";

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  ogImage,
  lang = "en",
}: {
  title: string;
  description: string;
  // Path WITHOUT the /es prefix. E.g. "/about" for both EN and ES variants.
  path: string;
  keywords?: string;
  ogImage?: string;
  lang?: Language;
}): Metadata {
  const imageUrl = `${BASE_URL}${ogImage ?? DEFAULT_OG_IMAGE}`;
  const enUrl = `${BASE_URL}${path}`;
  const esUrl = `${BASE_URL}/es${path}`;
  const selfUrl = lang === "es" ? esUrl : enUrl;

  return {
    title,
    description,
    ...(keywords && { keywords }),
    openGraph: {
      title,
      description,
      url: selfUrl,
      siteName: "CleanMax Laundry",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt:
            lang === "es"
              ? "CleanMax Laundry — Pomona, CA"
              : "CleanMax Laundry — Pomona, CA",
        },
      ],
      locale: lang === "es" ? "es_US" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: selfUrl,
      languages: {
        "en-US": enUrl,
        es: esUrl,
        "x-default": enUrl,
      },
    },
  };
}
