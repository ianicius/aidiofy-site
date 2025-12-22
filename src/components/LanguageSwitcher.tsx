import { useEffect, useMemo, useRef, useState, type FC } from "react";
import { ChevronDown } from "lucide-react";
import { localeToPathname, useI18n, type Locale } from "../i18n";

type LanguageOption = {
  locale: Locale;
  label: string;
  short: string;
  flagSrc: string;
};

const LANGUAGES: readonly LanguageOption[] = [
  { locale: "en", label: "English", short: "EN", flagSrc: "/flags/uk.svg" },
  { locale: "de", label: "Deutsch", short: "DE", flagSrc: "/flags/de.svg" },
  { locale: "es", label: "Español", short: "ES", flagSrc: "/flags/es.svg" },
  { locale: "pt", label: "Português", short: "PT", flagSrc: "/flags/pt.svg" },
  { locale: "fr", label: "Français", short: "FR", flagSrc: "/flags/fr.svg" },
  { locale: "it", label: "Italiano", short: "IT", flagSrc: "/flags/it.svg" },
  { locale: "pl", label: "Polski", short: "PL", flagSrc: "/flags/pl.svg" },
  { locale: "zh-CN", label: "中文（简体）", short: "ZH", flagSrc: "/flags/cn.svg" },
  { locale: "ja", label: "日本語", short: "JA", flagSrc: "/flags/jp.svg" },
  { locale: "ko", label: "한국어", short: "KO", flagSrc: "/flags/kr.svg" },
] as const;

export const LanguageSwitcher: FC = () => {
  const { locale } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current) return;
      const target = event.target as Node | null;
      if (target && !rootRef.current.contains(target)) setOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const current = useMemo(
    () => LANGUAGES.find((l) => l.locale === locale) ?? LANGUAGES[0],
    [locale],
  );

  const currentHash = typeof window !== "undefined" ? window.location.hash : "";

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="px-4 py-2 rounded-lg bg-surface border border-border-subtle/80 hover:bg-surface/80 text-text-main font-semibold text-sm transition-all duration-200 flex items-center gap-2"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Language: ${current.label}`}
      >
        <img
          src={current.flagSrc}
          alt=""
          className="w-6 h-4 rounded-sm border border-border-subtle/60 bg-surface-muted object-cover"
          aria-hidden
        />
        <span className="text-sm font-semibold tracking-wide">{current.short}</span>
        <ChevronDown className={`w-4 h-4 text-text-muted transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Languages"
          className="absolute right-0 mt-3 w-56 rounded-2xl bg-surface border border-border-subtle/80 shadow-glow-obsidian overflow-hidden"
        >
          {LANGUAGES.map((lang) => {
            const href = `${localeToPathname(lang.locale)}${currentHash}`;
            const active = lang.locale === locale;
            return (
              <a
                key={lang.locale}
                href={href}
                role="menuitem"
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={[
                  "flex items-center gap-3 px-4 py-3 text-sm transition-colors",
                  active
                    ? "bg-primary/15 text-text-main"
                    : "text-text-muted hover:text-text-main hover:bg-surface/70",
                ].join(" ")}
              >
                <img
                  src={lang.flagSrc}
                  alt=""
                  className="w-6 h-4 rounded-sm border border-border-subtle/60 bg-surface-muted object-cover"
                  aria-hidden
                />
                <span className="font-medium">{lang.label}</span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};
