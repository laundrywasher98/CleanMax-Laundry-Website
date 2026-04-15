import TestimonialsContent from "@/components/TestimonialsContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Reseñas de Clientes | CleanMax Laundry Pomona, CA",
  description:
    "Mira lo que dicen los clientes de Pomona sobre CleanMax Laundry. Calificación de 5 estrellas en Google. Autoservicio, lavado y doblado, y recolección comercial en 1009 E Holt Ave.",
  path: "/testimonials",
  keywords:
    "reseñas CleanMax Laundry, reseñas lavandería Pomona, reseñas clientes lavandería Pomona CA",
  lang: "es",
});

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CleanMax Laundry",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function TestimonialsPageEs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <TestimonialsContent />
    </>
  );
}
