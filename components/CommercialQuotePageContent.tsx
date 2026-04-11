"use client";

import { useTranslation } from "@/contexts/LanguageContext";
import CommercialQuoteForm from "@/components/CommercialQuoteForm";

export default function CommercialQuotePageContent() {
  const { t } = useTranslation();

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
    </>
  );
}
