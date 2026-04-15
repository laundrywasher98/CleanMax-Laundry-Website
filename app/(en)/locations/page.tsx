import type { Metadata } from "next";
import LocationsIndexContent from "@/components/LocationsIndexContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Laundromat Near Me | CleanMax Laundry Service Areas in Pomona & Surrounding Cities",
  description:
    "CleanMax Laundry serves Pomona, CA and surrounding communities. Find your nearest laundromat location for self-service laundry, wash & fold, and commercial laundry services.",
  path: "/locations",
  keywords:
    "laundromat near me, laundry service Pomona CA, laundry Inland Empire, wash and fold near me, CleanMax service areas",
});

export default function LocationsPage() {
  return <LocationsIndexContent />;
}
