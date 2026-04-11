"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What are your hours?",
    answer:
      "Self-service laundry is open daily from 6:00 AM to 10:00 PM, with the last wash at 9:00 PM. Wash & Fold drop-off is available from 6:00 AM to 9:00 PM.",
  },
  {
    question: "How does wash and fold work?",
    answer:
      "Drop off your laundry and we take care of the rest. Your clothes are washed, dried, and neatly folded, ready for pickup. Starting at $1.50 per pound.",
  },
  {
    question: "Do you offer pickup and delivery for businesses?",
    answer:
      "Yes. We provide commercial laundry service with scheduled pickup and delivery for gyms, restaurants, hotels, Airbnb hosts, salons, and medical offices. Contact us for a custom quote.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, free on-site parking is available.",
  },
  {
    question: "What equipment do you use?",
    answer:
      "We use Wascomat Clarus Vibe commercial machines — known for powerful cleaning, quiet operation, and fast cycle times.",
  },
  {
    question: "How do I get the free wash?",
    answer:
      "Download our mobile app through AirWallet and your first wash is free when you pay through the app.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-brand-dark/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-display font-bold text-lg uppercase text-brand-dark group-hover:text-brand-blue transition-colors">
          {question}
        </span>
        <span className={`shrink-0 mt-0.5 text-brand-blue transition-transform duration-200 ${open ? "rotate-45" : ""}`} aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-6">
          <p className="font-sans text-brand-dark/65 text-base leading-relaxed max-w-2xl">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: header */}
          <div className="lg:col-span-4">
            <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-3">
              FAQ
            </p>
            <h2 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none mb-6">
              Common Questions
            </h2>
            <p className="font-sans text-brand-dark/60 text-base leading-relaxed">
              Anything else? Reach us at{" "}
              <a
                href="mailto:laundry@cleanmaxlaundry.com"
                className="text-brand-blue hover:underline"
              >
                laundry@cleanmaxlaundry.com
              </a>
            </p>
          </div>

          {/* Right: accordion */}
          <div className="lg:col-span-8">
            <div className="border-t border-brand-dark/10">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
