import type { Metadata } from "next";
import PickupDeliveryContent from "@/components/seo/PickupDeliveryContent";
import { buildMetadata } from "@/lib/seo";
import { buildPickupServiceSchema } from "@/lib/schema";
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

export default function PickupDeliveryPageEs() {
  return (
    <main>
      <JsonLd data={buildPickupServiceSchema("es")} />
      <PickupDeliveryContent />
    </main>
  );
}
