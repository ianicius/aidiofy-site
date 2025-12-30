import type { FC } from "react";
import { ChevronDown } from "lucide-react";
import { useI18n } from "../i18n";

export const FAQ: FC = () => {
  const { copy } = useI18n();

  return (
    <section id="faq" className="py-24 px-4 bg-background-dark" itemScope itemType="https://schema.org/FAQPage">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-heading-1 md:text-display-md font-display font-bold text-text-main mb-4 animate-fade-in-up">
            {copy.faq.heading}
          </h2>
          <p className="text-body-lg text-text-muted max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {copy.faq.description}
          </p>
        </div>

        <div className="space-y-4">
          {copy.faq.items.map((item, idx) => (
            <details
              key={idx}
              className="group bg-surface border border-border-subtle rounded-2xl smooth-transition hover:border-primary/30 open:border-primary/40 animate-fade-in-up"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
              style={{ animationDelay: `${200 + idx * 100}ms` }}
            >
              <summary className="cursor-pointer flex items-start justify-between gap-4 p-6 list-none">
                <span className="text-lg font-semibold text-text-main leading-snug flex-1" itemProp="name">
                  {item.question}
                </span>
                <ChevronDown className="w-5 h-5 text-text-muted mt-1 smooth-transition group-open:rotate-180 flex-shrink-0" />
              </summary>

              <div className="px-6 pb-6" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-body-md text-text-muted leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};
