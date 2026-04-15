import sharp from 'sharp';
import { mkdir, stat } from 'node:fs/promises';
import path from 'node:path';

const IMAGES_DIR = path.resolve('public/images');

const WEBP_TARGETS = [
  { from: 'IMG_8888.jpg', to: 'cleanmax-laundry-pomona-interior.webp' },
  { from: 'IMG_8784-2.jpg', to: 'cleanmax-self-service-laundromat.webp' },
  { from: 'IMG_8833.jpg', to: 'cleanmax-wash-and-fold-service.webp' },
  { from: 'IMG_8857.jpg', to: 'cleanmax-commercial-laundry.webp' },
  { from: 'IMG_8788.jpg', to: 'cleanmax-laundromat-washers.webp' },
  { from: 'IMG_8791.jpg', to: 'cleanmax-laundromat-dryers.webp' },
  { from: 'IMG_8794.jpg', to: 'cleanmax-laundromat-folding-area.webp' },
  { from: 'IMG_8883.jpg', to: 'cleanmax-laundromat-interior.webp' },
];

const OG_CARD = {
  from: 'IMG_8888.jpg',
  to: 'og-card-cleanmax.jpg',
  width: 1200,
  height: 630,
};

async function main() {
  await mkdir(IMAGES_DIR, { recursive: true });

  for (const { from, to } of WEBP_TARGETS) {
    const src = path.join(IMAGES_DIR, from);
    const dst = path.join(IMAGES_DIR, to);
    const { size: beforeSize } = await stat(src);
    await sharp(src)
      .rotate()
      .resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 78, effort: 5 })
      .toFile(dst);
    const { size: afterSize } = await stat(dst);
    const pct = ((afterSize / beforeSize) * 100).toFixed(1);
    console.log(
      `${from} → ${to}: ${(beforeSize / 1024 / 1024).toFixed(1)}MB → ${(afterSize / 1024).toFixed(0)}KB (${pct}%)`,
    );
  }

  {
    const src = path.join(IMAGES_DIR, OG_CARD.from);
    const dst = path.join(IMAGES_DIR, OG_CARD.to);
    const { size: beforeSize } = await stat(src);
    await sharp(src)
      .rotate()
      .resize({ width: OG_CARD.width, height: OG_CARD.height, fit: 'cover', position: 'center' })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(dst);
    const { size: afterSize } = await stat(dst);
    const pct = ((afterSize / beforeSize) * 100).toFixed(1);
    console.log(
      `${OG_CARD.from} → ${OG_CARD.to} (${OG_CARD.width}x${OG_CARD.height}): ${(beforeSize / 1024 / 1024).toFixed(1)}MB → ${(afterSize / 1024).toFixed(0)}KB (${pct}%)`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
