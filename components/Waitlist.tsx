import React from "react";
import { ArrowRight } from "lucide-react";

export const Waitlist: React.FC = () => {
  return (
    <section id="waitlist" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/20 rounded-full blur-[120px] opacity-50"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-secondary/20 rounded-full blur-[120px] opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Be the First to Experience AIdiofy
            </h2>
            <p className="text-text-muted text-lg max-w-xl mx-auto mb-10">
              Join our waiting list to get exclusive early access and be notified when we launch. 
              The future of reading is listening.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                required
                className="flex-1 h-14 px-6 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white placeholder:text-white/30 transition-all"
              />
              <button 
                type="submit"
                className="h-14 px-8 rounded-xl bg-white text-primary font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Join Waitlist
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};