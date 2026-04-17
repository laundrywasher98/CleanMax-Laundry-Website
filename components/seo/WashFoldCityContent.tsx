"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { interpolate } from "@/lib/interpolate";
import SeoFaq from "@/components/seo/SeoFaq";
import SeoCta from "@/components/seo/SeoCta";
import CityLocalContext from "@/components/seo/CityLocalContext";
import CitySiblingServices from "@/components/seo/CitySiblingServices";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { City } from "@/data/cities";
import { localizeHref } from "@/lib/href";

interface Props {
  city: City;
}

export default function WashFoldCityContent({ city }: Props) {
  const { t, language } = useTranslation();
  const lh = (path: string) => localizeHref(path, language);
  const vars = { city: city.name, county: city.county, desc: city.description };
  const ip = (key: Parameters<typeof t>[0]) => interpolate(t(key), vars);

  const steps = [
    ip("seo_wf_step1"),
    ip("seo_wf_step2"),
    ip("seo_wf_step3"),
  ];

  const faqItems = [
    { q: ip("seo_wf_faq_q1"), a: ip("seo_wf_faq_a1") },
    { q: ip("seo_wf_faq_q2"), a: ip("seo_wf_faq_a2") },
    { q: ip("seo_wf_faq_q3"), a: ip("seo_wf_faq_a3") },
    { q: ip("seo_wf_faq_q4"), a: ip("seo_wf_faq_a4") },
    { q: ip("seo_wf_faq_q5"), a: ip("seo_wf_faq_a5") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: t("breadcrumb_wash_and_fold"), href: "/wash-and-fold/pricing" },
              { label: city.name },
            ]}
          />
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            {city.name}, CA
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none mb-6">
            {ip("seo_wf_h1")}
          </h1>
          <p className="font-sans text-brand-dark/70 text-lg leading-relaxed max-w-2xl">
            {ip("seo_wf_intro")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href={lh("/wash-and-fold/pricing")}
              className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-brand-blue transition-colors"
            >
              {t("seo_view_pricing")}
            </Link>
            <a
              href="tel:9092487305"
              className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              {t("seo_cta_call")}
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-10">
            {t("seo_wf_how_it_works")}
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

      {/* Pricing preview */}
      <section className="py-12 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl uppercase text-brand-dark leading-none mb-6">
            {t("seo_wf_pricing_heading")}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            {[
              { label: t("seo_wf_price_next_weekday"), price: "$1.50/lb" },
              { label: t("seo_wf_price_next_weekend"), price: "$1.75/lb" },
              { label: t("seo_wf_price_same_weekday"), price: "$1.75/lb" },
              { label: t("seo_wf_price_same_weekend"), price: "$2.00/lb" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-brand-surface border border-brand-dark/10 p-4 rounded"
              >
                <p className="font-display font-black text-2xl text-brand-dark">
                  {item.price}
                </p>
                <p className="font-sans text-xs text-brand-dark/50 mt-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <p className="font-sans text-sm text-brand-dark/50 mb-4">
            {t("seo_wf_minimum_order")}
          </p>

          <Link
            href="/wash-and-fold/pricing"
            aria-label={t("seo_view_pricing_label")}
            className="font-sans font-semibold text-sm text-brand-blue hover:opacity-70 transition-opacity"
          >
            {t("seo_wf_full_pricing_link")}
          </Link>
        </div>
      </section>

      {/* City paragraph */}
      <section className="py-12 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-sans text-brand-dark/70 text-base leading-relaxed">
            {ip("seo_wf_city_para")}
          </p>
        </div>
      </section>

      <CityLocalContext citySlug={city.slug} cityName={city.name} variant="service" />

      <CitySiblingServices
        citySlug={city.slug}
        cityName={city.name}
        currentService="wash-and-fold"
      />

      <SeoFaq
        items={faqItems}
        eyebrow={t("faq_eyebrow")}
        heading={t("faq_heading")}
      />

      <SeoCta />
    </>
  );
}
