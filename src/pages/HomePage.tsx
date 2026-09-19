import AwardsAndReviews from "../components/sections/AwardsAndReviews";
import CustomProposalSection from "../components/sections/CustomProposalSection";
import FaqSection from "../components/sections/FaqSection";
import HeroSection from "../components/sections/HeroSection";
import HubspotSection from "../components/sections/HubspotSection";
import WhatWeDoSection from "../components/sections/WhatWeDoSection";
import InteractiveServices from "../components/ui/InteractiveService";
interface HomePageProps {
  onOpenQuote: () => void;
  onOpenQuoteWithService: (serviceTitle: string) => void;
  selectedServiceId?: string;
}

export default function HomePage({
  onOpenQuote,
  onOpenQuoteWithService,
  selectedServiceId,
}: HomePageProps) {
  return (
    <>
      {/* Hero Section */}
      <HeroSection onOpenQuote={onOpenQuote} />

      {/* Interactive Services */}
      <InteractiveServices onOpenQuoteWithService={onOpenQuoteWithService} />

      {/* HubSpot Drag-and-Drop Section */}
      <HubspotSection />

      {/* What We Do Section */}
      <WhatWeDoSection />

      {/* Services Section */}
      {/* <ServicesSection
        onOpenQuoteWithService={onOpenQuoteWithService}
        selectedServiceId={selectedServiceId}
      /> */}

      {/* Relation & Awards + Reviews Section */}
      <AwardsAndReviews />

      {/* Custom Proposal Section */}
      <CustomProposalSection />

      {/* FAQ SECTION */}
      <FaqSection />
    </>
  );
}
