"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { interpolate } from "@/lib/interpolate";
import SeoCta from "@/components/seo/SeoCta";
import { cities, type City } from "@/data/cities";
import { industries } from "@/data/industries";

interface Props {
  city: City;
  nearbyCities: City[];
}

export default function LocationHubContent({ city, nearbyCities }: Props) {
  const { t, language } = useTranslation();
  const isPomona = city.slug === "pomona";
  const vars = { city: city.name, county: city.county, desc: city.description };
  const ip = (key: Parameters<typeof t>[0]) => interpolate(t(key), vars);

  const serviceCards = [
    {
      title: t("services_self_title"),
      desc: t("services_self_desc"),
      detail: t("services_self_detail"),
      href: `/laundromat/${city.slug}`,
    },
    {
      title: t("services_wf_title"),
      desc: t("services_wf_desc"),
      detail: t("services_wf_detail"),
      href: `/wash-and-fold/${city.slug}`,
    },
    {
      title: t("services_commercial_title"),
      desc: t("services_commercial_desc"),
      detail: t("services_commercial_detail"),
      href: `/commercial-laundry/${city.slug}`,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            {city.county} County
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none mb-6">
            {isPomona
              ? `Laundry Services in Pomona, CA`
              : ip("seo_hub_serving_h1")}
          </h1>
          <p className="font-sans text-brand-dark/70 text-lg leading-relaxed max-w-2xl">
            {ip("seo_hub_intro")}
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-10">
            {ip("seo_hub_services_heading")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group border border-brand-dark/10 bg-white p-6 hover:border-brand-blue transition-colors"
              >
                <h3 className="font-display font-black text-2xl uppercase text-brand-dark group-hover:text-brand-blue transition-colors leading-tight mb-3">
                  {card.title}
                </h3>
                <p className="font-sans text-sm text-brand-dark/60 leading-relaxed mb-4">
                  {card.desc}
                </p>
                <p className="font-sans font-semibold text-xs uppercase tracking-wide text-brand-blue">
                  {card.detail}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial section */}
      <section className="py-16 bg-white border-t border-brand-dark/10">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl uppercase text-brand-dark leading-none mb-4">
            {ip("seo_hub_commercial_heading")}
          </h2>
          <p className="font-sans text-brand-dark/70 text-base leading-relaxed mb-6 max-w-2xl">
            {ip("seo_hub_commercial_desc")}
          </p>

          {/* Industry links */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/commercial-laundry/${ind.slug}/${city.slug}`}
                className="border border-brand-dark/10 p-3 text-center hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                <span className="font-sans font-semibold text-sm text-brand-dark hover:text-brand-blue transition-colors">
                  {language === "es" ? ind.nameEs : ind.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby cities */}
      {nearbyCities.length > 0 && (
        <section className="py-12 bg-brand-surface border-t border-brand-dark/10">
          <div className="max-w-4xl mx-auto px-6">
            <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-dark/40 mb-4">
              {t("seo_hub_nearby_label")}
            </p>
            <div className="flex flex-wrap gap-3">
              {nearbyCities.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/locations/${nearby.slug}`}
                  className="font-sans text-sm text-brand-blue hover:opacity-70 transition-opacity underline underline-offset-2"
                >
                  {nearby.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SeoCta />
    </>
  );
}
