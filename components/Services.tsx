"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation, type TranslationKey } from "@/contexts/LanguageContext";

const serviceData: Array<{
  titleKey: TranslationKey;
  descKey: TranslationKey;
  detailKey: TranslationKey;
  photo: string;
  alt: string;
  href: string;
  pricingLinkKey?: TranslationKey;
}> = [
  {
    titleKey: "services_self_title",
    descKey: "services_self_desc",
    detailKey: "services_self_detail",
    photo: "/images/IMG_8784-2.jpg",
    alt: "Row of Wascomat washing machines at CleanMax Laundry",
    href: "/laundromat/pomona",
  },
  {
    titleKey: "services_wf_title",
    descKey: "services_wf_desc",
    detailKey: "services_wf_detail",
    photo: "/images/IMG_8833.jpg",
    alt: "Wash and fold service area at CleanMax Laundry",
    href: "/wash-and-fold/pomona",
    pricingLinkKey: "services_wf_pricing_link",
  },
  {
    titleKey: "services_commercial_title",
    descKey: "services_commercial_desc",
    detailKey: "services_commercial_detail",
    photo: "/images/IMG_8857.jpg",
    alt: "CleanMax Laundry exterior at 1009 E Holt Ave, Pomona CA",
    href: "/commercial-laundry",
  },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-3">
            {t("services_eyebrow")}
          </p>
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none">
            {t("services_heading")}
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceData.map((service) => (
            <div
              key={service.titleKey}
              className="border border-brand-dark/10 flex flex-col"
            >
              {/* Photo */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.photo}
                  alt={service.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display font-black text-2xl uppercase text-brand-dark mb-3">
                  {t(service.titleKey)}
                </h3>
                <p className="font-sans text-brand-dark/70 text-base leading-relaxed mb-5 flex-1">
                  {t(service.descKey)}
                </p>
                <div className="pt-5 border-t border-brand-dark/10 flex items-center justify-between gap-2">
                  <span className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue">
                    {t(service.detailKey)}
                  </span>
                  {service.pricingLinkKey && (
                    <Link
                      href="/wash-and-fold/pricing"
                      className="font-sans font-semibold text-xs text-brand-dark/40 hover:text-brand-blue transition-colors whitespace-nowrap"
                    >
                      {t(service.pricingLinkKey)}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
