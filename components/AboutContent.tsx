"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

const GOOGLE_MAPS_URL = "https://share.google/qOCjH4ihGEyqeLJLT";

export default function AboutContent() {
  const { t } = useTranslation();

  const differentiators = [
    t("about_diff_1"),
    t("about_diff_2"),
    t("about_diff_3"),
    t("about_diff_4"),
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            CleanMax Laundry · Pomona, CA
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none mb-8">
            {t("about_heading")}
          </h1>
          <div className="space-y-5">
            <p className="font-sans text-brand-dark/70 text-lg leading-relaxed">
              {t("about_p1")}
            </p>
            <p className="font-sans text-brand-dark/70 text-base leading-relaxed">
              {t("about_p2")}
            </p>
            <p className="font-sans text-brand-dark/70 text-base leading-relaxed">
              {t("about_p3")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-6">
            {t("about_mission_heading")}
          </h2>
          <p className="font-sans text-brand-dark/70 text-base leading-relaxed max-w-2xl">
            {t("about_mission_text")}
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-10">
            {t("about_different_heading")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 border border-brand-dark/10">
                <span className="font-display font-black text-3xl text-brand-blue leading-none shrink-0">
                  {i + 1}
                </span>
                <p className="font-sans font-semibold text-base text-brand-dark leading-snug pt-1">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serve area */}
      <section className="py-16 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-6">
            {t("about_serve_heading")}
          </h2>
          <p className="font-sans text-brand-dark/70 text-base leading-relaxed max-w-2xl">
            {t("about_serve_text")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/laundromat/pomona"
              className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-brand-blue transition-colors"
            >
              {t("nav_self_service_laundry")}
            </Link>
            <Link
              href="/wash-and-fold/pomona"
              className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              {t("nav_wash_and_fold")}
            </Link>
            <Link
              href="/commercial-laundry"
              className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              {t("nav_commercial_laundry")}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-white leading-none mb-6">
            {t("about_cta_heading")}
          </h2>
          <p className="font-sans text-white/60 text-base mb-2">
            {t("about_address")}
          </p>
          <p className="font-sans text-white/60 text-base mb-8">
            {t("about_hours")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-blue text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-brand-dark transition-colors"
            >
              {t("about_directions_btn")}
            </a>
            <a
              href="tel:9092487305"
              className="inline-flex items-center gap-2 text-white/60 font-sans font-semibold text-sm tracking-wide hover:text-white transition-colors py-4"
            >
              (909) 248-7305
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
