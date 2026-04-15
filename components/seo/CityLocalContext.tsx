"use client";

import { useTranslation } from "@/contexts/LanguageContext";
import {
  getCityLocalContent,
  getCityLocalContentByLang,
} from "@/data/cityLocalContent";

interface Props {
  citySlug: string;
  cityName: string;
  variant?: "hub" | "service";
}

export default function CityLocalContext({
  citySlug,
  cityName,
  variant = "hub",
}: Props) {
  const { language } = useTranslation();
  const raw = getCityLocalContent(citySlug);
  if (!raw) return null;
  const c = getCityLocalContentByLang(raw, language);

  const heading =
    language === "es"
      ? `Lo que atendemos en ${cityName}`
      : `What we serve in ${cityName}`;
  const neighborhoodsLabel =
    language === "es" ? "Vecindarios que atendemos" : "Neighborhoods we serve";
  const landmarksLabel =
    language === "es" ? "Cerca de" : "Near";
  const driveLabel =
    language === "es" ? "Desde Pomona" : "From our Pomona location";

  return (
    <section
      className={`py-16 ${
        variant === "hub" ? "bg-white" : "bg-brand-surface"
      } border-t border-brand-dark/10`}
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display font-black text-3xl md:text-4xl uppercase text-brand-dark leading-none mb-6">
          {heading}
        </h2>

        <p className="font-sans text-brand-dark/75 text-base leading-relaxed mb-8 max-w-2xl">
          {c.intro}
        </p>

        <p className="font-sans text-brand-dark/70 text-base leading-relaxed mb-10 max-w-2xl">
          {c.localHook}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-brand-dark/10 pt-8">
          <div>
            <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-3">
              {neighborhoodsLabel}
            </p>
            <ul className="space-y-1">
              {c.neighborhoods.map((n) => (
                <li
                  key={n}
                  className="font-sans text-sm text-brand-dark/70"
                >
                  {n}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-3">
              {landmarksLabel}
            </p>
            <ul className="space-y-1">
              {c.landmarks.map((l) => (
                <li
                  key={l}
                  className="font-sans text-sm text-brand-dark/70"
                >
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-3">
              {driveLabel}
            </p>
            <p className="font-sans text-sm text-brand-dark/70 leading-relaxed">
              {c.driveFromPomona}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
