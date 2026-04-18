import type { Metadata } from "next";
import CommercialOverviewContent from "@/components/seo/CommercialOverviewContent";
import { buildMetadata } from "@/lib/seo";
import { buildCommercialServiceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Lavandería Comercial en Pomona, CA | Recogida y Entrega | CleanMax",
  description:
    "Lavandería comercial con recogida y entrega en Pomona y el Inland Empire. $35 fijos de recolección, entrega al siguiente día estándar. CleanMax Laundry — un equipo familiar. Llame al (909) 248-7305.",
  path: "/commercial-laundry",
  keywords:
    "lavandería comercial Pomona, lavandería comercial Pomona CA, recolección y entrega de lavandería Inland Empire, lavandería para negocios Pomona, lavandería comercial con recogida",
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
