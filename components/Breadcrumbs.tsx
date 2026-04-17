"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/contexts/LanguageContext";
import JsonLd from "@/components/JsonLd";
import { buildBreadcrumbSchema, type BreadcrumbItem } from "@/lib/schema";
import { BASE_URL } from "@/lib/seo";

interface Props {
  items: Array<{ label: string; href?: string }>;
}

export default function Breadcrumbs({ items }: Props) {
  const { language } = useTranslation();
  const pathname = usePathname() || "/";
  const homeLabel = language === "es" ? "Inicio" : "Home";
  const homeHref = language === "es" ? "/es" : "/";
  const allItems = [{ label: homeLabel, href: homeHref }, ...items];

  const schemaItems: BreadcrumbItem[] = allItems.map((item) => ({
    name: item.label,
    url: `${BASE_URL}${item.href ?? pathname}`,
  }));

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-2 font-sans text-xs text-brand-dark/50">
          {allItems.map((item, idx) => {
            const isLast = idx === allItems.length - 1;
            return (
              <li key={idx} className="flex items-center gap-2">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-brand-blue transition-colors uppercase tracking-wide"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={`uppercase tracking-wide ${
                      isLast ? "text-brand-dark/80 font-semibold" : ""
                    }`}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
                {!isLast && (
                  <span className="text-brand-dark/20" aria-hidden="true">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
