import type { FC } from "react";
import { Users, Star, Shield } from "lucide-react";
import { useI18n } from "../i18n";

export const SocialProof: FC = () => {
  const { copy } = useI18n();
  const c = copy.socialProof;

  return (
    <section className="py-20 px-4 bg-surface border-y border-border-subtle/30">
      <div className="max-w-6xl mx-auto">
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 text-center">
          <div className="flex flex-col items-center gap-2 animate-fade-in-up">
            <Users className="w-8 h-8 text-primary mb-2" />
            <span className="text-display-sm font-display font-bold text-text-main">
              {c.statUsers}
            </span>
            <span className="text-body-sm text-text-muted">{c.statUsersLabel}</span>
          </div>
          <div className="flex flex-col items-center gap-2 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <Star className="w-8 h-8 text-primary mb-2" />
            <span className="text-display-sm font-display font-bold text-text-main">
              {c.statVoices}
            </span>
            <span className="text-body-sm text-text-muted">{c.statVoicesLabel}</span>
          </div>
          <div className="flex flex-col items-center gap-2 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <Shield className="w-8 h-8 text-primary mb-2" />
            <span className="text-display-sm font-display font-bold text-text-main">
              {c.statLanguages}
            </span>
            <span className="text-body-sm text-text-muted">{c.statLanguagesLabel}</span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-text-tertiary text-body-sm">
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            {c.badgeFree}
          </span>
          <span className="text-border-subtle">|</span>
          <span>{c.badgeNoCard}</span>
          <span className="text-border-subtle">|</span>
          <span>{c.badgeCancel}</span>
        </div>
      </div>
    </section>
  );
};
