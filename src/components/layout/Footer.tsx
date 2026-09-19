import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import souldLogo from "../../../assets/sould-logo.png";
import { SERVICES_DATA } from "../../data";

interface FooterProps {
  onOpenQuote: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  const navigate = useNavigate();
  return (
    <footer className="footer relative z-10 bg-[#090b14] text-slate-400 pt-20 pb-12 border-t border-slate-800/80">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-16 items-start mb-16">
          {/* Company Details */}
          <div className="w-full lg:row-span-2 lg:justify-self-center lg:max-w-sm space-y-4">
            <Link
              to="/"
              className="inline-flex items-center group transition-transform hover:opacity-95"
            >
              <img
                src={souldLogo}
                alt="Soul-D."
                className="h-17 sm:h-17 w-auto object-contain rounded-lg transition-transform group-hover:scale-102"
              />
            </Link>
            <p className="text-slate-400 leading-snug max-w-sm font-normal text-3xl">
              We would love to hear from you. Subscribe for more information.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/soulddigitallysoulful"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Soul-D. on LinkedIn"
                className="w-16 h-16 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-indigo-500 hover:text-white flex items-center justify-center transition-all"
              >
                <Linkedin className="w-9 h-9" />
              </a>
              <a
                href="https://www.instagram.com/soulddigitalmarketing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Soul-D. on Instagram"
                className="w-16 h-16 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-indigo-500 hover:text-white flex items-center justify-center transition-all"
              >
                <Instagram className="w-9 h-9" />
              </a>
              <a
                href="https://www.facebook.com/soul.d.digitalmarketing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Soul-D. on Facebook"
                className="w-16 h-16 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-indigo-500 hover:text-white flex items-center justify-center transition-all"
              >
                <Facebook className="w-9 h-9" />
              </a>
              <a
                href="https://www.youtube.com/@Soul.D.DigitalMarketing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Soul-D. on YouTube"
                className="w-16 h-16 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-indigo-500 hover:text-white flex items-center justify-center transition-all"
              >
                <Youtube className="w-9 h-9" />
              </a>
              <a
                href="https://x.com/soul_d_digital"
                className="w-16 h-16 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-indigo-500 hover:text-white flex items-center justify-center transition-all"
              >
                <Twitter className="w-9 h-9" />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div className="w-full space-y-3">
            <h4 className="font-bold text-xl uppercase tracking-widest text-[#0555F0]">
              Our Services
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 text-[20px] ">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="hover:text-[#0444C0] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="w-full lg:max-w-sm space-y-4">
            <h4 className="font-bold text-xl uppercase tracking-widest text-[#0555F0]">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-[20px]">
              <a
                href="mailto:hello@soulddigitalmarketing.com"
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#0444C0] transition-colors break-all"
              >
                <Globe className="w-5 h-5 text-[#0555F0] shrink-0" />
                <span>www.soulddigitalmarketing.com</span>
              </a>
              <a
                href="mailto:hello@soulddigitalmarketing.com"
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#0444C0] transition-colors break-all"
              >
                <Mail className="w-5 h-5 text-[#0555F0] shrink-0" />
                <span>hello@soulddigitalmarketing.com</span>
              </a>
              <a
                href="tel:+919866500578"
                className="flex items-center gap-2.5 text-slate-300 hover:text-[#0444C0] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#0555F0] shrink-0" />
                <span>+91 9866500578</span>
              </a>
              <div className="flex items-center gap-2.5 text-slate-300">
                <MapPin className="w-5 h-5 text-[#0555F0] shrink-0" />
                <span>
                  Suncity, Near Vantage Line Mall, Bandlaguda Jagir, Hyderabad -
                  91
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-center gap-4 text-xl text-slate-500">
          <div className="">
            © {new Date().getFullYear()} Soul-D. | Digital Marketing Solutions.
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
