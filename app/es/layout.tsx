import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
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
        url: "/images/IMG_8888.jpg",
        width: 1200,
        height: 630,
        alt: "CleanMax Laundry en Pomona, CA",
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
    images: ["https://cleanmaxlaundry.com/images/IMG_8888.jpg"],
  },
  alternates: {
    canonical: "https://cleanmaxlaundry.com/es",
    languages: {
      "en-US": "https://cleanmaxlaundry.com",
      es: "https://cleanmaxlaundry.com/es",
      "x-default": "https://cleanmaxlaundry.com",
    },
  },
};

export default function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider initialLanguage="es">
      <Navbar />
      {children}
      <Footer />
    </LanguageProvider>
  );
}
