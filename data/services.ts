export type Service = {
  slug: string;
  name: string;
  nameEs: string;
  headline: string;
  headlineEs: string;
  description: string;
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "laundromat",
    name: "Laundromat",
    nameEs: "Lavandería",
    headline: "Self-Service Laundromat in [CITY], CA",
    headlineEs: "Lavandería de Autoservicio en [CITY], CA",
    description: "Modern self-service washers and dryers. Open daily 6AM–10PM.",
    keywords: ["laundromat", "coin laundry", "self-service laundry", "laundry near me",
      "lavanderia", "coin operated laundry", "laundromat near me"],
  },
  {
    slug: "wash-and-fold",
    name: "Wash and Fold",
    nameEs: "Lavado y Doblado",
    headline: "Wash and Fold Drop-Off Service in [CITY], CA",
    headlineEs: "Servicio de Lavado y Doblado en [CITY], CA",
    description: "Drop off your laundry and pick it up clean. Open 6AM–9PM.",
    keywords: ["wash and fold", "drop off laundry", "fluff and fold", "wash dry fold",
      "laundry drop off service", "same day laundry", "wash and fold near me",
      "drop off laundry near me"],
  },
  {
    slug: "commercial-laundry",
    name: "Commercial Laundry",
    nameEs: "Lavandería Comercial",
    headline: "Commercial Laundry Pickup & Delivery in [CITY], CA",
    headlineEs: "Lavandería Comercial con Servicio a Domicilio en [CITY], CA",
    description: "Scheduled pickup and delivery laundry service for businesses.",
    keywords: ["commercial laundry", "business laundry service", "laundry pickup delivery",
      "commercial linen service", "laundry service for businesses"],
  },
];
