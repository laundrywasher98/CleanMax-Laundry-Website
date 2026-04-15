"use client";

import Link from "next/link";
import { useTranslation, type TranslationKey } from "@/contexts/LanguageContext";
import SeoFaq from "@/components/seo/SeoFaq";
import Breadcrumbs from "@/components/Breadcrumbs";

const ITEM_KEYS: TranslationKey[] = [
  "comforters_what_item_1",
  "comforters_what_item_2",
  "comforters_what_item_3",
  "comforters_what_item_4",
  "comforters_what_item_5",
  "comforters_what_item_6",
  "comforters_what_item_7",
  "comforters_what_item_8",
];

export default function ComfortersLargeLoadsContent() {
  const { t, language } = useTranslation();
  const prefix = language === "es" ? "/es" : "";

  const faqItems = [
    { q: t("comforters_faq_q1"), a: t("comforters_faq_a1") },
    { q: t("comforters_faq_q2"), a: t("comforters_faq_a2") },
    { q: t("comforters_faq_q3"), a: t("comforters_faq_a3") },
    { q: t("comforters_faq_q4"), a: t("comforters_faq_a4") },
    { q: t("comforters_faq_q5"), a: t("comforters_faq_a5") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Breadcrumbs items={[{ label: t("comforters_eyebrow") }]} />
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            {t("comforters_eyebrow")}
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none mb-6">
            {t("comforters_h1")}
          </h1>
          <p className="font-sans text-brand-dark/70 text-lg leading-relaxed max-w-2xl">
            {t("comforters_intro")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href={`${prefix}/wash-and-fold/pomona`}
              className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-brand-blue transition-colors"
            >
              {t("services_wf_title")}
            </Link>
            <a
              href="https://share.google/qOCjH4ihGEyqeLJLT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              {t("seo_cta_directions")}
            </a>
          </div>
        </div>
      </section>

      {/* Why not home washer */}
      <section className="py-16 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-6">
            {t("comforters_why_heading")}
          </h2>
          <p className="font-sans text-brand-dark/70 text-base leading-relaxed">
            {t("comforters_why_body")}
          </p>
        </div>
      </section>

      {/* What we wash */}
      <section className="py-16 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-8">
            {t("comforters_what_heading")}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {ITEM_KEYS.map((key) => (
              <li
                key={key}
                className="font-sans text-base text-brand-dark/80 leading-relaxed flex items-start gap-3"
              >
                <span className="text-brand-blue font-bold shrink-0 mt-0.5">
                  ✓
                </span>
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Two options */}
      <section className="py-16 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-8">
            {t("comforters_options_heading")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`${prefix}/laundromat/pomona`}
              className="bg-white border border-brand-dark/10 p-6 hover:border-brand-blue transition-colors"
            >
              <h3 className="font-display font-black text-xl uppercase text-brand-dark leading-tight mb-3">
                {t("comforters_option_self_title")}
              </h3>
              <p className="font-sans text-sm text-brand-dark/70 leading-relaxed">
                {t("comforters_option_self_desc")}
              </p>
            </Link>
            <Link
              href={`${prefix}/wash-and-fold/pomona`}
              className="bg-white border border-brand-dark/10 p-6 hover:border-brand-blue transition-colors"
            >
              <h3 className="font-display font-black text-xl uppercase text-brand-dark leading-tight mb-3">
                {t("comforters_option_wf_title")}
              </h3>
              <p className="font-sans text-sm text-brand-dark/70 leading-relaxed">
                {t("comforters_option_wf_desc")}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Care notes */}
      <section className="py-12 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl uppercase text-brand-dark leading-none mb-6">
            {t("comforters_care_heading")}
          </h2>
          <p className="font-sans text-brand-dark/70 text-base leading-relaxed">
            {t("comforters_care_body")}
          </p>
        </div>
      </section>

      <SeoFaq
        items={faqItems}
        eyebrow={t("faq_eyebrow")}
        heading={t("faq_heading")}
      />
    </>
  );
}
