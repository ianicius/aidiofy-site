import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { ProductShowcase } from "./components/ProductShowcase";
import { Features } from "./components/Features";
import { FAQ } from "./components/FAQ";
import { Waitlist } from "./components/Waitlist";
import { Footer } from "./components/Footer";
import Logo from "./components/Logo";
import { PrivacyPolicy } from "./components/legal/PrivacyPolicy";
import { TermsOfUse } from "./components/legal/TermsOfUse";
import { CookieBanner } from "./components/CookieBanner";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { BlogList } from "./components/Blog/BlogList";
import { BlogPost } from "./components/Blog/BlogPost";
import { getBlogPosts, BlogPost as BlogPostType } from "./data/blog";
import { useI18n } from "./i18n";
import { Locale } from "./i18n/locale";

type View = "home" | "privacy" | "terms" | "blog" | "blog-post";

interface ViewState {
  view: View;
  post?: BlogPostType;
}

const resolveViewState = (hash: string, posts: BlogPostType[]): ViewState => {
  const normalized = hash.replace(/^#/, "").toLowerCase();

  if (normalized.startsWith("/privacy")) return { view: "privacy" };
  if (normalized.startsWith("/terms")) return { view: "terms" };
  if (normalized === "/blog") return { view: "blog" };

  if (normalized.startsWith("/blog/")) {
    const slug = normalized.split("/blog/")[1];
    const post = posts.find(p => p.slug === slug);
    if (post) return { view: "blog-post", post };
  }

  return { view: "home" };
};

function App() {
  const { copy, locale } = useI18n();
  // Get posts for current locale
  const posts = getBlogPosts(locale);

  const [viewState, setViewState] = useState<ViewState>(() => resolveViewState(window.location.hash, posts));

  useEffect(() => {
    const updateView = () => setViewState(resolveViewState(window.location.hash, posts));

    window.addEventListener("hashchange", updateView);
    // Also update when locale/posts change
    updateView();

    return () => window.removeEventListener("hashchange", updateView);
  }, [locale]); // posts is derived from locale, so dependency on locale matches

  // Dedicated Landing Page View
  const renderContent = () => {
    switch (viewState.view) {
      case "privacy":
        return <PrivacyPolicy />;
      case "terms":
        return <TermsOfUse />;
      case "blog":
        return <BlogList />;
      case "blog-post":
        return viewState.post ? <BlogPost post={viewState.post} /> : <div className="pt-32 text-center text-text-main">Post not found</div>;
      default:
        return (
          <>
            <Hero />
            <Features />
            <ProductShowcase />
            <FAQ />
            <Waitlist />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col font-display bg-background-dark text-text-main overflow-x-hidden selection:bg-primary/30">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        {copy.nav.skipToMainContent}
      </a>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-background-dark/85 backdrop-blur-xl border-b border-border-subtle/60" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 h-18 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-3 text-text-main font-display font-bold text-2xl hover:opacity-80 transition-opacity">
            <Logo className="w-9 h-9" aria-hidden="true" />
            <span>AIdiofy</span>
          </a>

          <div className="flex items-center gap-6">
            <a href="#features" className="hidden sm:block text-body-sm font-medium text-text-muted hover:text-text-main hover:border-b-2 hover:border-primary/50 smooth-transition pb-1" aria-label="Go to Features section">
              {copy.nav.features}
            </a>
            <a href="#product-showcase" className="hidden sm:block text-body-sm font-medium text-text-muted hover:text-text-main hover:border-b-2 hover:border-primary/50 smooth-transition pb-1" aria-label="Go to Product Showcase section">
              {copy.nav.howItWorks}
            </a>
            <a href="#/blog" className="text-body-sm font-medium text-text-muted hover:text-text-main hover:border-b-2 hover:border-primary/50 smooth-transition pb-1" aria-label="Go to Blog">
              Blog
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
        {renderContent()}
      </main>

      {/* Shared Footer Area */}
      {viewState.view !== "privacy" && viewState.view !== "terms" && (
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
      )}

      {viewState.view !== "privacy" && viewState.view !== "terms" && <Footer />}
      <CookieBanner />
    </div>
  );
}

export default App;
