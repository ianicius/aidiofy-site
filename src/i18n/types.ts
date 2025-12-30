export type Copy = {
  nav: {
    features: string;
    howItWorks: string;
    faq: string;
    privacy: string;
    terms: string;
    app: string;
    skipToMainContent: string;
  };
  hero: {
    title: string;
    highlight: string;
    description: string;
    ctaHowItWorks: string;
    ctaTryApp: string;
  };
  features: {
    heading: string;
    description: string;
    items: Array<{ title: string; description: string }>;
  };
  howItWorks: {
    heading: string;
    description: string;
    steps: Array<{ title: string; description: string }>;
  };
  faq: {
    heading: string;
    description: string;
    items: Array<{ question: string; answer: string }>;
  };
  waitlist: {
    heading: string;
    description: string;
    alreadyOnBoardLead: string;
    alreadyOnBoardBeforeLink: string;
    alreadyOnBoardAfterLink: string;
    contactCta: string;
    emailLabel: string;
  };
  footer: {
    tagline: string;
    navigationHeading: string;
    legalHeading: string;
    privacy: string;
    terms: string;
    contact: string;
    copyright: string;
  };
  cookie: {
    bannerTitle: string;
    bannerBody: string;
    bannerLearnMorePrefix: string;
    bannerLearnMoreLink: string;
    bannerLearnMoreSuffix: string;
    acceptAll: string;
    necessaryOnly: string;
    settings: string;
    modalTitle: string;
    modalDescription: string;
    closeAria: string;
    necessaryTitle: string;
    necessaryDescription: string;
    alwaysActive: string;
    analyticsTitle: string;
    analyticsDescription: string;
    enabled: string;
    disabled: string;
    saveSettings: string;
    cancel: string;
    cookieSettingsButton: string;
  };
  legal: {
    description: string;
    lastUpdatedLabel: string;
    backToHome: string;
    poweredBy: string;
    elevenLabs: string;
    inworld: string;
    gemini: string;
  };
};
