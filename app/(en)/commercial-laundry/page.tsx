import type { Metadata } from "next";
import CommercialOverviewContent from "@/components/seo/CommercialOverviewContent";
import { buildMetadata } from "@/lib/seo";
import { buildCommercialServiceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Commercial Laundry Pomona | CleanMax",
  description:
    "CleanMax Laundry offers commercial laundry pickup & delivery for businesses across Pomona and the Inland Empire. Call (909) 248-7305.",
  path: "/commercial-laundry",
  keywords:
    "commercial laundry service Pomona, business laundry pickup delivery, linen service Inland Empire, commercial laundry Pomona CA",
});

export default function CommercialLaundryPage() {
  return (
    <main>
      <JsonLd data={buildCommercialServiceSchema({ lang: "en" })} />
      <CommercialOverviewContent />
    </main>
  );
}
