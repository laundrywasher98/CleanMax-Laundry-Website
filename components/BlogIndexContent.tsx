"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { blogPosts } from "@/data/blogPosts";

export default function BlogIndexContent() {
  const { language, t } = useTranslation();
  const isEs = language === "es";

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            CleanMax Laundry · Pomona, CA
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none mb-4">
            {t("blog_heading")}
          </h1>
          <p className="font-sans text-brand-dark/55 text-lg">
            {t("blog_subtitle")}
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => {
              const title = post.spanishOnly ? post.titleEs : (isEs ? post.titleEs : post.title);
              const excerpt = post.spanishOnly ? post.excerptEs : (isEs ? post.excerptEs : post.excerpt);
              const truncated = excerpt.length > 130 ? excerpt.slice(0, 130).trimEnd() + "…" : excerpt;

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-brand-dark/10 p-6 flex flex-col gap-4 hover:border-brand-blue transition-colors"
                >
                  <div>
                    <p className="font-sans text-xs text-brand-dark/35 uppercase tracking-widest mb-3">
                      {new Date(post.publishDate).toLocaleDateString(
                        isEs ? "es-US" : "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </p>
                    <h2 className="font-display font-black text-xl uppercase text-brand-dark leading-none mb-3 group-hover:text-brand-blue transition-colors">
                      {title}
                    </h2>
                    <p className="font-sans text-sm text-brand-dark/60 leading-relaxed">
                      {truncated}
                    </p>
                  </div>
                  <span className="font-sans font-semibold text-sm text-brand-blue mt-auto">
                    {t("blog_read_more")}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
