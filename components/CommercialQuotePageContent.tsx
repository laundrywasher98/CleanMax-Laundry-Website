"use client";

import { useTranslation } from "@/contexts/LanguageContext";
import CommercialQuoteForm from "@/components/CommercialQuoteForm";
import SeoFaq from "@/components/seo/SeoFaq";

export default function CommercialQuotePageContent() {
  const { t } = useTranslation();
  const faqItems = [
    { q: t("quote_faq_q1"), a: t("quote_faq_a1") },
    { q: t("quote_faq_q2"), a: t("quote_faq_a2") },
    { q: t("quote_faq_q3"), a: t("quote_faq_a3") },
  ];

  return (
    <>
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            {t("commercial_overview_eyebrow")}
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none mb-6">
            {t("quote_page_heading")}
          </h1>
          <p className="font-sans text-brand-dark/70 text-lg leading-relaxed max-w-2xl">
            {t("quote_page_intro")}
          </p>
        </div>
      </section>

      <section className="py-12 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <CommercialQuoteForm />
        </div>
      </section>

      <SeoFaq items={faqItems} heading={t("quote_faq_heading")} />
    </>
  );
}
