export type IndustryFaq = { q: string; a: string };

export type Industry = {
  slug: string;
  name: string;
  nameEs: string;
  items: string;
  itemsEs: string;
  heroCopy: { en: string; es: string };
  accepts: { en: string; es: string };
  faqs: IndustryFaq[];
  faqsEs: IndustryFaq[];
};

export const industries: Industry[] = [
  {
    slug: "gyms",
    name: "Gyms & Fitness Studios",
    nameEs: "Gimnasios y Estudios de Fitness",
    items: "towels, workout gear, and athletic wear",
    itemsEs: "toallas, ropa deportiva y uniformes",
    heroCopy: {
      en: "Keep your {city} fitness floor stocked with fresh towels, clean uniforms, and sanitized studio linens — on a schedule built around your peak hours. CleanMax is a family-run commercial laundry in Pomona, serving gyms across {county} County with scheduled pickup, next-day turnaround, and honest per-pound pricing.",
      es: "Mantén el piso de tu gimnasio en {city} con toallas frescas, uniformes limpios y ropa de estudio sanitizada — en un horario construido alrededor de tus horas pico. CleanMax es una lavandería comercial familiar en Pomona, atendiendo gimnasios en el Condado de {county} con recogida programada, entrega al siguiente día y precios honestos por libra.",
    },
    accepts: {
      en: "We wash member towels, staff shirts, trainer uniforms, and group-class mats for gyms across {city}. Weekly, daily, or peak-hour routing — you pick the cadence, we execute it.",
      es: "Lavamos toallas de miembros, camisetas del personal, uniformes de entrenadores y tapetes de clases grupales para gimnasios en {city}. Semanal, diario o en horas pico — tú eliges la cadencia, nosotros la ejecutamos.",
    },
    faqs: [
      {
        q: "Can CleanMax handle daily towel pickup for a busy {city} gym?",
        a: "Yes. High-volume gyms typically run on a 5-to-7-day-a-week cadence, and our Pomona facility's 25 washers and 34 dryers absorb the load without a delay. We pick up, wash, and return clean towels next-day on any run under 750 lbs.",
      },
      {
        q: "How do we figure out how many towel sets we need?",
        a: "A simple rule: one set in use, one set in the laundry, one set on the shelf. We'll walk through your peak hours and membership count to sanity-check the float before you commit to a contract.",
      },
      {
        q: "Do you sanitize between loads?",
        a: "Every cycle runs through our pre-wash inspection and premium Sudsy detergent program, on commercial-grade Wascomat washers up to 80 lb capacity. No shortcuts between customers.",
      },
      {
        q: "What does pickup cost for a {city} gym?",
        a: "Pickup and delivery is a flat $35 per run. The laundry itself is quoted per pound based on volume, frequency, and fabric type — we'll send a custom quote once we know your cadence.",
      },
      {
        q: "Can you scale with us as membership grows?",
        a: "That's how we're built. Start on a lighter cadence and add runs or volume as your floor traffic grows — no re-contracting, no penalty for adjusting mid-month.",
      },
    ],
    faqsEs: [
      {
        q: "¿CleanMax puede manejar recogida diaria de toallas para un gimnasio ocupado en {city}?",
        a: "Sí. Los gimnasios de alto volumen típicamente operan en una cadencia de 5 a 7 días a la semana, y nuestras 25 lavadoras y 34 secadoras en Pomona absorben la carga sin demora. Recogemos, lavamos y devolvemos toallas limpias al día siguiente en cualquier recorrido bajo 750 libras.",
      },
      {
        q: "¿Cómo calculamos cuántos juegos de toallas necesitamos?",
        a: "Regla simple: un juego en uso, un juego en la lavandería, un juego en el estante. Revisaremos tus horas pico y cantidad de miembros para validar el cálculo antes de que firmes un contrato.",
      },
      {
        q: "¿Sanitizan entre cargas?",
        a: "Cada ciclo pasa por nuestra inspección previa al lavado y programa de detergente premium Sudsy, en lavadoras Wascomat comerciales hasta 80 libras de capacidad. Sin atajos entre clientes.",
      },
      {
        q: "¿Cuánto cuesta la recogida para un gimnasio en {city}?",
        a: "La recogida y entrega es una tarifa fija de $35 por viaje. El lavado se cotiza por libra según volumen, frecuencia y tipo de tela — enviamos una cotización personalizada una vez que conozcamos tu cadencia.",
      },
      {
        q: "¿Pueden crecer con nosotros a medida que aumentan los miembros?",
        a: "Así estamos diseñados. Empieza con una cadencia ligera y agrega viajes o volumen a medida que crece el tráfico — sin volver a contratar, sin penalidades por ajustar a mitad de mes.",
      },
    ],
  },
  {
    slug: "restaurants",
    name: "Restaurants & Catering",
    nameEs: "Restaurantes y Catering",
    items: "tablecloths, napkins, chef uniforms, and kitchen towels",
    itemsEs: "manteles, servilletas, uniformes de chef y trapos de cocina",
    heroCopy: {
      en: "Clean tablecloths, fresh napkins, and crisp chef uniforms before the dinner rush — that's what CleanMax gives {city} restaurants. Family-run from Pomona, with a bilingual team on the floor and a CleanMax-staff driver (not a contractor) handling your pickup in {county} County.",
      es: "Manteles limpios, servilletas frescas y uniformes de chef impecables antes de la hora pico — eso es lo que CleanMax le da a los restaurantes en {city}. Familiar, desde Pomona, con un equipo bilingüe en el piso y un chofer empleado por CleanMax (no un contratista) manejando tu recogida en el Condado de {county}.",
    },
    accepts: {
      en: "Tablecloths, napkins, chef uniforms, aprons, kitchen towels, and bar linens — the daily rotation your kitchen and front-of-house actually run through in {city}.",
      es: "Manteles, servilletas, uniformes de chef, delantales, trapos de cocina y ropa de bar — la rotación diaria que realmente necesita tu cocina y comedor en {city}.",
    },
    faqs: [
      {
        q: "What's turnaround on kitchen towels for a {city} restaurant?",
        a: "Standard turnaround is next-day on any pickup under 750 lbs. If you run high volume and need a 48-hour rotation, we build the route around your service hours.",
      },
      {
        q: "How do you handle food and oil stains?",
        a: "Every load starts with a pre-wash inspection and our premium Sudsy detergent program. We won't promise to rescue an old grease stain, but fresh spills treated on pickup day come back clean.",
      },
      {
        q: "Can you scale with our catering events?",
        a: "Yes. Catering runs are quoted case-by-case — one-off events over 750 lbs get their own schedule. Our Pomona facility runs 25 washers and 34 dryers, so capacity isn't the bottleneck.",
      },
      {
        q: "What does it cost for a {city} restaurant?",
        a: "Pickup and delivery is a $35 flat fee per run. Laundry is quoted per pound — volume, fabric mix, and frequency set the per-pound rate. We send the quote after a short intake call.",
      },
      {
        q: "Do you offer volume contracts?",
        a: "We do. Most {city} restaurants settle into a weekly or biweekly contract once the cadence is clear. You work with our team — not a salesperson — and the contract adjusts as your volume does.",
      },
    ],
    faqsEs: [
      {
        q: "¿Cuál es el tiempo de entrega para trapos de cocina en un restaurante de {city}?",
        a: "El estándar es entrega al siguiente día en cualquier recogida bajo 750 libras. Si manejas alto volumen y necesitas rotación de 48 horas, construimos la ruta alrededor de tus horas de servicio.",
      },
      {
        q: "¿Cómo manejan las manchas de comida y aceite?",
        a: "Cada carga empieza con una inspección previa al lavado y nuestro programa de detergente premium Sudsy. No prometemos rescatar una mancha vieja de grasa, pero los derrames frescos tratados el día de la recogida regresan limpios.",
      },
      {
        q: "¿Pueden crecer con nuestros eventos de catering?",
        a: "Sí. Los viajes de catering se cotizan caso por caso — eventos puntuales sobre 750 libras tienen su propio horario. Nuestras instalaciones en Pomona operan 25 lavadoras y 34 secadoras, así que la capacidad no es el cuello de botella.",
      },
      {
        q: "¿Cuánto cuesta para un restaurante en {city}?",
        a: "La recogida y entrega es una tarifa fija de $35 por viaje. El lavado se cotiza por libra — volumen, mezcla de telas y frecuencia fijan el precio por libra. Enviamos la cotización después de una breve llamada.",
      },
      {
        q: "¿Ofrecen contratos por volumen?",
        a: "Sí. La mayoría de los restaurantes de {city} se acomodan a un contrato semanal o quincenal una vez que la cadencia es clara. Trabajas con nuestro equipo — no un vendedor — y el contrato se ajusta según tu volumen.",
      },
    ],
  },
  {
    slug: "airbnb-vacation-rentals",
    name: "Airbnb & Vacation Rentals",
    nameEs: "Airbnb y Rentas Vacacionales",
    items: "bed linens, towels, and blankets",
    itemsEs: "sábanas, toallas y cobijas",
    heroCopy: {
      en: "Turnover-day sheets, towels, and blankets for {city} Airbnb hosts — washed, folded, and back in the closet before your next check-in. Family-run from Pomona, with scheduling that fits around your bookings, not the other way around.",
      es: "Sábanas, toallas y cobijas del día de cambio para anfitriones de Airbnb en {city} — lavadas, dobladas y de vuelta en el clóset antes de tu próximo check-in. Familiar desde Pomona, con horarios que se acomodan a tus reservas, no al revés.",
    },
    accepts: {
      en: "Bed linens, bath towels, blankets, and pillowcases for short-term rentals across {city} and {county} County — the linens your guests actually touch.",
      es: "Sábanas, toallas de baño, cobijas y fundas de almohada para rentas de corto plazo en {city} y el Condado de {county} — la ropa de cama que realmente tocan tus huéspedes.",
    },
    faqs: [
      {
        q: "Can CleanMax do turnover-day pickup for a {city} Airbnb?",
        a: "Yes. Most hosts book a same-day check-out / check-in cadence and we route pickups to fit that window. Next-day standard turnaround covers most bookings under 750 lbs.",
      },
      {
        q: "Do I need extra linen sets between pickups?",
        a: "We recommend at least two full sets per unit so a single delay never bumps a check-in. For back-to-back bookings, a third set in the laundry keeps you safe.",
      },
      {
        q: "What happens with makeup, wine, or fake-tan stains on sheets?",
        a: "Every pickup runs through a pre-wash inspection before going into the machine. Fresh stains usually come out; we're honest about old or set-in stains — no inflated promises.",
      },
      {
        q: "How is pricing structured for {city} hosts?",
        a: "Pickup and delivery is $35 flat per run. Linen washing is quoted per pound — you pay the same rate whether it's one bed or ten. Most hosts settle into a weekly pickup.",
      },
      {
        q: "Can you handle multiple properties on one contract?",
        a: "Yes. Property managers with three-plus units typically move to a single contract with a consolidated weekly route — one invoice, one schedule, no per-unit admin.",
      },
    ],
    faqsEs: [
      {
        q: "¿CleanMax puede hacer recogida el día de cambio para un Airbnb en {city}?",
        a: "Sí. La mayoría de los anfitriones reservan una cadencia de check-out / check-in el mismo día y enrutamos las recogidas para encajar en esa ventana. La entrega estándar al siguiente día cubre la mayoría de las reservas bajo 750 libras.",
      },
      {
        q: "¿Necesito juegos extras de ropa de cama entre recogidas?",
        a: "Recomendamos al menos dos juegos completos por unidad para que una sola demora nunca empuje un check-in. Para reservas consecutivas, un tercer juego en la lavandería te mantiene seguro.",
      },
      {
        q: "¿Qué pasa con manchas de maquillaje, vino o autobronceante en sábanas?",
        a: "Cada recogida pasa por una inspección previa al lavado antes de entrar a la máquina. Manchas frescas normalmente salen; somos honestos sobre manchas viejas o ya fijadas — sin promesas exageradas.",
      },
      {
        q: "¿Cómo está estructurado el precio para anfitriones de {city}?",
        a: "La recogida y entrega es $35 fijos por viaje. El lavado de ropa de cama se cotiza por libra — pagas la misma tarifa ya sea una cama o diez. La mayoría de anfitriones se acomodan a una recogida semanal.",
      },
      {
        q: "¿Pueden manejar múltiples propiedades en un contrato?",
        a: "Sí. Los administradores de propiedades con tres o más unidades típicamente pasan a un contrato único con una ruta semanal consolidada — una factura, un horario, sin administración por unidad.",
      },
    ],
  },
  {
    slug: "hotels-hospitality",
    name: "Hotels & Hospitality",
    nameEs: "Hoteles y Hospitalidad",
    items: "sheets, towels, robes, and guest linens",
    itemsEs: "sábanas, toallas, batas y ropa de cama para huéspedes",
    heroCopy: {
      en: "Fresh sheets, crisp towels, and consistent guest linens for {city} hotels — delivered on an occupancy-based schedule. CleanMax is a family-run Pomona laundry with 25 washers, 34 dryers, and a CleanMax-staff driver who knows your property by name.",
      es: "Sábanas frescas, toallas impecables y ropa de cama consistente para huéspedes en hoteles de {city} — entregadas en un horario basado en ocupación. CleanMax es una lavandería familiar en Pomona con 25 lavadoras, 34 secadoras, y un chofer empleado por CleanMax que conoce tu propiedad por nombre.",
    },
    accepts: {
      en: "Sheets, pillowcases, bath towels, pool towels, robes, duvet covers, and guest linens — the full housekeeping rotation for hotels across {city} and {county} County.",
      es: "Sábanas, fundas de almohada, toallas de baño, toallas de piscina, batas, fundas de edredón y ropa de cama — la rotación completa de ama de llaves para hoteles en {city} y el Condado de {county}.",
    },
    faqs: [
      {
        q: "Can CleanMax support a full-occupancy {city} hotel?",
        a: "Yes. Our Pomona facility runs 25 washers (up to 80 lb capacity) and 34 dryers, which handles a mid-sized hotel's daily housekeeping without queueing. Next-day turnaround is standard under 750 lbs.",
      },
      {
        q: "Do you adjust rotation based on occupancy?",
        a: "That's the default. We build a baseline cadence for your normal occupancy and add runs ahead of holiday weekends or local events. You flag the spikes; we absorb them.",
      },
      {
        q: "How do you handle white linens and bleach discipline?",
        a: "Whites run on a separate cycle from colors with our premium Sudsy detergent program. Pre-wash inspection catches anything bleach would lock in — makeup, wine, coffee — before it sets.",
      },
      {
        q: "What does commercial pickup cost for a hotel?",
        a: "Pickup and delivery is a flat $35 per run. Laundry itself is quoted per pound after we see a week's rotation volume — the per-pound rate scales with frequency and mix.",
      },
      {
        q: "Do you do volume contracts for {county} County hotels?",
        a: "Yes. Most hotels settle into a 4-to-7-day-a-week contract with our team directly — you're not routed through a sales layer. Our CleanMax driver handles every pickup.",
      },
    ],
    faqsEs: [
      {
        q: "¿CleanMax puede soportar un hotel a máxima ocupación en {city}?",
        a: "Sí. Nuestras instalaciones en Pomona operan 25 lavadoras (hasta 80 libras de capacidad) y 34 secadoras, lo cual maneja el ama de llaves diaria de un hotel mediano sin hacer fila. Entrega al siguiente día estándar bajo 750 libras.",
      },
      {
        q: "¿Ajustan la rotación basada en ocupación?",
        a: "Es lo predeterminado. Construimos una cadencia base para tu ocupación normal y agregamos viajes antes de fines de semana festivos o eventos locales. Tú marcas los picos; nosotros los absorbemos.",
      },
      {
        q: "¿Cómo manejan la ropa blanca y la disciplina del cloro?",
        a: "Los blancos corren en un ciclo separado de los colores con nuestro programa de detergente premium Sudsy. La inspección previa al lavado atrapa cualquier cosa que el cloro fijaría — maquillaje, vino, café — antes de que se asiente.",
      },
      {
        q: "¿Cuánto cuesta la recogida comercial para un hotel?",
        a: "La recogida y entrega es una tarifa fija de $35 por viaje. El lavado se cotiza por libra después de que vemos el volumen de una semana — el precio por libra escala con frecuencia y mezcla.",
      },
      {
        q: "¿Hacen contratos por volumen para hoteles del Condado de {county}?",
        a: "Sí. La mayoría de los hoteles se acomodan a un contrato de 4 a 7 días a la semana directamente con nuestro equipo — no te enrutan por una capa de ventas. Nuestro chofer de CleanMax maneja cada recogida.",
      },
    ],
  },
  {
    slug: "salons-spas",
    name: "Salons & Spas",
    nameEs: "Salones y Spas",
    items: "towels, capes, robes, and linens",
    itemsEs: "toallas, capas, batas y ropa de cama",
    heroCopy: {
      en: "Fresh white towels, clean capes, and robes your clients actually want to put on — every day. CleanMax is a family-run Pomona commercial laundry with a bilingual Spanish/English team and daily pickup routes through {city} and {county} County.",
      es: "Toallas blancas frescas, capas limpias y batas que tus clientes realmente quieren ponerse — cada día. CleanMax es una lavandería comercial familiar en Pomona con un equipo bilingüe español/inglés y rutas de recogida diaria por {city} y el Condado de {county}.",
    },
    accepts: {
      en: "Bleached white towels, color-service capes, facial and spa linens, robes, and booth covers for salons and spas across {city}.",
      es: "Toallas blancas con cloro, capas para servicio de color, ropa facial y de spa, batas y cubiertas de estación para salones y spas en {city}.",
    },
    faqs: [
      {
        q: "Can CleanMax do daily pickup for a busy {city} salon?",
        a: "Yes. Most salons in our network run on a 5-or-6-day cadence. Next-day turnaround is standard — towels picked up today come back clean tomorrow as long as the run is under 750 lbs.",
      },
      {
        q: "How do you handle hair color, wax, and oil stains?",
        a: "Every pickup goes through a pre-wash inspection before our premium Sudsy detergent cycle. Fresh color and oil usually come out; we're upfront that set-in dye that's already been through a rinse once doesn't always recover.",
      },
      {
        q: "Can you keep whites genuinely white?",
        a: "Whites run on a separate bleach-safe cycle. The pre-wash check is where we catch makeup or product residue that would otherwise lock in during the wash — that's what keeps the towels bright.",
      },
      {
        q: "What's the cost for a 2-to-10-chair salon in {city}?",
        a: "Pickup is $35 flat per run. Laundry is quoted per pound — smaller salons usually land on a two or three times a week pickup with a predictable weekly invoice.",
      },
      {
        q: "Do you speak Spanish? My team does.",
        a: "Our on-site attendant is bilingual Spanish/English and handles every open hour at our Pomona facility — so the handoff goes smoothly whichever language your team prefers.",
      },
    ],
    faqsEs: [
      {
        q: "¿CleanMax puede hacer recogida diaria para un salón ocupado en {city}?",
        a: "Sí. La mayoría de los salones en nuestra red operan en una cadencia de 5 o 6 días. La entrega al siguiente día es estándar — toallas recogidas hoy regresan limpias mañana siempre que el viaje sea bajo 750 libras.",
      },
      {
        q: "¿Cómo manejan manchas de tinte, cera y aceite?",
        a: "Cada recogida pasa por una inspección previa al lavado antes de nuestro ciclo de detergente premium Sudsy. Tinte y aceite frescos normalmente salen; somos claros que un tinte ya fijado que pasó por un enjuague no siempre se recupera.",
      },
      {
        q: "¿Pueden mantener los blancos genuinamente blancos?",
        a: "Los blancos corren en un ciclo separado con cloro. La revisión previa al lavado es donde atrapamos maquillaje o residuo de producto que de otra manera se fijaría durante el lavado — eso es lo que mantiene las toallas brillantes.",
      },
      {
        q: "¿Cuánto cuesta para un salón de 2 a 10 sillas en {city}?",
        a: "La recogida es $35 fijos por viaje. El lavado se cotiza por libra — los salones más pequeños normalmente se acomodan a una recogida dos o tres veces por semana con una factura semanal predecible.",
      },
      {
        q: "¿Hablan español? Mi equipo sí.",
        a: "Nuestro encargado en sitio es bilingüe español/inglés y atiende cada hora de apertura en nuestras instalaciones de Pomona — así el intercambio va suavemente en cualquier idioma que tu equipo prefiera.",
      },
    ],
  },
  {
    slug: "medical-offices",
    name: "Medical & Dental Offices",
    nameEs: "Oficinas Médicas y Dentales",
    items: "scrubs, lab coats, and clinical linens",
    itemsEs: "uniformes médicos, batas de laboratorio y ropa clínica",
    heroCopy: {
      en: "Clean scrubs, lab coats, and clinical linens on a schedule your clinic can count on. CleanMax is a family-run Pomona laundry with a CleanMax-staff driver — not a contractor — handling pickup for medical and dental offices across {city} and {county} County.",
      es: "Uniformes médicos, batas de laboratorio y ropa clínica limpios en un horario con el que tu clínica puede contar. CleanMax es una lavandería familiar en Pomona con un chofer empleado por CleanMax — no un contratista — manejando la recogida para oficinas médicas y dentales en {city} y el Condado de {county}.",
    },
    accepts: {
      en: "Scrubs, lab coats, exam drapes, towels, and clinical linens for medical and dental offices throughout {city}. We do not handle biohazards or regulated medical waste.",
      es: "Uniformes médicos, batas de laboratorio, sábanas de examen, toallas y ropa clínica para oficinas médicas y dentales en todo {city}. No manejamos biopeligros ni residuos médicos regulados.",
    },
    faqs: [
      {
        q: "Does CleanMax serve medical offices in {city}?",
        a: "Yes — we run scheduled pickup and delivery for medical and dental offices across {county} County. Next-day turnaround is standard on runs under 750 lbs.",
      },
      {
        q: "Do you handle biohazards or regulated waste?",
        a: "No. We are not a biohazard processor — we handle scrubs, lab coats, and non-contaminated clinical linens only. Blood-contact or regulated waste needs a specialized handler, and we'll say so plainly.",
      },
      {
        q: "Can you keep whites clean on lab coats and scrubs?",
        a: "Whites run on a separate bleach-safe cycle after our pre-wash inspection. Ink, iodine, and most clinical marks come out when caught fresh — we're honest about anything set-in.",
      },
      {
        q: "What does pickup cost for a {city} clinic?",
        a: "A flat $35 per pickup and delivery run. Laundry is quoted per pound based on your weekly scrubs and linen volume — the per-pound rate holds steady as long as the cadence is predictable.",
      },
      {
        q: "Can you schedule around clinic hours?",
        a: "Yes. Most offices book early-morning or after-hours pickups so foot traffic isn't disrupted. Our CleanMax driver routes through {city} on a fixed weekly schedule your front desk can plan around.",
      },
    ],
    faqsEs: [
      {
        q: "¿CleanMax atiende oficinas médicas en {city}?",
        a: "Sí — operamos recogida y entrega programada para oficinas médicas y dentales en el Condado de {county}. La entrega al siguiente día es estándar en viajes bajo 750 libras.",
      },
      {
        q: "¿Manejan biopeligros o residuos regulados?",
        a: "No. No somos un procesador de biopeligros — manejamos uniformes médicos, batas de laboratorio y ropa clínica no contaminada únicamente. El contacto con sangre o residuos regulados necesita un manejador especializado, y lo decimos claramente.",
      },
      {
        q: "¿Pueden mantener limpios los blancos en batas de laboratorio y uniformes?",
        a: "Los blancos corren en un ciclo separado con cloro después de nuestra inspección previa al lavado. Tinta, yodo y la mayoría de marcas clínicas salen cuando se atrapan frescas — somos honestos sobre cualquier cosa ya fijada.",
      },
      {
        q: "¿Cuánto cuesta la recogida para una clínica en {city}?",
        a: "Una tarifa fija de $35 por viaje de recogida y entrega. El lavado se cotiza por libra basado en tu volumen semanal de uniformes y ropa — el precio por libra se mantiene estable mientras la cadencia sea predecible.",
      },
      {
        q: "¿Pueden programar alrededor de las horas de la clínica?",
        a: "Sí. La mayoría de oficinas reservan recogidas temprano en la mañana o fuera de horario para que el tráfico no se interrumpa. Nuestro chofer de CleanMax recorre {city} en un horario semanal fijo que tu recepción puede planear.",
      },
    ],
  },
  {
    slug: "schools-daycares",
    name: "Schools & Daycares",
    nameEs: "Escuelas y Guarderías",
    items: "uniforms, napkins, bibs, and activity towels",
    itemsEs: "uniformes, servilletas, baberos y toallas de actividad",
    heroCopy: {
      en: "Clean uniforms, bibs, napkins, and activity towels for {city} schools and daycares — on a schedule that fits between pickups and drop-offs. Family-run from Pomona with a bilingual team that makes the handoff easy.",
      es: "Uniformes limpios, baberos, servilletas y toallas de actividad para escuelas y guarderías en {city} — en un horario que encaja entre recogidas y entregas. Familiar desde Pomona con un equipo bilingüe que facilita el intercambio.",
    },
    accepts: {
      en: "Uniforms, napkins, bibs, activity towels, nap mats, and smocks for schools, daycares, and after-school programs across {city} and {county} County.",
      es: "Uniformes, servilletas, baberos, toallas de actividad, tapetes de siesta y batas para escuelas, guarderías y programas después de clases en {city} y el Condado de {county}.",
    },
    faqs: [
      {
        q: "Can CleanMax launder daycare linens in {city}?",
        a: "Yes. We pick up uniforms, bibs, nap mats, and activity towels on a weekly or twice-weekly cadence — whichever matches your enrollment. Next-day turnaround standard under 750 lbs.",
      },
      {
        q: "What about the art-project and juice stains on kid clothes?",
        a: "Every load runs through a pre-wash inspection before our premium Sudsy detergent cycle. Fresh stains usually come out; we don't promise to recover clothing that's been washed once already with a stain locked in.",
      },
      {
        q: "Can you work around school calendars?",
        a: "We adjust the cadence around breaks, holidays, and the summer session — no wasted pickups when the building is empty. Most schools pause entirely mid-June and restart late August.",
      },
      {
        q: "What's the pricing for a {city} preschool?",
        a: "Pickup is a flat $35 per run. Laundry is quoted per pound based on enrollment size and how often you need rotation — smaller daycares typically land on a weekly pickup.",
      },
      {
        q: "Is the attendant bilingual?",
        a: "Yes. Our Pomona site has a bilingual Spanish/English attendant every open hour — and that carries through to customer service for your staff and parents, too.",
      },
    ],
    faqsEs: [
      {
        q: "¿CleanMax puede lavar ropa de guardería en {city}?",
        a: "Sí. Recogemos uniformes, baberos, tapetes de siesta y toallas de actividad en cadencia semanal o dos veces por semana — la que coincida con tu matrícula. Entrega al siguiente día estándar bajo 750 libras.",
      },
      {
        q: "¿Qué tal las manchas de proyectos de arte y jugo en ropa de niños?",
        a: "Cada carga pasa por una inspección previa al lavado antes de nuestro ciclo de detergente premium Sudsy. Manchas frescas normalmente salen; no prometemos recuperar ropa que ya fue lavada una vez con la mancha fijada.",
      },
      {
        q: "¿Pueden trabajar alrededor de los calendarios escolares?",
        a: "Ajustamos la cadencia alrededor de vacaciones, días festivos y el periodo de verano — sin recogidas desperdiciadas cuando el edificio está vacío. La mayoría de las escuelas se detienen por completo a mediados de junio y reinician a finales de agosto.",
      },
      {
        q: "¿Cuál es el precio para un preescolar en {city}?",
        a: "La recogida es una tarifa fija de $35 por viaje. El lavado se cotiza por libra basado en el tamaño de la matrícula y qué tan seguido necesitas rotación — las guarderías más pequeñas típicamente se acomodan a una recogida semanal.",
      },
      {
        q: "¿El encargado es bilingüe?",
        a: "Sí. Nuestro sitio en Pomona tiene un encargado bilingüe español/inglés cada hora de apertura — y eso se extiende al servicio al cliente para tu personal y padres de familia también.",
      },
    ],
  },
  {
    slug: "auto-shops",
    name: "Auto Shops & Dealerships",
    nameEs: "Talleres y Agencias Automotrices",
    items: "shop rags, uniforms, and floor mats",
    itemsEs: "trapos de taller, uniformes y tapetes",
    heroCopy: {
      en: "Shop rags, grease-proof uniforms, and service floor mats — washed through {city}'s family-run commercial laundry. CleanMax's Pomona facility handles grease the way a regular laundromat can't, with a CleanMax-staff driver picking up on your schedule.",
      es: "Trapos de taller, uniformes a prueba de grasa y tapetes de área de servicio — lavados en la lavandería comercial familiar de {city}. Las instalaciones de CleanMax en Pomona manejan la grasa como una lavandería regular no puede, con un chofer empleado por CleanMax recogiendo en tu horario.",
    },
    accepts: {
      en: "Shop rags, mechanic uniforms, coveralls, service-bay floor mats, and fender covers for auto shops and dealerships across {city} and {county} County. Standard grease accepted; we do not handle biohazards.",
      es: "Trapos de taller, uniformes de mecánico, overoles, tapetes de área de servicio y cubiertas de defensa para talleres y agencias automotrices en {city} y el Condado de {county}. Grasa estándar aceptada; no manejamos biopeligros.",
    },
    faqs: [
      {
        q: "Can you actually get grease out of a shop rag?",
        a: "Yes — that's the default load for our auto-shop accounts. Grease and oil on rags and uniforms isn't classified as biohazard, so it runs through a standard commercial cycle with pre-wash inspection.",
      },
      {
        q: "What about mechanic uniforms and coveralls?",
        a: "We handle uniform turnover on a weekly cadence — dirty uniforms picked up, clean uniforms returned next-day under 750 lbs. Our Pomona facility's commercial-grade Wascomat washers (up to 80 lb capacity) absorb the grease load.",
      },
      {
        q: "Do you clean service-bay floor mats?",
        a: "Yes. Floor mats go in on a separate cycle from uniforms — we don't cross-contaminate grease onto the lighter linens. Ask about rotation frequency when we build your quote.",
      },
      {
        q: "What does a {city} shop pay for pickup?",
        a: "Pickup and delivery is a flat $35 per run. Uniform and rag laundry is quoted per pound based on your weekly volume — the per-pound rate stays fixed as long as the cadence holds steady.",
      },
      {
        q: "Can you handle a multi-bay dealership?",
        a: "Yes. Larger dealerships move to a twice-a-week cadence; we'll split the pickup across uniforms and shop rags so nothing delays your service floor. Our driver is CleanMax staff — same face every week.",
      },
    ],
    faqsEs: [
      {
        q: "¿De verdad pueden sacar la grasa de un trapo de taller?",
        a: "Sí — esa es la carga predeterminada para nuestras cuentas de talleres. Grasa y aceite en trapos y uniformes no se clasifican como biopeligro, así que pasan por un ciclo comercial estándar con inspección previa al lavado.",
      },
      {
        q: "¿Y los uniformes de mecánico y overoles?",
        a: "Manejamos la rotación de uniformes en cadencia semanal — uniformes sucios recogidos, uniformes limpios devueltos al siguiente día bajo 750 libras. Las lavadoras Wascomat comerciales de nuestras instalaciones en Pomona (hasta 80 libras de capacidad) absorben la carga de grasa.",
      },
      {
        q: "¿Limpian tapetes de área de servicio?",
        a: "Sí. Los tapetes entran en un ciclo separado de los uniformes — no cruzamos contaminación de grasa a las telas más ligeras. Pregúntanos sobre la frecuencia de rotación cuando construyamos tu cotización.",
      },
      {
        q: "¿Cuánto paga un taller en {city} por recogida?",
        a: "La recogida y entrega es una tarifa fija de $35 por viaje. El lavado de uniformes y trapos se cotiza por libra basado en tu volumen semanal — el precio por libra se mantiene fijo mientras la cadencia se mantenga estable.",
      },
      {
        q: "¿Pueden manejar una agencia con múltiples bahías?",
        a: "Sí. Las agencias más grandes pasan a una cadencia de dos veces por semana; dividiremos la recogida entre uniformes y trapos de taller para que nada retrase tu área de servicio. Nuestro chofer es empleado por CleanMax — la misma cara cada semana.",
      },
    ],
  },
];
