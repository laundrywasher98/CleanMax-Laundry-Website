"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { blogPosts, type BlogPost } from "@/data/blogPosts";
import { localizeHref } from "@/lib/href";

interface Props {
  post: BlogPost;
}

// Parses markdown-style [text](/url) into React nodes.
// Plain text without the syntax passes through unchanged.
function renderWithLinks(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    parts.push(
      <Link
        key={key++}
        href={href}
        className="text-brand-blue hover:underline"
      >
        {label}
      </Link>,
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

export default function BlogPostRenderer({ post }: Props) {
  const { language, t } = useTranslation();
  const isEs = language === "es";
  const lang = (block: { en: string; es: string }) =>
    isEs ? block.es : block.en;

  return (
    <article className="max-w-2xl mx-auto px-6">
      <Link
        href={localizeHref("/blog", language)}
        className="inline-flex items-center font-sans text-sm text-brand-blue hover:opacity-70 transition-opacity mb-8 mt-2 block"
      >
        {t("blog_back")}
      </Link>

      <h1 className="font-display font-black text-4xl md:text-5xl uppercase text-brand-dark leading-none mb-4">
        {isEs ? post.titleEs : post.title}
      </h1>

      <p className="font-sans text-xs text-brand-dark/40 uppercase tracking-widest mb-10">
        {new Date(post.publishDate).toLocaleDateString(
          isEs ? "es-US" : "en-US",
          { year: "numeric", month: "long", day: "numeric" }
        )}
      </p>

      <div className="font-sans text-brand-dark/80 leading-relaxed space-y-5 prose-headings:font-display prose-headings:font-black prose-headings:uppercase prose-headings:text-brand-dark prose-headings:leading-none">
        {post.sections.map((section, i) => {
          switch (section.type) {
            case "h2":
              return (
                <h2
                  key={i}
                  className="font-display font-black text-2xl md:text-3xl uppercase text-brand-dark leading-none mt-10 mb-3"
                >
                  {lang(section)}
                </h2>
              );
            case "h3":
              return (
                <h3
                  key={i}
                  className="font-display font-black text-xl uppercase text-brand-dark leading-none mt-6 mb-2"
                >
                  {lang(section)}
                </h3>
              );
            case "p":
              return (
                <p key={i} className="text-base leading-relaxed">
                  {renderWithLinks(lang(section))}
                </p>
              );
            case "ul":
              return (
                <ul key={i} className="space-y-2 list-none pl-0">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-brand-blue font-bold mt-0.5 shrink-0">
                        ·
                      </span>
                      <span>{renderWithLinks(lang(item))}</span>
                    </li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>

      {/* CTA section */}
      <div className="mt-14 mb-10 bg-brand-dark text-white p-8">
        <h2 className="font-display font-black text-2xl uppercase leading-none mb-4">
          {isEs ? post.ctaHeadingEs : post.ctaHeadingEn}
        </h2>
        <div className="flex flex-col sm:flex-row gap-3">
          {post.ctaLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-sans font-semibold text-sm uppercase tracking-widest px-6 py-3 hover:bg-white hover:text-brand-dark transition-colors"
            >
              {isEs ? link.labelEs : link.labelEn}
            </Link>
          ))}
        </div>
      </div>

      {/* Related posts */}
      {(() => {
        const related = blogPosts
          .filter((p) => p.slug !== post.slug && !p.spanishOnly)
          .slice(0, 3);
        if (related.length === 0) return null;
        return (
          <div className="border-t border-brand-dark/10 pt-8 mb-8">
            <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-dark/40 mb-4">
              {isEs ? "Lee también" : "Read next"}
            </p>
            <ul className="space-y-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="font-sans text-sm text-brand-blue hover:underline"
                  >
                    {isEs ? p.titleEs : p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })()}

      {/* Related services */}
      <div className="border-t border-brand-dark/10 pt-8 pb-12">
        <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-dark/40 mb-4">
          {t("blog_related_heading")}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={localizeHref("/wash-and-fold/pomona", language)}
            className="font-sans text-sm text-brand-blue hover:underline"
          >
            {isEs ? "Lavado y Doblado" : "Wash & Fold"}
          </Link>
          <span className="text-brand-dark/20">·</span>
          <Link
            href={localizeHref("/laundromat/pomona", language)}
            className="font-sans text-sm text-brand-blue hover:underline"
          >
            {isEs ? "Autoservicio" : "Self-Service Laundry"}
          </Link>
          <span className="text-brand-dark/20">·</span>
          <Link
            href={localizeHref("/commercial-laundry", language)}
            className="font-sans text-sm text-brand-blue hover:underline"
          >
            {isEs ? "Lavandería Comercial" : "Commercial Laundry"}
          </Link>
          <span className="text-brand-dark/20">·</span>
          <Link
            href={localizeHref("/wash-and-fold/pricing", language)}
            className="font-sans text-sm text-brand-blue hover:underline"
          >
            {isEs ? "Precios" : "Pricing"}
          </Link>
        </div>
      </div>
    </article>
  );
}
