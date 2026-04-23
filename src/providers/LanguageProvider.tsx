"use client";

import { createContext, useContext, useState } from "react";

export type Lang = "en" | "ru";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";

    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved) return saved;

    // fallback на язык браузера
    return navigator.language.startsWith("ru") ? "ru" : "en";
  });

  const changeLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);