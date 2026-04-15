"use client";

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

interface LanguageProviderProps {
  children: ReactNode;
  // Server-set initial language — /es/* routes pass "es", English routes pass "en".
  // This enables SSR in the correct language: React initializes useState with
  // this value, so the server renders Spanish HTML on /es/* URLs and hydration
  // matches without a flash.
  initialLanguage: Language;
}

export function LanguageProvider({
  children,
  initialLanguage,
}: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  // The URL is now the source of truth for language — /es/* means Spanish,
  // everything else means English. Client-side setLanguage navigates to the
  // counterpart URL (handled by LanguageToggle), so this just updates state.
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
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
