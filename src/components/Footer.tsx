import type { FC } from "react";
import { Logo } from "./Logo";

export const Footer: FC = () => {
  return (
    <footer className="border-t border-white/10 py-12 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <span className="text-2xl font-bold text-white">AIdiofy</span>
        </div>
        
        <div className="flex gap-8 text-sm text-text-muted">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <p className="text-xs text-text-muted/50">
          © 2024 AIdiofy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
