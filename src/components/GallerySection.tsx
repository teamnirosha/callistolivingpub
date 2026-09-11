import React, { useState, useMemo } from "react";
import { Maximize2 } from "lucide-react";
import { GALLERY_ITEMS, HOMEPAGE_GALLERY_ITEMS, GalleryItem } from "@/lib/galleryData";
import { GalleryLightbox } from "./GalleryLightbox";

interface GallerySectionProps {
  onEnquire?: () => void;
  isFullPage?: boolean;
}

const CATEGORIES = [
  "ALL",
  "Living Rooms",
  "Primary Suites",
  "Kitchens & Dining",
  "Bespoke Joinery",
  "Interior Details",
  "Commercial & Ateliers",
] as const;

export const GallerySection: React.FC<GallerySectionProps> = ({ onEnquire, isFullPage = false }) => {
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<GalleryItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  // On homepage (isFullPage=false): show homepage curated items. On /gallery (isFullPage=true): show category-filtered items.
  const displayedItems = useMemo(() => {
    if (!isFullPage) return HOMEPAGE_GALLERY_ITEMS;
    if (selectedCategory === "ALL") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [isFullPage, selectedCategory]);

  return (
    <section id="gallery" className="relative bg-[#F3EFE7] py-14 sm:py-20 text-[#171817] scroll-mt-20">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        {/* SECTION HEADING */}
        <div className="flex flex-col items-center justify-center text-center mb-10 border-b border-[#171817]/15 pb-8">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#DE1D25]">
            INTERIOR DESIGN PORTFOLIO
          </span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#171817] tracking-wider">
            GALLERY
          </h2>
          <p className="mt-3 max-w-xl text-xs sm:text-sm text-[#171817]/70 leading-relaxed font-light">
            Curated archive of bespoke luxury residences, spatial interiors, and fine joinery.
          </p>

          {/* CATEGORY FILTER TABS (FULL GALLERY PAGE ONLY) */}
          {isFullPage && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 text-[10px] uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-xs cursor-pointer border ${
                      isActive
                        ? "border-[#171817] bg-[#171817] text-[#F3EFE7] shadow-md"
                        : "border-[#171817]/20 bg-white/50 text-[#171817]/70 hover:border-[#171817]/60 hover:text-[#171817] hover:bg-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* HOMEPAGE GALLERY: UNIFORM ONE-SIZE GRID */}
        {!isFullPage ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedLightboxItem(item)}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-xs border border-[#171817]/15 bg-white transition-all duration-500 hover:border-[#DE1D25]/70 hover:shadow-xl cursor-pointer"
              >
                {/* Equal 4:3 Aspect Image */}
                <img
                  src={item.image}
                  alt="Callisto Living Gallery"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  loading={index < 4 ? "eager" : "lazy"}
                />

                {/* Minimal Clean Hover Overlay — NO TEXT TITLE OVERLAY */}
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-[#171817]/90 text-[#F3EFE7] backdrop-blur-md border border-white/20 transform scale-80 transition-transform duration-300 group-hover:scale-100 shadow-xl">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* ONLY ON /GALLERY PAGE: ELEGANT STAGGERED MASONRY COLUMN LAYOUT */
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
            {displayedItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelectedLightboxItem(item)}
                className="break-inside-avoid mb-6 w-full group relative overflow-hidden rounded-xs border border-[#171817]/15 bg-white transition-all duration-500 hover:border-[#DE1D25]/70 hover:shadow-2xl cursor-pointer"
              >
                {/* Natural Aspect Image for True Masonry Flow */}
                <img
                  src={item.image}
                  alt="Callisto Living Gallery"
                  className="w-full h-auto block object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  loading={index < 8 ? "eager" : "lazy"}
                />

                {/* Minimal Clean Hover Overlay — NO TEXT TITLE OVERLAY */}
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-[#171817]/90 text-[#F3EFE7] backdrop-blur-md border border-white/20 transform scale-80 transition-transform duration-300 group-hover:scale-100 shadow-xl">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* REDIRECT TO /GALLERY BUTTON (ON MAIN HOMEPAGE) */}
        {!isFullPage && (
          <div className="mt-12 text-center">
            <a
              href="/gallery"
              className="inline-flex items-center gap-3 border border-[#171817] bg-[#171817] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#F3EFE7] transition-all hover:bg-[#DE1D25] hover:border-[#DE1D25] hover:text-white cursor-pointer shadow-lg"
            >
              <span>EXPLORE FULL INTERIOR DESIGN GALLERY ({GALLERY_ITEMS.length - 4} MORE) →</span>
            </a>
          </div>
        )}

        {/* LIGHTBOX MODAL INTEGRATION */}
        <GalleryLightbox
          item={selectedLightboxItem}
          items={GALLERY_ITEMS}
          onClose={() => setSelectedLightboxItem(null)}
          onSelect={(item) => setSelectedLightboxItem(item)}
          {...(onEnquire ? { onEnquire } : {})}
        />
      </div>
    </section>
  );
};
