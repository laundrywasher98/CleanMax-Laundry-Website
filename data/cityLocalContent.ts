import type { Language } from "@/contexts/LanguageContext";

export type CityLocalContent = {
  slug: string;
  neighborhoods: { en: string[]; es: string[] };
  landmarks: { en: string[]; es: string[] };
  crossStreets: string;
  driveFromPomona: { en: string; es: string };
  localHook: { en: string; es: string };
  intro: { en: string; es: string };
};

export const cityLocalContent: CityLocalContent[] = [
  {
    slug: "pomona",
    neighborhoods: {
      en: ["Lincoln Park", "Westmont", "Phillips Ranch", "Ganesha Hills", "Downtown Pomona"],
      es: ["Lincoln Park", "Westmont", "Phillips Ranch", "Ganesha Hills", "Centro de Pomona"],
    },
    landmarks: {
      en: ["Cal Poly Pomona", "Fairplex", "Western University of Health Sciences", "Pomona Valley Hospital", "Downtown Pomona Arts Colony"],
      es: ["Cal Poly Pomona", "Fairplex", "Western University of Health Sciences", "Hospital Pomona Valley", "Colonia de Artes del Centro de Pomona"],
    },
    crossStreets: "Holt Ave & Reservoir St, right off the 10 Freeway",
    driveFromPomona: {
      en: "We're in Pomona — walk in or drop off any time.",
      es: "Estamos en Pomona — visítanos cuando quieras.",
    },
    localHook: {
      en: "CleanMax is in the heart of Pomona on Holt Ave, steps from the 10 Freeway and a short drive from Cal Poly Pomona, Western University, and Fairplex. Students, families, and busy professionals across Lincoln Park, Westmont, Phillips Ranch, and Ganesha Hills drop their laundry with us every week.",
      es: "CleanMax está en el corazón de Pomona en Holt Ave, a pasos de la autopista 10 y a poca distancia de Cal Poly Pomona, Western University y Fairplex. Estudiantes, familias y profesionales ocupados de Lincoln Park, Westmont, Phillips Ranch y Ganesha Hills traen su ropa con nosotros cada semana.",
    },
    intro: {
      en: "Pomona is where CleanMax Laundry lives and breathes. Our flagship location at 1009 E Holt Ave serves the full Pomona Valley — from Cal Poly students with stacks of dorm laundry to restaurants in the Arts Colony that need uniforms turned around overnight.",
      es: "Pomona es donde CleanMax Laundry vive y respira. Nuestra ubicación principal en 1009 E Holt Ave atiende a todo el Valle de Pomona — desde estudiantes de Cal Poly con montones de ropa hasta restaurantes en la Colonia de Artes que necesitan uniformes listos de un día para otro.",
    },
  },
  {
    slug: "ontario",
    neighborhoods: {
      en: ["South Ontario", "North Ontario", "Ontario Ranch", "Downtown Ontario", "Creekside"],
      es: ["South Ontario", "North Ontario", "Ontario Ranch", "Centro de Ontario", "Creekside"],
    },
    landmarks: {
      en: ["Ontario International Airport", "Ontario Mills", "Toyota Arena", "Ontario Convention Center", "Citizens Business Bank Arena"],
      es: ["Aeropuerto Internacional de Ontario", "Ontario Mills", "Toyota Arena", "Centro de Convenciones de Ontario", "Citizens Business Bank Arena"],
    },
    crossStreets: "a 10-minute drive east on the 10 Freeway from Ontario",
    driveFromPomona: {
      en: "About 10 minutes east on the 10 Freeway.",
      es: "Aproximadamente 10 minutos al este por la autopista 10.",
    },
    localHook: {
      en: "Ontario residents and businesses — from hotels near the airport and convention center to families in Ontario Ranch — use CleanMax because we're a straight shot west on the 10 Freeway. We serve flight crews on layover, Ontario Mills retail workers, and households all over the city.",
      es: "Residentes y negocios de Ontario — desde hoteles cerca del aeropuerto y centro de convenciones hasta familias en Ontario Ranch — eligen CleanMax porque estamos directamente al oeste por la autopista 10. Servimos a tripulaciones en escala, trabajadores minoristas de Ontario Mills y hogares de toda la ciudad.",
    },
    intro: {
      en: "Ontario is one of our largest customer bases outside Pomona. With Ontario International Airport, Toyota Arena, and Ontario Mills all driving constant demand for fast, reliable laundry service, we handle everything from family wash-and-fold pickups to hotel linen contracts across the city.",
      es: "Ontario es una de nuestras bases de clientes más grandes fuera de Pomona. Con el Aeropuerto Internacional de Ontario, Toyota Arena y Ontario Mills generando demanda constante de servicio de lavandería rápido y confiable, manejamos desde recolecciones de lavado y doblado familiar hasta contratos de lencería hotelera en toda la ciudad.",
    },
  },
  {
    slug: "rancho-cucamonga",
    neighborhoods: {
      en: ["Victoria Gardens area", "Alta Loma", "Etiwanda", "Terra Vista", "Rancho Etiwanda"],
      es: ["Área de Victoria Gardens", "Alta Loma", "Etiwanda", "Terra Vista", "Rancho Etiwanda"],
    },
    landmarks: {
      en: ["Victoria Gardens", "Cucamonga-Guasti Regional Park", "Quakes Stadium", "Chaffey College", "Red Hill Country Club"],
      es: ["Victoria Gardens", "Parque Regional Cucamonga-Guasti", "Quakes Stadium", "Chaffey College", "Red Hill Country Club"],
    },
    crossStreets: "roughly 15 minutes east via the 10 or Foothill Blvd",
    driveFromPomona: {
      en: "About 15 minutes east via the 10 Freeway or Foothill Blvd.",
      es: "Unos 15 minutos al este por la autopista 10 o Foothill Blvd.",
    },
    localHook: {
      en: "Rancho Cucamonga families in Alta Loma, Etiwanda, and Terra Vista use CleanMax for our pickup-and-delivery wash-and-fold. Restaurants at Victoria Gardens and gyms along Foothill Blvd rely on us for uniform and towel service with predictable turnaround.",
      es: "Las familias de Rancho Cucamonga en Alta Loma, Etiwanda y Terra Vista usan CleanMax por nuestro servicio de lavado y doblado con recolección y entrega. Restaurantes en Victoria Gardens y gimnasios a lo largo de Foothill Blvd confían en nosotros para servicio de uniformes y toallas con plazos predecibles.",
    },
    intro: {
      en: "Rancho Cucamonga is one of the fastest-growing cities we serve. With Victoria Gardens anchoring the retail and restaurant scene, Chaffey College bringing steady student laundry demand, and family neighborhoods across Alta Loma and Etiwanda, CleanMax has built a loyal customer base through our commercial pickup and wash-and-fold delivery.",
      es: "Rancho Cucamonga es una de las ciudades de más rápido crecimiento que atendemos. Con Victoria Gardens como eje comercial y gastronómico, Chaffey College generando demanda estudiantil constante y vecindarios familiares en Alta Loma y Etiwanda, CleanMax ha construido una base de clientes leales a través de nuestra recolección comercial y entrega de lavado y doblado.",
    },
  },
  {
    slug: "chino",
    neighborhoods: {
      en: ["Central Chino", "College Park", "Preserve at Chino", "Chino Downtown"],
      es: ["Chino Central", "College Park", "Preserve at Chino", "Centro de Chino"],
    },
    landmarks: {
      en: ["Planes of Fame Air Museum", "Chino Fairgrounds", "Prado Regional Park", "Chino Airport", "The Shoppes at Chino Hills"],
      es: ["Museo Planes of Fame", "Chino Fairgrounds", "Parque Regional Prado", "Aeropuerto de Chino", "The Shoppes at Chino Hills"],
    },
    crossStreets: "around 15 minutes south of Pomona",
    driveFromPomona: {
      en: "About 15 minutes south via Central Ave.",
      es: "Unos 15 minutos al sur por Central Ave.",
    },
    localHook: {
      en: "Chino's mix of agricultural roots, industrial parks, and growing family neighborhoods means our customer mix ranges from machine shops needing grease-heavy uniforms laundered to families in The Preserve dropping off weekly loads. We also serve horse ranches and equestrian businesses near Prado Park.",
      es: "La mezcla de raíces agrícolas, parques industriales y vecindarios familiares en crecimiento de Chino significa que nuestros clientes van desde talleres mecánicos que necesitan uniformes con grasa lavados hasta familias en The Preserve que dejan cargas semanales. También servimos a ranchos equinos y negocios ecuestres cerca de Prado Park.",
    },
    intro: {
      en: "Chino is a unique market for us — half industrial, half residential, with a strong Spanish-speaking community. CleanMax handles commercial uniform laundry for local shops and machine businesses along Central Ave, and our bilingual Pomona location is a short drive for Chino families who drop off walk-in wash-and-fold.",
      es: "Chino es un mercado único para nosotros — mitad industrial, mitad residencial, con una fuerte comunidad hispanohablante. CleanMax maneja lavado comercial de uniformes para talleres locales y negocios mecánicos a lo largo de Central Ave, y nuestro local bilingüe en Pomona queda a corta distancia para las familias de Chino que dejan su lavado y doblado en persona.",
    },
  },
  {
    slug: "chino-hills",
    neighborhoods: {
      en: ["Los Serranos", "Rolling Ridge", "Carbon Canyon", "Rincon", "Vila Borba"],
      es: ["Los Serranos", "Rolling Ridge", "Carbon Canyon", "Rincon", "Vila Borba"],
    },
    landmarks: {
      en: ["The Shoppes at Chino Hills", "Chino Hills State Park", "Vellano Country Club", "Los Serranos Country Club", "Chino Hills Community Center"],
      es: ["The Shoppes at Chino Hills", "Parque Estatal Chino Hills", "Vellano Country Club", "Los Serranos Country Club", "Centro Comunitario de Chino Hills"],
    },
    crossStreets: "about 20 minutes south via the 71 Freeway",
    driveFromPomona: {
      en: "About 20 minutes south via the 71 Freeway.",
      es: "Unos 20 minutos al sur por la autopista 71.",
    },
    localHook: {
      en: "Chino Hills is an upscale, busy market. Our wash-and-fold pickup service is especially popular with dual-income families in Vellano, Los Serranos, and Rolling Ridge who'd rather spend weekends at Chino Hills State Park than on laundry. Restaurants at The Shoppes rely on us for uniform and table linen service.",
      es: "Chino Hills es un mercado ocupado y de alto nivel. Nuestro servicio de lavado y doblado con recolección es especialmente popular entre familias de doble ingreso en Vellano, Los Serranos y Rolling Ridge que prefieren pasar los fines de semana en el Parque Estatal Chino Hills en vez de lavando ropa. Restaurantes en The Shoppes confían en nosotros para servicio de uniformes y manteles.",
    },
    intro: {
      en: "Chino Hills customers value time more than almost anywhere else we serve. That's why our pickup-and-delivery wash-and-fold is such a strong fit — drop a bag on your porch before heading to work at The Shoppes or commuting to LA, come home to folded laundry the next day.",
      es: "Los clientes de Chino Hills valoran el tiempo más que en casi cualquier otro lugar que atendemos. Por eso nuestro lavado y doblado con recolección y entrega es tan popular — deja una bolsa en tu porche antes de ir al trabajo en The Shoppes o al viajar a LA, y regresa a casa con la ropa doblada al día siguiente.",
    },
  },
  {
    slug: "upland",
    neighborhoods: {
      en: ["Historic Upland", "Upland Hills", "San Antonio Heights", "North Upland", "Colonies Crossroads"],
      es: ["Upland Histórico", "Upland Hills", "San Antonio Heights", "Upland Norte", "Colonies Crossroads"],
    },
    landmarks: {
      en: ["Historic Downtown Upland", "Mountain Green Shopping Center", "Colonies Crossroads", "Cable Airport", "Upland Memorial Park"],
      es: ["Centro Histórico de Upland", "Mountain Green Shopping Center", "Colonies Crossroads", "Aeropuerto Cable", "Parque Conmemorativo de Upland"],
    },
    crossStreets: "roughly 12 minutes northeast via Foothill Blvd",
    driveFromPomona: {
      en: "About 12 minutes northeast via Foothill Blvd.",
      es: "Unos 12 minutos al noreste por Foothill Blvd.",
    },
    localHook: {
      en: "Upland is the 'City of Gracious Living' at the foot of the San Gabriel Mountains. Historic downtown on 2nd Ave has great restaurants and salons that use our commercial service, while families throughout San Antonio Heights and Upland Hills lean on our wash-and-fold pickup.",
      es: "Upland es la 'Ciudad del Vivir Elegante' al pie de las montañas San Gabriel. El centro histórico en 2nd Ave tiene excelentes restaurantes y salones que usan nuestro servicio comercial, mientras que familias en San Antonio Heights y Upland Hills confían en nuestro servicio de lavado y doblado con recolección.",
    },
    intro: {
      en: "Upland's historic downtown has become a hub for small restaurants and boutiques that need commercial laundry without committing to a large-contract provider. CleanMax's flexible commercial pickup — weekly, biweekly, or on-call — is a fit for exactly that kind of independent business.",
      es: "El centro histórico de Upland se ha convertido en un eje de pequeños restaurantes y boutiques que necesitan lavandería comercial sin comprometerse con un proveedor de contrato grande. La recolección comercial flexible de CleanMax — semanal, quincenal o a demanda — encaja perfectamente con ese tipo de negocio independiente.",
    },
  },
  {
    slug: "claremont",
    neighborhoods: {
      en: ["Claremont Village", "North Claremont", "College Heights", "Padua Hills", "Claraboya"],
      es: ["Claremont Village", "Claremont Norte", "College Heights", "Padua Hills", "Claraboya"],
    },
    landmarks: {
      en: ["The Claremont Colleges (Pomona, Harvey Mudd, Scripps, Claremont McKenna, Pitzer)", "Claremont Village", "Rancho Santa Ana Botanic Garden", "Claremont Packing House", "Claremont Hills Wilderness Park"],
      es: ["Los Claremont Colleges (Pomona, Harvey Mudd, Scripps, Claremont McKenna, Pitzer)", "Claremont Village", "Jardín Botánico Rancho Santa Ana", "Claremont Packing House", "Parque Silvestre Claremont Hills"],
    },
    crossStreets: "about 10 minutes north via Indian Hill Blvd",
    driveFromPomona: {
      en: "About 10 minutes north via Indian Hill Blvd.",
      es: "Unos 10 minutos al norte por Indian Hill Blvd.",
    },
    localHook: {
      en: "Claremont is a college town — the Claremont Colleges consortium brings thousands of students who need affordable wash-and-fold every semester. CleanMax is the closest serious laundry operator to campus, and our student-friendly flat-rate pricing is a big reason why.",
      es: "Claremont es un pueblo universitario — el consorcio de Claremont Colleges trae miles de estudiantes que necesitan lavado y doblado económico cada semestre. CleanMax es el operador de lavandería serio más cercano al campus, y nuestro precio fijo amigable para estudiantes es una gran razón.",
    },
    intro: {
      en: "Claremont runs on two rhythms: the Claremont Colleges student cycle and the Village's independent restaurants, cafés, and boutiques. Both lean on CleanMax — students for budget wash-and-fold, Village businesses for uniform and linen service without a long-term contract.",
      es: "Claremont funciona en dos ritmos: el ciclo estudiantil de Claremont Colleges y los restaurantes, cafés y boutiques independientes del Village. Ambos confían en CleanMax — estudiantes para lavado y doblado económico, y negocios del Village para servicio de uniformes y lencería sin contrato a largo plazo.",
    },
  },
  {
    slug: "diamond-bar",
    neighborhoods: {
      en: ["The Country Estates", "Diamond Ridge", "Pathfinder", "Walnut Valley"],
      es: ["The Country Estates", "Diamond Ridge", "Pathfinder", "Walnut Valley"],
    },
    landmarks: {
      en: ["Diamond Bar Center", "Diamond Bar Golf Course", "Pantera Park", "Summitridge Park", "Sycamore Canyon Park"],
      es: ["Diamond Bar Center", "Campo de Golf Diamond Bar", "Pantera Park", "Summitridge Park", "Sycamore Canyon Park"],
    },
    crossStreets: "about 15 minutes west via the 60 Freeway",
    driveFromPomona: {
      en: "About 15 minutes west via the 60 Freeway.",
      es: "Unos 15 minutos al oeste por la autopista 60.",
    },
    localHook: {
      en: "Diamond Bar's busy professional families — often with long LA commutes — make up a big share of our pickup-and-delivery wash-and-fold customers. The Country Estates and Diamond Ridge neighborhoods drive most of that demand.",
      es: "Las familias profesionales ocupadas de Diamond Bar — a menudo con largos viajes a LA — conforman una gran parte de nuestros clientes de lavado y doblado con recolección y entrega. Los vecindarios de The Country Estates y Diamond Ridge generan la mayor parte de esa demanda.",
    },
    intro: {
      en: "Diamond Bar sits at the crossroads of the 60 and 57 freeways, making it easy for CleanMax to run pickup-and-delivery routes through The Country Estates, Diamond Ridge, and Pathfinder on the same day we serve Walnut and Pomona.",
      es: "Diamond Bar se encuentra en el cruce de las autopistas 60 y 57, lo que facilita que CleanMax opere rutas de recolección y entrega por The Country Estates, Diamond Ridge y Pathfinder el mismo día que atendemos Walnut y Pomona.",
    },
  },
  {
    slug: "west-covina",
    neighborhoods: {
      en: ["West Covina Central", "South Hills", "Woodside Village", "The Hills", "Cameron"],
      es: ["West Covina Central", "South Hills", "Woodside Village", "The Hills", "Cameron"],
    },
    landmarks: {
      en: ["Westfield West Covina", "Plaza West Covina", "BigLots Plaza", "Galster Wilderness Park", "West Covina Sportsplex"],
      es: ["Westfield West Covina", "Plaza West Covina", "BigLots Plaza", "Galster Wilderness Park", "West Covina Sportsplex"],
    },
    crossStreets: "about 20 minutes west via the 10 Freeway",
    driveFromPomona: {
      en: "About 20 minutes west via the 10 Freeway.",
      es: "Unos 20 minutos al oeste por la autopista 10.",
    },
    localHook: {
      en: "West Covina is a dense residential market with a large Spanish-speaking community. Our flat-rate wash-and-fold — $1.50/lb, no surprise fees — has been a popular choice for families in South Hills, Woodside Village, and the central corridor around Westfield West Covina.",
      es: "West Covina es un mercado residencial denso con una gran comunidad hispanohablante. Nuestro lavado y doblado a tarifa fija — $1.50/lb, sin tarifas sorpresa — ha sido una opción popular para familias en South Hills, Woodside Village y el corredor central alrededor de Westfield West Covina.",
    },
    intro: {
      en: "West Covina's shopping centers and dense residential neighborhoods generate steady demand for both drop-off wash-and-fold and commercial service for the many small restaurants anchored around Westfield. CleanMax handles both with a single flat rate.",
      es: "Los centros comerciales y vecindarios residenciales densos de West Covina generan demanda constante tanto para lavado y doblado de entrega como para servicio comercial para los muchos restaurantes pequeños alrededor de Westfield. CleanMax maneja ambos con una sola tarifa fija.",
    },
  },
  {
    slug: "covina",
    neighborhoods: {
      en: ["Covina Hills", "Charter Oak", "Downtown Covina", "Lark Ellen", "South Covina"],
      es: ["Covina Hills", "Charter Oak", "Centro de Covina", "Lark Ellen", "Covina Sur"],
    },
    landmarks: {
      en: ["Downtown Covina", "Covina Park", "Citrus College", "Covina Bowl", "Arrow Highway corridor"],
      es: ["Centro de Covina", "Covina Park", "Citrus College", "Covina Bowl", "Corredor Arrow Highway"],
    },
    crossStreets: "roughly 20 minutes west via the 10 Freeway",
    driveFromPomona: {
      en: "About 20 minutes west via the 10 Freeway.",
      es: "Unos 20 minutos al oeste por la autopista 10.",
    },
    localHook: {
      en: "Covina's walkable downtown — with its independent restaurants, breweries, and coffee shops — is a natural fit for our flexible commercial pickup. Citrus College just up the road sends a steady stream of student laundry to CleanMax every term.",
      es: "El centro peatonal de Covina — con sus restaurantes independientes, cervecerías y cafeterías — encaja naturalmente con nuestra recolección comercial flexible. Citrus College, justo al lado, envía un flujo constante de lavado estudiantil a CleanMax cada semestre.",
    },
    intro: {
      en: "Covina blends a walkable historic downtown with dense surrounding neighborhoods. CleanMax serves the small restaurants along Citrus and Badillo that need affordable linen and uniform service, plus families throughout Charter Oak and Covina Hills.",
      es: "Covina combina un centro histórico peatonal con vecindarios densos a su alrededor. CleanMax atiende a los pequeños restaurantes a lo largo de Citrus y Badillo que necesitan servicio asequible de lencería y uniformes, además de familias en Charter Oak y Covina Hills.",
    },
  },
  {
    slug: "glendora",
    neighborhoods: {
      en: ["North Glendora", "South Glendora", "Glendora Village", "Gordon Highlands", "Hillcrest"],
      es: ["Glendora Norte", "Glendora Sur", "Glendora Village", "Gordon Highlands", "Hillcrest"],
    },
    landmarks: {
      en: ["Glendora Village", "Citrus College", "Azusa Pacific University (nearby)", "Glendora Country Club", "South Hills Park"],
      es: ["Glendora Village", "Citrus College", "Azusa Pacific University (cercana)", "Glendora Country Club", "South Hills Park"],
    },
    crossStreets: "about 20 minutes northwest via Foothill Blvd",
    driveFromPomona: {
      en: "About 20 minutes northwest via Foothill Blvd or the 210 Freeway.",
      es: "Unos 20 minutos al noroeste por Foothill Blvd o la autopista 210.",
    },
    localHook: {
      en: "Glendora Village is one of the most charming walkable downtowns in the San Gabriel Valley. The independent cafés and restaurants there lean on CleanMax for uniform and linen service, and families throughout Glendora's foothill neighborhoods use our wash-and-fold pickup for convenience.",
      es: "Glendora Village es uno de los centros peatonales más encantadores del Valle de San Gabriel. Los cafés y restaurantes independientes allí confían en CleanMax para servicio de uniformes y lencería, y las familias en los vecindarios del pie de la montaña de Glendora usan nuestro servicio de lavado y doblado por conveniencia.",
    },
    intro: {
      en: "Glendora — the 'Pride of the Foothills' — is a market where quality matters more than the cheapest option. That fits CleanMax perfectly: modern Wascomat machines, careful handling, and consistent turnaround for both walk-in drop-off customers and commercial accounts.",
      es: "Glendora — el 'Orgullo de las Estribaciones' — es un mercado donde la calidad importa más que la opción más barata. Eso encaja perfectamente con CleanMax: máquinas Wascomat modernas, manejo cuidadoso y plazos consistentes tanto para clientes que dejan su ropa en el local como para cuentas comerciales.",
    },
  },
  {
    slug: "la-verne",
    neighborhoods: {
      en: ["Old La Verne", "Marshall Canyon", "North La Verne", "Live Oak", "Wheeler Area"],
      es: ["Old La Verne", "Marshall Canyon", "La Verne Norte", "Live Oak", "Área Wheeler"],
    },
    landmarks: {
      en: ["University of La Verne", "Old Town La Verne", "Bonita High School", "Marshall Canyon Regional Park", "Brackett Field Airport"],
      es: ["University of La Verne", "Old Town La Verne", "Bonita High School", "Parque Regional Marshall Canyon", "Aeropuerto Brackett Field"],
    },
    crossStreets: "about 10 minutes north via White Ave or the 210",
    driveFromPomona: {
      en: "About 10 minutes north via White Ave or the 210 Freeway.",
      es: "Unos 10 minutos al norte por White Ave o la autopista 210.",
    },
    localHook: {
      en: "The University of La Verne brings a steady base of student laundry customers, and Old Town La Verne's restaurants and shops round out our commercial clients. CleanMax is close enough that La Verne customers often drop off on their way down to Pomona.",
      es: "La Universidad de La Verne atrae una base constante de clientes estudiantiles de lavandería, y los restaurantes y tiendas de Old Town La Verne completan nuestra cartera de clientes comerciales. CleanMax está lo suficientemente cerca para que los clientes de La Verne a menudo dejen su ropa en camino a Pomona.",
    },
    intro: {
      en: "La Verne is the closest northern neighbor to CleanMax. With the University of La Verne and historic Old Town anchoring the community, we serve students, faculty, and small businesses throughout La Verne's foothill neighborhoods.",
      es: "La Verne es el vecino norte más cercano a CleanMax. Con la Universidad de La Verne y el histórico Old Town anclando la comunidad, atendemos a estudiantes, profesores y pequeños negocios en los vecindarios del pie de la montaña de La Verne.",
    },
  },
  {
    slug: "san-dimas",
    neighborhoods: {
      en: ["Via Verde", "San Dimas Canyon", "North San Dimas", "Old Town San Dimas"],
      es: ["Via Verde", "San Dimas Canyon", "San Dimas Norte", "Old Town San Dimas"],
    },
    landmarks: {
      en: ["Frank G. Bonelli Regional Park", "Raging Waters", "Old Town San Dimas", "Puddingstone Reservoir", "Via Verde Country Club"],
      es: ["Parque Regional Frank G. Bonelli", "Raging Waters", "Old Town San Dimas", "Embalse Puddingstone", "Via Verde Country Club"],
    },
    crossStreets: "about 12 minutes northwest via the 57 or Arrow Hwy",
    driveFromPomona: {
      en: "About 12 minutes northwest via the 57 Freeway or Arrow Highway.",
      es: "Unos 12 minutos al noroeste por la autopista 57 o Arrow Highway.",
    },
    localHook: {
      en: "San Dimas families near Frank G. Bonelli Park and Via Verde are heavy users of our pickup-and-delivery wash-and-fold. Old Town San Dimas restaurants — the steakhouse-and-saloon scene — are regulars for our commercial uniform and table linen service.",
      es: "Las familias de San Dimas cerca del Parque Frank G. Bonelli y Via Verde son grandes usuarios de nuestro servicio de lavado y doblado con recolección y entrega. Los restaurantes del Old Town de San Dimas — la escena de steakhouse y saloon — son clientes habituales de nuestro servicio de uniformes y manteles comerciales.",
    },
    intro: {
      en: "San Dimas's Old Town western-themed restaurants and the recreation hub at Bonelli Park drive two different streams of CleanMax business. Old Town pulls commercial linen service; Bonelli-area families drop off walk-in wash-and-fold at our Pomona location on the way home.",
      es: "Los restaurantes temáticos del oeste del Old Town de San Dimas y el centro recreativo en Bonelli Park generan dos corrientes diferentes de negocio para CleanMax. Old Town trae servicio de lencería comercial; las familias del área de Bonelli dejan su lavado y doblado en nuestro local de Pomona al pasar de regreso a casa.",
    },
  },
  {
    slug: "azusa",
    neighborhoods: {
      en: ["Downtown Azusa", "Rosedale", "Mountain Cove", "North Azusa"],
      es: ["Centro de Azusa", "Rosedale", "Mountain Cove", "Azusa Norte"],
    },
    landmarks: {
      en: ["Azusa Pacific University", "Citrus College", "Azusa Canyon", "Downtown Azusa Gold Line Station", "Rosedale"],
      es: ["Azusa Pacific University", "Citrus College", "Azusa Canyon", "Estación Gold Line del Centro de Azusa", "Rosedale"],
    },
    crossStreets: "roughly 20 minutes northwest via the 210 Freeway",
    driveFromPomona: {
      en: "About 20 minutes northwest via the 210 Freeway.",
      es: "Unos 20 minutos al noroeste por la autopista 210.",
    },
    localHook: {
      en: "Azusa Pacific University is the centerpiece of our Azusa customer base — students from APU keep our wash-and-fold moving every semester. The new Rosedale development has also brought steady family laundry demand over the last few years.",
      es: "La Azusa Pacific University es el eje de nuestra base de clientes en Azusa — los estudiantes de APU mantienen nuestro lavado y doblado activo cada semestre. El nuevo desarrollo de Rosedale también ha traído demanda constante de lavandería familiar en los últimos años.",
    },
    intro: {
      en: "Azusa — the 'Canyon City' at the gateway to the San Gabriel Mountains — has a strong student presence thanks to Azusa Pacific University and nearby Citrus College. CleanMax's flat-rate wash-and-fold is a natural fit for the student budget.",
      es: "Azusa — la 'Ciudad del Cañón' en la puerta de las montañas San Gabriel — tiene una fuerte presencia estudiantil gracias a Azusa Pacific University y la cercana Citrus College. El lavado y doblado a tarifa fija de CleanMax encaja naturalmente con el presupuesto estudiantil.",
    },
  },
  {
    slug: "walnut",
    neighborhoods: {
      en: ["North Walnut", "South Walnut", "Walnut Creek Estates", "Timberline"],
      es: ["Walnut Norte", "Walnut Sur", "Walnut Creek Estates", "Timberline"],
    },
    landmarks: {
      en: ["Mt. San Antonio College", "Suzanne Park", "Walnut Creek Park", "Snow Creek Park", "Lemon Creek Park"],
      es: ["Mt. San Antonio College", "Suzanne Park", "Walnut Creek Park", "Snow Creek Park", "Lemon Creek Park"],
    },
    crossStreets: "about 8 minutes west via Grand Ave or the 60",
    driveFromPomona: {
      en: "About 8 minutes west via Grand Ave or the 60 Freeway.",
      es: "Unos 8 minutos al oeste por Grand Ave o la autopista 60.",
    },
    localHook: {
      en: "Walnut is right next door to Pomona — Mt. SAC students often drop laundry at CleanMax on their way home, and families in Walnut Creek Estates use our pickup service. It's one of our easiest cities to serve because of how close it is.",
      es: "Walnut está justo al lado de Pomona — los estudiantes de Mt. SAC a menudo dejan su ropa en CleanMax camino a casa, y las familias de Walnut Creek Estates usan nuestro servicio de recolección. Es una de las ciudades más fáciles de atender porque está muy cerca.",
    },
    intro: {
      en: "Walnut is practically in our backyard. Mt. San Antonio College (Mt. SAC) is the biggest single source of student laundry across any of our markets, and families from Walnut's quiet neighborhoods are a large share of the wash-and-fold drop-offs at our nearby Pomona location.",
      es: "Walnut está prácticamente en nuestro patio trasero. Mt. San Antonio College (Mt. SAC) es la mayor fuente única de lavandería estudiantil en todos nuestros mercados, y las familias de los tranquilos vecindarios de Walnut son una gran parte de los clientes de lavado y doblado que dejan su ropa en nuestro local cercano de Pomona.",
    },
  },
  {
    slug: "corona",
    neighborhoods: {
      en: ["North Corona", "South Corona", "Sierra Del Oro", "Temescal Valley", "Eagle Glen"],
      es: ["Corona Norte", "Corona Sur", "Sierra Del Oro", "Temescal Valley", "Eagle Glen"],
    },
    landmarks: {
      en: ["Dos Lagos", "The Crossings at Corona", "Tom's Farms", "Corona Heritage Park", "Cresta Verde Golf Course"],
      es: ["Dos Lagos", "The Crossings at Corona", "Tom's Farms", "Corona Heritage Park", "Campo de Golf Cresta Verde"],
    },
    crossStreets: "about 25 minutes south via the 71 and 91",
    driveFromPomona: {
      en: "About 25 minutes south via the 71 Freeway and 91.",
      es: "Unos 25 minutos al sur por la autopista 71 y la 91.",
    },
    localHook: {
      en: "Corona is one of our longer-distance pickup routes, but for commercial customers — restaurants at Dos Lagos and The Crossings, gyms along the 91 corridor — the consistent turnaround and flat pricing make it worth the drive.",
      es: "Corona es una de nuestras rutas de recolección más largas, pero para clientes comerciales — restaurantes en Dos Lagos y The Crossings, gimnasios a lo largo del corredor de la 91 — los plazos consistentes y precios fijos hacen que valga la pena el viaje.",
    },
    intro: {
      en: "Corona is our southernmost service area. Commercial customers drive most of our Corona business — the restaurant clusters at Dos Lagos and The Crossings, plus fitness studios along the 91, all rely on CleanMax for weekly and biweekly pickups.",
      es: "Corona es nuestra área de servicio más al sur. Los clientes comerciales generan la mayor parte de nuestro negocio en Corona — los grupos de restaurantes en Dos Lagos y The Crossings, además de estudios de fitness a lo largo de la 91, todos confían en CleanMax para recolecciones semanales y quincenales.",
    },
  },
  {
    slug: "jurupa-valley",
    neighborhoods: {
      en: ["Mira Loma", "Glen Avon", "Rubidoux", "Sunnyslope", "Pedley"],
      es: ["Mira Loma", "Glen Avon", "Rubidoux", "Sunnyslope", "Pedley"],
    },
    landmarks: {
      en: ["Jurupa Valley High School", "Louis Robidoux Nature Center", "Jurupa Hills Regional Park", "Rubidoux Nature Center", "Martha McLean Anza Narrows Park"],
      es: ["Jurupa Valley High School", "Louis Robidoux Nature Center", "Jurupa Hills Regional Park", "Rubidoux Nature Center", "Martha McLean Anza Narrows Park"],
    },
    crossStreets: "about 25 minutes south via the 71 and 60",
    driveFromPomona: {
      en: "About 25 minutes south via the 71 and 60 freeways.",
      es: "Unos 25 minutos al sur por las autopistas 71 y 60.",
    },
    localHook: {
      en: "Jurupa Valley is a newer city (incorporated 2011) with strong Spanish-speaking communities in Rubidoux, Mira Loma, and Glen Avon. CleanMax's bilingual service and flat-rate pricing are a big reason families in these neighborhoods choose us for wash-and-fold.",
      es: "Jurupa Valley es una ciudad nueva (incorporada en 2011) con fuertes comunidades hispanohablantes en Rubidoux, Mira Loma y Glen Avon. El servicio bilingüe de CleanMax y los precios fijos son una gran razón por la que las familias de estos vecindarios nos eligen para lavado y doblado.",
    },
    intro: {
      en: "Jurupa Valley is one of the most diverse communities we serve. Our Spanish-speaking wash-and-fold customers throughout Rubidoux, Mira Loma, and Glen Avon are a core part of our Jurupa Valley business.",
      es: "Jurupa Valley es una de las comunidades más diversas que atendemos. Nuestros clientes hispanohablantes de lavado y doblado en Rubidoux, Mira Loma y Glen Avon son una parte central de nuestro negocio en Jurupa Valley.",
    },
  },
  {
    slug: "montclair",
    neighborhoods: {
      en: ["North Montclair", "South Montclair", "Central Montclair"],
      es: ["Montclair Norte", "Montclair Sur", "Montclair Central"],
    },
    landmarks: {
      en: ["Montclair Place (formerly Montclair Plaza)", "Montclair Transcenter", "Montclair Civic Center", "Alma Hofman Park"],
      es: ["Montclair Place (anteriormente Montclair Plaza)", "Montclair Transcenter", "Montclair Civic Center", "Alma Hofman Park"],
    },
    crossStreets: "about 8 minutes east right off the 10 Freeway",
    driveFromPomona: {
      en: "About 8 minutes east, right off the 10 Freeway on Holt Ave.",
      es: "Unos 8 minutos al este, justo al lado de la autopista 10 en Holt Ave.",
    },
    localHook: {
      en: "Montclair is one of our closest cities — CleanMax is literally on the same major road (Holt Ave) that runs through Montclair. Montclair Place shoppers and residents across the city drop off regularly, and we serve the restaurants and retail tenants at the mall with commercial pickup.",
      es: "Montclair es una de nuestras ciudades más cercanas — CleanMax está literalmente en la misma avenida principal (Holt Ave) que atraviesa Montclair. Los compradores de Montclair Place y residentes de toda la ciudad vienen regularmente, y atendemos los restaurantes e inquilinos minoristas del centro comercial con recolección comercial.",
    },
    intro: {
      en: "Montclair is our next-door neighbor. Holt Ave connects directly from Pomona into Montclair, making CleanMax the obvious choice for residents and businesses along the entire corridor. Montclair Place and the surrounding commercial district generate steady commercial laundry demand.",
      es: "Montclair es nuestro vecino de al lado. Holt Ave conecta directamente desde Pomona hasta Montclair, haciendo de CleanMax la opción obvia para residentes y negocios a lo largo de todo el corredor. Montclair Place y el distrito comercial circundante generan una demanda constante de lavandería comercial.",
    },
  },
];

export function getCityLocalContent(slug: string): CityLocalContent | undefined {
  return cityLocalContent.find((c) => c.slug === slug);
}

export function getCityLocalContentByLang(
  content: CityLocalContent,
  lang: Language,
) {
  return {
    neighborhoods: content.neighborhoods[lang],
    landmarks: content.landmarks[lang],
    crossStreets: content.crossStreets,
    driveFromPomona: content.driveFromPomona[lang],
    localHook: content.localHook[lang],
    intro: content.intro[lang],
  };
}
