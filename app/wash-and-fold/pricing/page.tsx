import type { Metadata } from "next";
import WashFoldPricingContent from "@/components/seo/WashFoldPricingContent";

export const metadata: Metadata = {
  title: "Wash & Fold Pricing | CleanMax Laundry — Pomona, CA",
  description:
    "Wash & fold starting at $1.50/lb on weekdays. Same-day and next-day options. $25 minimum. Drop off daily 6 AM–9 PM at CleanMax Laundry in Pomona, CA.",
  keywords:
    "wash and fold pricing Pomona, drop off laundry prices, same day laundry cost, wash dry fold cost Pomona CA",
  openGraph: {
    title: "Wash & Fold Pricing | CleanMax Laundry — Pomona, CA",
    description:
      "Wash & fold starting at $1.50/lb. Same-day and next-day options. $25 minimum. Open daily 6 AM–9 PM.",
    url: "https://cleanmaxlaundry.com/wash-and-fold/pricing",
    siteName: "CleanMax Laundry",
  },
  alternates: {
    canonical: "https://cleanmaxlaundry.com/wash-and-fold/pricing",
  },
};

export default function PricingPage() {
  return (
    <main>
      <WashFoldPricingContent />
    </main>
  );
}
