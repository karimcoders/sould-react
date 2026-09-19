import { ChevronRight, LayoutGrid, MessageSquare, Send } from "lucide-react";
import { WHAT_WE_DO_DATA } from "../../data";

export default function WhatWeDoSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "message-square":
        return <MessageSquare className="w-6 h-6 transition-colors" />;
      case "send":
        return <Send className="w-6 h-6 transition-colors" />;
      case "layout-grid":
        return <LayoutGrid className="w-6 h-6 transition-colors" />;
      default:
        return <MessageSquare className="w-6 h-6 transition-colors" />;
    }
  };

  return (
    <section
      id="what-we-do"
      className="bg-[#0b0d17] text-white py-24 lg:py-32 relative z-10 border-b border-slate-800/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12] font-['Plus_Jakarta_Sans']">
              Strategies that Turn <br className="hidden sm:inline" />
              <span className="text-[#0555F0]">
                Attention <span className="text-[#ffffff]">into</span> Growth
              </span>
            </h2>
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-md">
            {WHAT_WE_DO_DATA.description}
          </p>
        </div>

        {/* 3 Columns Borderless Grid (Matching Image Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {WHAT_WE_DO_DATA.columns.map((col) => (
            <div
              key={col.id}
              className="group flex flex-col justify-between items-start text-left"
            >
              <div>
                {/* Icon Container */}
                <div className="mb-5">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-[#0555F0] group-hover:bg-indigo-600/30 group-hover:text-[#0444C0] transition-all duration-300">
                    {getIcon(col.icon)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-[#0444C0] transition-colors">
                  {col.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mb-6">
                  {col.description}
                </p>
              </div>

              {/* Action Link */}
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-bold text-[#0555F0] hover:text-[#0444C0] transition-colors group/link cursor-pointer"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform text-[#0555F0] group-hover/link:text-[#0444C0]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
