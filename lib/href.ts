import type { Language } from "@/contexts/LanguageContext";

// Localizes an internal path based on the current language.
// Spanish routes live under /es/*; EN routes live at the bare path.
// Already-prefixed paths and non-internal hrefs pass through unchanged.
export function localizeHref(path: string, language: Language): string {
  if (language !== "es") return path;
  if (!path.startsWith("/")) return path;
  if (path === "/es" || path.startsWith("/es/")) return path;
  if (path === "/") return "/es";
  return `/es${path}`;
}
