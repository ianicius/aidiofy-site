import type { FC } from "react";
import { ArrowDown } from "lucide-react";
import { useI18n } from "../i18n";

export const Hero: FC = () => {
  const { copy } = useI18n();
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden bg-background-dark">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/18 rounded-full blur-[110px] animate-pulse-slow"></div>
         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-surface/50 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge removed as requested */}
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-text-main mb-6 leading-[1.08]">
          {copy.hero.title} <br />
          <span className="gradient-text">{copy.hero.highlight}</span>
        </h1>
        
        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          {copy.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#how-it-works"
            className="h-14 px-8 rounded-xl bg-primary hover:bg-primary/90 text-text-main font-bold text-lg shadow-glow-accent transition-all duration-300 flex items-center justify-center gap-2"
          >
            {copy.hero.ctaHowItWorks}
            <ArrowDown className="w-5 h-5" />
          </a>
          <a 
            href="#app"
            className="h-14 px-8 rounded-xl bg-surface border border-border-subtle/80 hover:bg-surface/80 text-text-main font-semibold text-lg backdrop-blur-md transition-all duration-300 flex items-center justify-center shadow-glow-obsidian"
          >
            {copy.hero.ctaTryApp}
          </a>
        </div>
      </div>
    </section>
  );
};
