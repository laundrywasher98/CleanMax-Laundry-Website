import type { Metadata } from "next";
import CommercialOverviewContent from "@/components/seo/CommercialOverviewContent";
import { buildMetadata } from "@/lib/seo";
import { buildCommercialServiceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Lavandería Comercial Pomona | CleanMax",
  description:
    "CleanMax Laundry ofrece recolección y entrega de lavandería comercial para negocios en Pomona y el Inland Empire. Llama (909) 248-7305.",
  path: "/commercial-laundry",
  keywords:
    "servicio de lavandería comercial Pomona, recolección lavandería para negocios, servicio de lencería Inland Empire, lavandería comercial Pomona CA",
  lang: "es",
});

export default function CommercialLaundryPageEs() {
  return (
    <main>
      <JsonLd data={buildCommercialServiceSchema({ lang: "es" })} />
      <CommercialOverviewContent />
    </main>
  );
}
