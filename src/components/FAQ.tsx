import type { FC } from "react";
import { ChevronDown } from "lucide-react";
import { useI18n } from "../i18n";

export const FAQ: FC = () => {
  const { copy } = useI18n();

  return (
    <section id="faq" className="py-24 px-4 bg-background-dark" itemScope itemType="https://schema.org/FAQPage">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">{copy.faq.heading}</h2>
          <p className="text-text-muted max-w-2xl mx-auto">{copy.faq.description}</p>
        </div>

        <div className="space-y-4">
          {copy.faq.items.map((item, idx) => (
            <details
              key={idx}
              className="glass-effect rounded-2xl p-6 border border-border-subtle/70 shadow-glow-obsidian group"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <summary className="cursor-pointer flex items-start justify-between gap-4">
                <span className="text-lg font-semibold text-text-main leading-snug" itemProp="name">
                  {item.question}
                </span>
                <ChevronDown className="w-5 h-5 text-text-muted mt-1 transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <div className="mt-4 text-text-muted leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

