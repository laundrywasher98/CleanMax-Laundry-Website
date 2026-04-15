import CommercialQuotePageContent from "@/components/CommercialQuotePageContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cotización de Lavandería Comercial | CleanMax Laundry",
  description:
    "Solicita una cotización gratuita de lavandería comercial con CleanMax Laundry. Atendiendo gimnasios, restaurantes, anfitriones de Airbnb y negocios en Pomona y el Inland Empire.",
  path: "/commercial-quote",
  keywords:
    "cotización lavandería comercial Pomona, cotización recolección lavandería Inland Empire, cotización servicio lavandería para negocios",
  lang: "es",
});

export default function CommercialQuotePageEs() {
  return (
    <main>
      <CommercialQuotePageContent />
    </main>
  );
}
