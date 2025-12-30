import type { FC } from "react";
import { Camera, Sparkles, Headphones } from "lucide-react";
import { useI18n } from "../i18n";

const stepIcons = [Camera, Sparkles, Headphones] as const;

export const HowItWorks: FC = () => {
  const { copy } = useI18n();
  return (
    <section id="how-it-works" className="py-24 px-4 relative bg-gradient-to-b from-background-dark via-surface to-background-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 md:text-display-md font-display font-bold text-text-main mb-4 animate-fade-in-up">
            {copy.howItWorks.heading}
          </h2>
          <p className="text-body-lg text-text-muted animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {copy.howItWorks.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/25 via-border-subtle/60 to-primary/25 z-0"></div>

          {copy.howItWorks.steps.map((step, idx) => {
            const Icon = stepIcons[idx] ?? Camera;
            return (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: `${200 + idx * 150}ms` }}>
              {/* Step Number Circle */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center shadow-glow-accent smooth-transition hover:scale-110 hover:bg-primary/25 hover:border-primary/50">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 -m-4 rounded-full bg-glow-primary blur-xl opacity-60 animate-glow-pulse"></div>
              </div>
              
              <h3 className="text-heading-3 font-display font-semibold text-text-main mb-3">
                {step.title}
              </h3>
              <p className="text-body-md text-text-muted leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};
