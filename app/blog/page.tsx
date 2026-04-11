import BlogIndexContent from "@/components/BlogIndexContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Laundry Blog | Tips & Guides | CleanMax Laundry",
  description:
    "Laundry tips, cost guides, and local resources for Pomona, CA residents and businesses. From CleanMax Laundry.",
  path: "/blog",
  keywords:
    "laundry tips Pomona CA, wash and fold guide, laundromat tips, commercial laundry guide Inland Empire",
});

export default function BlogPage() {
  return (
    <main>
      <BlogIndexContent />
    </main>
  );
}
