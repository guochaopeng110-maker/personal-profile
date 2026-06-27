import React, { createContext, useContext, useState } from "react";
import { content as zhContent } from "../content/zh";
import { content as enContent } from "../content/en";

export type Locale = "zh" | "en";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: typeof zhContent;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const saved = localStorage.getItem("locale");
    return (saved === "en" || saved === "zh") ? saved : "zh";
  });

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
