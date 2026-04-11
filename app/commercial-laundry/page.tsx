import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CommercialOverviewContent from "@/components/seo/CommercialOverviewContent";

export const metadata: Metadata = {
  title: "Commercial Laundry Pickup & Delivery | CleanMax Laundry — Pomona, CA",
  description:
    "Scheduled commercial laundry pickup and delivery for gyms, restaurants, Airbnb hosts, hotels, salons, and medical offices. Custom recurring schedules. Serving the Inland Empire and San Gabriel Valley.",
  keywords:
    "commercial laundry service Pomona, business laundry pickup delivery, linen service Inland Empire, commercial laundry Pomona CA",
  openGraph: {
    title: "Commercial Laundry Pickup & Delivery | CleanMax Laundry",
    description:
      "Scheduled commercial laundry pickup and delivery for businesses throughout the Inland Empire. Gyms, restaurants, hotels, Airbnb, salons, medical offices.",
    url: "https://cleanmaxlaundry.com/commercial-laundry",
    siteName: "CleanMax Laundry",
  },
  alternates: {
    canonical: "https://cleanmaxlaundry.com/commercial-laundry",
  },
};

export default function CommercialLaundryPage() {
  return (
    <>
      <Navbar />
      <main>
        <CommercialOverviewContent />
      </main>
      <Footer />
    </>
  );
}
