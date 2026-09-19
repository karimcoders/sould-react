import CountUp from "react-countup";

const StatsBar = () => {
  const stats = [
    { label: "Projects Delivered", value: 100, suffix: "+" },
    { label: "Client Retention Rate", value: 88, suffix: "%" },
    { label: "Industries Covered", value: 10, suffix: "+" },
    { label: "Countries, Global Footprint", value: 3, suffix: "+" },
  ];
  return (
    <div>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-30 inset-x-0 h-30 bg-[#f8f9fe]"
      />

      {/* Stats Bar */}
      <section className="bg-[#f8f9fe] border-slate-200/80 pb-16 sm:pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 text-center">
            {stats.map((st) => (
              <div key={st.label}>
                <span className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0555F0] block mb-1 font-['Plus_Jakarta_Sans']">
                  <CountUp
                    end={st.value}
                    duration={1.5}
                    suffix={st.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-600 uppercase tracking-wider">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatsBar;
