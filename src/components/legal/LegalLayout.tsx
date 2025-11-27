import type { FC, ReactNode } from "react";
import { Logo } from "../Logo";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

export const LegalLayout: FC<LegalLayoutProps> = ({ title, lastUpdated, children }) => {
  return (
    <div className="min-h-screen w-full bg-background-dark text-text-main">
      <header className="w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-lg sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-3 text-white font-bold text-xl">
            <Logo className="w-9 h-9" />
            AIdiofy
          </a>
          <a
            href="#/"
            className="text-sm font-medium text-text-muted hover:text-white transition-colors"
            aria-label="Back to homepage"
          >
            Powrót do strony głównej
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-10 md:mb-12 space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-text-muted">Last updated: {lastUpdated}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
          <p className="text-base text-text-muted">
            Poniższy dokument opisuje zasady korzystania z AIdiofy oraz sposób przetwarzania danych użytkowników. Dbamy
            o przejrzystość i bezpieczeństwo, dlatego zachęcamy do dokładnego zapoznania się z treścią.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 shadow-xl space-y-10 text-sm md:text-base leading-relaxed text-text-muted">
          {children}
        </div>
      </main>
    </div>
  );
};
