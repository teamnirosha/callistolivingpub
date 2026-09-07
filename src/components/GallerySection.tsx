import React, { useState, useMemo } from "react";
import { Maximize2 } from "lucide-react";
import { GALLERY_ITEMS, HOMEPAGE_GALLERY_ITEMS, GalleryItem } from "@/lib/galleryData";
import { GalleryLightbox } from "./GalleryLightbox";

interface GallerySectionProps {
  onEnquire?: () => void;
  isFullPage?: boolean;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onEnquire, isFullPage = false }) => {
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<GalleryItem | null>(null);

  // On homepage (isFullPage=false): show 4 curated items. On /gallery (isFullPage=true): show all 61 items.
  const displayedItems = useMemo(() => {
    if (isFullPage) return GALLERY_ITEMS;
    return HOMEPAGE_GALLERY_ITEMS;
  }, [isFullPage]);

  return (
    <section id="gallery" className="relative bg-[#171817] py-14 sm:py-20 text-[#F3EFE7]">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        {/* SECTION HEADING */}
        <div className="flex flex-col items-center justify-center text-center mb-10 border-b border-white/10 pb-6">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#DE1D25]">
            ARCHITECTURAL PORTFOLIO
          </span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#F3EFE7] tracking-wider">
            GALLERY
          </h2>
        </div>

        {/* UNIFORM EQUAL-SIZE GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedLightboxItem(item)}
              className="group relative aspect-[4/3] w-full overflow-hidden rounded-xs border border-white/10 bg-[#222] transition-all duration-500 hover:border-[#DE1D25]/60 hover:shadow-2xl cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt="Callisto Gallery Atelier"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-1.06"
                loading={index < 4 ? "eager" : "lazy"}
              />

              {/* Minimal Hover Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-black/70 text-white backdrop-blur-md border border-white/30 transform scale-90 transition-transform duration-300 group-hover:scale-100 shadow-xl">
                  <Maximize2 size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* REDIRECT TO /GALLERY BUTTON (ON MAIN HOMEPAGE) */}
        {!isFullPage && (
          <div className="mt-10 text-center">
            <a
              href="/gallery"
              className="inline-flex items-center gap-3 border border-[#DE1D25] bg-[#DE1D25]/10 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#F3EFE7] transition-all hover:bg-[#DE1D25] hover:text-white cursor-pointer shadow-lg"
            >
              <span>SHOW MORE GALLERY ({GALLERY_ITEMS.length - 4} MORE) →</span>
            </a>
          </div>
        )}

        {/* LIGHTBOX MODAL INTEGRATION */}
        <GalleryLightbox
          item={selectedLightboxItem}
          items={GALLERY_ITEMS}
          onClose={() => setSelectedLightboxItem(null)}
          onSelect={(item) => setSelectedLightboxItem(item)}
          onEnquire={onEnquire}
        />
      </div>
    </section>
  );
};
