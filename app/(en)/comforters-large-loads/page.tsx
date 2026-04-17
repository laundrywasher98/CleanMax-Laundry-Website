import type { Metadata } from "next";
import ComfortersLargeLoadsContent from "@/components/seo/ComfortersLargeLoadsContent";
import { buildMetadata, BASE_URL } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Comforter Washing & Large Loads in Pomona, CA | CleanMax Laundry",
  description:
    "Wash king comforters, duvets, bedding, sleeping bags, and large loads at CleanMax Laundry. Self-service or drop-off wash & fold starting at $1.50/lb.",
  path: "/comforters-large-loads",
  keywords:
    "comforter washing Pomona, wash king comforter near me, large load laundry Pomona, duvet washing, bedding wash and fold Pomona CA",
});

function buildComfortersServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Comforter and Large-Load Laundry",
    name: "CleanMax Comforter & Large-Load Laundry",
    description:
      "Self-service large-capacity washers and drop-off wash & fold for comforters, duvets, bedding, sleeping bags, and other oversized items at CleanMax Laundry in Pomona, CA.",
    provider: { "@id": `${BASE_URL}/#business` },
    areaServed: {
      "@type": "City",
      name: "Pomona",
    },
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
    url: `${BASE_URL}/comforters-large-loads`,
  };
}

export default function ComfortersLargeLoadsPage() {
  return (
    <main>
      <JsonLd data={buildComfortersServiceSchema()} />
      <ComfortersLargeLoadsContent />
    </main>
  );
}
