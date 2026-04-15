import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import { buildMetadata } from "@/lib/seo";
import BlogPostRenderer from "@/components/BlogPostRenderer";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const desc = post.excerptEs.slice(0, 155);

  return buildMetadata({
    title: `${post.titleEs} | CleanMax Laundry`,
    description: desc,
    path: `/blog/${post.slug}`,
    keywords: `${post.titleEs.toLowerCase()}, lavandería Pomona CA, CleanMax Laundry`,
    lang: "es",
  });
}

export default async function BlogPostPageEs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.titleEs,
    datePublished: post.publishDate,
    inLanguage: "es",
    author: {
      "@type": "Organization",
      name: "CleanMax Laundry",
    },
    publisher: {
      "@type": "Organization",
      name: "CleanMax Laundry",
      logo: {
        "@type": "ImageObject",
        url: "https://cleanmaxlaundry.com/images/logo.png",
      },
    },
    url: `https://cleanmaxlaundry.com/es/blog/${post.slug}`,
    image: "https://cleanmaxlaundry.com/images/IMG_8888.jpg",
  };

  return (
    <main className="pt-24 pb-4 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostRenderer post={post} />
    </main>
  );
}
