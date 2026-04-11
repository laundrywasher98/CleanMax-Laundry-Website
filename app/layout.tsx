import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

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
        url: "/images/IMG_8888.jpg",
        width: 1200,
        height: 630,
        alt: "CleanMax Laundry interior in Pomona, CA",
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
    images: ["https://cleanmaxlaundry.com/images/IMG_8888.jpg"],
  },
  metadataBase: new URL("https://cleanmaxlaundry.com"),
  alternates: {
    canonical: "https://cleanmaxlaundry.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Laundry",
  name: "CleanMax Laundry",
  description:
    "CleanMax Laundry offers self-service laundry, wash & fold drop-off, and commercial laundry pickup and delivery in Pomona, CA.",
  url: "https://cleanmaxlaundry.com",
  telephone: "(909) 248-7305",
  email: "laundry@cleanmaxlaundry.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1009 E Holt Ave",
    addressLocality: "Pomona",
    addressRegion: "CA",
    postalCode: "91767",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0581,
    longitude: -117.7441,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "06:00",
      closes: "22:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Mobile App",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Vending Machines", value: true },
    { "@type": "LocationFeatureSpecification", name: "App-based Payment", value: true },
  ],
  sameAs: [
    "https://www.instagram.com/cleanmaxlaundry_pomona",
    "https://www.facebook.com/profile.php?id=61588438208705",
    "https://www.tiktok.com/@cleanmax.laundry3",
    "https://www.yelp.com/biz/cleanmax-laundry-pomona-2",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${barlow.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
