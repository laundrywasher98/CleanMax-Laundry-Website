"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface SeoFaqProps {
  items: FaqItem[];
  eyebrow?: string;
  heading?: string;
}

export default function SeoFaq({ items, eyebrow = "FAQ", heading }: SeoFaqProps) {
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="py-20 bg-brand-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-6">
        {eyebrow && (
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            {eyebrow}
          </p>
        )}
        {heading && (
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-brand-dark leading-none mb-12">
            {heading}
          </h2>
        )}

        <div className="divide-y divide-brand-dark/10">
          {items.map((item, i) => (
            <div key={i}>
              <button
                className="w-full text-left py-5 flex items-start justify-between gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-sans font-semibold text-base text-brand-dark group-hover:text-brand-blue transition-colors leading-snug">
                  {item.q}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className={`w-5 h-5 shrink-0 text-brand-blue mt-0.5 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <p
                className={`font-sans text-sm text-brand-dark/70 leading-relaxed pb-5 ${
                  open === i ? "" : "hidden"
                }`}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
