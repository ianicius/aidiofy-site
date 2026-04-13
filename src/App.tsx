import { useEffect } from "react";
import { Routes, Route, Link, useParams, useLocation } from "react-router-dom";
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
import { getBlogPosts } from "./data/blog";
import { useI18n } from "./i18n";
import { LOCALE_PATH_SEGMENT } from "./i18n/locale";
import { Helmet } from "react-helmet-async";
import {
  GlobalStructuredData,
  HomeStructuredData,
} from "./components/StructuredData";
import { SocialProof } from "./components/SocialProof";

/** Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  const { copy, locale } = useI18n();
  const prefix = locale === "en" ? "" : `/${LOCALE_PATH_SEGMENT[locale]}`;
  const canonicalUrl = `https://aidiofy.com${prefix || "/"}`;

  return (
    <>
      <Helmet>
        <title>{copy.meta.home.title}</title>
        <meta name="description" content={copy.meta.home.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={copy.meta.home.title} />
        <meta property="og:description" content={copy.meta.home.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://aidiofy.com/og-image.png" />
        <meta name="twitter:title" content={copy.meta.home.title} />
        <meta name="twitter:description" content={copy.meta.home.description} />
        <meta name="twitter:image" content="https://aidiofy.com/og-image.png" />
      </Helmet>
      <HomeStructuredData />
      <Hero />
      <SocialProof />
      <Features />
      <ProductShowcase />
      <FAQ />
      <Waitlist />
    </>
  );
}

function BlogPostRoute() {
  const { slug } = useParams<{ slug: string }>();
  const { locale } = useI18n();
  const posts = getBlogPosts(locale);
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 text-center text-text-main">Post not found</div>
    );
  }

  return <BlogPost post={post} />;
}

function App() {
  const { copy, locale } = useI18n();
  const location = useLocation();
  const isLegalPage =
    location.pathname === "/privacy" || location.pathname === "/terms";

  // Absolute home path for section anchor links (<a> tags, not <Link>)
  const homeBase =
    locale === "en" ? "/" : `/${LOCALE_PATH_SEGMENT[locale]}/`;

  // Redirect legacy hash routes (e.g. #/blog/slug) to clean URLs
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash.startsWith("#/")) return;

    let subPath = hash.slice(1); // "/blog/slug"
    // Map old route names to new
    if (subPath.startsWith("/privacy")) subPath = "/privacy";
    if (subPath.startsWith("/terms")) subPath = "/terms";

    const prefix =
      locale === "en" ? "" : `/${LOCALE_PATH_SEGMENT[locale]}`;
    const newUrl = `${prefix}${subPath}` || "/";
    window.location.replace(newUrl);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="min-h-screen w-full flex flex-col font-display bg-background-dark text-text-main overflow-x-hidden selection:bg-primary/30">
      <ScrollToTop />
      <GlobalStructuredData />

      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        {copy.nav.skipToMainContent}
      </a>

      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 w-full z-40 bg-background-dark/85 backdrop-blur-xl border-b border-border-subtle/60"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 h-18 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 text-text-main font-display font-bold text-2xl hover:opacity-80 transition-opacity"
          >
            <Logo className="w-9 h-9" aria-hidden="true" />
            <span>AIdiofy</span>
          </Link>

          <div className="flex items-center gap-6">
            <a
              href={`${homeBase}#features`}
              className="hidden sm:block text-body-sm font-medium text-text-muted hover:text-text-main hover:border-b-2 hover:border-primary/50 smooth-transition pb-1"
              aria-label="Go to Features section"
            >
              {copy.nav.features}
            </a>
            <a
              href={`${homeBase}#product-showcase`}
              className="hidden sm:block text-body-sm font-medium text-text-muted hover:text-text-main hover:border-b-2 hover:border-primary/50 smooth-transition pb-1"
              aria-label="Go to Product Showcase section"
            >
              {copy.nav.howItWorks}
            </a>
            <Link
              to="/blog"
              className="text-body-sm font-medium text-text-muted hover:text-text-main hover:border-b-2 hover:border-primary/50 smooth-transition pb-1"
              aria-label="Go to Blog"
            >
              Blog
            </Link>
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPostRoute />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Shared Footer Area */}
      {!isLegalPage && (
        <div className="border-t border-border-subtle/30 py-8 bg-surface">
          <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
            <p className="text-body-sm font-medium text-text-tertiary">
              {copy.legal.poweredBy}
            </p>
            <div className="flex items-center gap-6 text-text-muted">
              <span
                className="text-body-sm hover:text-text-main smooth-transition"
                title="AI Voice Technology"
              >
                {copy.legal.elevenLabs}
              </span>
              <span
                className="text-body-sm hover:text-text-main smooth-transition"
                title="AI Character Platform"
              >
                {copy.legal.inworld}
              </span>
              <span
                className="text-body-sm hover:text-text-main smooth-transition"
                title="Google AI"
              >
                {copy.legal.gemini}
              </span>
            </div>
          </div>
        </div>
      )}

      {!isLegalPage && <Footer />}
      <CookieBanner />
    </div>
  );
}

export default App;
