import type { Metadata } from "next";
import PickupDeliveryContent from "@/components/seo/PickupDeliveryContent";
import { buildMetadata } from "@/lib/seo";
import { buildPickupServiceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Recolección y Entrega de Lavandería Comercial en Pomona, CA | CleanMax Laundry",
  description:
    "Recolección y entrega de lavandería comercial programada en el Valle de Pomona y el Inland Empire. Tarifa fija de $65, entrega al siguiente día en pedidos de menos de 750 lbs, equipo familiar.",
  path: "/pickup-delivery",
  keywords:
    "recolección lavandería comercial Pomona, lavado y doblado comercial, lavandería comercial entrega Inland Empire, servicio lencería restaurante Pomona, CleanMax Laundry recolección comercial",
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
