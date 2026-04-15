import CommercialQuotePageContent from "@/components/CommercialQuotePageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Commercial Laundry Quote | CleanMax Laundry",
  description:
    "Request a free commercial laundry quote from CleanMax Laundry. Serving gyms, restaurants, Airbnb hosts and businesses across Pomona and the Inland Empire.",
  path: "/commercial-quote",
  keywords:
    "commercial laundry quote Pomona, laundry pickup delivery quote Inland Empire, business laundry service quote",
});

export default function CommercialQuotePage() {
  return (
    <main>
      <CommercialQuotePageContent />
    </main>
  );
}
