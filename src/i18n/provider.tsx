import { useEffect, useMemo, useState, type FC, type ReactNode } from "react";
import { COPY } from "./copy";
import { resolveLocaleFromPathname, type Locale } from "./locale";
import { I18nContext, type I18nValue } from "./context";

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

  const value = useMemo<I18nValue>(() => ({ locale, copy: COPY[locale] }), [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
