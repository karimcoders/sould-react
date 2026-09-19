import { Award, ShieldCheck, Star, CheckCircle, TrendingUp, Sparkles, Globe, ExternalLink } from 'lucide-react';
import TrustedBySection from './TrustedBySection';

export default function AwardsAndReviews() {
  const recognitions = [
    {
      id: 'rec-1',
      title: 'Google Premier Partner',
      subtitle: 'Verified Search & Meta Ads',
      badge: 'Certified',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 via-red-500 to-yellow-500 text-white flex items-center justify-center font-black text-lg shadow-sm">
          G
        </div>
      ),
      metric: '5.0 ★ Top Tier',
    },
    {
      id: 'rec-2',
      title: 'Clutch Top Agency 2025',
      subtitle: '5.0 Rating • 85+ Reviews',
      badge: 'Leader',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shadow-sm">
          <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
        </div>
      ),
      metric: '4.9 / 5.0 Rating',
    },
    {
      id: 'rec-3',
      title: 'Meta Business Partner',
      subtitle: 'Authorized Ads Agency',
      badge: 'Verified',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-base shadow-sm">
          ∞
        </div>
      ),
      metric: '5.2x Avg ROAS',
    },
    {
      id: 'rec-4',
      title: 'HubSpot Solution Partner',
      subtitle: 'Inbound Marketing Certified',
      badge: 'Gold',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-black text-sm shadow-sm">
          HS
        </div>
      ),
      metric: 'Inbound Certified',
    },
    {
      id: 'rec-5',
      title: 'Upwork Top Rated Plus',
      subtitle: '100% Job Success Score',
      badge: 'Top 1%',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
          <CheckCircle className="w-5 h-5 text-white" />
        </div>
      ),
      metric: '100% Success',
    },
    {
      id: 'rec-6',
      title: 'Shopify Partner Network',
      subtitle: 'E-Commerce Storefronts',
      badge: 'Partner',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shadow-sm">
          S
        </div>
      ),
      metric: '2.1s Speed SLA',
    },
    {
      id: 'rec-7',
      title: 'Trustpilot Excellent',
      subtitle: '4.9/5 Based on 120+ Reviews',
      badge: 'Verified',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-sm">
          <Star className="w-5 h-5 fill-white" />
        </div>
      ),
      metric: '4.9 Excellent',
    },
    {
      id: 'rec-8',
      title: 'DesignRush Excellence',
      subtitle: 'Best Web & Mobile Agency',
      badge: 'Winner',
      icon: (
        <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
          <Award className="w-5 h-5" />
        </div>
      ),
      metric: 'Best Agency 2025',
    },
  ];

  // Duplicate items array for seamless looping marquee
  const tickerItems = [...recognitions, ...recognitions];

  return (
    <section
      id="our-work"
      className="relative z-10 bg-[#e9edf3] py-15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-0 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight font-['Plus_Jakarta_Sans'] mb-4">
          Trusted Industry Recognition
        </h2>
        <p className="text-slate-600 text-2xl sm:text-4xl max-w-10xl mx-auto leading-relaxed">
          Certified by global tech platforms and top-rated by clients for
          delivering high performance, transparent pricing, and measurable
          growth.
        </p>
      </div>
      {/* Trusted Clients & Testimonials */}
      <TrustedBySection />
    </section>
  );
}

