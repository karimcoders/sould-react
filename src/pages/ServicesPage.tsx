import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Globe,
  Megaphone,
  Network,
  PenTool,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserCheck,
  Video,
} from "lucide-react";
import { useState } from "react";
import { SERVICES_DATA } from "../data";
import { Service } from "../types";

interface ServicesPageProps {
  onOpenQuoteWithService: (serviceTitle: string) => void;
}

export default function ServicesPage({
  onOpenQuoteWithService,
}: ServicesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeService, setActiveService] = useState<Service | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "globe":
        return <Globe className="w-6 h-6" />;
      case "smartphone":
        return <Smartphone className="w-6 h-6" />;
      case "pen-tool":
        return <PenTool className="w-6 h-6" />;
      case "video":
        return <Video className="w-6 h-6" />;
      case "megaphone":
        return <Megaphone className="w-6 h-6" />;
      case "network":
        return <Network className="w-6 h-6" />;
      case "user-check":
        return <UserCheck className="w-6 h-6" />;
      case "sparkles":
        return <Sparkles className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  // Categories mapping
  const categories = [
    { id: "all", label: "All Services" },
    { id: "dev", label: "Web & Mobile" },
    { id: "ads", label: "Paid Ads & SMM" },
    { id: "creative", label: "Content & Video" },
    { id: "branding", label: "Branding & Portfolios" },
  ];

  const filterService = (service: Service) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "dev")
      return service.id === "web-dev" || service.id === "app-dev";
    if (selectedCategory === "ads")
      return service.id === "ads" || service.id === "smm";
    if (selectedCategory === "creative")
      return (
        service.id === "content-creation" || service.id === "video-production"
      );
    if (selectedCategory === "branding")
      return (
        service.id === "personal-branding" || service.id === "product-branding"
      );
    return true;
  };

  const filteredServices = SERVICES_DATA.filter(filterService);

  const processSteps = [
    {
      num: "01",
      title: "Discovery & Consultation",
      desc: "We analyze your business goals, target audience, and current digital presence to chart a tailored plan.",
    },
    {
      num: "02",
      title: "Strategic Planning",
      desc: "Our team crafts a step-by-step roadmap with clear deliverables, timeline, and measurable KPIs.",
    },
    {
      num: "03",
      title: "Agile Execution",
      desc: "From custom code to video edits and ad campaigns, we execute rapidly with quality checks at every stage.",
    },
    {
      num: "04",
      title: "Growth & Optimization",
      desc: "We continuously monitor performance, run split tests, and refine strategies to maximize your ROI.",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Page Header */}
      <section className="bg-slate-950 text-white pt-36 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500 via-slate-900 to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 font-['Plus_Jakarta_Sans']">
            Solutions Designed To <br className="hidden sm:inline" />
            <span className="text-[#0555F0]">Scale Your Business</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            From modern web & mobile applications to high-ROI Meta & Google ad
            campaigns and creative video production — explore our full suite of
            services.
          </p>
        </div>
      </section>

      {/* Services Filter and Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 2 Rows / Grid Layout matching clean image structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {getServiceIcon(service.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 font-normal">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  {service.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2 text-xs text-slate-700 font-medium truncate"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onOpenQuoteWithService(service.title)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer"
                >
                  <span>Request Quote</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveService(service)}
                  className="text-xs text-slate-500 hover:text-slate-800 font-medium underline cursor-pointer"
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us & Process Section */}
      <section className="bg-white py-20 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-['Plus_Jakarta_Sans']">
              Our Proven Service Delivery Process
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We streamline execution to ensure your projects are delivered on
              time, within budget, and to the highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative"
              >
                <span className="text-3xl font-extrabold text-indigo-600 block mb-3 font-mono">
                  {step.num}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-950 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-['Plus_Jakarta_Sans']">
            Ready to Take Your Brand to the Next Level?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-base sm:text-lg">
            Get in touch with our team today for a tailored quote and strategy
            blueprint tailored to your budget.
          </p>
          <button
            type="button"
            onClick={() =>
              onOpenQuoteWithService("General Digital Consultation")
            }
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base shadow-lg transition-all cursor-pointer"
          >
            <span>Get Free Quote Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Modal Detail for Service if clicked */}
      {activeService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              {activeService.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {activeService.description}
            </p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Key Features & Deliverables
            </h4>
            <ul className="space-y-2 mb-8">
              {activeService.features.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <ShieldCheck className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="px-4 py-2 text-sm text-slate-600 hover:text-slate-900 font-medium"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeService.title;
                  setActiveService(null);
                  onOpenQuoteWithService(title);
                }}
                className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-500"
              >
                Inquire For This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
