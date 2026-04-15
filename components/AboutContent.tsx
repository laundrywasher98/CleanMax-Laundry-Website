"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";
import JsonLd from "@/components/JsonLd";
import { buildPersonSchema } from "@/lib/schema";

const GOOGLE_MAPS_URL = "https://share.google/qOCjH4ihGEyqeLJLT";

const OWNER_NAME = "The CleanMax Team";
const OWNER_TITLE_EN = "Locally Owned & Operated";
const OWNER_TITLE_ES = "Negocio Local e Independiente";
const OWNER_BIO_EN =
  "CleanMax Laundry is locally owned and operated by people who grew up right here in the San Gabriel Valley and the Inland Empire. Our owner was raised in this community — played youth soccer on local fields, went through the local school system, and has spent years volunteering with the local school districts and helping where needed. CleanMax was built to give the Pomona Valley the cleanest, most reliable laundromat the community deserves: modern Wascomat machines, free parking, fair flat-rate wash-and-fold pricing, and commercial pickup and delivery for the businesses that make this area run. We live where we work, and we take that seriously.";
const OWNER_BIO_ES =
  "CleanMax Laundry es un negocio local e independiente, operado por personas que crecieron aquí mismo en el Valle de San Gabriel y el Inland Empire. Nuestro dueño se crió en esta comunidad — jugó fútbol juvenil en canchas locales, pasó por las escuelas de la zona y ha dedicado años como voluntario apoyando a los distritos escolares locales y ayudando donde se necesita. Construimos CleanMax para darle al Valle de Pomona la lavandería más limpia y confiable que la comunidad se merece: máquinas Wascomat modernas, estacionamiento gratis, precios justos a tarifa fija para lavado y doblado, y recolección y entrega comercial para los negocios que hacen funcionar esta zona. Vivimos donde trabajamos, y eso lo tomamos en serio.";

export default function AboutContent() {
  const { t, language } = useTranslation();

  const ownerBio = language === "es" ? OWNER_BIO_ES : OWNER_BIO_EN;
  const ownerTitle = language === "es" ? OWNER_TITLE_ES : OWNER_TITLE_EN;
  const meetHeading = language === "es" ? "Conoce al equipo" : "Meet the team";

  const differentiators = [
    t("about_diff_1"),
    t("about_diff_2"),
    t("about_diff_3"),
    t("about_diff_4"),
  ];

  return (
    <>
      <JsonLd
        data={buildPersonSchema({
          name: OWNER_NAME,
          jobTitle: ownerTitle,
          description: ownerBio,
        })}
      />
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            {t("eyebrow_cleanmax_pomona")}
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none mb-8">
            {t("about_heading")}
          </h1>
          <div className="space-y-5">
            <p className="font-sans text-brand-dark/70 text-lg leading-relaxed">
              {t("about_p1")}
            </p>
            <p className="font-sans text-brand-dark/70 text-base leading-relaxed">
              {t("about_p2")}
            </p>
            <p className="font-sans text-brand-dark/70 text-base leading-relaxed">
              {t("about_p3")}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-6">
            {t("about_mission_heading")}
          </h2>
          <p className="font-sans text-brand-dark/70 text-base leading-relaxed max-w-2xl">
            {t("about_mission_text")}
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-10">
            {t("about_different_heading")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {differentiators.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 border border-brand-dark/10">
                <span className="font-display font-black text-3xl text-brand-blue leading-none shrink-0">
                  {i + 1}
                </span>
                <p className="font-sans font-semibold text-base text-brand-dark leading-snug pt-1">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner / Team bio — E-E-A-T signal */}
      <section className="py-16 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-6">
            {meetHeading}
          </h2>
          <div className="border-l-2 border-brand-blue pl-6 max-w-2xl">
            <p className="font-display font-bold text-xl text-brand-dark mb-1">
              {OWNER_NAME}
            </p>
            <p className="font-sans text-xs uppercase tracking-widest text-brand-blue mb-4">
              {ownerTitle}
            </p>
            <p className="font-sans text-brand-dark/70 text-base leading-relaxed">
              {ownerBio}
            </p>
          </div>
        </div>
      </section>

      {/* Serve area */}
      <section className="py-16 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-6">
            {t("about_serve_heading")}
          </h2>
          <p className="font-sans text-brand-dark/70 text-base leading-relaxed max-w-2xl">
            {t("about_serve_text")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/laundromat/pomona"
              className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-brand-blue transition-colors"
            >
              {t("nav_self_service_laundry")}
            </Link>
            <Link
              href="/wash-and-fold/pomona"
              className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              {t("nav_wash_and_fold")}
            </Link>
            <Link
              href="/commercial-laundry"
              className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              {t("nav_commercial_laundry")}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-white leading-none mb-6">
            {t("about_cta_heading")}
          </h2>
          <p className="font-sans text-white/60 text-base mb-2">
            {t("about_address")}
          </p>
          <p className="font-sans text-white/60 text-base mb-8">
            {t("about_hours")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-blue text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-brand-dark transition-colors"
            >
              {t("about_directions_btn")}
            </a>
            <a
              href="tel:9092487305"
              className="inline-flex items-center gap-2 text-white/60 font-sans font-semibold text-sm tracking-wide hover:text-white transition-colors py-4"
            >
              (909) 248-7305
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
