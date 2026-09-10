import React from "react";

// Brand Logo Vector Renderer - 100% Reliable Vector Graphics
export const BrandVectorLogo = ({ name }: { name: string }) => {
  switch (name) {
    case "Greenply":
      return (
        <svg viewBox="0 0 180 50" className="h-8 sm:h-10 w-auto">
          <path d="M 12 34 C 4 24, 6 12, 16 10 C 22 8, 28 12, 30 18 C 34 10, 42 8, 48 12 C 56 18, 54 32, 44 38 L 30 46 Z" fill="#00833E" />
          <path d="M 30 18 L 30 44" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <text x="58" y="34" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="900" fontSize="22" fill="#00833E" letterSpacing="-0.5">Greenply</text>
        </svg>
      );
    case "Hettich":
      return (
        <svg viewBox="0 0 160 50" className="h-8 sm:h-10 w-auto">
          <rect x="4" y="8" width="152" height="34" rx="4" fill="#004B93" />
          <text x="80" y="32" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontStyle="italic" fontSize="22" fill="#FFFFFF" textAnchor="middle">Hettich</text>
        </svg>
      );
    case "Pidilite":
      return (
        <svg viewBox="0 0 160 50" className="h-8 sm:h-10 w-auto">
          <circle cx="22" cy="25" r="14" fill="#362D83" />
          <path d="M 22 13 C 28 13 32 18 32 25 C 32 32 22 37 22 37 Z" fill="#F37023" />
          <circle cx="22" cy="25" r="5" fill="#FFFFFF" />
          <text x="44" y="33" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="22" fill="#362D83">Pidilite</text>
        </svg>
      );
    case "Häfele":
    case "Hafele":
      return (
        <svg viewBox="0 0 160 50" className="h-8 sm:h-10 w-auto">
          <rect x="4" y="8" width="152" height="34" fill="#D8232A" rx="2" />
          <text x="80" y="31" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="900" fontSize="20" fill="#FFFFFF" textAnchor="middle" letterSpacing="3">HÄFELE</text>
        </svg>
      );
    case "Blum":
      return (
        <svg viewBox="0 0 140 50" className="h-8 sm:h-10 w-auto">
          <rect x="4" y="10" width="132" height="30" fill="#FF5500" rx="2" />
          <text x="70" y="32" fontFamily="Arial Black, Impact, sans-serif" fontWeight="900" fontSize="23" fill="#FFFFFF" textAnchor="middle">blum</text>
        </svg>
      );
    case "Asian Paints":
      return (
        <svg viewBox="0 0 190 50" className="h-8 sm:h-10 w-auto">
          <path d="M 10 36 L 20 12 L 30 36 L 24 36 L 20 24 L 16 36 Z" fill="#E31B23" />
          <circle cx="20" cy="8" r="4" fill="#FFC20E" />
          <text x="36" y="33" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="800" fontSize="21" fill="#E31B23" letterSpacing="-0.5">asianpaints</text>
        </svg>
      );
    case "CenturyPly":
      return (
        <svg viewBox="0 0 190 50" className="h-8 sm:h-10 w-auto">
          <rect x="4" y="7" width="28" height="36" fill="#003B7A" rx="3" />
          <text x="18" y="32" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="22" fill="#E31B23" textAnchor="middle">C</text>
          <text x="38" y="32" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="900" fontSize="19" fill="#003B7A" letterSpacing="0.5">CENTURYPLY</text>
        </svg>
      );
    case "Saint-Gobain":
      return (
        <svg viewBox="0 0 200 50" className="h-8 sm:h-10 w-auto">
          <path d="M 6 36 C 6 18, 30 18, 30 36" fill="none" stroke="#002D62" strokeWidth="5" strokeLinecap="round" />
          <path d="M 12 36 C 12 24, 24 24, 24 36" fill="none" stroke="#E30613" strokeWidth="3" strokeLinecap="round" />
          <text x="38" y="32" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="900" fontSize="17" fill="#002D62" letterSpacing="1">SAINT-GOBAIN</text>
        </svg>
      );
    case "Kajaria":
      return (
        <svg viewBox="0 0 160 50" className="h-8 sm:h-10 w-auto">
          <rect x="4" y="10" width="28" height="28" fill="#C8102E" rx="3" />
          <text x="18" y="30" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="18" fill="#FFFFFF" textAnchor="middle">K</text>
          <text x="40" y="32" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="800" fontSize="22" fill="#171817">Kajaria</text>
        </svg>
      );
    case "Kohler":
      return (
        <svg viewBox="0 0 160 50" className="h-8 sm:h-10 w-auto">
          <text x="80" y="33" fontFamily="'Plus Jakarta Sans', Helvetica, Arial, sans-serif" fontWeight="900" fontSize="25" fill="#171817" textAnchor="middle" letterSpacing="5">KOHLER</text>
        </svg>
      );
    case "Marshalls":
      return (
        <svg viewBox="0 0 170 50" className="h-8 sm:h-10 w-auto">
          <path d="M 10 14 L 16 26 L 22 14 L 28 26 L 34 14 L 32 34 L 12 34 Z" fill="#B59A57" />
          <text x="40" y="33" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="700" fontSize="22" fill="#171817">Marshalls</text>
        </svg>
      );
    case "Merino":
      return (
        <svg viewBox="0 0 160 50" className="h-8 sm:h-10 w-auto">
          <circle cx="20" cy="25" r="13" fill="#E30613" />
          <polygon points="20,16 25,25 20,34 15,25" fill="#FFFFFF" />
          <text x="40" y="32" fontFamily="'Plus Jakarta Sans', Arial, sans-serif" fontWeight="900" fontSize="22" fill="#E30613">merino</text>
        </svg>
      );
    default:
      return <span className="font-bold text-lg text-[#171817]">{name}</span>;
  }
};

// 12 Unique Interior Material Brand Logos
export const BRAND_LOGOS = [
  { name: "Greenply", category: "Plywood & Veneers" },
  { name: "Hettich", category: "German Hardware" },
  { name: "Pidilite", category: "Adhesives & Finishes" },
  { name: "Häfele", category: "Architectural Fittings" },
  { name: "Blum", category: "Motion Systems" },
  { name: "Asian Paints", category: "Luxury Emulsions" },
  { name: "CenturyPly", category: "Marine Plywood" },
  { name: "Saint-Gobain", category: "Architectural Glass" },
  { name: "Kajaria", category: "Vitrified Slabs" },
  { name: "Kohler", category: "Luxury Bath Fittings" },
  { name: "Marshalls", category: "Imported Wallpapers" },
  { name: "Merino", category: "Acrylic Laminates" },
];

export const HeroTrustAndBrands: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF8F5] border-b border-[#171817]/15 py-10">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
        {/* TRUST METRICS STATS STRIP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center border-b border-[#171817]/10 pb-8">
          <div>
            <p className="font-sans text-3xl sm:text-4xl font-extrabold text-[#DE1D25]">10+ Years</p>
            <p className="text-[10px] sm:text-xs text-[#171817]/75 font-bold uppercase tracking-wider mt-1">MATERIAL WARRANTY</p>
          </div>
          <div>
            <p className="font-sans text-3xl sm:text-4xl font-extrabold text-[#DE1D25]">45 Days</p>
            <p className="text-[10px] sm:text-xs text-[#171817]/75 font-bold uppercase tracking-wider mt-1">GUARANTEED DELIVERY</p>
          </div>
          <div>
            <p className="font-sans text-3xl sm:text-4xl font-extrabold text-[#DE1D25]">100%</p>
            <p className="text-[10px] sm:text-xs text-[#171817]/75 font-bold uppercase tracking-wider mt-1">IN-HOUSE MANUFACTURING</p>
          </div>
          <div>
            <p className="font-sans text-3xl sm:text-4xl font-extrabold text-[#DE1D25]">0%</p>
            <p className="text-[10px] sm:text-xs text-[#171817]/75 font-bold uppercase tracking-wider mt-1">HIDDEN COSTS</p>
          </div>
        </div>

        {/* SMOOTH HORIZONTALLY SCROLLING BRAND LOGO TICKER */}
        <div className="pt-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#DE1D25] animate-ping" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#171817]/80">
              PREMIUM MATERIAL BRANDS WE SPECIFY
            </span>
          </div>

          <div className="relative w-full overflow-hidden">
            {/* Gradient Fades for Edges */}
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />

            {/* Seamless Infinite Marquee Track */}
            <div className="animate-marquee-smooth flex items-center gap-10 sm:gap-14 md:gap-16">
              {[...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, idx) => (
                <div
                  key={`${brand.name}-${idx}`}
                  className="group shrink-0 flex items-center justify-center py-2 px-3 transition-transform duration-300 hover:scale-110 cursor-pointer"
                  title={`${brand.name} — ${brand.category}`}
                >
                  <BrandVectorLogo name={brand.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
