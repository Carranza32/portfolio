"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const STORAGE_KEY = "portfolio-lang";

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "es") {
        setLang(stored);
      } else {
        const browserLang = typeof window !== "undefined" ? (navigator.language || navigator.languages?.[0]) : "";
        if (browserLang) {
          const primary = browserLang.split("-")[0].toLowerCase();
          if (primary === "en" || primary === "es") {
            setLang(primary);
          } else {
            const hasEn = navigator.languages?.some(l => l.toLowerCase().startsWith("en"));
            const hasEs = navigator.languages?.some(l => l.toLowerCase().startsWith("es"));
            if (hasEn) {
              setLang("en");
            } else if (hasEs) {
              setLang("es");
            } else {
              setLang("es");
            }
          }
        }
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang === "es" ? "es" : "en";
  }, [lang, hydrated]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "es" : "en"));
  }, []);

  const t = useCallback((obj) => {
    if (!obj || typeof obj !== "object") return "";
    return obj[lang] ?? obj.en ?? "";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (ctx === undefined) {
    throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  }
  return ctx;
}
