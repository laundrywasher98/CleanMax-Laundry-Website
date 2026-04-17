"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import ServiceAreaMap from "@/components/seo/ServiceAreaMap";
import CommercialQuoteForm from "@/components/CommercialQuoteForm";
import EmailUsButton from "@/components/EmailUsButton";
import SeoFaq from "@/components/seo/SeoFaq";
import { industries } from "@/data/industries";

export default function CommercialOverviewContent() {
  const { t, language } = useTranslation();
  const prefix = language === "es" ? "/es" : "";

  const steps = [
    t("commercial_overview_step1"),
    t("commercial_overview_step2"),
    t("commercial_overview_step3"),
  ];

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
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            {t("commercial_overview_eyebrow")}
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none mb-6">
            {t("commercial_overview_heading")}
          </h1>
          <p className="font-sans text-brand-dark/70 text-lg leading-relaxed max-w-2xl">
            {t("commercial_overview_intro")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <EmailUsButton
              className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-brand-blue transition-colors"
            >
              {t("commercial_overview_email_cta")}
            </EmailUsButton>
            <a
              href="tel:909-248-7305"
              className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              {t("commercial_overview_call_cta")} — (909) 248-7305
            </a>
          </div>
        </div>
      </section>

      {/* Value props */}
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
                {t("pickup_value_1_title")}
              </h3>
              <p className="font-sans text-sm text-brand-dark/70 leading-relaxed">
                {t("pickup_value_1_desc")}
              </p>
            </div>
            <div className="bg-white border border-brand-dark/10 p-6">
              <h3 className="font-display font-black text-xl uppercase text-brand-dark leading-tight mb-3">
                {t("pickup_value_2_title")}
              </h3>
              <p className="font-sans text-sm text-brand-dark/70 leading-relaxed">
                {t("pickup_value_2_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-10">
            {t("commercial_overview_how_heading")}
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

      {/* Pricing */}
      <section className="py-12 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl uppercase text-brand-dark leading-none mb-6">
            {t("pickup_pricing_heading")}
          </h2>
          <p className="font-sans text-brand-dark/70 text-base leading-relaxed">
            {t("pickup_pricing_commercial")}
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl uppercase text-brand-dark leading-none mb-8">
            {t("commercial_overview_industries_heading")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.slug}
                className="border border-brand-dark/10 p-5"
              >
                <p className="font-sans font-semibold text-base text-brand-dark">
                  {language === "es" ? industry.nameEs : industry.name}
                </p>
                <p className="font-sans text-sm text-brand-dark/55 mt-1">
                  {language === "es" ? industry.itemsEs : industry.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 bg-brand-dark border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl uppercase text-white leading-none mb-8">
            {t("commercial_overview_area_heading")}
          </h2>
          <ServiceAreaMap theme="dark" />
        </div>
      </section>

      {/* FAQ */}
      <SeoFaq
        items={faqItems}
        eyebrow={t("faq_eyebrow")}
        heading={t("faq_heading")}
      />

      {/* Quote Form */}
      <section className="py-16 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-10">
            {t("commercial_quote_form_heading")}
          </h2>
          <CommercialQuoteForm />
        </div>
      </section>

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
