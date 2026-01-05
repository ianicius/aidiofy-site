import type { FC } from "react";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "../i18n";
import assets from "../../public/assets.json";

interface AssetCarouselProps {
  descriptions?: {
    [key: string]: string;
  };
}

export const AssetCarousel: FC<AssetCarouselProps> = ({ descriptions }) => {
  const { locale } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setTimeout>>();

  const screenshots = Object.entries(assets.screenshots).map(([key, data]) => ({
    key,
    ...data,
    alt: data.alt[locale as keyof typeof data.alt] || data.alt.en,
    title: data.title[locale as keyof typeof data.title] || data.title.en,
    description: descriptions?.[key] || data.alt[locale as keyof typeof data.alt] || data.alt.en
  }));

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowLeft':
        goToPrevious();
        break;
      case 'ArrowRight':
        goToNext();
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(screenshots.length - 1);
        break;
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
      }, 5000);
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoPlaying, screenshots.length]);

  // Pause auto-play on user interaction
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
  };

  // Resume auto-play after 10 seconds of inactivity
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    
    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 10000);
    };

    resetTimer();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div 
      className="asset-carousel relative"
      ref={containerRef}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleUserInteraction}
      onMouseMove={handleUserInteraction}
      role="region"
      aria-label="App screenshots carousel"
      tabIndex={0}
    >
      {/* Main Slide */}
      <div className="relative aspect-[9/16] max-w-[280px] mx-auto overflow-hidden rounded-3xl shadow-2xl">
        <img
          src={screenshots[currentIndex].src}
          alt={screenshots[currentIndex].alt}
          className="w-full h-full object-contain"
          loading="lazy"
        />
        
        {/* Slide Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
          {currentIndex + 1} / {screenshots.length}
        </div>
        
        {/* Screenshot Description */}
        {screenshots[currentIndex].description && (
          <div className="absolute bottom-16 left-0 right-0 px-4 py-2 bg-black/80 backdrop-blur-md rounded-lg">
            <p className="text-white text-sm text-center leading-relaxed">
              {screenshots[currentIndex].description}
            </p>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Previous screenshot"
      >
        <ChevronLeft className="w-5 h-5 text-gray-900" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Next screenshot"
      >
        <ChevronRight className="w-5 h-5 text-gray-900" />
      </button>

      {/* Thumbnail Indicators */}
      <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Screenshot thumbnails">
        {screenshots.map((screenshot, index) => (
          <button
            key={screenshot.key}
            onClick={() => goToSlide(index)}
            className={`w-16 h-28 rounded-lg overflow-hidden border-2 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              index === currentIndex
                ? 'border-primary scale-110 shadow-lg'
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`${screenshot.title} (${index + 1} of ${screenshots.length})`}
          >
            <img
              src={screenshot.src}
              alt={screenshot.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Screen Reader Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Showing {screenshots[currentIndex].title}
      </div>
    </div>
  );
};

export default AssetCarousel;
