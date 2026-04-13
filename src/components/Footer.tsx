import type { FC } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useI18n } from "../i18n";
import { LOCALE_PATH_SEGMENT } from "../i18n/locale";

export const Footer: FC = () => {
  const { copy, locale } = useI18n();
  const homeBase = locale === "en" ? "/" : `/${LOCALE_PATH_SEGMENT[locale]}/`;

  return (
    <footer className="border-t border-border-subtle/60 py-16 bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-10 h-10" />
              <span className="text-2xl font-display font-bold text-text-main">AIdiofy</span>
            </div>
            <p className="text-body-sm text-text-tertiary text-center md:text-left max-w-xs">
              {copy.footer.tagline}
            </p>
          </div>

          {/* Column 2 - Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-caption uppercase tracking-wider text-text-tertiary mb-4 font-semibold">
              {copy.footer.navigationHeading}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`${homeBase}#features`}
                className="text-body-sm text-text-muted hover:text-text-main hover:underline decoration-primary/60 underline-offset-4 smooth-transition"
              >
                {copy.nav.features}
              </a>
              <a
                href={`${homeBase}#product-showcase`}
                className="text-body-sm text-text-muted hover:text-text-main hover:underline decoration-primary/60 underline-offset-4 smooth-transition"
              >
                {copy.nav.howItWorks}
              </a>
              <a
                href={`${homeBase}#faq`}
                className="text-body-sm text-text-muted hover:text-text-main hover:underline decoration-primary/60 underline-offset-4 smooth-transition"
              >
                {copy.nav.faq}
              </a>
              <Link
                to="/blog"
                className="text-body-sm text-text-muted hover:text-text-main hover:underline decoration-primary/60 underline-offset-4 smooth-transition"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Column 3 - Legal */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-caption uppercase tracking-wider text-text-tertiary mb-4 font-semibold">
              {copy.footer.legalHeading}
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                to="/privacy"
                className="text-body-sm text-text-muted hover:text-text-main hover:underline decoration-primary/60 underline-offset-4 smooth-transition"
              >
                {copy.footer.privacy}
              </Link>
              <Link
                to="/terms"
                className="text-body-sm text-text-muted hover:text-text-main hover:underline decoration-primary/60 underline-offset-4 smooth-transition"
              >
                {copy.footer.terms}
              </Link>
              <a
                href="mailto:rj@aidiofy.com"
                className="text-body-sm text-text-muted hover:text-text-main hover:underline decoration-primary/60 underline-offset-4 smooth-transition"
              >
                {copy.footer.contact}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-subtle/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-caption text-text-tertiary text-center md:text-left">
            {copy.footer.copyright}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-caption text-text-tertiary">{copy.legal.poweredBy}</span>
            <span className="text-caption text-text-muted hover:text-text-main smooth-transition">ElevenLabs</span>
            <span className="text-text-tertiary">&bull;</span>
            <span className="text-caption text-text-muted hover:text-text-main smooth-transition">Inworld</span>
            <span className="text-text-tertiary">&bull;</span>
            <span className="text-caption text-text-muted hover:text-text-main smooth-transition">Gemini</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
