import type { Metadata } from "next";
import WashFoldPricingContent from "@/components/seo/WashFoldPricingContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Wash & Fold Pricing | CleanMax Laundry — Pomona, CA",
  description:
    "Wash & fold starting at $1.50/lb on weekdays. Same-day and next-day options. $25 minimum. Open daily 6AM–9PM at CleanMax Laundry in Pomona, CA.",
  path: "/wash-and-fold/pricing",
  keywords:
    "wash and fold pricing Pomona, drop off laundry prices, same day laundry cost, fluff and fold Pomona CA",
});

export default function PricingPage() {
  return (
    <main>
      <WashFoldPricingContent />
    </main>
  );
}
