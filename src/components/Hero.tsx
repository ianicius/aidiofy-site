import type { FC } from "react";
import { ArrowDown } from "lucide-react";

export const Hero: FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge removed as requested */}
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-text-main mb-6 leading-[1.1]">
          Transform Text into <br />
          <span className="gradient-text">Immersive Audio</span>
        </h1>
        
        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          AIdiofy uses advanced AI to convert any book, rulebook, or document into captivating audio. Just scan, and listen.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#how-it-works"
            className="h-14 px-8 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-glow-purple transition-all duration-300 flex items-center justify-center gap-2"
          >
            How it Works
            <ArrowDown className="w-5 h-5" />
          </a>
          <a 
            href="#waitlist"
            className="h-14 px-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-text-main font-semibold text-lg backdrop-blur-md transition-all duration-300 flex items-center justify-center"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </section>
  );
};
