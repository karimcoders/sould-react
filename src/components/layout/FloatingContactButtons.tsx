import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function FloatingContactButtons() {
  const [copied, setCopied] = useState(false);

  const phoneNumber = "+91 9866 500578";
  const mobilePhoneNumber = "+919866500578";

  const isMobileDevice = () => {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  const handlePhoneClick = async (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    // Mobile → open default phone app
    if (isMobileDevice()) {
      return;
    }

    // Desktop → prevent tel: from doing anything
    event.preventDefault();

    try {
      await navigator.clipboard.writeText(phoneNumber);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch (error) {
      console.error("Failed to copy phone number:", error);
    }
  };

  return (
    <div
      className="
        fixed
        right-3 bottom-4
        z-50
        flex flex-col
        gap-3
        sm:right-5 sm:bottom-6 sm:gap-4
        lg:right-10 lg:bottom-15 lg:gap-5
      "
    >
      {/* WhatsApp */}
      <div className="rounded-full shadow-lg">
        <a
          href="https://wa.me/919866500578"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="
            flex
            h-12 w-12
            items-center justify-center
            rounded-full
            bg-[#25D366]
            text-white
            shadow-lg
            transition-all duration-200
            hover:scale-110 hover:shadow-xl
            sm:h-14 sm:w-14
            lg:h-16 lg:w-16
          "
        >
          <FaWhatsapp
            className="
              h-7 w-7
              sm:h-8 sm:w-8
              lg:h-10 lg:w-10
            "
          />
        </a>
      </div>

      {/* Phone */}
      <div className="rounded-full shadow-lg">
        <div className="relative">
          {copied && (
            <div
              className="
                absolute
                right-14 top-1/2
                -translate-y-1/2
                whitespace-nowrap
                rounded-lg
                bg-slate-900
                px-3 py-2
                text-xs
                font-medium
                text-white
                shadow-lg
                sm:right-16
                lg:right-18
              "
            >
              Contact number copied
            </div>
          )}

          <a
            href={`tel:${mobilePhoneNumber}`}
            onClick={handlePhoneClick}
            aria-label="Call us"
            className="
              flex
              h-12 w-12
              items-center justify-center
              rounded-full
              bg-[#0555F0]
              text-white
              shadow-lg
              transition-all duration-200
              hover:scale-110 hover:shadow-xl
              sm:h-14 sm:w-14
              lg:h-16 lg:w-16
            "
          >
            <Phone
              className="
                h-7 w-7
                sm:h-8 sm:w-8
                lg:h-10 lg:w-10
              "
            />
          </a>
        </div>
      </div>
    </div>
  );
}
