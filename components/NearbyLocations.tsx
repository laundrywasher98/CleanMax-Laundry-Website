"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { cities } from "@/data/cities";
import { localizeHref } from "@/lib/href";

// Top 5 cities shown on homepage
const featuredCities = cities.slice(0, 5);

export default function NearbyLocations() {
  const { t, language } = useTranslation();
  const lh = (path: string) => localizeHref(path, language);

  return (
    <section className="py-16 bg-brand-surface border-t border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-2">
              {t("footer_service_areas")}
            </p>
            <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none">
              {t("nav_locations")}
            </h2>
          </div>
          <Link
            href={lh("/locations/pomona")}
            className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue hover:opacity-70 transition-opacity whitespace-nowrap"
          >
            {t("nav_view_all_cities")}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {featuredCities.map((city) => (
            <Link
              key={city.slug}
              href={lh(`/locations/${city.slug}`)}
              className="group border border-brand-dark/10 bg-white p-5 hover:border-brand-blue transition-colors"
            >
              <p className="font-display font-black text-xl uppercase text-brand-dark group-hover:text-brand-blue transition-colors leading-tight">
                {city.name}
              </p>
              <p className="font-sans text-xs text-brand-dark/40 mt-1">
                {city.county} County
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
