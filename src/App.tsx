import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { Waitlist } from "./components/Waitlist";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { PrivacyPolicy } from "./components/legal/PrivacyPolicy";
import { TermsOfUse } from "./components/legal/TermsOfUse";
import { CookieBanner } from "./components/CookieBanner";

type View = "home" | "privacy" | "terms";

const resolveView = (hash: string): View => {
  const normalized = hash.replace(/^#/, "").toLowerCase();
  if (normalized.startsWith("/privacy")) return "privacy";
  if (normalized.startsWith("/terms")) return "terms";
  return "home";
};

function App() {
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
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-background-dark/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-white font-bold text-xl">
            <Logo className="w-9 h-9" />
            AIdiofy
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#features" className="hidden sm:block text-sm font-medium text-text-muted hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hidden sm:block text-sm font-medium text-text-muted hover:text-white transition-colors">How it Works</a>
            <a href="#/privacy-policy" className="hidden sm:block text-sm font-medium text-text-muted hover:text-white transition-colors">Privacy</a>
            <a href="#/terms-of-use" className="hidden sm:block text-sm font-medium text-text-muted hover:text-white transition-colors">Terms</a>
            <a 
              href="#waitlist"
              className="px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white font-medium text-sm transition-all duration-300 border border-primary/20 hover:border-primary"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow w-full">
        <Hero />
        <HowItWorks />
        <Features />
        <Waitlist />
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
