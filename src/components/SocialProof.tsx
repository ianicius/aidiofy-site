import type { FC } from "react";
import { Shield } from "lucide-react";
import { useI18n } from "../i18n";

export const SocialProof: FC = () => {
  const { copy } = useI18n();
  const c = copy.socialProof;

  return (
    <section className="py-12 px-4 bg-surface border-y border-border-subtle/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-6 text-text-tertiary text-body-sm">
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
