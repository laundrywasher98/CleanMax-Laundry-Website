import type { Metadata } from "next";
import WashFoldPricingContent from "@/components/seo/WashFoldPricingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Precios de Lavado y Doblado | CleanMax Laundry — Pomona, CA",
  description:
    "Lavado y doblado desde $1.50/lb entre semana. Opciones de mismo día y día siguiente. Mínimo $25. Abierto todos los días 6AM–9PM en CleanMax Laundry en Pomona, CA.",
  path: "/wash-and-fold/pricing",
  keywords:
    "precios lavado y doblado Pomona, precios dejar ropa, costo lavandería mismo día, servicio de lavado Pomona CA",
  lang: "es",
});

export default function PricingPageEs() {
  return (
    <main>
      <WashFoldPricingContent />
    </main>
  );
}
