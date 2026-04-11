"use client";

import { useTranslation } from "@/contexts/LanguageContext";
import { interpolate } from "@/lib/interpolate";
import ServiceAreaMap from "@/components/seo/ServiceAreaMap";
import SeoFaq from "@/components/seo/SeoFaq";
import SeoCta from "@/components/seo/SeoCta";
import type { City } from "@/data/cities";
import type { Industry } from "@/data/industries";

interface Props {
  city: City;
  industry: Industry;
}

export default function CommercialIndustryCityContent({ city, industry }: Props) {
  const { t, language } = useTranslation();

  const industryName = language === "es" ? industry.nameEs : industry.name;
  const industryItems = language === "es" ? industry.itemsEs : industry.items;

  const vars = {
    city: city.name,
    county: city.county,
    desc: city.description,
    industry: industryName,
    industry_lower: industryName.toLowerCase(),
    items: industryItems,
  };
  const ip = (key: Parameters<typeof t>[0]) => interpolate(t(key), vars);

  const faqItems = [
    { q: ip("seo_industry_faq_q1"), a: ip("seo_industry_faq_a1") },
    { q: ip("seo_industry_faq_q2"), a: ip("seo_industry_faq_a2") },
    { q: ip("seo_industry_faq_q3"), a: ip("seo_industry_faq_a3") },
    { q: ip("seo_industry_faq_q4"), a: ip("seo_industry_faq_a4") },
    { q: ip("seo_industry_faq_q5"), a: ip("seo_industry_faq_a5") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            {industryName} · {city.name}, CA
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none mb-6">
            Laundry Service for {industryName} in {city.name}, CA
          </h1>
          <p className="font-sans text-brand-dark/70 text-lg leading-relaxed max-w-2xl">
            {ip("seo_industry_intro")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="mailto:laundry@cleanmaxlaundry.com"
              className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-brand-blue transition-colors"
            >
              {t("commercial_cta")}
            </a>
            <a
              href="tel:6263403098"
              className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              (626) 340-3098
            </a>
          </div>
        </div>
      </section>

      {/* What we handle */}
      <section className="py-12 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl uppercase text-brand-dark leading-none mb-6">
            {t("seo_industry_what_we_handle")}
          </h2>
          <div className="flex items-center gap-3 bg-white border border-brand-dark/10 rounded px-5 py-4 mt-0">
            <span
              className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0"
              aria-hidden="true"
            />
            <p className="font-sans text-base text-brand-dark/80">
              {industryItems}
            </p>
          </div>
        </div>
      </section>

      {/* City paragraph */}
      <section className="py-12 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-sans text-brand-dark/70 text-base leading-relaxed">
            {ip("seo_industry_city_para")}
          </p>
        </div>
      </section>

      {/* Service area map */}
      <section className="py-16 bg-brand-dark border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl uppercase text-white leading-none mb-8">
            {t("seo_service_area_heading")}
          </h2>
          <ServiceAreaMap theme="dark" />
        </div>
      </section>

      <SeoFaq
        items={faqItems}
        eyebrow={t("faq_eyebrow")}
        heading={t("faq_heading")}
      />

      <SeoCta />
    </>
  );
}
