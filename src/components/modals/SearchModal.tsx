import { ArrowRight, Award, BarChart, Search, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { SERVICES_DATA } from "../../data";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService?: (serviceId: string) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  onSelectService,
}: SearchModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const quickLinks = [
    {
      title: "Website & App Development",
      type: "Service",
      icon: Zap,
      id: "web-dev",
    },
    {
      title: "Google Ads & Meta Ads",
      type: "Service",
      icon: BarChart,
      id: "ads",
    },
    {
      title: "Video Production & Editing",
      type: "Service",
      icon: Zap,
      id: "video-production",
    },
    {
      title: "Personal Branding Portfolios",
      type: "Service",
      icon: Award,
      id: "personal-branding",
    },
  ];

  const filteredServices = SERVICES_DATA.filter(
    (s) =>
      s.title.toLowerCase().includes(query.toLowerCase()) ||
      s.description.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 shadow-2xl relative text-white">
        {/* Search Input Bar */}
        <div className="relative flex items-center mb-6">
          <Search className="w-5 h-5 text-slate-400 absolute left-4" />
          <input
            type="text"
            autoFocus
            placeholder="Search services, HubSpot themes, reviews, case studies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 bg-slate-800/90 border border-slate-700 rounded-xl text-white placeholder-slate-400 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 p-1.5 text-slate-400 hover:text-white rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results / Suggestions */}
        {query.trim() !== "" ? (
          <div className="space-y-3 max-h-80 overflow-y-auto">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Services Matches
            </h4>
            {filteredServices.length > 0 ? (
              filteredServices.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    if (onSelectService) onSelectService(s.id);
                    onClose();
                    const el = document.querySelector("#services");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full text-left p-3.5 bg-slate-800/50 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/50 rounded-xl transition-all flex items-center justify-between group"
                >
                  <div>
                    <div className="font-semibold text-sm text-white">
                      {s.title}
                    </div>
                    <div className="text-xs text-slate-400 line-clamp-1">
                      {s.description}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))
            ) : (
              <div className="text-slate-400 text-sm py-4 text-center">
                No exact matches found for "{query}".
              </div>
            )}
          </div>
        ) : (
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Popular Topics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {quickLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => {
                      onClose();
                      const target =
                        item.id === "hubspot" ? "#hubspot" : "#services";
                      const el = document.querySelector(target);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex items-center gap-3 p-3 bg-slate-800/40 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl text-left transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium text-slate-200 group-hover:text-white truncate">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-slate-500 uppercase font-mono">
                        {item.type}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
