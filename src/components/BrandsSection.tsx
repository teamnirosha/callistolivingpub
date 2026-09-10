import React from "react";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { BrandVectorLogo } from "./HeroTrustAndBrands";

interface BrandsSectionProps {
  onEnquire?: () => void;
}

export const BRANDS = [
  {
    name: "Greenply",
    category: "BWP Plywood & Veneers",
    desc: "Boiling water-proof marine plywood engineered for moisture resistance and structural durability.",
    origin: "India",
  },
  {
    name: "Hettich",
    category: "German Hardware & Hinges",
    desc: "World-class German silent soft-close hinges, drawer runners, and kitchen organization systems.",
    origin: "Germany",
  },
  {
    name: "Pidilite",
    category: "Adhesives & Wood Finishes",
    desc: "Industry-standard Fevicol Marine adhesives, wood preservatives, and eco-friendly surface bonds.",
    origin: "India",
  },
  {
    name: "Hafele",
    keyName: "Häfele",
    category: "Architectural Hardware",
    desc: "Premium German sliding door mechanisms, wardrobe lifts, and architectural hardware fittings.",
    origin: "Germany",
  },
  {
    name: "Blum",
    category: "Drawer & Lift Systems",
    desc: "Austrian engineered Aventos lift systems and Legrabox metallic drawer slides.",
    origin: "Austria",
  },
  {
    name: "Asian Paints",
    category: "Royale Luxury Emulsions",
    desc: "Teflon-coated washable luxury emulsions, Velvet Touch finishes, and specialty wall textures.",
    origin: "India",
  },
  {
    name: "CenturyPly",
    category: "Veneers & Laminates",
    desc: "ViroKill technology plywood, exotic natural veneers, and fire-retardant interior boards.",
    origin: "India",
  },
  {
    name: "Saint-Gobain",
    category: "Glass & Mirrors",
    desc: "Clear float glass, tinted mirrors, lacquered glass backdrops, and acoustic shower partitions.",
    origin: "France",
  },
  {
    name: "Kajaria",
    category: "Vitrified Slabs & Tiles",
    desc: "Large format porcelain ceramic slabs, Italian marble replica tiles, and anti-skid floor surfaces.",
    origin: "India",
  },
  {
    name: "Kohler",
    category: "Luxury Sanitaryware",
    desc: "Precision brass faucets, rain shower columns, and smart wall-hung toilets.",
    origin: "USA",
  },
  {
    name: "Marshalls",
    category: "Imported Wallpapers",
    desc: "Custom embossed silk wallpapers, vinyl wall coverings, and acoustic fabric wall panels.",
    origin: "UK / Europe",
  },
  {
    name: "Merino",
    category: "Acrylic & Laminates",
    desc: "Anti-fingerprint matte laminates, high-gloss acrylic surfaces, and compact laminates.",
    origin: "India",
  },
];

export const BrandsSection: React.FC<BrandsSectionProps> = ({ onEnquire }) => {
  return (
    <section className="relative py-16 md:py-24 bg-[#FAF8F5] border-b border-[#171817]/15">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.3em] text-[#DE1D25] block mb-2 sm:mb-3">
            WORLD-CLASS MATERIAL PARTNERS
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#171817] tracking-tight">
            Brands & Materials <span className="font-normal text-[#9A8B7A]">We Partner With</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-[#171817]/70 font-normal max-w-2xl mx-auto">
            We collaborate exclusively with certified global and Indian interior brands to ensure uncompromised structural integrity, smooth motion, and luxury finishes.
          </p>
        </div>

        {/* BRANDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl bg-white border border-[#171817]/10 hover:border-[#DE1D25] hover:shadow-[0_12px_30px_rgba(222,29,37,0.1)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Brand Logo Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="py-1">
                    <BrandVectorLogo name={brand.keyName || brand.name} />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#9A8B7A] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#171817]/10">
                    {brand.origin}
                  </span>
                </div>

                {/* Category Badge */}
                <span className="inline-block text-xs font-bold text-[#DE1D25] mb-2">
                  {brand.category}
                </span>

                {/* Description */}
                <p className="text-xs text-[#171817]/70 font-normal leading-relaxed">
                  {brand.desc}
                </p>
              </div>

              {/* Bottom Verification Badge */}
              <div className="mt-5 pt-3 border-t border-[#171817]/5 flex items-center gap-1.5 text-[11px] font-semibold text-[#171817]/80">
                <CheckCircle2 size={14} className="text-[#DE1D25]" />
                <span>100% Certified Brand Partner</span>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM BRAND QUALITY GUARANTEE BANNER */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-[#DE1D25]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#DE1D25]/10 text-[#DE1D25] flex items-center justify-center shrink-0">
              <ShieldCheck size={28} strokeWidth={1.8} />
            </div>
            <div>
              <h4 className="font-sans font-bold text-lg text-[#171817]">
                Only 100% Authentic Branded Materials Specified
              </h4>
              <p className="text-xs text-[#171817]/70 font-normal mt-0.5">
                Every piece of plywood, hinge, and adhesive is QR-verified on delivery to guarantee zero counterfeit materials.
              </p>
            </div>
          </div>
          {onEnquire && (
            <button
              type="button"
              onClick={onEnquire}
              className="shrink-0 px-6 py-3 rounded-full bg-[#DE1D25] text-white font-bold text-xs uppercase tracking-[0.18em] shadow-md hover:bg-[#c21820] transition-all cursor-pointer"
            >
              Request Material Sample Kit
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
