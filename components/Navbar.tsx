"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation, type Language } from "@/contexts/LanguageContext";
import { cities } from "@/data/cities";

const GOOGLE_MAPS_URL = "https://share.google/qOCjH4ihGEyqeLJLT";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();
  const pathname = usePathname();
  const isHomePage = pathname === "/" || pathname === "/es";
  const servicesRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (locationsRef.current && !locationsRef.current.contains(e.target as Node)) {
        setLocationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Transparent only on homepage before scrolling; solid on all other pages
  const isTransparent = isHomePage && !scrolled;
  const textColor = isTransparent ? "text-white" : "text-brand-dark";
  const borderColor = isTransparent ? "border-white/10" : "border-brand-dark/10";
  const bgBase = isTransparent ? "bg-transparent" : "bg-white shadow-sm";

  const linkPrefix = language === "es" ? "/es" : "";
  const serviceLinks = [
    { label: t("nav_self_service_laundry"), href: `${linkPrefix}/laundromat/pomona` },
    { label: t("nav_wash_and_fold"), href: `${linkPrefix}/wash-and-fold/pomona` },
    { label: t("nav_wash_fold_pricing"), href: `${linkPrefix}/wash-and-fold/pricing` },
    { label: t("nav_pickup_delivery"), href: `${linkPrefix}/pickup-delivery` },
    { label: t("nav_comforters"), href: `${linkPrefix}/comforters-large-loads` },
    { label: t("nav_commercial_laundry"), href: `${linkPrefix}/commercial-laundry` },
    { label: t("nav_get_quote"), href: `${linkPrefix}/commercial-quote` },
  ];

  // All cities sorted alphabetically for the dropdown
  const allCities = [...cities].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${bgBase}`}
    >
      <nav
        className={`max-w-7xl mx-auto px-6 h-16 flex items-center justify-between border-b ${borderColor}`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0"
          aria-label="CleanMax Laundry home"
        >
          <Image
            src="/images/logo.png"
            alt="CleanMax Laundry"
            width={48}
            height={48}
            className="w-10 h-10 object-contain"
            priority
          />
          <span
            className={`font-display font-black text-xl uppercase tracking-tight hidden sm:inline ${textColor}`}
          >
            CleanMax
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {/* Services dropdown */}
          <div ref={servicesRef} className="relative">
            <button
              className={`flex items-center gap-1 font-sans font-semibold text-sm uppercase tracking-widest transition-opacity hover:opacity-60 ${textColor}`}
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setLocationsOpen(false);
              }}
              aria-expanded={servicesOpen}
            >
              {t("nav_services")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border border-brand-dark/10 z-50">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setServicesOpen(false)}
                    className="block px-5 py-3 font-sans text-sm text-brand-dark hover:bg-brand-surface hover:text-brand-blue transition-colors border-b border-brand-dark/5 last:border-b-0"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Locations dropdown */}
          <div ref={locationsRef} className="relative">
            <button
              className={`flex items-center gap-1 font-sans font-semibold text-sm uppercase tracking-widest transition-opacity hover:opacity-60 ${textColor}`}
              onClick={() => {
                setLocationsOpen(!locationsOpen);
                setServicesOpen(false);
              }}
              aria-expanded={locationsOpen}
            >
              {t("nav_locations")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className={`w-3.5 h-3.5 transition-transform ${locationsOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {locationsOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg border border-brand-dark/10 z-50">
                <div className="grid grid-cols-2 max-h-80 overflow-y-auto">
                  {allCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`${linkPrefix}/locations/${city.slug}`}
                      onClick={() => setLocationsOpen(false)}
                      className="block px-4 py-2.5 font-sans text-sm text-brand-dark hover:bg-brand-surface hover:text-brand-blue transition-colors border-b border-brand-dark/5"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
                <Link
                  href={`${linkPrefix}/locations`}
                  onClick={() => setLocationsOpen(false)}
                  className="block px-5 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-brand-blue hover:bg-brand-surface transition-colors border-t border-brand-dark/10"
                >
                  {t("nav_view_all_cities")}
                </Link>
              </div>
            )}
          </div>

          <Link
            href={`${linkPrefix}/testimonials`}
            className={`font-sans font-semibold text-sm uppercase tracking-widest transition-opacity hover:opacity-60 ${textColor}`}
          >
            {t("nav_reviews")}
          </Link>

          <Link
            href={`${linkPrefix}/blog`}
            className={`font-sans font-semibold text-sm uppercase tracking-widest transition-opacity hover:opacity-60 ${textColor}`}
          >
            {t("nav_blog")}
          </Link>

          <Link
            href={`${linkPrefix}/about`}
            className={`font-sans font-semibold text-sm uppercase tracking-widest transition-opacity hover:opacity-60 ${textColor}`}
          >
            {t("nav_about")}
          </Link>

          <a
            href="#contact"
            className={`font-sans font-semibold text-sm uppercase tracking-widest transition-opacity hover:opacity-60 ${textColor}`}
          >
            {t("nav_contact")}
          </a>
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-5">
          <LanguageToggle language={language} setLanguage={setLanguage} scrolled={!isTransparent} pathname={pathname} />
          <a
            href="tel:9092487305"
            className={`flex items-center gap-2 font-sans font-semibold text-sm tracking-wide transition-opacity hover:opacity-70 ${textColor}`}
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
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            (909) 248-7305
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 ${textColor}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-brand-dark/10 shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-0">
            {/* Services */}
            <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-dark/40 mt-4 mb-2 px-0">
              {t("nav_services")}
            </p>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-sm text-brand-dark hover:text-brand-blue transition-colors py-2 border-b border-brand-dark/5"
              >
                {link.label}
              </Link>
            ))}

            {/* Locations */}
            <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-dark/40 mt-6 mb-2">
              {t("nav_locations")}
            </p>
            {allCities.map((city) => (
              <Link
                key={city.slug}
                href={`${linkPrefix}/locations/${city.slug}`}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-sm text-brand-dark hover:text-brand-blue transition-colors py-2 border-b border-brand-dark/5"
              >
                {city.name}
              </Link>
            ))}
            <Link
              href={`${linkPrefix}/locations`}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-xs font-semibold uppercase tracking-widest text-brand-blue hover:opacity-70 transition-opacity py-3 border-b border-brand-dark/5"
            >
              {t("nav_view_all_cities")}
            </Link>

            <Link
              href={`${linkPrefix}/testimonials`}
              onClick={() => setMenuOpen(false)}
              className="font-sans font-semibold text-sm text-brand-dark hover:text-brand-blue transition-colors py-3 border-b border-brand-dark/5 mt-2"
            >
              {t("nav_reviews")}
            </Link>

            <Link
              href={`${linkPrefix}/blog`}
              onClick={() => setMenuOpen(false)}
              className="font-sans font-semibold text-sm text-brand-dark hover:text-brand-blue transition-colors py-3 border-b border-brand-dark/5"
            >
              {t("nav_blog")}
            </Link>

            <Link
              href={`${linkPrefix}/about`}
              onClick={() => setMenuOpen(false)}
              className="font-sans font-semibold text-sm text-brand-dark hover:text-brand-blue transition-colors py-3 border-b border-brand-dark/5"
            >
              {t("nav_about")}
            </Link>

            <Link
              href={`${linkPrefix}/commercial-quote`}
              onClick={() => setMenuOpen(false)}
              className="font-sans font-semibold text-sm text-brand-blue hover:opacity-70 transition-opacity py-3 border-b border-brand-dark/5"
            >
              {t("nav_get_quote")}
            </Link>

            <div className="mt-4 pt-4 border-t border-brand-dark/10 flex items-center justify-between">
              <a
                href="tel:9092487305"
                className="font-sans font-semibold text-sm text-brand-dark hover:text-brand-blue transition-colors"
              >
                (909) 248-7305
              </a>
              <LanguageToggle
                language={language}
                setLanguage={setLanguage}
                scrolled={true}
                pathname={pathname}
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function LanguageToggle({
  language,
  scrolled,
  pathname,
}: {
  language: Language;
  setLanguage: (l: Language) => void;
  scrolled: boolean;
  pathname: string;
}) {
  const inactiveColor = scrolled
    ? "text-brand-dark/35 hover:text-brand-dark/60"
    : "text-white/40 hover:text-white/70";
  const dividerColor = scrolled ? "text-brand-dark/20" : "text-white/20";

  // Compute counterpart URL: strip/add the /es prefix while preserving the rest of the path.
  // /foo/bar  ↔ /es/foo/bar
  // /         ↔ /es
  const isEs = pathname === "/es" || pathname.startsWith("/es/");
  const pathWithoutLang = isEs
    ? pathname === "/es"
      ? "/"
      : pathname.slice(3)
    : pathname;
  const enHref = pathWithoutLang || "/";
  const esHref = pathWithoutLang === "/" ? "/es" : `/es${pathWithoutLang}`;

  return (
    <div className="flex items-center gap-1.5 font-sans font-semibold text-sm uppercase tracking-widest">
      <Link
        href={enHref}
        className={`transition-colors ${
          language === "en" ? "text-brand-blue font-bold" : inactiveColor
        }`}
        aria-label="Switch to English"
        aria-current={language === "en" ? "true" : undefined}
      >
        EN
      </Link>
      <span className={dividerColor} aria-hidden="true">
        |
      </span>
      <Link
        href={esHref}
        className={`transition-colors ${
          language === "es" ? "text-brand-blue font-bold" : inactiveColor
        }`}
        aria-label="Cambiar a Español"
        aria-current={language === "es" ? "true" : undefined}
      >
        ES
      </Link>
    </div>
  );
}
