"use client";

import { useTranslation } from "@/contexts/LanguageContext";

export default function AppDownload() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white border-y border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left */}
          <div className="max-w-xl">
            <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-3">
              {t("app_eyebrow")}
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-brand-dark leading-none mb-4">
              {t("app_heading")}
            </h2>
            <p className="font-sans text-brand-dark/65 text-base leading-relaxed">
              {t("app_desc")}
            </p>
          </div>

          {/* Right — CTA */}
          <div className="shrink-0">
            <a
              href="https://airwallet.net/user-home"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-dark text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-brand-blue transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
              </svg>
              {t("app_cta")}
            </a>
            <p className="font-sans text-xs text-brand-dark/40 mt-3 tracking-wide">
              {t("app_note")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
