import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

interface WhatsAppBubbleProps {
  phoneNumber?: string;
  message?: string;
}

export const WhatsAppBubble: React.FC<WhatsAppBubbleProps> = ({
  phoneNumber = "919876543210",
  message = "Hello Callisto Living! I'm interested in your interior design services.",
}) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-[180] flex flex-col items-end gap-2 pointer-events-auto select-none">
      {/* TOOLTIP BANNER */}
      {showTooltip && (
        <div className="relative flex items-center gap-3 rounded-xl border border-white/20 bg-[#171817]/95 px-4 py-2.5 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 duration-300 max-w-xs">
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#25D366]">
              NEED INTERIOR CONSULTATION?
            </span>
            <span className="text-xs text-[#F3EFE7] font-light">
              Chat live with Callisto Living
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-white/50 hover:text-white transition-colors cursor-pointer p-0.5"
            aria-label="Close tooltip"
          >
            <X size={14} />
          </button>
          <div className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 border-b border-r border-white/20 bg-[#171817]" />
        </div>
      )}

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-1.1 hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] cursor-pointer"
        aria-label="Contact Callisto Living on WhatsApp"
      >
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />

        {/* Official WhatsApp SVG Icon */}
        <svg
          className="relative z-10 h-7 w-7 text-white fill-current drop-shadow-md"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.288.458-1.001 3.655 3.744-.982.463.274zm11.233-6.425c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
        </svg>

        {/* Hover Label Pill */}
        <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-[#171817] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#F3EFE7] opacity-0 transition-opacity duration-300 group-hover:opacity-100 border border-white/10 shadow-lg hidden sm:block">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
};
