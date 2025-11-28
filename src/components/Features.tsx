import type { FC } from "react";
import { ScanText, Bot, Mic, Play } from "lucide-react";

const features = [
  {
    icon: ScanText,
    title: "Instant OCR Capture",
    desc: "Use your camera to instantly capture and convert printed text from any source with high accuracy."
  },
  {
    icon: Bot,
    title: "Natural AI Voiceover",
    desc: "Listen to your text read aloud by our state-of-the-art AI voices, designed for clarity and engagement."
  },
  {
    icon: Mic,
    title: "Voice Customization",
    desc: "Choose from a library of voices and adjust the speed and pitch to create your perfect listening experience."
  },
  {
    icon: Play,
    title: "Intuitive Playback",
    desc: "Easily play, pause, skip, and navigate through your audio content with a simple and accessible interface."
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
              className="glass-effect p-8 rounded-2xl flex flex-col gap-4 transition-transform hover:-translate-y-1 duration-300 group shadow-glow-obsidian border border-border-subtle/70"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center shadow-glow-accent border border-border-subtle/80">
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
