import TestimonialsContent from "@/components/TestimonialsContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Reseñas — La Lavandería Mejor Calificada de Pomona | CleanMax Laundry",
  description:
    "Lee lo que dicen los clientes de Pomona sobre nuestra lavandería. Calificación de 4.8 estrellas en Google. Lavandería de autoservicio, lavado y doblado, y lavandería comercial en 1009 E Holt Ave.",
  path: "/testimonials",
  keywords:
    "reseñas CleanMax Laundry, reseñas lavandería Pomona, mejor lavandería Pomona CA, lavandería mejor calificada Pomona",
  lang: "es",
});

export default function TestimonialsPageEs() {
  return <TestimonialsContent />;
}
