import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import { buildLocalBusinessSchema } from "@/lib/schema";
import "../globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cleanmaxlaundry.com"),
  title: "CleanMax Laundry | Laundromat & Wash and Fold in Pomona, CA",
  description:
    "CleanMax Laundry offers self-service laundry, wash & fold drop-off, and commercial laundry pickup in Pomona, CA. Open daily. Modern machines. $1.50/lb.",
  keywords:
    "laundromat Pomona CA, wash and fold Pomona, commercial laundry Pomona, self service laundry, CleanMax Laundry",
  openGraph: {
    title: "CleanMax Laundry | Laundromat & Wash and Fold in Pomona, CA",
    description:
      "Self-service laundry, wash & fold drop-off, and commercial laundry pickup in Pomona, CA. Open daily. Modern Wascomat machines.",
    url: "https://www.cleanmaxlaundry.com",
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
    images: ["https://www.cleanmaxlaundry.com/images/og-card-cleanmax.jpg"],
  },
  alternates: {
    canonical: "https://www.cleanmaxlaundry.com",
    languages: {
      en: "https://www.cleanmaxlaundry.com",
      es: "https://www.cleanmaxlaundry.com/es",
    },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export default function EnRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${barlow.variable}`}
    >
      <head>
        <JsonLd data={buildLocalBusinessSchema("en")} />
        <Analytics />
      </head>
      <body className="antialiased">
        <LanguageProvider initialLanguage="en">
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
