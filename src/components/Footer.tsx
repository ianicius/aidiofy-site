import type { FC } from "react";
import { Logo } from "./Logo";

export const Footer: FC = () => {
  return (
    <footer className="border-t border-border-subtle/60 py-12 bg-background-dark">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <span className="text-2xl font-bold text-text-main">AIdiofy</span>
        </div>
        
        <div className="flex gap-8 text-sm text-text-muted">
          <a href="#/privacy-policy" className="hover:text-text-main transition-colors">Privacy Policy</a>
          <a href="#/terms-of-use" className="hover:text-text-main transition-colors">Terms of Use</a>
          <a href="mailto:rj@aidiofy.com" className="hover:text-text-main transition-colors">Contact</a>
        </div>

        <p className="text-xs text-text-muted">
          (c) 2024 AIdiofy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
