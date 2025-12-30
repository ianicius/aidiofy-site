import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { FAQ } from "./components/FAQ";
import { Waitlist } from "./components/Waitlist";
import { Footer } from "./components/Footer";
import Logo from "./components/Logo";
import { PrivacyPolicy } from "./components/legal/PrivacyPolicy";
import { TermsOfUse } from "./components/legal/TermsOfUse";
import { CookieBanner } from "./components/CookieBanner";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { useI18n } from "./i18n";

type View = "home" | "privacy" | "terms";

const resolveView = (hash: string): View => {
  const normalized = hash.replace(/^#/, "").toLowerCase();
  if (normalized.startsWith("/privacy")) return "privacy";
  if (normalized.startsWith("/terms")) return "terms";
  return "home";
};

function App() {
  const { copy } = useI18n();
  const [view, setView] = useState<View>(() => resolveView(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setView(resolveView(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (view === "privacy") {
    return (
      <>
        <PrivacyPolicy />
        <CookieBanner />
      </>
    );
  }

  if (view === "terms") {
    return (
      <>
        <TermsOfUse />
        <CookieBanner />
      </>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col font-display bg-background-dark text-text-main overflow-x-hidden selection:bg-primary/30">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-background-dark/85 backdrop-blur-xl border-b border-border-subtle/60" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3 text-text-main font-display font-bold text-2xl">
            <Logo className="w-9 h-9" aria-hidden="true" />
            <span>AIdiofy</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#features" className="hidden sm:block text-body-sm font-medium text-text-muted hover:text-text-main hover:border-b-2 hover:border-primary/50 smooth-transition pb-1" aria-label="Go to Features section">
              {copy.nav.features}
            </a>
            <a href="#how-it-works" className="hidden sm:block text-body-sm font-medium text-text-muted hover:text-text-main hover:border-b-2 hover:border-primary/50 smooth-transition pb-1" aria-label="Go to How It Works section">
              {copy.nav.howItWorks}
            </a>
            <a href="#/privacy-policy" className="hidden sm:block text-body-sm font-medium text-text-muted hover:text-text-main hover:border-b-2 hover:border-primary/50 smooth-transition pb-1" aria-label="Go to Privacy Policy">
              {copy.nav.privacy}
            </a>
            <a href="#/terms-of-use" className="hidden sm:block text-body-sm font-medium text-text-muted hover:text-text-main hover:border-b-2 hover:border-primary/50 smooth-transition pb-1" aria-label="Go to Terms of Use">
              {copy.nav.terms}
            </a>
            <LanguageSwitcher />
            <a 
              href="https://app.aidiofy.com"
              target="_blank"
              rel="noreferrer"
              className="h-10 px-6 rounded-xl bg-primary hover:bg-primary-hover text-text-main font-semibold text-body-sm shadow-glow-accent smooth-transition flex items-center justify-center"
              aria-label="Open AIdiofy App"
            >
              {copy.nav.app}
            </a>
          </div>
        </div>
      </nav>

      <main id="main-content" className="flex-grow w-full">
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
        <Waitlist />
      </main>

      <div className="border-t border-border-subtle/30 py-8 bg-surface">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
          <p className="text-body-sm font-medium text-text-tertiary">{copy.legal.poweredBy}</p>
          <div className="flex items-center gap-6 text-text-muted">
            <span className="text-body-sm hover:text-text-main smooth-transition" title="AI Voice Technology">
              {copy.legal.elevenLabs}
            </span>
            <span className="text-body-sm hover:text-text-main smooth-transition" title="AI Character Platform">
              {copy.legal.inworld}
            </span>
            <span className="text-body-sm hover:text-text-main smooth-transition" title="Google AI">
              {copy.legal.gemini}
            </span>
          </div>
        </div>
      </div>

      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
