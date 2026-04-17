import type { Metadata } from "next";
import WashFoldPricingContent from "@/components/seo/WashFoldPricingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Precios de Lavado y Doblado en la Lavandería de Pomona | CleanMax",
  description:
    "Lavado y doblado desde $1.50/lb entre semana en nuestra lavandería de Pomona. Opciones de mismo día y día siguiente. Mínimo $25. Abierto todos los días 6AM–9PM en CleanMax Laundry, 1009 E Holt Ave.",
  path: "/wash-and-fold/pricing",
  keywords:
    "precios lavado y doblado Pomona, precios lavandería Pomona, costo lavado y doblado mismo día, servicio de lavandería Pomona CA",
  lang: "es",
});

export default function PricingPageEs() {
  return (
    <main>
      <WashFoldPricingContent />
    </main>
  );
}
