import type { FC } from "react";
import { Play, Sparkles } from "lucide-react";
import { useI18n } from "../i18n";
import assets from "../../public/assets.json";

export const AppShowcase: FC = () => {
  const { locale } = useI18n();
  
  const screenshots = Object.entries(assets.screenshots).map(([key, data]) => ({
    key,
    src: data.src,
    alt: data.alt[locale as keyof typeof data.alt] || data.alt.en,
    title: data.title[locale as keyof typeof data.title] || data.title.en,
  }));

  return (
    <section className="py-20 bg-background-dark">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
            See AIdiofy in Action
          </h2>
          <p className="text-lg text-text-muted max-w-3xl mx-auto">
            Explore the app through screenshots and watch a quick demo
          </p>
          
          {/* Demo Info Badge */}
          <div className="mt-4 inline-flex items-center justify-center gap-2 text-text-muted text-sm bg-surface border border-border-subtle rounded-full px-4 py-2">
            <span>Sample demo · Processing time shortened for presentation</span>
          </div>
        </div>

        {/* Demo Video - Compact */}
        <div className="mb-16 max-w-2xl mx-auto">
          <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
            <video
              src={assets.video.demo.src}
              poster={assets.video.demo.poster}
              className="w-full aspect-[9/16] object-contain"
              controls
              playsInline
              preload="metadata"
            >
              <track kind="captions" srcLang="en" label="English" default />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Screenshots Grid - Simple Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((screenshot) => (
            <div
              key={screenshot.key}
              className="group bg-surface border border-border-subtle rounded-lg overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              {/* Screenshot */}
              <div className="aspect-[9/16] bg-gray-900 overflow-hidden relative">
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <div className="p-4 bg-surface border-t border-border-subtle">
                <h3 className="text-base font-semibold text-text-main">
                  {screenshot.title}
                </h3>
              </div>
            </div>
          ))}
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
            Try AIdiofy Now
            <Sparkles className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
