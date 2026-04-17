"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { interpolate } from "@/lib/interpolate";
import ServiceAreaMap from "@/components/seo/ServiceAreaMap";
import SeoFaq from "@/components/seo/SeoFaq";
import SeoCta from "@/components/seo/SeoCta";
import CityLocalContext from "@/components/seo/CityLocalContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import { localizeHref } from "@/lib/href";
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
  const industryFaqs = language === "es" ? industry.faqsEs : industry.faqs;
  const industryHero = industry.heroCopy[language];
  const industryAccepts = industry.accepts[language];

  const vars = {
    city: city.name,
    county: city.county,
    desc: city.description,
    industry: industryName,
    industry_lower: industryName.toLowerCase(),
    items: industryItems,
  };
  const ip = (template: string) => interpolate(template, vars);
  const tk = (key: Parameters<typeof t>[0]) => interpolate(t(key), vars);

  const faqItems = industryFaqs.map((faq) => ({
    q: ip(faq.q),
    a: ip(faq.a),
  }));

  const isPomona = city.slug === "pomona";

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: t("breadcrumb_commercial_laundry"), href: "/commercial-laundry" },
              { label: `${industryName} · ${city.name}` },
            ]}
          />
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            {industryName} · {city.name}, CA
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none mb-6">
            {tk("seo_industry_h1")}
          </h1>
          {isPomona && (
            <p className="font-sans text-brand-blue font-semibold text-sm uppercase tracking-wide mb-4">
              {tk("seo_industry_home_city_preface")}
            </p>
          )}
          <p className="font-sans text-brand-dark/70 text-lg leading-relaxed max-w-2xl">
            {ip(industryHero)}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="mailto:laundry@cleanmaxlaundry.com"
              className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-brand-blue transition-colors"
            >
              {t("commercial_cta")}
            </a>
            <a
              href="tel:909-248-7305"
              className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              (909) 248-7305
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
          <p className="font-sans text-brand-dark/75 text-base leading-relaxed mb-5">
            {ip(industryAccepts)}
          </p>
          <div className="flex items-center gap-3 bg-white border border-brand-dark/10 rounded px-5 py-4">
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
            {tk("seo_industry_city_para")}
          </p>
        </div>
      </section>

      {/* Process callout — shared across all industries */}
      <section className="py-16 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl uppercase text-brand-dark leading-none mb-6">
            {t("seo_industry_process_callout_heading")}
          </h2>
          <p className="font-sans text-brand-dark/75 text-base leading-relaxed">
            {t("seo_industry_process_callout_body")}
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

      <CityLocalContext citySlug={city.slug} cityName={city.name} variant="service" />

      <SeoFaq
        items={faqItems}
        eyebrow={t("faq_eyebrow")}
        heading={t("faq_heading")}
      />

      {/* Industry-specific CTA */}
      <section className="py-16 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-brand-dark leading-none mb-6">
            {tk("seo_industry_cta_heading")}
          </h2>
          <p className="font-sans text-brand-dark/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            {t("seo_industry_cta_body")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={localizeHref("/commercial-quote", language)}
              className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:opacity-90 transition-opacity"
            >
              {tk("seo_industry_cta_button")}
            </Link>
            <a
              href="tel:9092487305"
              className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              (909) 248-7305
            </a>
          </div>
        </div>
      </section>

      <SeoCta />
    </>
  );
}
