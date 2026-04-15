export type City = {
  slug: string;
  name: string;
  zip: string;
  county: string;
  description: string;
};

export const cities: City[] = [
  { slug: "pomona", name: "Pomona", zip: "91766", county: "Los Angeles",
    description: "our home city and primary location" },
  { slug: "ontario", name: "Ontario", zip: "91761", county: "San Bernardino",
    description: "a major Inland Empire hub just minutes away" },
  { slug: "rancho-cucamonga", name: "Rancho Cucamonga", zip: "91730",
    county: "San Bernardino", description: "a growing community in the Inland Empire" },
  { slug: "chino", name: "Chino", zip: "91710", county: "San Bernardino",
    description: "a thriving city in the western Inland Empire" },
  { slug: "chino-hills", name: "Chino Hills", zip: "91709", county: "San Bernardino",
    description: "an upscale community in the Chino Valley" },
  { slug: "upland", name: "Upland", zip: "91786", county: "San Bernardino",
    description: "the City of Gracious Living at the foot of the mountains" },
  { slug: "claremont", name: "Claremont", zip: "91711", county: "Los Angeles",
    description: "a college town known for its tree-lined streets" },
  { slug: "diamond-bar", name: "Diamond Bar", zip: "91765", county: "Los Angeles",
    description: "a family-friendly city on the LA and San Bernardino county border" },
  { slug: "west-covina", name: "West Covina", zip: "91791", county: "Los Angeles",
    description: "a busy San Gabriel Valley city" },
  { slug: "covina", name: "Covina", zip: "91722", county: "Los Angeles",
    description: "a central San Gabriel Valley community" },
  { slug: "glendora", name: "Glendora", zip: "91740", county: "Los Angeles",
    description: "the Pride of the Foothills in the San Gabriel Valley" },
  { slug: "la-verne", name: "La Verne", zip: "91750", county: "Los Angeles",
    description: "a peaceful foothill community in the San Gabriel Valley" },
  { slug: "san-dimas", name: "San Dimas", zip: "91773", county: "Los Angeles",
    description: "a charming foothill city in the San Gabriel Valley" },
  { slug: "azusa", name: "Azusa", zip: "91702", county: "Los Angeles",
    description: "the Canyon City at the gateway to the San Gabriel Mountains" },
  { slug: "walnut", name: "Walnut", zip: "91789", county: "Los Angeles",
    description: "a quiet residential community in the Pomona Valley" },
  { slug: "corona", name: "Corona", zip: "92880", county: "Riverside",
    description: "a major Inland Empire city in Riverside County" },
  { slug: "jurupa-valley", name: "Jurupa Valley", zip: "91752", county: "Riverside",
    description: "a growing community in Riverside County" },
  { slug: "montclair", name: "Montclair", zip: "91763", county: "San Bernardino",
    description: "Located just minutes from Montclair — CleanMax is right off the 10 freeway on Holt Ave in Pomona, an easy drive from anywhere in Montclair" },
];
