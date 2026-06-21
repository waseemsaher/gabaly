import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations, isRTL } from "./i18n";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.en;
  isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    // Update document direction and lang attribute
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL(lang) ? "rtl" : "ltr";
  }, [lang]);

  const value: LanguageContextType = {
    lang,
    setLang,
    t: translations[lang],
    isRTL: isRTL(lang),
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
