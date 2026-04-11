export default function CommercialCallout() {
  return (
    <section id="commercial" className="relative bg-brand-dark py-24 overflow-hidden">
      {/* Subtle structural accent */}
      <div className="absolute top-0 right-0 w-px h-full bg-white/5" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-1/3 h-px bg-brand-blue/30" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-6">
            B2B Service
          </p>
          <h2 className="font-display font-black text-5xl md:text-6xl lg:text-7xl uppercase text-white leading-none mb-8">
            We Handle Laundry<br />for Your Business
          </h2>
          <p className="font-sans text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
            Scheduled pickup and delivery for gyms, restaurants, Airbnb hosts, hotels,
            salons, and medical offices. We build a recurring schedule around your
            operation — so laundry is one less thing on your list.
          </p>

          {/* Industry list */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
            {[
              "Gyms & Fitness",
              "Restaurants",
              "Airbnb & Vacation Rentals",
              "Hotels",
              "Salons & Spas",
              "Medical Offices",
            ].map((industry) => (
              <div key={industry} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-brand-blue shrink-0" aria-hidden="true" />
                <span className="font-sans text-sm text-white/60">{industry}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="mailto:laundry@cleanmaxlaundry.com"
              className="inline-flex items-center gap-2 bg-brand-blue text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-brand-dark transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              Get a Commercial Quote
            </a>
            <a
              href="tel:6263403098"
              className="inline-flex items-center gap-2 text-white/60 font-sans font-semibold text-sm tracking-wide hover:text-white transition-colors py-4"
            >
              Commercial line: (626) 340-3098
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
