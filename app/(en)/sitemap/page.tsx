import type { Metadata } from "next";
import SitemapContent from "@/components/SitemapContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Site Map | CleanMax Laundry — Pomona & Inland Empire",
  description:
    "Complete index of every page on CleanMax Laundry — main pages, service areas by city, commercial laundry by industry, and every blog post.",
  path: "/sitemap",
  keywords:
    "CleanMax Laundry site map, all pages CleanMax, laundry service pages Pomona, Inland Empire laundry locations",
});

export default function SitemapPage() {
  return <SitemapContent />;
}
