import en from "@/locales/en.json";
import es from "@/locales/es.json";
import { cities } from "@/data/cities";
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
    image: `${BASE_URL}/images/IMG_8888.jpg`,
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
      "@id": `${BASE_URL}/locations/${c.slug}`,
    })),
    hasOfferCatalog: buildServiceCatalogSchema(lang),
    sameAs: [
      "https://www.instagram.com/cleanmaxlaundry_pomona",
      "https://www.facebook.com/profile.php?id=61588438208705",
      "https://www.tiktok.com/@cleanmax.laundry3",
      "https://www.yelp.com/biz/cleanmax-laundry-pomona-2",
    ],
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

