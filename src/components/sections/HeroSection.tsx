import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HERO_DATA } from "../../data";

interface HeroSectionProps {
  onOpenQuote: () => void;
}

const SLIDE_DURATION = 5000; // ms visible per image
const ZOOM_DURATION = 12000; // ms for one full zoom cycle (keep > SLIDE_DURATION)

export default function HeroSection({ onOpenQuote }: HeroSectionProps) {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const images = HERO_DATA.heroImages;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <section
      id="home"
      className="relative flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Fixed Background Slideshow with Ken Burns Zoom */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {images.map((img, index) => {
          const isActive = index === activeIndex;
          const zoomName =
            index + (1 % 2) === 0 ? "kenburns-in" : "kenburns-out";

          return (
            <div
              key={index}
              className="absolute inset-0 w-full h-full overflow-hidden transition-opacity ease-in-out"
              style={{
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 10 : 0,
                transitionDuration: "2000ms",
              }}
            >
              <div
                className={`w-full h-full bg-cover bg-center filter brightness-[0.9] contrast-[1.02] ${zoomName}`}
                style={{
                  backgroundImage: `url('${img}')`,
                  animationDuration: `${ZOOM_DURATION}ms`,
                  // Stagger each slide's animation clock so it's mid-cycle
                  // instead of restarting at scale(1) whenever it appears
                  animationDelay: `${-(index * SLIDE_DURATION)}ms`,
                  willChange: "transform, opacity",
                  transform: "translateZ(0)",
                  backfaceVisibility: "hidden",
                }}
              />
            </div>
          );
        })}

        {/* Lighter Indigo/Royal Blue Gradient Overlay */}
        <div className="absolute inset-0 z-20 bg-linear-to-r from-[#1e1b4b]/90 via-[#2e2a72]/80 to-[#221c4a]/75" />

        {/* Geometric Diagonal Polygon Facets (Right Side Shapes) */}
        <div
          className="absolute inset-0 z-20 pointer-events-none opacity-25 mix-blend-overlay"
          style={{
            clipPath: "polygon(75% 0, 100% 0, 100% 100%, 55% 100%)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(99,102,241,0.3) 100%)",
          }}
        />
        <div
          className="absolute inset-0 z-20 pointer-events-none opacity-40"
          style={{
            clipPath: "polygon(85% 0, 100% 0, 100% 100%, 68% 100%)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.38) 0%, rgba(165,180,252,0.35) 100%)",
          }}
        />
      </div>

      {/* Dot Indicators */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2 pointer-events-auto">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-8 bg-[#0555F0]"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Hero Content Container */}
      <div className="justify-center relative z-30 max-w-full mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 sm:pt-16">
        <div className="max-w-10xl mx-auto text-center ">
          <h1 className="text-[40px] sm:text-6xl lg:text-[76px] leading-tight sm:leading-[1.05] font-extrabold text-white tracking-tight mb-4 wrap-break-word">
            <span className="block sm:inline">Elevate</span>{" "}
            <span className="block sm:inline">Your Brand</span>{" "}
            <span className="block sm:inline">with Soul-D.</span>
          </h1>
          <h1 className="text-[40px] sm:text-5xl lg:text-[90px] leading-tight sm:leading-[1.08] text-white tracking-tight mb-4 wrap-break-word">
            The Best{" "}
            <span className="inline-flex text-[#0555F0] font-extrabold">
              Digital Marketing
            </span>
            <br />
            <span className="text-[#0555F0] font-extrabold">Agency </span>
            in Hyderabad
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 mt-25">
            <button
              type="button"
              onClick={onOpenQuote}
              className="border-2 border-[#0555F0] text-white hover:bg-[#0555F0] hover:text-white font-semibold text-base px-7 py-3.5 rounded-[100px] shadow-sm shadow-blue-600/30 hover:shadow-md hover:shadow-blue-600/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Free Quote
            </button>
            <button
              type="button"
              onClick={handleLearnMore}
              className="group flex items-center gap-2.5 text-white hover:text-[#0555F0] font-medium text-base transition-colors py-2 px-1"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
