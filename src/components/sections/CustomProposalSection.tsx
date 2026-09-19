import { Clock3, Mail, ShieldCheck } from "lucide-react";
import { COMPANY_DETAILS } from "../../data";
import ProposalForm from "@/src/components/ui/ProposalForm";
import { useState } from "react";

export default function CustomProposalSection() {
  const [submitted, setSubmitted] = useState(false);


  return (
    <section
      id="custom-proposal"
      className="relative z-10 bg-[#090b14] text-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_30%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight font-['Plus_Jakarta_Sans'] mb-5">
              A focused plan for your next digital growth move.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              Share your project goals and our team will shape a practical
              proposal with the right services, timeline, and budget range for
              your brand.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-[#0555F0] border border-indigo-400/20 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    Tailored Scope
                  </h3>
                  <p className="text-base leading-relaxed text-slate-400">
                    Services mapped to your stage, goals, and budget.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-[#0555F0] border border-indigo-400/20 flex items-center justify-center flex-shrink-0">
                  <Clock3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    Fast Review
                  </h3>
                  <p className="text-base leading-relaxed text-slate-400">
                    Expect a response within 2 to 4 business hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 text-[#0555F0] border border-indigo-400/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1">
                    Direct Contact
                  </h3>
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="text-base leading-relaxed text-slate-400 hover:text-[#0555F0] transition-colors break-all"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white text-slate-900 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/30">
              <div className="lg:col-span-7">
                  <ProposalForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
