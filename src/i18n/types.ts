export type Screenshot = {
  src: string;
  alt: string;
  title: string;
  category: string;
  feature: string;
};

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
  productShowcase: {
    heading: string;
    description: string;
    videoCaption: string;
    screenshotsHeading: string;
    screenshotsDescription: string;
    screenshotDescriptions: {
      "01-full-cast": string;
      "02-add-text": string;
      "03-direct-scene": string;
      "04-cast-voices": string;
      "05-listen-story": string;
      "06-translate-narrate": string;
      "07-save-stories": string;
    };
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
