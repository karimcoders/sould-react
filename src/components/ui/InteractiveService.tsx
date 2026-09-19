import {
  CheckCircle2,
  ChevronLeft,
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
import { useNavigate } from "react-router-dom";
import { SERVICES_DATA } from "../../data";
import { Service } from "../../types";

interface InteractiveServicesProps {
  onOpenQuoteWithService?: (serviceTitle: string) => void;
}

const CARD_WIDTH = 350;
const CARD_GAP = 30;
const VISIBLE = 4;
const STEP = (CARD_WIDTH + CARD_GAP) * VISIBLE;

export default function InteractiveServices({
  onOpenQuoteWithService,
}: InteractiveServicesProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeModalService, setActiveModalService] = useState<Service | null>(
    null,
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = useNavigate();
  const total = SERVICES_DATA.length;
  const maxPage = Math.max(0, Math.ceil(total / VISIBLE) - 1);

  const previous = () => {
    if (isAnimating || currentPage <= 0) return;
    setIsAnimating(true);
    setCurrentPage((p) => p - 1);
  };

  const next = () => {
    if (isAnimating || currentPage >= maxPage) return;
    setIsAnimating(true);
    setCurrentPage((p) => p + 1);
  };

  const translateX = -currentPage * STEP;

  const handleTransitionEnd = () => setIsAnimating(false);

  const getServiceIcon = (icon: string) => {
    switch (icon) {
      case "globe":
        return <Globe className="h-6 w-6" />;
      case "smartphone":
        return <Smartphone className="h-6 w-6" />;
      case "pen-tool":
        return <PenTool className="h-6 w-6" />;
      case "video":
        return <Video className="h-6 w-6" />;
      case "megaphone":
        return <Megaphone className="h-6 w-6" />;
      case "network":
        return <Network className="h-6 w-6" />;
      case "user-check":
        return <UserCheck className="h-6 w-6" />;
      default:
        return <Sparkles className="h-6 w-6" />;
    }
  };

  const viewportWidth = CARD_WIDTH * VISIBLE + CARD_GAP * (VISIBLE - 1);

  return (
    <section
      id="services"
      className="relative z-30 mt-8 pb-0 mb-0 overflow-hidden"
    >
      <div className="mx-auto max-w-[1650px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 pb-8 md:hidden">
          {SERVICES_DATA.map((service, serviceIndex) => (
            <div
              key={service.id}
              onClick={() => navigate(`/services/${service.id}`)}
              className="group relative overflow-hidden rounded-3xl min-h-70 shadow-lg cursor-pointer"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/55" />

              <div className="relative flex min-h-70 flex-col justify-end p-5 text-white">
                <span className="absolute left-5 top-4 text-5xl font-semibold leading-none text-[#0555F0]">
                  {serviceIndex + 1}
                </span>

                <h3 className="max-w-[18rem] text-2xl font-bold leading-tight text-white">
                  {service.title}
                </h3>

                <p
                  className="mt-2 overflow-hidden text-sm leading-relaxed text-slate-200"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                  }}
                >
                  {service.description}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className="group/button flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-blue-300"
                  >
                    Explore
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenQuoteWithService?.(service.title);
                    }}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
                  >
                    Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex justify-center">
          <div className="relative w-full max-w-[1550px]">
            {/* Left arrow */}
            <button
              onClick={previous}
              disabled={currentPage <= 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition
                ${
                  currentPage <= 0
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:scale-105 hover:shadow-xl"
                }`}
            >
              <ChevronLeft className="h-5 w-5 text-slate-700" />
            </button>

            {/* Right arrow */}
            <button
              onClick={next}
              disabled={currentPage >= maxPage}
              className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition
                ${
                  currentPage >= maxPage
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:scale-105 hover:shadow-xl"
                }`}
            >
              <ChevronRight className="h-5 w-5 text-slate-700" />
            </button>

            {/* Viewport */}
            <div
              className="overflow-hidden py-4 mx-auto"
              style={{ width: viewportWidth }}
            >
              <div
                className="flex"
                style={{
                  gap: CARD_GAP,
                  transform: `translateX(${translateX}px)`,
                  transition: isAnimating
                    ? "transform 500ms cubic-bezier(0.65, 0, 0.35, 1)"
                    : "none",
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {SERVICES_DATA.map((service, serviceIndex) => (
                  <div
                    key={service.id}
                    onClick={() => navigate(`/services/${service.id}`)}
                    className="group relative shrink-0 overflow-hidden rounded-4xl cursor-pointer"
                    style={{
                      width: CARD_WIDTH,
                      height: 460,
                    }}
                  >
                    {/* Background */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/40 to-transparent bg-black/60" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                      <span className="absolute left-8 top-6 text-7xl font-semibold leading-none text-[#0555F0]">
                        {serviceIndex + 1}
                      </span>

                      <h3 className="max-w-55 text-3xl font-bold leading-tight text-white">
                        {service.title}
                      </h3>

                      <div className="mt-8 flex items-center justify-between">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/services/${service.id}`);
                          }}
                          className="group/button flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-blue-300"
                        >
                          Explore
                          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                        </button>

                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white">
                          {getServiceIcon(service.icon)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 backdrop-blur-sm p-6">
          <div className="relative w-full max-w-3xl overflow-hidden rounded-4xl bg-white shadow-2xl">
            <div className="relative overflow-hidden bg-linear-to-br from-[#0555F0] via-blue-600 to-indigo-700 px-10 py-10 text-white">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/10" />
              <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-white/10" />

              <div className="relative flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                  {getServiceIcon(activeModalService.icon)}
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                    <ShieldCheck className="h-4 w-4" />
                    Premium Service
                  </div>

                  <h2 className="mt-3 text-3xl font-bold">
                    {activeModalService.title}
                  </h2>
                </div>
              </div>

              <p className="relative mt-6 text-blue-100 leading-relaxed">
                {activeModalService.description}
              </p>
            </div>

            <div className="space-y-4 px-10 py-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">
                What's Included
              </h3>

              {activeModalService.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0555F0]/10">
                    <CheckCircle2 className="h-5 w-5 text-[#0555F0]" />
                  </div>
                  <span className="font-medium text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-4 border-t border-slate-200 bg-slate-50 px-10 py-6">
              <button
                onClick={() => setActiveModalService(null)}
                className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const service = activeModalService.title;
                  setActiveModalService(null);
                  onOpenQuoteWithService?.(service);
                }}
                className="rounded-xl bg-[#0555F0] px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Request Proposal
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
