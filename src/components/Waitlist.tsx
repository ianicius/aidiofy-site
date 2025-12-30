import { useState, type FC } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { useI18n } from "../i18n";

export const Waitlist: FC = () => {
  const { copy } = useI18n();
  const [showContact, setShowContact] = useState(false);

  return (
    <section id="app" className="py-24 px-4 bg-background-dark relative">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-glow-primary rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-surface border-2 border-border-subtle rounded-4xl p-8 md:p-16 text-center relative overflow-hidden animate-fade-in-up">
          {/* Subtle noise texture */}
          <div className="absolute inset-0 rounded-4xl opacity-[0.005] pointer-events-none noise-texture"></div>

          <div className="relative z-10">
            <h2 className="text-heading-1 md:text-display-md font-display font-bold text-text-main mb-6">
              {copy.waitlist.heading}
            </h2>
            
            <p className="text-body-lg text-text-muted max-w-xl mx-auto mb-8 leading-relaxed">
              {copy.waitlist.description}
            </p>

            <div className="max-w-xl mx-auto mb-10 p-4 bg-background-dark border border-border-subtle rounded-2xl text-body-md text-text-main shadow-glow-obsidian-subtle">
              <span className="font-semibold text-text-main">
                {copy.waitlist.alreadyOnBoardLead}
              </span>{" "}
              {copy.waitlist.alreadyOnBoardBeforeLink}{" "}
              <a 
                href="https://app.aidiofy.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-primary font-semibold hover:text-primary-hover underline decoration-primary/60 underline-offset-4 smooth-transition"
              >
                app.aidiofy.com
              </a>{" "}
              {copy.waitlist.alreadyOnBoardAfterLink}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://app.aidiofy.com"
                target="_blank"
                rel="noreferrer"
                className="h-14 px-8 rounded-xl bg-primary hover:bg-primary-hover text-text-main font-bold text-lg shadow-glow-accent smooth-transition flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                Try the App Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 smooth-transition" />
              </a>

              <button 
                type="button"
                onClick={() => setShowContact((open) => !open)}
                onBlur={() => setShowContact(false)}
                className="h-14 px-8 rounded-xl bg-transparent border-2 border-primary hover:bg-glow-primary text-text-main font-semibold text-lg smooth-transition flex items-center justify-center gap-2 group w-full sm:w-auto"
              >
                <Mail className="w-5 h-5" />
                {copy.waitlist.contactCta}
              </button>

              {showContact && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-6 py-4 rounded-xl bg-surface-elevated border-2 border-border-subtle text-text-main shadow-glow-obsidian w-max max-w-[calc(100vw-3rem)] animate-fade-in-up z-20">
                  {copy.waitlist.emailLabel} <span className="font-semibold text-primary">rj@aidiofy.com</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
