"use client";

import Script from "next/script";
import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

// Replace ELFSIGHT_APP_ID with your actual Elfsight app ID from elfsight.com after signing up for free

export default function TestimonialsContent() {
  const { t } = useTranslation();

  return (
    <main>
      {/* Elfsight Google Reviews widget script */}
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            CleanMax Laundry · Pomona, CA
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none mb-6">
            {t("testimonials_heading")}
          </h1>
          <p className="font-sans text-brand-dark/60 text-lg leading-relaxed max-w-xl mx-auto">
            {t("testimonials_rating_text")}
          </p>
        </div>
      </section>

      {/* Elfsight widget */}
      <section className="py-16 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="elfsight-app-ELFSIGHT_APP_ID" data-elfsight-app-lazy />
        </div>
      </section>

      {/* Disclaimer + CTAs */}
      <section className="py-12 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-sans text-xs text-brand-dark/40 mb-8">
            {t("testimonials_disclaimer")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://share.google/qOCjH4ihGEyqeLJLT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-brand-blue transition-colors"
            >
              {t("testimonials_cta_read")}
            </a>
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsdiY1GsDSg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              {t("testimonials_cta_leave")}
            </a>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-none mb-6">
            {t("testimonials_closing_heading")}
          </h2>
          <p className="font-sans text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            {t("testimonials_closing_text")}
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Visit CleanMax Laundry
          </Link>
        </div>
      </section>
    </main>
  );
}
