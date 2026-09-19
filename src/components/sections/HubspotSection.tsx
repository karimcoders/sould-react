import {
  ArrowRight,
  BadgeDollarSign,
  Clapperboard,
  Megaphone,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HUBSPOT_DATA } from "../../data";
import StatsBar from "../ui/StatsBar";

export default function HubspotSection() {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="bg-[#f8f9fe] text-slate-900 py-24 lg:py-32 relative z-10 border-b border-slate-200/60"
    >
      {/* Background extension — pulls the white bg up behind the bottom
          portion of the InteractiveServices cards above this section.
          Tune -top-[140px] / h-[140px] together to move the split line
          up or down through the cards (e.g. -top-[230px] h-[230px] to
          push the split closer to the vertical middle of the cards). */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-60 inset-x-0 h-60 bg-[#f8f9fe]"
      />

      {/* Stats bar */}
      <StatsBar />

      {/* Background Subtle Gradient Mesh */}
      <div className="absolute inset-0 bg-[#f8f9fe]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-['Plus_Jakarta_Sans']">
              Transforming Ideas{" "}
              <span className="block">into High-Performance</span>{" "}
              <span className="text-[#0555F0] block">Digital Assets</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              {HUBSPOT_DATA.description}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 pb-2">
              <div className="flex items-center gap-2.5 text-md text-slate-700 font-medium">
                <Smartphone className="w-4 h-4 text-[#0555F0] shrink-0" />
                <span>Web & Mobile Apps</span>
              </div>
              <div className="flex items-center gap-2.5 text-md text-slate-700 font-medium">
                <Megaphone className="w-4 h-4 text-[#0555F0] shrink-0" />
                <span>Meta & Google Ads</span>
              </div>
              <div className="flex items-center gap-2.5 text-md text-slate-700 font-medium">
                <Clapperboard className="w-4 h-4 text-[#0555F0] shrink-0" />
                <span>Video Editing & Reels</span>
              </div>
              <div className="flex items-center gap-2.5 text-md text-slate-700 font-medium">
                <BadgeDollarSign className="w-4 h-4 text-[#0555F0] shrink-0" />
                <span>Reasonable Pricing</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => navigate("/services")}
                className="inline-flex items-center gap-2.5 bg-linear-to-r from-[#0555F0] to-[#4F46E5] hover:from-[#0444C0] hover:to-[#4338CA] text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{HUBSPOT_DATA.ctaText}</span>
                <Sparkles className="w-4 h-4 text-indigo-200" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium text-sm px-5 py-4 transition-colors"
              >
                <span>Explore all features</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column Stacked Overlapping Image Cards */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg ">
              {/* Top Larger Image Card */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white aspect-4/4 w-full ml-auto group relative">
                <img
                  src={HUBSPOT_DATA.image1}
                  alt="Team collaboration on HubSpot website"
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 via-transparent to-transparent opacity-40" />
              </div>

              {/* Bottom Left Overlapping Smaller Image Card */}
              <div className="absolute -bottom-8 sm:-bottom-10 left-0 sm:-left-12 w-7/12 sm:w-7/12 rounded-2xl overflow-hidden shadow-2xl border border-indigo-100 bg-white aspect-4/3.5 z-10 group">
                <img
                  src={HUBSPOT_DATA.image2}
                  alt="Focused marketer creating drag-and-drop website"
                  className="w-full h-full object-cover object-[25%_10%] transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 via-transparent to-transparent opacity-30" />
              </div>

              {/* Glow Accent */}
              <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
