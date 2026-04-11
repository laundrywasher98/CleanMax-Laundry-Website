"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation, type Language } from "@/contexts/LanguageContext";

const GOOGLE_MAPS_URL = "https://share.google/qOCjH4ihGEyqeLJLT";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "text-brand-dark" : "text-white";
  const borderColor = scrolled ? "border-brand-dark/10" : "border-white/10";

  const navLinks = [
    { label: t("nav_services"), href: "#services" },
    { label: t("nav_commercial"), href: "#commercial" },
    { label: t("nav_about"), href: "#about" },
    { label: t("nav_contact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className={`max-w-7xl mx-auto px-6 h-16 flex items-center justify-between border-b ${borderColor}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="CleanMax Laundry home">
          <Image
            src="/images/logo.png"
            alt="CleanMax Laundry"
            width={48}
            height={48}
            className="w-10 h-10 object-contain"
            priority
          />
          <span className={`font-display font-black text-xl uppercase tracking-tight hidden sm:inline ${textColor}`}>
            CleanMax
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans font-semibold text-sm uppercase tracking-widest transition-opacity hover:opacity-60 ${textColor}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop right: language toggle + phone */}
        <div className="hidden md:flex items-center gap-5">
          <LanguageToggle language={language} setLanguage={setLanguage} scrolled={scrolled} />
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-brand-dark/10 shadow-md">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans font-semibold text-sm uppercase tracking-widest text-brand-dark hover:text-brand-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 pt-4 border-t border-brand-dark/10 flex items-center justify-between">
              <a
                href="tel:9092487305"
                className="font-sans font-semibold text-sm text-brand-dark hover:text-brand-blue transition-colors"
              >
                (909) 248-7305
              </a>
              <LanguageToggle language={language} setLanguage={setLanguage} scrolled={true} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function LanguageToggle({
  language,
  setLanguage,
  scrolled,
}: {
  language: Language;
  setLanguage: (l: Language) => void;
  scrolled: boolean;
}) {
  const inactiveColor = scrolled ? "text-brand-dark/35 hover:text-brand-dark/60" : "text-white/40 hover:text-white/70";
  const dividerColor = scrolled ? "text-brand-dark/20" : "text-white/20";

  return (
    <div className="flex items-center gap-1.5 font-sans font-semibold text-sm uppercase tracking-widest">
      <button
        onClick={() => setLanguage("en")}
        className={`transition-colors ${language === "en" ? "text-brand-blue font-bold" : inactiveColor}`}
        aria-label="Switch to English"
        aria-pressed={language === "en"}
      >
        EN
      </button>
      <span className={dividerColor} aria-hidden="true">|</span>
      <button
        onClick={() => setLanguage("es")}
        className={`transition-colors ${language === "es" ? "text-brand-blue font-bold" : inactiveColor}`}
        aria-label="Cambiar a Español"
        aria-pressed={language === "es"}
      >
        ES
      </button>
    </div>
  );
}
