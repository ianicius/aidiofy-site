import type { FC } from "react";
import { useI18n } from "../i18n";
import { VideoPlayer } from "./VideoPlayer";
import { AssetCarousel } from "./AssetCarousel";

export const ProductShowcase: FC = () => {
  const { copy } = useI18n();
  
  // Get the video caption from i18n or use default
  const videoCaption = copy.productShowcase?.videoCaption ||
    "Sample demo · Processing time shortened for presentation";

  return (
    <section 
      id="product-showcase" 
      className="py-24 px-4 relative bg-gradient-to-b from-background-dark via-surface to-background-dark overflow-hidden"
    >
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-primary rounded-full blur-[140px] opacity-20 animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-secondary rounded-full blur-[140px] opacity-15 animate-glow-pulse" style={{ animationDelay: '2000ms' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading-1 md:text-display-md font-display font-bold text-text-main mb-4 animate-fade-in-up">
            {copy.productShowcase?.heading || "See AIdiofy in Action"}
          </h2>
          <p className="text-body-lg text-text-muted max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {copy.productShowcase?.description || 
              "Watch how AIdiofy transforms text into immersive audio experiences with full-cast narration"}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Video Section */}
          <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="relative w-full max-w-md">
              {/* Glass-morphism container */}
              <div className="relative bg-surface/50 backdrop-blur-xl rounded-3xl p-4 border border-border-subtle/40 shadow-2xl">
                <VideoPlayer caption={videoCaption} />
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 -m-2 rounded-3xl bg-glow-primary blur-2xl opacity-20 -z-10 animate-glow-pulse"></div>
            </div>
          </div>

          {/* Screenshots Carousel Section */}
          <div className="flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="relative w-full max-w-md">
              {/* Glass-morphism container */}
              <div className="relative bg-surface/50 backdrop-blur-xl rounded-3xl p-6 border border-border-subtle/40 shadow-2xl">
                <div className="mb-4">
                  <h3 className="text-heading-3 font-display font-semibold text-text-main mb-2 text-center">
                    {copy.productShowcase?.screenshotsHeading || "App Walkthrough"}
                  </h3>
                  <p className="text-body-sm text-text-muted text-center mb-4">
                    {copy.productShowcase?.screenshotsDescription ||
                      "Explore the 7-step journey from text to immersive audio"}
                  </p>
                </div>
                <AssetCarousel descriptions={copy.productShowcase?.screenshotDescriptions} />
              </div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 -m-2 rounded-3xl bg-glow-secondary blur-2xl opacity-20 -z-10 animate-glow-pulse" style={{ animationDelay: '1000ms' }}></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <a
            href="https://app.aidiofy.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-text-main px-8 py-4 rounded-xl font-semibold text-lg smooth-transition shadow-glow-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            {copy.hero.ctaTryApp}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
