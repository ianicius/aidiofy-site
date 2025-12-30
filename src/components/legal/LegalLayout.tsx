import type { FC, ReactNode } from "react";
import Logo from "../Logo";
import { useI18n } from "../../i18n";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export const LegalLayout: FC<LegalLayoutProps> = ({ title, lastUpdated, children }) => {
  const { copy } = useI18n();
  
  return (
    <div className="min-h-screen w-full bg-background-dark text-text-main">
      <header className="w-full border-b border-border-subtle/60 bg-background-dark/90 backdrop-blur-lg sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-3 text-text-main font-bold text-xl">
            <Logo className="w-9 h-9" />
            AIdiofy
          </a>
          <a
            href="#/"
            className="text-sm font-medium text-text-muted hover:text-text-main transition-colors"
            aria-label="Back to homepage"
          >
            {copy.legal.backToHome}
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-10 md:mb-12 space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-text-muted">
            {copy.legal.lastUpdatedLabel} {lastUpdated}
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-text-main">{title}</h1>
          <p className="text-base text-text-muted">
            {copy.legal.description}
          </p>
        </div>

        <div className="bg-surface border border-border-subtle rounded-2xl p-6 md:p-10 shadow-glow-obsidian space-y-10 text-sm md:text-base leading-relaxed text-text-muted">
          {children}
        </div>
      </main>
    </div>
  );
};
