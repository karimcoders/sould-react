import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How fast do you respond to project inquiries?",
      a: "We typically respond to all inquiries within 2 to 4 business hours with a preliminary assessment or to schedule a discovery call.",
    },
    {
      q: "Are your rates really reasonable compared to traditional agencies?",
      a: "Yes! Our streamlined, tech-enabled workflow allows us to deliver top-tier agency quality at competitive rates with zero bloated overheads.",
    },
    {
      q: "Do you offer custom packages for small businesses and startups?",
      a: "Absolutely. We tailor package solutions specifically based on your goals, stage, and budget constraints.",
    },
    {
      q: "Can we get an ongoing monthly retainer for Meta & Google Ads or SMM?",
      a: "Yes, we offer both project-based fixed deliverables and monthly growth retainers for advertising and content management.",
    },
  ];
  return (
    <section className="bg-white py-20 border-t border-slate-200/80 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-3 font-['Plus_Jakarta_Sans']">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-4xl">
            Everything you need to know about
            <span className=" block">partnering with Soul-D.</span>
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.q}
              className="border border-slate-200 rounded-2xl overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                aria-expanded={openFaq === idx}
                aria-controls={`faq-${idx}`}
                className="w-full px-6 py-5 text-left font-bold text-slate-900 text-xl sm:text-2xl flex items-center justify-between hover:bg-slate-50 cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === idx && (
                <div
                  id={`faq-${idx}`}
                  className="px-6 pb-5 pt-1 text-slate-600 text-base leading-relaxed border-t border-slate-100 bg-slate-50"
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
