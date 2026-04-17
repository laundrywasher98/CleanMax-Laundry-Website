import type { Metadata } from "next";
import PickupDeliveryContent from "@/components/seo/PickupDeliveryContent";
import { buildMetadata } from "@/lib/seo";
import { buildPickupServiceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = buildMetadata({
  title: "Commercial Laundry Pickup & Delivery in Pomona, CA | CleanMax Laundry",
  description:
    "Scheduled commercial laundry pickup and delivery across the Pomona Valley and Inland Empire. $65 flat pickup fee, next-day delivery on orders under 750 lbs, family-run team.",
  path: "/pickup-delivery",
  keywords:
    "commercial laundry pickup and delivery Pomona, commercial wash and fold pickup, commercial laundry delivery Inland Empire, restaurant linen service Pomona, CleanMax Laundry commercial pickup",
});

export default function PickupDeliveryPage() {
  return (
    <main>
      <JsonLd data={buildPickupServiceSchema("en")} />
      <PickupDeliveryContent />
    </main>
  );
}
