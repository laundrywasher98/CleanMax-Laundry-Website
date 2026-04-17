import en from "@/locales/en.json";
import es from "@/locales/es.json";
import { cities } from "@/data/cities";
import { pickupServiceArea } from "@/data/pickupServiceArea";
import { BASE_URL } from "@/lib/seo";
import type { Language } from "@/contexts/LanguageContext";

type Translations = typeof en;
const translations: Record<Language, Translations> = { en, es };

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFaqSchema(lang: Language = "en") {
  const t = translations[lang];
  const faqs: Array<{ q: string; a: string }> = [];
  for (let i = 1; i <= 6; i++) {
    const q = (t as Record<string, string>)[`faq_q${i}`];
    const a = (t as Record<string, string>)[`faq_a${i}`];
    if (q && a) faqs.push({ q, a });
  }
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

type ServiceDefinition = {
  name: { en: string; es: string };
  description: { en: string; es: string };
  slug: string;
  priceRange?: string;
};

const coreServices: ServiceDefinition[] = [
  {
    slug: "laundromat",
    name: {
      en: "Self-Service Laundromat",
      es: "Lavandería de Autoservicio",
    },
    description: {
      en: "Modern Wascomat washers and dryers available daily from 6 AM to 10 PM. Large-capacity machines for bulky loads, comforters, and bedding.",
      es: "Lavadoras y secadoras Wascomat modernas disponibles todos los días de 6 AM a 10 PM. Máquinas de gran capacidad para cargas pesadas, edredones y ropa de cama.",
    },
  },
  {
    slug: "wash-and-fold",
    name: {
      en: "Wash and Fold Service",
      es: "Servicio de Lavado y Doblado",
    },
    description: {
      en: "Drop-off wash and fold at a flat rate of $1.50 per pound. Same-day turnaround available. Free pickup and delivery for qualifying orders throughout the Pomona Valley.",
      es: "Lavado y doblado de entrega a una tarifa fija de $1.50 por libra. Entrega el mismo día disponible. Recolección y entrega gratis para pedidos calificados en todo el Valle de Pomona.",
    },
    priceRange: "$1.50/lb",
  },
  {
    slug: "commercial-laundry",
    name: {
      en: "Commercial Laundry Service",
      es: "Servicio de Lavandería Comercial",
    },
    description: {
      en: "Weekly, biweekly, or on-call commercial laundry pickup and delivery for restaurants, gyms, Airbnbs, hotels, salons, medical offices, and more throughout Southern California.",
      es: "Recolección y entrega de lavandería comercial semanal, quincenal o a demanda para restaurantes, gimnasios, Airbnbs, hoteles, salones, consultorios médicos y más en todo el Sur de California.",
    },
  },
];

export function buildServiceCatalogSchema(lang: Language = "en") {
  return {
    "@type": "OfferCatalog",
    name: lang === "es" ? "Servicios de Lavandería" : "Laundry Services",
    itemListElement: coreServices.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name[lang],
        description: service.description[lang],
        provider: {
          "@type": "LocalBusiness",
          name: "CleanMax Laundry",
          "@id": `${BASE_URL}/#business`,
        },
        areaServed: cities.map((c) => ({
          "@type": "City",
          name: c.name,
        })),
        ...(service.priceRange && { priceRange: service.priceRange }),
        url: `${BASE_URL}/${service.slug}`,
      },
    })),
  };
}

export function buildLocalBusinessSchema(lang: Language = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "Laundry",
    "@id": `${BASE_URL}/#business`,
    name: "CleanMax Laundry",
    description:
      lang === "es"
        ? "CleanMax Laundry ofrece lavandería de autoservicio, servicio de lavado y doblado, y recolección de lavandería comercial en Pomona, CA, atendiendo a todo el Valle de Pomona y al Inland Empire."
        : "CleanMax Laundry offers self-service laundry, wash & fold drop-off, and commercial laundry pickup and delivery in Pomona, CA, serving the full Pomona Valley and Inland Empire.",
    url: BASE_URL,
    telephone: "(909) 248-7305",
    email: "laundry@cleanmaxlaundry.com",
    image: `${BASE_URL}/images/cleanmax-laundry-pomona-interior.webp`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1009 E Holt Ave",
      addressLocality: "Pomona",
      addressRegion: "CA",
      postalCode: "91767",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0581,
      longitude: -117.7441,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "06:00",
        closes: "22:00",
      },
    ],
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card, Mobile App",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Vending Machines", value: true },
      { "@type": "LocationFeatureSpecification", name: "App-based Payment", value: true },
    ],
    areaServed: cities.map((c) => ({
      "@type": "City",
      name: c.name,
    })),
    hasOfferCatalog: buildServiceCatalogSchema(lang),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE_AGGREGATE_RATING.ratingValue,
      reviewCount: SITE_AGGREGATE_RATING.reviewCount,
      bestRating: SITE_AGGREGATE_RATING.bestRating,
      worstRating: SITE_AGGREGATE_RATING.worstRating,
    },
    sameAs: [
      "https://www.instagram.com/cleanmaxlaundry_pomona",
      "https://www.facebook.com/profile.php?id=61588438208705",
      "https://www.tiktok.com/@cleanmax.laundry3",
      "https://www.yelp.com/biz/cleanmax-laundry-pomona-2",
    ],
  };
}

// Site-wide rating — keep in sync with Google Business Profile.
// Last synced: 2026-04-16 (4.8★ / 99 reviews). Update as new reviews accumulate.
export const SITE_AGGREGATE_RATING = {
  ratingValue: 4.8,
  reviewCount: 99,
  bestRating: 5,
  worstRating: 1,
};

type CommercialServiceArgs = {
  city: { name: string; slug: string };
  industry?: { name: string; nameEs: string; items: string; itemsEs: string; slug: string };
  lang?: Language;
};

export function buildCommercialServiceSchema({
  city,
  industry,
  lang = "en",
}: CommercialServiceArgs) {
  const isEs = lang === "es";
  const slugPath = industry
    ? `/commercial-laundry/${industry.slug}/${city.slug}`
    : `/commercial-laundry/${city.slug}`;
  const urlPath = isEs ? `/es${slugPath}` : slugPath;

  const industryName = industry ? (isEs ? industry.nameEs : industry.name) : null;
  const items = industry ? (isEs ? industry.itemsEs : industry.items) : null;

  const name = industry
    ? isEs
      ? `Lavandería Comercial para ${industryName} en ${city.name}, CA`
      : `${industryName} Commercial Laundry in ${city.name}, CA`
    : isEs
      ? `Lavandería Comercial en ${city.name}, CA`
      : `Commercial Laundry in ${city.name}, CA`;

  const description = industry
    ? isEs
      ? `Recolección y entrega de lavandería comercial para ${industryName} en ${city.name}, CA. CleanMax lava ${items} con turnaround programado y precios por libra.`
      : `Scheduled commercial laundry pickup and delivery for ${industryName} in ${city.name}, CA. CleanMax handles ${items} with reliable turnaround and per-pound pricing.`
    : isEs
      ? `Recolección y entrega de lavandería comercial en ${city.name}, CA. CleanMax atiende restaurantes, gimnasios, hoteles, Airbnb, salones y oficinas médicas.`
      : `Commercial laundry pickup and delivery in ${city.name}, CA. CleanMax serves restaurants, gyms, hotels, Airbnb, salons, and medical offices.`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Commercial Laundry",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "CleanMax Laundry",
    },
    areaServed: { "@type": "City", name: city.name },
    url: `${BASE_URL}${urlPath}`,
  };
}

export function buildPickupServiceSchema(lang: Language = "en") {
  const urlPath = lang === "es" ? "/es/pickup-delivery" : "/pickup-delivery";
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Laundry Pickup and Delivery",
    name: "CleanMax Laundry Pickup & Delivery",
    description:
      lang === "es"
        ? "Recolección y entrega de lavandería residencial y comercial programada en el Valle de Pomona y el Inland Empire."
        : "Scheduled residential and commercial laundry pickup and delivery throughout the Pomona Valley and Inland Empire.",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "CleanMax Laundry",
    },
    areaServed: pickupServiceArea.map((name) => ({ "@type": "City", name })),
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "1.50",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1.50",
        priceCurrency: "USD",
        unitText: "LB",
      },
    },
    url: `${BASE_URL}${urlPath}`,
  };
}

export function buildArticleSchema({
  title,
  description,
  slug,
  publishDate,
  lang = "en",
  image,
}: {
  title: string;
  description: string;
  slug: string;
  publishDate: string;
  lang?: Language;
  image?: string;
}) {
  const urlPath = lang === "es" ? `/es/blog/${slug}` : `/blog/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}${urlPath}`,
    },
    headline: title,
    description,
    datePublished: publishDate,
    dateModified: publishDate,
    author: {
      "@type": "Organization",
      name: "CleanMax Laundry",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "CleanMax Laundry",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo.png`,
      },
    },
    image: `${BASE_URL}${image ?? "/images/og-card-cleanmax.jpg"}`,
    inLanguage: lang === "es" ? "es-US" : "en-US",
  };
}

export function buildPersonSchema({
  name,
  jobTitle,
  description,
  image,
}: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${BASE_URL}/about#owner`,
    name,
    jobTitle,
    description,
    worksFor: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "CleanMax Laundry",
    },
    ...(image && { image: `${BASE_URL}${image}` }),
  };
}

