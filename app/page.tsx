import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyCleanMax from "@/components/WhyCleanMax";
import PhotoStrip from "@/components/PhotoStrip";
import CommercialCallout from "@/components/CommercialCallout";
import AppDownload from "@/components/AppDownload";
import FAQ from "@/components/FAQ";
import NearbyLocations from "@/components/NearbyLocations";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyCleanMax />
      <PhotoStrip />
      <CommercialCallout />
      <AppDownload />
      <FAQ />
      <NearbyLocations />
    </main>
  );
}
