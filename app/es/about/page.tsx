import AboutContent from "@/components/AboutContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sobre CleanMax Laundry | Pomona, CA",
  description:
    "CleanMax Laundry es una lavandería moderna de propiedad local en Pomona, CA. Autoservicio, lavado y doblado, y lavandería comercial para el Inland Empire.",
  path: "/about",
  keywords:
    "sobre CleanMax Laundry, lavandería de propiedad local Pomona CA, lavandería moderna Pomona",
  lang: "es",
});

export default function AboutPageEs() {
  return (
    <main>
      <AboutContent />
    </main>
  );
}
