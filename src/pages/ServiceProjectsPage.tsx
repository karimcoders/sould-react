import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Navigate, useParams } from "react-router-dom";
import { SERVICES_DATA } from "../data";

interface ServiceProjectsPageProps {
  onOpenQuote: () => void;
}

type ProjectCard = {
  id: string;
  title: string;
  client: string;
  impact: string;
  summary: string;
  image: string;
  metrics: string[];
  tags: string[];
};

const SERVICE_PROJECTS: Record<string, ProjectCard[]> = {
  "web-dev": [
    {
      id: "web-1",
      title: "Atlas Commerce Platform",
      client: "Atlas Retail Group",
      impact: "+186% Online Orders",
      summary:
        "A conversion-focused storefront with custom product discovery, CMS workflows, and streamlined checkout for growing retail teams.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop",
      metrics: [
        "1.8s average load time",
        "+186% order growth",
        "38% lower bounce rate",
      ],
      tags: ["Next.js", "E-commerce", "SEO", "Performance"],
    },
    {
      id: "web-2",
      title: "Foundry Studio Website Redesign",
      client: "Foundry Creative Co.",
      impact: "4x More Qualified Leads",
      summary:
        "A premium marketing website with interactive case-study sections, lead funnels, and a bold brand system built for trust.",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop",
      metrics: ["4x lead increase", "92% mobile score", "Custom CMS content"],
      tags: ["Brand Site", "CMS", "UI Motion", "Lead Gen"],
    },
  ],
  "app-dev": [
    {
      id: "app-1",
      title: "PulseFit Mobile Companion",
      client: "PulseFit Studios",
      impact: "160k+ Installs",
      summary:
        "A cross-platform fitness app with class booking, subscription flows, and habit tracking tailored for premium wellness brands.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      metrics: ["160k installs", "4.9 rating", "82% retention"],
      tags: ["React Native", "Firebase", "Subscriptions", "Push Alerts"],
    },
    {
      id: "app-2",
      title: "FleetOps Driver Portal",
      client: "Northline Logistics",
      impact: "30% Faster Dispatch",
      summary:
        "An internal mobile operations app for route updates, proof-of-delivery, and live driver coordination across teams.",
      image:
        "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1200&auto=format&fit=crop",
      metrics: [
        "30% faster dispatch",
        "Realtime status updates",
        "Offline mode support",
      ],
      tags: ["iOS", "Android", "Operations", "Realtime"],
    },
  ],
  "content-creation": [
    {
      id: "content-1",
      title: "Launch Week Content Engine",
      client: "Nova Skin Care",
      impact: "7.4M Organic Views",
      summary:
        "A multi-format content rollout with campaign copy, product storytelling, and design assets for social and landing pages.",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop",
      metrics: [
        "7.4M total views",
        "240 assets delivered",
        "3x engagement lift",
      ],
      tags: ["Copywriting", "Creative Direction", "Social", "SEO"],
    },
    {
      id: "content-2",
      title: "B2B Thought Leadership Suite",
      client: "Vector Analytics",
      impact: "61% More Inbound Demos",
      summary:
        "Executive ghostwriting, blog articles, and lead magnets built to move enterprise buyers through the funnel.",
      image:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
      metrics: ["61% more demos", "18 long-form articles", "12 lead magnets"],
      tags: ["LinkedIn", "Blog", "Lead Gen", "Brand Voice"],
    },
  ],
  "video-production": [
    {
      id: "video-1",
      title: "Launch Film for Vertex Audio",
      client: "Vertex Audio",
      impact: "4.1M Reel Views",
      summary:
        "A cinematic launch campaign with motion graphics, short-form edits, and tailored cutdowns for paid social placements.",
      image:
        "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=1200&auto=format&fit=crop",
      metrics: ["4.1M views", "220k saves", "16 deliverables"],
      tags: ["Reels", "Motion Graphics", "Color Grade", "Sound Design"],
    },
    {
      id: "video-2",
      title: "Product Demo Motion Suite",
      client: "Arc AI Tools",
      impact: "11x CTR Lift",
      summary:
        "Short demo videos and cutdowns engineered for landing pages, paid ads, and product launches across social channels.",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
      metrics: ["11x CTR lift", "6 ad variants", "2 language versions"],
      tags: ["Promo Video", "A/B Testing", "Direct Response"],
    },
  ],
  smm: [
    {
      id: "smm-1",
      title: "Hospitality Growth Calendar",
      client: "Cedar House Hotels",
      impact: "320% Reservation Growth",
      summary:
        "A social media system combining monthly content calendars, community management, and localized growth campaigns.",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
      metrics: [
        "320% booking lift",
        "45k followers",
        "Daily community replies",
      ],
      tags: ["Instagram", "Facebook", "Content Calendar", "Community"],
    },
    {
      id: "smm-2",
      title: "Founder Brand Social Playbook",
      client: "Mira Capital",
      impact: "2.8M Impressions",
      summary:
        "A founder-led content strategy focused on authority posts, audience growth, and repeatable content pillars.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      metrics: ["2.8M impressions", "7 content pillars", "3x engagement"],
      tags: ["LinkedIn", "Instagram", "Strategy", "Reporting"],
    },
  ],
  ads: [
    {
      id: "ads-1",
      title: "Omnichannel Growth Campaign",
      client: "Aura Lifestyle Apparel",
      impact: "5.2x ROAS",
      summary:
        "Performance ad system using segmented funnels, high-velocity creatives, and iterative testing across channels.",
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1200&auto=format&fit=crop",
      metrics: ["5.2x ROAS", "40% lower CPA", "3.8M impressions"],
      tags: ["Meta Ads", "Google Ads", "Retargeting", "Analytics"],
    },
    {
      id: "ads-2",
      title: "Lead Gen Funnel for B2B SaaS",
      client: "Nimbus Workflow",
      impact: "3.6x Qualified Leads",
      summary:
        "Search and retargeting campaigns paired with landing page optimization to grow demo requests efficiently.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      metrics: ["3.6x lead lift", "27% lower CPL", "12 ad variants"],
      tags: ["Search", "Retargeting", "Landing Pages"],
    },
  ],
  "personal-branding": [
    {
      id: "branding-1",
      title: "Executive Portfolio for a FinTech Founder",
      client: "Dr. A. Sharma",
      impact: "Forbes Feature Ready",
      summary:
        "A personal brand website and content ecosystem built to position a founder as a trusted industry voice.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
      metrics: [
        "120k follower growth",
        "5 podcast invites",
        "1 portfolio system",
      ],
      tags: ["Personal Brand", "Portfolio", "LinkedIn", "PR"],
    },
    {
      id: "branding-2",
      title: "Creator Authority Website",
      client: "Ava Mensah, Design Strategist",
      impact: "12 Speaking Inquiries",
      summary:
        "A refined digital presence for a creative leader featuring case studies, media mentions, and contact funnels.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1200&auto=format&fit=crop",
      metrics: [
        "12 speaking inquiries",
        "3 media features",
        "Brand kit refresh",
      ],
      tags: ["Executive Site", "Media Kit", "Authority"],
    },
  ],
  "product-branding": [
    {
      id: "product-1",
      title: "Signature Product Identity System",
      client: "Luma Home Goods",
      impact: "Retail Launch Ready",
      summary:
        "A cohesive identity system for a new product line including logo, packaging direction, and visual language.",
      image:
        "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=1200&auto=format&fit=crop",
      metrics: ["Packaging concept", "Retail-ready system", "Brand standards"],
      tags: ["Packaging", "Identity", "Guidelines", "Positioning"],
    },
    {
      id: "product-2",
      title: "Service Brand Refresh for Growth Stage",
      client: "Urban Nest Interiors",
      impact: "2x Brand Recall",
      summary:
        "A full repositioning package that sharpened the offer, visual identity, and messaging across touchpoints.",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
      metrics: [
        "2x recall lift",
        "Messaging refresh",
        "Unified digital assets",
      ],
      tags: ["Brand Strategy", "Visual Identity", "Launch"],
    },
  ],
};

const SERVICE_BANNER: Record<string, string> = {
  "web-dev": "High-converting digital experiences for ambitious brands.",
  "app-dev": "Mobile products built to engage users and scale fast.",
  "content-creation": "Content systems that turn attention into action.",
  "video-production": "Campaign visuals designed to stop the scroll.",
  smm: "Social growth plans that build durable audiences.",
  ads: "Performance marketing with measurable growth.",
  "personal-branding": "Executive presence built for trust and authority.",
  "product-branding": "Brand systems that make new offers memorable.",
};

function getServiceIcon(iconName: string): LucideIcon {
  switch (iconName) {
    case "globe":
      return Sparkles;
    case "smartphone":
      return Sparkles;
    case "pen-tool":
      return Sparkles;
    case "video":
      return Sparkles;
    case "megaphone":
      return Sparkles;
    case "network":
      return Sparkles;
    case "user-check":
      return Sparkles;
    default:
      return Sparkles;
  }
}

export default function ServiceProjectsPage({
  onOpenQuote,
}: ServiceProjectsPageProps) {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = SERVICES_DATA.find((item) => item.id === serviceId);

  if (!service || !serviceId) {
    return <Navigate to="/services" replace />;
  }

  const projects = SERVICE_PROJECTS[serviceId] ?? [];
  const ServiceIcon = getServiceIcon(service.icon);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      <section className="bg-slate-950 text-white pt-36 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-indigo-500 via-slate-900 to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 font-['Plus_Jakarta_Sans']">
              {service.title} <span className="text-[#0555F0]">Projects</span>
            </h1>
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
              {SERVICE_BANNER[serviceId] ?? service.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                    Project Card
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
                      {project.metrics.map((metric) => (
                        <li
                          key={metric}
                          className="flex items-center gap-2 text-xs font-semibold text-slate-800"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                          <span>{metric}</span>
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
                  <span>Build a Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-semibold mb-5">
            <ShieldCheck className="w-4 h-4 text-[#0555F0]" />
            <span>Projects tailored to your brief</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 font-['Plus_Jakarta_Sans']">
            Want a project like these?
          </h2>
          <p className="text-slate-300 mb-8 text-base sm:text-lg">
            We can scope, design, and deliver a custom solution for your brand,
            product, or campaign.
          </p>
          <button
            type="button"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base shadow-lg transition-all cursor-pointer"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
