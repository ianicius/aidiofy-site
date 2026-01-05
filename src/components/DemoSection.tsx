import type { FC } from "react";
import { Play, Sparkles } from "lucide-react";
import { useI18n } from "../i18n";
import { VideoPlayer } from "./VideoPlayer";

export const DemoSection: FC = () => {
  const { copy } = useI18n();
  
  return (
    <section className="py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-4">
            See AIdiofy in Action
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            Watch a complete walkthrough of how AIdiofy transforms text into immersive audio experiences
          </p>
        </div>

        {/* Demo Video */}
        <div className="mb-16 max-w-4xl mx-auto">
          <VideoPlayer />
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://app.aidiofy.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-text-main px-8 py-4 rounded-full font-semibold text-lg smooth-transition shadow-glow-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <Play className="w-5 h-5" />
            {copy.hero.ctaTryApp}
            <Sparkles className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
