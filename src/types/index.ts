export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string; // <-- Add this
  features: string[];
}

export interface AwardLogo {
  name: string;
  svg: string;
}

export interface ReviewMetric {
  platform: string;
  rating: string;
  reviewsCount: string;
  icon: "google" | "facebook" | "location" | "star";
}

export interface QuoteFormData {
  services: string[];
  budget: number;
  timeline: string;
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface ThemeConfig {
  primaryColor: string;
  fontFamily: string;
  borderRadius: string;
  darkMode: boolean;
}
