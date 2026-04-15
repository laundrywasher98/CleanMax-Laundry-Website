import Image from "next/image";

const photos = [
  {
    src: "/images/cleanmax-laundromat-washers.webp",
    alt: "Row of Wascomat front-load washers at CleanMax Laundry in Pomona, CA",
  },
  {
    src: "/images/cleanmax-laundromat-dryers.webp",
    alt: "Large-capacity Wascomat Clarus Vibe washers for comforters and bedding",
  },
  {
    src: "/images/cleanmax-laundromat-folding-area.webp",
    alt: "Clean folding area and ClariVibe touchscreen at CleanMax Laundry Pomona",
  },
  {
    src: "/images/cleanmax-laundromat-interior.webp",
    alt: "CleanMax Laundry interior showing large-capacity washers in Pomona",
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
