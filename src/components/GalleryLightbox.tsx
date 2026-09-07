import React, { useEffect, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Share2,
  Copy,
  Check,
  Send,
  MessageCircle,
} from "lucide-react";
import { GalleryItem } from "@/lib/galleryData";

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
  onEnquire?: () => void;
}

export function GalleryLightbox({
  item,
  items,
  onClose,
  onSelect,
  onEnquire,
}: GalleryLightboxProps) {
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  // Keyboard navigation & lock scroll
  useEffect(() => {
    if (!item) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIdx]);
    setCopied(false);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % items.length;
    onSelect(items[nextIdx]);
    setCopied(false);
  };

  const fullImageUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${item.image}`
      : item.image;

  const pageUrl =
    typeof window !== "undefined" ? window.location.href : "";

  const shareText = `Check out "${item.title}" by Callisto Living Studio`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(fullImageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Social Share URLs
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${shareText} - ${fullImageUrl}`
  )}`;
  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
    pageUrl
  )}&media=${encodeURIComponent(
    fullImageUrl
  )}&description=${encodeURIComponent(shareText)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText
  )}&url=${encodeURIComponent(fullImageUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    fullImageUrl
  )}`;

  return (
    <div
      className="fixed inset-0 z-[250] flex flex-col justify-between bg-black/95 text-[#F3EFE7] backdrop-blur-xl animate-in fade-in duration-300 select-none"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* PINNED TOP-RIGHT CLOSE BUTTON (ALWAYS VISIBLE OVER ALL ELEMENTS) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="fixed top-4 right-4 sm:top-6 sm:right-8 z-[320] flex items-center gap-2 rounded-full border border-white/40 bg-black/85 px-4 py-2 text-xs uppercase tracking-widest text-white transition-all hover:border-[#DE1D25] hover:bg-[#DE1D25] cursor-pointer font-semibold shadow-2xl backdrop-blur-md"
        aria-label="Close Lightbox"
      >
        <span>CLOSE</span>
        <X size={18} />
      </button>

      {/* TOP HEADER BAR */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 md:px-10 bg-black/60 relative z-20">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#DE1D25]">
            CALLISTO ATELIER
          </span>
        </div>

        <div className="flex items-center gap-3 pr-24 sm:pr-32">
          <span className="text-[11px] font-mono text-[#F3EFE7]/70">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>

      {/* CENTER IMAGE & NAV ARROWS */}
      <div
        className="relative flex flex-1 items-center justify-center p-4 sm:p-8 overflow-hidden"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* PREV BUTTON */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-4 z-30 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/60 text-white transition-all hover:border-white hover:bg-white hover:text-black cursor-pointer shadow-lg"
          aria-label="Previous Image"
        >
          <ChevronLeft size={24} />
        </button>

        {/* IMAGE DISPLAY */}
        <div className="relative max-h-[75vh] max-w-5xl overflow-hidden rounded-xs shadow-[0_0_80px_rgba(0,0,0,0.9)]">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[75vh] w-auto max-w-full object-contain transition-all duration-500"
          />
        </div>

        {/* NEXT BUTTON */}
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-4 z-30 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/60 text-white transition-all hover:border-white hover:bg-white hover:text-black cursor-pointer shadow-lg"
          aria-label="Next Image"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* BOTTOM CONTROL & SOCIAL SHARE BAR */}
      <div className="border-t border-white/10 bg-black/80 px-6 py-4 md:px-10 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[11px] font-mono text-[#F3EFE7]/50 uppercase tracking-widest">
            IMAGE {currentIndex + 1} OF {items.length}
          </span>

          {/* Action Suite & Social Share Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Social Share Menu Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowShareMenu((prev) => !prev)}
                className="flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#F3EFE7] transition-all hover:border-white hover:bg-white/15 cursor-pointer"
              >
                <Share2 size={14} className="text-[#DE1D25]" />
                <span>SHARE DESIGN</span>
              </button>

              {/* Share Dropdown */}
              {showShareMenu && (
                <div className="absolute bottom-full right-0 mb-2 w-56 rounded-xs border border-white/20 bg-[#171817] p-3 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200 z-50">
                  <p className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#DE1D25] mb-2 border-b border-white/10 pb-1">
                    SHARE THIS DESIGN
                  </p>
                  <div className="flex flex-col gap-1.5">
                    {/* WhatsApp */}
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs text-[#F3EFE7] hover:bg-white/10 transition-colors"
                    >
                      <MessageCircle size={14} className="text-[#25D366]" />
                      <span>WhatsApp</span>
                    </a>

                    {/* Pinterest */}
                    <a
                      href={pinterestUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs text-[#F3EFE7] hover:bg-white/10 transition-colors"
                    >
                      <span className="font-bold text-[#E60023]">P</span>
                      <span>Pinterest Pin</span>
                    </a>

                    {/* Twitter/X */}
                    <a
                      href={twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs text-[#F3EFE7] hover:bg-white/10 transition-colors"
                    >
                      <span className="font-bold text-white">𝕏</span>
                      <span>Share on 𝕏</span>
                    </a>

                    {/* Facebook */}
                    <a
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-3 py-2 text-xs text-[#F3EFE7] hover:bg-white/10 transition-colors"
                    >
                      <span className="font-bold text-[#1877F2]">f</span>
                      <span>Facebook</span>
                    </a>

                    {/* Copy Link */}
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="flex w-full items-center gap-2.5 px-3 py-2 text-xs text-[#F3EFE7] hover:bg-white/10 transition-colors cursor-pointer text-left border-t border-white/10 mt-1 pt-2"
                    >
                      {copied ? (
                        <Check size={14} className="text-green-400" />
                      ) : (
                        <Copy size={14} className="text-[#C5B7A7]" />
                      )}
                      <span>{copied ? "Link Copied!" : "Copy Image URL"}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Copy Link Button */}
            <button
              type="button"
              onClick={handleCopyLink}
              className="flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#F3EFE7] transition-all hover:border-white hover:bg-white/15 cursor-pointer"
              title="Copy Image URL"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-green-400" />
                  <span className="text-green-400">COPIED</span>
                </>
              ) : (
                <>
                  <Copy size={14} className="text-[#C5B7A7]" />
                  <span>COPY LINK</span>
                </>
              )}
            </button>

            {/* Enquire Button */}
            {onEnquire && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onEnquire();
                }}
                className="flex items-center gap-2 bg-[#DE1D25] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-white hover:text-[#171817] cursor-pointer shadow-md"
              >
                <Send size={13} />
                <span>ENQUIRE FOR THIS DESIGN →</span>
              </button>
            )}

            {/* Bottom Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="flex items-center gap-2 border border-red-500/50 bg-red-600/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-red-600 hover:border-red-600 cursor-pointer shadow-md"
            >
              <span>CLOSE</span>
              <X size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
