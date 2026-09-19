import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import blueDiamondLogo from "../../../assets/companies-logo/blue-diamond-logo.png";
import edubukLogo from "../../../assets/companies-logo/edubuk-logo.png";
import elionyxLogo from "../../../assets/companies-logo/elionyx.png";
import manalogLogo from "../../../assets/companies-logo/manalog-logo.png";
import perfectAirConditionersLogo from "../../../assets/companies-logo/perfect-air-conditioners.png";

const clientLogos = [
  { name: "Blue Diamond Auto Services", src: blueDiamondLogo },
  { name: "Edubuk", src: edubukLogo },
  { name: "Elionyx", src: elionyxLogo },
  { name: "Manalot", src: manalogLogo },
  { name: "Perfect Air Conditioners", src: perfectAirConditionersLogo },
];

const testimonials = [
  {
    quote:
      "Soul-D. helped us turn our data into clear analytics and a practical dashboard that makes better decisions easier.",
    name: "Anil Raikundlia",
    role: "Founder, Manalot",
  },
  {
    quote:
      "Soul-D. created our brand identity from scratch and gave Edubuk a clear, consistent presence we are proud to share.",
    name: "Apoorva Bajaj",
    role: "Co-Founder & CEO, Edubuk",
  },
  {
    quote:
      "Soul-D. redesigned our website from simple to visually rich and professional, while keeping the experience easy to use.",
    name: "Naveen Kumar Geddha",
    role: "Co-Founder Elionyxtech",
  },
  {
    quote:
      "Soul-D. understood our vision quickly and turned it into a digital presence that finally feels like us.",
    name: "Blue Diamond Auto Services",
    role: "Automotive services",
  },
  {
    quote: "Soul-D. helped us refine website and market us effectively.",
    name: "Perfect Air Conditioners",
    role: "HVAC services",
  },
];

const REVIEWS_PER_PAGE = 3;

export default function TrustedBySection() {
  const logoGroups = [clientLogos, clientLogos, clientLogos];
  const [currentReviewPage, setCurrentReviewPage] = useState(0);
  const [currentMobileReview, setCurrentMobileReview] = useState(0);
  const reviewViewportRef = useRef<HTMLDivElement>(null);
  const reviewPages = [];

  for (let index = 0; index < testimonials.length; index += REVIEWS_PER_PAGE) {
    reviewPages.push(testimonials.slice(index, index + REVIEWS_PER_PAGE));
  }

  const lastReviewPage = reviewPages.length - 1;

  const goToPreviousReviews = () => {
    setCurrentReviewPage((page) => Math.max(0, page - 1));
  };

  const goToNextReviews = () => {
    setCurrentReviewPage((page) => Math.min(lastReviewPage, page + 1));
  };

  const scrollMobileReviews = (direction: -1 | 1) => {
    const nextReview = currentMobileReview + direction;
    if (nextReview < 0 || nextReview >= testimonials.length) return;

    const viewport = reviewViewportRef.current;
    if (!viewport) return;

    viewport.scrollTo({
      left: nextReview * (viewport.clientWidth + 24),
      behavior: "smooth",
    });
    setCurrentMobileReview(nextReview);
  };

  return (
    <section className="relative overflow-hidden bg-[#e9edf3] py-10 sm:py-24">
      {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-[#0555F0]">
            Trusted by ambitious teams
          </p>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0b0d17] sm:text-5xl">
            Good work travels further when it is built together.
          </h2>
        </div>
      </div> */}

      <div className="relative mb-16 w-full overflow-hidden border-y border-slate-200/80 bg-[#e9edf3] py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-[#e9edf3] to-transparent sm:w-28" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-[#e9edf3] to-transparent sm:w-28" />

        <div className="logo-marquee flex w-max">
          {logoGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="flex items-center gap-5 pr-5">
              {group.map((logo, index) => (
                <div
                  className="flex h-32 w-52 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 shadow-sm sm:w-64"
                  key={`${logo.name}-${groupIndex}-${index}`}
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`w-full object-contain ${
                      logo.name === "Blue Diamond Auto Services"
                        ? "max-h-28 scale-150"
                        : "max-h-22"
                    }`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        <style>{`
    @keyframes marqueeReverse {
      0% {
        transform: translateX(-33.333333%);
      }

      100% {
        transform: translateX(0);
      }
    }

    .logo-marquee {
      animation: marqueeReverse 28s linear infinite;
    }

    .logo-marquee:hover {
      animation-play-state: paused;
    }
  `}</style>
      </div>

      <div className="relative mx-auto w-full px-12 sm:px-16">
        <button
          type="button"
          onClick={goToPreviousReviews}
          disabled={currentReviewPage === 0}
          aria-label="Show previous reviews"
          className="absolute left-1 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40 md:flex sm:left-2"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={goToNextReviews}
          disabled={currentReviewPage === lastReviewPage}
          aria-label="Show next reviews"
          className="absolute right-1 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40 md:flex sm:right-2"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={() => scrollMobileReviews(-1)}
          disabled={currentMobileReview === 0}
          aria-label="Show previous review"
          className="absolute left-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40 md:hidden"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={() => scrollMobileReviews(1)}
          disabled={currentMobileReview === testimonials.length - 1}
          aria-label="Show next review"
          className="absolute right-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:scale-105 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40 md:hidden"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          ref={reviewViewportRef}
          className="overflow-x-auto md:overflow-hidden"
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentReviewPage * 100}%)` }}
          >
            {reviewPages.map((page, pageIndex) => (
              <div
                className={`flex min-w-full gap-6 md:grid ${
                  page.length === REVIEWS_PER_PAGE
                    ? "md:grid-cols-3"
                    : "md:grid-cols-2"
                }`}
                key={pageIndex}
              >
                {page.map((testimonial) => (
                  <article
                    className="flex min-h-85 min-w-[calc(100vw-6rem)] flex-col rounded-2xl border border-slate-200 bg-white p-8 text-slate-900 shadow-lg shadow-slate-400/10 sm:min-h-90 sm:p-10 md:min-w-0"
                    key={testimonial.name}
                  >
                    <div
                      className="mb-7 flex gap-1 text-[#0555F0]"
                      aria-label="5 out of 5 stars"
                    >
                      {Array.from({ length: 5 }, (_, starIndex) => (
                        <span key={starIndex} aria-hidden="true">
                          ★
                        </span>
                      ))}
                    </div>

                    <blockquote className="font-['Raleway'] text-xl leading-relaxed text-slate-700 sm:text-2xl">
                      “{testimonial.quote}”
                    </blockquote>

                    <footer className="mt-auto pt-8">
                      <p className="font-['Quicksand'] text-base font-bold text-slate-900 sm:text-lg">
                        {testimonial.name}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {testimonial.role}
                      </p>
                    </footer>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
