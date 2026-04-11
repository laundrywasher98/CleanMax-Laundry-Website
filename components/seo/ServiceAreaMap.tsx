"use client";

import Image from "next/image";
import { useTranslation } from "@/contexts/LanguageContext";

interface ServiceAreaMapProps {
  className?: string;
  /** Force dark or light caption color; defaults to light (for dark backgrounds) */
  theme?: "dark" | "light";
}

export default function ServiceAreaMap({
  className = "",
  theme = "dark",
}: ServiceAreaMapProps) {
  const { t } = useTranslation();

  const captionColor =
    theme === "dark" ? "text-white/50" : "text-brand-dark/50";

  return (
    <div className={className}>
      <Image
        src="/images/service-area-map.png"
        alt={t("seo_map_alt")}
        width={900}
        height={560}
        className="w-full rounded"
        loading="lazy"
      />
      <p className={`font-sans text-xs mt-3 ${captionColor}`}>
        {t("seo_map_caption")}
      </p>
    </div>
  );
}
