#!/usr/bin/env python3
"""
Process CleanMax Laundry photos for GBP upload + website use.

For each source JPG:
- Downsize (long edge 2048 for JPG, 1600 for WebP)
- Rewrite with descriptive SEO filename
- Embed GPS EXIF at the business coordinates (34.0581, -117.7441)
- Embed EXIF ImageDescription + Copyright + Artist metadata
- Output to CleanMax Laundry Photos/optimized/ (JPG @ q=85) and
  CleanMax Laundry Photos/webp/ (WebP @ q=80)

Note: Google Business Profile strips EXIF on upload — the geotag itself won't
move Maps rank. The value here is (a) descriptive filenames, (b) reduced file
size, (c) metadata consistency for non-Google surfaces (Flickr, Pinterest,
directories), and (d) web-ready assets for the Next.js site.
"""

import os
import sys
from fractions import Fraction
from PIL import Image
import piexif

# --- Config ---

SRC = "CleanMax Laundry Photos"
DST_JPG = os.path.join(SRC, "optimized")
DST_WEBP = os.path.join(SRC, "webp")

BUSINESS_LAT = 34.0581
BUSINESS_LNG = -117.7441
BUSINESS_NAME = "CleanMax Laundry"
BUSINESS_ADDRESS = "1009 E Holt Ave, Pomona, CA 91767"
COPYRIGHT = "CleanMax Laundry, Pomona CA"

# Categorized filename map. Key = source IMG number, value = descriptive slug.
RENAME_MAP = {
    "IMG_8857":   ("cleanmax-laundromat-pomona-exterior-storefront",
                   "CleanMax Laundromat exterior storefront at 1009 E Holt Ave, Pomona, CA"),
    "IMG_8784-2": ("cleanmax-laundromat-pomona-interior-wide-01",
                   "CleanMax Laundromat interior wide-angle view of self-service washers in Pomona, CA"),
    "IMG_8874":   ("cleanmax-laundromat-pomona-interior-wide-02",
                   "CleanMax Laundromat interior showing spacious floor plan and natural light in Pomona, CA"),
    "IMG_8888":   ("cleanmax-laundromat-pomona-interior-wide-03",
                   "CleanMax Laundromat interior with folding island and self-service machines in Pomona, CA"),
    "IMG_8788":   ("cleanmax-laundromat-pomona-wascomat-washers-row-01",
                   "Row of Wascomat front-load washers at CleanMax Laundromat Pomona, CA"),
    "IMG_8789":   ("cleanmax-laundromat-pomona-wascomat-washers-row-02",
                   "Wascomat washer row with CleanMax Laundry branding in Pomona, CA"),
    "IMG_8791":   ("cleanmax-laundromat-pomona-wascomat-62lb-washer",
                   "Wascomat ClarusVibe 62 lb capacity washer at CleanMax Laundromat Pomona, CA"),
    "IMG_8794":   ("cleanmax-laundromat-pomona-clarusvibe-touchscreen",
                   "Wascomat ClarusVibe touchscreen interface with CleanMax Laundry logo in Pomona, CA"),
    "IMG_8800":   ("cleanmax-laundromat-pomona-washer-drum-clean",
                   "Clean stainless steel washer drum at CleanMax Laundromat Pomona, CA"),
    "IMG_8812":   ("cleanmax-laundromat-pomona-wascomat-20lb-washer",
                   "Wascomat ClarusVibe 20 lb capacity washer at CleanMax Laundromat Pomona, CA"),
    "IMG_8883":   ("cleanmax-laundromat-pomona-wascomat-80lb-washers",
                   "Wascomat 80 lb large-capacity washers for comforters at CleanMax Pomona, CA"),
    "IMG_8802":   ("cleanmax-laundromat-pomona-ipso-stack-dryers-01",
                   "IPSO IPD30ST stack dryers at CleanMax Laundromat Pomona, CA"),
    "IMG_8841":   ("cleanmax-laundromat-pomona-ipso-stack-dryers-02",
                   "Row of IPSO stack dryers with bilingual signage at CleanMax Laundromat Pomona, CA"),
    "IMG_8897":   ("cleanmax-laundromat-pomona-ipso-large-dryers",
                   "IPSO large-capacity dryers at CleanMax Laundromat Pomona, CA"),
    "IMG_8805":   ("cleanmax-laundromat-pomona-folding-counter-01",
                   "Marble folding counter at CleanMax Laundromat Pomona, CA with bilingual CHANGE/CAMBIO signage"),
    "IMG_8829":   ("cleanmax-laundromat-pomona-folding-counter-02",
                   "Extended folding counter with laundry tips signage at CleanMax Laundromat Pomona, CA"),
    "IMG_8809":   ("cleanmax-laundromat-pomona-seating-bilingual-signage",
                   "Seating area with bilingual Spanish/English signage at CleanMax Laundromat Pomona, CA"),
    "IMG_8811":   ("cleanmax-laundromat-pomona-laundry-carts",
                   "Laundry carts with hanging rod at CleanMax Laundromat Pomona, CA"),
    "IMG_8826":   ("cleanmax-laundromat-pomona-sink-ada-accessible",
                   "ADA-accessible sink station at CleanMax Laundromat Pomona, CA"),
    "IMG_8833":   ("cleanmax-laundromat-pomona-bilingual-wash-fold-pricing",
                   "Bilingual wash-dry-fold pricing signs at CleanMax Laundromat Pomona, CA"),
    "IMG_8891":   ("cleanmax-laundromat-pomona-wascomat-instructions-bilingual",
                   "Bilingual Wascomat self-service washer instructions at CleanMax Laundromat Pomona, CA"),
    "IMG_8894":   ("cleanmax-laundromat-pomona-change-bill-changer-bilingual",
                   "Bilingual CHANGE/CAMBIO bill changer area at CleanMax Laundromat Pomona, CA"),
}

# --- Helpers ---

def to_rational(number):
    """Convert float to EXIF rational (num, den) tuple via Fraction."""
    frac = Fraction(number).limit_denominator(1_000_000)
    return (frac.numerator, frac.denominator)

def decimal_to_dms(decimal):
    """Convert decimal degrees to EXIF (deg, min, sec) rationals."""
    degrees = int(abs(decimal))
    remainder = (abs(decimal) - degrees) * 60
    minutes = int(remainder)
    seconds = (remainder - minutes) * 60
    return (
        to_rational(degrees),
        to_rational(minutes),
        to_rational(seconds),
    )

def build_exif_bytes(description):
    lat_dms = decimal_to_dms(BUSINESS_LAT)
    lng_dms = decimal_to_dms(BUSINESS_LNG)

    gps_ifd = {
        piexif.GPSIFD.GPSVersionID: (2, 3, 0, 0),
        piexif.GPSIFD.GPSLatitudeRef: b"N" if BUSINESS_LAT >= 0 else b"S",
        piexif.GPSIFD.GPSLatitude: lat_dms,
        piexif.GPSIFD.GPSLongitudeRef: b"E" if BUSINESS_LNG >= 0 else b"W",
        piexif.GPSIFD.GPSLongitude: lng_dms,
        piexif.GPSIFD.GPSMapDatum: "WGS-84".encode(),
    }

    zeroth_ifd = {
        piexif.ImageIFD.ImageDescription: description.encode("utf-8"),
        piexif.ImageIFD.Artist: BUSINESS_NAME.encode("utf-8"),
        piexif.ImageIFD.Copyright: COPYRIGHT.encode("utf-8"),
        piexif.ImageIFD.XPKeywords: (
            f"CleanMax Laundry;Pomona laundromat;self-service laundry;wash and fold Pomona;{BUSINESS_ADDRESS}"
            .encode("utf-16le") + b"\x00\x00"
        ),
    }

    exif_dict = {"0th": zeroth_ifd, "Exif": {}, "GPS": gps_ifd, "1st": {}, "thumbnail": None}
    return piexif.dump(exif_dict)


def resize_keeping_aspect(img, long_edge):
    w, h = img.size
    if max(w, h) <= long_edge:
        return img.copy()
    if w >= h:
        new_w = long_edge
        new_h = int(h * (long_edge / w))
    else:
        new_h = long_edge
        new_w = int(w * (long_edge / h))
    return img.resize((new_w, new_h), Image.LANCZOS)


def process_one(src_path, basename, description):
    img = Image.open(src_path)
    # iPhone HEIC→JPG conversions sometimes carry rotation flags; apply.
    try:
        from PIL import ImageOps
        img = ImageOps.exif_transpose(img)
    except Exception:
        pass

    # JPG optimized — 2048 long edge @ q=85
    jpg = resize_keeping_aspect(img, 2048)
    jpg_path = os.path.join(DST_JPG, basename + ".jpg")
    exif_bytes = build_exif_bytes(description)
    jpg.save(jpg_path, "JPEG", quality=85, optimize=True, exif=exif_bytes)

    # WebP — 1600 long edge @ q=80
    webp = resize_keeping_aspect(img, 1600)
    webp_path = os.path.join(DST_WEBP, basename + ".webp")
    webp.save(webp_path, "WEBP", quality=80, method=6, exif=exif_bytes)

    jpg_size = os.path.getsize(jpg_path)
    webp_size = os.path.getsize(webp_path)
    return jpg.size, jpg_size, webp_size


def main():
    os.makedirs(DST_JPG, exist_ok=True)
    os.makedirs(DST_WEBP, exist_ok=True)

    files = sorted(os.listdir(SRC))
    total_in, total_jpg, total_webp = 0, 0, 0
    count = 0

    for f in files:
        if not f.lower().endswith(".jpg"):
            continue
        stem = os.path.splitext(f)[0]
        if stem not in RENAME_MAP:
            print(f"[SKIP] {f} — no rename mapping")
            continue
        basename, description = RENAME_MAP[stem]
        src_path = os.path.join(SRC, f)
        in_size = os.path.getsize(src_path)
        size, jpg_size, webp_size = process_one(src_path, basename, description)
        total_in += in_size
        total_jpg += jpg_size
        total_webp += webp_size
        count += 1
        print(f"{f}  ->  {basename}.jpg   ({size[0]}x{size[1]}, {in_size//1024}KB -> {jpg_size//1024}KB jpg, {webp_size//1024}KB webp)")

    print(f"\nProcessed {count} photos.")
    print(f"Total: {total_in/1024/1024:.1f} MB in  ->  {total_jpg/1024/1024:.1f} MB jpg  +  {total_webp/1024/1024:.1f} MB webp")
    print(f"\nJPG output:  {os.path.abspath(DST_JPG)}")
    print(f"WebP output: {os.path.abspath(DST_WEBP)}")


if __name__ == "__main__":
    main()
