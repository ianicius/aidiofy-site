import type { FC } from "react";
import { Camera, Sparkles, Headphones } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "1. Scan",
    desc: "Capture any printed text instantly with your device's camera.",
    color: "text-primary",
    bg: "bg-primary/10",
    shadow: "shadow-glow-purple"
  },
  {
    icon: Sparkles,
    title: "2. Convert",
    desc: "Our AI processes the image, extracts the text, and generates a natural voiceover.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    shadow: "shadow-glow-cyan"
  },
  {
    icon: Headphones,
    title: "3. Listen",
    desc: "Enjoy your content as high-quality audio, anywhere, anytime.",
    color: "text-tertiary",
    bg: "bg-tertiary/10",
    shadow: "shadow-glow-green"
  }
];

export const HowItWorks: FC = () => {
  return (
    <section id="how-it-works" className="py-24 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">How It Works</h2>
          <p className="text-text-muted">A simple, three-step process to bring your text to life.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/30 via-secondary/30 to-tertiary/30 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <div className={`w-24 h-24 rounded-full ${step.bg} ${step.color} flex items-center justify-center mb-6 ${step.shadow} backdrop-blur-xl border border-white/5`}>
                <step.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-text-main mb-2">{step.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
