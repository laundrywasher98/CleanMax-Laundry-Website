"use client";

import { useTranslation } from "@/contexts/LanguageContext";

const GOOGLE_MAPS_URL = "https://share.google/qOCjH4ihGEyqeLJLT";

interface SeoCtaProps {
  heading?: string;
  text?: string;
}

export default function SeoCta({ heading, text }: SeoCtaProps) {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white border-t border-brand-dark/10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-brand-dark leading-none mb-4">
          {heading ?? t("seo_cta_heading")}
        </h2>
        <p className="font-sans text-brand-dark/60 text-base mb-10">
          {text ?? t("seo_cta_address")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-dark text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-brand-blue transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.076 3.208-4.512 3.208-7.327a7.5 7.5 0 00-15 0c0 2.815 1.264 5.25 3.208 7.327a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            {t("seo_cta_directions")}
          </a>
          <a
            href="tel:9092487305"
            className="inline-flex items-center gap-2 border border-brand-dark/20 text-brand-dark font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-brand-blue hover:text-brand-blue transition-colors"
          >
            {t("seo_cta_call")}
          </a>
        </div>
      </div>
    </section>
  );
}
