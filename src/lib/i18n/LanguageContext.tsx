"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dictionary, type Language } from "./dictionary";

const STORAGE_KEY = "ai6g-language";

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
  dict: typeof dictionary.en;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "pt") setLanguage(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next: Language = prev === "en" ? "pt" : "en";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, dict: dictionary[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
};
