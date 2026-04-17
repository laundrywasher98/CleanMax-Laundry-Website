import TestimonialsContent from "@/components/TestimonialsContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Reseñas de Clientes | CleanMax Laundry Pomona, CA",
  description:
    "Mira lo que dicen los clientes de Pomona sobre CleanMax Laundry. Calificación de 4.8 estrellas en Google. Autoservicio, lavado y doblado, y recolección comercial en 1009 E Holt Ave.",
  path: "/testimonials",
  keywords:
    "reseñas CleanMax Laundry, reseñas lavandería Pomona, reseñas clientes lavandería Pomona CA",
  lang: "es",
});

export default function TestimonialsPageEs() {
  return <TestimonialsContent />;
}
