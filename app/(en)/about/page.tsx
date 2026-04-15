import AboutContent from "@/components/AboutContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About CleanMax Laundry | Pomona, CA",
  description:
    "CleanMax Laundry is a locally owned modern laundromat in Pomona, CA. Self-service, wash & fold, and commercial laundry for the Inland Empire.",
  path: "/about",
  keywords:
    "about CleanMax Laundry, locally owned laundromat Pomona CA, modern laundromat Pomona",
});

export default function AboutPage() {
  return (
    <main>
      <AboutContent />
    </main>
  );
}
