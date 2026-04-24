import type { Metadata } from "next";
import SitemapContent from "@/components/SitemapContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Mapa del Sitio | CleanMax Laundry — Pomona e Inland Empire",
  description:
    "Índice completo de cada página de CleanMax Laundry — páginas principales, áreas de servicio por ciudad, lavandería comercial por industria y todos los artículos del blog.",
  path: "/sitemap",
  keywords:
    "mapa del sitio CleanMax Laundry, todas las páginas CleanMax, lavandería Pomona, lavandería Inland Empire",
  lang: "es",
});

export default function SitemapPageEs() {
  return <SitemapContent />;
}
