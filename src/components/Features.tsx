import type { FC } from "react";
import { ScanText, Bot, Mic, Play } from "lucide-react";
import { useI18n } from "../i18n";

const featureIcons = [ScanText, Bot, Mic, Play] as const;

export const Features: FC = () => {
  const { copy } = useI18n();
  return (
    <section id="features" className="py-24 px-4 relative bg-background-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 md:text-display-md font-display font-bold text-text-main mb-4 animate-fade-in-up">
            {copy.features.heading}
          </h2>
          <p className="text-body-lg text-text-muted max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {copy.features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {copy.features.items.map((feature, idx) => {
            const Icon = featureIcons[idx] ?? ScanText;
            const isEven = idx % 2 === 0;
            return (
            <div 
              key={idx}
              className={`group relative bg-surface border border-border-subtle rounded-2xl p-10 smooth-transition hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow-accent animate-fade-in-up ${isEven ? 'md:mr-4' : 'md:ml-4'}`}
              style={{ animationDelay: `${200 + idx * 100}ms` }}
            >
              {/* Subtle noise texture */}
              <div className="absolute inset-0 rounded-2xl opacity-[0.005] pointer-events-none noise-texture"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-glow-primary border border-primary/20 flex items-center justify-center mb-6 smooth-transition group-hover:scale-110 group-hover:border-primary/40">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-heading-3 font-display font-semibold text-text-main mb-3">
                  {feature.title}
                </h3>
                <p className="text-body-md text-text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};
