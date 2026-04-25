import TestimonialsContent from "@/components/TestimonialsContent";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { buildBusinessRatingSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Customer Reviews | CleanMax Laundry Pomona, CA",
  description:
    "See what Pomona customers say about CleanMax Laundry. 4.8-star rated on Google. Self-service laundry, wash & fold, and commercial pickup at 1009 E Holt Ave.",
  path: "/testimonials",
  keywords:
    "CleanMax Laundry reviews, laundromat reviews Pomona, laundry customer reviews Pomona CA",
});

export default function TestimonialsPage() {
  return (
    <>
      <JsonLd data={buildBusinessRatingSchema()} />
      <TestimonialsContent />
    </>
  );
}
