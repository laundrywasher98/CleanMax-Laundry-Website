"use client";

import Link from "next/link";
import { useTranslation, type TranslationKey } from "@/contexts/LanguageContext";
import ServiceAreaMap from "@/components/seo/ServiceAreaMap";

const industryKeys: TranslationKey[] = [
  "commercial_industry_0",
  "commercial_industry_1",
  "commercial_industry_2",
  "commercial_industry_3",
  "commercial_industry_4",
  "commercial_industry_5",
];

export default function CommercialCallout() {
  const { t } = useTranslation();

  return (
    <section id="commercial" className="relative bg-brand-dark py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-px h-full bg-white/5" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/3 h-px bg-brand-blue/30" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: content */}
          <div>
            <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-6">
              {t("commercial_eyebrow")}
            </p>
            <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl uppercase text-white leading-none mb-8">
              {t("commercial_heading_line1")}<br />{t("commercial_heading_line2")}
            </h2>
            <p className="font-sans text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
              {t("commercial_desc")}
            </p>

            {/* Industry list */}
            <div className="grid grid-cols-2 gap-3 mb-12">
              {industryKeys.map((key) => (
                <div key={key} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-blue shrink-0" aria-hidden="true" />
                  <span className="font-sans text-sm text-white/60">{t(key)}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/commercial-quote"
                className="inline-flex items-center gap-2 bg-brand-blue text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-brand-dark transition-colors"
              >
                {t("commercial_cta")}
              </Link>
              <a
                href="tel:909-248-7305"
                className="inline-flex items-center gap-2 text-white/60 font-sans font-semibold text-sm tracking-wide hover:text-white transition-colors py-4"
              >
                {t("commercial_phone_label")}
              </a>
            </div>

            <div className="mt-8">
              <Link
                href="/commercial-laundry"
                className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue/70 hover:text-brand-blue transition-colors"
              >
                {t("nav_commercial_laundry")} →
              </Link>
            </div>
          </div>

          {/* Right: service area map */}
          <div>
            <ServiceAreaMap theme="dark" className="mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
