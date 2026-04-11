export type Industry = {
  slug: string;
  name: string;
  nameEs: string;
  items: string;
  itemsEs: string;
};

export const industries: Industry[] = [
  {
    slug: "gyms",
    name: "Gyms & Fitness Studios",
    nameEs: "Gimnasios y Estudios de Fitness",
    items: "towels, workout gear, and athletic wear",
    itemsEs: "toallas, ropa deportiva y uniformes",
  },
  {
    slug: "restaurants",
    name: "Restaurants & Catering",
    nameEs: "Restaurantes y Catering",
    items: "tablecloths, napkins, chef uniforms, and kitchen towels",
    itemsEs: "manteles, servilletas, uniformes de chef y trapos de cocina",
  },
  {
    slug: "airbnb-vacation-rentals",
    name: "Airbnb & Vacation Rentals",
    nameEs: "Airbnb y Rentas Vacacionales",
    items: "bed linens, towels, and blankets",
    itemsEs: "sábanas, toallas y cobijas",
  },
  {
    slug: "hotels-hospitality",
    name: "Hotels & Hospitality",
    nameEs: "Hoteles y Hospitalidad",
    items: "sheets, towels, robes, and guest linens",
    itemsEs: "sábanas, toallas, batas y ropa de cama para huéspedes",
  },
  {
    slug: "salons-spas",
    name: "Salons & Spas",
    nameEs: "Salones y Spas",
    items: "towels, capes, robes, and linens",
    itemsEs: "toallas, capas, batas y ropa de cama",
  },
  {
    slug: "medical-offices",
    name: "Medical & Dental Offices",
    nameEs: "Oficinas Médicas y Dentales",
    items: "scrubs, lab coats, and clinical linens",
    itemsEs: "uniformes médicos, batas de laboratorio y ropa clínica",
  },
  {
    slug: "schools-daycares",
    name: "Schools & Daycares",
    nameEs: "Escuelas y Guarderías",
    items: "uniforms, napkins, bibs, and activity towels",
    itemsEs: "uniformes, servilletas, baberos y toallas de actividad",
  },
  {
    slug: "auto-shops",
    name: "Auto Shops & Dealerships",
    nameEs: "Talleres y Agencias Automotrices",
    items: "shop rags, uniforms, and floor mats",
    itemsEs: "trapos de taller, uniformes y tapetes",
  },
];
