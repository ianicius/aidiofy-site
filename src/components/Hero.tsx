import type { FC } from "react";
import { ArrowRight, Play } from "lucide-react";
import { useI18n } from "../i18n";

export const Hero: FC = () => {
  const { copy } = useI18n();
  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden bg-background-dark">
      {/* Subtle Ambient Glow - Asymmetric Positioning */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-glow-primary rounded-full blur-[140px] opacity-30 animate-glow-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-glow-secondary rounded-full blur-[140px] opacity-20 animate-glow-pulse" style={{ animationDelay: '1500ms' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-display-lg md:text-display-xl font-display font-bold text-text-main mb-8 leading-[1.05] tracking-tight animate-fade-in-up">
              {copy.hero.title}{" "}
              <span className="gradient-text inline-block">{copy.hero.highlight}</span>
            </h1>
            
            <p className="text-body-lg md:text-body-lg text-text-muted max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              {copy.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <a
                href="#product-showcase"
                className="group h-14 px-8 rounded-xl bg-primary hover:bg-primary-hover text-text-main font-bold text-lg shadow-glow-accent-intense smooth-transition flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                {copy.hero.ctaHowItWorks}
              </a>
              <a 
                href="https://app.aidiofy.com"
                target="_blank"
                rel="noreferrer"
                className="group h-14 px-8 rounded-xl bg-surface border-2 border-primary/30 hover:border-primary/60 hover:bg-surface-elevated text-text-main font-semibold text-lg smooth-transition flex items-center justify-center gap-2"
              >
                {copy.hero.ctaTryApp}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 smooth-transition" />
              </a>
            </div>
          </div>

          {/* Right Visual - Abstract Audio Wave */}
          <div className="relative flex items-center justify-center animate-scale-in" style={{ animationDelay: '300ms' }}>
            <div className="relative w-full max-w-md aspect-square">
              {/* Background Circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-ember opacity-8 blur-3xl animate-glow-pulse"></div>
              
              {/* Audio Wave Visualization */}
              <svg 
                className="w-full h-full relative z-10" 
                viewBox="0 0 400 400" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer Ring */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="170" 
                  stroke="url(#gradient1)" 
                  strokeWidth="1.5" 
                  opacity="0.25"
                  className="animate-pulse-subtle"
                />
                
                {/* Middle Ring */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="130" 
                  stroke="url(#gradient2)" 
                  strokeWidth="2" 
                  opacity="0.4"
                  className="animate-pulse-subtle"
                  style={{ animationDelay: '500ms' }}
                />
                
                {/* Inner Ring */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="90" 
                  stroke="url(#gradient1)" 
                  strokeWidth="2.5" 
                  opacity="0.6"
                  className="animate-pulse-subtle"
                  style={{ animationDelay: '1000ms' }}
                />
                
                {/* Audio Wave Paths */}
                <path 
                  d="M 200 60 
                     Q 230 130, 200 200 
                     Q 170 270, 200 340" 
                  stroke="url(#gradient1)" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  fill="none"
                  className="animate-pulse-subtle"
                  style={{ animationDelay: '200ms' }}
                />
                
                <path 
                  d="M 200 80 
                     Q 250 140, 200 200 
                     Q 150 260, 200 320" 
                  stroke="url(#gradient2)" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.6"
                  className="animate-pulse-subtle"
                  style={{ animationDelay: '400ms' }}
                />
                
                <path 
                  d="M 200 100 
                     Q 220 150, 200 200 
                     Q 180 250, 200 300" 
                  stroke="url(#gradient1)" 
                  strokeWidth="5" 
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.8"
                  className="animate-pulse-subtle"
                  style={{ animationDelay: '600ms' }}
                />
                
                {/* Center Circle */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="50" 
                  fill="url(#gradient1)" 
                  opacity="0.15"
                  className="animate-pulse-subtle"
                  style={{ animationDelay: '800ms' }}
                />
                <circle 
                  cx="200" 
                  cy="200" 
                  r="30" 
                  fill="url(#gradient1)" 
                  opacity="0.25"
                  className="animate-pulse-subtle"
                  style={{ animationDelay: '800ms' }}
                />
                
                {/* Gradients */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b35" />
                    <stop offset="100%" stopColor="#ffb347" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffb347" />
                    <stop offset="100%" stopColor="#ff6b35" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
