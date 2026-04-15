"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import SeoFaq from "@/components/seo/SeoFaq";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function PickupDeliveryContent() {
  const { t, language } = useTranslation();
  const prefix = language === "es" ? "/es" : "";

  const faqItems = [
    { q: t("pickup_faq_q1"), a: t("pickup_faq_a1") },
    { q: t("pickup_faq_q2"), a: t("pickup_faq_a2") },
    { q: t("pickup_faq_q3"), a: t("pickup_faq_a3") },
    { q: t("pickup_faq_q4"), a: t("pickup_faq_a4") },
    { q: t("pickup_faq_q5"), a: t("pickup_faq_a5") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Breadcrumbs
            items={[{ label: t("pickup_eyebrow") }]}
          />
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            {t("pickup_eyebrow")}
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none mb-6">
            {t("pickup_h1")}
          </h1>
          <p className="font-sans text-brand-dark/70 text-lg leading-relaxed max-w-2xl">
            {t("pickup_intro")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href={`${prefix}/commercial-quote`}
              className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-brand-blue transition-colors"
            >
              {t("pickup_cta_button")}
            </Link>
            <a
              href="tel:9092487305"
              className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              {t("pickup_cta_phone")}
            </a>
          </div>
        </div>
      </section>

      {/* Who we pick up for */}
      <section className="py-16 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-4">
            {t("pickup_who_heading")}
          </h2>
          <p className="font-sans text-brand-dark/70 text-base leading-relaxed mb-8 max-w-2xl">
            {t("pickup_who_intro")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-brand-dark/10 p-6">
              <h3 className="font-display font-black text-xl uppercase text-brand-dark leading-tight mb-3">
                {t("pickup_residential_title")}
              </h3>
              <p className="font-sans text-sm text-brand-dark/70 leading-relaxed">
                {t("pickup_residential_desc")}
              </p>
            </div>
            <div className="bg-white border border-brand-dark/10 p-6">
              <h3 className="font-display font-black text-xl uppercase text-brand-dark leading-tight mb-3">
                {t("pickup_commercial_title")}
              </h3>
              <p className="font-sans text-sm text-brand-dark/70 leading-relaxed">
                {t("pickup_commercial_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-10">
            {t("pickup_how_heading")}
          </h2>
          <ol className="space-y-6">
            {[t("pickup_step1"), t("pickup_step2"), t("pickup_step3")].map(
              (step, i) => (
                <li key={i} className="flex items-start gap-5">
                  <span className="font-display font-black text-4xl text-brand-blue leading-none shrink-0 w-8">
                    {i + 1}
                  </span>
                  <p className="font-sans text-base text-brand-dark/80 leading-relaxed pt-1">
                    {step}
                  </p>
                </li>
              ),
            )}
          </ol>
        </div>
      </section>

      {/* Service area */}
      <section className="py-12 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl uppercase text-brand-dark leading-none mb-6">
            {t("pickup_area_heading")}
          </h2>
          <p className="font-sans text-brand-dark/70 text-base leading-relaxed">
            {t("pickup_area_body")}
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl uppercase text-brand-dark leading-none mb-6">
            {t("pickup_pricing_heading")}
          </h2>
          <p className="font-sans text-brand-dark/70 text-base leading-relaxed mb-4">
            {t("pickup_pricing_residential")}
          </p>
          <p className="font-sans text-brand-dark/70 text-base leading-relaxed">
            {t("pickup_pricing_commercial")}
          </p>
        </div>
      </section>

      <SeoFaq
        items={faqItems}
        eyebrow={t("faq_eyebrow")}
        heading={t("faq_heading")}
      />

      {/* CTA */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-none mb-6">
            {t("pickup_cta_heading")}
          </h2>
          <p className="font-sans text-white/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            {t("pickup_cta_body")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`${prefix}/commercial-quote`}
              className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:opacity-90 transition-opacity"
            >
              {t("pickup_cta_button")}
            </Link>
            <a
              href="tel:9092487305"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-brand-dark transition-colors"
            >
              {t("pickup_cta_phone")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
