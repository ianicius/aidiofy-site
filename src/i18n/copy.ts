import type { Copy } from "./types";
import type { Locale } from "./locale";

import { de } from "./locales/de";
import { en } from "./locales/en";
import { es } from "./locales/es";
import { fr } from "./locales/fr";
import { it } from "./locales/it";
import { ja } from "./locales/ja";
import { ko } from "./locales/ko";
import { pl } from "./locales/pl";
import { pt } from "./locales/pt";
import { zhCN } from "./locales/zh-CN";

export const COPY: Record<Locale, Copy> = {
  en,
  de,
  fr,
  es,
  it,
  pl,
  "zh-CN": zhCN,
  ja,
  ko,
  pt,
};

