"use client";

// FUTURE REFACTOR NOTE:
// All content components currently use 'use client' because of this context.
// If SSR/SSG performance becomes a concern, consider moving language detection
// to middleware (reading Accept-Language or a cookie) and passing language as
// a prop or via a server-compatible context so leaf components can be RSCs.

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import en from "@/locales/en.json";
import es from "@/locales/es.json";

export type Language = "en" | "es";
type Translations = typeof en;
export type TranslationKey = keyof Translations;

const translations: Record<Language, Translations> = { en, es };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("cleanmax-lang") as Language | null;
    if (saved === "en" || saved === "es") {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("cleanmax-lang", lang);
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] ?? translations.en[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useTranslation must be used inside <LanguageProvider>");
  return ctx;
}
