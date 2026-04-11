"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { interpolate } from "@/lib/interpolate";
import ServiceAreaMap from "@/components/seo/ServiceAreaMap";
import SeoFaq from "@/components/seo/SeoFaq";
import SeoCta from "@/components/seo/SeoCta";
import { industries } from "@/data/industries";
import type { City } from "@/data/cities";

interface Props {
  city: City;
}

export default function CommercialCityContent({ city }: Props) {
  const { t, language } = useTranslation();
  const vars = { city: city.name, county: city.county, desc: city.description };
  const ip = (key: Parameters<typeof t>[0]) => interpolate(t(key), vars);

  const steps = [
    ip("seo_commercial_step1"),
    ip("seo_commercial_step2"),
    ip("seo_commercial_step3"),
  ];

  const faqItems = [
    { q: ip("seo_commercial_faq_q1"), a: ip("seo_commercial_faq_a1") },
    { q: ip("seo_commercial_faq_q2"), a: ip("seo_commercial_faq_a2") },
    { q: ip("seo_commercial_faq_q3"), a: ip("seo_commercial_faq_a3") },
    { q: ip("seo_commercial_faq_q4"), a: ip("seo_commercial_faq_a4") },
    { q: ip("seo_commercial_faq_q5"), a: ip("seo_commercial_faq_a5") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            {city.name}, CA
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none mb-6">
            Commercial Laundry in {city.name}, CA
          </h1>
          <p className="font-sans text-brand-dark/70 text-lg leading-relaxed max-w-2xl">
            {ip("seo_commercial_intro")}
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

      {/* How it works */}
      <section className="py-16 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-10">
            {t("seo_commercial_how_it_works")}
          </h2>
          <ol className="space-y-6">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-5">
                <span className="font-display font-black text-4xl text-brand-blue leading-none shrink-0 w-8">
                  {i + 1}
                </span>
                <p className="font-sans text-base text-brand-dark/80 leading-relaxed pt-1">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl uppercase text-brand-dark leading-none mb-8">
            {t("seo_commercial_industries_heading")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/commercial-laundry/${industry.slug}/${city.slug}`}
                className="group border border-brand-dark/10 p-5 hover:border-brand-blue transition-colors"
              >
                <p className="font-sans font-semibold text-base text-brand-dark group-hover:text-brand-blue transition-colors">
                  {language === "es" ? industry.nameEs : industry.name}
                </p>
                <p className="font-sans text-sm text-brand-dark/55 mt-1">
                  {language === "es" ? industry.itemsEs : industry.items}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service area map */}
      <section className="py-16 bg-brand-dark border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl uppercase text-white leading-none mb-8">
            {t("seo_service_area_heading")}
          </h2>
          <p className="font-sans text-white/60 text-base mb-6">
            {ip("seo_commercial_area_sentence")}
          </p>
          <ServiceAreaMap theme="dark" />
        </div>
      </section>

      {/* City paragraph */}
      <section className="py-12 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-sans text-brand-dark/70 text-base leading-relaxed">
            {ip("seo_commercial_city_para")}
          </p>
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
