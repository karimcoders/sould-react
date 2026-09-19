import { CSSProperties, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FloatingContactButtons from "../components/layout/FloatingContactButtons";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import ScrollToTop from "../components/layout/ScrollToTop";
import BuyNowModal from "../components/modals/BuyNowModal";
import CustomizeDrawer from "../components/modals/CustomizeDrawer";
import QuoteModal from "../components/modals/QuoteModal";
import SearchModal from "../components/modals/SearchModal";

import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import ServiceProjectsPage from "../pages/ServiceProjectsPage";
import ServicesPage from "../pages/ServicesPage";
import WorkPage from "../pages/WorkPage";

import { ThemeConfig } from "../types";

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [isBuyNowOpen, setIsBuyNowOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<
    string | undefined
  >(undefined);
  const [selectedServiceId, setSelectedServiceId] = useState<
    string | undefined
  >(undefined);

  const [theme, setTheme] = useState<ThemeConfig>({
    primaryColor: "#3B52F6",
    fontFamily: "Plus Jakarta Sans",
    borderRadius: "1rem",
    darkMode: false,
  });

  const handleUpdateTheme = (updated: Partial<ThemeConfig>) => {
    setTheme((prev) => ({ ...prev, ...updated }));
  };

  const handleResetTheme = () => {
    setTheme({
      primaryColor: "#3B52F6",
      fontFamily: "Plus Jakarta Sans",
      borderRadius: "1rem",
      darkMode: false,
    });
  };

  const handleOpenQuoteWithService = (serviceTitle: string) => {
    setSelectedServiceTitle(serviceTitle);
    setIsQuoteOpen(true);
  };

  const handleOpenQuote = () => {
    setSelectedServiceTitle(undefined);
    setIsQuoteOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div
        className={`min-h-screen flex flex-col transition-colors duration-300 ${
          theme.darkMode
            ? "bg-slate-950 text-slate-100"
            : "bg-white text-slate-900"
        }`}
        style={
          {
            "--primary-color": theme.primaryColor,
          } as CSSProperties
        }
      >
        {/* Navigation Header */}
        <Header
          onOpenQuote={handleOpenQuote}
          onOpenSearch={() => setIsSearchOpen(true)}
          onSelectService={(id) => setSelectedServiceId(id)}
        />

        {/* Page Routing */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenQuote={handleOpenQuote}
                  onOpenQuoteWithService={handleOpenQuoteWithService}
                  selectedServiceId={selectedServiceId}
                />
              }
            />
            <Route
              path="/services"
              element={
                <ServicesPage
                  onOpenQuoteWithService={handleOpenQuoteWithService}
                />
              }
            />
            <Route
              path="/services/:serviceId"
              element={<ServiceProjectsPage onOpenQuote={handleOpenQuote} />}
            />
            <Route
              path="/work"
              element={<WorkPage onOpenQuote={handleOpenQuote} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenQuote={handleOpenQuote} />}
            />
            <Route
              path="/contact"
              element={<ContactPage onOpenQuote={handleOpenQuote} />}
            />
            {/* Fallback route */}
            <Route
              path="*"
              element={
                <HomePage
                  onOpenQuote={handleOpenQuote}
                  onOpenQuoteWithService={handleOpenQuoteWithService}
                  selectedServiceId={selectedServiceId}
                />
              }
            />
          </Routes>
        </main>

        {/* Agency Footer */}
        <Footer onOpenQuote={handleOpenQuote} />

        <FloatingContactButtons />

        {/* Modals & Drawers */}
        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
          preselectedService={selectedServiceTitle}
        />

        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectService={(id) => setSelectedServiceId(id)}
        />

        <CustomizeDrawer
          isOpen={isCustomizeOpen}
          onClose={() => setIsCustomizeOpen(false)}
          theme={theme}
          onUpdateTheme={handleUpdateTheme}
          onResetTheme={handleResetTheme}
        />

        <BuyNowModal
          isOpen={isBuyNowOpen}
          onClose={() => setIsBuyNowOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
