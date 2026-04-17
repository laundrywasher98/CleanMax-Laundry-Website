import type { Metadata } from "next";
import PickupDeliveryContent from "@/components/seo/PickupDeliveryContent";
import { buildMetadata } from "@/lib/seo";
import { buildPickupServiceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Laundry Pickup & Delivery in Pomona, CA | CleanMax Laundry",
  description:
    "Scheduled laundry pickup and delivery across the Pomona Valley and Inland Empire. Residential wash & fold and commercial accounts. 24–48 hour turnaround.",
  path: "/pickup-delivery",
  keywords:
    "laundry pickup and delivery Pomona, wash and fold pickup, commercial laundry delivery Inland Empire, same day laundry pickup, CleanMax Laundry pickup",
});

export default function PickupDeliveryPage() {
  return (
    <main>
      <JsonLd data={buildPickupServiceSchema("en")} />
      <PickupDeliveryContent />
    </main>
  );
}
