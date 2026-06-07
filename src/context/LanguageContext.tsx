import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Lang = "en" | "fr";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem("lang") as Lang) ?? "en";
  });

  function handleSetLang(l: Lang) {
    localStorage.setItem("lang", l);
    setLang(l);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
