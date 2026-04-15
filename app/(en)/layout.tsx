import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CleanMax Laundry | Laundromat & Wash and Fold in Pomona, CA",
  description:
    "CleanMax Laundry offers self-service laundry, wash & fold drop-off, and commercial laundry pickup in Pomona, CA. Open daily. Modern machines. $1.50/lb.",
  keywords:
    "laundromat Pomona CA, wash and fold Pomona, commercial laundry Pomona, self service laundry, CleanMax Laundry",
  openGraph: {
    title: "CleanMax Laundry | Laundromat & Wash and Fold in Pomona, CA",
    description:
      "Self-service laundry, wash & fold drop-off, and commercial laundry pickup in Pomona, CA. Open daily. Modern Wascomat machines.",
    url: "https://cleanmaxlaundry.com",
    siteName: "CleanMax Laundry",
    images: [
      {
        url: "/images/og-card-cleanmax.jpg",
        width: 1200,
        height: 630,
        alt: "CleanMax Laundry — self-service laundromat, wash & fold, and commercial laundry pickup in Pomona, CA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CleanMax Laundry | Laundromat & Wash and Fold in Pomona, CA",
    description:
      "Self-service laundry, wash & fold drop-off, and commercial laundry pickup in Pomona, CA. Open daily. Modern Wascomat machines.",
    images: ["https://cleanmaxlaundry.com/images/og-card-cleanmax.jpg"],
  },
  alternates: {
    canonical: "https://cleanmaxlaundry.com",
    languages: {
      "en-US": "https://cleanmaxlaundry.com",
      es: "https://cleanmaxlaundry.com/es",
      "x-default": "https://cleanmaxlaundry.com",
    },
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider initialLanguage="en">
      <Navbar />
      {children}
      <Footer />
    </LanguageProvider>
  );
}
