import type { FC } from "react";
import { ScanText, Bot, Mic, Play } from "lucide-react";
import { useI18n } from "../i18n";

const featureIcons = [ScanText, Bot, Mic, Play] as const;

export const Features: FC = () => {
  const { copy } = useI18n();
  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">{copy.features.heading}</h2>
          <p className="text-text-muted max-w-xl mx-auto">
            {copy.features.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {copy.features.items.map((feature, idx) => {
            const Icon = featureIcons[idx] ?? ScanText;
            return (
            <div 
              key={idx}
              className="glass-effect p-8 rounded-2xl flex flex-col gap-4 transition-transform hover:-translate-y-1 duration-300 group shadow-glow-obsidian border border-border-subtle/70"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center shadow-glow-accent border border-border-subtle/80">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-text-main">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">{feature.description}</p>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
};
