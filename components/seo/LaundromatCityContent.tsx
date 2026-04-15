"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { interpolate } from "@/lib/interpolate";
import SeoFaq from "@/components/seo/SeoFaq";
import SeoCta from "@/components/seo/SeoCta";
import SeoWhyCleanMax from "@/components/seo/SeoWhyCleanMax";
import CityLocalContext from "@/components/seo/CityLocalContext";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { City } from "@/data/cities";

interface Props {
  city: City;
}

export default function LaundromatCityContent({ city }: Props) {
  const { t } = useTranslation();
  const isPomona = city.slug === "pomona";
  const vars = { city: city.name, county: city.county, desc: city.description };
  const ip = (key: Parameters<typeof t>[0]) => interpolate(t(key), vars);

  const details = [
    { label: "Hours", value: t("seo_laundromat_hours") },
    { label: "Equipment", value: t("seo_laundromat_machines") },
    { label: "Payment", value: t("seo_laundromat_payment") },
  ];

  const faqItems = [
    { q: ip("seo_laundromat_faq_q1"), a: ip("seo_laundromat_faq_a1") },
    { q: ip("seo_laundromat_faq_q2"), a: ip("seo_laundromat_faq_a2") },
    { q: ip("seo_laundromat_faq_q3"), a: ip("seo_laundromat_faq_a3") },
    { q: ip("seo_laundromat_faq_q4"), a: ip("seo_laundromat_faq_a4") },
    { q: ip("seo_laundromat_faq_q5"), a: ip("seo_laundromat_faq_a5") },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: "Laundromat", href: "/locations" },
              { label: city.name },
            ]}
          />
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            {city.name}, CA
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none mb-6">
            {isPomona
              ? `Self-Service Laundromat in Pomona, CA`
              : `Self-Service Laundromat Serving ${city.name}, CA`}
          </h1>
          <p className="font-sans text-brand-dark/70 text-lg leading-relaxed max-w-2xl">
            {ip("seo_laundromat_intro")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href="https://share.google/qOCjH4ihGEyqeLJLT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-brand-blue transition-colors"
            >
              {t("seo_cta_directions")}
            </a>
            <Link
              href="/wash-and-fold/pricing"
              className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              {t("seo_view_pricing")}
            </Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-12 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl uppercase text-brand-dark leading-none mb-8">
            {t("seo_laundromat_details_heading")}
          </h2>
          <dl className="space-y-4">
            {details.map((d) => (
              <div key={d.label} className="flex flex-col sm:flex-row sm:gap-6">
                <dt className="font-sans font-semibold text-sm text-brand-dark/40 w-28 shrink-0 uppercase tracking-wide">
                  {d.label}
                </dt>
                <dd className="font-sans text-base text-brand-dark/80">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* City paragraph */}
      <section className="py-12 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-sans text-brand-dark/70 text-base leading-relaxed">
            {ip("seo_laundromat_city_para")}
          </p>
        </div>
      </section>

      {/* Non-Pomona: location callout + How It Works */}
      {!isPomona && (
        <>
          {/* Callout box */}
          <section className="py-10 bg-brand-surface border-t border-brand-dark/10">
            <div className="max-w-3xl mx-auto px-6">
              <div className="border-l-4 border-brand-orange bg-white px-6 py-5">
                <p className="font-sans font-semibold text-sm text-brand-dark leading-relaxed">
                  {ip("seo_laundromat_pomona_callout")}
                </p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-16 bg-white border-t border-brand-dark/10">
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-10">
                {ip("seo_laundromat_how_it_works_heading")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="border border-brand-dark/10 p-6">
                  <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-2">
                    Path A
                  </p>
                  <h3 className="font-display font-black text-2xl uppercase text-brand-dark leading-tight mb-3">
                    {t("seo_laundromat_path_a_heading")}
                  </h3>
                  <p className="font-sans text-sm text-brand-dark/70 leading-relaxed">
                    {ip("seo_laundromat_path_a_desc")}
                  </p>
                </div>
                <div className="border border-brand-dark/10 p-6">
                  <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-orange mb-2">
                    Path B
                  </p>
                  <h3 className="font-display font-black text-2xl uppercase text-brand-dark leading-tight mb-3">
                    {t("seo_laundromat_path_b_heading")}
                  </h3>
                  <p className="font-sans text-sm text-brand-dark/70 leading-relaxed">
                    {ip("seo_laundromat_path_b_desc")}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <CityLocalContext citySlug={city.slug} cityName={city.name} variant="service" />

      <SeoWhyCleanMax />

      <SeoFaq
        items={faqItems}
        eyebrow={t("faq_eyebrow")}
        heading={t("faq_heading")}
      />

      <SeoCta />
    </>
  );
}
