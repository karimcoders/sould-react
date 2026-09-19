import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import souldLogo from "../../../assets/sould-logo-1.png";

interface HeaderProps {
  onOpenQuote: () => void;
  onOpenSearch: () => void;
  onSelectService?: (serviceId: string) => void;
}

export default function Header({
  onOpenQuote,
  onOpenSearch,
  onSelectService,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesList = [
    { id: "web-dev", name: "Website Development" },
    { id: "app-dev", name: "Mobile App Development" },
    { id: "content-creation", name: "Content Creation" },
    { id: "video-production", name: "Video Production & Editing" },
    { id: "smm", name: "Social Media Management" },
    { id: "ads", name: "Google Ads & Meta Ads" },
    { id: "personal-branding", name: "Portfolio for Personal Branding" },
    { id: "product-branding", name: "Branding Products or Services" },
  ];

  const handleServiceClick = (serviceId: string) => {
    if (onSelectService) onSelectService(serviceId);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(`/services/${serviceId}`);
  };

  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors py-1 ${
      isActive
        ? "text-[#0555F0] font-bold"
        : "text-slate-200 hover:text-[#0555F0]"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-black/85 backdrop-blur-md py-3 shadow-lg border-b border-white/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link
              to="/"
              className="flex items-center group transition-transform hover:opacity-95"
              aria-label="Soul-D. home"
            >
              <img
                src={souldLogo}
                alt="Soul-D."
                className="h-11 sm:h-17 w-auto object-contain rounded-lg transition-transform group-hover:scale-102"
              />
            </Link>
            <span className="text-white text-[21px] ml-2 logo-text">Digital Marketing Solutions</span>
          </div>
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-lg font-medium">
            <NavLink to="/" end className={navItemClass}>
              Home
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `flex items-center gap-1.5 transition-colors py-2 cursor-pointer ${
                    isActive
                      ? "text-[#0555F0] font-bold"
                      : "text-slate-200 hover:text-[#0555F0]"
                  }`
                }
              >
                Services
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
              </NavLink>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl p-2 text-left">
                    {servicesList.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceClick(service.id)}
                        className="w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-indigo-600/20 hover:border-l-2 hover:border-indigo-500 transition-all flex items-center justify-between group/item cursor-pointer"
                      >
                        <span>{service.name}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 text-[#0555F0] transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/work" className={navItemClass}>
              Our Work
            </NavLink>

            <NavLink to="/about" className={navItemClass}>
              About Us
            </NavLink>

            <NavLink to="/contact" className={navItemClass}>
              Contact
            </NavLink>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Get a Free Quote Button */}
            <button
              type="button"
              onClick={onOpenQuote}
              className="bg-[#0555F0] hover:bg-[#0444C0] text-white font-semibold text-sm px-5 py-2.5 rounded-4xl transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-4 text-base font-medium text-slate-200">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 ${location.pathname === "/" ? "text-[#0555F0] font-bold" : "hover:text-[#0555F0]"}`}
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 ${location.pathname === "/services" ? "text-[#0555F0] font-bold" : "hover:text-[#0555F0]"}`}
            >
              Services
            </Link>

            <Link
              to="/work"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 ${location.pathname === "/work" ? "text-[#0555F0] font-bold" : "hover:text-[#0555F0]"}`}
            >
              Our Work
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 ${location.pathname === "/about" ? "text-[#0555F0] font-bold" : "hover:text-[#0555F0]"}`}
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-1 ${location.pathname === "/contact" ? "text-[#0555F0] font-bold" : "hover:text-[#0555F0]"}`}
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full bg-[#0555F0] hover:bg-[#0444C0] text-white font-semibold py-3 rounded-lg text-center transition-colors shadow-sm cursor-pointer"
              >
                Get a Free Quote
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
