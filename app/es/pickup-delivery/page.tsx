import type { Metadata } from "next";
import PickupDeliveryContent from "@/components/seo/PickupDeliveryContent";
import { buildMetadata, BASE_URL } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Recolección y Entrega de Lavandería en Pomona, CA | CleanMax Laundry",
  description:
    "Recolección y entrega de lavandería programada en el Valle de Pomona y el Inland Empire. Cuentas residenciales y comerciales. Entrega en 24 a 48 horas.",
  path: "/pickup-delivery",
  keywords:
    "recolección y entrega lavandería Pomona, lavado y doblado recolección, lavandería comercial entrega Inland Empire, CleanMax Laundry recolección",
  lang: "es",
});

function buildPickupServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Laundry Pickup and Delivery",
    name: "CleanMax Laundry Pickup & Delivery",
    description:
      "Recolección y entrega de lavandería residencial y comercial programada en el Valle de Pomona y el Inland Empire.",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "CleanMax Laundry",
    },
    areaServed: [
      "Pomona",
      "Claremont",
      "La Verne",
      "San Dimas",
      "Diamond Bar",
      "Walnut",
      "Chino",
      "Chino Hills",
      "Ontario",
      "Upland",
      "Rancho Cucamonga",
      "Montclair",
      "Fontana",
      "Rialto",
      "Colton",
      "Riverside",
    ].map((name) => ({ "@type": "City", name })),
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
      eligibleTransactionVolume: {
        "@type": "PriceSpecification",
        price: "25.00",
        priceCurrency: "USD",
        description: "$25 minimum order",
      },
    },
    url: `${BASE_URL}/es/pickup-delivery`,
  };
}

export default function PickupDeliveryPageEs() {
  return (
    <main>
      <JsonLd data={buildPickupServiceSchema()} />
      <PickupDeliveryContent />
    </main>
  );
}
