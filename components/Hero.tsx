"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { localizeHref } from "@/lib/href";

const GOOGLE_MAPS_URL = "https://share.google/qOCjH4ihGEyqeLJLT";

export default function Hero() {
  const { t, language } = useTranslation();

  const serviceLinks = [
    { label: t("hero_link_self_serve"), href: localizeHref("/laundromat/pomona", language) },
    { label: t("hero_link_dropoff"), href: localizeHref("/wash-and-fold/pomona", language) },
    { label: t("hero_link_commercial"), href: localizeHref("/commercial-laundry", language) },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/cleanmax-laundromat-pomona-interior-wide-02.webp"
        alt="CleanMax Laundromat interior in Pomona, CA — spacious, bright, rows of modern Wascomat washers and IPSO dryers"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-brand-dark/65" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-6">
          {t("hero_location")}
        </p>
        <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-none tracking-tight mb-6">
          {t("hero_headline")}
        </h1>
        <nav
          aria-label="Primary services"
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-8 font-display font-bold uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl"
        >
          {serviceLinks.map((link, idx) => (
            <span key={link.href} className="flex items-center gap-x-4">
              {idx > 0 && (
                <span aria-hidden="true" className="text-brand-blue">·</span>
              )}
              <Link
                href={link.href}
                className="hover:underline underline-offset-8 decoration-2 transition-colors hover:text-brand-blue"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
        <p className="font-sans font-medium text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
          {t("hero_subheadline")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-brand-dark transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            {t("hero_cta_directions")}
          </a>
          <a
            href="https://airwallet.net/user-home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-brand-dark transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
              <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
            </svg>
            {t("hero_cta_app")}
          </a>
        </div>

        {/* Hours pill */}
        <div className="mt-12 inline-flex items-center gap-3 bg-white/10 border border-white/20 px-6 py-3 text-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" aria-hidden="true" />
          <span className="font-sans text-white/90">{t("hero_hours_pill")}</span>
        </div>
      </div>
    </section>
  );
}
