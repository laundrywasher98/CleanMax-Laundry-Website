"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { cities } from "@/data/cities";
import { localizeHref } from "@/lib/href";

const sortedCities = [...cities].sort((a, b) => a.name.localeCompare(b.name));

export default function LocationsIndexContent() {
  const { language } = useTranslation();
  const isEs = language === "es";
  const lh = (path: string) => localizeHref(path, language);

  return (
    <main className="pt-24 pb-20 bg-white">
      {/* Hero */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            {isEs ? "Áreas de Servicio" : "Service Areas"}
          </p>
          <h1 className="font-display font-black text-4xl md:text-6xl uppercase text-white leading-none mb-6">
            {isEs ? "Lavandería Cerca de Ti" : "Laundromat Near You"}
          </h1>
          <p className="font-sans text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            {isEs
              ? "CleanMax Laundry está ubicada en Pomona, CA, y ofrece lavandería de autoservicio, lavado y doblado, y servicio comercial para toda la comunidad del Valle de San Gabriel y el Inland Empire."
              : "CleanMax Laundry is located in Pomona, CA, offering self-service laundry, wash & fold, and commercial pickup & delivery to communities across the San Gabriel Valley and Inland Empire. Find your nearest service area below."}
          </p>
        </div>
      </section>

      {/* City grid */}
      <section className="py-16 bg-brand-surface">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display font-black text-2xl md:text-3xl uppercase text-brand-dark leading-none mb-10 text-center">
            {isEs ? "Todas las Ciudades que Servimos" : "All Cities We Serve"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCities.map((city) => (
              <div
                key={city.slug}
                className="bg-white border border-brand-dark/10 p-6 hover:border-brand-blue/40 hover:shadow-sm transition-all"
              >
                <Link
                  href={lh(`/locations/${city.slug}`)}
                  className="block font-display font-black text-xl uppercase text-brand-dark hover:text-brand-blue transition-colors mb-1"
                >
                  {city.name}
                </Link>
                <p className="font-sans text-xs text-brand-dark/50 mb-4">
                  {city.county} {isEs ? "Condado" : "County"} · {city.zip}
                </p>

                {/* Sub-service links */}
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={lh(`/laundromat/${city.slug}`)}
                    className="inline-block font-sans text-xs font-semibold uppercase tracking-wider text-brand-blue border border-brand-blue/30 px-3 py-1.5 hover:bg-brand-blue hover:text-white transition-colors"
                  >
                    {isEs ? "Lavandería" : "Laundromat"}
                  </Link>
                  <Link
                    href={lh(`/wash-and-fold/${city.slug}`)}
                    className="inline-block font-sans text-xs font-semibold uppercase tracking-wider text-brand-blue border border-brand-blue/30 px-3 py-1.5 hover:bg-brand-blue hover:text-white transition-colors"
                  >
                    {isEs ? "Lavado y Doblado" : "Wash & Fold"}
                  </Link>
                  <Link
                    href={lh(`/commercial-laundry/${city.slug}`)}
                    className="inline-block font-sans text-xs font-semibold uppercase tracking-wider text-brand-blue border border-brand-blue/30 px-3 py-1.5 hover:bg-brand-blue hover:text-white transition-colors"
                  >
                    {isEs ? "Comercial" : "Commercial"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-4">
            {isEs ? "¿No ves tu ciudad?" : "Don't see your city?"}
          </h2>
          <p className="font-sans text-brand-dark/60 text-lg mb-8">
            {isEs
              ? "Es posible que podamos atenderte de todos modos. Contáctanos para verificar disponibilidad en tu área."
              : "We may still be able to serve you. Contact us to check availability in your area."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:909-248-7305"
              className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-brand-blue transition-colors"
            >
              (909) 248-7305
            </a>
            <Link
              href="/commercial-quote"
              className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              {isEs ? "Solicitar Cotización →" : "Request a Quote →"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
