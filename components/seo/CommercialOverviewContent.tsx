"use client";

import { useTranslation } from "@/contexts/LanguageContext";
import ServiceAreaMap from "@/components/seo/ServiceAreaMap";
import CommercialQuoteForm from "@/components/CommercialQuoteForm";
import { industries } from "@/data/industries";

export default function CommercialOverviewContent() {
  const { t, language } = useTranslation();

  const steps = [
    t("commercial_overview_step1"),
    t("commercial_overview_step2"),
    t("commercial_overview_step3"),
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
            <a
              href="mailto:laundry@cleanmaxlaundry.com"
              className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-brand-blue transition-colors"
            >
              {t("commercial_overview_email_cta")}
            </a>
            <a
              href="tel:909-248-7305"
              className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              {t("commercial_overview_call_cta")} — (909) 248-7305
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-brand-surface border-t border-brand-dark/10">
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

      {/* Quote Form */}
      <section className="py-16 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-10">
            {t("commercial_quote_form_heading")}
          </h2>
          <CommercialQuoteForm />
        </div>
      </section>
    </>
  );
}
