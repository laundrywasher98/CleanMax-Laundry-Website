import type { Metadata } from "next";
import LocationsIndexContent from "@/components/LocationsIndexContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Lavandería Cerca de Mí | Áreas de Servicio de CleanMax en Pomona y Ciudades Cercanas",
  description:
    "CleanMax Laundry atiende Pomona, CA y comunidades cercanas. Encuentra tu lavandería más cercana para autoservicio, lavado y doblado, y lavandería comercial.",
  path: "/locations",
  keywords:
    "lavandería cerca de mí, lavandería Pomona CA, lavandería Inland Empire, lavado y doblado cerca de mí, áreas de servicio CleanMax",
  lang: "es",
});

export default function LocationsPageEs() {
  return <LocationsIndexContent />;
}
