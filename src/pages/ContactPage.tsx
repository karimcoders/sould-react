import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import FaqSection from "../components/sections/FaqSection";
import { COMPANY_DETAILS } from "../data";
import ProposalForm from "../components/ui/ProposalForm";

interface ContactPageProps {
  onOpenQuote: () => void;
}

export default function ContactPage({ onOpenQuote }: ContactPageProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Website Development",
    budget: "$500 - $1,500",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Hero */}
      <section className="bg-slate-950 text-white pt-36 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500 via-slate-900 to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 font-['Plus_Jakarta_Sans']">
            Let’s Discuss Your{" "}
            <span className="text-[#0555F0]">Next Project</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            Have a question or ready to launch your next website, mobile app, or
            ad campaign? Reach out to us today.
          </p>
        </div>
      </section>

      {/* Main Form & Info Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 font-['Plus_Jakarta_Sans']">
                Direct Contact Information
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Prefer direct communication? Reach out via phone, email, or
                schedule a quick discovery call with our team.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 flex items-start gap-4 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                    Phone & WhatsApp
                  </span>
                  <a
                    href={`tel:${COMPANY_DETAILS.phone}`}
                    className="text-base font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Mon - Sat: 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 flex items-start gap-4 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                    Email Inquiry
                  </span>
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors break-all"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    2-4 Hour Guaranteed Response SLA
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 flex items-start gap-4 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">
                    Headquarters
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    {COMPANY_DETAILS.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Serving Clients Globally
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
              <ProposalForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
}
