import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyCleanMax from "@/components/WhyCleanMax";
import PhotoStrip from "@/components/PhotoStrip";
import CommercialCallout from "@/components/CommercialCallout";
import AppDownload from "@/components/AppDownload";
import ReviewsPreview from "@/components/ReviewsPreview";
import FAQ from "@/components/FAQ";
import NearbyLocations from "@/components/NearbyLocations";
import JsonLd from "@/components/JsonLd";
import { buildBusinessRatingSchema, buildFaqSchema } from "@/lib/schema";

export default function HomeEs() {
  return (
    <main>
      <JsonLd data={buildFaqSchema("es")} />
      <JsonLd data={buildBusinessRatingSchema()} />
      <Hero />
      <Services />
      <WhyCleanMax />
      <PhotoStrip />
      <CommercialCallout />
      <AppDownload />
      <ReviewsPreview />
      <FAQ />
      <NearbyLocations />
    </main>
  );
}
