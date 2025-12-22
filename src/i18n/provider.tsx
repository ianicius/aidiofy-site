import { createContext, useContext, useEffect, useMemo, useState, type FC, type ReactNode } from "react";
import { COPY } from "./copy";
import { resolveLocaleFromPathname, type Locale } from "./locale";
import type { Copy } from "./types";

type I18nValue = {
  locale: Locale;
  copy: Copy;
};

const I18nContext = createContext<I18nValue | null>(null);

export const I18nProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(() => resolveLocaleFromPathname(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setLocale(resolveLocaleFromPathname(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => ({ locale, copy: COPY[locale] }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = (): I18nValue => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};

