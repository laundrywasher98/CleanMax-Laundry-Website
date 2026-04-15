"use client";

import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

const previewReviews = [
  {
    name: "Linford P.",
    localGuide: true,
    text: "Nice owners very clean everything works good deal go check it out the only place I go in Pomona for my laundry 👍💯",
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
          className="w-3.5 h-3.5 text-yellow-400"
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
      className="w-4 h-4"
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

export default function ReviewsPreview() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white border-t border-brand-dark/10">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-3">
          {t("eyebrow_google_reviews")}
        </p>
        <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-brand-dark leading-none mb-10">
          {t("reviews_preview_heading")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {previewReviews.map((review) => (
            <div
              key={review.name}
              className="bg-brand-surface border border-brand-dark/10 p-5 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-sans font-semibold text-sm text-brand-dark leading-tight">
                    {review.name}
                  </p>
                  {review.localGuide && (
                    <span className="inline-block mt-1 px-2 py-0.5 text-xs font-sans font-semibold rounded-full bg-brand-blue/10 text-brand-blue leading-tight">
                      Local Guide
                    </span>
                  )}
                </div>
                <StarRow />
              </div>
              <p className="font-sans text-sm text-brand-dark/70 leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex justify-end">
                <GoogleIcon />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 font-sans font-semibold text-sm uppercase tracking-widest text-brand-blue hover:opacity-70 transition-opacity"
          >
            {t("reviews_preview_link")}
          </Link>
        </div>
      </div>
    </section>
  );
}
