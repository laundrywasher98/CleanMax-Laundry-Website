import Image from "next/image";

const photos = [
  {
    src: "/images/IMG_8788.jpg",
    alt: "Row of front-load washers at CleanMax Laundry",
  },
  {
    src: "/images/IMG_8791.jpg",
    alt: "Wascomat Clarus Vibe machine up close",
  },
  {
    src: "/images/IMG_8794.jpg",
    alt: "ClariVibe touchscreen showing CleanMax Laundry logo",
  },
  {
    src: "/images/IMG_8883.jpg",
    alt: "Two large-capacity Wascomat front-load washers",
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
