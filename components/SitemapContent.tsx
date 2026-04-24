"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { cities } from "@/data/cities";
import { industries } from "@/data/industries";
import { blogPosts } from "@/data/blogPosts";
import { localizeHref } from "@/lib/href";

const sortedCities = [...cities].sort((a, b) => a.name.localeCompare(b.name));

type MainLink = { path: string; en: string; es: string };

const mainLinks: MainLink[] = [
  { path: "/", en: "Home", es: "Inicio" },
  { path: "/about", en: "About CleanMax", es: "Sobre CleanMax" },
  { path: "/locations", en: "Service Areas", es: "Áreas de Servicio" },
  { path: "/commercial-laundry", en: "Commercial Laundry", es: "Lavandería Comercial" },
  { path: "/commercial-quote", en: "Request a Commercial Quote", es: "Solicitar Cotización Comercial" },
  { path: "/wash-and-fold/pricing", en: "Wash & Fold Pricing", es: "Precios de Lavado y Doblado" },
  { path: "/comforters-large-loads", en: "Comforters & Large Loads", es: "Edredones y Cargas Grandes" },
  { path: "/testimonials", en: "Testimonials", es: "Testimonios" },
  { path: "/blog", en: "Blog", es: "Blog" },
];

export default function SitemapContent() {
  const { language } = useTranslation();
  const isEs = language === "es";
  const lh = (path: string) => localizeHref(path, language);

  const sortedBlogPosts = [...blogPosts].sort((a, b) => b.publishDate.localeCompare(a.publishDate));

  return (
    <main className="pt-24 pb-20 bg-white">
      {/* Hero */}
      <section className="bg-brand-dark py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            {isEs ? "Mapa del Sitio" : "Site Map"}
          </p>
          <h1 className="font-display font-black text-4xl md:text-6xl uppercase text-white leading-none mb-6">
            {isEs ? "Todas las Páginas" : "All Pages"}
          </h1>
          <p className="font-sans text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            {isEs
              ? "Una lista completa de todo en CleanMax Laundry — páginas principales, áreas de servicio, lavandería comercial por industria y todos los artículos del blog."
              : "A full index of everything at CleanMax Laundry — main pages, service areas, commercial laundry by industry, and every blog post."}
          </p>
        </div>
      </section>

      {/* Main pages */}
      <section className="py-16 bg-brand-surface">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display font-black text-2xl md:text-3xl uppercase text-brand-dark leading-none mb-8">
            {isEs ? "Páginas Principales" : "Main Pages"}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {mainLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={lh(link.path)}
                  className="block bg-white border border-brand-dark/10 px-5 py-4 font-sans text-sm font-semibold text-brand-dark hover:border-brand-blue/40 hover:text-brand-blue transition-colors"
                >
                  {isEs ? link.es : link.en}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service areas by city */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display font-black text-2xl md:text-3xl uppercase text-brand-dark leading-none mb-3">
            {isEs ? "Por Ciudad" : "By City"}
          </h2>
          <p className="font-sans text-brand-dark/60 text-sm mb-8">
            {isEs
              ? "Cada ciudad tiene cuatro páginas dedicadas: información local, lavandería de autoservicio, lavado y doblado, y lavandería comercial."
              : "Each city has four dedicated pages: local info, self-service laundromat, wash & fold, and commercial laundry."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCities.map((city) => (
              <div
                key={city.slug}
                className="bg-white border border-brand-dark/10 p-5"
              >
                <h3 className="font-display font-black text-lg uppercase text-brand-dark mb-3">
                  {city.name}
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href={lh(`/locations/${city.slug}`)}
                      className="font-sans text-sm text-brand-dark/70 hover:text-brand-blue transition-colors"
                    >
                      {isEs ? `Información de ${city.name}` : `${city.name} Location`}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={lh(`/laundromat/${city.slug}`)}
                      className="font-sans text-sm text-brand-dark/70 hover:text-brand-blue transition-colors"
                    >
                      {isEs ? `Lavandería en ${city.name}` : `Laundromat in ${city.name}`}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={lh(`/wash-and-fold/${city.slug}`)}
                      className="font-sans text-sm text-brand-dark/70 hover:text-brand-blue transition-colors"
                    >
                      {isEs ? `Lavado y Doblado en ${city.name}` : `Wash & Fold in ${city.name}`}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={lh(`/commercial-laundry/${city.slug}`)}
                      className="font-sans text-sm text-brand-dark/70 hover:text-brand-blue transition-colors"
                    >
                      {isEs ? `Lavandería Comercial en ${city.name}` : `Commercial Laundry in ${city.name}`}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial laundry by industry */}
      <section className="py-16 bg-brand-surface">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display font-black text-2xl md:text-3xl uppercase text-brand-dark leading-none mb-3">
            {isEs ? "Lavandería Comercial por Industria" : "Commercial Laundry by Industry"}
          </h2>
          <p className="font-sans text-brand-dark/60 text-sm mb-8">
            {isEs
              ? "Páginas especializadas para cada industria en cada ciudad que servimos."
              : "Dedicated pages for every industry across every city we serve."}
          </p>
          <div className="space-y-10">
            {industries.map((industry) => (
              <div key={industry.slug}>
                <h3 className="font-display font-black text-xl uppercase text-brand-dark mb-4 border-b border-brand-dark/10 pb-2">
                  {isEs ? industry.nameEs : industry.name}
                </h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-2">
                  {sortedCities.map((city) => (
                    <li key={`${industry.slug}-${city.slug}`}>
                      <Link
                        href={lh(`/commercial-laundry/${industry.slug}/${city.slug}`)}
                        className="font-sans text-sm text-brand-dark/70 hover:text-brand-blue transition-colors"
                      >
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display font-black text-2xl md:text-3xl uppercase text-brand-dark leading-none mb-8">
            {isEs ? "Blog" : "Blog"}
          </h2>
          <ul className="space-y-3">
            {sortedBlogPosts.map((post) => (
              <li
                key={post.slug}
                className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 border-b border-brand-dark/10 pb-3"
              >
                <span className="font-sans text-xs font-mono text-brand-dark/40 shrink-0 sm:w-24">
                  {post.publishDate}
                </span>
                <Link
                  href={lh(`/blog/${post.slug}`)}
                  className="font-sans text-sm text-brand-dark hover:text-brand-blue transition-colors"
                >
                  {isEs ? post.titleEs : post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Machine-readable sitemap pointer */}
      <section className="py-12 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-sans text-sm text-brand-dark/60 mb-2">
            {isEs
              ? "¿Buscando el sitemap XML para herramientas de rastreo?"
              : "Looking for the XML sitemap for crawlers?"}
          </p>
          <a
            href="/sitemap.xml"
            className="inline-block font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue hover:opacity-70 transition-opacity"
          >
            /sitemap.xml →
          </a>
        </div>
      </section>
    </main>
  );
}
