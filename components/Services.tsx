import Image from "next/image";

const services = [
  {
    title: "Self-Service Laundry",
    description:
      "Our modern Wascomat Clarus Vibe machines handle everything from a single load to oversized comforters. Fast cycle times, quiet operation, and app-based payment make it easy.",
    detail: "Open daily 6:00 AM – 10:00 PM · Last wash 9:00 PM",
    photo: "/images/IMG_8784-2.jpg",
    alt: "Row of Wascomat washing machines at CleanMax Laundry",
  },
  {
    title: "Wash & Fold",
    description:
      "Drop off your laundry and we take care of the rest. Your clothes are washed, dried, and neatly folded — ready for pickup the same day or next day.",
    detail: "Starting at $1.50/lb · Drop-off 6:00 AM – 9:00 PM",
    photo: "/images/IMG_8833.jpg",
    alt: "Wash and fold service area at CleanMax Laundry",
  },
  {
    title: "Commercial Laundry",
    description:
      "Scheduled pickup and delivery for businesses of any size. We serve gyms, restaurants, Airbnb hosts, hotels, salons, and medical offices with custom recurring schedules.",
    detail: "Custom scheduling · Contact for pricing",
    photo: "/images/IMG_8857.jpg",
    alt: "CleanMax Laundry exterior at 1009 E Holt Ave, Pomona CA",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue mb-3">
            What We Do
          </p>
          <h2 className="font-display font-black text-5xl md:text-6xl uppercase text-brand-dark leading-none">
            What We Offer
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
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
                  {service.title}
                </h3>
                <p className="font-sans text-brand-dark/70 text-base leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>
                <div className="pt-5 border-t border-brand-dark/10">
                  <span className="font-sans font-semibold text-xs uppercase tracking-widest text-brand-blue">
                    {service.detail}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
