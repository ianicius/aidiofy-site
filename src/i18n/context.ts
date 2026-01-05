import { createContext } from "react";
import type { Locale } from "./locale";
import type { Copy } from "./types";

export type I18nValue = {
  locale: Locale;
  copy: Copy;
};

export const I18nContext = createContext<I18nValue | null>(null);

