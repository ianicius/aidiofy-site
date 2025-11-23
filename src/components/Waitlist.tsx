import { useState, type FC } from "react";
import { ArrowRight } from "lucide-react";

export const Waitlist: FC = () => {
  const [showContact, setShowContact] = useState(false);

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

            <div className="relative flex justify-center">
              <button 
                type="button"
                onClick={() => setShowContact((open) => !open)}
                onBlur={() => setShowContact(false)}
                className="h-14 px-8 rounded-xl bg-white text-primary font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-white/10"
              >
                Contact
                <ArrowRight className="w-5 h-5" />
              </button>

              {showContact && (
                <div className="absolute top-full mt-3 px-4 py-3 rounded-xl bg-background-dark/90 border border-white/10 text-white shadow-lg shadow-primary/20">
                  Email us at <span className="font-semibold">rj@aidiofy.com</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
