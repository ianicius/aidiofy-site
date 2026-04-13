import type { FC } from "react";
import { Helmet } from "react-helmet-async";
import { useI18n } from "../i18n";
import { LOCALE_PATH_SEGMENT } from "../i18n/locale";
import type { BlogPost } from "../data/blog";

/** Organization + WebSite schema — rendered on every page */
export const GlobalStructuredData: FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AIdiofy",
    url: "https://aidiofy.com",
    logo: "https://aidiofy.com/favicon.svg",
    description:
      "AI-powered text-to-audio platform. Turn rulebooks, handouts, and any printed text into immersive audio with multi-character voice casting.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "rj@aidiofy.com",
      contactType: "customer support",
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AIdiofy",
    url: "https://aidiofy.com",
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(webSiteSchema)}
      </script>
    </Helmet>
  );
};

/** SoftwareApplication schema — rendered on home page */
export const HomeStructuredData: FC = () => {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AIdiofy",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Web",
    url: "https://app.aidiofy.com",
    description:
      "Turn books, rulebooks, and game text into immersive audio with AI voice casting. Scan any text, cast AI voices, and listen with emotional depth.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free to start",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(softwareSchema)}
      </script>
    </Helmet>
  );
};

/** Article schema — rendered on individual blog posts */
export const ArticleStructuredData: FC<{ post: BlogPost }> = ({ post }) => {
  const { locale } = useI18n();
  const prefix =
    locale === "en" ? "" : `/${LOCALE_PATH_SEGMENT[locale]}`;
  const url = `https://aidiofy.com${prefix}/blog/${post.slug}`;

  // Parse the date string to ISO format
  const publishDate = new Date(post.date).toISOString();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url,
    datePublished: publishDate,
    dateModified: publishDate,
    author: {
      "@type": "Organization",
      name: "AIdiofy",
      url: "https://aidiofy.com",
    },
    publisher: {
      "@type": "Organization",
      name: "AIdiofy",
      url: "https://aidiofy.com",
      logo: {
        "@type": "ImageObject",
        url: "https://aidiofy.com/favicon.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `https://aidiofy.com${prefix || "/"}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `https://aidiofy.com${prefix}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};

/** BreadcrumbList for blog listing page */
export const BlogListStructuredData: FC = () => {
  const { locale } = useI18n();
  const prefix =
    locale === "en" ? "" : `/${LOCALE_PATH_SEGMENT[locale]}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `https://aidiofy.com${prefix || "/"}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `https://aidiofy.com${prefix}/blog`,
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
    </Helmet>
  );
};
