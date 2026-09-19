import { ReviewMetric, Service } from "../types";
import hubspotImage1 from "../../assets/hubspot_image_1.jpg";
import hubspotImage2 from "../../assets/hubspot_image_2.jpg";
import hubspotImage3 from "../../assets/hubspot_image_3.jpg";

export const COMPANY_DETAILS = {
  name: "Soul-D. | Digital Marketing Solutions",
  shortName: "Soul-D.",
  tagline: "Digital Marketing Solutions at Reasonable Rates",
  phone: "+91 9866500578",
  email: "hello@soulddigitalmarketing.com",
  address: "India",
};

export const HERO_DATA = {
  subtitle: "SOUL-D. DIGITAL MARKETING SOLUTIONS",
  title: "Elevate Your Brand With\nAll-In-One Digital Solutions",
  description:
    "From website & mobile app development to video production, Meta & Google Ads, social media growth, and personal branding — Soul-D. delivers high-impact digital marketing solutions at reasonable rates.",
  heroBgImage:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop",
  heroImages: [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop", // team meeting
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop", // office/analytics
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop", // laptop dashboard
    "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1920&auto=format&fit=crop", // strategy/marketing
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop", // creative team
  ],
};

export const HUBSPOT_DATA = {
  badge: "DIGITAL INNOVATION HUB",
  title: "Transforming Ideas Into High-Performance Digital Assets",
  description:
    "Whether you need a custom responsive website, a feature-packed mobile app, or an executive brand portfolio, Soul-D. combines creative design and modern technology to launch your brand effortlessly.",
  ctaText: "Explore Web & App Solutions",
  image1:
    // "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    hubspotImage1,
  image2:
    // "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop&crop=faces",
    // hubspotImage2,
    hubspotImage3,
};

export const WHAT_WE_DO_DATA = {
  tag: "WHAT WE DO",
  title: "Marketing That Actually\nMoves the Needle",
  description:
    "At Soul-D., we believe top-tier digital marketing should be both powerful and affordable. We craft tailored strategies across web, mobile, creative content, and targeted ad channels.",
  columns: [
    {
      id: "strategy",
      title: "Strategic Brand Foundation",
      description:
        "We define your unique positioning, product branding, and target audience touchpoints so your business stands out in competitive markets.",
      icon: "message-square",
    },
    {
      id: "execution",
      title: "Multi-Channel Execution",
      description:
        "From high-converting Meta & Google ad campaigns to video editing, mobile apps, and social media management, we execute with precision.",
      icon: "send",
    },
    {
      id: "scale",
      title: "Reasonable Rates & High ROI",
      description:
        "We track metrics that directly drive revenue — leads, app downloads, and sales — offering premium marketing solutions at budget-friendly rates.",
      icon: "layout-grid",
    },
  ],
};
export const SERVICES_DATA: Service[] = [
  {
    id: "web-dev",
    title: "Website Development",
    description:
      "Custom, fast, and fully responsive websites tailored to your business goals. Designed for seamless user experience, high conversion rates, and search engine visibility.",
    icon: "globe",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&auto=format&fit=crop&q=80",
    features: [
      "Custom Responsive Layouts & UI/UX",
      "High-Speed Performance & Security",
      "SEO & Mobile Optimization",
      "E-commerce & CMS Integration",
    ],
  },
  {
    id: "app-dev",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android. Built with modern architectures, intuitive features, and smooth user interfaces.",
    icon: "smartphone",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80",
    features: [
      "iOS & Android Cross-Platform Apps",
      "Intuitive UI/UX Interface Design",
      "API Integration & Cloud Backend",
      "App Store & Play Store Publishing",
    ],
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description:
      "Engaging written and visual content that communicates your brand message, boosts organic reach, and connects with your target audience.",
    icon: "pen-tool",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&auto=format&fit=crop&q=80",
    features: [
      "Copywriting & Blog Articles",
      "Graphic Design & Visual Assets",
      "Product & Service Catalog Copy",
      "SEO Content Strategy",
    ],
  },
  {
    id: "video-production",
    title: "Video Production & Editing",
    description:
      "High-impact video editing and production for Instagram Reels, YouTube Shorts, promotional ads, product videos, and corporate brand showcases.",
    icon: "video",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&auto=format&fit=crop&q=80",
    features: [
      "Short-Form Video & Reels Editing",
      "Promotional Ad Video Editing",
      "Motion Graphics & Sound Design",
      "Brand Story & Voiceover Sync",
    ],
  },
  {
    id: "smm",
    title: "Social Media Management",
    description:
      "End-to-end social media growth and management across Instagram, Facebook, and LinkedIn to build a vibrant, loyal community around your brand.",
    icon: "megaphone",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&auto=format&fit=crop&q=80",
    features: [
      "Content Calendar & Post Scheduling",
      "Community Engagement & DM Lead Gen",
      "Audience Analytics & Monthly Reports",
      "Hashtag & Organic Growth Strategy",
    ],
  },
  {
    id: "ads",
    title: "Google Ads & Meta Ads",
    description:
      "Targeted paid advertising campaigns on Google Search/Shopping and Meta (Facebook & Instagram) engineered for maximum ROI and quality lead acquisition.",
    icon: "network",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    features: [
      "Google Search, Display & Shopping Ads",
      "Meta (FB & IG) Target Funnels",
      "Audience Segmentation & Retargeting",
      "A/B Creative & Copy Testing",
    ],
  },
  {
    id: "personal-branding",
    title: "Portfolio Creation for Personal Branding",
    description:
      "Establish authority and showcase your professional journey with custom executive digital portfolios, personal branding websites, and resume showcases.",
    icon: "user-check",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=1200&auto=format&fit=crop&q=80",
    features: [
      "Custom Executive Portfolios",
      "Interactive Resume & Bio Showcase",
      "Personal Brand Identity & Kit",
      "Lead Form & Contact Integration",
    ],
  },
  {
    id: "product-branding",
    title: "Branding Products or Services",
    description:
      "Comprehensive brand identity design for new or existing products and services. From memorable logos and brand guidelines to market positioning.",
    icon: "sparkles",
    image:
      "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=1200&auto=format&fit=crop&q=80",
    features: [
      "Logo & Typography System Design",
      "Brand Guidelines & Color Palette",
      "Product Packaging & Digital Assets",
      "Market Positioning & Messaging",
    ],
  },
];
export const REVIEW_METRICS: ReviewMetric[] = [
  {
    platform: "Google",
    rating: "4.9",
    reviewsCount: "150+ Happy Clients",
    icon: "google",
  },
  {
    platform: "Meta Ads",
    rating: "5.0",
    reviewsCount: "High ROAS Campaigns",
    icon: "facebook",
  },
  {
    platform: "Satisfaction",
    rating: "100%",
    reviewsCount: "Reasonable Rates Guarantee",
    icon: "star",
  },
  {
    platform: "Overall",
    rating: "4.9/5",
    reviewsCount: "Top Rated Agency",
    icon: "star",
  },
];

export const CLIENT_LOGOS = [
  { id: "logo-1", name: "Soul-D. Web" },
  { id: "logo-2", name: "Soul-D. Apps" },
  { id: "logo-3", name: "Soul-D. Media" },
  { id: "logo-4", name: "Soul-D. Ads" },
  { id: "logo-5", name: "Soul-D. Branding" },
];
