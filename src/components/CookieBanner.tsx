import type { FC } from "react";
import { useEffect, useMemo, useState } from "react";
import { useI18n } from "../i18n";

declare global {
  interface Window {
    dataLayer?: unknown[];
    loadGA?: () => void;
    __gaMeasurementId?: string;
  }
}

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "aidiofy-cookie-consent";
let gaScriptLoaded = false;

const readConsent = (): ConsentState | null => {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
};

const persistConsent = (consent: ConsentState) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    // ignore storage failures
  }
};

const loadGoogleAnalytics = (measurementId: string) => {
  if (gaScriptLoaded) return;
  gaScriptLoaded = true;

  const existing = document.getElementById("ga4-script");
  if (!existing) {
    const script = document.createElement("script");
    script.id = "ga4-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  const w = window as Window;
  w.dataLayer = w.dataLayer || [];
  function gtag(...args: unknown[]) {
    w.dataLayer?.push(args);
  }
  gtag("js", new Date());
  gtag("config", measurementId, { anonymize_ip: true });
};

export const CookieBanner: FC = () => {
  const { copy } = useI18n();
  const c = copy.cookie;
  const [consent, setConsent] = useState<ConsentState | null>(() => readConsent());
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(consent?.analytics ?? false);
  const measurementId = useMemo(() => {
    const envId =
      (import.meta as ImportMeta & { env: { VITE_GA_MEASUREMENT_ID?: string } }).env
        .VITE_GA_MEASUREMENT_ID;
    if (envId) return envId;
    if (typeof window !== "undefined") {
      return window.__gaMeasurementId;
    }
    return undefined;
  }, []);

  useEffect(() => {
    if (consent) {
      persistConsent(consent);
    }
  }, [consent]);

  const openSettings = () => {
    setAnalyticsChecked(consent?.analytics ?? false);
    setShowSettings(true);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const disableKey = measurementId ? `ga-disable-${measurementId}` : null;

    const w = window as unknown as Record<string, unknown>;

    if (!consent || !consent.analytics) {
      if (disableKey) {
        w[disableKey] = true;
      }
      return;
    }

    if (disableKey) {
      w[disableKey] = false;
    }

    if (typeof window.loadGA === "function") {
      window.loadGA();
      return;
    }

    if (measurementId) {
      loadGoogleAnalytics(measurementId);
    }
  }, [consent, measurementId]);

  const saveConsent = (analytics: boolean) => {
    setConsent({
      necessary: true,
      analytics,
      updatedAt: new Date().toISOString(),
    });
    setShowSettings(false);
  };

  const bannerVisible = !consent;

  return (
    <>
      {bannerVisible && (
        <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
          <div className="max-w-4xl w-full bg-surface border border-border-subtle/80 backdrop-blur-xl rounded-2xl shadow-glow-obsidian p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2 text-sm text-text-muted">
                <p className="text-lg font-semibold text-text-main">{c.bannerTitle}</p>
                <p>{c.bannerBody}</p>
                <p>
                  {c.bannerLearnMorePrefix}{" "}
                  <a className="text-text-main underline decoration-primary/60 hover:decoration-primary transition-colors" href="#/privacy-policy">
                    {c.bannerLearnMoreLink}
                  </a>
                  {c.bannerLearnMoreSuffix}
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full sm:w-auto sm:min-w-[240px]">
                <button
                  onClick={() => saveConsent(true)}
                  className="w-full rounded-lg bg-primary text-text-main font-semibold px-4 py-2.5 shadow-glow-accent hover:bg-primary/90 transition-all duration-200"
                >
                  {c.acceptAll}
                </button>
                <button
                  onClick={() => saveConsent(false)}
                  className="w-full rounded-lg bg-surface text-text-main font-semibold px-4 py-2.5 border border-border-subtle/80 hover:bg-surface/80 transition-all duration-200"
                >
                  {c.necessaryOnly}
                </button>
                <button
                  onClick={openSettings}
                  className="w-full rounded-lg bg-transparent text-text-muted hover:text-text-main font-semibold px-4 py-2.5 border border-border-subtle/70 hover:border-border-subtle transition-all duration-200"
                >
                  {c.settings}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-background-dark/90 backdrop-blur-md">
          <div className="max-w-2xl w-full bg-surface border border-border-subtle/90 rounded-2xl shadow-glow-obsidian overflow-hidden">
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-2xl font-semibold text-text-main">{c.modalTitle}</p>
                  <p className="text-sm text-text-muted mt-1">
                    {c.modalDescription}
                  </p>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-text-muted hover:text-text-main transition-colors"
                  aria-label={c.closeAria}
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl border border-border-subtle/70 bg-surface/80 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-text-main">{c.necessaryTitle}</p>
                      <p className="text-sm text-text-muted mt-1">{c.necessaryDescription}</p>
                    </div>
                    <span className="text-xs font-semibold text-text-main bg-primary/20 px-3 py-1 rounded-full border border-primary/35">
                      {c.alwaysActive}
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-border-subtle/70 bg-surface/80 p-4 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-text-main">{c.analyticsTitle}</p>
                      <p className="text-sm text-text-muted mt-1">{c.analyticsDescription}</p>
                    </div>
                    <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        className="h-4 w-4 accent-primary"
                        checked={analyticsChecked}
                        onChange={(e) => setAnalyticsChecked(e.target.checked)}
                      />
                      <span className="text-sm text-text-muted">{analyticsChecked ? c.enabled : c.disabled}</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-end gap-3">
                <button
                  onClick={() => saveConsent(analyticsChecked)}
                  className="w-full sm:w-auto rounded-lg bg-primary text-text-main font-semibold px-5 py-2.5 shadow-glow-accent hover:bg-primary/90 transition-all duration-200"
                >
                  {c.saveSettings}
                </button>
                <button
                  onClick={() => {
                    setAnalyticsChecked(false);
                    saveConsent(false);
                  }}
                  className="w-full sm:w-auto rounded-lg bg-surface text-text-main font-semibold px-5 py-2.5 border border-border-subtle/80 hover:bg-surface/80 transition-all duration-200"
                >
                  {c.necessaryOnly}
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="w-full sm:w-auto rounded-lg bg-transparent text-text-muted hover:text-text-main font-semibold px-5 py-2.5 border border-border-subtle/70 hover:border-border-subtle transition-all duration-200"
                >
                  {c.cancel}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {!bannerVisible && !showSettings && (
        <div className="fixed bottom-4 right-4 z-40">
          <button
            onClick={openSettings}
            className="rounded-full bg-surface text-text-muted hover:text-text-main px-4 py-2 border border-border-subtle/70 hover:border-border-subtle transition-all text-xs font-semibold backdrop-blur"
          >
            {c.cookieSettingsButton}
          </button>
        </div>
      )}
    </>
  );
};
