"use client";

import Link from "next/link";
import { useTranslation, type TranslationKey } from "@/contexts/LanguageContext";
import { interpolate } from "@/lib/interpolate";

export type CityService = "laundromat" | "wash-and-fold" | "commercial-laundry";

interface Props {
  citySlug: string;
  cityName: string;
  currentService: CityService;
}

type SiblingDef = {
  service: CityService;
  href: (slug: string) => string;
  titleKey: TranslationKey;
  descKey: TranslationKey;
};

const SIBLINGS: SiblingDef[] = [
  {
    service: "laundromat",
    href: (slug) => `/laundromat/${slug}`,
    titleKey: "services_self_title",
    descKey: "services_self_desc",
  },
  {
    service: "wash-and-fold",
    href: (slug) => `/wash-and-fold/${slug}`,
    titleKey: "services_wf_title",
    descKey: "services_wf_desc",
  },
  {
    service: "commercial-laundry",
    href: (slug) => `/commercial-laundry/${slug}`,
    titleKey: "services_commercial_title",
    descKey: "services_commercial_desc",
  },
];

export default function CitySiblingServices({
  citySlug,
  cityName,
  currentService,
}: Props) {
  const { t, language } = useTranslation();
  const others = SIBLINGS.filter((s) => s.service !== currentService);
  const heading = interpolate(t("seo_siblings_heading"), { city: cityName });
  const intro = interpolate(t("seo_siblings_intro"), { city: cityName });
  const prefix = language === "es" ? "/es" : "";

  return (
    <section className="py-16 bg-white border-t border-brand-dark/10">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-display font-black text-3xl uppercase text-brand-dark leading-none mb-4">
          {heading}
        </h2>
        <p className="font-sans text-brand-dark/70 text-base leading-relaxed mb-8 max-w-2xl">
          {intro}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {others.map((sibling) => (
            <Link
              key={sibling.service}
              href={`${prefix}${sibling.href(citySlug)}`}
              className="group border border-brand-dark/10 p-6 hover:border-brand-blue transition-colors"
            >
              <h3 className="font-display font-black text-xl uppercase text-brand-dark leading-tight mb-2">
                {t(sibling.titleKey)}
              </h3>
              <p className="font-sans text-sm text-brand-dark/70 leading-relaxed mb-4 line-clamp-3">
                {t(sibling.descKey)}
              </p>
              <span className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue group-hover:underline">
                {t("seo_siblings_cta")}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
