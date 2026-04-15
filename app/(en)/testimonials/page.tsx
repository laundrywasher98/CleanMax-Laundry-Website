import TestimonialsContent from "@/components/TestimonialsContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Customer Reviews | CleanMax Laundry Pomona, CA",
  description:
    "See what Pomona customers say about CleanMax Laundry. Rated 5 stars on Google. Self-service laundry, wash & fold, and commercial pickup at 1009 E Holt Ave.",
  path: "/testimonials",
  keywords:
    "CleanMax Laundry reviews, laundromat reviews Pomona, laundry customer reviews Pomona CA",
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

export default function TestimonialsPage() {
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
