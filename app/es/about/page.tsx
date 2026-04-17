import AboutContent from "@/components/AboutContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sobre CleanMax — La Lavandería Familiar de Pomona, CA",
  description:
    "CleanMax Laundry es la lavandería moderna, local y familiar de Pomona, CA. Lavandería de autoservicio, lavado y doblado, y lavandería comercial con recogida y entrega para el Inland Empire.",
  path: "/about",
  keywords:
    "sobre CleanMax Laundry, lavandería familiar Pomona CA, lavandería de propiedad local Pomona, lavandería moderna Pomona",
  lang: "es",
});

export default function AboutPageEs() {
  return (
    <main>
      <AboutContent />
    </main>
  );
}
