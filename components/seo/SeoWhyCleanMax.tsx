"use client";

import { useTranslation } from "@/contexts/LanguageContext";

export default function SeoWhyCleanMax() {
  const { t } = useTranslation();

  const points = [
    t("seo_why_1"),
    t("seo_why_2"),
    t("seo_why_3"),
    t("seo_why_4"),
  ];

  return (
    <section className="py-16 bg-white border-t border-brand-dark/10">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-8">
          {t("seo_why_heading")}
        </h2>
        <ul className="space-y-3">
          {points.map((point, i) => (
            <li key={i} className="flex items-center gap-3">
              <span
                className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0"
                aria-hidden="true"
              />
              <span className="font-sans text-base text-brand-dark/80">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
