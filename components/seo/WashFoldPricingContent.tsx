"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import SeoFaq from "@/components/seo/SeoFaq";
import { localizeHref } from "@/lib/href";

const GOOGLE_MAPS_URL = "https://share.google/qOCjH4ihGEyqeLJLT";

export default function WashFoldPricingContent() {
  const { t, language } = useTranslation();
  const comfortersHref = localizeHref("/comforters-large-loads", language);
  const faqItems = [
    { q: t("pricing_faq_q1"), a: t("pricing_faq_a1") },
    { q: t("pricing_faq_q2"), a: t("pricing_faq_a2") },
    { q: t("pricing_faq_q3"), a: t("pricing_faq_a3") },
    { q: t("pricing_faq_q4"), a: t("pricing_faq_a4") },
  ];

  const pricing = [
    {
      turnaround: t("pricing_next_day"),
      weekday: "$1.50",
      weekend: "$1.75",
    },
    {
      turnaround: t("pricing_same_day"),
      weekday: "$1.75",
      weekend: "$2.00",
    },
  ];

  const steps = [
    t("pricing_step1"),
    t("pricing_step2"),
    t("pricing_step3"),
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            {t("pricing_page_eyebrow")}
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none mb-3">
            {t("pricing_page_heading")}
          </h1>
          <p className="font-sans text-brand-dark/50 text-base">
            {t("pricing_subtitle")}
          </p>
          <p className="font-sans text-brand-dark/40 text-sm mt-2">
            {t("fluff_fold_also_known")}
          </p>
        </div>
      </section>

      {/* Pricing table */}
      <section className="py-12 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl uppercase text-brand-dark leading-none mb-8">
            {t("pricing_table_heading")}
          </h2>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-brand-dark/20">
                  <th className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-dark/40 pb-3 pr-8">
                    {t("pricing_turnaround")}
                  </th>
                  <th className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-dark/40 pb-3 pr-8">
                    {t("pricing_weekday")}
                  </th>
                  <th className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-dark/40 pb-3">
                    {t("pricing_weekend")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-brand-dark/10 ${i === 0 ? "bg-white" : ""}`}
                  >
                    <td className="font-sans font-semibold text-base text-brand-dark py-5 pr-8">
                      {row.turnaround}
                    </td>
                    <td className="font-display font-black text-3xl text-brand-dark py-5 pr-8">
                      {row.weekday}
                      <span className="font-sans font-normal text-sm text-brand-dark/40">
                        {t("pricing_per_lb")}
                      </span>
                    </td>
                    <td className="font-display font-black text-3xl text-brand-dark py-5">
                      {row.weekend}
                      <span className="font-sans font-normal text-sm text-brand-dark/40">
                        {t("pricing_per_lb")}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Minimum */}
          <div className="mt-6 flex items-center gap-3 bg-brand-blue/10 border border-brand-blue/20 rounded px-5 py-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-brand-blue shrink-0"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-sans font-semibold text-sm text-brand-dark">
                {t("pricing_minimum_note")}
              </p>
              <p className="font-sans text-xs text-brand-dark/60 mt-0.5">
                {t("pricing_minimum_detail")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-12 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl uppercase text-brand-dark leading-none mb-6">
            {t("pricing_hours_heading")}
          </h2>
          <p className="font-sans text-xl text-brand-dark/80">
            {t("pricing_dropoff_hours")}
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl uppercase text-brand-dark leading-none mb-10">
            {t("pricing_how_it_works")}
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

      {/* FAQ */}
      <SeoFaq items={faqItems} heading={t("pricing_faq_heading")} />

      {/* Related pages */}
      <section className="py-8 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Link
            href={comfortersHref}
            className="font-sans text-sm text-brand-blue hover:underline"
          >
            {t("pricing_faq_q4_link_label")} →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-white leading-none mb-4">
            {t("pricing_cta_heading")}
          </h2>
          <p className="font-sans text-white/60 text-base mb-10">
            {t("pricing_cta_text")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-blue text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-brand-dark transition-colors"
            >
              {t("seo_cta_directions")}
            </a>
            <a
              href="tel:9092487305"
              className="inline-flex items-center gap-2 text-white/60 font-sans font-semibold text-sm tracking-wide hover:text-white transition-colors py-4"
            >
              {t("seo_cta_call")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
