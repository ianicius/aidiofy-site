import type { FC } from "react";
import { ScanText, Bot, Mic, Play } from "lucide-react";

const features = [
  {
    icon: ScanText,
    title: "Instant OCR Capture",
    desc: "Use your camera to instantly capture and convert printed text from any source with high accuracy.",
    color: "text-primary",
    bg: "bg-primary/10",
    shadow: "shadow-glow-purple"
  },
  {
    icon: Bot,
    title: "Natural AI Voiceover",
    desc: "Listen to your text read aloud by our state-of-the-art AI voices, designed for clarity and engagement.",
    color: "text-secondary",
    bg: "bg-secondary/10",
    shadow: "shadow-glow-cyan"
  },
  {
    icon: Mic,
    title: "Voice Customization",
    desc: "Choose from a library of voices and adjust the speed and pitch to create your perfect listening experience.",
    color: "text-tertiary",
    bg: "bg-tertiary/10",
    shadow: "shadow-glow-green"
  },
  {
    icon: Play,
    title: "Intuitive Playback",
    desc: "Easily play, pause, skip, and navigate through your audio content with a simple and accessible interface.",
    color: "text-primary",
    bg: "bg-primary/10",
    shadow: "shadow-glow-purple"
  }
];

export const Features: FC = () => {
  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Key Features</h2>
          <p className="text-text-muted max-w-xl mx-auto">
            Everything you need to turn static text into a dynamic audio experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="glass-effect p-8 rounded-2xl flex flex-col gap-4 transition-transform hover:-translate-y-1 duration-300 group"
            >
              <div className={`w-12 h-12 rounded-lg ${feature.bg} ${feature.color} flex items-center justify-center ${feature.shadow}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-text-main">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
