import {
  ArrowRight,
  CheckCircle2,
  Heart,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

interface AboutPageProps {
  onOpenQuote: () => void;
}

export default function AboutPage({ onOpenQuote }: AboutPageProps) {
  const values = [
    {
      icon: <Target className="w-6 h-6 text-indigo-600" />,
      title: "ROI-First Mentality",
      desc: "We focus on metrics that impact your bottom line — sales, leads, traffic, and user retention — rather than vanity metrics.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      title: "Reasonable & Transparent Rates",
      desc: "Top-tier agency quality shouldn’t break your bank. We offer transparent pricing structures with zero hidden fees.",
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: "Dedicated Partnership",
      desc: "We act as an extension of your internal team, providing active communication, regular reports, and hands-on support.",
    },
    {
      icon: <Heart className="w-6 h-6 text-indigo-600" />,
      title: "Craft & Innovation",
      desc: "We stay on the cutting edge of web technology, AI tools, video editing trends, and advertising algorithms to keep you ahead.",
    },
  ];

  const team = [
    {
      name: "Soul-D. Creative Team",
      role: "Full-Stack Brand Strategy",
      bio: "Combining brand strategists, UI/UX designers, developers, and media buyers who craft campaigns that convert.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Media & Production Crew",
      role: "Video & Ad Creators",
      bio: "Specialized video directors, sound engineers, and ad copywriters behind viral video campaigns and high-ROAS ad creatives.",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    },
    {
      name: "Engineering Hub",
      role: "Web & App Developers",
      bio: "Architects of high-speed web apps, iOS & Android mobile platforms, and enterprise CMS integrations.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Hero Header */}
      <section className="bg-slate-950 text-white pt-36 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500 via-slate-900 to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 font-['Plus_Jakarta_Sans']">
            Driven by Passion, <br className="hidden sm:inline" />
            <span className="text-[#0555F0]">Engineered for Results</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            At Soul-D. Digital Marketing Solutions, we empower brands, startups,
            and executives with world-class digital services at accessible
            rates.
          </p>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-3">
              OUR STORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 font-['Plus_Jakarta_Sans']">
              Making Premium Digital Growth Accessible To Everyone
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4 text-base">
              Founded with a mission to bridge the gap between expensive
              traditional agencies and budget constraints, Soul-D. provides
              complete digital marketing, web/app development, video production,
              and advertising solutions.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6 text-base">
              We believe every business — whether a local storefront, an
              emerging startup, or an executive establishing a personal brand —
              deserves top-tier digital assets that perform.
            </p>
            <div className="space-y-3">
              {[
                "Tailored digital strategies with guaranteed transparency",
                "Multi-disciplinary team of engineers, designers & marketers",
                "End-to-end execution from design to ad optimization",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold text-slate-800"
                >
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
              alt="Soul-D Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-8">
              <div className="text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 block mb-1">
                  Our Motto
                </span>
                <p className="text-lg font-bold">
                  &quot;Digital Marketing Solutions at Reasonable Rates.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-['Plus_Jakarta_Sans']">
              The Principles That Guide Us
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Every decision we make is rooted in core values designed to
              deliver maximum value to our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-slate-50 p-7 rounded-2xl border border-slate-100"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 font-['Plus_Jakarta_Sans']">
            Meet the Experts Behind Your Growth
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Our multi-talented team combines creative innovation and technical
            mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((m) => (
            <div
              key={m.name}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {m.name}
                </h3>
                <span className="text-xs font-bold text-indigo-600 block mb-3 uppercase tracking-wider">
                  {m.role}
                </span>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {m.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-['Plus_Jakarta_Sans']">
            Let’s Build Something Remarkable Together
          </h2>
          <p className="text-slate-300 mb-8 text-base sm:text-lg">
            Partner with Soul-D. today and transform your online presence with
            industry-leading solutions.
          </p>
          <button
            type="button"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base shadow-lg transition-all cursor-pointer"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
