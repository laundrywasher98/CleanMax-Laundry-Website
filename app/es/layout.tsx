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
  metadataBase: new URL("https://cleanmaxlaundry.com"),
  title: "CleanMax Laundry | Lavandería y Lavado y Doblado en Pomona, CA",
  description:
    "CleanMax Laundry ofrece lavandería de autoservicio, lavado y doblado, y recolección de lavandería comercial en Pomona, CA. Abierto todos los días. Máquinas modernas. $1.50/lb.",
  keywords:
    "lavandería Pomona CA, lavado y doblado Pomona, lavandería comercial Pomona, lavandería autoservicio, CleanMax Laundry",
  openGraph: {
    title: "CleanMax Laundry | Lavandería en Pomona, CA",
    description:
      "Lavandería de autoservicio, lavado y doblado, y recolección de lavandería comercial en Pomona, CA. Abierto todos los días.",
    url: "https://cleanmaxlaundry.com/es",
    siteName: "CleanMax Laundry",
    images: [
      {
        url: "/images/og-card-cleanmax.jpg",
        width: 1200,
        height: 630,
        alt: "CleanMax Laundry — lavandería de autoservicio, lavado y doblado, y recolección comercial en Pomona, CA",
      },
    ],
    locale: "es_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CleanMax Laundry | Lavandería en Pomona, CA",
    description:
      "Lavandería de autoservicio, lavado y doblado, y recolección de lavandería comercial en Pomona, CA.",
    images: ["https://cleanmaxlaundry.com/images/og-card-cleanmax.jpg"],
  },
  alternates: {
    canonical: "https://cleanmaxlaundry.com/es",
    languages: {
      en: "https://cleanmaxlaundry.com",
      es: "https://cleanmaxlaundry.com/es",
    },
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  }),
};

export default function EsRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${barlowCondensed.variable} ${barlow.variable}`}
    >
      <head>
        <JsonLd data={buildLocalBusinessSchema("es")} />
        <Analytics />
      </head>
      <body className="antialiased">
        <LanguageProvider initialLanguage="es">
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
