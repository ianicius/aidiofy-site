export type Locale = "en" | "de" | "fr" | "es" | "it" | "pl" | "zh-CN" | "ja" | "ko" | "pt";

export const SUPPORTED_LOCALES: readonly Locale[] = [
  "en",
  "de",
  "fr",
  "es",
  "it",
  "pl",
  "zh-CN",
  "ja",
  "ko",
  "pt",
] as const;

export const LOCALE_PATH_SEGMENT: Record<Locale, string> = {
  en: "",
  de: "de",
  fr: "fr",
  es: "es",
  it: "it",
  pl: "pl",
  "zh-CN": "zh-cn",
  ja: "ja",
  ko: "ko",
  pt: "pt",
};

export const localeToPathname = (locale: Locale): string =>
  locale === "en" ? "/" : `/${LOCALE_PATH_SEGMENT[locale]}/`;

export const localeToHrefLang = (locale: Locale): string => locale;

export const resolveLocaleFromPathname = (pathname: string): Locale => {
  const firstSegment = pathname.split("/").filter(Boolean)[0]?.toLowerCase();

  switch (firstSegment) {
    case "de":
      return "de";
    case "fr":
      return "fr";
    case "es":
      return "es";
    case "it":
      return "it";
    case "pl":
      return "pl";
    case "zh-cn":
    case "zh":
      return "zh-CN";
    case "ja":
      return "ja";
    case "ko":
      return "ko";
    case "pt":
      return "pt";
    default:
      return "en";
  }
};

