import BlogIndexContent from "@/components/BlogIndexContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog de Lavandería | Consejos y Guías | CleanMax Laundry",
  description:
    "Consejos de lavandería, guías de costos y recursos locales para residentes y negocios de Pomona, CA. De CleanMax Laundry.",
  path: "/blog",
  keywords:
    "consejos lavandería Pomona CA, guía lavado y doblado, consejos lavandería, guía lavandería comercial Inland Empire",
  lang: "es",
});

export default function BlogPageEs() {
  return (
    <main>
      <BlogIndexContent />
    </main>
  );
}
