import { useState, type FC } from "react";
import { ArrowRight } from "lucide-react";

export const Waitlist: FC = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <section id="app" className="py-24 px-4 bg-background-dark">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 md:p-16 text-center relative overflow-visible border border-border-subtle/80">
          {/* Background Decoration */}
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/18 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-surface/60 rounded-full blur-[120px] opacity-70 pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-6">
              Be the First to Experience AIdiofy
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto mb-4 leading-relaxed">
              The AIdiofy app is already live—sign up to get feature updates, tips, and early notice about new releases.
            </p>
            <div className="max-w-xl mx-auto mb-10 text-sm md:text-base bg-surface/70 border border-border-subtle/80 rounded-2xl px-4 py-3 text-text-main shadow-glow-obsidian/30">
              <span className="font-semibold text-text-main">Already on board?</span>{" "}
              Run the application at{" "}
              <a 
                href="https://app.aidiofy.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-primary font-semibold hover:text-white underline decoration-primary/60 underline-offset-4 transition-colors"
              >
                app.aidiofy.com
              </a>{" "}
              and start listening now.
            </div>

            <div className="relative flex justify-center">
              <button 
                type="button"
                onClick={() => setShowContact((open) => !open)}
                onBlur={() => setShowContact(false)}
                className="h-14 px-8 rounded-xl bg-primary text-text-main font-bold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-glow-accent"
              >
                Contact
                <ArrowRight className="w-5 h-5" />
              </button>

              {showContact && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-4 py-3 rounded-xl bg-surface border border-border-subtle text-text-main shadow-glow-obsidian w-max max-w-[calc(100vw-3rem)]">
                  Email us at <span className="font-semibold text-text-main">rj@aidiofy.com</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
