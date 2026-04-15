import type { Metadata } from "next";
import PickupDeliveryContent from "@/components/seo/PickupDeliveryContent";
import { buildMetadata, BASE_URL } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Laundry Pickup & Delivery in Pomona, CA | CleanMax Laundry",
  description:
    "Scheduled laundry pickup and delivery across the Pomona Valley and Inland Empire. Residential wash & fold and commercial accounts. 24–48 hour turnaround.",
  path: "/pickup-delivery",
  keywords:
    "laundry pickup and delivery Pomona, wash and fold pickup, commercial laundry delivery Inland Empire, same day laundry pickup, CleanMax Laundry pickup",
});

function buildPickupServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Laundry Pickup and Delivery",
    name: "CleanMax Laundry Pickup & Delivery",
    description:
      "Scheduled residential and commercial laundry pickup and delivery throughout the Pomona Valley and Inland Empire.",
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
    url: `${BASE_URL}/pickup-delivery`,
  };
}

export default function PickupDeliveryPage() {
  return (
    <main>
      <JsonLd data={buildPickupServiceSchema()} />
      <PickupDeliveryContent />
    </main>
  );
}
