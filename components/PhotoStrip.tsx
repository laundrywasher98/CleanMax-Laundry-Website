import Image from "next/image";

const photos = [
  {
    src: "/images/cleanmax-laundromat-pomona-exterior-storefront.webp",
    alt: "CleanMax Laundromat storefront at 1009 E Holt Ave, Pomona, CA — bilingual parking signage",
  },
  {
    src: "/images/cleanmax-laundromat-pomona-wascomat-washers-row-01.webp",
    alt: "Row of modern Wascomat front-load washers at CleanMax Laundromat in Pomona, CA",
  },
  {
    src: "/images/cleanmax-laundromat-pomona-ipso-stack-dryers-02.webp",
    alt: "IPSO stack dryers with bilingual Spanish and English signage at CleanMax Laundromat Pomona",
  },
  {
    src: "/images/cleanmax-laundromat-pomona-bilingual-wash-fold-pricing.webp",
    alt: "Bilingual wash-dry-fold pricing display at CleanMax Laundromat in Pomona, CA",
  },
];

export default function PhotoStrip() {
  return (
    <section className="py-16 bg-white" aria-label="CleanMax Laundry photos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {photos.map((photo) => (
            <div key={photo.src} className="relative h-56 md:h-72 overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
