import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { useState } from "react";

interface WorkPageProps {
  onOpenQuote: () => void;
}

export default function WorkPage({ onOpenQuote }: WorkPageProps) {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: "proj-1",
      title: "NexTech E-Commerce Ecosystem",
      category: "web-apps",
      categoryLabel: "Web & E-Commerce",
      client: "NexTech Retail Global",
      impact: "+240% Sales Conversion",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      summary:
        "Custom headless storefront with lightning-fast page speed, automated inventory sync, and multi-currency checkout.",
      metrics: [
        "2.1s Avg Load Speed",
        "+240% Conversion Rate",
        "$1.4M Q4 Revenue",
      ],
      tags: ["React", "Node.js", "Tailwind", "Stripe Integration"],
    },
    {
      id: "proj-2",
      title: "FitnessPro Cross-Platform Mobile App",
      category: "web-apps",
      categoryLabel: "Mobile App",
      client: "FitnessPro Studios",
      impact: "150k+ App Installs",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
      summary:
        "Interactive workout tracking app with real-time video coaching, habit streaks, and automated subscription billing.",
      metrics: [
        "150k+ Active Downloads",
        "4.9 App Store Rating",
        "82% User Retention",
      ],
      tags: ["React Native", "Firebase", "Push Notifications"],
    },
    {
      id: "proj-3",
      title: "Meta & Google Ads Scaling Strategy",
      category: "ads",
      categoryLabel: "Performance Marketing",
      client: "Aura Lifestyle Apparel",
      impact: "5.2x Verified ROAS",
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200&auto=format&fit=crop",
      summary:
        "Data-driven omni-channel ad campaigns targeting high-intent demographics with custom video creatives and lookalike audiences.",
      metrics: ["5.2x Omnichannel ROAS", "40% Lower CPA", "3.8M Impressions"],
      tags: ["Meta Ads", "Google Ads", "Retargeting", "Analytics"],
    },
    {
      id: "proj-4",
      title: "Cinematic Product Video Campaign",
      category: "video",
      categoryLabel: "Video & Content",
      client: "Veloce Smart Tech",
      impact: "4.5M Organic Reel Views",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
      summary:
        "High-production 4K promotional commercial series designed for Instagram Reels, YouTube Shorts, and Meta video ads.",
      metrics: [
        "4.5M Total Video Views",
        "350k Shares & Saves",
        "12k Direct Inquiries",
      ],
      tags: ["4K Cinema", "Motion Graphics", "Sound Design"],
    },
    {
      id: "proj-5",
      title: "Executive Personal Branding Portfolio",
      category: "branding",
      categoryLabel: "Personal Branding",
      client: "Dr. A. Sharma (FinTech Founder)",
      impact: "Featured on Forbes & TechCrunch",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
      summary:
        "Complete digital presence rebrand including bespoke personal website, LinkedIn content strategy, and press feature syndication.",
      metrics: [
        "120k LinkedIn Followers Growth",
        "5 Top-Tier Podcast Invites",
        "2 Keynote Speaking Deals",
      ],
      tags: ["Branding", "PR Syndication", "LinkedIn Strategy"],
    },
    {
      id: "proj-6",
      title: "Social Media Management & Growth",
      category: "ads",
      categoryLabel: "SMM & Organic Growth",
      client: "Bistro Fine Dining Chain",
      impact: "300% Monthly Reservation Spike",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
      summary:
        "Daily aesthetic content curation, community management, influencer partnerships, and localized Geo-targeted campaigns.",
      metrics: [
        "300% Booking Increase",
        "45k Organic Followers",
        "98% Positive Sentiment",
      ],
      tags: ["SMM", "Influencer Marketing", "Community Care"],
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      {/* Hero */}
      <section className="bg-slate-950 text-white pt-36 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500 via-slate-900 to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 font-['Plus_Jakarta_Sans']">
            Our Work & <span className="text-[#0555F0]">Case Studies</span>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            Explore how we help startups, businesses, and executives turn
            digital investments into revenue, engagement, and market leadership.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {[
            { id: "all", label: "All Projects" },
            { id: "web-apps", label: "Web & Mobile Apps" },
            { id: "ads", label: "Ads & Growth" },
            { id: "video", label: "Video & Content" },
            { id: "branding", label: "Branding" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                filter === item.id
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                    {project.categoryLabel}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-indigo-600 text-white text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 shadow-lg">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{project.impact}</span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block mb-1">
                    {project.client}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-5">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {project.metrics.map((m) => (
                        <li
                          key={m}
                          className="flex items-center gap-2 text-xs font-semibold text-slate-800"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="w-full mt-4 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-indigo-100 bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white font-bold text-xs transition-all cursor-pointer"
                >
                  <span>Build Similar Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 text-white py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-['Plus_Jakarta_Sans']">
            Want Similar Growth Results For Your Brand?
          </h2>
          <p className="text-slate-300 mb-8 text-base sm:text-lg">
            Let our team engineer a customized digital marketing and development
            roadmap for your company.
          </p>
          <button
            type="button"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base shadow-lg transition-all cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
