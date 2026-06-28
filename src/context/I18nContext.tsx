import React, { createContext, useContext, useEffect, useState } from "react";
import { content as zhContent } from "../content/zh";
import { content as enContent } from "../content/en";

export type Locale = "zh" | "en";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: typeof zhContent;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

function applyLocaleSideEffects(locale: Locale) {
  if (typeof document === "undefined") return;
  const meta = locale === "zh" ? zhContent.hero.pageMeta : enContent.hero.pageMeta;
  document.documentElement.lang = meta.lang;
  document.title = meta.documentTitle;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem("locale");
    return (saved === "en" || saved === "zh") ? saved : "zh";
  });

  // Apply locale side-effects on mount and whenever the locale changes,
  // so <html lang> and document.title stay in sync with the active content.
  useEffect(() => {
    applyLocaleSideEffects(locale);
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const content = locale === "zh" ? zhContent : enContent;

  return (
    <I18nContext.Provider value={{ locale, setLocale, content }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useLocale must be used within an I18nProvider");
  }
  return context;
}
