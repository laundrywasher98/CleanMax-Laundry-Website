"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

const reviews = [
  {
    name: "Basil M.",
    localGuide: false,
    text: "Wow, this place is beautiful now after the remodel! It's very clean and has new machines. Highly recommend! The new owner is very kind as well!!!",
  },
  {
    name: "Abby C.",
    localGuide: false,
    text: "This laundromat is clean, safe, and well-maintained. There's always a worker there watching the place, which makes it feel secure. The machines are brand new and work great.",
  },
  {
    name: "Debbie D.",
    localGuide: false,
    text: "We love the clean, safe atmosphere. The new machines are great. They also offer a drop off wash and fold service!",
  },
  {
    name: "Sam Q.",
    localGuide: true,
    text: "Cleanest laundromat I've been to in a long time! All the machines work, this place is well kept!",
  },
  {
    name: "Linford P.",
    localGuide: true,
    text: "Nice owners very clean everything works good deal go check it out the only place I go in Pomona for my laundry 👍💯",
  },
  {
    name: "Brian S.",
    localGuide: false,
    text: "By far the cleanest laundromat I have been to. The new owner has really turned this place around and I look forward to many more clean loads!",
  },
  {
    name: "Vanessa M.",
    localGuide: false,
    text: "Super clean, plenty of parking, reasonably priced. Machines are always in good condition.",
  },
  {
    name: "Maria G.",
    localGuide: false,
    text: "Me gusta mucho venir a lavar aquí, todo está muy limpio y las lavadoras son nuevas. El personal es muy amable. ¡Les doy un 10 de 10!",
  },
  {
    name: "Francisco L.",
    localGuide: false,
    text: "Muy limpio el lugar, todas las lavadoras funcionan a la perfección 👍👍👍",
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-yellow-400"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-5 h-5"
      aria-label="Google review"
      role="img"
    >
      <circle cx="12" cy="12" r="12" fill="#4285F4" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fill="white"
        fontSize="12"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        G
      </text>
    </svg>
  );
}

function ReviewCard({ name, localGuide, text }: (typeof reviews)[number]) {
  return (
    <div className="bg-white border border-brand-dark/10 p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-sans font-semibold text-sm text-brand-dark leading-tight">
            {name}
          </p>
          {localGuide && (
            <span className="inline-block mt-1 px-2 py-0.5 text-xs font-sans font-semibold rounded-full bg-brand-blue/10 text-brand-blue leading-tight">
              Local Guide
            </span>
          )}
        </div>
        <StarRow />
      </div>
      <p className="font-sans text-sm text-brand-dark/70 leading-relaxed flex-1">
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex justify-end">
        <GoogleIcon />
      </div>
    </div>
  );
}

export default function TestimonialsContent() {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-4">
            CleanMax Laundry · Pomona, CA
          </p>
          <h1 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none mb-6">
            {t("testimonials_heading")}
          </h1>
          <p className="font-sans text-brand-dark/60 text-lg leading-relaxed max-w-xl mx-auto">
            {t("testimonials_rating_text")}
          </p>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 bg-brand-surface border-t border-brand-dark/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer + CTAs */}
      <section className="py-12 bg-white border-t border-brand-dark/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-sans text-xs text-brand-dark/40 mb-8">
            {t("testimonials_disclaimer")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://share.google/qOCjH4ihGEyqeLJLT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-dark text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-brand-blue transition-colors"
            >
              {t("testimonials_cta_read")}
            </a>
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsdiY1GsDSg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-brand-dark/20 text-brand-dark font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              {t("testimonials_cta_leave")}
            </a>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-none mb-6">
            {t("testimonials_closing_heading")}
          </h2>
          <p className="font-sans text-white/60 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            {t("testimonials_closing_text")}
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:opacity-90 transition-opacity"
          >
            Visit CleanMax Laundry
          </Link>
        </div>
      </section>
    </main>
  );
}
