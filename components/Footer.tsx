"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import { cities } from "@/data/cities";

const GOOGLE_MAPS_URL = "https://share.google/qOCjH4ihGEyqeLJLT";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/cleanmaxlaundry_pomona",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61588438208705",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@cleanmax.laundry3",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.19 8.19 0 004.78 1.52V6.74a4.85 4.85 0 01-1.01-.05z" />
      </svg>
    ),
  },
  {
    label: "Yelp",
    href: "https://www.yelp.com/biz/cleanmax-laundry-pomona-2",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path d="M20.16 12.73l-4.2 1.26a1.88 1.88 0 01-2.26-1.32 1.87 1.87 0 011.26-2.26l4.2-1.26a7.92 7.92 0 01.98 3.58zM13.5 7.92V3.63a7.94 7.94 0 013.13 1.78L13.5 7.92zm-1.5.56L8.37 5.41a7.93 7.93 0 013.13-1.78v4.29a1.87 1.87 0 011 .56zM7.35 8.91l-2.96-3.05A7.95 7.95 0 017.1 4.04l2.96 3.05a1.87 1.87 0 01-2.71 1.82zm-.23 5.5l-4.2 1.25a7.86 7.86 0 01-.37-3.12l4.2-1.25a1.87 1.87 0 012.26 1.32 1.87 1.87 0 01-1.89 1.8zm1.62 3.69l-2.96 3.05a7.95 7.95 0 01-1.71-2.82l2.96-3.05a1.87 1.87 0 012.71 2.82zm4.26.96v4.29a7.94 7.94 0 01-3.13-1.78l3.13-2.51zm1.5-.56l3.13 2.51a7.94 7.94 0 01-3.13 1.78V18.5a1.87 1.87 0 01-1-.56zm2.57-2.3l2.96 3.05a7.95 7.95 0 01-1.71 2.82l-2.96-3.05a1.87 1.87 0 011.71-2.82z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="CleanMax Laundry"
                width={52}
                height={52}
                className="w-12 h-12 object-contain"
              />
              <span className="font-display font-black text-2xl uppercase tracking-tight">
                CleanMax Laundry
              </span>
            </div>
            <p className="font-sans text-white/50 text-sm leading-relaxed max-w-xs">
              {t("footer_tagline")}
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white/40 hover:text-brand-blue transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Visit Us */}
          <div className="md:col-span-3">
            <h3 className="font-display font-black text-sm uppercase tracking-widest text-white/40 mb-5">
              {t("footer_visit_heading")}
            </h3>
            <ul className="space-y-3">
              <li className="font-sans text-sm text-white/70">
                1009 E Holt Ave<br />Pomona, CA 91767
              </li>
              <li>
                <a
                  href="tel:9092487305"
                  className="font-sans text-sm text-white/70 hover:text-brand-blue transition-colors"
                >
                  (909) 248-7305
                </a>
              </li>
              <li>
                <a
                  href="mailto:laundry@cleanmaxlaundry.com"
                  className="font-sans text-sm text-white/70 hover:text-brand-blue transition-colors"
                >
                  laundry@cleanmaxlaundry.com
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue hover:opacity-70 transition-opacity"
                >
                  {t("footer_directions_link")}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="md:col-span-3">
            <h3 className="font-display font-black text-sm uppercase tracking-widest text-white/40 mb-5">
              {t("footer_hours_heading")}
            </h3>
            <ul className="space-y-3">
              <li className="font-sans text-sm text-white/70">
                <span className="font-semibold text-white/90 block">
                  {t("footer_self_service_label")}
                </span>
                {t("footer_self_service_hours_line1")}<br />
                {t("footer_self_service_hours_line2")}
              </li>
              <li className="font-sans text-sm text-white/70">
                <span className="font-semibold text-white/90 block mt-4">
                  {t("footer_wf_label")}
                </span>
                {t("footer_wf_hours")}
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="md:col-span-3">
            <h3 className="font-display font-black text-sm uppercase tracking-widest text-white/40 mb-5">
              {t("footer_service_areas")}
            </h3>
            <ul className="space-y-1.5 columns-2 gap-4">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/locations/${city.slug}`}
                    className="font-sans text-sm text-white/50 hover:text-brand-blue transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/30">{t("footer_copyright")}</p>
          <p className="font-sans text-xs text-white/20">{t("footer_address_line")}</p>
        </div>
      </div>
    </footer>
  );
}
