import type { Metadata } from "next";
import ComfortersLargeLoadsContent from "@/components/seo/ComfortersLargeLoadsContent";
import { buildMetadata, BASE_URL } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Lavado de Edredones y Cargas Grandes en Pomona, CA | CleanMax Laundry",
  description:
    "Lave edredones king, duvets, ropa de cama, bolsas de dormir y cargas grandes en CleanMax Laundry. Autoservicio o entrega de lavado y doblado desde $1.50/lb.",
  path: "/comforters-large-loads",
  keywords:
    "lavado edredones Pomona, lavar edredón king, lavandería cargas grandes Pomona, lavar duvet, lavado de ropa de cama Pomona CA",
  lang: "es",
});

function buildComfortersServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Comforter and Large-Load Laundry",
    name: "CleanMax Comforter & Large-Load Laundry",
    description:
      "Lavadoras de gran capacidad de autoservicio y lavado y doblado de entrega para edredones, duvets, ropa de cama, bolsas de dormir y otros artículos de gran tamaño en CleanMax Laundry en Pomona, CA.",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "CleanMax Laundry",
    },
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
    url: `${BASE_URL}/es/comforters-large-loads`,
  };
}

export default function ComfortersLargeLoadsPageEs() {
  return (
    <main>
      <JsonLd data={buildComfortersServiceSchema()} />
      <ComfortersLargeLoadsContent />
    </main>
  );
}
