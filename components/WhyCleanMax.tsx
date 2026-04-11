"use client";

import { useTranslation } from "@/contexts/LanguageContext";

const machineIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1.5" />
    <path d="M6 8h.01M8 8h.01" />
  </svg>
);

const starIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  </svg>
);

const pinIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

const phoneIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <path d="M12 18h.01" />
    <path d="M9 6h6M9 10h6M9 14h4" />
  </svg>
);

export default function WhyCleanMax() {
  const { t } = useTranslation();

  const reasons = [
    { number: "01", headlineKey: "why_01_headline" as const, bodyKey: "why_01_body" as const, icon: machineIcon },
    { number: "02", headlineKey: "why_02_headline" as const, bodyKey: "why_02_body" as const, icon: starIcon },
    { number: "03", headlineKey: "why_03_headline" as const, bodyKey: "why_03_body" as const, icon: pinIcon },
    { number: "04", headlineKey: "why_04_headline" as const, bodyKey: "why_04_body" as const, icon: phoneIcon },
  ];

  return (
    <section id="about" className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-3">
            {t("why_eyebrow")}
          </p>
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none">
            {t("why_heading")}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-dark/10">
          {reasons.map((reason) => (
            <div key={reason.number} className="bg-brand-surface p-8 flex flex-col gap-5">
              <div className="text-brand-blue">{reason.icon}</div>
              <div>
                <span className="font-display font-black text-brand-blue text-sm uppercase tracking-widest block mb-2">
                  {reason.number}
                </span>
                <h3 className="font-display font-black text-xl uppercase text-brand-dark mb-3">
                  {t(reason.headlineKey)}
                </h3>
                <p className="font-sans text-brand-dark/65 text-sm leading-relaxed">
                  {t(reason.bodyKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
